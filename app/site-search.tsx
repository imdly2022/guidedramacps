"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import type { Language } from "./content";
import { latestLocales } from "./latest-content";
import { linkTypeGuides } from "./link-types";
import { macroRows, sagaLocales } from "./sagabox/content";
import { linkParameterGuides, linkRuleGuides } from "./sagabox/link-parameters";
import { excerpt, flattenText, searchDocuments } from "./search-utils.mjs";
import { faqSearchDocuments } from "./faq/content";

const labels = {
  zh: { title: "想了解什么？搜索全部指南", help: "搜索 80 条 FAQ、基础教程和 SagaBox 指南，直接跳到答案。", placeholder: "输入关键词，如：链接、佣金、click_id、Postback", search: "搜索", clear: "清除", results: "条相关结果", none: "没有找到相关内容，请尝试更短的关键词。", basic: "基础教程", popular: "常用搜索", terms: ["App Home URL", "Drama URL", "佣金", "click_id", "Postback"] },
  en: { title: "What would you like to know?", help: "Search all 80 FAQs, the main guide and SagaBox guide. Jump straight to an answer.", placeholder: "Search links, commission, click_id, Postback…", search: "Search", clear: "Clear", results: "matching results", none: "No matches. Try a shorter keyword.", basic: "Main guide", popular: "Popular searches", terms: ["App Home URL", "Drama URL", "commission", "click_id", "Postback"] },
  pt: { title: "O que você quer saber?", help: "Pesquise nas 80 perguntas, no guia principal e no SagaBox e vá direto à resposta.", placeholder: "Busque links, comissão, click_id, Postback…", search: "Buscar", clear: "Limpar", results: "resultados encontrados", none: "Nenhum resultado. Tente uma palavra mais curta.", basic: "Guia principal", popular: "Buscas frequentes", terms: ["App Home URL", "Drama URL", "comissão", "click_id", "Postback"] },
  es: { title: "¿Qué te gustaría saber?", help: "Busca en las 80 preguntas, la guía principal y SagaBox y ve directamente a la respuesta.", placeholder: "Busca enlaces, comisión, click_id, Postback…", search: "Buscar", clear: "Borrar", results: "resultados encontrados", none: "Sin resultados. Prueba una palabra más corta.", basic: "Guía principal", popular: "Búsquedas frecuentes", terms: ["App Home URL", "Drama URL", "comisión", "click_id", "Postback"] },
};

export function SearchShortcut({ language }: { language: Language }) {
  return <button className="search-shortcut" onClick={() => {
    document.getElementById("site-search")?.scrollIntoView({ behavior: "smooth", block: "start" });
    document.getElementById("guide-search")?.focus({ preventScroll: true });
  }}><span className="search-icon" aria-hidden="true" />{labels[language].search}</button>;
}

function Highlight({ text, query }: { text: string; query: string }) {
  const terms = query.trim().split(/\s+/).filter(Boolean).sort((a, b) => b.length - a.length);
  if (!terms.length) return <>{text}</>;
  const pattern = new RegExp(`(${terms.map((term) => term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")})`, "gi");
  return <>{text.split(pattern).map((part, index) => terms.some((term) => term.toLocaleLowerCase() === part.toLocaleLowerCase()) ? <mark key={index}>{part}</mark> : part)}</>;
}

export default function SiteSearch({ language }: { language: Language }) {
  const [query, setQuery] = useState("");
  const input = useRef<HTMLInputElement>(null);
  const resultsRef = useRef<HTMLDivElement>(null);
  const copy = labels[language];
  const documents = useMemo(() => {
    const basic = latestLocales[language].sections.map((section) => ({ title: section.title, text: flattenText([section.paragraphs, section.bullets, section.notice?.text, section.id === "materials-links" ? linkTypeGuides[language] : null]), href: `/?lang=${language}#${section.id}`, source: copy.basic }));
    const ids = ["promotion-link", "click-id", "postback", "delivery", "variables", "example", "notes"];
    const saga = Object.entries(sagaLocales[language].sections).map(([key, section], index) => ({ title: section.title, text: flattenText([section, key === "link" ? linkRuleGuides[language] : null, key === "tracking" ? linkParameterGuides[language] : null, key === "variables" ? macroRows.map((row) => [row.key, row.descriptions[language]]) : null]), href: `/sagabox?lang=${language}#${ids[index]}`, source: "SagaBox" }));
    return [...faqSearchDocuments(language), ...basic, ...saga];
  }, [language, copy.basic]);
  const results = useMemo(() => searchDocuments(documents, query), [documents, query]);

  useEffect(() => {
    const keyboard = (event: KeyboardEvent) => {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
        event.preventDefault(); input.current?.focus();
      }
      if (event.key === "Escape" && document.activeElement === input.current) setQuery("");
    };
    window.addEventListener("keydown", keyboard);
    return () => window.removeEventListener("keydown", keyboard);
  }, []);

  return <section className="site-search" id="site-search" aria-labelledby="search-title">
    <h2 id="search-title">{copy.title}</h2>
    <p className="search-help">{copy.help}</p>
    <form role="search" onSubmit={(event) => { event.preventDefault(); resultsRef.current?.focus(); }}>
      <label className="search-input-wrap"><span className="search-icon" aria-hidden="true" /><input id="guide-search" ref={input} type="search" autoComplete="off" value={query} onChange={(event) => setQuery(event.target.value)} placeholder={copy.placeholder} aria-label={copy.title} aria-controls="search-results" /></label>
      <button className="search-submit" type="submit">{copy.search}<span aria-hidden="true"> →</span></button>
    </form>
    <div className="search-topics" aria-label={copy.popular}><span>{copy.popular}</span>{copy.terms.map((term) => <button key={term} onClick={() => { setQuery(term); input.current?.focus({ preventScroll: true }); }}>{term}</button>)}</div>
    <div className="search-results" id="search-results" ref={resultsRef} tabIndex={-1}>
      <div role="status" aria-live="polite">{query.trim() && <div className="search-status"><strong>{results.length} {copy.results}</strong><button onClick={() => { setQuery(""); input.current?.focus(); }}>{copy.clear} ×</button></div>}</div>
      {query.trim() && (results.length ? <ul>{results.map((result) => <li key={result.href}><a href={result.href}><span className="search-source">{result.source}</span><h3><Highlight text={result.title} query={query} /><span aria-hidden="true"> →</span></h3><p><Highlight text={excerpt(result.text, query)} query={query} /></p></a></li>)}</ul> : <p className="search-empty">{copy.none}</p>)}
    </div>
  </section>;
}
