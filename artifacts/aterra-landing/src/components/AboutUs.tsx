import React from 'react';
import { motion } from 'framer-motion';

export function AboutUs() {
  return (
    <section
      id="about"
      className="py-20 md:py-32 paper-texture border-t border-dashed border-[var(--jute)]"
    >
      <div className="max-w-7xl mx-auto px-5 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-start">

        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="flex flex-col gap-6 md:gap-8"
        >
          <div className="flex flex-col gap-5 md:gap-6">
            <div className="flex items-center gap-4">
              <span className="font-['IBM_Plex_Mono'] text-[var(--jute)] uppercase tracking-[0.1em] text-sm font-semibold whitespace-nowrap">
                DOC 01 / ABOUT ATERRA
              </span>
              <div className="flex-1" style={{ height: '1px', background: 'var(--jute)' }} />
            </div>
            <h2
              className="font-['Archivo'] font-black uppercase text-[var(--ink)] tracking-[-0.02em] leading-[1.05]"
              style={{ fontSize: 'clamp(2rem, 4vw + 0.5rem, 3rem)' }}
            >
              ABOUT ATERRA
            </h2>
          </div>

          <div className="flex flex-col gap-4 font-['Archivo'] text-[var(--ink)] text-base md:text-lg leading-[1.65]">
            <p>
              Ananda Terra Nusantara (ATERRA) is an Indonesia based export company specializing in premium
              agricultural and natural commodities, including coffee, cinnamon, nutmeg, and charcoal
              briquettes. Sourced directly from smallholder farmers and trusted regional suppliers across
              Indonesia's most fertile growing regions, including Sumatra and Java.
            </p>
            <p>
              We work closely with local farming communities to ensure consistent quality, sustainable
              harvesting practices, and fair trade partnerships, while maintaining strict quality control
              from farm to port. Our export operations are supported by established logistics networks,
              enabling reliable, timely delivery to international buyers in the food & beverage, spice,
              and energy sectors.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 mt-2">
            {['Direct from Farmers', 'Sustainable Sourcing', 'Farm to Port QC'].map((badge, i) => (
              <span
                key={i}
                className="px-3 py-2 border border-[var(--ink)] text-[var(--ink)] font-['IBM_Plex_Mono'] text-xs font-semibold uppercase tracking-[0.05em] rounded-none"
                style={{ minHeight: '36px', display: 'inline-flex', alignItems: 'center' }}
              >
                {badge}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
          className="relative w-full border border-[var(--ink)] rounded-none overflow-hidden"
          style={{ height: 'clamp(280px, 50vw, 600px)', aspectRatio: '4/3' }}
        >
          <img
            src={`${import.meta.env.BASE_URL}about.jpg`}
            alt="Indonesian coffee farmers handpicking ripe red coffee cherries"
            className="photo-filter object-cover w-full h-full"
            loading="lazy"
            width={800}
            height={600}
          />
        </motion.div>

      </div>
    </section>
  );
}
