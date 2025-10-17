# ElixCode Coffee — Digital Menu (Next.js + Tailwind + TS)

A fully static, SEO-optimized digital menu for a coffee shop. Inspired by the Koppee template's layout and vibe, rebuilt with modern React, Next.js App Router, and Tailwind CSS.

## Quickstart

```bash
npm install
npm run dev
# open http://localhost:3000
```

## Edit Content

Update `data/data.json` to change cafe info, features, deals, and menu items.
Update `data.siteUrl` to change the QR destination and SEO canonical base.

## SEO

- Metadata per route via Next.js App Router
- `app/sitemap.ts` and `app/robots.ts`
- OpenGraph + Twitter cards
- LocalBusiness JSON-LD in `components/JsonLd.tsx`
- Google Site Verification: set `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` env var

## Notes

- Images live in `/public/images`. Replace the SVG placeholders with real photos anytime.
- Animations via Framer Motion are used in client components only to avoid SSR issues.
- The reservation form opens WhatsApp with a pre-filled message (no backend).

Enjoy your brew! ☕