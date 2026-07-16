import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Products', href: '#products' },
    { name: 'Origins', href: '#origins' },
    { name: 'Process', href: '#process' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${
        isScrolled
          ? 'bg-[var(--ink)] shadow-none py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <a
          href="#"
          className="font-['Archivo'] text-[var(--offwhite)] text-2xl md:text-3xl font-black uppercase tracking-[-0.02em]"
          data-testid="link-logo"
        >
          ATERRA
        </a>

        {/* Desktop Links */}
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
            className="bg-[var(--stamp)] text-[var(--offwhite)] px-6 py-2.5 rounded-none hover:opacity-90 transition-opacity font-['Archivo'] font-black uppercase text-sm"
            data-testid="link-inquiry-cta"
          >
            Request a Quote
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[var(--offwhite)]"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          data-testid="button-mobile-menu"
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[var(--ink)] border-t border-[var(--jute)] border-dashed mt-4 overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-['IBM_Plex_Mono'] text-[var(--offwhite)] text-sm uppercase tracking-[0.1em] hover:text-[var(--jute)] transition-colors py-2"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#inquiry"
                onClick={() => setMobileMenuOpen(false)}
                className="bg-[var(--stamp)] text-[var(--offwhite)] px-6 py-3 rounded-none text-center font-['Archivo'] font-black uppercase text-sm mt-4 hover:opacity-90 transition-opacity"
              >
                Request a Quote
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
