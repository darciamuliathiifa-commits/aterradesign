import React from 'react';

export function Footer() {
  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Products', href: '#products' },
    { name: 'Origins', href: '#origins' },
    { name: 'Process', href: '#process' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer id="contact" className="bg-[var(--ink)] pt-20 pb-8 border-t border-dashed border-[var(--jute)]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col gap-16">
        
        {/* Top Contact Info */}
        <div className="flex flex-col items-center text-center gap-6">
          <h3 className="font-['Archivo'] font-black uppercase text-[var(--offwhite)] text-3xl md:text-4xl tracking-[-0.02em] mb-2">
            GET IN TOUCH
          </h3>
          
          <div className="flex flex-col gap-4 font-['IBM_Plex_Mono'] text-[var(--offwhite)]/80 text-sm md:text-base uppercase tracking-[0.05em]">
            <p>EXPORT OFFICE: BANDUNG, INDONESIA</p>
            <p>
              EMAIL:{' '}
              <a 
                href="mailto:anandaterranusantara@gmail.com" 
                className="hover:text-[var(--jute)] transition-colors text-[var(--offwhite)]"
              >
                ANANDATERRANUSANTARA@GMAIL.COM
              </a>
            </p>
            <p>
              WHATSAPP:{' '}
              <a 
                href="https://wa.me/6289510519278" 
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[var(--jute)] transition-colors text-[var(--offwhite)]"
              >
                +62 895-1051-9278
              </a>
            </p>
            <p className="mt-4 pt-4 border-t border-dashed border-[var(--jute)] text-xs md:text-sm max-w-lg mx-auto">
              PORT OF LOADING: TANJUNG PRIOK (IDTPP) · BELAWAN (IDBLW)
            </p>
          </div>
        </div>

        {/* Horizontal Rule */}
        <hr className="border-t border-dashed border-[var(--jute)] opacity-50" />

        {/* Bottom Strip */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          <div className="font-['Archivo'] font-black text-[var(--offwhite)] text-xl tracking-[-0.02em] uppercase">
            ATERRA
          </div>
          
          <div className="flex flex-wrap justify-center gap-6">
            {quickLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="font-['IBM_Plex_Mono'] text-[var(--offwhite)]/60 text-xs uppercase tracking-[0.1em] hover:text-[var(--offwhite)] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
          
          <div className="font-['IBM_Plex_Mono'] text-[var(--offwhite)]/40 text-xs uppercase tracking-[0.1em]">
            © 2026 PT ANANDA TERRA NUSANTARA. ALL RIGHTS RESERVED.
          </div>
          
        </div>

      </div>
    </footer>
  );
}
