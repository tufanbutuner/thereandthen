## ADDED Requirements

### Requirement: Canonical sitemap entries

The site SHALL expose a sitemap at `/sitemap.xml` containing only canonical, indexable routes: `/`, `/services`, `/our-work`, `/about`, and `/get-a-quote`. Redirect-only legacy paths MUST NOT appear in the sitemap.

#### Scenario: Sitemap lists live routes

- **WHEN** a crawler fetches `/sitemap.xml`
- **THEN** the response includes URLs for `/`, `/services`, `/our-work`, `/about`, and `/get-a-quote` with `https://therenthen.co.uk` as the host

#### Scenario: Redirect routes excluded

- **WHEN** a crawler fetches `/sitemap.xml`
- **THEN** the response does not include `/clients`, `/contact-us`, `/faq`, `/impact`, `/testimonials`, or `/who-we-are`

### Requirement: Per-page metadata

Each primary marketing route SHALL export page-specific `title` and `description` metadata. The root layout SHALL set `metadataBase` to `https://therenthen.co.uk`.

#### Scenario: Services page metadata

- **WHEN** a client requests `/services`
- **THEN** the HTML document includes a unique title and meta description distinct from the home page

### Requirement: Open Graph defaults

The root layout SHALL define default Open Graph fields (`og:title`, `og:description`, `og:url`, `og:type`) suitable for link previews. Primary pages MAY override title and description.

#### Scenario: Home page social preview

- **WHEN** a social crawler fetches `/`
- **THEN** Open Graph tags are present with site name and description

### Requirement: Robots file

The site SHALL serve `robots.txt` allowing all user agents on public marketing paths and referencing the sitemap URL.

#### Scenario: Robots allows indexing

- **WHEN** a crawler fetches `/robots.txt`
- **THEN** the file allows crawling of `/` and references `Sitemap: https://therenthen.co.uk/sitemap.xml`

### Requirement: Global analytics

Google Analytics (property `G-W2099BHSNL`) SHALL load on all pages via a single integration point in the root layout, not only on the home page.

#### Scenario: Analytics on quote page

- **WHEN** a user loads `/get-a-quote`
- **THEN** the Google Analytics script is included in the document
