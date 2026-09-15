# INDOPROBE Solutions Pvt. Ltd. — Website

Production-ready marketing website for **INDOPROBE SOLUTIONS PVT. LTD.**, an
investigation and intelligence agency from Kerala. Built with Next.js (App
Router), TypeScript, Tailwind CSS and Framer Motion.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production Build

```bash
npm run build
npm start
```

## Configuration

All contact details (WhatsApp number and email address) used throughout the
site — header, hero, footer, contact modal and contact page — are centralised
in a single file:

```
src/config/contact.ts
```

Update the `whatsapp` and `email` fields there to change contact details
across the entire site. No other file needs to be touched.

```ts
export const contactConfig = {
  whatsapp: "+91XXXXXXXXXX",
  email: "contact@indoprobe.in",
  companyName: "INDOPROBE SOLUTIONS PVT. LTD.",
  tagline: "An Intelligent & Dedicated Investigation Agency from Kerala",
  location: "Kerala, India",
};
```

The base site URL used for SEO metadata, canonical URLs and the sitemap is
configured via the `NEXT_PUBLIC_SITE_URL` environment variable — see
`.env.example`.

## Project Structure

```
src/
├── app/                # Next.js App Router pages
│   ├── about/
│   ├── services/
│   ├── industries/
│   ├── experts/
│   ├── confidentiality/
│   ├── insights/
│   ├── contact/
│   ├── privacy-policy/
│   ├── terms/
│   └── disclaimer/
├── components/
│   ├── layout/          # Header, Footer
│   ├── hero/            # Hero + animated network background
│   ├── sections/        # Truth Finders, process, timeline, why-us, CTA
│   ├── services/        # Service cards/grid
│   ├── industries/      # Industry cards/grid
│   ├── experts/         # Expert cards/profiles
│   ├── contact/         # Contact modal, form, consultation CTA button
│   └── ui/              # Buttons, containers, headings, reveal/counter
├── config/
│   └── contact.ts       # Single source of truth for contact details
├── context/
│   └── ContactModalContext.tsx
├── data/                # Content: services, industries, experts, nav, process
└── lib/                 # Utility helpers (contact links, class merge)
```

## Notes on Content

- Expert profiles use only information supplied as source-of-truth material.
  Where a verified individual profile was not available, the fourth/third
  expert slots use clearly labelled "Specialist Network" / "Expert Network"
  cards rather than fabricated individuals.
- No founding date, certifications, client logos, testimonials or case
  studies have been invented. Where such information was not supplied, the
  design communicates the relevant concept (e.g. "41+ years of experience
  represented across the organisation's specialist expertise") without
  fabricating specifics.
- Expert headshots are represented with abstract, initials-based placeholder
  avatars (no stock or fabricated photography) — replace with real
  photography by editing `src/components/experts/ExpertAvatar.tsx` and the
  `experts` array in `src/data/experts.ts`.

## Accessibility & Performance

- Respects `prefers-reduced-motion` for all animations.
- Server Components are used by default; interactivity (modals, forms, nav)
  is isolated to small Client Components.
- Semantic HTML with a single `<h1>` per page and structured heading levels.

## Deployment

This project is ready to push to GitHub and deploy on any Next.js-compatible
host (e.g. Vercel). Copy `.env.example` to `.env.local` and set
`NEXT_PUBLIC_SITE_URL` to your production domain before deploying.
