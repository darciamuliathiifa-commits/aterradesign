import React from 'react';
import { motion } from 'framer-motion';

const commodities = [
  {
    title: "Coffee",
    image: "commodity-coffee.jpg",
    description: "Arabica and Robusta beans from Sumatra, Java, Toraja, and other renowned growing regions."
  },
  {
    title: "Cinnamon (Cassia Vera)",
    image: "commodity-cinnamon.jpg",
    description: "High-quality cinnamon bark from West Sumatra, among the world's largest cassia-producing regions."
  },
  {
    title: "Nutmeg",
    image: "commodity-nutmeg.jpg",
    description: "Whole nutmeg and mace from the Banda Islands and North Sulawesi."
  },
  {
    title: "Charcoal Briquettes",
    image: "commodity-charcoal.jpg",
    description: "Coconut shell and wood-based briquettes for BBQ, shisha, and industrial fuel markets."
  }
];

export function CoreCommodities() {
  return (
    <section id="products" className="py-24 md:py-32 bg-[#F5EFE4]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-[#4A2C1A] text-4xl md:text-5xl font-bold mb-4">
            Our Core Commodities
          </h2>
          <p className="font-sans text-[#22201C]/70 text-lg max-w-2xl mx-auto">
            Four pillars of Indonesian export excellence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 w-full">
          {commodities.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer rounded-xl overflow-hidden bg-white shadow-xl shadow-[#4A2C1A]/5 hover:shadow-2xl hover:shadow-[#4A2C1A]/10 transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="relative h-[300px] w-full overflow-hidden">
                <img 
                  src={`${import.meta.env.BASE_URL}${item.image}`} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <div className="p-8">
                <h3 className="font-serif text-[#4A2C1A] text-2xl font-bold mb-3 group-hover:text-[#B4713D] transition-colors">
                  {item.title}
                </h3>
                <p className="font-sans text-[#22201C] opacity-80 leading-relaxed text-lg">
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
