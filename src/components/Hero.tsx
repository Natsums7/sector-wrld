export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden noise-overlay"
    >
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/29719871/pexels-photo-29719871.jpeg?auto=compress&cs=tinysrgb&h=1400&w=900"
          alt="Model in underground garage"
          className="w-full h-full object-cover object-center opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/40 to-ink" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/80 via-transparent to-ink/80" />
      </div>

      <div className="absolute inset-0 grid-lines z-[1] opacity-50" />

      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-5xl mx-auto">
        <div className="animate-fade-down mb-6">
          <span className="font-body text-xs tracking-mega text-toxic font-medium uppercase">
            FW / 26 — Underground Division
          </span>
        </div>

        <h1 className="font-display font-bold text-bone leading-[0.85] tracking-ultra-tight animate-fade-up">
          <span className="block text-[clamp(3rem,12vw,9rem)]">SECTOR</span>
          <span className="block text-[clamp(3rem,12vw,9rem)] text-stroke">.WRLD</span>
        </h1>

        <p className="mt-8 font-body text-sm md:text-base text-bone/60 max-w-md leading-relaxed animate-fade-up"
           style={{ animationDelay: '0.2s', opacity: 0, animationFillMode: 'forwards' }}>
          Garments forged in the underground. Built for those who move in shadows.
        </p>

        <div className="mt-12 flex flex-col sm:flex-row gap-4 animate-fade-up"
             style={{ animationDelay: '0.4s', opacity: 0, animationFillMode: 'forwards' }}>
          <a
            href="#latest-drop"
            className="group relative px-10 py-4 bg-toxic text-ink font-display font-bold text-sm tracking-huge overflow-hidden transition-all duration-300 hover:bg-bone"
          >
            <span className="relative z-10">SHOP DROP</span>
          </a>
          <a
            href="#campaign"
            className="group relative px-10 py-4 border border-bone/30 text-bone font-display font-bold text-sm tracking-huge overflow-hidden transition-all duration-300 hover:border-toxic hover:text-toxic"
          >
            ENTER THE SECTOR
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
        <span className="font-body text-[10px] tracking-huge text-bone/40 uppercase">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-toxic to-transparent animate-scroll-indicator" />
      </div>

      <div className="absolute top-1/2 left-6 -translate-y-1/2 z-10 hidden lg:flex flex-col gap-3">
        <span className="font-body text-[10px] tracking-huge text-bone/30 [writing-mode:vertical-rl] rotate-180">
          EST. 2026
        </span>
      </div>
      <div className="absolute top-1/2 right-6 -translate-y-1/2 z-10 hidden lg:flex flex-col gap-3">
        <span className="font-body text-[10px] tracking-huge text-bone/30 [writing-mode:vertical-rl]">
          SECTOR / 001
        </span>
      </div>
    </section>
  );
}
