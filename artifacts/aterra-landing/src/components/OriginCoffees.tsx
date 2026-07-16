import React from 'react';
import { motion } from 'framer-motion';

const origins = [
  {
    name: "Kintamani Bali",
    region: "900–1,600 masl · Bali",
    desc: "Volcanic-slope arabica under the traditional Subak Abian cooperative system; Indonesia's first GI-certified coffee, fully washed for a bright, clean cup.",
    tags: ["Bright Citrus", "Floral", "Honey Finish", "Clean Cup"],
    badge: "GI Certified 2008"
  },
  {
    name: "Jember",
    region: "East Java",
    desc: "A balanced Robusta region prized by international blenders for its consistent profile and reliable bulk supply.",
    tags: ["Full Body", "Roasted Nuts", "Caramel", "Low Acidity"]
  },
  {
    name: "Ijen",
    region: "1,000+ masl · East Java",
    desc: "Volcanic plateau coffee processed semi-washed (Giling Basah), producing a distinctly syrupy, full body.",
    tags: ["Smoky", "Dark Chocolate", "Spice", "Syrupy Body"]
  },
  {
    name: "Java Preanger",
    region: "West Java",
    desc: "A heritage colonial-era growing region in Bandung producing a smooth, approachable cup with good body.",
    tags: ["Medium Body", "Caramel", "Toasted Almond", "Clean Finish"]
  },
  {
    name: "Lampung",
    region: "Sumatra",
    desc: "Indonesia's largest Robusta region — a bold, dependable backbone for commercial blends worldwide.",
    tags: ["Bold", "Strong Bitterness", "Earthy", "Robust Finish"]
  },
  {
    name: "Kerinci",
    region: "1,500+ masl · Jambi, Sumatra",
    desc: "One of Indonesia's highest growing regions, producing complex and bright character unusual for a Sumatran origin.",
    tags: ["Dark Fruit", "Herbal Spice", "Heavy Body", "Rich Aftertaste"]
  },
  {
    name: "Palembang",
    region: "South Sumatra",
    desc: "Bold lowland Robusta with a traditional tubruk-style character, competitive pricing for commercial-grade buyers.",
    tags: ["Bold", "Smoky", "Thick Mouthfeel", "Low Acidity"]
  }
];

export function OriginCoffees() {
  return (
    <section id="origins" className="py-24 md:py-32 bg-[#1B3A2D]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-[#FAF8F3] text-4xl md:text-5xl font-bold mb-4">
            Origin Coffees
          </h2>
          <p className="font-sans text-[#FAF8F3]/70 text-lg max-w-2xl mx-auto">
            Seven distinct origins, one standard of quality.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8 w-full">
          {origins.map((origin, index) => (
            <motion.div
              key={origin.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`bg-[#244537] p-8 rounded-xl border border-transparent hover:border-[#B4713D] transition-colors duration-300 flex flex-col justify-between ${
                index === 6 ? 'md:col-span-2 lg:col-span-1' : '' 
              }`}
            >
              <div>
                <div className="flex justify-between items-start gap-4 mb-2">
                  <h3 className="font-serif text-[#FAF8F3] text-2xl font-bold">
                    {origin.name}
                  </h3>
                  {origin.badge && (
                    <span className="shrink-0 bg-[#B4713D]/20 text-[#B4713D] border border-[#B4713D]/30 px-2.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
                      {origin.badge}
                    </span>
                  )}
                </div>
                
                <p className="font-sans text-[#B4713D] text-sm font-medium mb-4">
                  {origin.region}
                </p>
                
                <p className="font-sans text-[#FAF8F3]/70 text-base leading-relaxed mb-6 line-clamp-3">
                  {origin.desc}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-[#FAF8F3]/10">
                {origin.tags.map(tag => (
                  <span 
                    key={tag}
                    className="bg-[#B4713D]/10 text-[#B4713D] border border-[#B4713D]/20 px-3 py-1 rounded text-xs font-medium font-sans"
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
