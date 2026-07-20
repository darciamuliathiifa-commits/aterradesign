import React, { useRef, useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <section
      id="hero-section"
      className="relative w-full flex items-center justify-center overflow-hidden"
      style={{ height: '100svh' }}
    >
      {/* Poster image — always rendered as the base layer / fallback */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('${import.meta.env.BASE_URL}hero-poster.jpg')` }}
      />

      {/*
       * Hero video — single element, srcSet via <source> tags.
       * Browser picks the first source it can decode.
       * autoPlay + muted + playsInline are all required for autoplay on iOS/Chrome.
       * prefers-reduced-motion: video still loads but won't animate — the poster
       * shows instead because we hide the video element via CSS.
       */}
      {!shouldReduceMotion && (
        <video
          ref={videoRef}
          className="absolute inset-0 z-[1] w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster={`${import.meta.env.BASE_URL}hero-poster.jpg`}
          onError={(e) => {
            (e.target as HTMLVideoElement).style.display = 'none';
          }}
        >
          {/* Desktop: 1280×720 ~5MB */}
          <source
            src={`${import.meta.env.BASE_URL}hero.mp4`}
            type="video/mp4"
            media="(min-width: 768px)"
          />
          {/* Mobile: 854×480 ~2.6MB */}
          <source
            src={`${import.meta.env.BASE_URL}hero-mobile.mp4`}
            type="video/mp4"
          />
        </video>
      )}

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
          className="mb-5 md:mb-6"
        >
          <span className="font-['Allerta_Stencil'] text-[var(--offwhite)]/80 text-xs md:text-base tracking-[0.18em] uppercase">
            PT ANANDA TERRA NUSANTARA, PRODUCT OF INDONESIAN
          </span>
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
          Premium coffee, cinnamon, nutmeg & charcoal briquettes, sourced directly from smallholder
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
