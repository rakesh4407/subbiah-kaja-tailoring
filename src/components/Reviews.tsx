import { Star, ExternalLink } from 'lucide-react';
import { business } from '../config/business';

export default function Reviews() {
  return (
    <section id="reviews" className="py-16 sm:py-20 bg-white" aria-labelledby="reviews-heading">
      <div className="container-site">
        <div className="max-w-2xl mx-auto text-center">
          {/* Header */}
          <span className="inline-block text-green-600 font-semibold text-sm tracking-widest uppercase mb-2">
            Reviews
          </span>
          <h2 id="reviews-heading" className="text-3xl sm:text-4xl font-bold text-charcoal-800 mb-3">
            Customer Reviews
          </h2>
          <p className="text-charcoal-400 mb-10">
            See what our customers say about us on Google.
          </p>

          {/* Placeholder review card */}
          <div className="bg-cream-100 border border-charcoal-100 rounded-2xl p-8 mb-6">
            {/* Stars */}
            <div className="flex justify-center gap-1 mb-4" aria-label="5 star rating">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} size={28} className="text-gold-400 fill-gold-400" aria-hidden="true" />
              ))}
            </div>

            <p className="text-charcoal-500 text-base italic mb-4">
              "Google reviews for Subbiah Kaja Button &amp; Tailoring will appear here."
            </p>

            <p className="text-charcoal-300 text-sm">
              To display live reviews, connect a Google Places API key or paste verified
              review content into this section.
            </p>
          </div>

          {/* View on Google Maps */}
          <a
            href={business.googleMapsSearch}
            target="_blank"
            rel="noopener noreferrer"
            id="view-google-maps-btn"
            className="inline-flex items-center gap-2 px-6 py-3 bg-green-700 text-white font-semibold rounded-xl hover:bg-green-600 active:scale-95 transition-all shadow-sm"
            aria-label="View Subbiah Kaja Button and Tailoring on Google Maps"
          >
            <ExternalLink size={16} aria-hidden="true" />
            View Us on Google Maps
          </a>

          <p className="text-charcoal-300 text-xs mt-4">
            Find us on Google Maps and leave a review to help other customers.
          </p>
        </div>
      </div>
    </section>
  );
}
