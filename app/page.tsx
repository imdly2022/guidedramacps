"use client";

import { useEffect, useState } from "react";
import { languageOrder, locales, type Language } from "./content";
import { latestLocales } from "./latest-content";
import { linkTypeGuides } from "./link-types";
import SiteSearch, { SearchShortcut } from "./site-search";
import { faqLabels } from "./faq/content";

const manualLanguageKey = "dramacps-guide-manual-language-v1";
const autoLabels: Record<Language, string> = {
  zh: "自动识别",
  en: "Auto-detect",
  pt: "Detectar automaticamente",
  es: "Detectar automáticamente",
};

const sagaBoxLabels: Record<Language, string> = {
  zh: "SagaBox 专用指南",
  en: "SagaBox Guide",
  pt: "Guia SagaBox",
  es: "Guía SagaBox",
};

function detectBrowserLanguage(): Language {
  const browserLanguages = navigator.languages?.length
    ? navigator.languages
    : [navigator.language];

  for (const browserLanguage of browserLanguages) {
    const code = browserLanguage.toLowerCase();
    if (code === "zh" || code.startsWith("zh-")) return "zh";
    if (code === "pt" || code.startsWith("pt-")) return "pt";
    if (code === "es" || code.startsWith("es-")) return "es";
    if (code === "en" || code.startsWith("en-")) return "en";
  }

  return "en";
}

export default function Home() {
  const [language, setLanguage] = useState<Language>("zh");
  const [automaticLanguage, setAutomaticLanguage] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("overview");
  const [progress, setProgress] = useState(0);
  const content = latestLocales[language];

  useEffect(() => {
    const requested = new URLSearchParams(window.location.search).get("lang");
    const savedLanguage = requested && requested in latestLocales ? requested : window.localStorage.getItem(manualLanguageKey);
    const hasManualLanguage = savedLanguage !== null && savedLanguage in latestLocales;
    const nextLanguage = hasManualLanguage
      ? savedLanguage as Language
      : detectBrowserLanguage();
    const frame = window.requestAnimationFrame(() => {
      setLanguage(nextLanguage);
      setAutomaticLanguage(!hasManualLanguage);
    });
    return () => window.cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    document.documentElement.lang = content.htmlLang;
    const frame = requestAnimationFrame(() => {
      const id = window.location.hash.slice(1);
      if (id) document.getElementById(id)?.scrollIntoView({ behavior: "instant", block: "start" });
    });
    return () => cancelAnimationFrame(frame);
  }, [content.htmlLang]);

  useEffect(() => {
    const onScroll = () => {
      const available = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(available > 0 ? Math.min(100, (window.scrollY / available) * 100) : 0);
      let current = content.sections[0]?.id ?? "overview";
      for (const section of content.sections) {
        const node = document.getElementById(section.id);
        if (node && node.getBoundingClientRect().top <= 175) current = section.id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [content.sections]);

  const jump = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setMenuOpen(false);
  };

  const changeLanguage = (next: Language | "auto") => {
    const url = new URL(window.location.href);
    if (next === "auto") url.searchParams.delete("lang");
    else url.searchParams.set("lang", next);
    window.history.replaceState(null, "", url);
    const resolvedLanguage = next === "auto" ? detectBrowserLanguage() : next;
    if (next === "auto") {
      window.localStorage.removeItem(manualLanguageKey);
      setAutomaticLanguage(true);
    } else {
      window.localStorage.setItem(manualLanguageKey, next);
      setAutomaticLanguage(false);
    }
    setLanguage(resolvedLanguage);
    setActive("overview");
    setMenuOpen(false);
  };

  return (
    <main>
      <div className="reading-progress" style={{ width: `${progress}%` }} aria-hidden="true" />

      <header className="topbar">
        <button className="brand brand-button" onClick={() => jump("top")} aria-label="DramaCPS Creator Guide">
          <span className="brand-mark">D</span>
          <span><strong>DramaCPS</strong><small>Creator Guide</small></span>
        </button>
        <div className="header-actions">
          <SearchShortcut language={language} />
          <select className="language" value={automaticLanguage ? "auto" : language} onChange={(event) => changeLanguage(event.target.value as Language | "auto")} aria-label="Language">
            <option value="auto">{autoLabels[language]}</option>
            {languageOrder.map((code) => <option value={code} key={code}>{locales[code].label}</option>)}
          </select>
          <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label={content.ui.menu} aria-expanded={menuOpen}>
            <span /><span /><span />
          </button>
        </div>
      </header>

      <section className="hero" id="top">
        <div className="hero-grid" aria-hidden="true" />
        <div className="orbit orbit-large" aria-hidden="true"><i /></div>
        <div className="orbit orbit-small" aria-hidden="true"><i /></div>
        <div className="hero-inner">
          <div className="eyebrow"><span />{content.ui.official}</div>
          <h1>{content.ui.heroLine1}<br /><em>{content.ui.heroLine2}</em></h1>
          <p>{content.ui.heroText}</p>
          <div className="hero-actions">
            <button className="primary" onClick={() => jump("overview")}>{content.ui.start}<span>↓</span></button>
            <a className="secondary faq-entry" href={`/faq?lang=${language}`}>{faqLabels[language].entry}<span>→</span></a>
            <a className="sagabox-entry" href={`/sagabox?lang=${language}`}>{sagaBoxLabels[language]}<span>→</span></a>
            <a className="secondary" href="https://dramacps.com" target="_blank" rel="noreferrer">{content.ui.visit}<span>↗</span></a>
          </div>
          <div className="hero-meta">
            <span><b>{String(content.sections.length).padStart(2, "0")}</b>{content.ui.chapters}</span>
            <span><b>04</b>{content.ui.languages}</span>
            <span>{content.ui.compliance}</span>
          </div>
          <SiteSearch key={language} language={language} />
        </div>
      </section>

      <div className="page-shell">
        <aside className={menuOpen ? "sidebar open" : "sidebar"}>
          <div className="sidebar-head"><span>{content.ui.contents}</span><button onClick={() => setMenuOpen(false)} aria-label={content.ui.close}>×</button></div>
          <nav>
            <a className="faq-navigation-link" href={`/faq?lang=${language}`}>{faqLabels[language].entry} →</a>
            {content.sections.map((section, index) => (
              <button key={section.id} className={active === section.id ? "active" : ""} onClick={() => jump(section.id)}>
                <span>{String(index + 1).padStart(2, "0")}</span><b>{section.title}</b>
              </button>
            ))}
          </nav>
          <div className="support-card">
            <div className="support-icon">?</div>
            <span>{content.ui.supportTitle}</span>
            <p>{content.ui.supportText}</p>
            <a href="mailto:support@dramacps.com">support@dramacps.com <span>↗</span></a>
          </div>
        </aside>

        <article className="content">
          <div className="content-intro">
            <div><span>{content.ui.knowledge}</span><h2>{content.ui.guideTitle}</h2></div>
            <div><p>{content.ui.guideIntro}</p><small>{content.ui.lastUpdated}</small></div>
          </div>
          {content.sections.map((section) => (
            <section className="guide-section" id={section.id} key={section.id}>
              <div className="section-number">{String(content.sections.findIndex((item) => item.id === section.id) + 1).padStart(2, "0")}</div>
              <div className="section-body">
                <div className="section-kicker">{section.eyebrow}</div>
                <h3>{section.title}</h3>
                {section.paragraphs?.map((paragraph, paragraphIndex) => <p key={`${section.id}-p-${paragraphIndex}`}>{paragraph}</p>)}
                {section.id === "materials-links" && (() => { const guide = linkTypeGuides[language]; return <div className="link-type-guide">
                  <h4>{guide.title}</h4><div className="link-type-grid">{guide.items.map((item) => <section key={item.name}><code>{item.name}</code><dl>
                    <div><dt>{guide.labels.purpose}</dt><dd>{item.purpose}</dd></div><div><dt>{guide.labels.useWhen}</dt><dd>{item.useWhen}</dd></div><div><dt>{guide.labels.result}</dt><dd>{item.result}</dd></div>
                  </dl></section>)}</div><div className="link-choice-tip">{guide.tip}</div><p className="link-type-note">{guide.note}</p></div>; })()}
                {section.bullets && <ul>{section.bullets.map((bullet, bulletIndex) => <li key={`${section.id}-b-${bulletIndex}`}><span>✓</span><div>{bullet}</div></li>)}</ul>}
                {section.notice && <div className={`notice ${section.notice.tone}`}><span>{section.notice.tone === "info" ? "i" : "!"}</span><div><b>{content.ui.important}</b><p>{section.notice.text}</p></div></div>}
              </div>
            </section>
          ))}

          <footer>
            <div className="brand"><span className="brand-mark">D</span><span><strong>DramaCPS</strong><small>Creator Guide</small></span></div>
            <p>© 2026 DramaCPS · {content.ui.footer}</p>
          </footer>
        </article>
      </div>

      <button className={progress > 12 ? "back-top visible" : "back-top"} onClick={() => jump("top")} aria-label={content.ui.backTop}>↑</button>
      {menuOpen && <button className="scrim" onClick={() => setMenuOpen(false)} aria-label={content.ui.close} />}
    </main>
  );
}
