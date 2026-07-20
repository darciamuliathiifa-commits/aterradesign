import React, { useRef, useState, useEffect, useCallback } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const origins = [
  {
    lot: 'LOT 01',
    shortTitle: 'KINTAMANI',          // "Bali" in region; drop from title at narrow widths
    name: 'Kintamani Bali',
    image: 'origin-kintamani.jpg',
    region: 'Bali',
    altitude: '900–1,600 masl',
    process: 'Fully Washed',
    variety: 'Arabica',
    desc: "Volcanic-slope arabica under the traditional Subak Abian cooperative system; Indonesia's first GI certified coffee, fully washed for a bright, clean cup.",
    tags: ['Bright Citrus', 'Floral', 'Honey Finish', 'Clean Cup'],
    stamp: 'GI CERTIFIED — 2008',
  },
  {
    lot: 'LOT 02',
    shortTitle: 'JEMBER',
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
    shortTitle: 'IJEN',
    name: 'Ijen',
    image: 'origin-ijen.jpg',
    region: 'East Java',
    altitude: '1,000+ masl',
    process: 'Semi-Washed',
    variety: 'Arabica/Robusta',       // Slash without spaces — fits on one line
    desc: 'Volcanic plateau coffee processed semi-washed (Giling Basah), producing a distinctly syrupy, full body.',
    tags: ['Smoky', 'Dark Chocolate', 'Spice', 'Syrupy Body'],
    stamp: undefined,
  },
  {
    lot: 'LOT 04',
    shortTitle: 'JAVA PREANGER',
    name: 'Java Preanger',
    image: 'origin-bandung.jpg',
    region: 'West Java',
    altitude: '1,200–1,500 masl',
    process: 'Washed',
    variety: 'Arabica',
    desc: 'A heritage colonial era growing region in Bandung producing a smooth, approachable cup with good body.',
    tags: ['Medium Body', 'Caramel', 'Toasted Almond', 'Clean Finish'],
    stamp: undefined,
  },
  {
    lot: 'LOT 05',
    shortTitle: 'LAMPUNG',
    name: 'Lampung',
    image: 'origin-lampung.jpg',
    region: 'Sumatra',
    altitude: '400–1,000 masl',
    process: 'Wet Hulled',
    variety: 'Robusta',
    desc: "Indonesia's largest Robusta region, a bold, dependable backbone for commercial blends worldwide.",
    tags: ['Bold', 'Strong Bitterness', 'Earthy', 'Robust Finish'],
    stamp: undefined,
  },
  {
    lot: 'LOT 06',
    shortTitle: 'KERINCI',
    name: 'Kerinci',
    image: 'origin-kerinci.jpg',
    region: 'Jambi',                  // Shortened from "Jambi, Sumatra"
    altitude: '1,500+ masl',
    process: 'Wet Hulled',
    variety: 'Arabica',
    desc: "One of Indonesia's highest growing regions, producing complex and bright character unusual for a Sumatran origin.",
    tags: ['Dark Fruit', 'Herbal Spice', 'Heavy Body', 'Rich Aftertaste'],
    stamp: undefined,
  },
  {
    lot: 'LOT 07',
    shortTitle: 'PALEMBANG',
    name: 'Palembang',
    image: 'origin-palembang.jpg',
    region: 'South Sumatra',
    altitude: '200–600 masl',
    process: 'Natural',
    variety: 'Robusta',
    desc: 'Bold lowland Robusta with a traditional tubruk style character, competitive pricing for commercial-grade buyers.',
    tags: ['Bold', 'Smoky', 'Thick Mouthfeel', 'Low Acidity'],
    stamp: undefined,
  },
  {
    lot: 'LOT 08',
    shortTitle: 'TORAJA',
    name: 'Toraja',
    image: 'origin-toraja.jpg',
    region: 'South Sulawesi',
    altitude: '1,400–2,000 masl',
    process: 'Wet Hulled',
    variety: 'Arabica',
    desc: "Grown in the volcanic highlands of Tana Toraja, one of Indonesia's most celebrated specialty origins alongside Sumatra Mandheling and Java. Wet-hulled for a thick, velvety body and a long, mellow finish.",
    tags: ['Velvety Body', 'Earthy Spice', 'Chocolate Notes', 'Mellow Finish'],
    stamp: undefined,
  },
];

type Origin = (typeof origins)[0];

// Shared stamp badge — always over a photo, never over text
function StampBadge({
  text,
  shouldReduceMotion,
}: {
  text: string;
  shouldReduceMotion: boolean | null;
}) {
  return (
    <motion.div
      initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 1.05 }}
      whileInView={shouldReduceMotion ? { opacity: 0.95 } : { opacity: 0.95, scale: 1 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20, delay: 0.15 }}
      style={{
        position: 'absolute',
        top: '14px',
        right: '14px',
        zIndex: 10,
        fontFamily: "'IBM Plex Mono', monospace",
        fontSize: '11px',
        fontWeight: 600,
        textTransform: 'uppercase',
        letterSpacing: '1.5px',
        color: '#B3372B',
        border: '2px solid #B3372B',
        background: '#F2ECDD',
        padding: '6px 10px',
        transform: 'rotate(-3deg)',
        whiteSpace: 'nowrap',
        maxWidth: '60%',
        lineHeight: 1.3,
        opacity: 0.95,
      }}
    >
      {text}
    </motion.div>
  );
}

// Compact desktop lot card (2/3/4-col grid)
function DesktopLotCard({
  origin,
  index,
  shouldReduceMotion,
}: {
  origin: Origin;
  index: number;
  shouldReduceMotion: boolean | null;
}) {
  // Short labels so values have room to breathe
  const tableRows: [string, string][] = [
    ['REG.',  origin.region],
    ['ALT.',  origin.altitude],
    ['PROC.', origin.process],
    ['VAR.',  origin.variety],
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={
        shouldReduceMotion ? { duration: 0 } : { duration: 0.5, delay: index * 0.08 }
      }
      className="h-full"
    >
      <div
        className="bg-[var(--paper)] flex flex-col h-full"
        style={{ border: '1px solid var(--ink)' }}
      >
        {/* Photo — 4:3, stamp lives here */}
        <div
          className="w-full shrink-0 relative"
          style={{ aspectRatio: '4/3', borderBottom: '1px solid var(--ink)' }}
        >
          <div className="absolute inset-0 overflow-hidden">
            <img
              src={`${import.meta.env.BASE_URL}${origin.image}`}
              alt={`${origin.name} coffee origin`}
              className="photo-filter w-full h-full object-cover"
              loading="lazy"
              width={600}
              height={450}
            />
          </div>
          {origin.stamp && (
            <StampBadge text={origin.stamp} shouldReduceMotion={shouldReduceMotion} />
          )}
        </div>

        {/* Card body */}
        <div
          className="flex flex-col flex-1"
          style={{ padding: '1rem' }}
        >
          {/* Lot title — one line, never wraps */}
          <div
            className="font-['IBM_Plex_Mono'] text-[var(--ink)] uppercase font-semibold mb-2 whitespace-nowrap overflow-hidden"
            style={{ fontSize: '11px', letterSpacing: '0.08em', textOverflow: 'ellipsis' }}
          >
            {origin.lot} — {origin.shortTitle}
          </div>

          <div style={{ height: '1px', background: 'var(--jute)', marginBottom: '8px' }} />

          {/* Data table — compact, no wrapping */}
          <div className="flex flex-col mb-2" style={{ gap: '3px' }}>
            {tableRows.map(([label, value]) => (
              <div
                key={label}
                className="flex items-baseline"
                style={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: '12px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  gap: '4px',
                  overflow: 'hidden',
                }}
              >
                <span
                  className="shrink-0"
                  style={{ color: 'var(--jute)', whiteSpace: 'nowrap' }}
                >
                  {label}
                </span>
                {/* Dotted leader */}
                <span
                  className="flex-1 self-end"
                  style={{
                    borderBottom: '1px dotted var(--jute)',
                    marginBottom: '3px',
                    minWidth: '8px',
                    opacity: 0.5,
                  }}
                />
                <span
                  className="shrink-0"
                  style={{ color: 'var(--ink)', whiteSpace: 'nowrap', fontWeight: 500 }}
                >
                  {value}
                </span>
              </div>
            ))}
          </div>

          <div
            style={{
              height: '1px',
              background: 'var(--jute)',
              opacity: 0.5,
              marginBottom: '10px',
            }}
          />

          {/* Description — 2-line clamp, flex-1 so chips stay at bottom */}
          <p
            className="font-['Archivo'] text-[var(--ink)] leading-[1.6] flex-1 line-clamp-2"
            style={{ fontSize: '13px', marginBottom: '12px' }}
          >
            {origin.desc}
          </p>

          {/* Taste chips — max 3, 10px mono, anchored to bottom */}
          <div className="flex flex-wrap gap-1.5 mt-auto">
            {origin.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="font-['IBM_Plex_Mono'] font-semibold uppercase text-[var(--ink)] bg-transparent"
                style={{
                  fontSize: '10px',
                  letterSpacing: '0.05em',
                  border: '1px solid var(--ink)',
                  padding: '3px 6px',
                  whiteSpace: 'nowrap',
                }}
              >
                {tag}
              </span>
            ))}
            {origin.tags.length > 3 && (
              <span
                className="font-['IBM_Plex_Mono'] font-semibold uppercase"
                style={{
                  fontSize: '10px',
                  letterSpacing: '0.05em',
                  color: 'var(--jute)',
                  padding: '3px 0',
                }}
              >
                +{origin.tags.length - 3}
              </span>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// CTA card — 8th cell in the 4-col grid
function CtaCard({ index, shouldReduceMotion }: { index: number; shouldReduceMotion: boolean | null }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={
        shouldReduceMotion ? { duration: 0 } : { duration: 0.5, delay: index * 0.08 }
      }
      className="h-full"
    >
      <div
        className="flex flex-col justify-between h-full"
        style={{ background: 'var(--ink)', border: '1px solid var(--jute)' }}
      >
        <div style={{ padding: '1.5rem' }} className="flex flex-col flex-1">
          {/* Mono eyebrow */}
          <div
            className="font-['IBM_Plex_Mono'] uppercase font-semibold mb-4"
            style={{
              fontSize: '11px',
              letterSpacing: '0.08em',
              color: 'var(--jute)',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
          >
            LOT 08 — YOUR SELECTION
          </div>

          {/* Dashed rule */}
          <div
            style={{
              height: '1px',
              borderTop: '1px dashed var(--jute)',
              opacity: 0.5,
              marginBottom: '1.25rem',
            }}
          />

          {/* Heading */}
          <h3
            className="font-['Archivo'] font-black uppercase leading-[1.1] tracking-[-0.02em]"
            style={{
              fontSize: 'clamp(1rem, 1.4vw, 1.25rem)',
              color: 'var(--offwhite)',
              marginBottom: '0.75rem',
            }}
          >
            REQUEST FULL CATALOG &amp; SAMPLES
          </h3>

          {/* Body line */}
          <p
            className="font-['Archivo'] leading-[1.6] flex-1"
            style={{ fontSize: '13px', color: 'var(--offwhite)', opacity: 0.7, marginBottom: '1.5rem' }}
          >
            Cupping notes and green samples available per lot.
          </p>

          {/* CTA button */}
          <a
            href="#inquiry"
            className="inline-block font-['Archivo'] font-black uppercase text-center transition-opacity hover:opacity-90 active:translate-y-px"
            style={{
              background: '#B3372B',
              color: '#FAF7EF',
              padding: '12px 16px',
              fontSize: '12px',
              letterSpacing: '0.08em',
              textDecoration: 'none',
              marginTop: 'auto',
            }}
          >
            REQUEST A QUOTE
          </a>
        </div>
      </div>
    </motion.div>
  );
}

// Mobile carousel card — wider, richer (all tags, full lot name)
function MobileLotCard({
  origin,
  shouldReduceMotion,
}: {
  origin: Origin;
  shouldReduceMotion: boolean | null;
}) {
  return (
    <div
      className="bg-[var(--paper)] flex flex-col shrink-0"
      style={{
        width: '85vw',
        scrollSnapAlign: 'start',
        border: '1px solid var(--ink)',
      }}
    >
      {/* Photo */}
      <div
        className="w-full shrink-0 relative"
        style={{ aspectRatio: '4/3', borderBottom: '1px solid var(--ink)' }}
      >
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={`${import.meta.env.BASE_URL}${origin.image}`}
            alt={`${origin.name} coffee origin`}
            className="photo-filter w-full h-full object-cover"
            loading="lazy"
            width={600}
            height={450}
          />
        </div>
        {origin.stamp && (
          <StampBadge text={origin.stamp} shouldReduceMotion={shouldReduceMotion} />
        )}
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1" style={{ padding: '1.25rem' }}>
        <div
          className="font-['IBM_Plex_Mono'] text-[var(--ink)] uppercase font-semibold mb-3 whitespace-nowrap overflow-hidden"
          style={{ fontSize: '12px', letterSpacing: '0.1em', textOverflow: 'ellipsis' }}
        >
          {origin.lot} — {origin.name.toUpperCase()}
        </div>

        <div style={{ height: '1px', background: 'var(--jute)', marginBottom: '10px' }} />

        <div className="flex flex-col mb-3" style={{ gap: '4px' }}>
          {(
            [
              ['REGION',   origin.region],
              ['ALTITUDE', origin.altitude],
              ['PROCESS',  origin.process],
              ['VARIETY',  origin.variety],
            ] as [string, string][]
          ).map(([label, value]) => (
            <div
              key={label}
              className="flex items-baseline"
              style={{
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: '0.68rem',
                textTransform: 'uppercase',
                letterSpacing: '0.07em',
                gap: '4px',
              }}
            >
              <span className="shrink-0 whitespace-nowrap" style={{ color: 'var(--jute)' }}>
                {label}
              </span>
              <span
                className="flex-1 self-end"
                style={{
                  borderBottom: '1px dotted var(--jute)',
                  marginBottom: '3px',
                  minWidth: '8px',
                  opacity: 0.5,
                }}
              />
              <span className="shrink-0 whitespace-nowrap" style={{ color: 'var(--ink)', fontWeight: 500 }}>
                {value}
              </span>
            </div>
          ))}
        </div>

        <div style={{ height: '1px', background: 'var(--jute)', opacity: 0.5, marginBottom: '12px' }} />

        <p
          className="font-['Archivo'] text-[var(--ink)] text-sm leading-[1.65] mb-4 flex-1 line-clamp-2"
        >
          {origin.desc}
        </p>

        <div className="flex flex-wrap gap-2 mt-auto">
          {origin.tags.map((tag) => (
            <span
              key={tag}
              className="font-['IBM_Plex_Mono'] font-semibold uppercase text-[var(--ink)] bg-transparent"
              style={{
                fontSize: '0.62rem',
                letterSpacing: '0.05em',
                border: '1px solid var(--ink)',
                padding: '4px 8px',
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
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
              DOC 05 / ORIGIN COFFEES
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
              Eight distinct origins, one standard of quality.
            </p>
          </div>
        </motion.div>

        {/* Mobile: horizontal snap carousel (8 origin cards only) */}
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
                <MobileLotCard
                  key={origin.name}
                  origin={origin}
                  shouldReduceMotion={shouldReduceMotion}
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
          /*
           * Desktop grid:
           *   2-col  (md  768–1023px)
           *   3-col  (lg  1024–1279px)
           *   4-col  (xl  ≥1280px)   → 7 cards + 1 CTA = exactly 2 rows
           *
           * grid-rows auto-stretches all cells in a row to equal height.
           * Cards use flex-col h-full so chips stay anchored to the bottom.
           */
          <div
            className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 xl:gap-5 px-5 md:px-12"
            style={{ gridAutoRows: '1fr' }}
          >
            {origins.map((origin, i) => (
              <DesktopLotCard
                key={origin.name}
                origin={origin}
                index={i}
                shouldReduceMotion={shouldReduceMotion}
              />
            ))}

            {/* 8th cell — CTA card */}
            <CtaCard index={origins.length} shouldReduceMotion={shouldReduceMotion} />
          </div>
        )}
      </div>
    </section>
  );
}
