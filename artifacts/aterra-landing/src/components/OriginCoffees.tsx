import React, { useRef, useState, useEffect, useCallback } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const origins = [
  {
    lot: 'LOT 01',
    name: 'Kintamani Bali',
    image: 'origin-kintamani.jpg',
    region: 'Bali',
    altitude: '900–1,600 masl',
    process: 'Fully Washed',
    variety: 'Arabica',
    desc: "Volcanic-slope arabica under the traditional Subak Abian cooperative system; Indonesia's first GI-certified coffee, fully washed for a bright, clean cup.",
    tags: ['Bright Citrus', 'Floral', 'Honey Finish', 'Clean Cup'],
    stamp: 'GI CERTIFIED — 2008',
  },
  {
    lot: 'LOT 02',
    name: 'Jember',
    image: 'origin-jember.jpg',
    region: 'East Java',
    altitude: '400–900 masl',
    process: 'Wet Hulled',
    variety: 'Robusta',
    desc: 'A balanced Robusta region prized by international blenders for its consistent profile and reliable bulk supply.',
    tags: ['Full Body', 'Roasted Nuts', 'Caramel', 'Low Acidity'],
    stamp: undefined,
  },
  {
    lot: 'LOT 03',
    name: 'Ijen',
    image: 'origin-ijen.jpg',
    region: 'East Java',
    altitude: '1,000+ masl',
    process: 'Semi-Washed',
    variety: 'Arabica / Robusta',
    desc: 'Volcanic plateau coffee processed semi-washed (Giling Basah), producing a distinctly syrupy, full body.',
    tags: ['Smoky', 'Dark Chocolate', 'Spice', 'Syrupy Body'],
    stamp: undefined,
  },
  {
    lot: 'LOT 04',
    name: 'Java Preanger',
    image: 'origin-bandung.jpg',
    region: 'West Java',
    altitude: '1,200–1,500 masl',
    process: 'Washed',
    variety: 'Arabica',
    desc: 'A heritage colonial-era growing region in Bandung producing a smooth, approachable cup with good body.',
    tags: ['Medium Body', 'Caramel', 'Toasted Almond', 'Clean Finish'],
    stamp: undefined,
  },
  {
    lot: 'LOT 05',
    name: 'Lampung',
    image: 'origin-lampung.jpg',
    region: 'Sumatra',
    altitude: '400–1,000 masl',
    process: 'Wet Hulled',
    variety: 'Robusta',
    desc: "Indonesia's largest Robusta region — a bold, dependable backbone for commercial blends worldwide.",
    tags: ['Bold', 'Strong Bitterness', 'Earthy', 'Robust Finish'],
    stamp: undefined,
  },
  {
    lot: 'LOT 06',
    name: 'Kerinci',
    image: 'origin-kerinci.jpg',
    region: 'Jambi, Sumatra',
    altitude: '1,500+ masl',
    process: 'Wet Hulled',
    variety: 'Arabica',
    desc: "One of Indonesia's highest growing regions, producing complex and bright character unusual for a Sumatran origin.",
    tags: ['Dark Fruit', 'Herbal Spice', 'Heavy Body', 'Rich Aftertaste'],
    stamp: undefined,
  },
  {
    lot: 'LOT 07',
    name: 'Palembang',
    image: 'origin-palembang.jpg',
    region: 'South Sumatra',
    altitude: '200–600 masl',
    process: 'Natural',
    variety: 'Robusta',
    desc: 'Bold lowland Robusta with a traditional tubruk-style character, competitive pricing for commercial-grade buyers.',
    tags: ['Bold', 'Smoky', 'Thick Mouthfeel', 'Low Acidity'],
    stamp: undefined,
  },
];

type Origin = (typeof origins)[0];

function LotCard({
  origin,
  index,
  shouldReduceMotion,
  isMobile,
}: {
  origin: Origin;
  index: number;
  shouldReduceMotion: boolean | null;
  isMobile: boolean;
}) {
  const cardStyle: React.CSSProperties = {
    border: '1px solid var(--ink)',
    borderRadius: 0,
    ...(isMobile
      ? { width: '85vw', flexShrink: 0, scrollSnapAlign: 'start' }
      : {}),
  };

  const inner = (
    <div className="bg-[var(--paper)] flex flex-col relative" style={cardStyle}>
      {/* Origin photo flush at top */}
      <div
        className="w-full overflow-hidden shrink-0"
        style={{ aspectRatio: '3/2', borderBottom: '1px solid var(--ink)' }}
      >
        <img
          src={`${import.meta.env.BASE_URL}${origin.image}`}
          alt={`${origin.name} coffee origin`}
          className="photo-filter w-full h-full object-cover"
          loading="lazy"
          width={600}
          height={400}
        />
      </div>

      {/* Card body */}
      <div className="flex flex-col flex-1 relative" style={{ padding: '1.25rem' }}>
        {origin.stamp && (
          <motion.div
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 1.2 }}
            whileInView={shouldReduceMotion ? { opacity: 0.92 } : { opacity: 0.92, scale: 1 }}
            transition={{ type: 'spring', stiffness: 400, damping: 15, delay: 0.2 }}
            className="absolute top-3 right-3 rubber-stamp z-10"
          >
            {origin.stamp}
          </motion.div>
        )}

        <div className="font-['IBM_Plex_Mono'] text-[var(--ink)] uppercase tracking-[0.1em] font-semibold text-sm mb-3 pr-10">
          {origin.lot} — {origin.name.toUpperCase()}
        </div>

        <div className="w-full mb-3" style={{ height: '1px', background: 'var(--jute)' }} />

        <div className="flex flex-col gap-1 mb-3">
          {(
            [
              ['REGION',   origin.region],
              ['ALTITUDE', origin.altitude],
              ['PROCESS',  origin.process],
              ['VARIETY',  origin.variety],
            ] as [string, string][]
          ).map(([label, value]) => (
            <div key={label} className="lot-row">
              <span className="lot-label">{label}</span>
              <div className="lot-leader" />
              <span className="lot-value">{value}</span>
            </div>
          ))}
        </div>

        <div className="w-full mb-3" style={{ height: '1px', background: 'var(--jute)', opacity: 0.5 }} />

        <p className="font-['Archivo'] text-[var(--ink)] text-sm leading-[1.65] mb-4 flex-1 line-clamp-2">
          {origin.desc}
        </p>

        <div className="flex flex-wrap gap-2 mt-auto">
          {origin.tags.map((tag) => (
            <span
              key={tag}
              className="border border-[var(--ink)] text-[var(--ink)] px-2 py-1 font-['IBM_Plex_Mono'] font-semibold uppercase tracking-[0.05em] rounded-none bg-transparent"
              style={{ fontSize: '0.62rem' }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );

  if (isMobile) return inner;

  return (
    <motion.div
      key={origin.name}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={index === 6 ? 'md:col-span-2 lg:col-span-1' : ''}
    >
      {inner}
    </motion.div>
  );
}

export function OriginCoffees() {
  const shouldReduceMotion = useReducedMotion();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check, { passive: true });
    return () => window.removeEventListener('resize', check);
  }, []);

  const handleScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = el.scrollWidth / origins.length;
    const idx = Math.round(el.scrollLeft / cardWidth);
    setActiveIndex(Math.min(idx, origins.length - 1));
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener('scroll', handleScroll, { passive: true });
    return () => el.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <section
      id="origins"
      className="py-20 md:py-32 bg-[var(--ink)] border-t border-dashed border-[var(--jute)]"
    >
      <div className="max-w-7xl mx-auto flex flex-col">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-16 flex flex-col gap-6 px-5 md:px-12"
        >
          <div className="flex items-center gap-4">
            <span className="font-['IBM_Plex_Mono'] text-[var(--jute)] uppercase tracking-[0.1em] text-sm font-semibold whitespace-nowrap">
              DOC 04 / ORIGIN COFFEES
            </span>
            <div className="flex-1" style={{ height: '1px', background: 'var(--jute)' }} />
          </div>
          <div>
            <h2
              className="font-['Archivo'] font-black uppercase text-[var(--offwhite)] tracking-[-0.02em] leading-[1.05] mb-2"
              style={{ fontSize: 'clamp(2rem, 4vw + 0.5rem, 3rem)' }}
            >
              ORIGIN COFFEES
            </h2>
            <p className="font-['IBM_Plex_Mono'] text-[var(--offwhite)]/60 text-sm uppercase tracking-[0.05em]">
              Seven distinct origins, one standard of quality.
            </p>
          </div>
        </motion.div>

        {/* Mobile: horizontal snap carousel */}
        {isMobile ? (
          <div className="flex flex-col gap-4">
            <div
              ref={scrollRef}
              className="flex gap-4 overflow-x-auto carousel-scroll px-5"
              style={{
                scrollSnapType: 'x mandatory',
                WebkitOverflowScrolling: 'touch',
                paddingRight: 'calc(15vw + 1.25rem)',
              }}
            >
              {origins.map((origin, i) => (
                <LotCard
                  key={origin.name}
                  origin={origin}
                  index={i}
                  shouldReduceMotion={shouldReduceMotion}
                  isMobile={true}
                />
              ))}
            </div>

            {/* Progress indicator */}
            <div className="flex items-center justify-center gap-3 px-5 pb-2">
              <span className="font-['IBM_Plex_Mono'] text-[var(--jute)] text-sm uppercase tracking-[0.1em]">
                LOT {String(activeIndex + 1).padStart(2, '0')} /{' '}
                {String(origins.length).padStart(2, '0')}
              </span>
              <div className="flex gap-1.5">
                {origins.map((_, i) => (
                  <div
                    key={i}
                    style={{
                      width: i === activeIndex ? '16px' : '4px',
                      height: '4px',
                      background: 'var(--jute)',
                      opacity: i === activeIndex ? 1 : 0.3,
                      borderRadius: 0,
                      transition: 'width 0.2s, opacity 0.2s',
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        ) : (
          /* Desktop: 3-column grid */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8 px-5 md:px-12">
            {origins.map((origin, i) => (
              <LotCard
                key={origin.name}
                origin={origin}
                index={i}
                shouldReduceMotion={shouldReduceMotion}
                isMobile={false}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
