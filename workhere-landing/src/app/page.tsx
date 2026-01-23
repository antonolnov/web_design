import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import FloatingCTA from '@/components/ui/FloatingCTA';
import SectionTransition from '@/components/ui/SectionTransition';
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
        <SectionTransition from="light" to="dark" />
        <Features />
        <Pipeline />
        <SectionTransition from="dark" to="dark" height={80} />
        <API />
        <SectionTransition from="dark" to="dark" height={80} />
        <Enterprise />
        <SectionTransition from="dark" to="light" />
        <Security />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
