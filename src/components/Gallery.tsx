import { useState, useCallback } from 'react';
import { X, ZoomIn } from 'lucide-react';

interface GalleryImage {
  src: string;
  alt: string;
  category: string;
}

// Real shop photos — 5 photos provided by the business owner
const galleryImages: GalleryImage[] = [
  {
    src: '/gallery/shop-exterior.jpg',
    alt: 'Subbiah Kaja Button & Tailoring shop front in Virugambakkam, Chennai — showing the storefront with signage',
    category: 'Shop',
  },
  {
    src: '/gallery/shop-interior.jpg',
    alt: 'Inside view of Subbiah Kaja tailoring shop — shelves stocked with tailoring supplies and a sewing machine',
    category: 'Shop',
  },
  {
    src: '/gallery/shop-signage.jpg',
    alt: 'Kaja Button and Overlock Materials signage on the wall of the shop in Virugambakkam',
    category: 'Shop',
  },
  {
    src: '/gallery/materials-buttons.jpg',
    alt: 'Large selection of colourful buttons in jars displayed on glass shelves at Subbiah Kaja Button shop',
    category: 'Materials',
  },
  {
    src: '/gallery/overlock-machine.jpg',
    alt: 'Professional JUKI overlock sewing machines used for garment finishing at Subbiah Kaja Tailoring',
    category: 'Machines',
  },
];

const CATEGORIES = ['All', 'Shop', 'Machines', 'Materials'];

// Placeholder SVG shown when image file is not yet uploaded
function PlaceholderImg({ alt, category }: { alt: string; category: string }) {
  const colors: Record<string, string> = {
    Shop: '#1a4731',
    Machines: '#2d6a4f',
    Work: '#1f5939',
    Materials: '#3a8a64',
  };
  return (
    <div
      className="w-full h-full flex flex-col items-center justify-center gap-2 p-4"
      style={{ background: colors[category] || '#1a4731' }}
      role="img"
      aria-label={alt}
    >
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <path d="m21 15-5-5L5 21" />
      </svg>
      <span className="text-white/50 text-xs text-center leading-snug">{alt.slice(0, 40)}</span>
    </div>
  );
}

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);
  const [lightboxAlt, setLightboxAlt] = useState('');
  const [imgErrors, setImgErrors] = useState<Set<string>>(new Set());

  const filtered = activeCategory === 'All'
    ? galleryImages
    : galleryImages.filter((img) => img.category === activeCategory);

  const openLightbox = useCallback((img: GalleryImage) => {
    if (imgErrors.has(img.src)) return;
    setLightboxSrc(img.src);
    setLightboxAlt(img.alt);
    document.body.style.overflow = 'hidden';
  }, [imgErrors]);

  const closeLightbox = useCallback(() => {
    setLightboxSrc(null);
    document.body.style.overflow = '';
  }, []);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') closeLightbox();
  };

  return (
    <section id="gallery" className="py-16 sm:py-20 bg-cream-100" aria-labelledby="gallery-heading">
      <div className="container-site">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="inline-block text-green-600 font-semibold text-sm tracking-widest uppercase mb-2">
            Our Shop
          </span>
          <h2 id="gallery-heading" className="text-3xl sm:text-4xl font-bold text-charcoal-800 mb-3">
            Gallery
          </h2>
          <p className="text-charcoal-400 max-w-md mx-auto text-sm">
            Take a look inside our shop, our machines, and our work.
          </p>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-8" role="group" aria-label="Filter gallery by category">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-sm font-semibold border transition-all ${
                activeCategory === cat
                  ? 'bg-green-700 text-white border-green-700 shadow-md'
                  : 'bg-white text-charcoal-700 border-charcoal-200 hover:border-green-400 hover:text-green-700'
              }`}
              aria-pressed={activeCategory === cat}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {filtered.map((img) => (
            <button
              key={img.src}
              className="relative aspect-square rounded-xl overflow-hidden bg-green-800 group focus:outline-none focus-visible:ring-2 focus-visible:ring-green-600 focus-visible:ring-offset-2"
              onClick={() => openLightbox(img)}
              aria-label={`View larger: ${img.alt}`}
              tabIndex={0}
            >
              {imgErrors.has(img.src) ? (
                <PlaceholderImg alt={img.alt} category={img.category} />
              ) : (
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={() => setImgErrors((prev) => new Set(prev).add(img.src))}
                />
              )}

              {/* Hover overlay */}
              {!imgErrors.has(img.src) && (
                <div className="absolute inset-0 bg-green-900/0 group-hover:bg-green-900/50 transition-all duration-300 flex items-center justify-center">
                  <ZoomIn
                    size={28}
                    className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-lg"
                    aria-hidden="true"
                  />
                </div>
              )}

              {/* Category badge */}
              <span className="absolute top-2 left-2 px-2 py-0.5 bg-black/40 text-white text-[10px] font-semibold rounded-full backdrop-blur-sm">
                {img.category}
              </span>
            </button>
          ))}
        </div>


      </div>

      {/* Lightbox */}
      {lightboxSrc && (
        <div
          className="lightbox-overlay"
          onClick={closeLightbox}
          onKeyDown={handleKeyDown}
          role="dialog"
          aria-modal="true"
          aria-label="Image viewer"
          tabIndex={0}
        >
          <button
            className="absolute top-4 right-4 z-10 p-2 bg-white/10 text-white rounded-full hover:bg-white/25 transition-colors"
            onClick={closeLightbox}
            aria-label="Close image viewer"
          >
            <X size={24} />
          </button>
          <img
            src={lightboxSrc}
            alt={lightboxAlt}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
