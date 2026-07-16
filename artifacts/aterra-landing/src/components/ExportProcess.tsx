import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    num: "1",
    title: "Lot Selection",
    desc: "Buyer receives cupping notes and a green sample. Approval triggers procurement from contracted cooperatives at the agreed price."
  },
  {
    num: "2",
    title: "Milling & Grading",
    desc: "Wet-hulled or washed processing at our certified dry mill in Medan. Screen 15+ grading and defect sorting to SCA standards."
  },
  {
    num: "3",
    title: "Documentation",
    desc: "Phytosanitary certificate, COO, ICO certificate, cupping report, and lot traceability issued per shipment."
  },
  {
    num: "4",
    title: "Shipment",
    desc: "FCL or LCL from Belawan or Tanjung Priok. GrainPro or jute bagging per buyer specification. Lead time 3–5 weeks."
  }
];

export function ExportProcess() {
  return (
    <section id="process" className="py-24 md:py-32 bg-[#F5EFE4] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="font-serif text-[#4A2C1A] text-4xl md:text-5xl font-bold mb-4">
            Export Process
          </h2>
          <p className="font-serif italic text-[#B4713D] text-xl md:text-2xl">
            Seamless from Farm to Port
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-[28px] left-[10%] right-[10%] h-[2px] bg-[#B4713D]/20 z-0"></div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div 
                key={step.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="flex flex-col items-center text-center lg:items-start lg:text-left relative"
              >
                {/* Connecting Line (Mobile) */}
                {index !== steps.length - 1 && (
                  <div className="lg:hidden absolute top-[56px] bottom-[-48px] left-[27px] w-[2px] bg-[#B4713D]/20 z-[-1]"></div>
                )}
                
                <div className="w-14 h-14 rounded-full bg-[#F5EFE4] border-2 border-[#B4713D] flex items-center justify-center mb-6 shrink-0 relative z-10 mx-auto lg:mx-0 shadow-[0_0_15px_rgba(180,113,61,0.2)]">
                  <span className="font-serif text-[#B4713D] text-2xl font-bold leading-none">
                    {step.num}
                  </span>
                </div>
                
                <h3 className="font-serif text-[#4A2C1A] text-2xl font-bold mb-3">
                  {step.title}
                </h3>
                
                <p className="font-sans text-[#22201C] text-lg leading-relaxed opacity-80 max-w-sm">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
