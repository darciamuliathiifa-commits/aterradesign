import React, { useState } from 'react';
import { motion } from 'framer-motion';

const coffeeCerts = [
  {
    name: 'CERTIFICATE OF ORIGIN (COO)',
    desc: 'Issued by the Indonesian Chamber of Commerce, verifying Indonesian origin for customs clearance.',
  },
  {
    name: 'ICO CERTIFICATE OF ORIGIN',
    desc: 'International Coffee Organisation certificate confirming coffee grade and origin for regulated markets.',
  },
  {
    name: 'PHYTOSANITARY CERTIFICATE',
    desc: 'Government-issued health certificate confirming the shipment is free of pests and diseases.',
  },
  {
    name: 'FUMIGATION CERTIFICATE',
    desc: 'Verification that the shipment has been treated to international fumigation standards.',
  },
];

const briquetteCerts = [
  {
    name: 'MSDS (MATERIAL SAFETY DATA SHEET)',
    desc: 'Safety data documentation for transportation and handling compliance worldwide.',
  },
  {
    name: 'CERTIFICATE OF ANALYSIS (COA)',
    desc: 'Lab-certified quality analysis confirming composition, moisture content, and calorific value.',
  },
  {
    name: 'FUMIGATION CERTIFICATE',
    desc: 'Treatment certificate confirming compliance with international phytosanitary import regulations.',
  },
];

function CertList({ certs }: { certs: typeof coffeeCerts }) {
  return (
    <div className="flex flex-col">
      {certs.map((cert, index) => (
        <div
          key={index}
          className={`flex items-start gap-4 py-5 ${
            index !== certs.length - 1 ? 'border-b border-dashed border-[var(--jute)]/50' : ''
          }`}
        >
          <span className="font-['IBM_Plex_Mono'] text-[var(--jute)] text-lg leading-none mt-1 shrink-0">✓</span>
          <div>
            <h4 className="font-['Archivo'] font-black uppercase text-[var(--ink)] text-lg tracking-[-0.02em] mb-1">
              {cert.name}
            </h4>
            <p className="font-['Archivo'] text-[var(--ink)]/70 leading-[1.65] text-sm md:text-base">
              {cert.desc}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export function Certifications() {
  const [activeTab, setActiveTab] = useState<'coffee' | 'briquettes'>('coffee');

  return (
    <section
      id="certifications"
      className="py-20 md:py-32 paper-texture border-t border-dashed border-[var(--jute)]"
    >
      <div className="max-w-7xl mx-auto px-5 md:px-12 flex flex-col">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-16 flex flex-col gap-6"
        >
          <div className="flex items-center gap-4">
            <span className="font-['IBM_Plex_Mono'] text-[var(--jute)] uppercase tracking-[0.1em] text-sm font-semibold whitespace-nowrap">
              DOC 07 / CERTIFICATIONS
            </span>
            <div className="flex-1" style={{ height: '1px', background: 'var(--jute)' }} />
          </div>
          <div>
            <h2
              className="font-['Archivo'] font-black uppercase text-[var(--ink)] tracking-[-0.02em] leading-[1.05] mb-2"
              style={{ fontSize: 'clamp(2rem, 4vw + 0.5rem, 3rem)' }}
            >
              CERTIFICATIONS
            </h2>
            <p className="font-['IBM_Plex_Mono'] text-[var(--ink)]/60 text-sm uppercase tracking-[0.05em]">
              COMPLIANCE AND TRUST FOR EVERY SHIPMENT.
            </p>
          </div>
        </motion.div>

        {/* Mobile: segmented tab control */}
        <div className="md:hidden mb-8">
          <div
            className="flex w-full"
            style={{ border: '1px solid var(--jute)', height: '48px' }}
            role="tablist"
          >
            {(
              [
                { key: 'coffee',     label: 'COFFEE & SPICE' },
                { key: 'briquettes', label: 'CHARCOAL' },
              ] as const
            ).map((tab) => (
              <button
                key={tab.key}
                role="tab"
                aria-selected={activeTab === tab.key}
                onClick={() => setActiveTab(tab.key)}
                className="flex-1 flex items-center justify-center font-['IBM_Plex_Mono'] text-xs uppercase tracking-[0.08em] transition-colors rounded-none"
                style={{
                  background: activeTab === tab.key ? 'var(--jute)' : 'transparent',
                  color: activeTab === tab.key ? 'var(--paper)' : 'var(--jute)',
                  border: 'none',
                  borderRight: tab.key === 'coffee' ? '1px solid var(--jute)' : 'none',
                  minHeight: '48px',
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Active tab content */}
          <div className="mt-2">
            {activeTab === 'coffee' ? (
              <CertList certs={coffeeCerts} />
            ) : (
              <CertList certs={briquetteCerts} />
            )}
          </div>
        </div>

        {/* Desktop: two-column layout */}
        <div className="hidden md:grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 w-full">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="flex flex-col"
          >
            <h3 className="font-['IBM_Plex_Mono'] text-[var(--jute)] text-sm font-semibold uppercase tracking-[0.1em] mb-4 pb-4 border-b border-[var(--jute)]">
              COFFEE & SPICE EXPORT
            </h3>
            <CertList certs={coffeeCerts} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col"
          >
            <h3 className="font-['IBM_Plex_Mono'] text-[var(--jute)] text-sm font-semibold uppercase tracking-[0.1em] mb-4 pb-4 border-b border-[var(--jute)]">
              CHARCOAL BRIQUETTES EXPORT
            </h3>
            <CertList certs={briquetteCerts} />
          </motion.div>
        </div>

      </div>
    </section>
  );
}
