import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import FloatingCTA from '@/components/ui/FloatingCTA';

import HeroHuntflow from '@/components/sections/HeroHuntflow';
import ClientsHuntflow from '@/components/sections/ClientsHuntflow';
import AISection from '@/components/sections/AISection';
import FeaturesHuntflow from '@/components/sections/FeaturesHuntflow';
import TestimonialsHuntflow from '@/components/sections/TestimonialsHuntflow';
import CasesHuntflow from '@/components/sections/CasesHuntflow';
import EnterpriseHuntflow from '@/components/sections/EnterpriseHuntflow';
import APIHuntflow from '@/components/sections/APIHuntflow';
import SecurityHuntflow from '@/components/sections/SecurityHuntflow';
import CTAHuntflow from '@/components/sections/CTAHuntflow';
import JournalHuntflow from '@/components/sections/JournalHuntflow';

export default function Home() {
  return (
    <div className="bg-white">
      <Header />
      <main>
        {/* Hero with mascot and AI */}
        <HeroHuntflow />
        
        {/* Trusted by clients */}
        <ClientsHuntflow />
        
        {/* AI Section - pink background */}
        <AISection />
        
        {/* Features with tabs */}
        <FeaturesHuntflow />
        
        {/* Testimonials carousel */}
        <TestimonialsHuntflow />
        
        {/* Cases carousel */}
        <CasesHuntflow />
        
        {/* Enterprise - dark */}
        <EnterpriseHuntflow />
        
        {/* API - purple */}
        <APIHuntflow />
        
        {/* Security */}
        <SecurityHuntflow />
        
        {/* CTA with mascot */}
        <CTAHuntflow />
        
        {/* Journal - dark */}
        <JournalHuntflow />
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
}
