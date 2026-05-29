## Context

There and Then is a Next.js 16 App Router marketing site for a small web/marketing agency. Core pages (`/`, `/services`, `/our-work`, `/about`, `/get-a-quote`) are implemented with a cohesive corkboard visual system. Legacy routes (`/clients`, `/contact-us`, etc.) redirect to canonical pages. The quote funnel posts to `/api/quote` via Resend.

Current pain points from review:

- Sitemap lists redirect-only URLs and omits live routes (`/about`, `/our-work`, `/get-a-quote`).
- Only root `layout.tsx` exports metadata; no OG images or `robots.txt`.
- `Footer` exists but is not rendered; email addresses differ (`info@` vs `hello@`).
- `images.ts` imports missing assets; `Card` and `Redirect` are unused.
- Quote API accepts arbitrary JSON with no validation and embeds raw values in HTML email.
- Navbar has no mobile menu; GA is inlined only on the home page.
- README and dependency versions are stale relative to Next 16.

## Goals / Non-Goals

**Goals:**

- Improve SEO accuracy and social sharing metadata.
- Harden the quote API against bad input and misconfiguration.
- Ship consistent site chrome (footer, nav on small screens, one contact email).
- Remove dead code and document env/setup for contributors.
- Light accessibility wins without redesigning the brand UI.

**Non-Goals:**

- CMS or moving copy out of code.
- Full E2E test suite or visual regression.
- Rebuilding the draggable corkboard (beyond minor a11y tweaks).
- Changing the public domain or brand name (`therenthen.co.uk`).
- Adding rate limiting at the edge (can be a follow-up on Vercel).

## Decisions

### 1. SEO: static metadata exports per page

**Choice:** Add `export const metadata` (or `generateMetadata` if needed) on each primary route; keep a single `metadataBase` in root layout pointing at `https://therenthen.co.uk`.

**Alternatives:** One giant metadata map file — rejected because colocated metadata matches App Router conventions and is easier to maintain per page.

### 2. Sitemap: canonical URLs only

**Choice:** Regenerate `sitemap.ts` to include `/`, `/services`, `/our-work`, `/about`, `/get-a-quote` only. Omit redirect-only paths (they remain for bookmarks but should not be indexed as separate pages).

**Alternatives:** Keep legacy URLs with lower priority — rejected because they duplicate content after redirects.

### 3. Analytics: `@next/third-parties/google`

**Choice:** Move GA from inline `Script` tags on `page.tsx` to `GoogleAnalytics` in root layout (or `@vercel/analytics` only if GA is deprecated — keep GA if still required for existing property `G-W2099BHSNL`).

**Alternatives:** Leave GA on home only — rejected; funnel and conversion tracking need global coverage.

### 4. Quote API: Zod validation + HTML escape

**Choice:** Validate body with Zod (email format, max lengths, required fields). Escape user strings before interpolating into Resend HTML (or use plain-text email). Return `400` for validation errors, `500` for send failures, `503` if API key missing.

**Alternatives:** Resend React Email templates — deferred; escape + simple HTML is sufficient for six fields.

### 5. Site chrome: footer in layout, mobile nav in Navbar

**Choice:** Render `<Footer />` in `layout.tsx` below `{children}`. Extend `Navbar` with a CSS-only or minimal-JS hamburger for viewports under ~768px (match existing SCSS patterns, no new UI library).

**Alternatives:** Duplicate contact block on every page — rejected.

### 6. Dead code: delete unused modules

**Choice:** Delete `Card.tsx`, `Redirect.tsx`, and `images.ts` unless assets are restored. If brand SVGs are planned, add `public/` assets in a separate change.

**Alternatives:** Wire Card into pages — no current design uses it.

### 7. Dependencies: align eslint, tidy package.json

**Choice:** Bump `eslint-config-next` to match Next 16; move `@types/*` to `devDependencies`; add `.env.example` with `RESEND_API_KEY`.

## Risks / Trade-offs

| Risk | Mitigation |
|------|------------|
| Removing sitemap URLs breaks external links | Redirect routes unchanged; only sitemap entries removed |
| Stricter API validation rejects edge-case submissions | Generous max lengths; clear 400 JSON errors for debugging |
| Mobile nav adds JS to Navbar | Keep client component small; test sticky header + menu |
| Deleting `images.ts` if something imports it later | Grep before delete; build must pass |

## Migration Plan

1. Land metadata + sitemap + robots (no user-visible breakage).
2. API validation + `.env.example` (deploy with env var already set on Vercel).
3. Layout footer + navbar mobile + email consistency.
4. Dead code removal + README + package.json.
5. Verify `npm run build` and manual quote submit on preview.

Rollback: revert PR; redirects and routes unchanged.

## Open Questions

- Confirm canonical contact email: `hello@therenthen.co.uk` vs `info@therenthen.co.uk`.
- Provide real team photo for About page or use illustrated placeholder asset?
- Add `twitter`/`@thereandthen` link as real URL when handle is confirmed.
