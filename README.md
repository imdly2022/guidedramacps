# DramaCPS Guide

Complete source for the public DramaCPS publisher guide, migrated from the published Sites version 10 (source commit `0aef9b006171f93e46d053a3c129effc7d3bfb28`).

## Pages and features

- `/`: basic promotion guide, link explanations and operational rules.
- `/sagabox`: standalone SagaBox links, tracking parameters and Postback guide.
- `/faq`: all 80 questions and answers, nine categories and important notes.
- Simplified Chinese, English, Portuguese and Spanish, with automatic browser-language detection and remembered manual preferences.
- Full-text search across the three pages, question anchor links and responsive layouts.

The migration preserves all application content. It changes hosting and deployment configuration only; it does not update business policies or commission terms.

## Development and checks

Requires Node.js 22.13 or newer and Linux (the build scripts use GNU `timeout`).

```sh
npm ci
npm run dev
```

```sh
npm test
npm run deploy:check
```

`npm test` builds the application and checks rendered pages, search, all 80 FAQ entries and translated list completeness. `deploy:check` validates the Cloudflare deployment package without uploading it.

## Cloudflare deployment

Target Worker: `guidedramacps`.

The project uses React, Vinext, Vite and the Cloudflare Vite plugin. The authoritative Worker settings are in `vite.config.ts`; the build generates `dist/server/wrangler.json`. Do not hand-edit that generated file.

```sh
npm run build
npm run deploy
```

Cloudflare Workers Builds can watch this repository's `main` branch with:

| Setting | Value |
| --- | --- |
| Root directory | `/` |
| Build command | `npm test` |
| Deploy command | `npm run deploy` |
| Production branch | `main` |

Deployment credentials belong in Cloudflare's managed build configuration or an authenticated local CLI session. Never commit API tokens or environment files. The site needs no database, R2 bucket or application secret.

The custom domain `guide.dramacps.com` is managed through the Worker's Cloudflare Custom Domains configuration. No manually maintained CNAME to `workers.dev` is required. Domain routing is intentionally managed separately from the first deployment so the previous site keeps serving during migration.

The original Sites source identity and build adapter remain for provenance. The Cloudflare deployment serves the compiled application and its static assets directly; it does not proxy the original ChatGPT site. GitHub changes are the source for the new deployment. Changes to the old Sites project do not automatically synchronize to this repository.

## Content maintenance

- Main guide: `app/content.ts`, `app/editorial-content.ts`, `app/latest-content.ts`, `app/link-types.ts`.
- SagaBox: `app/sagabox/`.
- FAQ: `app/faq/zh.json`, `en.json`, `pt.json`, `es.json`, plus localized labels in `app/faq/content.ts`.
- Shared search: `app/site-search.tsx` and `app/search-utils.mjs`.
- Appearance: `app/globals.css` and `app/readable-theme.css`.

Keep all four languages synchronized when editing content. Optional, unused template integrations and the original starter documentation are preserved under their original source directories and `docs/SITES_STARTER.md`.
