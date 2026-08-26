import { MapPin, Navigation } from 'lucide-react';
import { business } from '../config/business';

export default function Location() {
  return (
    <section
      id="location"
      className="py-16 sm:py-20 bg-cream-200"
      aria-labelledby="location-heading"
    >
      <div className="container-site">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="inline-block text-green-600 font-semibold text-sm tracking-widest uppercase mb-2">
            Find Us
          </span>
          <h2 id="location-heading" className="text-3xl sm:text-4xl font-bold text-charcoal-800 mb-3">
            Visit Our Shop
          </h2>
          <div className="flex items-start justify-center gap-2 text-charcoal-600 max-w-md mx-auto">
            <MapPin size={18} className="text-green-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
            <address className="not-italic text-sm sm:text-base">{business.address}</address>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start max-w-5xl mx-auto">
          {/* Map embed */}
          <div className="rounded-2xl overflow-hidden border border-charcoal-100 shadow-md bg-white aspect-video lg:aspect-auto lg:h-80">
            <iframe
              title="Subbiah Kaja Button and Tailoring location on Google Maps"
              src={business.googleMapsEmbed}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '280px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Info panel */}
          <div className="flex flex-col gap-5">
            <div className="bg-white border border-charcoal-100 rounded-2xl p-6 shadow-sm">
              <h3 className="font-bold text-charcoal-800 text-base mb-4 flex items-center gap-2">
                <MapPin size={16} className="text-green-600" aria-hidden="true" />
                Shop Address
              </h3>
              <address className="not-italic text-charcoal-700 text-sm leading-relaxed mb-5">
                {business.name}
                <br />
                151, 2nd Main Rd
                <br />
                Sheik Abdullah Nagar
                <br />
                Virugambakkam
                <br />
                Chennai, Tamil Nadu 600092
              </address>

              <a
                href={business.googleMapsDirections}
                target="_blank"
                rel="noopener noreferrer"
                id="location-directions-btn"
                className="flex items-center justify-center gap-2 w-full px-5 py-3 bg-green-700 text-white font-semibold rounded-xl hover:bg-green-600 active:scale-95 transition-all"
                aria-label="Get directions to Subbiah Kaja Button and Tailoring on Google Maps"
              >
                <Navigation size={18} aria-hidden="true" />
                Get Directions
              </a>
            </div>

            {/* Quick contact */}
            <div className="bg-white border border-charcoal-100 rounded-2xl p-6 shadow-sm">
              <h3 className="font-bold text-charcoal-800 text-sm mb-3">Quick Contact</h3>
              <a
                href={`tel:${business.phone}`}
                className="text-green-700 font-semibold text-base hover:text-green-600 transition-colors"
                aria-label={`Call ${business.phoneDisplay}`}
              >
                📞 {business.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
