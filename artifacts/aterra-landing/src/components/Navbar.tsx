import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  const navLinks = [
    { num: '01', name: 'About',          href: '#about' },
    { num: '02', name: 'Products',       href: '#products' },
    { num: '03', name: 'Origins',        href: '#origins' },
    { num: '04', name: 'Process',        href: '#process' },
    { num: '05', name: 'Certifications', href: '#certifications' },
    { num: '06', name: 'Contact',        href: '#contact' },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${
          isScrolled ? 'bg-[var(--ink)] py-4' : 'bg-transparent py-6'
        }`}
        style={{ paddingTop: `max(env(safe-area-inset-top), ${isScrolled ? '1rem' : '1.5rem'})` }}
      >
        <div className="max-w-7xl mx-auto px-5 md:px-12 flex justify-between items-center">
          <a href="#" className="flex items-center shrink-0">
            <img
              src={`${import.meta.env.BASE_URL}logo-light.png`}
              alt="ATERRA — PT Ananda Terra Nusantara"
              className="h-[30px] md:h-[36px] w-auto object-contain"
              style={{ imageRendering: 'auto' }}
            />
          </a>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-['IBM_Plex_Mono'] text-[var(--offwhite)] text-xs uppercase tracking-[0.1em] hover:text-[var(--jute)] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <a
              href="#inquiry"
              className="bg-[var(--stamp)] text-[var(--offwhite)] px-6 py-2.5 rounded-none font-['Archivo'] font-black uppercase text-sm hover:opacity-90 active:translate-y-[1px] active:brightness-90 transition-all"
            >
              Request a Quote
            </a>
          </div>

          {/* Mobile hamburger — 44×44 touch target */}
          <button
            className="md:hidden flex flex-col gap-[5px] items-end justify-center w-11 h-11 text-[var(--offwhite)]"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open navigation menu"
            data-testid="button-mobile-menu"
          >
            <span className="block w-6 h-[1.5px] bg-[var(--offwhite)]" />
            <span className="block w-6 h-[1.5px] bg-[var(--offwhite)]" />
            <span className="block w-4 h-[1.5px] bg-[var(--offwhite)]" />
          </button>
        </div>
      </nav>

      {/* Full-screen mobile overlay — manifest index style */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
            className="fixed inset-0 z-[60] bg-[var(--ink)] flex flex-col"
            style={{
              paddingTop: 'env(safe-area-inset-top)',
              paddingBottom: 'env(safe-area-inset-bottom)',
            }}
          >
            {/* Header row */}
            <div className="flex justify-between items-center px-5 py-4 border-b border-dashed border-[var(--jute)]/50 shrink-0">
              <img
                src={`${import.meta.env.BASE_URL}logo-light.png`}
                alt="ATERRA — PT Ananda Terra Nusantara"
                className="h-[30px] w-auto object-contain"
              />
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center w-11 h-11 text-[var(--offwhite)] active:text-[var(--jute)] transition-colors"
                aria-label="Close menu"
              >
                <X size={22} />
              </button>
            </div>

            {/* Manifest index links */}
            <nav className="flex flex-col flex-1 overflow-y-auto">
              {navLinks.map((link, i) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center gap-5 px-5 active:bg-[var(--jute)]/10 transition-colors ${
                    i !== navLinks.length - 1 ? 'border-b border-dashed border-[var(--jute)]/30' : ''
                  }`}
                  style={{ minHeight: '56px' }}
                >
                  <span className="font-['IBM_Plex_Mono'] text-[var(--jute)] text-xs tracking-[0.1em] shrink-0">
                    {link.num}
                  </span>
                  <span className="font-['IBM_Plex_Mono'] text-[var(--offwhite)] text-base uppercase tracking-[0.08em]">
                    / {link.name.toUpperCase()}
                  </span>
                </a>
              ))}
            </nav>

            {/* CTA at bottom */}
            <div className="px-5 py-5 border-t border-dashed border-[var(--jute)]/50 shrink-0">
              <a
                href="#inquiry"
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full bg-[var(--stamp)] text-[var(--offwhite)] py-4 text-center font-['Archivo'] font-black uppercase text-sm tracking-wide rounded-none active:brightness-90 active:translate-y-[1px] transition-all"
              >
                REQUEST A QUOTE
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
