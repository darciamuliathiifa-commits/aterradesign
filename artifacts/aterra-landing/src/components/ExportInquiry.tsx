import React, { useState } from 'react';
import { motion } from 'framer-motion';

export function ExportInquiry() {
  const [status, setStatus] = useState<'idle' | 'success'>('idle');

  const submitInquiry = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const formData = new FormData(e.currentTarget);
    const data = {
      fullName: formData.get('fullName')?.toString() || '',
      companyName: formData.get('companyName')?.toString() || '',
      email: formData.get('email')?.toString() || '',
      country: formData.get('country')?.toString() || '',
      originOfInterest: formData.get('originOfInterest')?.toString() || '',
      estimatedAnnualVolume: formData.get('estimatedAnnualVolume')?.toString() || '',
      message: formData.get('message')?.toString() || '',
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
  };

  return (
    <section id="inquiry" className="py-24 md:py-32 paper-texture border-t border-dashed border-[var(--jute)]">
      <div className="max-w-4xl mx-auto px-6 md:px-12 flex flex-col">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 flex flex-col gap-6"
        >
          <div className="flex items-center gap-4">
            <span className="font-['IBM_Plex_Mono'] text-[var(--jute)] uppercase tracking-[0.1em] text-sm font-semibold">DOC 07 / EXPORT INQUIRY</span>
            <div className="flex-1 h-[1px] bg-[var(--jute)]"></div>
          </div>
          <div>
            <h2 className="font-['Archivo'] font-black uppercase text-[var(--ink)] text-4xl md:text-5xl tracking-[-0.02em] leading-[1.05] mb-2">
              EXPORT INQUIRY
            </h2>
            <p className="font-['IBM_Plex_Mono'] text-[var(--ink)]/70 text-sm uppercase tracking-[0.05em]">
              Tell us what you need — our export team replies within 24 hours.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-[var(--paper)] p-8 md:p-12 rounded-none border border-[var(--ink)]"
        >
          <form onSubmit={submitInquiry} className="flex flex-col gap-8">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col gap-3">
                <label htmlFor="fullName" className="font-['IBM_Plex_Mono'] text-xs font-semibold uppercase tracking-[0.1em] text-[var(--ink)]">
                  FULL NAME *
                </label>
                <input 
                  type="text" 
                  id="fullName" 
                  name="fullName" 
                  required
                  className="px-4 py-3 rounded-none border border-[var(--ink)] bg-[var(--paper)] focus:outline-none focus:border-[var(--stamp)] transition-colors font-['Archivo'] text-[var(--ink)]"
                />
              </div>
              
              <div className="flex flex-col gap-3">
                <label htmlFor="companyName" className="font-['IBM_Plex_Mono'] text-xs font-semibold uppercase tracking-[0.1em] text-[var(--ink)]">
                  COMPANY NAME
                </label>
                <input 
                  type="text" 
                  id="companyName" 
                  name="companyName" 
                  className="px-4 py-3 rounded-none border border-[var(--ink)] bg-[var(--paper)] focus:outline-none focus:border-[var(--stamp)] transition-colors font-['Archivo'] text-[var(--ink)]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col gap-3">
                <label htmlFor="email" className="font-['IBM_Plex_Mono'] text-xs font-semibold uppercase tracking-[0.1em] text-[var(--ink)]">
                  EMAIL ADDRESS *
                </label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  required
                  className="px-4 py-3 rounded-none border border-[var(--ink)] bg-[var(--paper)] focus:outline-none focus:border-[var(--stamp)] transition-colors font-['Archivo'] text-[var(--ink)]"
                />
              </div>
              
              <div className="flex flex-col gap-3">
                <label htmlFor="country" className="font-['IBM_Plex_Mono'] text-xs font-semibold uppercase tracking-[0.1em] text-[var(--ink)]">
                  COUNTRY
                </label>
                <input 
                  type="text" 
                  id="country" 
                  name="country" 
                  className="px-4 py-3 rounded-none border border-[var(--ink)] bg-[var(--paper)] focus:outline-none focus:border-[var(--stamp)] transition-colors font-['Archivo'] text-[var(--ink)]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col gap-3">
                <label htmlFor="originOfInterest" className="font-['IBM_Plex_Mono'] text-xs font-semibold uppercase tracking-[0.1em] text-[var(--ink)]">
                  ORIGIN OF INTEREST
                </label>
                <select 
                  id="originOfInterest" 
                  name="originOfInterest"
                  className="px-4 py-3 rounded-none border border-[var(--ink)] bg-[var(--paper)] focus:outline-none focus:border-[var(--stamp)] transition-colors font-['Archivo'] text-[var(--ink)] appearance-none"
                >
                  <option value="">SELECT A COMMODITY...</option>
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
              
              <div className="flex flex-col gap-3">
                <label htmlFor="estimatedAnnualVolume" className="font-['IBM_Plex_Mono'] text-xs font-semibold uppercase tracking-[0.1em] text-[var(--ink)]">
                  ESTIMATED ANNUAL VOLUME
                </label>
                <input 
                  type="text" 
                  id="estimatedAnnualVolume" 
                  name="estimatedAnnualVolume" 
                  placeholder="e.g. 20 MT/year"
                  className="px-4 py-3 rounded-none border border-[var(--ink)] bg-[var(--paper)] focus:outline-none focus:border-[var(--stamp)] transition-colors font-['Archivo'] text-[var(--ink)] placeholder:text-[var(--ink)]/30 placeholder:font-['IBM_Plex_Mono']"
                />
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <label htmlFor="message" className="font-['IBM_Plex_Mono'] text-xs font-semibold uppercase tracking-[0.1em] text-[var(--ink)]">
                MESSAGE
              </label>
              <textarea 
                id="message" 
                name="message" 
                rows={4}
                className="px-4 py-3 rounded-none border border-[var(--ink)] bg-[var(--paper)] focus:outline-none focus:border-[var(--stamp)] transition-colors font-['Archivo'] text-[var(--ink)] resize-y"
              ></textarea>
            </div>

            <div className="mt-4 flex flex-col items-center gap-4">
              <button 
                type="submit"
                className="w-full md:w-auto px-12 py-4 bg-[var(--stamp)] text-[var(--offwhite)] font-['Archivo'] font-black uppercase tracking-wide rounded-none hover:opacity-90 transition-opacity text-base"
              >
                SEND INQUIRY
              </button>
              
              {status === 'success' && (
                <p className="text-[var(--ink)] font-semibold font-['IBM_Plex_Mono'] text-sm tracking-[0.05em] uppercase mt-2">
                  THANK YOU — OUR EXPORT TEAM WILL REPLY WITHIN 24 HOURS.
                </p>
              )}
              
              <a 
                href="https://wa.me/6289510519278" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-xs font-['IBM_Plex_Mono'] uppercase tracking-[0.05em] text-[var(--jute)] hover:text-[var(--stamp)] transition-colors mt-2"
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
