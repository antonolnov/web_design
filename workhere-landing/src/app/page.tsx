import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import SmoothScroll from '@/components/ui/SmoothScroll';
import FloatingCTA from '@/components/ui/FloatingCTA';
import Hero from '@/components/sections/Hero';
import StatsBlob from '@/components/sections/StatsBlob';
import Features from '@/components/sections/Features';
import ProductShowcase from '@/components/sections/ProductShowcase';
import TabbedFeatures from '@/components/sections/TabbedFeatures';
import Pipeline from '@/components/sections/Pipeline';
import Analytics from '@/components/sections/Analytics';
import Enterprise from '@/components/sections/Enterprise';
import APISection from '@/components/sections/APISection';
import Security from '@/components/sections/Security';
import CTA from '@/components/sections/CTA';

export default function Home() {
  return (
    <SmoothScroll>
      <Header />
      <FloatingCTA />
      <main>
        <Hero />
        <StatsBlob />
        <Features />
        <ProductShowcase />
        <TabbedFeatures />
        <Pipeline />
        <Analytics />
        <Enterprise />
        <APISection />
        <Security />
        <CTA />
      </main>
      <Footer />
    </SmoothScroll>
  );
}
