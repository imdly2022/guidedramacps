export type SearchDocument = { title: string; text: string; href: string; source: string };
export function flattenText(value: unknown): string;
export function searchDocuments(documents: SearchDocument[], query: string): (SearchDocument & { score: number })[];
export function excerpt(text: string, query: string): string;
