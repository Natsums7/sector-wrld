export function Marquee() {
  const items = [
    'SECTOR.WRLD',
    'NOT MADE FOR EVERYONE',
    'FW / 26',
    'UNDERGROUND DIVISION',
    'BUILT IN SHADOWS',
    'ENTER THE SECTOR',
  ];

  const repeated = [...items, ...items, ...items, ...items];

  return (
    <div className="relative py-5 border-y border-steel-800/40 bg-ink-100 overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {repeated.map((item, i) => (
          <div key={i} className="flex items-center">
            <span className="font-display font-bold text-2xl md:text-3xl tracking-huge text-bone/80 px-8">
              {item}
            </span>
            <span className="text-toxic text-2xl">/</span>
          </div>
        ))}
      </div>
    </div>
  );
}
