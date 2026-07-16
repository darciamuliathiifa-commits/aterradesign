import React from 'react';
import { motion } from 'framer-motion';

export function Hero() {
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
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="font-serif text-[#FAF8F3] text-[clamp(2.5rem,5vw+1rem,5rem)] leading-tight max-w-[800px]"
        >
          From Indonesian Soil to the World
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="mt-6 text-[#FAF8F3]/80 font-sans text-lg md:text-xl max-w-[540px] leading-relaxed"
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
            className="bg-[#B4713D] text-[#FAF8F3] px-8 py-3.5 rounded font-medium hover:bg-[#9a5e30] transition-colors min-w-[220px]"
            data-testid="hero-btn-products"
          >
            Explore Our Commodities
          </a>
          <a 
            href="#inquiry" 
            className="border-2 border-[#FAF8F3] text-[#FAF8F3] px-8 py-3.5 rounded font-medium hover:bg-[#FAF8F3] hover:text-[#1B3A2D] transition-colors min-w-[220px]"
            data-testid="hero-btn-inquiry"
          >
            Export Inquiry
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-[#FAF8F3]/0 via-[#FAF8F3]/50 to-[#FAF8F3] animate-pulse" />
      </motion.div>
    </section>
  );
}
