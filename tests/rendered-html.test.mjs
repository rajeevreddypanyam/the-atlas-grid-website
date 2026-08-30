import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

async function render(path = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(new URL(path, "http://localhost"), { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("server-renders TAGS experience", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  const pageSource = await readFile(new URL("../app/page.tsx", import.meta.url), "utf8");
  assert.match(html, /<title>TAGS \| Geospatial Intelligence<\/title>/i);
  assert.match(html, /TAGS/);
  assert.match(html, /Geospatial Intelligence from Ground to Sky/);
  assert.match(html, /We don(?:&apos;|&#x27;|')t just fly drones/i);
  assert.match(html, /Topography and CAD models/i);
  assert.match(pageSource, /Canopy and tree-count analysis/i);
  assert.match(html, /The Atlas Grid Solutions Private Limited/i);
  assert.doesNotMatch(html, /12\+.*INDUSTRY APPLICATIONS/i);
  assert.doesNotMatch(html, /2026 TAGS/i);
  assert.match(html, /Project details/);
  assert.match(html, /tags-logo-white\.png/);
  assert.match(html, /hero-aerial-v2\.jpg/);
  assert.match(html, /solar-rgb-v2\.jpg/);
  assert.match(html, /solar-thermal-v2\.jpg/);
  for (const slug of ["drone-survey", "lidar-mapping", "thermal-inspection", "rtk-ppk", "photogrammetry", "gis-intelligence", "topography-cad-models"]) {
    assert.match(html, new RegExp(`href=["']\\/capabilities\\/${slug}["']`));
  }
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape/);
});

test("server-renders every capability guide", async () => {
  const pages = [
    ["drone-survey", "Drone survey", "Capture record"],
    ["lidar-mapping", "LiDAR mapping", "Classified point cloud"],
    ["thermal-inspection", "Thermal inspection", "Mapped observations"],
    ["rtk-ppk", "RTK / PPK", "Correction method"],
    ["photogrammetry", "Photogrammetry", "Reconstruction"],
    ["gis-intelligence", "GIS intelligence", "Layer structure"],
    ["topography-cad-models", "Topography and CAD models", "Terrain model"],
  ];

  for (const [slug, name, reportTerm] of pages) {
    const response = await render(`/capabilities/${slug}`);
    assert.equal(response.status, 200, `${name} page should render`);
    const html = await response.text();
    assert.match(html, new RegExp(`<title>${name.replace("/", "\\/")} \\| TAGS<\\/title>`, "i"));
    assert.match(html, new RegExp(name.replace("/", "\\/"), "i"));
    assert.match(html, /TYPICAL APPLICATIONS/i);
    assert.match(html, /INSIDE YOUR TAGS REPORT/i);
    assert.match(html, new RegExp(reportTerm, "i"));
    assert.match(html, /Discuss this service/i);
    assert.equal((html.match(/class="deliverable-trigger"/g) ?? []).length, 6, `${name} should render six deliverables`);
    assert.equal((html.match(/class="deliverable-trigger"[^>]+aria-expanded="false"/g) ?? []).length, 6, `${name} deliverables should start closed`);
    assert.equal((html.match(/class="deliverable-detail"/g) ?? []).length, 6, `${name} should render six detail regions`);
    assert.match(html, /aria-controls="[^"]+-deliverable-[1-6]-details"/i);
    assert.doesNotMatch(html, /href=["'][^"']*\.pdf/i);
  }
});

test("all deliverables have unique 60 to 80 word explanations", async () => {
  const source = await readFile(new URL("../app/capability-data.ts", import.meta.url), "utf8");
  const descriptions = [...source.matchAll(/description:\s*"([^"]+)"/g)].map((match) => match[1]);

  assert.equal(descriptions.length, 42);
  assert.equal(new Set(descriptions).size, 42);

  for (const description of descriptions) {
    const wordCount = description.match(/[A-Za-z0-9]+(?:[-'][A-Za-z0-9]+)*/g)?.length ?? 0;
    assert.ok(wordCount >= 60 && wordCount <= 80, `Description has ${wordCount} words: ${description}`);
    assert.doesNotMatch(description, /client name|confidential|guaranteed result/i);
  }
});
