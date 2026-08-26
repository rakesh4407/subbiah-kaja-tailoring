import { MessageCircle, IndianRupee } from 'lucide-react';
import { prices, business } from '../config/business';

export default function PriceList() {
  const waUrl = `https://wa.me/${business.whatsappNumber}?text=${encodeURIComponent(
    'Hello, I would like to ask about a tailoring/overlock service and its price.'
  )}`;

  return (
    <section id="prices" className="py-16 sm:py-20 bg-green-900" aria-labelledby="prices-heading">
      <div className="container-site">
        {/* Section header */}
        <div className="text-center mb-12">
          <span className="inline-block text-gold-300 font-semibold text-sm tracking-widest uppercase mb-2">
            Pricing
          </span>
          <h2 id="prices-heading" className="text-3xl sm:text-4xl font-bold text-white mb-3">
            Simple &amp; Transparent Pricing
          </h2>
          <p className="text-white/60 max-w-md mx-auto">
            Clear rates for all overlock and finishing services. No hidden charges.
          </p>
        </div>

        {/* Price table */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden backdrop-blur-sm">
            {/* Table header */}
            <div className="grid grid-cols-2 px-6 py-3 bg-white/10 border-b border-white/10">
              <span className="text-white/60 text-xs font-semibold tracking-widest uppercase">
                Service
              </span>
              <span className="text-white/60 text-xs font-semibold tracking-widest uppercase text-right">
                Price
              </span>
            </div>

            {/* Price rows */}
            {prices.map((item, index) => (
              <div
                key={item.service}
                className={`grid grid-cols-2 items-center px-6 py-4 border-b border-white/8 hover:bg-white/5 transition-colors ${
                  index === prices.length - 1 ? 'border-b-0' : ''
                }`}
              >
                <span className="text-white font-medium text-sm sm:text-base">
                  {item.service}
                </span>
                <div className="flex items-center justify-end gap-0.5 text-gold-300 font-bold text-base sm:text-lg">
                  <IndianRupee size={15} aria-hidden="true" />
                  <span>{item.price}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Note */}
          <p className="text-center text-white/55 text-sm mt-5 px-4">
            For custom tailoring and other services, please{' '}
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold-300 underline underline-offset-2 hover:text-gold-200"
            >
              contact us
            </a>{' '}
            for pricing.
          </p>

          {/* CTA */}
          <div className="text-center mt-6">
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              id="prices-ask-btn"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-gold-500 text-green-900 font-bold rounded-xl hover:bg-gold-400 active:scale-95 transition-all shadow-lg"
              aria-label="Ask about a service on WhatsApp"
            >
              <MessageCircle size={18} aria-hidden="true" />
              Ask About a Service
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
