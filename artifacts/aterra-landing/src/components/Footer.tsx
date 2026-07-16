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
    <footer id="contact" className="bg-[#1B3A2D] pt-20 pb-8 border-t border-[#B4713D]/20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col gap-16">
        
        {/* Top Contact Info */}
        <div className="flex flex-col items-center text-center gap-6">
          <h3 className="font-serif text-[#FAF8F3] text-3xl md:text-4xl font-bold mb-2">
            Get In Touch
          </h3>
          
          <div className="flex flex-col gap-3 font-sans text-[#FAF8F3]/80 text-lg">
            <p>Export Office: Bandung, Indonesia</p>
            <p>
              Email:{' '}
              <a 
                href="mailto:anandaterranusantara@gmail.com" 
                className="hover:text-[#B4713D] transition-colors font-medium text-[#FAF8F3]"
              >
                anandaterranusantara@gmail.com
              </a>
            </p>
            <p>
              WhatsApp:{' '}
              <a 
                href="https://wa.me/6289510519278" 
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#B4713D] transition-colors font-medium text-[#FAF8F3]"
              >
                +62 895-1051-9278
              </a>
            </p>
            <p className="mt-4 pt-4 border-t border-[#FAF8F3]/10 text-sm max-w-sm mx-auto">
              Ports of Loading: Tanjung Priok (Jakarta) & Belawan (Medan)
            </p>
          </div>
        </div>

        {/* Horizontal Rule */}
        <hr className="border-[#FAF8F3]/10" />

        {/* Bottom Strip */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          <div className="font-serif text-[#FAF8F3] text-xl font-bold tracking-wider">
            ATERRA
          </div>
          
          <div className="flex flex-wrap justify-center gap-6">
            {quickLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="font-sans text-[#FAF8F3]/60 text-sm hover:text-[#FAF8F3] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
          
          <div className="font-sans text-[#FAF8F3]/50 text-xs">
            © 2026 PT Ananda Terra Nusantara. All rights reserved.
          </div>
          
        </div>

      </div>
    </footer>
  );
}
