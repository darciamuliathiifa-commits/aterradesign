import React from 'react';
import { motion } from 'framer-motion';

export function AboutUs() {
  return (
    <section id="about" className="py-24 md:py-32 bg-[#F5EFE4]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex flex-col gap-6"
        >
          <div className="flex flex-col gap-2">
            <span className="font-sans text-[#B4713D] font-bold tracking-widest text-sm uppercase">
              WHO WE ARE
            </span>
            <h2 className="font-serif text-[#4A2C1A] text-4xl md:text-5xl font-bold leading-tight">
              About ATERRA
            </h2>
          </div>
          
          <p className="font-sans text-[#22201C] text-lg leading-relaxed opacity-90">
            Ananda Terra Nusantara (ATERRA) is an Indonesia-based export company specializing in premium agricultural and natural commodities, including coffee, cinnamon, nutmeg, and charcoal briquettes — sourced directly from smallholder farmers and trusted regional suppliers across Indonesia's most fertile growing regions, including Sumatra and Java.
          </p>
          <p className="font-sans text-[#22201C] text-lg leading-relaxed opacity-90">
            We work closely with local farming communities to ensure consistent quality, sustainable harvesting practices, and fair trade partnerships, while maintaining strict quality control from farm to port. Our export operations are supported by established logistics networks, enabling reliable, timely delivery to international buyers in the food & beverage, spice, and energy sectors.
          </p>
          
          <div className="flex flex-wrap gap-3 mt-6">
            {["Direct from Farmers", "Sustainable Sourcing", "Farm-to-Port QC"].map((badge, i) => (
              <span 
                key={i}
                className="px-4 py-1.5 rounded-full border border-[#B4713D] text-[#B4713D] font-medium text-sm font-sans"
              >
                {badge}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="relative h-[600px] w-full rounded-xl overflow-hidden shadow-2xl shadow-[#4A2C1A]/10"
        >
          <img 
            src={`${import.meta.env.BASE_URL}about-image.jpg`} 
            alt="Indonesian coffee farmers handpicking ripe red coffee cherries"
            className="object-cover w-full h-full hover:scale-105 transition-transform duration-1000 ease-in-out"
          />
        </motion.div>

      </div>
    </section>
  );
}
