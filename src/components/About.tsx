import { business } from '../config/business';

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-20 bg-white" aria-labelledby="about-heading">
      <div className="container-site">
        <div className="max-w-3xl mx-auto">
          {/* Section label */}
          <span className="inline-block text-green-600 font-semibold text-sm tracking-widest uppercase mb-2">
            About Us
          </span>

          <h2 id="about-heading" className="text-3xl sm:text-4xl font-bold text-charcoal-800 mb-6">
            About Subbiah Kaja Button &amp; Tailoring
          </h2>

          <div className="prose prose-charcoal max-w-none text-charcoal-700 leading-relaxed space-y-4">
            <p className="text-base sm:text-lg">
              Subbiah Kaja Button &amp; Tailoring is a local tailoring and garment-finishing
              business serving customers in and around Virugambakkam, Chennai.
            </p>

            <p>
              Located at{' '}
              <strong>{business.address}</strong>, the shop offers
              professional tailoring, overlock finishing, and button services — all under one
              roof for the convenience of local customers.
            </p>

            <p>
              The shop specialises in overlock work for a wide range of garments including
              blouses, chudithars, shirts, and pants, providing clean and durable garment
              edges. Button attachment, garment finishing, and alterations are also part of
              the core services offered.
            </p>

            <p>
              Customers can visit the shop directly, call, or reach out on WhatsApp to
              enquire about services and pricing.
            </p>
          </div>

          {/* Business details card */}
          <div className="mt-10 bg-cream-100 border border-charcoal-100 rounded-2xl p-6 grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <h3 className="text-xs font-bold tracking-widest uppercase text-green-700 mb-1">
                Address
              </h3>
              <address className="not-italic text-charcoal-700 text-sm leading-relaxed">
                {business.address}
              </address>
            </div>

            <div>
              <h3 className="text-xs font-bold tracking-widest uppercase text-green-700 mb-1">
                Phone / WhatsApp
              </h3>
              <a
                href={`tel:${business.phone}`}
                className="text-charcoal-700 text-sm hover:text-green-700 transition-colors"
              >
                {business.phoneDisplay}
              </a>
            </div>

            <div>
              <h3 className="text-xs font-bold tracking-widest uppercase text-green-700 mb-1">
                Business Category
              </h3>
              <p className="text-charcoal-700 text-sm">Tailor &amp; Garment Finishing</p>
            </div>

            <div>
              <h3 className="text-xs font-bold tracking-widest uppercase text-green-700 mb-1">
                Area
              </h3>
              <p className="text-charcoal-700 text-sm">Virugambakkam, Chennai, Tamil Nadu</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
