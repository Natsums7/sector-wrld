import { useReveal } from '@/hooks/useReveal';
import { products } from '@/data/products';

export function LatestDrop() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="latest-drop" className="relative py-24 md:py-32 px-6 md:px-10 bg-ink noise-overlay">
      <div className="max-w-[1400px] mx-auto">
        <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''} flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4`}>
          <div>
            <span className="font-body text-xs tracking-huge text-toxic font-medium uppercase">
              / 01 — Fresh Arrivals
            </span>
            <h2 className="font-display font-bold text-5xl md:text-7xl text-bone mt-3 tracking-ultra-tight">
              LATEST DROP
            </h2>
          </div>
          <a href="#collection" className="font-body text-xs tracking-huge text-bone/60 hover:text-toxic transition-colors flex items-center gap-2 group">
            VIEW ALL
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {products.map((product, i) => (
            <div
              key={product.id}
              className={`reveal ${visible ? 'is-visible' : ''} group cursor-pointer`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-ink-100 mb-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/20 transition-colors duration-500" />

                {product.tag && (
                  <span className="absolute top-3 left-3 px-3 py-1 bg-toxic text-ink font-body text-[10px] tracking-huge font-bold">
                    {product.tag}
                  </span>
                )}

                <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <button className="w-full py-3 bg-bone text-ink font-display font-bold text-xs tracking-huge hover:bg-toxic transition-colors">
                    ADD TO CART
                  </button>
                </div>
              </div>

              <div className="flex items-start justify-between">
                <div>
                  <span className="font-body text-[10px] tracking-huge text-steel-300 uppercase block mb-1">
                    {product.category}
                  </span>
                  <h3 className="font-display font-bold text-base text-bone group-hover:text-toxic transition-colors duration-300">
                    {product.name}
                  </h3>
                </div>
                <span className="font-display font-bold text-base text-bone">{product.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
