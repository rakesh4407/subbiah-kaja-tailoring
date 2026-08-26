import { Scissors, Zap, Circle, MessageCircle } from 'lucide-react';
import { services, business } from '../config/business';

const iconMap: Record<string, React.ReactNode> = {
  scissors: <Scissors size={28} />,
  zap: <Zap size={28} />,
  circle: <Circle size={28} />,
};

export default function Services() {
  const waUrl = `https://wa.me/${business.whatsappNumber}?text=${encodeURIComponent(business.whatsappMessage)}`;

  return (
    <section id="services" className="py-16 sm:py-20 bg-white" aria-labelledby="services-heading">
      <div className="container-site">
        {/* Section header */}
        <div className="text-center mb-12">
          <span className="inline-block text-green-600 font-semibold text-sm tracking-widest uppercase mb-2">
            What We Do
          </span>
          <h2 id="services-heading" className="text-3xl sm:text-4xl font-bold text-charcoal-800 mb-3">
            Our Services
          </h2>
          <p className="text-charcoal-400 max-w-lg mx-auto">
            Professional tailoring and garment finishing services for all your needs.
          </p>
        </div>

        {/* Service cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service) => (
            <article
              key={service.id}
              id={`service-${service.id}`}
              className="flex flex-col bg-cream-100 border border-charcoal-100 rounded-2xl p-6 hover:shadow-lg hover:border-green-200 hover:-translate-y-1 transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-14 h-14 flex items-center justify-center bg-green-800 text-white rounded-xl mb-5">
                {iconMap[service.icon]}
              </div>

              {/* Name */}
              <h3 className="text-xl font-bold text-charcoal-800 mb-2">{service.name}</h3>

              {/* Description */}
              <p className="text-charcoal-400 text-sm leading-relaxed mb-4">
                {service.description}
              </p>

              {/* Service items list */}
              <ul className="flex flex-col gap-1.5 mb-6 flex-1" aria-label={`${service.name} items`}>
                {service.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-charcoal-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 flex-shrink-0" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>

              {/* WhatsApp enquiry */}
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                id={`enquire-${service.id}-btn`}
                className="flex items-center justify-center gap-2 px-4 py-2.5 bg-green-700 text-white text-sm font-semibold rounded-lg hover:bg-green-600 active:scale-95 transition-all mt-auto"
                aria-label={`Enquire about ${service.name} on WhatsApp`}
              >
                <MessageCircle size={16} aria-hidden="true" />
                Enquire on WhatsApp
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
