# Enlightened Coaching

One-page bilingual (ES/EN) site for Claudia Forero — Next.js, TypeScript, Tailwind CSS.

## Getting started

```bash
pnpm install
cp .env.example .env.local
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Cal.com booking URL

The `#agenda` embed and CTAs use:

```bash
NEXT_PUBLIC_CAL_URL=https://cal.com/adstrategic-mml9qb/30min
```

Change it in `.env.local` when Claudia’s Cal link is ready (see `.env.example`).

## Scripts

- `pnpm dev` — development server
- `pnpm build` — production build
- `pnpm start` — serve production build
- `pnpm lint` — ESLint
