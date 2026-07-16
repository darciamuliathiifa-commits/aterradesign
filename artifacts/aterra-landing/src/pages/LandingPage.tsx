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
