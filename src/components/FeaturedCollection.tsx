import { useReveal } from '@/hooks/useReveal';
import { collectionItems } from '@/data/products';

export function FeaturedCollection() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="collection" className="relative py-24 md:py-32 px-6 md:px-10 bg-ink-100 noise-overlay">
      <div className="max-w-[1400px] mx-auto">
        <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''} text-center mb-16`}>
          <span className="font-body text-xs tracking-huge text-toxic font-medium uppercase">
            / 03 — Full Catalog
          </span>
          <h2 className="font-display font-bold text-5xl md:text-7xl text-bone mt-3 tracking-ultra-tight">
            FEATURED<br />COLLECTION
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {collectionItems.map((item, i) => (
            <div
              key={item.id}
              className={`reveal ${visible ? 'is-visible' : ''} group relative cursor-pointer overflow-hidden`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-ink">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-110 group-hover:grayscale-0 grayscale-[30%]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />

                <div className="absolute inset-0 border-2 border-transparent group-hover:border-toxic/30 transition-all duration-500" />

                <div className="absolute bottom-0 left-0 right-0 p-6 flex items-end justify-between">
                  <div>
                    <h3 className="font-display font-bold text-xl text-bone mb-1">{item.name}</h3>
                    <span className="font-body text-xs tracking-huge text-bone/50 uppercase">
                      View Details
                    </span>
                  </div>
                  <span className="font-display font-bold text-lg text-toxic opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {item.price}
                  </span>
                </div>

                <div className="absolute top-4 right-4 w-10 h-10 border border-bone/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:border-toxic group-hover:rotate-45">
                  <span className="text-toxic text-lg group-hover:-rotate-45 transition-transform duration-500">+</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
