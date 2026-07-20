import React from 'react';
import { motion, useReducedMotion, AnimatePresence } from 'framer-motion';

const steps = [
  {
    num: '01.',
    title: 'LOT SELECTION',
    desc: 'Buyer receives cupping notes and a green sample. Approval triggers procurement from contracted cooperatives at the agreed price.',
    chip: 'GREEN SAMPLE + CUPPING NOTES',
    image: 'lot-selection.jpg',
    imageAlt: 'Green coffee samples and cupping notes at lot selection',
    photoRight: true,
    stamp: false,
  },
  {
    num: '02.',
    title: 'MILLING & GRADING',
    desc: 'Wet hulled or washed processing at our certified dry mill in Medan. Screen 15+ grading and defect sorting to SCA standards.',
    chip: 'SCREEN 15+ / SCA STANDARD',
    image: 'milling.jpg',
    imageAlt: 'Coffee milling and grading at the dry mill in Medan',
    photoRight: false,
    stamp: true,
  },
  {
    num: '03.',
    title: 'DOCUMENTATION',
    desc: 'Phytosanitary certificate, COO, ICO certificate, cupping report, and lot traceability issued per shipment.',
    chip: '5 DOCS PER SHIPMENT',
    image: 'commodity-coffee.jpg',
    imageAlt: 'Export documentation and coffee lot traceability',
    photoRight: true,
    stamp: false,
  },
  {
    num: '04.',
    title: 'SHIPMENT',
    desc: 'FCL or LCL from Belawan or Tanjung Priok. GrainPro or jute bagging per buyer specification. Lead time 2–5 weeks.',
    chip: 'LEAD TIME: 2–5 WEEKS',
    image: 'shipment.jpg',
    imageAlt: 'Charcoal briquettes packed and boxed for export shipment',
    photoRight: false,
    stamp: false,
  },
];

export function ExportProcess() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="process"
      className="py-20 md:py-32 paper-texture border-t border-dashed border-[var(--jute)] relative overflow-hidden"
    >
      {/* Section header — unchanged */}
      <div className="max-w-[1200px] mx-auto px-5 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-8 md:mb-10 flex flex-col gap-6"
        >
          <div className="flex items-center gap-4">
            <span className="font-['IBM_Plex_Mono'] text-[var(--jute)] uppercase tracking-[0.1em] text-sm font-semibold whitespace-nowrap">
              DOC 06 / EXPORT PROCESS
            </span>
            <div className="flex-1" style={{ height: '1px', background: 'var(--jute)' }} />
          </div>
          <div>
            <h2
              className="font-['Archivo'] font-black uppercase text-[var(--ink)] tracking-[-0.02em] leading-[1.05] mb-2"
              style={{ fontSize: 'clamp(2rem, 4vw + 0.5rem, 3rem)' }}
            >
              EXPORT PROCESS
            </h2>
            <p className="font-['IBM_Plex_Mono'] text-[var(--jute)] text-sm uppercase tracking-[0.05em] font-semibold">
              SEAMLESS FROM FARM TO PORT
            </p>
          </div>
        </motion.div>
      </div>

      {/* Steps */}
      <div className="max-w-[1200px] mx-auto px-5 md:px-12">
        {steps.map((step, index) => (
          <React.Fragment key={step.num}>
            {/* ONE dashed divider between steps — content-width only, no full bleed */}
            {index > 0 && (
              <div
                className="border-t border-dashed border-[var(--jute)]"
                aria-hidden="true"
              />
            )}

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={
                shouldReduceMotion ? { duration: 0 } : { duration: 0.5, delay: index * 0.1 }
              }
              className="py-10 md:py-12"
            >
              {/* ── MOBILE layout: vertical stacked ── */}
              <div className="flex flex-col gap-5 lg:hidden">
                <div className="flex items-baseline gap-4">
                  <span
                    className="font-['IBM_Plex_Mono'] text-[var(--jute)] font-semibold leading-none shrink-0"
                    style={{ fontSize: '2rem' }}
                  >
                    {step.num}
                  </span>
                  <h3
                    className="font-['Archivo'] font-black uppercase text-[var(--ink)] tracking-[-0.02em] leading-[1.1]"
                    style={{ fontSize: 'clamp(1.1rem, 4vw, 1.4rem)' }}
                  >
                    {step.title}
                  </h3>
                </div>
                {step.image && (
                  <div
                    className="relative overflow-hidden w-full"
                    style={{ aspectRatio: '3/2', border: '1px solid var(--ink)' }}
                  >
                    {step.stamp && (
                      <motion.div
                        className="absolute top-3 left-3 z-10 rubber-stamp bg-[var(--paper)]"
                        initial={{ scale: 1.4, rotate: -8, opacity: 0 }}
                        whileInView={{ scale: 1, rotate: -4, opacity: 0.92 }}
                        viewport={{ once: true }}
                        transition={{ type: 'spring', stiffness: 260, damping: 18, delay: 0.3 }}
                      >
                        SCA SCREEN 15+
                      </motion.div>
                    )}
                    <img
                      src={`${import.meta.env.BASE_URL}${step.image}`}
                      alt={step.imageAlt}
                      className="photo-filter w-full h-full object-cover"
                      loading="lazy"
                      width={900}
                      height={600}
                    />
                  </div>
                )}
                <p
                  className="font-['Archivo'] text-[var(--ink)] leading-[1.6]"
                  style={{ fontSize: '16px' }}
                >
                  {step.desc}
                </p>
                <div
                  className="inline-flex self-start font-['IBM_Plex_Mono'] text-[var(--ink)] uppercase tracking-[0.08em] px-3 py-1.5"
                  style={{ fontSize: '0.65rem', border: '1px solid var(--ink)' }}
                >
                  {step.chip}
                </div>
              </div>

              {/* ── DESKTOP layout: 3-column ledger row ── */}
              <div className="hidden lg:grid lg:grid-cols-[72px_1fr] lg:gap-x-8 lg:items-start">

                {/* Column 1: Step number */}
                <div
                  className="font-['IBM_Plex_Mono'] text-[var(--jute)] font-semibold leading-none pt-1 shrink-0"
                  style={{ fontSize: '1.75rem' }}
                >
                  {step.num}
                </div>

                {/* Column 2: Text + Photo (order swaps per step) */}
                <div
                  className={`flex items-start gap-12 ${
                    step.photoRight ? 'flex-row' : 'flex-row-reverse'
                  }`}
                >
                  {/* Text block */}
                  <div className="flex flex-col gap-5" style={{ flex: '1 1 0', minWidth: 0 }}>
                    <h3
                      className="font-['Archivo'] font-black uppercase text-[var(--ink)] tracking-[-0.02em] leading-[1.1]"
                      style={{
                        fontSize: 'clamp(1.2rem, 1.8vw, 1.5rem)',
                        textWrap: 'balance',
                      } as React.CSSProperties}
                    >
                      {step.title}
                    </h3>
                    <p
                      className="font-['Archivo'] text-[var(--ink)] leading-[1.6]"
                      style={{ fontSize: '16px', maxWidth: '48ch', minWidth: '34ch' }}
                    >
                      {step.desc}
                    </p>
                    {/* Data chip */}
                    <div
                      className="inline-flex self-start font-['IBM_Plex_Mono'] text-[var(--ink)] uppercase tracking-[0.08em] px-3 py-1.5"
                      style={{ fontSize: '0.65rem', border: '1px solid var(--ink)' }}
                    >
                      {step.chip}
                    </div>
                  </div>

                  {/* Photo block — 42% of content width */}
                  <div
                    className="relative overflow-hidden shrink-0"
                    style={{
                      width: '42%',
                      aspectRatio: '3/2',
                      border: '1px solid var(--ink)',
                      borderRadius: 0,
                    }}
                  >
                    {step.stamp && (
                      <motion.div
                        className="absolute top-3 left-3 z-10 rubber-stamp bg-[var(--paper)]"
                        initial={{ scale: 1.4, rotate: -8, opacity: 0 }}
                        whileInView={{ scale: 1, rotate: -4, opacity: 0.92 }}
                        viewport={{ once: true }}
                        transition={{ type: 'spring', stiffness: 260, damping: 18, delay: 0.4 }}
                      >
                        SCA SCREEN 15+
                      </motion.div>
                    )}
                    <img
                      src={`${import.meta.env.BASE_URL}${step.image}`}
                      alt={step.imageAlt}
                      className="photo-filter w-full h-full object-cover"
                      loading="lazy"
                      width={900}
                      height={600}
                    />
                  </div>
                </div>

              </div>
            </motion.div>
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
