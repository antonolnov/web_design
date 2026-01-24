'use client';

import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import { Zap, Mail, FileText, Bot, Workflow, Calendar, CheckCircle, Send } from 'lucide-react';
import Container from '../ui/Container';
import ContentCard from '../ui/ContentCard';
import Mascot from '../ui/Mascot';

const tabs = [
  {
    id: 'workflows',
    icon: Workflow,
    title: 'Воркфлоу',
    description: 'Автоматические сценарии',
    content: {
      heading: 'Автоматизируйте повторяющиеся задачи',
      points: [
        'Сценарии на события и расписания',
        'Автоназначение задач и SLA',
        'Условные переходы и ветвления',
        'Уведомления команде и клиентам',
      ],
    },
  },
  {
    id: 'emails',
    icon: Mail,
    title: 'Коммуникации',
    description: 'Шаблоны и рассылки',
    content: {
      heading: 'Единые коммуникации с клиентами',
      points: [
        'Библиотека шаблонов',
        'Персонализация сообщений',
        'Автоматические цепочки',
        'Отслеживание открытий и кликов',
      ],
    },
  },
  {
    id: 'parsing',
    icon: FileText,
    title: 'Импорт',
    description: 'Обработка данных',
    content: {
      heading: 'Чистые данные без ручной рутины',
      points: [
        'CSV/Excel/JSON импорты',
        'Сопоставление полей',
        'Дедупликация записей',
        'Валидация и контроль качества',
      ],
    },
  },
  {
    id: 'ai',
    icon: Bot,
    title: 'AI',
    description: 'Искусственный интеллект',
    content: {
      heading: 'AI-помощник для команды',
      points: [
        'Сводки по задачам и проектам',
        'Рекомендации по приоритетам',
        'Генерация отчётов',
        'Автоответы и подсказки',
      ],
    },
  },
];

export default function AutomationTabs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeTab, setActiveTab] = useState(0);
  const current = tabs[activeTab];

  return (
    <section id="automation" className="py-20 px-4">
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
                      ? 'bg-[#22c55e] text-white shadow-lg'
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
                    <div className="w-12 h-12 rounded-xl bg-[#22c55e]/10 flex items-center justify-center">
                      <current.icon size={24} className="text-[#22c55e]" />
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
                        <CheckCircle size={18} className="text-[#22c55e]" />
                        <span className="text-gray-700">{point}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Right - Visual */}
                <div className="bg-gradient-to-br from-[#22c55e]/5 to-[#22c55e]/10 rounded-2xl p-6 flex flex-col items-center justify-center">
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: 'spring', stiffness: 200 }}
                    className="text-center mb-4"
                  >
                    <div className="relative">
                      <current.icon size={60} className="text-[#22c55e]/30 mx-auto" />
                      <motion.div
                        className="absolute inset-0 flex items-center justify-center"
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <Zap size={30} className="text-[#22c55e]" />
                      </motion.div>
                    </div>
                    <p className="text-gray-500 mt-2">{current.description}</p>
                  </motion.div>
                  <Mascot size={110} variant="02" showSpeechBubble speechText="Автоматизируем! ⚡" />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </ContentCard>
      </Container>
    </section>
  );
}
