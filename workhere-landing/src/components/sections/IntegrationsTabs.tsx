'use client';

import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import { Globe, MessageSquare, Database, Code2, Webhook, FileJson } from 'lucide-react';
import Container from '../ui/Container';
import ContentCard from '../ui/ContentCard';
import Mascot from '../ui/Mascot';

const tabs = [
  {
    id: 'collaboration',
    icon: Globe,
    title: 'Коллаборация',
    description: 'Командные сервисы',
    content: {
      heading: 'Свяжите командные инструменты',
      points: [
        'Slack — уведомления и каналы',
        'Microsoft Teams — обсуждения',
        'Jira — синхронизация задач',
        'Notion — единая база знаний',
      ],
      logos: ['Slack', 'Teams', 'Jira', 'Notion'],
    },
  },
  {
    id: 'messengers',
    icon: MessageSquare,
    title: 'Мессенджеры',
    description: 'Коммуникации с клиентами',
    content: {
      heading: 'Все каналы общения в одном месте',
      points: [
        'Telegram — поддержка и боты',
        'WhatsApp Business — диалоги',
        'Email — шаблоны и автоматизация',
        'SMS — уведомления о статусе',
      ],
      logos: ['Telegram', 'WhatsApp', 'Email', 'SMS'],
    },
  },
  {
    id: 'payments',
    icon: Database,
    title: 'Платежи',
    description: 'Биллинг и финансы',
    content: {
      heading: 'Платежные и финансовые сервисы',
      points: [
        'Stripe — подписки и инвойсы',
        'ЮKassa — платежи в РФ',
        'CloudPayments — карты и Apple Pay',
        'Webhook-и на статусы оплат',
      ],
      logos: ['Stripe', 'ЮKassa', 'CloudPayments', 'Webhook'],
    },
  },
  {
    id: 'api',
    icon: Code2,
    title: 'API',
    description: 'Для разработчиков',
    content: {
      heading: 'Полный контроль через API',
      points: [
        'REST API — полная документация',
        'Webhooks — события в реальном времени',
        'Sandbox — тестовая среда',
        'SDK — готовые библиотеки',
      ],
      logos: ['REST', 'Webhooks', 'GraphQL', 'SDK'],
    },
  },
];

export default function IntegrationsTabs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeTab, setActiveTab] = useState(0);
  const current = tabs[activeTab];

  return (
    <section id="integrations" className="py-20 px-4">
      <Container>
        <ContentCard variant="white">
          <div ref={ref}>
            {/* Tabs */}
            <div className="flex flex-wrap justify-center gap-2 mb-10">
              {tabs.map((tab, i) => (
                <motion.button
                  key={tab.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => setActiveTab(i)}
                  className={`flex items-center gap-2 px-5 py-3 rounded-xl font-medium transition-all ${
                    activeTab === i
                      ? 'bg-[#8b5cf6] text-white shadow-lg'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  <tab.icon size={18} />
                  <span>{tab.title}</span>
                </motion.button>
              ))}
            </div>

            {/* Tab content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="grid lg:grid-cols-2 gap-8"
              >
                {/* Left - Info */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-[#8b5cf6]/10 flex items-center justify-center">
                      <current.icon size={24} className="text-[#8b5cf6]" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{current.content.heading}</h3>
                    </div>
                  </div>

                  <div className="space-y-3 mb-6">
                    {current.content.points.map((point, i) => (
                      <motion.div
                        key={point}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-center gap-3"
                      >
                        <div className="w-2 h-2 rounded-full bg-[#8b5cf6]" />
                        <span className="text-gray-700">{point}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Right - Logos grid */}
                <div className="bg-gradient-to-br from-[#8b5cf6]/5 to-[#8b5cf6]/10 rounded-2xl p-6">
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    {current.content.logos.map((logo, i) => (
                      <motion.div
                        key={logo}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.1 }}
                        className="bg-white rounded-xl p-4 text-center shadow-sm"
                      >
                        <div className="text-lg font-semibold text-gray-700">{logo}</div>
                      </motion.div>
                    ))}
                  </div>
                  <div className="flex justify-center">
                    <Mascot size={100} variant="07" showSpeechBubble speechText="Всё подключено! 🔗" />
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </ContentCard>
      </Container>
    </section>
  );
}
