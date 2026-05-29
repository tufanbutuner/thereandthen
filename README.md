# There and Then

Marketing site for [There and Then](https://therenthen.co.uk) — web development, branding, and marketing for small businesses.

## Stack

- [Next.js](https://nextjs.org/) 16 (App Router)
- React 18, TypeScript, Sass
- [Resend](https://resend.com/) for quote form emails
- [Vercel Analytics](https://vercel.com/docs/analytics)

## Local development

```bash
npm install
cp .env.example .env.local
# Add your Resend API key to .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment variables

| Variable | Required | Description |
|----------|----------|-------------|
| `RESEND_API_KEY` | For quote form | API key from Resend; without it, `/api/quote` returns 503 |

## Scripts

- `npm run dev` — development server
- `npm run build` — production build
- `npm run start` — serve production build
- `npm run lint` — ESLint

## Deploy

Deploy to [Vercel](https://vercel.com) (or any Node host). Set `RESEND_API_KEY` in the project environment. The domain is configured as `therenthen.co.uk`.
