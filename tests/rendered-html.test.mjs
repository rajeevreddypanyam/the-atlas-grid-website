import assert from "node:assert/strict";
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
  assert.match(html, /<title>TAGS \| Geospatial Intelligence<\/title>/i);
  assert.match(html, /TAGS/);
  assert.match(html, /Geospatial Intelligence from Ground to Sky/);
  assert.match(html, /Project details/);
  assert.match(html, /tags-logo-white\.png/);
  assert.match(html, /hero-aerial-v2\.jpg/);
  assert.match(html, /solar-rgb-v2\.jpg/);
  assert.match(html, /solar-thermal-v2\.jpg/);
  for (const slug of ["drone-survey", "lidar-mapping", "thermal-inspection", "rtk-ppk", "photogrammetry", "gis-intelligence"]) {
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
    assert.doesNotMatch(html, /href=["'][^"']*\.pdf/i);
  }
});
