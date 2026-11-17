export function flattenText(value) {
  if (typeof value === "string") return value;
  if (Array.isArray(value)) return value.map(flattenText).join(" ");
  if (value && typeof value === "object") return Object.values(value).map(flattenText).join(" ");
  return "";
}

export function searchDocuments(documents, query) {
  const terms = query.trim().toLocaleLowerCase().split(/\s+/).filter(Boolean);
  if (!terms.length) return [];
  return documents.map((document) => {
    const title = document.title.toLocaleLowerCase();
    const body = document.text.toLocaleLowerCase();
    const score = terms.reduce((total, term) => total + (title.includes(term) ? 8 : 0) + (body.includes(term) ? 1 : 0), 0);
    return { ...document, score };
  }).filter((document) => terms.every((term) => `${document.title} ${document.text}`.toLocaleLowerCase().includes(term)))
    .sort((a, b) => b.score - a.score);
}

export function excerpt(text, query) {
  const terms = query.trim().toLocaleLowerCase().split(/\s+/).filter(Boolean);
  const positions = terms.map((term) => text.toLocaleLowerCase().indexOf(term)).filter((index) => index >= 0);
  const start = Math.max(0, (positions.length ? Math.min(...positions) : 0) - 45);
  return `${start ? "…" : ""}${text.slice(start, start + 210)}${text.length > start + 210 ? "…" : ""}`;
}
