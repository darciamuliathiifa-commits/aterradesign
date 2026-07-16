import React from 'react';
import { ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const coffeeCerts = [
  {
    name: "Certificate of Origin (COO)",
    desc: "Issued by the Indonesian Chamber of Commerce, verifying Indonesian origin for customs clearance."
  },
  {
    name: "ICO Certificate of Origin",
    desc: "International Coffee Organisation certificate confirming coffee grade and origin for regulated markets."
  },
  {
    name: "Phytosanitary Certificate",
    desc: "Government-issued health certificate confirming the shipment is free of pests and diseases."
  },
  {
    name: "Fumigation Certificate",
    desc: "Verification that the shipment has been treated to international fumigation standards."
  }
];

const briquetteCerts = [
  {
    name: "MSDS (Material Safety Data Sheet)",
    desc: "Safety data documentation for transportation and handling compliance worldwide."
  },
  {
    name: "Certificate of Analysis (COA)",
    desc: "Lab-certified quality analysis confirming composition, moisture content, and calorific value."
  },
  {
    name: "Fumigation Certificate",
    desc: "Treatment certificate confirming compliance with international phytosanitary import regulations."
  }
];

export function Certifications() {
  return (
    <section id="certifications" className="py-24 md:py-32 bg-[#1B3A2D]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-[#FAF8F3] text-4xl md:text-5xl font-bold mb-4">
            Certifications
          </h2>
          <p className="font-sans text-[#FAF8F3]/70 text-lg max-w-2xl mx-auto">
            Compliance and trust for every shipment.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 w-full">
          
          {/* Coffee Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            <h3 className="font-sans text-[#B4713D] text-sm font-bold tracking-widest uppercase mb-2 border-b border-[#B4713D]/20 pb-4">
              Coffee & Spice Export
            </h3>
            <div className="flex flex-col gap-6">
              {coffeeCerts.map((cert, index) => (
                <div key={index} className="flex items-start gap-4">
                  <ShieldCheck className="text-[#B4713D] shrink-0 mt-1" size={24} strokeWidth={1.5} />
                  <div>
                    <h4 className="font-sans text-[#FAF8F3] font-bold text-lg mb-1">
                      {cert.name}
                    </h4>
                    <p className="font-sans text-[#FAF8F3]/70 leading-relaxed text-sm md:text-base">
                      {cert.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Briquettes Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-6"
          >
            <h3 className="font-sans text-[#B4713D] text-sm font-bold tracking-widest uppercase mb-2 border-b border-[#B4713D]/20 pb-4">
              Charcoal Briquettes Export
            </h3>
            <div className="flex flex-col gap-6">
              {briquetteCerts.map((cert, index) => (
                <div key={index} className="flex items-start gap-4">
                  <ShieldCheck className="text-[#B4713D] shrink-0 mt-1" size={24} strokeWidth={1.5} />
                  <div>
                    <h4 className="font-sans text-[#FAF8F3] font-bold text-lg mb-1">
                      {cert.name}
                    </h4>
                    <p className="font-sans text-[#FAF8F3]/70 leading-relaxed text-sm md:text-base">
                      {cert.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
