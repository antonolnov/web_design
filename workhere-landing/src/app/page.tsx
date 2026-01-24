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
            title="Автоматизация процессов" 
            subtitle="Сценарии, уведомления и AI‑помощники для ежедневных задач"
            color="green"
          />
          <AutomationTabs />

          {/* Pipeline Section */}
          <SectionTitleScreen 
            title="Гибкие рабочие потоки" 
            subtitle="Проектируйте процессы под команды, клиентов и продукты"
            color="orange"
          />
          <PipelineTabs />

          {/* Analytics Section */}
          <SectionTitleScreen 
            title="Аналитика" 
            subtitle="Единая картина по показателям и эффективности команд"
            color="blue"
          />
          <AnalyticsTabs />

          {/* Integrations Section */}
          <SectionTitleScreen 
            title="Интеграции и API" 
            subtitle="Подключайте любимые сервисы и данные"
            color="purple"
          />
          <IntegrationsTabs />

          {/* Enterprise Section */}
          <SectionTitleScreen 
            title="Enterprise" 
            subtitle="Масштаб, SLA и поддержка для крупных команд"
            color="purple"
          />
          <EnterpriseTabs />

          {/* Security Section */}
          <SectionTitleScreen 
            title="Безопасность" 
            subtitle="Полный контроль доступа и защита данных"
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
