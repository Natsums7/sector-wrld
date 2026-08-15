import { useReveal } from '@/hooks/useReveal';

export function Campaign() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="campaign" className="relative h-[80vh] min-h-[500px] w-full overflow-hidden noise-overlay">
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/1585444/pexels-photo-1585444.jpeg?auto=compress&cs=tinysrgb&h=1200&w=1920"
          alt="Hooded figure with LED mask"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/30" />
      </div>

      <div
        ref={ref}
        className={`reveal ${visible ? 'is-visible' : ''} relative z-10 h-full flex items-center px-6 md:px-16`}
      >
        <div className="max-w-2xl">
          <span className="font-body text-xs tracking-huge text-toxic font-medium uppercase mb-4 block">
            / 02 — Campaign
          </span>
          <h2 className="font-display font-bold text-5xl md:text-7xl lg:text-8xl text-bone leading-[0.9] tracking-ultra-tight">
            NOT MADE<br />
            FOR<br />
            <span className="text-toxic">EVERYONE.</span>
          </h2>
          <p className="mt-8 font-body text-sm text-bone/60 max-w-sm leading-relaxed">
            We don't chase trends. We don't follow rules. We build for the ones who don't fit in — and never wanted to.
          </p>
          <a
            href="#collection"
            className="mt-10 inline-flex items-center gap-3 font-display font-bold text-sm tracking-huge text-bone hover:text-toxic transition-colors group"
          >
            EXPLORE THE DROP
            <span className="w-12 h-px bg-bone group-hover:bg-toxic group-hover:w-20 transition-all duration-300" />
          </a>
        </div>
      </div>
    </section>
  );
}
