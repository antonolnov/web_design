import FixedBackground from '@/components/ui/FixedBackground';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import FloatingCTA from '@/components/ui/FloatingCTA';

import HeroSimple from '@/components/sections/HeroSimple';
import SectionTitleScreen from '@/components/ui/SectionTitleScreen';
import AutomationTabs from '@/components/sections/AutomationTabs';
import AnalyticsTabs from '@/components/sections/AnalyticsTabs';
import IntegrationsTabs from '@/components/sections/IntegrationsTabs';
import PipelineTabs from '@/components/sections/PipelineTabs';
import EnterpriseTabs from '@/components/sections/EnterpriseTabs';
import SecurityTabs from '@/components/sections/SecurityTabs';
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

          {/* Automation Section */}
          <SectionTitleScreen 
            title="Автоматизация" 
            subtitle="Избавьтесь от рутины и сфокусируйтесь на главном"
            color="green"
          />
          <AutomationTabs />

          {/* Pipeline Section */}
          <SectionTitleScreen 
            title="Воронки подбора" 
            subtitle="Любое количество воронок под каждый тип найма"
            color="orange"
          />
          <PipelineTabs />

          {/* Analytics Section */}
          <SectionTitleScreen 
            title="Аналитика" 
            subtitle="Принимайте решения на основе данных"
            color="blue"
          />
          <AnalyticsTabs />

          {/* Integrations Section */}
          <SectionTitleScreen 
            title="Интеграции" 
            subtitle="Подключайте любые сервисы и источники"
            color="purple"
          />
          <IntegrationsTabs />

          {/* Enterprise Section */}
          <SectionTitleScreen 
            title="Enterprise" 
            subtitle="Для крупных компаний с особыми требованиями"
            color="purple"
          />
          <EnterpriseTabs />

          {/* Security Section */}
          <SectionTitleScreen 
            title="Безопасность" 
            subtitle="Защита данных на всех уровнях"
            color="blue"
          />
          <SecurityTabs />

          {/* CTA */}
          <CTASimple />
        </main>
        <Footer />
      </div>
      <FloatingCTA />
    </>
  );
}
