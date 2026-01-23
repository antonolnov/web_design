import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import FloatingCTA from '@/components/ui/FloatingCTA';
import FixedBackground from '@/components/ui/FixedBackground';

// New sections with card design
import HeroNew from '@/components/sections/HeroNew';
import StatsSection from '@/components/sections/StatsSection';
import FeaturesSection from '@/components/sections/FeaturesSection';
import PipelineSection from '@/components/sections/PipelineSection';
import AnalyticsSection from '@/components/sections/AnalyticsSection';
import IntegrationSection from '@/components/sections/IntegrationSection';
import EnterpriseSection from '@/components/sections/EnterpriseSection';
import SecuritySection from '@/components/sections/SecuritySection';
import CTASection from '@/components/sections/CTASection';

export default function Home() {
  return (
    <>
      {/* Fixed background that stays in place */}
      <FixedBackground />
      
      {/* Header - fixed on top */}
      <Header />
      
      {/* Floating CTA button */}
      <FloatingCTA />
      
      {/* Scrolling content */}
      <main className="relative z-10">
        <HeroNew />
        <StatsSection />
        <FeaturesSection />
        <PipelineSection />
        <AnalyticsSection />
        <IntegrationSection />
        <EnterpriseSection />
        <SecuritySection />
        <CTASection />
      </main>
      
      <Footer />
    </>
  );
}
