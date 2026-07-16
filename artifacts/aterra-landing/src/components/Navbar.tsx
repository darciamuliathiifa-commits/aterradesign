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
          ? 'bg-[#1B3A2D] shadow-lg py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <a
          href="#"
          className="font-serif text-[#FAF8F3] text-2xl md:text-3xl font-bold tracking-wider"
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
              className="text-[#FAF8F3] text-sm font-medium hover:text-[#B4713D] transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <a
            href="#inquiry"
            className="bg-[#B4713D] text-[#FAF8F3] px-6 py-2.5 rounded hover:bg-[#9a5e30] transition-colors font-medium text-sm font-sans"
            data-testid="link-inquiry-cta"
          >
            Request a Quote
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[#FAF8F3]"
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
            className="md:hidden bg-[#1B3A2D] border-t border-[#1B3A2D]/20 mt-4 overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-[#FAF8F3] text-lg font-medium hover:text-[#B4713D] transition-colors py-2"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#inquiry"
                onClick={() => setMobileMenuOpen(false)}
                className="bg-[#B4713D] text-[#FAF8F3] px-6 py-3 rounded text-center font-medium mt-4 hover:bg-[#9a5e30] transition-colors"
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
