import React from 'react';
import { motion } from 'framer-motion';

const coffeeCerts = [
  {
    name: "CERTIFICATE OF ORIGIN (COO)",
    desc: "Issued by the Indonesian Chamber of Commerce, verifying Indonesian origin for customs clearance."
  },
  {
    name: "ICO CERTIFICATE OF ORIGIN",
    desc: "International Coffee Organisation certificate confirming coffee grade and origin for regulated markets."
  },
  {
    name: "PHYTOSANITARY CERTIFICATE",
    desc: "Government-issued health certificate confirming the shipment is free of pests and diseases."
  },
  {
    name: "FUMIGATION CERTIFICATE",
    desc: "Verification that the shipment has been treated to international fumigation standards."
  }
];

const briquetteCerts = [
  {
    name: "MSDS (MATERIAL SAFETY DATA SHEET)",
    desc: "Safety data documentation for transportation and handling compliance worldwide."
  },
  {
    name: "CERTIFICATE OF ANALYSIS (COA)",
    desc: "Lab-certified quality analysis confirming composition, moisture content, and calorific value."
  },
  {
    name: "FUMIGATION CERTIFICATE",
    desc: "Treatment certificate confirming compliance with international phytosanitary import regulations."
  }
];

export function Certifications() {
  return (
    <section id="certifications" className="py-24 md:py-32 bg-[var(--ink)] border-t border-dashed border-[var(--jute)]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 flex flex-col gap-6"
        >
          <div className="flex items-center gap-4">
            <span className="font-['IBM_Plex_Mono'] text-[var(--jute)] uppercase tracking-[0.1em] text-sm font-semibold">DOC 06 / CERTIFICATIONS</span>
            <div className="flex-1 h-[1px] bg-[var(--jute)]"></div>
          </div>
          <div>
            <h2 className="font-['Archivo'] font-black uppercase text-[var(--offwhite)] text-4xl md:text-5xl tracking-[-0.02em] leading-[1.05] mb-2">
              CERTIFICATIONS
            </h2>
            <p className="font-['IBM_Plex_Mono'] text-[var(--offwhite)]/60 text-sm uppercase tracking-[0.05em]">
              COMPLIANCE AND TRUST FOR EVERY SHIPMENT.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 w-full">
          
          {/* Coffee Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col"
          >
            <h3 className="font-['IBM_Plex_Mono'] text-[var(--jute)] text-sm font-semibold uppercase tracking-[0.1em] mb-4 pb-4 border-b border-[var(--jute)]">
              COFFEE & SPICE EXPORT
            </h3>
            <div className="flex flex-col">
              {coffeeCerts.map((cert, index) => (
                <div key={index} className={`flex items-start gap-4 py-6 ${index !== coffeeCerts.length - 1 ? 'border-b border-dashed border-[var(--jute)]/50' : ''}`}>
                  <span className="font-['IBM_Plex_Mono'] text-[var(--jute)] text-xl leading-none mt-1">✓</span>
                  <div>
                    <h4 className="font-['Archivo'] font-black uppercase text-[var(--offwhite)] text-xl tracking-[-0.02em] mb-2">
                      {cert.name}
                    </h4>
                    <p className="font-['Archivo'] text-[var(--offwhite)]/70 leading-[1.65]">
                      {cert.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Briquettes Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col"
          >
            <h3 className="font-['IBM_Plex_Mono'] text-[var(--jute)] text-sm font-semibold uppercase tracking-[0.1em] mb-4 pb-4 border-b border-[var(--jute)]">
              CHARCOAL BRIQUETTES EXPORT
            </h3>
            <div className="flex flex-col">
              {briquetteCerts.map((cert, index) => (
                <div key={index} className={`flex items-start gap-4 py-6 ${index !== briquetteCerts.length - 1 ? 'border-b border-dashed border-[var(--jute)]/50' : ''}`}>
                  <span className="font-['IBM_Plex_Mono'] text-[var(--jute)] text-xl leading-none mt-1">✓</span>
                  <div>
                    <h4 className="font-['Archivo'] font-black uppercase text-[var(--offwhite)] text-xl tracking-[-0.02em] mb-2">
                      {cert.name}
                    </h4>
                    <p className="font-['Archivo'] text-[var(--offwhite)]/70 leading-[1.65]">
                      {cert.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
