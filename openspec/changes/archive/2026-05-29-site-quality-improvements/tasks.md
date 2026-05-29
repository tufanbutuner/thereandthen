## 1. SEO & metadata

- [x] 1.1 Add `metadataBase` and default Open Graph fields to `src/app/layout.tsx`
- [x] 1.2 Add per-page `metadata` exports to `/`, `/services`, `/our-work`, `/about`, `/get-a-quote`
- [x] 1.3 Rewrite `src/app/sitemap.ts` with canonical routes only
- [x] 1.4 Add `src/app/robots.ts` referencing the sitemap
- [x] 1.5 Remove Google Analytics; rely on Vercel Analytics only (removed scripts from home)

## 2. Quote API security

- [x] 2.1 Add `zod` dependency and validation schema for quote payload
- [x] 2.2 Escape or plain-text user fields in Resend email body
- [x] 2.3 Return 400/503/500 with appropriate JSON errors; guard missing `RESEND_API_KEY`
- [x] 2.4 Add `.env.example` with `RESEND_API_KEY`
- [x] 2.5 Manually test valid submit and validation failures on preview/local

## 3. Site chrome & UX

- [x] 3.1 Wire `<Footer />` into `layout.tsx`; align email to `hello@therenthen.co.uk`
- [x] 3.2 Implement mobile nav (hamburger + panel) in `Navbar.tsx` and `global.scss`
- [x] 3.3 Add skip-to-content link and `id="main"` on page wrappers
- [x] 3.4 Audit focus styles on buttons/links in quote flow
- [x] 3.5 Replace About page `[ photo: Tufan ]` placeholder (asset or styled initials)

## 4. Dead code & developer experience

- [x] 4.1 Delete `Card.tsx`, `Redirect.tsx`, and `images.ts` (confirm no imports)
- [x] 4.2 Bump `eslint-config-next` to match Next 16; move `@types/*` to devDependencies
- [x] 4.3 Replace README with project-specific setup and deploy notes
- [x] 4.4 Add project context to `openspec/config.yaml` (stack, domain, conventions)
- [x] 4.5 Run `npm run build` and `npm run lint` to verify

## 5. Optional follow-ups (out of scope unless requested)

- [ ] 5.1 Add GitHub Action for lint + build on PR
- [ ] 5.2 Add rate limiting on `/api/quote` via Vercel middleware
- [ ] 5.3 Split home page into server shell + client corkboard component
