import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import SmoothScroll from '@/components/ui/SmoothScroll';
import FloatingCTA from '@/components/ui/FloatingCTA';
import Hero from '@/components/sections/Hero';
import Features from '@/components/sections/Features';
import Pipeline from '@/components/sections/Pipeline';
import Integrations from '@/components/sections/Integrations';
import Analytics from '@/components/sections/Analytics';
import Security from '@/components/sections/Security';
import CTA from '@/components/sections/CTA';

export default function Home() {
  return (
    <SmoothScroll>
      <Header />
      <FloatingCTA />
      <main>
        <Hero />
        <Features />
        <Pipeline />
        <Analytics />
        <Integrations />
        <Security />
        <CTA />
      </main>
      <Footer />
    </SmoothScroll>
  );
}
