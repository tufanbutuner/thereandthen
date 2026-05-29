## ADDED Requirements

### Requirement: Remove unused components

Components that are not imported anywhere (`Card`, `Redirect`) SHALL be removed from the codebase.

#### Scenario: Build without Card

- **WHEN** `npm run build` runs after cleanup
- **THEN** the build succeeds and `src/components/Card.tsx` does not exist

### Requirement: Remove broken asset utility

`src/utils/images.ts` imports assets that do not exist in the repository; it SHALL be removed unless matching files are added under `public/` or `src/assets/`.

#### Scenario: No dangling image imports

- **WHEN** `npm run build` runs
- **THEN** no module imports missing SVG paths from `images.ts`

### Requirement: Project README

The README SHALL describe this project (There and Then agency site), local dev commands, required environment variables, and deployment notes — not the default `create-next-app` `pages/` boilerplate.

#### Scenario: README mentions quote API env

- **WHEN** a developer reads `README.md`
- **THEN** they find instructions for `RESEND_API_KEY` and `npm run dev`

### Requirement: Dependency hygiene

`eslint-config-next` SHALL match the major Next.js version. Type packages (`@types/node`, `@types/react`, `@types/react-dom`) SHALL be listed under `devDependencies`.

#### Scenario: Lint script runs

- **WHEN** a developer runs `npm run lint`
- **THEN** ESLint executes without version mismatch errors against Next 16
