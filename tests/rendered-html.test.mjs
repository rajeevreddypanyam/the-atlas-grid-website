import assert from "node:assert/strict";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", { headers: { accept: "text/html" } }),
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
  assert.match(html, /We don(?:&apos;|&#x27;|')t just fly drones/i);
  assert.match(html, /Topography and CAD models/i);
  assert.match(html, /Canopy and tree-count analysis/i);
  assert.match(html, /The Atlas Grid Solutions Private Limited/i);
  assert.doesNotMatch(html, /12\+.*INDUSTRY APPLICATIONS/i);
  assert.doesNotMatch(html, /2026 TAGS/i);
  assert.match(html, /Project details/);
  assert.match(html, /tags-logo-white\.png/);
  assert.match(html, /hero-aerial-v2\.jpg/);
  assert.match(html, /solar-rgb-v2\.jpg/);
  assert.match(html, /solar-thermal-v2\.jpg/);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape/);
});
