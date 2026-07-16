import React, { useRef, useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const videoRef = useRef<HTMLVideoElement>(null);

  // Only set video src on mobile to avoid loading a large file on desktop
  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;
    if (window.innerWidth < 768) {
      el.src = `${import.meta.env.BASE_URL}hero-mobile.mp4`;
      el.load();
    }
  }, []);

  return (
    <section
      id="hero-section"
      className="relative w-full flex items-center justify-center overflow-hidden"
      style={{ height: '100svh' }}
    >
      {/* Desktop background image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat md:block hidden"
        style={{ backgroundImage: `url('${import.meta.env.BASE_URL}hero-poster.jpg')` }}
      />

      {/* Mobile background image / poster (shown before video loads or if video fails) */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat md:hidden"
        style={{ backgroundImage: `url('${import.meta.env.BASE_URL}hero-poster.jpg')` }}
      />

      {/* Mobile video — hidden on desktop, loads only when src is set by JS */}
      <video
        ref={videoRef}
        className="absolute inset-0 z-[1] w-full h-full object-cover md:hidden"
        autoPlay
        muted
        loop
        playsInline
        poster={`${import.meta.env.BASE_URL}hero-poster.jpg`}
        width={390}
        height={844}
        onError={(e) => {
          // Silently fall back to poster image — no src means the poster stays visible
          (e.target as HTMLVideoElement).style.display = 'none';
        }}
      />

      {/* Dark overlay */}
      <div
        className="absolute inset-0 z-10"
        style={{
          background:
            'linear-gradient(to bottom, rgba(0,0,0,0.55), rgba(0,0,0,0.35) 50%, rgba(0,0,0,0.65))',
        }}
      />

      {/* Content */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-5 md:px-12 text-center flex flex-col items-center">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.8, ease: 'easeOut' }}
          className="relative mb-5 md:mb-6"
        >
          <span className="font-['Allerta_Stencil'] text-[var(--offwhite)]/80 text-xs md:text-base tracking-[0.18em] uppercase">
            PT ANANDA TERRA NUSANTARA — PRODUCT OF INDONESIA
          </span>
          <motion.div
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 1.2 }}
            whileInView={shouldReduceMotion ? { opacity: 0.92 } : { opacity: 0.92, scale: 1 }}
            transition={{ type: 'spring', stiffness: 400, damping: 15, delay: 0.5 }}
            className="absolute -top-8 -right-2 md:-right-16 rubber-stamp"
          >
            PRODUCT OF INDONESIA
          </motion.div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.8, ease: 'easeOut', delay: 0.1 }}
          className="font-['Archivo'] font-black uppercase text-[var(--offwhite)] tracking-[-0.02em] leading-[1.05] max-w-[900px]"
          style={{ fontSize: 'clamp(2.4rem, 6vw + 0.5rem, 5.5rem)' }}
        >
          From Indonesian Soil to the World
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="mt-6 md:mt-8 text-[var(--offwhite)]/70 font-['IBM_Plex_Mono'] text-xs md:text-base uppercase tracking-[0.05em] max-w-[540px] leading-relaxed"
        >
          Premium coffee, cinnamon, nutmeg & charcoal briquettes — sourced directly from smallholder
          farmers, delivered to global markets.
        </motion.p>

        {/* Buttons — full-width stacked on mobile, side-by-side on sm+ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.8, delay: 0.4, ease: 'easeOut' }}
          className="mt-8 md:mt-10 flex flex-col sm:flex-row gap-3 items-stretch sm:items-center w-full sm:w-auto"
        >
          <a
            href="#products"
            className="flex items-center justify-center bg-[var(--stamp)] text-[var(--offwhite)] px-8 rounded-none font-['Archivo'] font-black uppercase text-sm tracking-wide active:brightness-90 active:translate-y-[1px] hover:opacity-90 transition-all w-full sm:w-auto"
            style={{ height: '52px' }}
            data-testid="hero-btn-products"
          >
            Explore Our Commodities
          </a>
          <a
            href="#inquiry"
            className="flex items-center justify-center border border-[var(--offwhite)] text-[var(--offwhite)] px-8 rounded-none font-['Archivo'] font-black uppercase text-sm tracking-wide bg-transparent active:bg-[var(--offwhite)]/10 active:translate-y-[1px] hover:bg-[var(--offwhite)] hover:text-[var(--ink)] transition-all w-full sm:w-auto"
            style={{ height: '52px' }}
            data-testid="hero-btn-inquiry"
          >
            Export Inquiry
          </a>
        </motion.div>
      </div>
    </section>
  );
}
