## Requirements

### Requirement: Request body validation

The `POST /api/quote` endpoint SHALL validate the JSON body for required fields (`what`, `who`, `budget`, `when`, `name`, `email`), enforce a valid email format, and reject oversize strings with HTTP `400` and a JSON error payload.

#### Scenario: Missing required field

- **WHEN** a client posts JSON missing `email`
- **THEN** the API responds with status `400` and does not call Resend

#### Scenario: Invalid email format

- **WHEN** a client posts `email` with value `not-an-email`
- **THEN** the API responds with status `400` and does not call Resend

### Requirement: Safe email content

User-supplied values MUST be escaped or sent as plain text before inclusion in outbound email HTML so that injected markup cannot execute in the recipient's mail client.

#### Scenario: HTML in user input

- **WHEN** a client posts `what` containing `<script>alert(1)</script>`
- **THEN** the delivered email body contains the literal text without executable HTML

### Requirement: Configuration and error responses

If `RESEND_API_KEY` is unset, the API SHALL respond with HTTP `503`. If Resend returns an error, the API SHALL respond with HTTP `500` and a generic message (no secret leakage).

#### Scenario: Missing API key in development

- **WHEN** `RESEND_API_KEY` is not defined and a valid quote payload is posted
- **THEN** the API responds with status `503`

#### Scenario: Successful submission

- **WHEN** a valid payload is posted and Resend accepts the send
- **THEN** the API responds with status `200` and `{ "ok": true }`

### Requirement: Environment documentation

The repository SHALL include `.env.example` documenting `RESEND_API_KEY` for local and deployment setup.

#### Scenario: New developer setup

- **WHEN** a developer clones the repo
- **THEN** they can copy `.env.example` to `.env.local` and see the required variable name
