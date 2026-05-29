## Why

The There and Then marketing site works and ships, but a codebase review surfaced gaps in SEO, security, maintainability, and polish that hurt discoverability, trust, and day-to-day development. Addressing these now keeps the site credible for clients and reduces friction before adding more content or features.

## What Changes

- **SEO & discoverability**: Fix stale sitemap (missing live routes, listing redirect-only URLs); add per-page metadata, Open Graph tags, and `robots.txt`; centralize analytics instead of home-page-only GA scripts.
- **Quote API hardening**: Validate and sanitize form input; handle missing `RESEND_API_KEY` and Resend errors; return proper HTTP status codes; document env vars in `.env.example`.
- **Dead code cleanup**: Remove or wire up unused `Footer`, `Card`, `Redirect`, and broken `images.ts` imports (no `public/` assets in repo).
- **Layout & UX**: Add site-wide footer (consistent contact email); mobile-friendly navbar; optional keyboard/touch improvements on home corkboard.
- **Content consistency**: Align `info@` vs `hello@` email; replace About page photo placeholder; add Footer to root layout.
- **Dependencies & docs**: Align `eslint-config-next` with Next 16; move `@types/*` to devDependencies; replace boilerplate README with project-specific setup.
- **Accessibility**: Skip link, focus states audit, form labels/ARIA on quote flow, reduce `user-select: none` where it blocks reading.
- **Developer experience**: Add `openspec/config.yaml` project context; optional CI (lint + build on PR).

## Capabilities

### New Capabilities

- `seo-metadata`: Per-route titles/descriptions, Open Graph, sitemap accuracy, robots.txt
- `quote-api-security`: Input validation, sanitization, error handling, env documentation for `/api/quote`
- `site-chrome`: Shared footer, mobile nav, consistent contact details across pages
- `dead-code-cleanup`: Remove or restore unused components and asset utilities

### Modified Capabilities

_(none — no existing specs in `openspec/specs/`)_

## Impact

- **App routes**: All pages under `src/app/`, especially `layout.tsx`, `sitemap.ts`, redirect routes
- **API**: `src/app/api/quote/route.ts`
- **Components**: `Navbar`, `Footer`, unused `Card`/`Redirect`
- **Config**: `package.json`, `next.config.js`, `openspec/config.yaml`, new `.env.example`
- **Styles**: `global.scss` (navbar mobile, footer, a11y focus)
- **No breaking URL changes** for primary nav; legacy redirect routes remain but drop from sitemap
