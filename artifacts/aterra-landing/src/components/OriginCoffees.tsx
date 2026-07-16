import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const origins = [
  {
    lot: "LOT 01",
    name: "Kintamani Bali",
    region: "Bali",
    altitude: "900–1,600 masl",
    process: "Fully Washed",
    variety: "Arabica",
    desc: "Volcanic-slope arabica under the traditional Subak Abian cooperative system; Indonesia's first GI-certified coffee, fully washed for a bright, clean cup.",
    tags: ["Bright Citrus", "Floral", "Honey Finish", "Clean Cup"],
    stamp: "GI CERTIFIED — 2008"
  },
  {
    lot: "LOT 02",
    name: "Jember",
    region: "East Java",
    altitude: "400–900 masl",
    process: "Wet Hulled",
    variety: "Robusta",
    desc: "A balanced Robusta region prized by international blenders for its consistent profile and reliable bulk supply.",
    tags: ["Full Body", "Roasted Nuts", "Caramel", "Low Acidity"]
  },
  {
    lot: "LOT 03",
    name: "Ijen",
    region: "East Java",
    altitude: "1,000+ masl",
    process: "Semi-Washed",
    variety: "Arabica / Robusta",
    desc: "Volcanic plateau coffee processed semi-washed (Giling Basah), producing a distinctly syrupy, full body.",
    tags: ["Smoky", "Dark Chocolate", "Spice", "Syrupy Body"]
  },
  {
    lot: "LOT 04",
    name: "Java Preanger",
    region: "West Java",
    altitude: "1,200–1,500 masl",
    process: "Washed",
    variety: "Arabica",
    desc: "A heritage colonial-era growing region in Bandung producing a smooth, approachable cup with good body.",
    tags: ["Medium Body", "Caramel", "Toasted Almond", "Clean Finish"]
  },
  {
    lot: "LOT 05",
    name: "Lampung",
    region: "Sumatra",
    altitude: "400–1,000 masl",
    process: "Wet Hulled",
    variety: "Robusta",
    desc: "Indonesia's largest Robusta region — a bold, dependable backbone for commercial blends worldwide.",
    tags: ["Bold", "Strong Bitterness", "Earthy", "Robust Finish"]
  },
  {
    lot: "LOT 06",
    name: "Kerinci",
    region: "Jambi, Sumatra",
    altitude: "1,500+ masl",
    process: "Wet Hulled",
    variety: "Arabica",
    desc: "One of Indonesia's highest growing regions, producing complex and bright character unusual for a Sumatran origin.",
    tags: ["Dark Fruit", "Herbal Spice", "Heavy Body", "Rich Aftertaste"]
  },
  {
    lot: "LOT 07",
    name: "Palembang",
    region: "South Sumatra",
    altitude: "200–600 masl",
    process: "Natural",
    variety: "Robusta",
    desc: "Bold lowland Robusta with a traditional tubruk-style character, competitive pricing for commercial-grade buyers.",
    tags: ["Bold", "Smoky", "Thick Mouthfeel", "Low Acidity"]
  }
];

export function OriginCoffees() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="origins" className="py-24 md:py-32 bg-[var(--ink)] border-t border-dashed border-[var(--jute)]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 flex flex-col gap-6"
        >
          <div className="flex items-center gap-4">
            <span className="font-['IBM_Plex_Mono'] text-[var(--jute)] uppercase tracking-[0.1em] text-sm font-semibold">DOC 04 / ORIGIN COFFEES</span>
            <div className="flex-1 h-[1px] bg-[var(--jute)]"></div>
          </div>
          <div>
            <h2 className="font-['Archivo'] font-black uppercase text-[var(--offwhite)] text-4xl md:text-5xl tracking-[-0.02em] leading-[1.05] mb-2">
              ORIGIN COFFEES
            </h2>
            <p className="font-['IBM_Plex_Mono'] text-[var(--offwhite)]/60 text-sm uppercase tracking-[0.05em]">
              Seven distinct origins, one standard of quality.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8 w-full">
          {origins.map((origin, index) => (
            <motion.div
              key={origin.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`bg-[var(--paper)] p-6 rounded-none border border-[var(--ink)] flex flex-col relative ${
                index === 6 ? 'md:col-span-2 lg:col-span-1' : '' 
              }`}
            >
              {origin.stamp && (
                <motion.div 
                  initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 1.2 }}
                  whileInView={shouldReduceMotion ? { opacity: 0.92 } : { opacity: 0.92, scale: 1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 15, delay: 0.2 }}
                  className="absolute top-4 right-4 rubber-stamp z-10"
                >
                  {origin.stamp}
                </motion.div>
              )}

              <div className="font-['IBM_Plex_Mono'] text-[var(--ink)] uppercase tracking-[0.1em] font-semibold text-lg mb-4">
                {origin.lot} — {origin.name.toUpperCase()}
              </div>
              
              <div className="w-full h-[1px] bg-[var(--jute)] mb-4"></div>
              
              <div className="flex flex-col gap-1 mb-4">
                <div className="lot-row">
                  <span className="lot-label">REGION</span>
                  <div className="lot-leader"></div>
                  <span className="lot-value">{origin.region}</span>
                </div>
                <div className="lot-row">
                  <span className="lot-label">ALTITUDE</span>
                  <div className="lot-leader"></div>
                  <span className="lot-value">{origin.altitude}</span>
                </div>
                <div className="lot-row">
                  <span className="lot-label">PROCESS</span>
                  <div className="lot-leader"></div>
                  <span className="lot-value">{origin.process}</span>
                </div>
                <div className="lot-row">
                  <span className="lot-label">VARIETY</span>
                  <div className="lot-leader"></div>
                  <span className="lot-value">{origin.variety}</span>
                </div>
              </div>

              <div className="w-full h-[1px] bg-[var(--jute)] opacity-50 mb-4"></div>
              
              <p className="font-['Archivo'] text-[var(--ink)] text-sm leading-[1.65] mb-6 flex-1 line-clamp-2">
                {origin.desc}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {origin.tags.map(tag => (
                  <span 
                    key={tag}
                    className="border border-[var(--ink)] text-[var(--ink)] px-2 py-1 text-[0.65rem] font-['IBM_Plex_Mono'] font-semibold uppercase tracking-[0.05em] rounded-none bg-transparent"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
