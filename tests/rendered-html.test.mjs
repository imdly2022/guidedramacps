import assert from "node:assert/strict";
import test from "node:test";
import { readFile } from "node:fs/promises";
import { flattenText, searchDocuments, excerpt } from "../app/search-utils.mjs";

const developmentPreviewMeta =
  /<meta(?=[^>]*\bname=["']codex-preview["'])(?=[^>]*\bcontent=["']development["'])[^>]*>/i;

test("renders the complete guide and prominent search without development metadata", async () => {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  const response = await worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );

  assert.equal(response.status, 200);
  assert.match(
    response.headers.get("content-type") ?? "",
    /^text\/html\b/i,
  );
  const html = await response.text();
  assert.doesNotMatch(html, /\/workspace\/sites\//, "font URLs must not contain a build-machine path");
  const fontPaths = [...html.matchAll(/href="([^"]+\.woff2)"/g)].map((match) => match[1]);
  assert.ok(fontPaths.length > 0, "self-hosted fonts are preloaded");
  for (const path of new Set(fontPaths)) {
    assert.ok(path.startsWith("/assets/_vinext_fonts/"));
    const font = await readFile(new URL(`../dist/client${path}`, import.meta.url));
    assert.ok(font.byteLength > 0, `font asset is packaged: ${path}`);
  }
  assert.doesNotMatch(html, developmentPreviewMeta);
  assert.match(html, /id="guide-search"/);
  assert.match(html, /搜索全部指南/);
  assert.match(html, /历史参考/);
  assert.doesNotMatch(html, /45%–80%/);
  assert.match(html, /更新于 2026 年 10 月/);
  assert.match(html, /公开平台级 CPS 比例/);
  assert.match(html, /API、Sub ID 与 Postback/);
  assert.match(html, /最低提现金额为 100 美元/);
});

test("renders the standalone SagaBox guide with tracking and Postback details", async () => {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}-sagabox`);
  const { default: worker } = await import(workerUrl.href);
  const response = await worker.fetch(
    new Request("http://localhost/sagabox", { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
  const html = await response.text();
  assert.equal(response.status, 200);
  assert.match(html, /SagaBox/);
  assert.match(html, /fTmQ6C8FZn0k/);
  assert.match(html, /click_id/);
  assert.match(html, /transaction_id/);
  assert.match(html, /request_id/);
  assert.match(html, /DramaCPS-S2S-Forwarder\/1\.0/);
  assert.match(html, /网页型 Offer/);
  assert.match(html, /不需要先下载 App/);
  assert.match(html, /id="guide-search"/);
  assert.match(html, /不要按 click_id 去重/);
});

test("search supports nested parameter aliases, multiple terms, case and empty states", () => {
  const documents = [
    {title:"Tracking parameters",text:flattenText({groups:[{items:[{name:"click_id",alias:"clickid"},{name:"gbraid"}]}]}),href:"/sagabox#click-id",source:"SagaBox"},
    {title:"App Home URL",text:"Home link and Drama URL",href:"/#materials-links",source:"Guide"},
  ];
  assert.equal(searchDocuments(documents, "CLICKID")[0].href, "/sagabox#click-id");
  assert.equal(searchDocuments(documents, " click_id  gbraid ").length, 1);
  assert.equal(searchDocuments(documents, "App Home URL")[0].title, "App Home URL");
  assert.deepEqual(searchDocuments(documents, "   "), []);
  assert.deepEqual(searchDocuments(documents, "not-present"), []);
  assert.deepEqual(searchDocuments(documents, "[.*"), []);
  assert.match(excerpt("x".repeat(300) + "退款 transaction_id", "退款"), /退款 transaction_id/);
});

test("FAQ includes all 80 questions, complete translations and the important notes", async () => {
  const chinese = JSON.parse(await readFile(new URL("../app/faq/zh.json", import.meta.url), "utf8"));
  const questions = chinese.groups.flatMap((group) => group.questions);
  assert.equal(chinese.groups.length, 9);
  assert.deepEqual(questions.map((q) => q.id), Array.from({ length: 80 }, (_, i) => i + 1));
  for (const language of ["en", "pt", "es"]) {
    const entries = JSON.parse(await readFile(new URL(`../app/faq/${language}.json`, import.meta.url), "utf8"));
    assert.equal(entries.length, 80, language);
    assert.ok(entries.every(([question, answer]) => question.length > 5 && answer.length > 30), language);
    for (let i = 0; i < 80; i++) {
      const countItems = (text) => (text.match(/^(?:- |\d+\. )/gm) ?? []).length;
      assert.equal(countItems(entries[i][1]), countItems(questions[i].answer), `${language} Q${i + 1}: every list item must be translated`);
    }
  }
  const { default: worker } = await import(new URL("../dist/server/index.js", import.meta.url));
  const response = await worker.fetch(new Request("http://localhost/faq", { headers: { accept: "text/html" } }), { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } }, { waitUntil() {}, passThroughOnException() {} });
  assert.equal(response.status, 200);
  const html = await response.text();
  for (const { id } of questions) assert.ok(html.includes(`id="q${id}"`), `Q${id} rendered`);
  assert.match(html, /id="important"/);
  assert.match(html, /ShorPeak/);
  assert.match(html, /永久归因/);
  assert.match(html, /付费剧集的内容不允许使用/);
});
