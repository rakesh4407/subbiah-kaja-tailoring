import { Phone, MessageCircle } from 'lucide-react';
import { business } from '../config/business';

export default function Contact() {
  const waUrl = `https://wa.me/${business.whatsappNumber}?text=${encodeURIComponent(
    business.whatsappMessage
  )}`;

  return (
    <section id="contact" className="py-16 sm:py-20 bg-green-800" aria-labelledby="contact-heading">
      <div className="container-site">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block text-gold-300 font-semibold text-sm tracking-widest uppercase mb-2">
            Get in Touch
          </span>
          <h2 id="contact-heading" className="text-3xl sm:text-4xl font-bold text-white mb-3">
            Contact Us
          </h2>
          <p className="text-white/60 max-w-md mx-auto">
            Call or WhatsApp us for enquiries, pricing, or to place an order.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-2xl mx-auto">
          {/* Call card */}
          <div className="bg-white/8 border border-white/15 rounded-2xl p-7 flex flex-col items-center text-center gap-4 hover:bg-white/12 transition-all">
            <div className="w-14 h-14 flex items-center justify-center bg-white/10 text-white rounded-full">
              <Phone size={28} aria-hidden="true" />
            </div>
            <div>
              <h3 className="text-white font-bold text-lg mb-1">Call Us</h3>
              <p className="text-white/60 text-sm mb-3">
                Speak to us directly — we're happy to help.
              </p>
              <p className="text-gold-300 font-semibold text-base">{business.phoneDisplay}</p>
            </div>
            <a
              href={`tel:${business.phone}`}
              id="contact-call-btn"
              className="w-full flex items-center justify-center gap-2 px-5 py-3 bg-white text-green-800 font-bold rounded-xl hover:bg-cream-100 active:scale-95 transition-all min-h-[52px]"
              aria-label={`Call ${business.phoneDisplay}`}
            >
              <Phone size={18} aria-hidden="true" />
              Call Now
            </a>
          </div>

          {/* WhatsApp card */}
          <div className="bg-white/8 border border-white/15 rounded-2xl p-7 flex flex-col items-center text-center gap-4 hover:bg-white/12 transition-all">
            <div className="w-14 h-14 flex items-center justify-center bg-green-500/30 text-green-300 rounded-full">
              <MessageCircle size={28} aria-hidden="true" />
            </div>
            <div>
              <h3 className="text-white font-bold text-lg mb-1">WhatsApp</h3>
              <p className="text-white/60 text-sm mb-3">
                Send us a message anytime on WhatsApp.
              </p>
              <p className="text-gold-300 font-semibold text-base">{business.phoneDisplay}</p>
            </div>
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              id="contact-whatsapp-btn"
              className="w-full flex items-center justify-center gap-2 px-5 py-3 bg-green-500 text-white font-bold rounded-xl hover:bg-green-400 active:scale-95 transition-all min-h-[52px]"
              aria-label="Chat on WhatsApp"
            >
              <MessageCircle size={18} aria-hidden="true" />
              Chat on WhatsApp
            </a>
          </div>
        </div>

        {/* Address reminder */}
        <p className="text-center text-white/40 text-sm mt-10">
          📍 {business.address}
        </p>
      </div>
    </section>
  );
}
