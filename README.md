# 🧵 Subbiah Kaja Button & Tailoring

<div align="center">

**Official website for SUBBIAH KAJA BUTTON & TAILORING**
*Tailoring and garment finishing services in Virugambakkam, Chennai*

[![Live Site](https://img.shields.io/badge/🌐_Live_Site-subbiah--kaja--tailoring.netlify.app-2d6a4f?style=for-the-badge)](https://subbiah-kaja-tailoring.netlify.app)
[![Netlify Status](https://api.netlify.com/api/v1/badges/subbiah-kaja-tailoring/deploy-status)](https://app.netlify.com/projects/subbiah-kaja-tailoring/overview)
[![GitHub](https://img.shields.io/badge/GitHub-rakesh4407-181717?style=flat&logo=github)](https://github.com/rakesh4407/subbiah-kaja-tailoring)

</div>

---

## 🏪 About the Business

| | |
|---|---|
| **Business** | SUBBIAH KAJA BUTTON & TAILORING |
| **Address** | 151, 2nd Main Rd, Sheik Abdullah Nagar, Virugambakkam, Chennai, Tamil Nadu 600092 |
| **Phone** | 86100 45411 |
| **WhatsApp** | +91 86100 45411 |
| **Services** | Tailoring · Overlock · Button · Garment Finishing · Alterations |

---

## ⚡ Tech Stack

![React](https://img.shields.io/badge/React-19-61DAFB?style=flat&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-6-3178C6?style=flat&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=flat&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-v4-38BDF8?style=flat&logo=tailwindcss&logoColor=white)
![Netlify](https://img.shields.io/badge/Netlify-Deployed-00C7B7?style=flat&logo=netlify&logoColor=white)

---

## 📄 Pages & Sections

| Section | Description |
|---|---|
| 🏠 **Hero** | Business name, tagline, Call / WhatsApp / Directions / Prices buttons |
| ✅ **Why Visit Us** | 5 factual trust points |
| ✂️ **Services** | Tailoring, Overlock, Button & Finishing cards |
| 💰 **Price List** | All 7 confirmed overlock prices in ₹ |
| 🖼️ **Gallery** | 5 real shop photos with category filters & lightbox |
| ℹ️ **About** | Genuine business description — no invented claims |
| ⭐ **Reviews** | Google reviews placeholder |
| 📍 **Location** | Google Maps embed + Get Directions |
| 📞 **Contact** | Call Now + WhatsApp with pre-filled message |
| 📱 **Mobile Nav** | Fixed bottom bar: Call / WhatsApp / Directions |

---

## 📁 Project Structure

```
Kaja_Shop/
├── index.html                  # SEO metadata, JSON-LD schema, Google Fonts
├── netlify.toml                # Netlify deployment config
├── public/
│   ├── favicon.svg
│   ├── _redirects              # SPA routing fallback
│   └── gallery/                # Real shop photos
│       ├── shop-exterior.jpg
│       ├── shop-interior.jpg
│       ├── shop-signage.jpg
│       ├── materials-buttons.jpg
│       └── overlock-machine.jpg
└── src/
    ├── config/
    │   └── business.ts         # ⭐ All business data — edit here
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

## 🚀 Getting Started

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

## ✏️ Updating Business Content

All business information is in **one single file**:

📄 [`src/config/business.ts`](./src/config/business.ts)

```ts
// Edit phone, address, prices, WhatsApp message — all here
export const business = {
  phone: "+918610045411",
  phoneDisplay: "86100 45411",
  address: "151, 2nd Main Rd, ...",
  ...
};

export const prices = [
  { service: "Off-Hand Overlock", price: 17 },
  ...
];
```

---

## 📸 Adding Gallery Photos

Drop new photos into `public/gallery/` and add them to [`src/components/Gallery.tsx`](./src/components/Gallery.tsx).

---

## 🌐 Deployment

| Item | Value |
|---|---|
| **Platform** | Netlify |
| **Build command** | `npm run build` |
| **Publish directory** | `dist` |
| **Node version** | 20 |
| **Auto deploy** | ✅ On every `git push` to `main` |

---

## 👨‍💻 Developer

Designed &amp; developed by **Rakesh G**
