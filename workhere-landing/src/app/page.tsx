import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import FloatingCTA from '@/components/ui/FloatingCTA';
import SectionDivider from '@/components/ui/SectionDivider';
import Hero from '@/components/sections/Hero';
import StatsBlob from '@/components/sections/StatsBlob';
import Features from '@/components/sections/Features';
import ProductShowcase from '@/components/sections/ProductShowcase';
import Pipeline from '@/components/sections/Pipeline';
import API from '@/components/sections/API';
import Enterprise from '@/components/sections/Enterprise';
import Security from '@/components/sections/Security';
import CTA from '@/components/sections/CTA';

export default function Home() {
  return (
    <>
      <Header />
      <FloatingCTA />
      <main>
        <Hero />
        <StatsBlob />
        <ProductShowcase />
        <SectionDivider showMascot />
        <Features />
        <Pipeline />
        <API />
        <SectionDivider showMascot />
        <Enterprise />
        <Security />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
