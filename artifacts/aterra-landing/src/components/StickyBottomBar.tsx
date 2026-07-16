import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function StickyBottomBar() {
  const [heroGone, setHeroGone]   = useState(false);
  const [formVisible, setFormVisible] = useState(false);

  useEffect(() => {
    const heroEl = document.querySelector<HTMLElement>('#hero-section');
    const formEl = document.getElementById('inquiry');

    const opts = { threshold: 0.05 };

    const heroObs = heroEl
      ? new IntersectionObserver(([e]) => setHeroGone(!e.isIntersecting), opts)
      : null;

    const formObs = formEl
      ? new IntersectionObserver(([e]) => setFormVisible(e.isIntersecting), {
          threshold: 0.15,
        })
      : null;

    if (heroEl) heroObs!.observe(heroEl);
    if (formEl) formObs!.observe(formEl);

    return () => {
      heroObs?.disconnect();
      formObs?.disconnect();
    };
  }, []);

  const show = heroGone && !formVisible;

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 72 }}
          animate={{ y: 0 }}
          exit={{ y: 72 }}
          transition={{ duration: 0.22, ease: [0.4, 0, 0.2, 1] }}
          className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-[var(--ink)] border-t border-[var(--jute)] flex items-center gap-3 px-5"
          style={{
            paddingBottom: 'env(safe-area-inset-bottom)',
            height: 'calc(60px + env(safe-area-inset-bottom))',
          }}
        >
          {/* Request a Quote */}
          <a
            href="#inquiry"
            className="flex-1 flex items-center justify-center bg-[var(--stamp)] text-[var(--offwhite)] font-['Archivo'] font-black uppercase text-xs tracking-wide rounded-none active:brightness-90 active:translate-y-[1px] transition-all"
            style={{ height: '44px' }}
          >
            REQUEST A QUOTE
          </a>

          {/* WhatsApp icon button */}
          <a
            href="https://wa.me/6289510519278"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center border border-[var(--jute)] rounded-none active:border-[var(--stamp)] active:bg-[var(--jute)]/10 transition-all shrink-0"
            style={{ width: '44px', height: '44px' }}
            aria-label="Chat on WhatsApp"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-[var(--offwhite)]">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
