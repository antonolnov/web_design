import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import FloatingCTA from '@/components/ui/FloatingCTA';

import Hero from '@/components/huntflow/Hero';
import Clients from '@/components/huntflow/Clients';
import Features from '@/components/huntflow/Features';
import Product from '@/components/huntflow/Product';
import Testimonials from '@/components/huntflow/Testimonials';
import Security from '@/components/huntflow/Security';
import FAQ from '@/components/huntflow/FAQ';
import CTA from '@/components/huntflow/CTA';

export default function Home() {
  return (
    <div className="bg-white">
      <Header />
      <main>
        <Hero />
        <Clients />
        <Features />
        <Product />
        <Testimonials />
        <Security />
        <FAQ />
        <CTA />
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
}
