import { Phone, MessageCircle, MapPin, Tag } from 'lucide-react';
import { business } from '../config/business';

export default function Hero() {
  const waUrl = `https://wa.me/${business.whatsappNumber}?text=${encodeURIComponent(business.whatsappMessage)}`;

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-green-800"
      aria-label="Home — Subbiah Kaja Button and Tailoring"
    >
      {/* Real shop photo as background */}
      <img
        src="/gallery/shop-exterior.jpg"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover object-center opacity-25 blur-sm scale-105"
      />

      {/* Gradient overlay — keeps text readable over the photo */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-green-900/85 via-green-800/90 to-green-900/95"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="container-site relative z-10 py-24 pt-36 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 bg-gold-500/20 border border-gold-400/40 rounded-full text-gold-300 text-sm font-medium tracking-wide">
          <MapPin size={14} aria-hidden="true" />
          Virugambakkam, Chennai
        </div>

        {/* Business name */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-none mb-2">
          SUBBIAH KAJA
        </h1>
        <p className="text-2xl sm:text-3xl font-semibold text-gold-300 tracking-[0.12em] mb-6">
          BUTTON &amp; TAILORING
        </p>

        {/* Tagline */}
        <p className="text-lg sm:text-xl text-white/80 font-medium mb-3 tracking-wide">
          {business.tagline}
        </p>

        {/* Supporting description */}
        <p className="text-base sm:text-lg text-white/65 max-w-xl mx-auto mb-10">
          {business.description}
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row flex-wrap gap-3 justify-center mb-12">
          <a
            href={`tel:${business.phone}`}
            id="hero-call-btn"
            className="flex items-center justify-center gap-2 px-6 py-3.5 bg-white text-green-800 font-bold text-base rounded-xl hover:bg-cream-100 active:scale-95 transition-all shadow-lg min-h-[52px]"
            aria-label={`Call ${business.phoneDisplay}`}
          >
            <Phone size={20} aria-hidden="true" />
            Call Now
          </a>

          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            id="hero-whatsapp-btn"
            className="flex items-center justify-center gap-2 px-6 py-3.5 bg-green-500 text-white font-bold text-base rounded-xl hover:bg-green-400 active:scale-95 transition-all shadow-lg min-h-[52px]"
            aria-label="Chat on WhatsApp"
          >
            <MessageCircle size={20} aria-hidden="true" />
            WhatsApp
          </a>

          <a
            href={business.googleMapsDirections}
            target="_blank"
            rel="noopener noreferrer"
            id="hero-directions-btn"
            className="flex items-center justify-center gap-2 px-6 py-3.5 bg-white/15 border border-white/30 text-white font-bold text-base rounded-xl hover:bg-white/25 active:scale-95 transition-all shadow-lg min-h-[52px] backdrop-blur-sm"
            aria-label="Get directions on Google Maps"
          >
            <MapPin size={20} aria-hidden="true" />
            Get Directions
          </a>

          <button
            onClick={() => scrollTo('prices')}
            id="hero-prices-btn"
            className="flex items-center justify-center gap-2 px-6 py-3.5 bg-gold-500 text-green-900 font-bold text-base rounded-xl hover:bg-gold-400 active:scale-95 transition-all shadow-lg min-h-[52px]"
          >
            <Tag size={20} aria-hidden="true" />
            View Prices
          </button>
        </div>

        {/* Quick info pills */}
        <div className="flex flex-wrap justify-center gap-3 text-sm text-white/70">
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" aria-hidden="true" />
            Tailoring
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" aria-hidden="true" />
            Overlock
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" aria-hidden="true" />
            Button &amp; Finishing
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" aria-hidden="true" />
            Alterations
          </span>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce" aria-hidden="true">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center pt-1.5">
          <div className="w-1.5 h-3 bg-white/60 rounded-full" />
        </div>
      </div>
    </section>
  );
}
