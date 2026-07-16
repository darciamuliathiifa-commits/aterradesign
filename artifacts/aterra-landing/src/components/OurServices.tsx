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
    <section id="services" className="py-24 md:py-32 bg-[var(--ink)] border-t border-dashed border-[var(--jute)]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 flex flex-col gap-6"
        >
          <div className="flex items-center gap-4">
            <span className="font-['IBM_Plex_Mono'] text-[var(--jute)] uppercase tracking-[0.1em] text-sm font-semibold">DOC 02 / OUR SERVICES</span>
            <div className="flex-1 h-[1px] bg-[var(--jute)]"></div>
          </div>
          <h2 className="font-['Archivo'] font-black uppercase text-[var(--offwhite)] text-4xl md:text-5xl tracking-[-0.02em] leading-[1.05]">
            OUR SERVICES
          </h2>
        </motion.div>

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
                className="bg-[var(--paper)] p-8 md:p-10 border border-[var(--ink)] rounded-none hover:border-[var(--stamp)] transition-colors duration-300 group flex flex-col items-start"
              >
                <Icon className="text-[var(--jute)] mb-8" size={32} strokeWidth={1.5} />
                <h3 className="font-['Archivo'] font-black uppercase text-[var(--ink)] text-2xl tracking-[-0.02em] leading-[1.05] mb-4">
                  {service.title}
                </h3>
                <p className="font-['Archivo'] text-[var(--ink)] leading-[1.65]">
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
