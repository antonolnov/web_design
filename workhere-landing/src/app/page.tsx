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
        {/* Плавный переход из светлого в тёмный */}
        <SectionTransition from="light" to="dark" height={180} />
        <Features />
        <Pipeline />
        {/* Переход между тёмными секциями */}
        <SectionTransition from="dark" to="dark" height={100} />
        <API />
        {/* Переход между тёмными секциями */}
        <SectionTransition from="dark" to="dark" height={100} />
        <Enterprise />
        {/* Плавный переход из тёмного в светлый */}
        <SectionTransition from="dark" to="light" height={180} />
        <Security />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
