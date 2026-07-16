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
    <section id="inquiry" className="py-24 md:py-32 bg-[#F5EFE4]">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-[#4A2C1A] text-4xl md:text-5xl font-bold mb-4">
            Export Inquiry
          </h2>
          <p className="font-sans text-[#22201C]/70 text-lg">
            Tell us what you need — our export team replies within 24 hours.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white p-8 md:p-12 rounded-xl shadow-2xl shadow-[#4A2C1A]/10 border border-[#4A2C1A]/5"
        >
          <form onSubmit={submitInquiry} className="flex flex-col gap-6">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="fullName" className="font-sans text-sm font-semibold text-[#22201C]">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input 
                  type="text" 
                  id="fullName" 
                  name="fullName" 
                  required
                  className="px-4 py-3 rounded-md border border-[#4A2C1A]/20 bg-[#F5EFE4]/50 focus:outline-none focus:ring-2 focus:ring-[#B4713D]/50 focus:border-[#B4713D] transition-all font-sans"
                />
              </div>
              
              <div className="flex flex-col gap-2">
                <label htmlFor="companyName" className="font-sans text-sm font-semibold text-[#22201C]">
                  Company Name
                </label>
                <input 
                  type="text" 
                  id="companyName" 
                  name="companyName" 
                  className="px-4 py-3 rounded-md border border-[#4A2C1A]/20 bg-[#F5EFE4]/50 focus:outline-none focus:ring-2 focus:ring-[#B4713D]/50 focus:border-[#B4713D] transition-all font-sans"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="font-sans text-sm font-semibold text-[#22201C]">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  required
                  className="px-4 py-3 rounded-md border border-[#4A2C1A]/20 bg-[#F5EFE4]/50 focus:outline-none focus:ring-2 focus:ring-[#B4713D]/50 focus:border-[#B4713D] transition-all font-sans"
                />
              </div>
              
              <div className="flex flex-col gap-2">
                <label htmlFor="country" className="font-sans text-sm font-semibold text-[#22201C]">
                  Country
                </label>
                <input 
                  type="text" 
                  id="country" 
                  name="country" 
                  className="px-4 py-3 rounded-md border border-[#4A2C1A]/20 bg-[#F5EFE4]/50 focus:outline-none focus:ring-2 focus:ring-[#B4713D]/50 focus:border-[#B4713D] transition-all font-sans"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="originOfInterest" className="font-sans text-sm font-semibold text-[#22201C]">
                  Origin of Interest
                </label>
                <select 
                  id="originOfInterest" 
                  name="originOfInterest"
                  className="px-4 py-3 rounded-md border border-[#4A2C1A]/20 bg-[#F5EFE4]/50 focus:outline-none focus:ring-2 focus:ring-[#B4713D]/50 focus:border-[#B4713D] transition-all font-sans appearance-none"
                >
                  <option value="">Select a commodity or origin...</option>
                  <optgroup label="Coffee Origins">
                    <option value="Kintamani Bali">Kintamani Bali</option>
                    <option value="Jember">Jember</option>
                    <option value="Ijen">Ijen</option>
                    <option value="Java Preanger">Java Preanger</option>
                    <option value="Lampung">Lampung</option>
                    <option value="Kerinci">Kerinci</option>
                    <option value="Palembang">Palembang</option>
                  </optgroup>
                  <optgroup label="Spices & Fuel">
                    <option value="Cinnamon (Cassia Vera)">Cinnamon (Cassia Vera)</option>
                    <option value="Nutmeg">Nutmeg</option>
                    <option value="Charcoal Briquettes">Charcoal Briquettes</option>
                  </optgroup>
                </select>
              </div>
              
              <div className="flex flex-col gap-2">
                <label htmlFor="estimatedAnnualVolume" className="font-sans text-sm font-semibold text-[#22201C]">
                  Estimated Annual Volume
                </label>
                <input 
                  type="text" 
                  id="estimatedAnnualVolume" 
                  name="estimatedAnnualVolume" 
                  placeholder="e.g. 20 MT/year"
                  className="px-4 py-3 rounded-md border border-[#4A2C1A]/20 bg-[#F5EFE4]/50 focus:outline-none focus:ring-2 focus:ring-[#B4713D]/50 focus:border-[#B4713D] transition-all font-sans placeholder:text-[#22201C]/30"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="font-sans text-sm font-semibold text-[#22201C]">
                Message
              </label>
              <textarea 
                id="message" 
                name="message" 
                rows={4}
                className="px-4 py-3 rounded-md border border-[#4A2C1A]/20 bg-[#F5EFE4]/50 focus:outline-none focus:ring-2 focus:ring-[#B4713D]/50 focus:border-[#B4713D] transition-all font-sans resize-y"
              ></textarea>
            </div>

            <div className="mt-4 flex flex-col items-center gap-4">
              <button 
                type="submit"
                className="w-full md:w-auto px-10 py-4 bg-[#B4713D] text-[#FAF8F3] font-bold rounded-md hover:bg-[#9a5e30] transition-colors font-sans text-lg"
              >
                Send Inquiry
              </button>
              
              {status === 'success' && (
                <p className="text-[#1B3A2D] font-medium font-sans animate-in fade-in zoom-in duration-300">
                  Thank you — our export team will reply within 24 hours.
                </p>
              )}
              
              <a 
                href="https://wa.me/6289510519278" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm font-sans text-[#4A2C1A]/60 hover:text-[#B4713D] transition-colors mt-2"
              >
                Or chat directly on WhatsApp
              </a>
            </div>

          </form>
        </motion.div>

      </div>
    </section>
  );
}
