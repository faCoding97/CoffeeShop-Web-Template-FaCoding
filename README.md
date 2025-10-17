# ElixCode Coffee — Digital Menu (Next.js + Tailwind CSS + TypeScript)

A modern, mobile-first **digital menu website** for coffee shops. Guests scan a QR code at the table to browse categories (Hot Coffee, Cold Drinks, Pastries, Snacks, etc.), view item details, and book a table via WhatsApp.
The UI mirrors the warm aesthetic and section structure of the **Koppee** template (ThemeWagon) while being rebuilt from scratch with **Next.js App Router**, **Tailwind CSS**, **React**, and **TypeScript**.

> **Developed by:** Faraz Aghababayi — [linkedin.com/in/farazaghababayi](https://www.linkedin.com/in/farazaghababayi)

---

## ✨ Features

- **App Router, Multi-page SEO**
  Pages for Home (`/`), Menu (`/menu`), Category pages (`/menu/[category]`), About (`/about`), Contact (`/contact`).
  Automatic **`sitemap.xml`** and **`robots.txt`** via Next.js metadata routes.
- **Data-driven content**
  All copy and menu items live in **`data/data.json`**. Edit JSON → site updates (no backend).
- **Menu UX**
  Category filters, responsive grid, image cards, and a **details modal** (price + ingredients).
- **QR Code section**
  Built-in **QR generator** for `data.siteUrl` with a **Download PNG** button—print and place on tables.
- **Reservation without backend**
  “Book via WhatsApp” opens a prefilled chat to the café’s WhatsApp number.
- **Maps built-in**
  Google Maps iframe + “Open in Maps” / “Directions from here” helpers (no API key).
- **Animations**
  Subtle scroll/hover motion via **Framer Motion** (client components only).
- **Performance & Responsiveness**
  Mobile-first Tailwind design with clean semantics and accessible markup.
- **SEO**
  Route metadata, Open Graph / Twitter cards, canonical URLs, and **LocalBusiness JSON-LD**.

---

## 🧰 Tech Stack

- **Next.js 14** (App Router)
- **React 18**
- **TypeScript**
- **Tailwind CSS 3**
- **Framer Motion** (animations)
- **react-qr-code** (QR generation)

> **Node version:** Recommend **Node 20 LTS** for best compatibility with Next 14.

---

## 🚀 Getting Started

### 1) Install & run

```bash
npm install
npm run dev
# open http://localhost:3000
```

### 2) Build for production

```bash
npm run build
npm start
```

### 3) Optional: Google Site Verification

Create `.env.local`:

```bash
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=your-google-token
```

The token will be injected into `<meta name="google-site-verification">`.

---

## 🗂 Project Structure

```
app/
  ├─ about/page.tsx
  ├─ contact/page.tsx
  ├─ layout.tsx
  ├─ menu/
  │   ├─ [category]/page.tsx
  │   └─ page.tsx
  ├─ page.tsx
  ├─ robots.ts            # metadata route
  └─ sitemap.ts           # metadata route
components/
  ├─ Features.tsx
  ├─ Footer.tsx
  ├─ Header.tsx
  ├─ JsonLd.tsx
  ├─ MapEmbed.tsx
  ├─ MenuGrid.tsx
  ├─ MenuModal.tsx
  ├─ QRSection.tsx
  └─ SectionTitle.tsx
data/
  └─ data.json            # ← edit all content here
public/
  └─ images/              # placeholder assets (replace with real photos)
tailwind.config.ts
postcss.config.js
next.config.mjs
tsconfig.json
```

---

## 🧾 Data Model (`data/data.json`)

```json
{
  "siteUrl": "https://coffee.elixflare.com",
  "cafeInfo": {
    "name": "ElixCode Coffee Shop",
    "phone": "+1234567890",
    "whatsapp": "+1234567890",
    "instagram": "https://instagram.com/elixcode",
    "location": "123 Main St, Gqeberha, South Africa",
    "email": "info@elixcode.com",
    "qrCodeUrl": "/images/qr-placeholder.png",
    "openingHours": "Mon–Sun: 9:00 – 22:00"
  },
  "story": "…",
  "vision": "…",
  "features": [{ "title": "Fastest Door Delivery", "description": "…" }],
  "deals": [
    {
      "title": "Sunday Special Offer",
      "description": "…",
      "badge": "Sundays Only"
    }
  ],
  "menuItems": [
    {
      "category": "Hot Coffee",
      "name": "Black Coffee",
      "description": "Rich and bold drip coffee…",
      "image": "/images/black-coffee.jpg",
      "price": "$3.99",
      "ingredients": ["Freshly ground beans", "Hot water"]
    }
  ]
}
```

- **Add categories** by using new `category` names in `menuItems` (auto-generated routes like `/menu/hot-coffee`).
- **Replace images** in `/public/images` and point items to your filenames.
- **Change QR destination & canonical base** via `"siteUrl"`.

---

## 🔎 SEO Details

- Route metadata via **App Router** (`app/layout.tsx`, page-level `metadata` exports).
- Canonical URLs and Open Graph/Twitter cards preconfigured.
- **Structured Data** (`components/JsonLd.tsx`) exposes `CafeOrCoffeeShop` schema with name, address, phone, hours, and URL.
- `app/sitemap.ts` & `app/robots.ts` generate **sitemap.xml** and **robots.txt** using `data.siteUrl`.

---

## 🧭 QR Code & Printing

- Visit the **“Your Table QR”** section (home page), which generates a QR for `data.siteUrl`.
- Click **Download PNG** to print.
  Tip: print on matte paper; add a short CTA like “Scan for Menu ☕”.

---

## 🧩 Theming & Styling

- Tailwind theme includes a warm **coffee palette** in `tailwind.config.ts` (`coffee`, `latte`, `accent`).
- Global utilities in `app/globals.css`.
- To change the vibe, tweak colors in `tailwind.config.ts` and background styles (e.g., `.bg-hero-pattern`).

---

## 🌍 Deployment (Vercel)

1. Push repo to GitHub.
2. Import in **Vercel** → framework **Next.js**.
3. Add environment variable (optional):

   - `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=...`

4. Deploy.
   Ensure your domain matches `data.siteUrl` for correct canonical/QR behavior.

---

## 🛠 Troubleshooting

- **Error:** `Configuring Next.js via 'next.config.ts' is not supported`
  Use **`next.config.mjs`** (already included).

- **Error:** `(react.createContext) is not a function` (Framer Motion in RSC)
  Any file importing `framer-motion` must be a **Client Component**. Make sure the file starts with:

  ```ts
  "use client";
  ```

  (Already applied in motion-using components.)

- **Node versions**
  Next 14 prefers **Node 18/20**. If using Node 22 and you hit oddities, switch to **Node 20 LTS**.

- **Stale build**
  Clear cache:

  ```bash
  rm -rf .next
  npm run dev
  ```

- **Missing images**
  Ensure referenced paths exist in `public/images`.

- **Maps blocked**
  The project uses a simple Google Maps iframe. Some corporate networks or regions may block it.

---

## 📜 Credits & Inspiration

- **Design inspiration:** [Koppee – ThemeWagon](https://themewagon.github.io/Koppee/index.html)
  This project recreates the layout/feel with original code using modern React/Next/Tailwind.

---

## 👤 Author

**Faraz Aghababayi**

- LinkedIn: [linkedin.com/in/farazaghababayi](https://www.linkedin.com/in/farazaghababayi)

For collaboration or custom features (admin dashboard, multi-branch menus, translations, ordering, or Stripe), reach out!

---
