## ADDED Requirements

### Requirement: Site-wide footer

The root layout SHALL render a footer on every page with consistent contact information matching the primary business email and location.

#### Scenario: Footer on services page

- **WHEN** a user views `/services`
- **THEN** a footer is visible below the main content with contact details

### Requirement: Consistent contact email

All visible contact references and quote-related emails SHALL use the same canonical address (`hello@therenthen.co.uk` unless explicitly changed in design review).

#### Scenario: Footer email matches quote CTA

- **WHEN** a user compares the footer email and the home page CTA note
- **THEN** both display the same email address

### Requirement: Mobile navigation

The navbar SHALL provide a usable navigation pattern on viewports below 768px so all primary links remain reachable without horizontal overflow.

#### Scenario: Mobile menu access

- **WHEN** a user on a 375px-wide viewport opens the site
- **THEN** they can reach `/get-a-quote` without horizontal scrolling the nav bar

### Requirement: Skip to content

The layout SHALL include a skip link that moves keyboard focus to the main content area.

#### Scenario: Keyboard skip link

- **WHEN** a keyboard user activates the skip link on first tab
- **THEN** focus moves to the main page content
