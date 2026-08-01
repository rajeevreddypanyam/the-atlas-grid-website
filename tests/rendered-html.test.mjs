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

test("server-renders The Atlas Grid experience", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>The Atlas Grid \| Aerial Intelligence<\/title>/i);
  assert.match(html, /THE ATLAS GRID/);
  assert.match(html, /Aerial intelligence for decisions/);
  assert.match(html, /SURVEY SCOPE/);
  assert.match(html, /hero-aerial-v2\.jpg/);
  assert.match(html, /solar-rgb-v2\.jpg/);
  assert.match(html, /solar-thermal-v2\.jpg/);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape/);
});
