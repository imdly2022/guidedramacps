"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import type { Language } from "../content";
import { macroRows, sagaAutoLabels, sagaLanguageOrder, sagaLocales } from "./content";
import { linkParameterGuides, linkRuleGuides } from "./link-parameters";
import SiteSearch, { SearchShortcut } from "../site-search";
import { faqLabels } from "../faq/content";

const manualLanguageKey = "dramacps-guide-manual-language-v1";
const sampleLink = "https://r.reelsgo.tv/fTmQ6C8FZn0k";
const customClickLink = `${sampleLink}?click_id=YOUR_CLICK_ID`;
const targetTemplate = "https://partner.example/track?cid={click_id}&order={transaction_id}&event={event}&status={status}&amount={amount}&payout={payout}&currency={currency}&time={event_time}";
const completeTemplate = "https://partner.example/track?cid={click_id}&order={transaction_id}&event={event}&amount={amount}&currency={currency}&time={event_time}";
const resolvedRequest = "GET https://partner.example/track?cid=DCP_202608210001&order=ORDER889900&event=purchase&amount=29.99&currency=USD&time=2026-08-21T12%3A30%3A00Z\nUser-Agent: DramaCPS-S2S-Forwarder/1.0";
const receiverResponse = "HTTP/1.1 200 OK\nContent-Type: application/json\n\n{\"success\":true}";
const sectionIds = ["promotion-link", "click-id", "postback", "delivery", "variables", "example", "notes"];

function detectBrowserLanguage(): Language {
  const languages = navigator.languages?.length ? navigator.languages : [navigator.language];
  for (const browserLanguage of languages) {
    const code = browserLanguage.toLowerCase();
    if (code === "zh" || code.startsWith("zh-")) return "zh";
    if (code === "pt" || code.startsWith("pt-")) return "pt";
    if (code === "es" || code.startsWith("es-")) return "es";
    if (code === "en" || code.startsWith("en-")) return "en";
  }
  return "en";
}

function CodeBlock({ value, label, copyLabel, copiedLabel }: { value: string; label?: string; copyLabel: string; copiedLabel: string }) {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    await navigator.clipboard.writeText(value);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1600);
  };
  return (
    <div className="saga-code-wrap">
      <div className="saga-code-head">
        <span>{label ?? "URL"}</span>
        <button type="button" onClick={copy}>{copied ? copiedLabel : copyLabel}</button>
      </div>
      <pre><code>{value}</code></pre>
    </div>
  );
}

export default function SagaBoxGuide() {
  const [language, setLanguage] = useState<Language>("zh");
  const [automaticLanguage, setAutomaticLanguage] = useState(true);
  const [active, setActive] = useState(sectionIds[0]);
  const content = sagaLocales[language];
  const parameterGuide = linkParameterGuides[language];
  const linkRuleGuide = linkRuleGuides[language];

  useEffect(() => {
    const requested = new URLSearchParams(window.location.search).get("lang");
    const saved = requested && requested in sagaLocales ? requested : window.localStorage.getItem(manualLanguageKey);
    const manual = saved !== null && saved in sagaLocales;
    const frame = window.requestAnimationFrame(() => {
      setLanguage(manual ? saved as Language : detectBrowserLanguage());
      setAutomaticLanguage(!manual);
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
      let current = sectionIds[0];
      for (const id of sectionIds) {
        const node = document.getElementById(id);
        if (node && node.getBoundingClientRect().top <= 150) current = id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const changeLanguage = (next: Language | "auto") => {
    const url = new URL(window.location.href);
    if (next === "auto") url.searchParams.delete("lang");
    else url.searchParams.set("lang", next);
    window.history.replaceState(null, "", url);
    if (next === "auto") {
      window.localStorage.removeItem(manualLanguageKey);
      setAutomaticLanguage(true);
      setLanguage(detectBrowserLanguage());
    } else {
      window.localStorage.setItem(manualLanguageKey, next);
      setAutomaticLanguage(false);
      setLanguage(next);
    }
  };

  return (
    <main className="saga-page">
      <header className="saga-topbar">
        <Link className="brand" href="/">
          <span className="brand-mark">D</span>
          <span><strong>DramaCPS</strong><small>{content.ui.brandSub}</small></span>
        </Link>
        <div className="saga-header-actions">
          <Link className="saga-back" href={`/?lang=${language}`}><span>←</span>{content.ui.back}</Link>
          <SearchShortcut language={language} />
          <select className="language" value={automaticLanguage ? "auto" : language} onChange={(event) => changeLanguage(event.target.value as Language | "auto")} aria-label="Language">
            <option value="auto">{sagaAutoLabels[language]}</option>
            {sagaLanguageOrder.map((code) => <option value={code} key={code}>{sagaLocales[code].label}</option>)}
          </select>
        </div>
      </header>

      <section className="saga-hero">
        <div className="saga-hero-grid" aria-hidden="true" />
        <div className="saga-hero-inner">
          <div className="saga-kicker">{content.ui.kicker}</div>
          <h1>{content.ui.title}</h1>
          <p>{content.ui.intro}</p>
          <a className="saga-direct-badge" href="#promotion-link"><span>↓</span>{content.ui.directBadge}</a>
          <a className="faq-navigation-link" href={`/faq?lang=${language}`}>{faqLabels[language].entry} →</a>
          <SiteSearch key={language} language={language} />
        </div>
      </section>

      <div className="saga-shell">
        <aside className="saga-toc">
          <span>{content.ui.contents}</span>
          <nav>
            {content.nav.map((item, index) => (
              <a className={active === sectionIds[index] ? "active" : ""} href={`#${sectionIds[index]}`} key={sectionIds[index]}>
                <b>{String(index + 1).padStart(2, "0")}</b>{item}
              </a>
            ))}
          </nav>
          <a className="saga-support" href="mailto:support@dramacps.com">{content.ui.support}</a>
        </aside>

        <article className="saga-article">
          <section className="saga-doc-section" id="promotion-link">
            <div className="saga-section-label">01</div>
            <div>
              <h2>{content.sections.link.title}</h2>
              {content.sections.link.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              <CodeBlock value={sampleLink} label="SagaBox Promotion URL" copyLabel={content.ui.copy} copiedLabel={content.ui.copied} />
              <ul className="saga-checks">{content.sections.link.bullets.map((item) => <li key={item}><span>✓</span>{item}</li>)}</ul>
              <div className="saga-notice"><b>{content.ui.important}</b><p>{content.sections.link.note}</p></div>
              <div className="saga-link-guide">
                <h3>{linkRuleGuide.title}</h3>
                <p>{linkRuleGuide.intro}</p>
                <dl className="saga-faq-list">
                  {linkRuleGuide.items.map((item) => <div key={item.question}><dt>{item.question}</dt><dd>{item.answer}</dd></div>)}
                </dl>
                <div className="saga-notice warning"><b>{content.ui.important}</b><p>{linkRuleGuide.note}</p></div>
              </div>
            </div>
          </section>

          <section className="saga-doc-section" id="click-id">
            <div className="saga-section-label">02</div>
            <div>
              <h2>{content.sections.tracking.title}</h2>
              {content.sections.tracking.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              <div id="link-parameters" style={{ scrollMarginTop: 96 }}>
                <h3>{parameterGuide.title}</h3>
                <p>{parameterGuide.intro}</p>
                {parameterGuide.groups.map((group) => (
                  <div key={group.title}>
                    <h3>{group.title}</h3>
                    <ul className="saga-checks">
                      {group.items.map((item) => (
                        <li key={item.name}><span>✓</span><div>
                          <code>{item.name}</code>
                          {item.alias && <> · {parameterGuide.aliasLabel}: <code>{item.alias}</code></>}
                          <div>{item.description}</div>
                        </div></li>
                      ))}
                    </ul>
                  </div>
                ))}
                <div className="saga-notice"><b>Postback · SagaBox → DramaCPS</b><p>{parameterGuide.forwarding}</p></div>
                <p>{parameterGuide.boundary}</p>
              </div>
              <h3>{content.sections.tracking.manualTitle}</h3>
              <p>{content.sections.tracking.manualText}</p>
              <CodeBlock value={customClickLink} label="URL + click_id" copyLabel={content.ui.copy} copiedLabel={content.ui.copied} />
              <div className="saga-notice warning"><b>{content.ui.important}</b><p>{content.sections.tracking.note}</p></div>
            </div>
          </section>

          <section className="saga-doc-section" id="postback">
            <div className="saga-section-label">03</div>
            <div>
              <h2>{content.sections.postback.title}</h2>
              {content.sections.postback.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              <div className="saga-config-card">
                <dl>
                  <div><dt>{content.sections.postback.labels.publisher}</dt><dd><code>10001</code></dd></div>
                  <div><dt>{content.sections.postback.labels.matchField}</dt><dd><code>event</code></dd></div>
                  <div><dt>{content.sections.postback.labels.matchValue}</dt><dd><code>purchase</code></dd></div>
                  <div><dt>{content.sections.postback.labels.target}</dt><dd><code>{targetTemplate}</code></dd></div>
                </dl>
              </div>
              <h3>{content.sections.postback.rulesTitle}</h3>
              <div className="saga-rule-grid">{content.sections.postback.rules.map((rule) => <div key={rule[0]}><code>{rule[0]}</code><span>{rule[1]}</span></div>)}</div>
              <div className="saga-notice"><b>event</b><p>{content.sections.postback.eventNote}</p></div>
              <div className="saga-notice"><b>{"{field_name}"}</b><p>{content.sections.postback.variableNote}</p></div>
            </div>
          </section>

          <section className="saga-doc-section" id="delivery">
            <div className="saga-section-label">04</div>
            <div>
              <h2>{content.sections.delivery.title}</h2>
              <ul className="saga-checks">{content.sections.delivery.bullets.map((item) => <li key={item}><span>✓</span>{item}</li>)}</ul>
            </div>
          </section>

          <section className="saga-doc-section" id="variables">
            <div className="saga-section-label">05</div>
            <div>
              <h2>{content.sections.variables.title}</h2>
              <p>{content.sections.variables.intro}</p>
              <div className="saga-table-wrap saga-macro-table"><table><thead><tr><th>{content.ui.field}</th><th>{content.ui.description}</th></tr></thead><tbody>
                {macroRows.map((row) => <tr key={row.key}><td><code>{`{${row.key}}`}</code></td><td>{row.descriptions[language]}</td></tr>)}
              </tbody></table></div>
            </div>
          </section>

          <section className="saga-doc-section" id="example">
            <div className="saga-section-label">06</div>
            <div>
              <h2>{content.sections.example.title}</h2>
              <p>{content.sections.example.intro}</p>
              <CodeBlock value={completeTemplate} label={content.ui.configuredTemplate} copyLabel={content.ui.copy} copiedLabel={content.ui.copied} />
              <CodeBlock value={resolvedRequest} label={content.ui.resolvedRequest} copyLabel={content.ui.copy} copiedLabel={content.ui.copied} />
              <h3>{content.sections.example.receiverTitle}</h3>
              <p>{content.sections.example.receiverText}</p>
              <CodeBlock value={receiverResponse} label={content.ui.responseExample} copyLabel={content.ui.copy} copiedLabel={content.ui.copied} />
            </div>
          </section>

          <section className="saga-doc-section" id="notes">
            <div className="saga-section-label">07</div>
            <div>
              <h2>{content.sections.notes.title}</h2>
              <ul className="saga-checks saga-final-checks">{content.sections.notes.bullets.map((item) => <li key={item}><span>!</span>{item}</li>)}</ul>
            </div>
          </section>

          <footer className="saga-footer"><span>{content.ui.footer}</span><a href="mailto:support@dramacps.com">support@dramacps.com</a></footer>
        </article>
      </div>
    </main>
  );
}
