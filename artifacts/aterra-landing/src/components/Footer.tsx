import React from 'react';

export function Footer() {
  const quickLinks = [
    { name: 'About',    href: '#about' },
    { name: 'Products', href: '#products' },
    { name: 'Origins',  href: '#origins' },
    { name: 'Process',  href: '#process' },
    { name: 'Contact',  href: '#contact' },
  ];

  return (
    <footer id="contact" className="relative overflow-hidden bg-[var(--ink)] pt-16 md:pt-20 pb-24 md:pb-8 border-t border-dashed border-[var(--jute)]">

      {/* Logo watermark */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <img
          src={`${import.meta.env.BASE_URL}logo-light.png`}
          alt=""
          className="w-[480px] max-w-[80vw] select-none"
          style={{ opacity: 0.05 }}
          draggable={false}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-5 md:px-12 flex flex-col gap-12 md:gap-16">

        {/* Top Contact Info */}
        <div className="flex flex-col gap-4 md:gap-6 md:items-center md:text-center">
          <h3 className="font-['Archivo'] font-black uppercase text-[var(--offwhite)] text-2xl md:text-4xl tracking-[-0.02em]">
            GET IN TOUCH
          </h3>

          {/* Office location — plain text */}
          <p className="font-['IBM_Plex_Mono'] text-[var(--offwhite)]/80 text-sm uppercase tracking-[0.05em] leading-[1.7] md:max-w-lg md:mx-auto">
            EXPORT OFFICE: KOMPLEK GRIYA JATIPUTRA NO. 101, RT 004 RW 013, PASIRJATI, KEC. UJUNG BERUNG, KOTA BANDUNG — JAWA BARAT 40616
          </p>

          {/* Email — full-width tappable row on mobile */}
          <a
            href="mailto:anandaterranusantara@gmail.com"
            className="flex items-center gap-3 md:justify-center text-[var(--offwhite)] active:text-[var(--jute)] hover:text-[var(--jute)] transition-colors"
            style={{ minHeight: '44px' }}
          >
            <span className="font-['IBM_Plex_Mono'] text-[var(--jute)] text-xs uppercase tracking-[0.1em] shrink-0">
              EMAIL
            </span>
            <span className="font-['IBM_Plex_Mono'] text-sm uppercase tracking-[0.04em] break-all">
              ANANDATERRANUSANTARA@GMAIL.COM
            </span>
          </a>

          {/* WhatsApp — full-width tappable row on mobile */}
          <a
            href="https://wa.me/6289510519278"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 md:justify-center text-[var(--offwhite)] active:text-[var(--jute)] hover:text-[var(--jute)] transition-colors"
            style={{ minHeight: '44px' }}
          >
            <span className="font-['IBM_Plex_Mono'] text-[var(--jute)] text-xs uppercase tracking-[0.1em] shrink-0">
              WHATSAPP
            </span>
            <span className="font-['IBM_Plex_Mono'] text-sm uppercase tracking-[0.04em]">
              +62 895-1051-9278
            </span>
          </a>

          {/* Port line */}
          <p
            className="font-['IBM_Plex_Mono'] text-[var(--offwhite)]/60 text-xs uppercase tracking-[0.05em] pt-4 border-t border-dashed border-[var(--jute)] w-full md:max-w-lg md:mx-auto text-center"
          >
            PORT OF LOADING: TANJUNG PRIOK (IDTPP) · BELAWAN (IDBLW)
          </p>
        </div>

        {/* Horizontal Rule */}
        <hr className="border-t border-dashed border-[var(--jute)] opacity-50" />

        {/* Bottom strip */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-5">
          <div>
            <img
              src={`${import.meta.env.BASE_URL}logo-light.png`}
              alt="ATERRA — PT Ananda Terra Nusantara"
              className="h-[30px] w-auto object-contain"
            />
          </div>

          <div className="flex flex-wrap gap-5 md:gap-6">
            {quickLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-['IBM_Plex_Mono'] text-[var(--offwhite)]/60 text-xs uppercase tracking-[0.1em] hover:text-[var(--offwhite)] active:text-[var(--offwhite)] transition-colors"
                style={{ minHeight: '44px', display: 'flex', alignItems: 'center' }}
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
