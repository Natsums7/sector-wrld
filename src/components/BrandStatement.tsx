import { useReveal } from '@/hooks/useReveal';

export function BrandStatement() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="statement" className="relative py-32 md:py-48 px-6 md:px-10 bg-ink overflow-hidden noise-overlay">
      <div className="absolute inset-0 grid-lines opacity-30" />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        <span className="font-display font-bold text-[20vw] text-stroke leading-none whitespace-nowrap select-none">
          SECTOR
        </span>
      </div>

      <div
        ref={ref}
        className={`reveal ${visible ? 'is-visible' : ''} relative z-10 max-w-3xl mx-auto text-center`}
      >
        <span className="font-body text-xs tracking-huge text-toxic font-medium uppercase mb-6 block">
          / 04 — Manifesto
        </span>
        <p className="font-display font-bold text-3xl md:text-5xl text-bone leading-[1.1] tracking-ultra-tight">
          We don't dress you for the world.
          <br />
          We dress you <span className="text-toxic">against</span> it.
        </p>
        <p className="mt-10 font-body text-sm text-bone/50 max-w-lg mx-auto leading-relaxed">
          SECTOR.WRLD is a uniform for the unseen. Every stitch is a decision. Every drop is a declaration. No compromise. No apology.
        </p>
        <div className="mt-10 flex items-center justify-center gap-6">
          <span className="font-body text-[10px] tracking-huge text-steel-400 uppercase">Est. 2026</span>
          <span className="w-1 h-1 rounded-full bg-toxic" />
          <span className="font-body text-[10px] tracking-huge text-steel-400 uppercase">Underground</span>
          <span className="w-1 h-1 rounded-full bg-toxic" />
          <span className="font-body text-[10px] tracking-huge text-steel-400 uppercase">No Compromise</span>
        </div>
      </div>
    </section>
  );
}
