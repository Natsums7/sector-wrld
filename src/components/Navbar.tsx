import { useEffect, useState } from 'react';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { label: 'SHOP', href: '#latest-drop' },
    { label: 'COLLECTION', href: '#collection' },
    { label: 'CAMPAIGN', href: '#campaign' },
    { label: 'ABOUT', href: '#statement' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-ink/90 backdrop-blur-md border-b border-steel-800/50 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <nav className="max-w-[1400px] mx-auto px-6 md:px-10 flex items-center justify-between">
        <a href="#hero" className="font-display text-xl font-bold tracking-huge text-bone hover:text-toxic transition-colors duration-300">
          SECTOR<span className="text-toxic">.</span>WRLD
        </a>

        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-body text-xs tracking-huge font-medium text-bone/70 hover:text-toxic transition-colors duration-300 relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-toxic transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <button className="font-body text-xs tracking-huge font-medium text-bone/70 hover:text-bone transition-colors">
            CART (0)
          </button>
          <button className="px-5 py-2 border border-bone/20 hover:border-toxic hover:text-toxic font-body text-xs tracking-huge font-medium transition-all duration-300">
            ACCOUNT
          </button>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Menu"
        >
          <span className={`w-6 h-px bg-bone transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[6px]' : ''}`} />
          <span className={`w-6 h-px bg-bone transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`w-6 h-px bg-bone transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[6px]' : ''}`} />
        </button>
      </nav>

      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-ink/95 backdrop-blur-md border-b border-steel-800/50">
          <div className="flex flex-col px-6 py-6 gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="font-display text-lg font-bold tracking-huge text-bone/80 hover:text-toxic transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="flex gap-4 pt-4 border-t border-steel-800/50">
              <button className="font-body text-xs tracking-huge text-bone/70">CART (0)</button>
              <button className="px-5 py-2 border border-bone/20 font-body text-xs tracking-huge text-bone">
                ACCOUNT
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
