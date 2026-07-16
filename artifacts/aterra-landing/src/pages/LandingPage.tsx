import { Navbar }          from '@/components/Navbar';
import { Hero }            from '@/components/Hero';
import { AboutUs }         from '@/components/AboutUs';
import { OurServices }     from '@/components/OurServices';
import { CoreCommodities } from '@/components/CoreCommodities';
import { OriginCoffees }   from '@/components/OriginCoffees';
import { ExportProcess }   from '@/components/ExportProcess';
import { Certifications }  from '@/components/Certifications';
import { ExportInquiry }   from '@/components/ExportInquiry';
import { Footer }          from '@/components/Footer';
import { StickyBottomBar } from '@/components/StickyBottomBar';

export default function LandingPage() {
  return (
    <div className="w-full relative min-h-[100dvh] flex flex-col">

      {/* Subtle logo watermark — sits behind all content */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0 flex items-center justify-center overflow-hidden"
      >
        <img
          src="/logo-dark.png"
          alt=""
          className="w-[520px] max-w-[70vw] select-none"
          style={{ opacity: 0.04 }}
          draggable={false}
        />
      </div>

      <Navbar />
      <Hero />
      <AboutUs />
      <OurServices />
      <CoreCommodities />
      <OriginCoffees />
      <ExportProcess />
      <Certifications />
      <ExportInquiry />
      <Footer />
      <StickyBottomBar />
    </div>
  );
}
