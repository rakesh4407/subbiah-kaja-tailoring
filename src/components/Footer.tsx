import { Phone, MapPin, MessageCircle } from 'lucide-react';
import { business, navLinks } from '../config/business';

export default function Footer() {
  const waUrl = `https://wa.me/${business.whatsappNumber}?text=${encodeURIComponent(
    business.whatsappMessage
  )}`;

  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const year = new Date().getFullYear();

  return (
    <footer className="bg-green-900 text-white" role="contentinfo">
      {/* Main footer */}
      <div className="container-site py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <p className="text-xl font-black tracking-wide mb-0.5">SUBBIAH KAJA</p>
            <p className="text-xs font-semibold tracking-[0.2em] text-white/50 uppercase mb-4">
              BUTTON &amp; TAILORING
            </p>
            <p className="text-white/60 text-sm leading-relaxed">
              Tailoring and garment finishing services in Virugambakkam, Chennai.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-xs font-bold tracking-widest uppercase text-gold-300 mb-4">
              Quick Links
            </h3>
            <nav aria-label="Footer navigation">
              <ul className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                      className="text-white/60 text-sm hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-bold tracking-widest uppercase text-gold-300 mb-4">
              Contact
            </h3>
            <div className="flex flex-col gap-3">
              <a
                href={`tel:${business.phone}`}
                className="flex items-start gap-2 text-white/60 text-sm hover:text-white transition-colors"
                aria-label={`Call ${business.phoneDisplay}`}
              >
                <Phone size={14} className="mt-0.5 flex-shrink-0" aria-hidden="true" />
                {business.phoneDisplay}
              </a>

              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 text-white/60 text-sm hover:text-white transition-colors"
                aria-label="Chat on WhatsApp"
              >
                <MessageCircle size={14} className="mt-0.5 flex-shrink-0" aria-hidden="true" />
                WhatsApp Us
              </a>

              <a
                href={business.googleMapsDirections}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 text-white/60 text-sm hover:text-white transition-colors"
                aria-label="Get directions"
              >
                <MapPin size={14} className="mt-0.5 flex-shrink-0" aria-hidden="true" />
                <span>{business.address}</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container-site py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-white/35 text-xs">
          <p>© {year} {business.name}. All rights reserved.</p>
          <p className="text-white/25">
            Designed &amp; developed by{' '}
            <span className="text-white/45 font-medium">Rakesh G</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
