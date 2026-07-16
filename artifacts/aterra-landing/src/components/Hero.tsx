import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative w-full h-[100dvh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('${import.meta.env.BASE_URL}hero-bg.jpg')`,
        }}
      />
      
      {/* Dark Overlay */}
      <div 
        className="absolute inset-0 z-10"
        style={{
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.55), rgba(0,0,0,0.35) 50%, rgba(0,0,0,0.65))'
        }}
      />

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-12 text-center flex flex-col items-center">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative mb-6"
        >
          <span className="font-['Allerta_Stencil'] text-[var(--offwhite)]/80 text-sm md:text-base tracking-[0.15em] uppercase">
            PT ANANDA TERRA NUSANTARA — PRODUCT OF INDONESIA
          </span>
          <motion.div 
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 1.2 }}
            whileInView={shouldReduceMotion ? { opacity: 0.92 } : { opacity: 0.92, scale: 1 }}
            transition={{ type: "spring", stiffness: 400, damping: 15, delay: 0.5 }}
            className="absolute -top-8 -right-8 md:-right-16 rubber-stamp"
          >
            PRODUCT OF INDONESIA
          </motion.div>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          className="font-['Archivo'] font-black uppercase text-[var(--offwhite)] text-[clamp(2.8rem,5vw+1rem,5.5rem)] tracking-[-0.02em] leading-[1.05] max-w-[900px]"
        >
          From Indonesian Soil to the World
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="mt-8 text-[var(--offwhite)]/70 font-['IBM_Plex_Mono'] text-sm md:text-base uppercase tracking-[0.05em] max-w-[540px] leading-relaxed"
        >
          Premium coffee, cinnamon, nutmeg & charcoal briquettes — sourced directly from smallholder farmers, delivered to global markets.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="mt-10 flex flex-col sm:flex-row gap-4 items-center"
        >
          <a 
            href="#products" 
            className="bg-[var(--stamp)] text-[var(--offwhite)] px-8 py-4 rounded-none font-['Archivo'] font-black uppercase text-sm tracking-wide hover:opacity-90 transition-opacity min-w-[220px]"
            data-testid="hero-btn-products"
          >
            Explore Our Commodities
          </a>
          <a 
            href="#inquiry" 
            className="border border-[var(--offwhite)] text-[var(--offwhite)] px-8 py-4 rounded-none font-['Archivo'] font-black uppercase text-sm tracking-wide bg-transparent hover:bg-[var(--offwhite)] hover:text-[var(--ink)] transition-colors min-w-[220px]"
            data-testid="hero-btn-inquiry"
          >
            Export Inquiry
          </a>
        </motion.div>
      </div>

    </section>
  );
}
