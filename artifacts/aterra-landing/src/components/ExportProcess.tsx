import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const steps = [
  {
    num: '01.',
    title: 'LOT SELECTION',
    desc: 'Buyer receives cupping notes and a green sample. Approval triggers procurement from contracted cooperatives at the agreed price.',
  },
  {
    num: '02.',
    title: 'MILLING & GRADING',
    desc: 'Wet-hulled or washed processing at our certified dry mill in Medan. Screen 15+ grading and defect sorting to SCA standards.',
    stamp: true,
  },
  {
    num: '03.',
    title: 'DOCUMENTATION',
    desc: 'Phytosanitary certificate, COO, ICO certificate, cupping report, and lot traceability issued per shipment.',
  },
  {
    num: '04.',
    title: 'SHIPMENT',
    desc: 'FCL or LCL from Belawan or Tanjung Priok. GrainPro or jute bagging per buyer specification. Lead time 3–5 weeks.',
  },
];

export function ExportProcess() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="process"
      className="py-20 md:py-32 paper-texture border-t border-dashed border-[var(--jute)] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-5 md:px-12 flex flex-col">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-20 flex flex-col gap-6"
        >
          <div className="flex items-center gap-4">
            <span className="font-['IBM_Plex_Mono'] text-[var(--jute)] uppercase tracking-[0.1em] text-sm font-semibold whitespace-nowrap">
              DOC 05 / EXPORT PROCESS
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

        {/* Steps — on mobile: vertical timeline with dashed left rule */}
        <div className="flex flex-col relative">

          {/* Mobile vertical dashed line */}
          <div
            className="absolute left-[1.75rem] top-0 bottom-0 md:hidden"
            style={{ width: '1px', borderLeft: '1px dashed var(--jute)', opacity: 0.5 }}
            aria-hidden="true"
          />

          {steps.map((step, index) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={
                shouldReduceMotion ? { duration: 0 } : { duration: 0.5, delay: index * 0.12 }
              }
              className={`flex items-start py-8 md:py-10 relative ${
                index !== steps.length - 1
                  ? 'border-b border-dashed border-[var(--jute)]'
                  : ''
              }`}
            >
              {/* Step number — acts as the timeline dot on mobile */}
              <div
                className="font-['IBM_Plex_Mono'] text-[var(--jute)] font-semibold leading-none shrink-0"
                style={{
                  // Mobile: smaller number, acts as bullet point at line position
                  fontSize: 'clamp(1.8rem, 5vw, 4rem)',
                  width: 'clamp(3rem, 8vw, 9.375rem)', // 150px on desktop
                  // Ensure the number sits on the dashed line on mobile
                  position: 'relative',
                  zIndex: 1,
                  background: 'var(--paper)', // cover the dashed line behind it
                  paddingRight: '0.75rem',
                }}
              >
                {step.num}
              </div>

              <div className="flex-1 relative">
                {step.stamp && (
                  <motion.div
                    initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 1.2 }}
                    whileInView={shouldReduceMotion ? { opacity: 0.92 } : { opacity: 0.92, scale: 1 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 15, delay: 0.2 }}
                    className="absolute -top-6 right-0 md:right-10 rubber-stamp z-20"
                  >
                    SCA SCREEN 15+
                  </motion.div>
                )}
                <h3
                  className="font-['Archivo'] font-black uppercase text-[var(--ink)] tracking-[-0.02em] leading-[1.05] mb-2 md:mb-3"
                  style={{ fontSize: 'clamp(1rem, 2.5vw, 1.5rem)' }}
                >
                  {step.title}
                </h3>
                <p className="font-['Archivo'] text-[var(--ink)] text-base leading-[1.65] max-w-3xl">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
