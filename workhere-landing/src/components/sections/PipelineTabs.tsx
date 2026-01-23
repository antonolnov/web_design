'use client';

import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import { GitBranch, Users, Briefcase, Target, Layers, Clock, BarChart } from 'lucide-react';
import Container from '../ui/Container';
import ContentCard from '../ui/ContentCard';

const tabs = [
  {
    id: 'custom',
    icon: GitBranch,
    title: 'Кастомные воронки',
    description: 'Любое количество воронок',
    content: {
      heading: 'Бесконечное количество воронок',
      points: [
        'Создавайте воронки под каждый тип найма',
        'Настраивайте этапы и переходы',
        'Дублируйте успешные шаблоны',
        'Архивируйте неактивные',
      ],
      visual: 'funnels',
    },
  },
  {
    id: 'mass',
    icon: Users,
    title: 'Массовый найм',
    description: 'Для большого потока',
    content: {
      heading: 'Воронка для массового найма',
      points: [
        'Упрощённые этапы для скорости',
        'Автоматический скрининг',
        'Групповые интервью',
        'Быстрый оффер',
      ],
      visual: 'mass',
    },
  },
  {
    id: 'executive',
    icon: Briefcase,
    title: 'Точечный найм',
    description: 'Для топ-позиций',
    content: {
      heading: 'Воронка для ключевых позиций',
      points: [
        'Многоуровневый отбор',
        'Глубокая оценка компетенций',
        'Согласование с руководством',
        'Расширенная проверка',
      ],
      visual: 'executive',
    },
  },
  {
    id: 'stats',
    icon: BarChart,
    title: 'Статистика',
    description: 'Аналитика по воронкам',
    content: {
      heading: 'Статистика по каждой воронке',
      points: [
        'Конверсия на каждом этапе',
        'Среднее время в этапе',
        'Сравнение эффективности',
        'Узкие места процесса',
      ],
      visual: 'stats',
    },
  },
];

const funnelVisuals = {
  funnels: (
    <div className="flex gap-4 items-end">
      {[1, 2, 3].map((i) => (
        <motion.div
          key={i}
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ delay: i * 0.2, type: 'spring' }}
          className="origin-bottom"
        >
          <div className={`w-16 bg-gradient-to-b from-[#f97316] to-[#ea580c] rounded-t-lg`} 
               style={{ height: `${80 + i * 30}px` }}>
            <div className="text-center py-2 text-white text-xs font-medium">
              #{i}
            </div>
          </div>
        </motion.div>
      ))}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="text-[#f97316] font-bold text-2xl ml-2"
      >
        ∞
      </motion.div>
    </div>
  ),
  mass: (
    <div className="space-y-2">
      {['Отклик', 'Скрининг', 'Интервью', 'Оффер'].map((stage, i) => (
        <motion.div
          key={stage}
          initial={{ width: 0 }}
          animate={{ width: `${100 - i * 20}%` }}
          transition={{ delay: i * 0.15, type: 'spring' }}
          className="h-10 bg-gradient-to-r from-[#f97316] to-[#fb923c] rounded-lg flex items-center px-3"
        >
          <span className="text-white text-sm font-medium">{stage}</span>
        </motion.div>
      ))}
    </div>
  ),
  executive: (
    <div className="space-y-2">
      {['Поиск', 'Первичный отбор', 'Глубокое интервью', 'Кейс', 'Руководство', 'Оффер'].map((stage, i) => (
        <motion.div
          key={stage}
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: i * 0.1 }}
          className="flex items-center gap-2"
        >
          <div className="w-8 h-8 rounded-full bg-[#f97316] flex items-center justify-center text-white text-sm font-bold">
            {i + 1}
          </div>
          <span className="text-gray-700 text-sm">{stage}</span>
        </motion.div>
      ))}
    </div>
  ),
  stats: (
    <div className="grid grid-cols-2 gap-3">
      {[
        { label: 'Конверсия', value: '12%' },
        { label: 'Время найма', value: '14 дн' },
        { label: 'Кандидатов', value: '234' },
        { label: 'Офферов', value: '28' },
      ].map((stat, i) => (
        <motion.div
          key={stat.label}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: i * 0.1 }}
          className="bg-white rounded-lg p-3 text-center shadow-sm"
        >
          <div className="text-xl font-bold text-[#f97316]">{stat.value}</div>
          <div className="text-xs text-gray-500">{stat.label}</div>
        </motion.div>
      ))}
    </div>
  ),
};

export default function PipelineTabs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeTab, setActiveTab] = useState(0);
  const current = tabs[activeTab];

  return (
    <section id="pipeline" className="py-20 px-4">
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
                      ? 'bg-[#f97316] text-white shadow-lg'
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
                    <div className="w-12 h-12 rounded-xl bg-[#f97316]/10 flex items-center justify-center">
                      <current.icon size={24} className="text-[#f97316]" />
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
                        <div className="w-2 h-2 rounded-full bg-[#f97316]" />
                        <span className="text-gray-700">{point}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Right - Visual */}
                <div className="bg-gradient-to-br from-[#f97316]/5 to-[#f97316]/10 rounded-2xl p-6 flex items-center justify-center min-h-[250px]">
                  {funnelVisuals[current.content.visual as keyof typeof funnelVisuals]}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </ContentCard>
      </Container>
    </section>
  );
}
