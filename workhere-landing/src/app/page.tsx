import FixedBackground from '@/components/ui/FixedBackground';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import FloatingCTA from '@/components/ui/FloatingCTA';

import HeroSimple from '@/components/sections/HeroSimple';
import InterfaceShowcase from '@/components/sections/InterfaceShowcase';
import TrustedBy from '@/components/sections/TrustedBy';
import SectionTitleScreen from '@/components/ui/SectionTitleScreen';
import FeaturesPremium from '@/components/sections/FeaturesPremium';
import EnterpriseTabs from '@/components/sections/EnterpriseTabs';
import SecurityTabs from '@/components/sections/SecurityTabs';
import Testimonials from '@/components/sections/Testimonials';
import Journal from '@/components/sections/Journal';
import Webinars from '@/components/sections/Webinars';
import FAQ from '@/components/sections/FAQ';
import CTASimple from '@/components/sections/CTASimple';

export default function Home() {
  return (
    <>
      <FixedBackground />
      <div className="relative z-10">
        <Header />
        <main>
          {/* Hero */}
          <HeroSimple />

          {/* Interface Screenshot */}
          <InterfaceShowcase />

          {/* Trusted By */}
          <TrustedBy />

          {/* Features Section Title */}
          <SectionTitleScreen 
            title="Возможности" 
            subtitle="Всё для эффективного найма в одной системе"
            color="blue"
          />

          {/* Premium Features */}
          <FeaturesPremium />

          {/* Enterprise Section Title */}
          <SectionTitleScreen 
            title="Enterprise" 
            subtitle="Для крупных компаний с особыми требованиями"
            color="purple"
          />
          <EnterpriseTabs />

          {/* Security Section Title */}
          <SectionTitleScreen 
            title="Безопасность" 
            subtitle="Защита данных на всех уровнях"
            color="blue"
          />
          <SecurityTabs />

          {/* Testimonials */}
          <Testimonials />

          {/* Journal */}
          <Journal />

          {/* Webinars */}
          <Webinars />

          {/* FAQ */}
          <FAQ />

          {/* CTA */}
          <CTASimple />
        </main>
        <Footer />
      </div>
      <FloatingCTA />
    </>
  );
}
