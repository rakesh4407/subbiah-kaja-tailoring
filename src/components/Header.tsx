import { useState, useEffect } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
import { business, navLinks } from '../config/business';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const waUrl = `https://wa.me/${business.whatsappNumber}?text=${encodeURIComponent(business.whatsappMessage)}`;

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white shadow-md border-b border-green-100'
          : 'bg-white/95 backdrop-blur-sm shadow-sm'
      }`}
      role="banner"
    >
      <div className="container-site">
        <div className="flex items-center justify-between h-[68px]">
          {/* Logo */}
          <a
            href="#home"
            onClick={() => handleNavClick('#home')}
            className="flex flex-col leading-tight no-underline group"
            aria-label="Subbiah Kaja Button & Tailoring — Home"
          >
            <span className="text-lg font-black tracking-wide text-green-800 group-hover:text-green-600 transition-colors">
              SUBBIAH KAJA
            </span>
            <span className="text-[11px] font-semibold tracking-[0.18em] text-charcoal-400 uppercase">
              BUTTON &amp; TAILORING
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                className="px-3 py-1.5 text-sm font-medium text-charcoal-700 hover:text-green-700 hover:bg-green-50 rounded-md transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* WhatsApp CTA (desktop) */}
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            id="header-whatsapp-btn"
            className="hidden md:flex items-center gap-2 px-4 py-2 bg-green-600 text-white text-sm font-semibold rounded-full hover:bg-green-700 active:scale-95 transition-all shadow-sm"
            aria-label="Chat on WhatsApp"
          >
            <MessageCircle size={16} aria-hidden="true" />
            WhatsApp
          </a>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-md text-charcoal-700 hover:bg-green-50 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`md:hidden overflow-hidden transition-all duration-300 border-t border-charcoal-100 bg-white ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="container-site py-3 flex flex-col gap-1" aria-label="Mobile navigation">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
              className="px-3 py-3 text-base font-medium text-charcoal-800 hover:text-green-700 hover:bg-green-50 rounded-md transition-all"
            >
              {link.label}
            </a>
          ))}
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 flex items-center justify-center gap-2 px-4 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-all"
          >
            <MessageCircle size={18} aria-hidden="true" />
            Chat on WhatsApp
          </a>
        </nav>
      </div>
    </header>
  );
}
