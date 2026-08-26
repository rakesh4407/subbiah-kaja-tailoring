import { Phone, MessageCircle, Navigation } from 'lucide-react';
import { business } from '../config/business';

export default function MobileBottomNav() {
  const waUrl = `https://wa.me/${business.whatsappNumber}?text=${encodeURIComponent(
    business.whatsappMessage
  )}`;

  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-green-900 border-t border-green-700 pb-safe shadow-xl"
      aria-label="Quick actions"
    >
      <div className="grid grid-cols-3 h-[60px]">
        {/* Call */}
        <a
          href={`tel:${business.phone}`}
          id="mobile-nav-call-btn"
          className="flex flex-col items-center justify-center gap-1 text-white hover:bg-green-800 active:bg-green-700 transition-colors min-h-[60px]"
          aria-label={`Call ${business.phoneDisplay}`}
        >
          <Phone size={20} aria-hidden="true" />
          <span className="text-[10px] font-semibold tracking-wide">CALL</span>
        </a>

        {/* WhatsApp — centre, highlighted */}
        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          id="mobile-nav-whatsapp-btn"
          className="flex flex-col items-center justify-center gap-1 bg-green-500 text-white hover:bg-green-400 active:bg-green-600 transition-colors min-h-[60px]"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle size={22} aria-hidden="true" />
          <span className="text-[10px] font-bold tracking-wide">WHATSAPP</span>
        </a>

        {/* Directions */}
        <a
          href={business.googleMapsDirections}
          target="_blank"
          rel="noopener noreferrer"
          id="mobile-nav-directions-btn"
          className="flex flex-col items-center justify-center gap-1 text-white hover:bg-green-800 active:bg-green-700 transition-colors min-h-[60px]"
          aria-label="Get directions on Google Maps"
        >
          <Navigation size={20} aria-hidden="true" />
          <span className="text-[10px] font-semibold tracking-wide">DIRECTIONS</span>
        </a>
      </div>
    </nav>
  );
}
