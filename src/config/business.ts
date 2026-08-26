// ============================================================
// CENTRAL BUSINESS CONFIGURATION
// Update this file to change any business information.
// ============================================================

export const business = {
  name: "SUBBIAH KAJA BUTTON & TAILORING",
  nameShort: "SUBBIAH KAJA",
  nameTag: "BUTTON & TAILORING",
  tagline: "Tailoring • Overlock • Alteration • Button • Zip",
  description:
    "Tailoring and garment finishing services in Virugambakkam, Chennai.",
  phone: "+918610045411",
  phoneDisplay: "86100 45411",
  // WhatsApp: India country code (91) + 10-digit number
  whatsappNumber: "918610045411",
  whatsappMessage:
    "Hello, I would like to enquire about your tailoring/overlock services.",
  address:
    "151, 2nd Main Rd, Sheik Abdullah Nagar, Virugambakkam, Chennai, Tamil Nadu 600092",
  addressShort: "Virugambakkam, Chennai",
  // Google Maps links
  googleMapsSearch:
    "https://www.google.com/maps/search/SUBBIAH+KAJA+BUTTON+%26+TAILORING,+151,+2nd+Main+Rd,+Virugambakkam,+Chennai",
  googleMapsDirections:
    "https://www.google.com/maps/dir/?api=1&destination=SUBBIAH+KAJA+BUTTON+%26+TAILORING,+151,+2nd+Main+Rd,+Virugambakkam,+Chennai",
  googleMapsEmbed:
    "https://www.google.com/maps?q=SUBBIAH+KAJA+BUTTON+%26+TAILORING,+151,+2nd+Main+Rd,+Virugambakkam,+Chennai&output=embed",
  // Opening hours — add when confirmed
  openingHours: null as string | null,
} as const;

// ============================================================
// PRICE LIST
// ============================================================

export const prices = [
  { service: "Off-Hand Kaja Button", price: 17 },
  { service: "Off-Hand Model Button", price: 22 },
  { service: "Full Hand Kaja Button", price: 20 },
  { service: "Full Hand Model Button", price: 26 },
  { service: "Chudithar Overlock", price: 50 },
  { service: "Blouse Overlock", price: 20 },
  { service: "Gents Pant Overlock", price: 40 },
];

// ============================================================
// SERVICES
// ============================================================

export const services = [
  {
    id: "tailoring",
    name: "Tailoring",
    icon: "scissors",
    description:
      "Professional tailoring for blouses, chudithars, shirts, pants and other garments. Precise stitching for a perfect fit.",
    items: ["Blouse", "Chudithar", "Shirt", "Pant", "Other tailoring work"],
  },
  {
    id: "overlock",
    name: "Overlock Services",
    icon: "zap",
    description:
      "Expert overlock finishing for all garment types. Clean, durable edges that last.",
    items: [
      "Off-Hand Overlock",
      "Model Off-Hand",
      "Full-Hand Overlock",
      "Model Full-Hand",
      "Blouse Overlock",
      "Chudithar Overlock",
      "Pant Overlock",
    ],
  },
  {
    id: "finishing",
    name: "Button & Finishing",
    icon: "circle",
    description:
      "Button fixing, garment finishing and related alteration work. Quality finishing on every piece.",
    items: ["Button attachment", "Garment finishing", "Alteration work"],
  },
];

// ============================================================
// NAVIGATION
// ============================================================

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Prices", href: "#prices" },
  { label: "Gallery", href: "#gallery" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

// ============================================================
// TRUST POINTS
// ============================================================

export const trustPoints = [
  {
    icon: "map-pin",
    title: "Convenient Location",
    body: "Located in Virugambakkam, easily accessible for customers nearby.",
  },
  {
    icon: "scissors",
    title: "Tailoring & Overlock",
    body: "Tailoring and garment finishing under one roof.",
  },
  {
    icon: "tag",
    title: "Clear Pricing",
    body: "Transparent service rates with no hidden charges.",
  },
  {
    icon: "phone",
    title: "Easy to Reach",
    body: "Contact us directly by phone or WhatsApp — quick replies.",
  },
  {
    icon: "shirt",
    title: "All Garment Types",
    body: "Blouses, chudithars, shirts, pants and more.",
  },
];

// ============================================================
// SEO
// ============================================================

export const seo = {
  title:
    "Subbiah Kaja Button & Tailoring | Tailor & Overlock Services in Virugambakkam, Chennai",
  description:
    "Subbiah Kaja Button & Tailoring provides tailoring and overlock services in Virugambakkam, Chennai. View services, prices, location and contact details.",
  keywords:
    "tailor virugambakkam, tailoring shop virugambakkam, overlock service virugambakkam, tailoring services chennai, button tailoring shop, garment finishing virugambakkam, blouse tailor chennai",
};
