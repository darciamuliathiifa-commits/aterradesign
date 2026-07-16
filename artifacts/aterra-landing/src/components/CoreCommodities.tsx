import React from 'react';
import { motion } from 'framer-motion';

const commodities = [
  {
    title: 'Coffee',
    image: 'coffee.jpg',
    description: 'Arabica and Robusta beans from Sumatra, Java, Toraja, and other renowned growing regions.',
  },
  {
    title: 'Cinnamon (Cassia Vera)',
    image: 'commodity-cinnamon.jpg',
    description: 'High-quality cinnamon bark from West Sumatra, among the world\'s largest cassia-producing regions.',
  },
  {
    title: 'Nutmeg',
    image: 'commodity-nutmeg.jpg',
    description: 'Whole nutmeg and mace from the Banda Islands and North Sulawesi.',
  },
  {
    title: 'Charcoal Briquettes',
    image: 'commodity-charcoal.jpg',
    description: 'Coconut shell and wood-based briquettes for BBQ, shisha, and industrial fuel markets.',
  },
];

export function CoreCommodities() {
  return (
    <section
      id="products"
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
              DOC 03 / CORE COMMODITIES
            </span>
            <div className="flex-1" style={{ height: '1px', background: 'var(--jute)' }} />
          </div>
          <h2
            className="font-['Archivo'] font-black uppercase text-[var(--ink)] tracking-[-0.02em] leading-[1.05]"
            style={{ fontSize: 'clamp(2rem, 4vw + 0.5rem, 3rem)' }}
          >
            CORE COMMODITIES
          </h2>
        </motion.div>

        {/* Single column on mobile, 2-col on md+ */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 w-full">
          {commodities.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="group cursor-pointer border border-[var(--ink)] bg-[var(--paper)] rounded-none overflow-hidden active:border-[var(--stamp)] hover:border-[var(--stamp)] transition-colors duration-300"
            >
              <div
                className="relative w-full border-b border-[var(--ink)] group-hover:border-[var(--stamp)] group-active:border-[var(--stamp)] transition-colors duration-300"
                style={{ aspectRatio: '16/9' }}
              >
                <img
                  src={`${import.meta.env.BASE_URL}${item.image}`}
                  alt={item.title}
                  className="photo-filter w-full h-full object-cover"
                  loading="lazy"
                  width={800}
                  height={450}
                />
              </div>

              <div className="p-6 md:p-8">
                <h3
                  className="font-['Archivo'] font-black uppercase text-[var(--ink)] tracking-[-0.02em] leading-[1.05] mb-3"
                  style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)' }}
                >
                  {item.title}
                </h3>
                <p className="font-['Archivo'] text-[var(--ink)] leading-[1.65] text-base">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
