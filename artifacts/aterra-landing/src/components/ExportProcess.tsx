import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const steps = [
  {
    num: "01.",
    title: "LOT SELECTION",
    desc: "Buyer receives cupping notes and a green sample. Approval triggers procurement from contracted cooperatives at the agreed price."
  },
  {
    num: "02.",
    title: "MILLING & GRADING",
    desc: "Wet-hulled or washed processing at our certified dry mill in Medan. Screen 15+ grading and defect sorting to SCA standards."
  },
  {
    num: "03.",
    title: "DOCUMENTATION",
    desc: "Phytosanitary certificate, COO, ICO certificate, cupping report, and lot traceability issued per shipment."
  },
  {
    num: "04.",
    title: "SHIPMENT",
    desc: "FCL or LCL from Belawan or Tanjung Priok. GrainPro or jute bagging per buyer specification. Lead time 3–5 weeks."
  }
];

export function ExportProcess() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="process" className="py-24 md:py-32 paper-texture border-t border-dashed border-[var(--jute)] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-20 flex flex-col gap-6"
        >
          <div className="flex items-center gap-4">
            <span className="font-['IBM_Plex_Mono'] text-[var(--jute)] uppercase tracking-[0.1em] text-sm font-semibold">DOC 05 / EXPORT PROCESS</span>
            <div className="flex-1 h-[1px] bg-[var(--jute)]"></div>
          </div>
          <div>
            <h2 className="font-['Archivo'] font-black uppercase text-[var(--ink)] text-4xl md:text-5xl tracking-[-0.02em] leading-[1.05] mb-2">
              EXPORT PROCESS
            </h2>
            <p className="font-['IBM_Plex_Mono'] text-[var(--jute)] text-sm uppercase tracking-[0.05em] font-semibold">
              SEAMLESS FROM FARM TO PORT
            </p>
          </div>
        </motion.div>

        <div className="flex flex-col relative z-10">
          {steps.map((step, index) => (
            <motion.div 
              key={step.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`flex flex-col lg:flex-row items-start lg:items-center py-10 relative ${
                index !== steps.length - 1 ? 'border-b border-dashed border-[var(--jute)]' : ''
              }`}
            >
              <div className="font-['IBM_Plex_Mono'] text-[var(--jute)] text-6xl font-semibold leading-none mb-6 lg:mb-0 lg:w-[150px] shrink-0">
                {step.num}
              </div>
              
              <div className="flex-1 relative">
                {index === 1 && (
                  <motion.div 
                    initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 1.2 }}
                    whileInView={shouldReduceMotion ? { opacity: 0.92 } : { opacity: 0.92, scale: 1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 15, delay: 0.2 }}
                    className="absolute -top-10 lg:-top-6 right-0 lg:right-10 rubber-stamp z-20"
                  >
                    SCA SCREEN 15+
                  </motion.div>
                )}
                <h3 className="font-['Archivo'] font-black uppercase text-[var(--ink)] text-2xl tracking-[-0.02em] leading-[1.05] mb-3">
                  {step.title}
                </h3>
                <p className="font-['Archivo'] text-[var(--ink)] text-lg leading-[1.65] max-w-3xl">
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
