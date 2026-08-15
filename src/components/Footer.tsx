import { Instagram, Music2, Mail, Truck, RotateCcw } from 'lucide-react';

export function Footer() {
  return (
    <footer className="relative bg-ink border-t border-steel-800/50 noise-overlay">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <h3 className="font-display font-bold text-2xl text-bone tracking-huge mb-4">
              SECTOR<span className="text-toxic">.</span>WRLD
            </h3>
            <p className="font-body text-sm text-bone/40 leading-relaxed max-w-xs">
              Dark futuristic underground streetwear. Built for those who move in shadows.
            </p>
          </div>

          <div>
            <h4 className="font-body text-xs tracking-huge text-toxic font-medium uppercase mb-5">
              Connect
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="flex items-center gap-3 font-body text-sm text-bone/60 hover:text-bone transition-colors group">
                  <Instagram size={16} className="text-bone/40 group-hover:text-toxic transition-colors" />
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-3 font-body text-sm text-bone/60 hover:text-bone transition-colors group">
                  <Music2 size={16} className="text-bone/40 group-hover:text-toxic transition-colors" />
                  TikTok
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-3 font-body text-sm text-bone/60 hover:text-bone transition-colors group">
                  <Mail size={16} className="text-bone/40 group-hover:text-toxic transition-colors" />
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-body text-xs tracking-huge text-toxic font-medium uppercase mb-5">
              Info
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="flex items-center gap-3 font-body text-sm text-bone/60 hover:text-bone transition-colors group">
                  <Truck size={16} className="text-bone/40 group-hover:text-toxic transition-colors" />
                  Shipping
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-3 font-body text-sm text-bone/60 hover:text-bone transition-colors group">
                  <RotateCcw size={16} className="text-bone/40 group-hover:text-toxic transition-colors" />
                  Returns
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-body text-xs tracking-huge text-toxic font-medium uppercase mb-5">
              Sector
            </h4>
            <ul className="space-y-3">
              <li><a href="#latest-drop" className="font-body text-sm text-bone/60 hover:text-bone transition-colors">Shop</a></li>
              <li><a href="#collection" className="font-body text-sm text-bone/60 hover:text-bone transition-colors">Collection</a></li>
              <li><a href="#statement" className="font-body text-sm text-bone/60 hover:text-bone transition-colors">Manifesto</a></li>
              <li><a href="#" className="font-body text-sm text-bone/60 hover:text-bone transition-colors">Size Guide</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-steel-800/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-[10px] tracking-huge text-steel-500 uppercase">
            © 2026 Sector.wrld — All Rights Reserved
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="font-body text-[10px] tracking-huge text-steel-500 hover:text-bone transition-colors uppercase">Privacy</a>
            <a href="#" className="font-body text-[10px] tracking-huge text-steel-500 hover:text-bone transition-colors uppercase">Terms</a>
            <a href="#" className="font-body text-[10px] tracking-huge text-steel-500 hover:text-bone transition-colors uppercase">Cookies</a>
          </div>
        </div>
      </div>

      <div className="border-t border-steel-800/30 py-4 overflow-hidden">
        <div className="flex animate-marquee-reverse whitespace-nowrap">
          {Array(8).fill(0).map((_, i) => (
            <span key={i} className="font-display font-bold text-xs tracking-mega text-steel-700 px-6">
              SECTOR.WRLD — NOT MADE FOR EVERYONE —
            </span>
          ))}
        </div>
      </div>
    </footer>
  );
}
