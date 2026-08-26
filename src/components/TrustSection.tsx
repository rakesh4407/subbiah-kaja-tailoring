import { MapPin, Scissors, Tag, Phone, Shirt } from 'lucide-react';
import { trustPoints } from '../config/business';

const iconMap: Record<string, React.ReactNode> = {
  'map-pin': <MapPin size={22} />,
  scissors: <Scissors size={22} />,
  tag: <Tag size={22} />,
  phone: <Phone size={22} />,
  shirt: <Shirt size={22} />,
};

export default function TrustSection() {
  return (
    <section
      className="py-14 sm:py-16 bg-green-50 border-y border-green-100"
      aria-labelledby="trust-heading"
    >
      <div className="container-site">
        <div className="text-center mb-10">
          <h2 id="trust-heading" className="text-2xl sm:text-3xl font-bold text-charcoal-800">
            Why Visit Us?
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {trustPoints.map((point) => (
            <div
              key={point.title}
              className="flex flex-col items-center text-center p-5 bg-white rounded-xl border border-green-100 shadow-sm hover:shadow-md hover:border-green-300 transition-all"
            >
              <div className="w-12 h-12 flex items-center justify-center bg-green-700 text-white rounded-xl mb-3">
                {iconMap[point.icon]}
              </div>
              <h3 className="font-bold text-charcoal-800 mb-1.5 text-sm">{point.title}</h3>
              <p className="text-charcoal-400 text-xs leading-relaxed">{point.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
