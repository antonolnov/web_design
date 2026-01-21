import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import FloatingCTA from '@/components/ui/FloatingCTA';
import Hero from '@/components/sections/Hero';
import Clients from '@/components/sections/Clients';
import Features from '@/components/sections/Features';
import Funnel from '@/components/sections/Funnel';
import AIFeatures from '@/components/sections/AIFeatures';
import Integrations from '@/components/sections/Integrations';
import Analytics from '@/components/sections/Analytics';
import Security from '@/components/sections/Security';
import Testimonials from '@/components/sections/Testimonials';
import Pricing from '@/components/sections/Pricing';
import CTA from '@/components/sections/CTA';

export default function Home() {
  return (
    <>
      <Header />
      <FloatingCTA />
      <main>
        <Hero />
        <Clients />
        <Features />
        <Funnel />
        <AIFeatures />
        <Integrations />
        <Analytics />
        <Security />
        <Testimonials />
        <Pricing />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
