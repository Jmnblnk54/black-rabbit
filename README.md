# Black Rabbit Creative

Marketing site for Black Rabbit Creative, LLC — Julia Blank, Tampa wedding videographer.

## Stack

- **Next.js 15** (App Router) + React 19 + TypeScript
- **Tailwind CSS v3** with a custom editorial palette
- **next/font/google** (Fraunces display + Inter body)
- **react-calendly** (Calendly inline embed on `/book`)
- **lucide-react** for icons
- No CMS — content lives in TypeScript files under `lib/`
- No backend — inquiry form posts to `/api/inquire` which logs and returns success

## Run locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Build & lint

```bash
npm run build
npm run lint
```

## Environment

Copy `.env.example` to `.env.local` and fill in optional values:

- `NEXT_PUBLIC_SITE_URL` — production URL (used for sitemap, OG, JSON-LD)
- `NEXT_PUBLIC_CALENDLY_URL` — full Calendly event URL for the `/book` embed.
  Defaults to a placeholder `https://calendly.com/blackrabbitcreative/discovery`.

## What's a placeholder

The site renders entirely with **placeholder visuals** until real media lands:

- `components/video-placeholder.tsx` — every video tile across the site uses
  this. Swap with `@mux/mux-player-react` once Mux playback IDs exist.
- `components/image-placeholder.tsx` — every still uses this. Swap with
  `next-cloudinary`'s `CldImage` once Cloudinary is connected.
- All inquiry submissions are logged server-side only; wire a forwarding email
  (Resend, etc.) in `app/api/inquire/route.ts` to deliver to Julia's inbox.
- Calendly URL is a placeholder. Update `NEXT_PUBLIC_CALENDLY_URL` once Julia's
  Calendly account is live.

## What's real

- Every page from the design plan (Home, Weddings, Wedding Films, Wedding
  Pricing, Wedding case study template, Brand, Brand case study, Events, Event
  case study, About, Journal, Journal post, Tampa local-SEO landing, Book,
  Inquire).
- Multi-step inquiry form with project-type branching, validation, and a
  Calendly fallback.
- JSON-LD schema: `LocalBusiness` on every page, `Service` + `FAQPage` on
  Weddings, `FAQPage` on the Tampa landing, `VideoObject` on case studies,
  `Article` on journal posts.
- Sitemap (`/sitemap.xml`) and robots (`/robots.txt`) generated from route data.
- Wedding-first IA, real Tampa venue references, Julia's actual bio copy.

## Deploy

Designed for Vercel. After connecting the repo:

1. Set `NEXT_PUBLIC_SITE_URL` to the production domain in Vercel project env.
2. Set `NEXT_PUBLIC_CALENDLY_URL` when Calendly is live.
3. Done — `npm run build` is the default Vercel command, no config needed.

## Design plan

See `../01_research_and_design_plan.md` for the strategic context, design
system rationale, IA, and lead-gen plan that this site implements.
