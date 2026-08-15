import { useState } from 'react';
import { useReveal } from '@/hooks/useReveal';

export function Newsletter() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
    setEmail('');
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section className="relative py-24 md:py-32 px-6 md:px-10 bg-ink-100 overflow-hidden noise-overlay">
      <div className="absolute inset-0 grid-lines opacity-30" />

      <div
        ref={ref}
        className={`reveal ${visible ? 'is-visible' : ''} relative z-10 max-w-2xl mx-auto text-center`}
      >
        <span className="font-body text-xs tracking-huge text-toxic font-medium uppercase mb-4 block">
          / 05 — Access
        </span>
        <h2 className="font-display font-bold text-4xl md:text-6xl text-bone tracking-ultra-tight mb-4">
          JOIN THE SECTOR
        </h2>
        <p className="font-body text-sm text-bone/50 mb-10 max-w-md mx-auto">
          Early access to drops. Exclusive campaigns. No spam — just signal.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="ENTER YOUR EMAIL"
            required
            className="flex-1 bg-ink border border-steel-700 px-5 py-4 font-body text-sm text-bone placeholder:text-steel-400 tracking-huge focus:outline-none focus:border-toxic transition-colors"
          />
          <button
            type="submit"
            className="px-8 py-4 bg-toxic text-ink font-display font-bold text-sm tracking-huge hover:bg-bone transition-colors duration-300"
          >
            ENTER
          </button>
        </form>

        {submitted && (
          <p className="mt-6 font-body text-sm text-toxic animate-fade-in">
            You're in. Watch your inbox for the signal.
          </p>
        )}

        <p className="mt-6 font-body text-[10px] tracking-huge text-steel-500 uppercase">
          By joining you agree to receive sector.wrld transmissions
        </p>
      </div>
    </section>
  );
}
