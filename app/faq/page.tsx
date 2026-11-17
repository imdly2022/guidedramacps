"use client";

import { Fragment, useEffect, useState } from "react";
import { languageOrder, locales, type Language } from "../content";
import { sagaAutoLabels } from "../sagabox/content";
import SiteSearch, { SearchShortcut } from "../site-search";
import { faqLabels, faqLocales } from "./content";

const preferenceKey = "dramacps-guide-manual-language-v1";
function detectLanguage(): Language {
  for (const value of navigator.languages?.length ? navigator.languages : [navigator.language]) {
    const prefix = value.toLowerCase().split("-")[0];
    if (languageOrder.includes(prefix as Language)) return prefix as Language;
  }
  return "en";
}

function Inline({ text }: { text: string }) {
  return <>{text.split(/(\*\*[^*]+\*\*|`[^`]+`|https:\/\/dramacps\.com|support@dramacps\.com)/g).map((part, index) => {
    if (part.startsWith("**")) return <strong key={index}>{part.slice(2, -2)}</strong>;
    if (part.startsWith("`")) return <code key={index}>{part.slice(1, -1)}</code>;
    if (part === "https://dramacps.com") return <a key={index} href={part} target="_blank" rel="noreferrer">{part}</a>;
    if (part === "support@dramacps.com") return <a key={index} href={`mailto:${part}`}>{part}</a>;
    return <Fragment key={index}>{part}</Fragment>;
  })}</>;
}

function Answer({ text }: { text: string }) {
  return <div className="faq-answer">{text.split(/\n\s*\n/).map((block, index) => {
    const lines = block.split("\n");
    if (lines.every((line) => line.startsWith("- "))) return <ul key={index}>{lines.map((line, i) => <li key={i}><Inline text={line.slice(2)} /></li>)}</ul>;
    if (lines.every((line) => /^\d+\. /.test(line))) return <ol key={index}>{lines.map((line, i) => <li key={i}><Inline text={line.replace(/^\d+\. /, "")} /></li>)}</ol>;
    return <p key={index}><Inline text={block} /></p>;
  })}</div>;
}

export default function FaqPage() {
  const [language, setLanguage] = useState<Language>("zh");
  const [automatic, setAutomatic] = useState(true);
  const [copied, setCopied] = useState<number | null>(null);
  const [copyFailed, setCopyFailed] = useState<number | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const content = faqLocales[language];
  const labels = faqLabels[language];

  useEffect(() => {
    const requested = new URLSearchParams(location.search).get("lang");
    let saved: string | null = null;
    try { saved = localStorage.getItem(preferenceKey); } catch { /* Browser preference storage can be disabled. */ }
    const selected = requested && languageOrder.includes(requested as Language) ? requested : saved;
    const manual = !!selected && languageOrder.includes(selected as Language);
    const frame = requestAnimationFrame(() => { setLanguage(manual ? selected as Language : detectLanguage()); setAutomatic(!manual); });
    return () => cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    document.documentElement.lang = locales[language].htmlLang;
    document.title = `${labels.title} · 80 FAQ`;
    const frame = requestAnimationFrame(() => {
      if (location.hash) document.getElementById(location.hash.slice(1))?.scrollIntoView({ behavior: "instant", block: "start" });
    });
    return () => cancelAnimationFrame(frame);
  }, [language, labels.title]);

  const changeLanguage = (next: Language | "auto") => {
    const url = new URL(location.href);
    if (next === "auto") url.searchParams.delete("lang"); else url.searchParams.set("lang", next);
    history.replaceState(null, "", url);
    try { if (next === "auto") localStorage.removeItem(preferenceKey); else localStorage.setItem(preferenceKey, next); } catch { /* Keep language switching usable without storage. */ }
    setAutomatic(next === "auto"); setLanguage(next === "auto" ? detectLanguage() : next); setMenuOpen(false);
  };
  const copyLink = async (id: number) => {
    const url = new URL(location.href); url.searchParams.set("lang", language); url.hash = `q${id}`;
    setCopyFailed(null);
    try { await navigator.clipboard.writeText(url.href); setCopied(id); }
    catch { history.replaceState(null, "", url); setCopyFailed(id); }
  };

  return <main className="faq-page" id="top">
    <header className="topbar">
      <a className="brand" href={`/?lang=${language}`}><span className="brand-mark">D</span><span><strong>DramaCPS</strong><small>Publisher FAQ</small></span></a>
      <div className="header-actions">
        <SearchShortcut language={language} />
        <select className="language" aria-label="Language" value={automatic ? "auto" : language} onChange={(event) => changeLanguage(event.target.value as Language | "auto")}><option value="auto">{sagaAutoLabels[language]}</option>{languageOrder.map((value) => <option key={value} value={value}>{locales[value].label}</option>)}</select>
        <button className="menu-button" aria-label={labels.categories} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}><span /><span /><span /></button>
      </div>
    </header>
    <section className="hero faq-hero"><div className="hero-inner">
      <div className="eyebrow"><span />DRAMACPS · PUBLISHER FAQ</div>
      <h1>{labels.title}</h1><p>{labels.intro}</p>
      <div className="hero-actions"><a className="secondary" href={`/?lang=${language}`}>← {labels.home}</a><a className="sagabox-entry" href={`/sagabox?lang=${language}`}>SagaBox →</a><a className="primary" href="#category-1">{labels.browse} ↓</a></div>
      <div className="hero-meta"><span><b>80</b>{labels.questions}</span><span><b>04</b>{labels.languages}</span><span>{labels.date}</span></div>
      <SiteSearch key={language} language={language} />
    </div></section>
    <div className="page-shell faq-shell">
      <aside className={menuOpen ? "sidebar open" : "sidebar"}>
        <div className="sidebar-head"><span>{labels.categories}</span><button aria-label={locales[language].ui.close} onClick={() => setMenuOpen(false)}>×</button></div>
        <nav className="faq-nav">{content.groups.map((group, index) => <a key={index} href={`#category-${index + 1}`} onClick={() => setMenuOpen(false)}><span>{String(index + 1).padStart(2, "0")}</span><div>{group.title}<small>Q{group.questions[0].id}–Q{group.questions.at(-1)?.id}</small></div></a>)}<a href="#important" onClick={() => setMenuOpen(false)}>{labels.notes}</a></nav>
        <a className="saga-support" href="mailto:support@dramacps.com">support@dramacps.com</a>
      </aside>
      <article className="faq-content">
        {content.groups.map((group, index) => <section className="faq-category" id={`category-${index + 1}`} key={index}>
          <div className="faq-category-heading"><span>{String(index + 1).padStart(2, "0")}</span><h2>{group.title}</h2><small>{group.questions.length}</small></div>
          {group.questions.map((item) => <section className="faq-question" id={`q${item.id}`} key={item.id}>
            <div className="faq-question-heading"><a className="faq-number" href={`#q${item.id}`} aria-label={`Q${item.id}`}>Q{item.id}</a><h3>{item.question}</h3></div>
            <Answer text={item.answer} />
            <button className="faq-copy" onClick={() => copyLink(item.id)}>{copyFailed === item.id ? labels.failed : copied === item.id ? labels.copied : labels.copy} ↗</button>
          </section>)}
        </section>)}
        <section className="faq-important" id="important"><h2>{labels.notes}</h2><Answer text={content.notes} /></section>
        <footer><span>© 2026 DramaCPS · {labels.date}</span><a href="#top">{labels.top} ↑</a></footer>
      </article>
    </div>
    {menuOpen && <button className="scrim" onClick={() => setMenuOpen(false)} aria-label={locales[language].ui.close} />}
  </main>;
}
