# Subbiah Kaja Button & Tailoring — Website

Official website for **SUBBIAH KAJA BUTTON & TAILORING**, a local tailoring and garment-finishing business in Virugambakkam, Chennai.

🌐 **Live Website:** *(Not deployed yet — update this link after Netlify deployment)*

---

## About the Business

**SUBBIAH KAJA BUTTON & TAILORING**
📍 151, 2nd Main Rd, Sheik Abdullah Nagar, Virugambakkam, Chennai, Tamil Nadu 600092
📞 86100 45411

Services: Tailoring · Overlock · Button · Garment Finishing · Alterations

---

## Tech Stack

| Tool | Version |
|---|---|
| React | 19 |
| TypeScript | 6 |
| Vite | 8 |
| Tailwind CSS | v4 |
| lucide-react | latest |

---

## Project Structure

```
Kaja_Shop/
├── index.html                  # SEO metadata, JSON-LD schema, Google Fonts
├── netlify.toml                # Netlify deployment config
├── public/
│   ├── favicon.svg
│   ├── _redirects              # SPA routing for Netlify
│   └── gallery/                # Real shop photos
│       ├── shop-exterior.jpg
│       ├── shop-interior.jpg
│       ├── shop-signage.jpg
│       ├── materials-buttons.jpg
│       └── overlock-machine.jpg
└── src/
    ├── config/
    │   └── business.ts         # ⭐ All business data (phone, prices, address, etc.)
    ├── components/
    │   ├── Header.tsx
    │   ├── Hero.tsx
    │   ├── Services.tsx
    │   ├── PriceList.tsx
    │   ├── Gallery.tsx
    │   ├── About.tsx
    │   ├── TrustSection.tsx
    │   ├── Reviews.tsx
    │   ├── Location.tsx
    │   ├── Contact.tsx
    │   ├── MobileBottomNav.tsx
    │   └── Footer.tsx
    ├── App.tsx
    ├── main.tsx
    └── index.css
```

---

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev
# → http://localhost:5173

# Production build
npm run build

# Preview production build
npm run preview
```

---

## Updating Business Content

All business information is centralised in one file:

📄 [`src/config/business.ts`](./src/config/business.ts)

Update prices, phone number, address, WhatsApp message, or services — all in one place.

---

## Deployment

This site is deployed via **GitHub → Netlify**.

- **Build command:** `npm run build`
- **Publish directory:** `dist`
- **Node version:** 20

---

## Developer

Designed & developed by **Rakesh G**
