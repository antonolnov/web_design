'use client';

import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import { BarChart3, TrendingUp, PieChart, Calendar, Clock, Target, Users, Zap } from 'lucide-react';
import Container from '../ui/Container';
import ContentCard from '../ui/ContentCard';
import Mascot from '../ui/Mascot';

const tabs = [
  {
    id: 'dashboards',
    icon: BarChart3,
    title: 'Дашборды',
    description: 'Дашборды в реальном времени',
    content: {
      heading: 'Мониторинг всех ключевых метрик',
      points: [
        'Визуализация воронки подбора',
        'Метрики по источникам кандидатов',
        'Отслеживание KPI рекрутеров',
        'Настраиваемые виджеты',
      ],
      stats: [
        { label: 'Время закрытия', value: '12 дней', change: '-23%' },
        { label: 'Конверсия', value: '8.2%', change: '+2.1%' },
      ],
    },
  },
  {
    id: 'reports',
    icon: PieChart,
    title: 'Отчёты',
    description: 'Кастомные отчёты',
    content: {
      heading: 'Гибкая система отчётности',
      points: [
        'Конструктор отчётов',
        'Экспорт в Excel, PDF',
        'Автоматическая рассылка',
        'Интеграция с BI-системами',
      ],
      stats: [
        { label: 'Шаблонов', value: '50+', change: '' },
        { label: 'Форматов', value: '5', change: '' },
      ],
    },
  },
  {
    id: 'funnel',
    icon: TrendingUp,
    title: 'Воронка',
    description: 'Анализ конверсии',
    content: {
      heading: 'Детальный анализ воронки',
      points: [
        'Конверсия по этапам',
        'Время на каждом этапе',
        'Сравнение воронок',
        'Прогнозирование найма',
      ],
      stats: [
        { label: 'Этапов', value: '∞', change: '' },
        { label: 'Точность прогноза', value: '94%', change: '' },
      ],
    },
  },
  {
    id: 'team',
    icon: Users,
    title: 'Команда',
    description: 'Эффективность рекрутеров',
    content: {
      heading: 'Аналитика по команде',
      points: [
        'Рейтинг рекрутеров',
        'Нагрузка и capacity',
        'Качество найма',
        'Сравнение периодов',
      ],
      stats: [
        { label: 'Метрик', value: '20+', change: '' },
        { label: 'Рост эффективности', value: '+35%', change: '' },
      ],
    },
  },
];

export default function AnalyticsTabs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeTab, setActiveTab] = useState(0);
  const current = tabs[activeTab];

  return (
    <section id="analytics" className="py-20 px-4">
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
                      ? 'bg-[#1890ff] text-white shadow-lg'
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
                    <div className="w-12 h-12 rounded-xl bg-[#1890ff]/10 flex items-center justify-center">
                      <current.icon size={24} className="text-[#1890ff]" />
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
                        <div className="w-2 h-2 rounded-full bg-[#1890ff]" />
                        <span className="text-gray-700">{point}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4">
                    {current.content.stats.map((stat, i) => (
                      <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 + i * 0.1 }}
                        className="bg-gray-50 rounded-xl p-4"
                      >
                        <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                        <div className="text-sm text-gray-500">{stat.label}</div>
                        {stat.change && (
                          <div className={`text-sm font-medium ${stat.change.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
                            {stat.change}
                          </div>
                        )}
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Right - Visual */}
                <div className="bg-gradient-to-br from-[#1890ff]/5 to-[#1890ff]/10 rounded-2xl p-6 flex flex-col items-center justify-center">
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: 'spring', stiffness: 200 }}
                    className="text-center"
                  >
                    <current.icon size={60} className="text-[#1890ff]/30 mx-auto mb-4" />
                    <p className="text-gray-500 mb-4">{current.description}</p>
                  </motion.div>
                  <Mascot size={120} variant="03" showSpeechBubble speechText="Отличные метрики! 📊" />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </ContentCard>
      </Container>
    </section>
  );
}
