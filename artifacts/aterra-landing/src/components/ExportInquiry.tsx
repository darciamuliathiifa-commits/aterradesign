import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const inputCls =
  'w-full px-4 rounded-none border border-[var(--ink)] bg-[var(--paper)] focus:outline-none focus:border-[var(--stamp)] transition-colors font-[\'Archivo\'] text-[var(--ink)] text-base appearance-none';

// 52px tall — also ensures iOS font-size ≥ 16px so the keyboard doesn't auto-zoom
const inputStyle: React.CSSProperties = { height: '52px', fontSize: '16px', borderRadius: 0 };
const textareaStyle: React.CSSProperties = { fontSize: '16px', borderRadius: 0, paddingTop: '14px', paddingBottom: '14px' };

export function ExportInquiry() {
  const [status, setStatus] = useState<'idle' | 'success'>('idle');
  const successRef = useRef<HTMLParagraphElement>(null);

  const submitInquiry = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = {
      fullName:              formData.get('fullName')?.toString()              || '',
      companyName:           formData.get('companyName')?.toString()           || '',
      email:                 formData.get('email')?.toString()                 || '',
      country:               formData.get('country')?.toString()               || '',
      originOfInterest:      formData.get('originOfInterest')?.toString()      || '',
      estimatedAnnualVolume: formData.get('estimatedAnnualVolume')?.toString() || '',
      message:               formData.get('message')?.toString()               || '',
    };

    const whatsappMessage = `Hello ATERRA Team,

Name: ${data.fullName}
Company: ${data.companyName}
Email: ${data.email}
Country: ${data.country}
Origin of Interest: ${data.originOfInterest}
Estimated Annual Volume: ${data.estimatedAnnualVolume}

Message: ${data.message}`;

    const encodedMessage = encodeURIComponent(whatsappMessage);
    const waUrl = `https://wa.me/6289510519278?text=${encodedMessage}`;

    window.open(waUrl, '_blank');
    setStatus('success');
    e.currentTarget.reset();

    // Scroll success message into view on mobile
    setTimeout(() => {
      successRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 100);
  };

  return (
    <section
      id="inquiry"
      className="py-20 md:py-32 paper-texture border-t border-dashed border-[var(--jute)]"
    >
      <div className="max-w-4xl mx-auto px-5 md:px-12 flex flex-col">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-16 flex flex-col gap-6"
        >
          <div className="flex items-center gap-4">
            <span className="font-['IBM_Plex_Mono'] text-[var(--jute)] uppercase tracking-[0.1em] text-sm font-semibold whitespace-nowrap">
              DOC 08 / EXPORT INQUIRY
            </span>
            <div className="flex-1" style={{ height: '1px', background: 'var(--jute)' }} />
          </div>
          <div>
            <h2
              className="font-['Archivo'] font-black uppercase text-[var(--ink)] tracking-[-0.02em] leading-[1.05] mb-2"
              style={{ fontSize: 'clamp(2rem, 4vw + 0.5rem, 3rem)' }}
            >
              EXPORT INQUIRY
            </h2>
            <p className="font-['IBM_Plex_Mono'] text-[var(--ink)]/70 text-sm uppercase tracking-[0.05em]">
              Tell us what you need. Our export team replies within 24 hours.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-[var(--paper)] p-6 md:p-12 border border-[var(--ink)]"
          style={{ borderRadius: 0 }}
        >
          <form onSubmit={submitInquiry} className="flex flex-col gap-6 md:gap-8">

            {/* Row 1: Full Name / Company */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="fullName"
                  className="font-['IBM_Plex_Mono'] text-xs font-semibold uppercase tracking-[0.1em] text-[var(--ink)]"
                >
                  FULL NAME *
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  required
                  autoComplete="name"
                  className={inputCls}
                  style={inputStyle}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="companyName"
                  className="font-['IBM_Plex_Mono'] text-xs font-semibold uppercase tracking-[0.1em] text-[var(--ink)]"
                >
                  COMPANY NAME
                </label>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  autoComplete="organization"
                  className={inputCls}
                  style={inputStyle}
                />
              </div>
            </div>

            {/* Row 2: Email / Country */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="email"
                  className="font-['IBM_Plex_Mono'] text-xs font-semibold uppercase tracking-[0.1em] text-[var(--ink)]"
                >
                  EMAIL ADDRESS *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  autoComplete="email"
                  inputMode="email"
                  className={inputCls}
                  style={inputStyle}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="country"
                  className="font-['IBM_Plex_Mono'] text-xs font-semibold uppercase tracking-[0.1em] text-[var(--ink)]"
                >
                  COUNTRY
                </label>
                <select
                  id="country"
                  name="country"
                  autoComplete="country-name"
                  className={inputCls}
                  style={inputStyle}
                >
                  <option value="">SELECT COUNTRY…</option>
                  <option>Australia</option>
                  <option>Canada</option>
                  <option>China</option>
                  <option>France</option>
                  <option>Germany</option>
                  <option>India</option>
                  <option>Italy</option>
                  <option>Japan</option>
                  <option>Malaysia</option>
                  <option>Netherlands</option>
                  <option>New Zealand</option>
                  <option>Saudi Arabia</option>
                  <option>Singapore</option>
                  <option>South Korea</option>
                  <option>Spain</option>
                  <option>Taiwan</option>
                  <option>United Arab Emirates</option>
                  <option>United Kingdom</option>
                  <option>United States</option>
                  <option>Other</option>
                </select>
              </div>
            </div>

            {/* Row 3: Origin of Interest / Volume */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="originOfInterest"
                  className="font-['IBM_Plex_Mono'] text-xs font-semibold uppercase tracking-[0.1em] text-[var(--ink)]"
                >
                  ORIGIN OF INTEREST
                </label>
                <select
                  id="originOfInterest"
                  name="originOfInterest"
                  className={inputCls}
                  style={inputStyle}
                >
                  <option value="">SELECT A COMMODITY…</option>
                  <optgroup label="COFFEE ORIGINS">
                    <option value="Kintamani Bali">KINTAMANI BALI</option>
                    <option value="Jember">JEMBER</option>
                    <option value="Ijen">IJEN</option>
                    <option value="Java Preanger">JAVA PREANGER</option>
                    <option value="Lampung">LAMPUNG</option>
                    <option value="Kerinci">KERINCI</option>
                    <option value="Palembang">PALEMBANG</option>
                  </optgroup>
                  <optgroup label="SPICES & FUEL">
                    <option value="Cinnamon (Cassia Vera)">CINNAMON (CASSIA VERA)</option>
                    <option value="Nutmeg">NUTMEG</option>
                    <option value="Charcoal Briquettes">CHARCOAL BRIQUETTES</option>
                  </optgroup>
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="estimatedAnnualVolume"
                  className="font-['IBM_Plex_Mono'] text-xs font-semibold uppercase tracking-[0.1em] text-[var(--ink)]"
                >
                  ESTIMATED ANNUAL VOLUME
                </label>
                <input
                  type="text"
                  id="estimatedAnnualVolume"
                  name="estimatedAnnualVolume"
                  placeholder="e.g. 2 containers / year"
                  inputMode="text"
                  className={inputCls + " placeholder:text-[var(--ink)]/30 placeholder:font-['IBM_Plex_Mono']"}
                  style={inputStyle}
                />
              </div>
            </div>

            {/* Message */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="message"
                className="font-['IBM_Plex_Mono'] text-xs font-semibold uppercase tracking-[0.1em] text-[var(--ink)]"
              >
                MESSAGE
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className={inputCls + ' resize-y'}
                style={textareaStyle}
              />
            </div>

            {/* Submit */}
            <div className="mt-2 flex flex-col gap-4">
              <button
                type="submit"
                className="w-full flex items-center justify-center bg-[var(--stamp)] text-[var(--offwhite)] font-['Archivo'] font-black uppercase tracking-wide rounded-none active:translate-y-[1px] active:brightness-90 hover:opacity-90 transition-all"
                style={{ height: '52px', fontSize: '1rem' }}
              >
                SEND INQUIRY
              </button>

              <AnimatePresence>
                {status === 'success' && (
                  <motion.p
                    ref={successRef}
                    initial={{ opacity: 0, scale: 0.95, y: 6 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4, ease: 'easeOut' }}
                    className="text-[var(--ink)] font-semibold font-['IBM_Plex_Mono'] text-sm tracking-[0.05em] uppercase text-center"
                  >
                    ✓ THANK YOU. OUR EXPORT TEAM WILL REPLY WITHIN 24 HOURS.
                  </motion.p>
                )}
              </AnimatePresence>

              <a
                href="https://wa.me/6289510519278"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-full font-['IBM_Plex_Mono'] uppercase tracking-[0.05em] text-[var(--jute)] active:text-[var(--stamp)] hover:text-[var(--stamp)] transition-colors text-xs"
                style={{ minHeight: '44px' }}
              >
                OR CHAT DIRECTLY ON WHATSAPP
              </a>
            </div>

          </form>
        </motion.div>

      </div>
    </section>
  );
}
