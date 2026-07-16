import React from 'react';
import { Package2, Truck, Warehouse } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  {
    icon: Package2,
    title: "Commodity Export",
    description: "We source, sort, and export premium Indonesian coffee, cinnamon, nutmeg, and charcoal briquettes to global markets with rigorous quality control."
  },
  {
    icon: Truck,
    title: "Logistics & Tracking",
    description: "End-to-end shipment coordination via Tanjung Priok (Jakarta) and Belawan (Medan), with real-time tracking and documentation support."
  },
  {
    icon: Warehouse,
    title: "Warehousing",
    description: "Secure, climate-aware storage facilities to maintain commodity quality from intake through export."
  }
];

export function OurServices() {
  return (
    <section id="services" className="py-24 md:py-32 bg-[#1B3A2D]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="font-serif text-[#FAF8F3] text-4xl md:text-5xl font-bold mb-16 text-center"
        >
          Our Services
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="bg-[#244537] p-8 md:p-10 rounded-xl border border-transparent hover:border-[#B4713D] transition-colors duration-300 group flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 rounded-full bg-[#1B3A2D] flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="text-[#B4713D]" size={32} strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-[#FAF8F3] text-2xl font-bold mb-4">
                  {service.title}
                </h3>
                <p className="font-sans text-[#FAF8F3]/70 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
