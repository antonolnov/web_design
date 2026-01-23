'use client';

import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import { Users, Clock, Target, Layers, Zap, Building2, UserCheck, ChevronRight, TrendingUp, ArrowDown } from 'lucide-react';
import Container from '../ui/Container';
import ContentCard from '../ui/ContentCard';
import Mascot from '../ui/Mascot';

const funnels = [
  {
    id: 'mass',
    name: 'Массовый найм',
    icon: Users,
    description: 'Для розницы и колл-центров',
    stages: [
      { name: 'Отклики', count: 2847 },
      { name: 'Прескрин', count: 1923 },
      { name: 'Тест', count: 856 },
      { name: 'Собеседование', count: 412 },
      { name: 'Оффер', count: 187 },
    ],
    stats: { conversion: '6.6%', avgTime: '5 дней', hired: 187 },
  },
  {
    id: 'it',
    name: 'IT-специалисты',
    icon: Zap,
    description: 'Разработчики, аналитики',
    stages: [
      { name: 'Сорсинг', count: 245 },
      { name: 'Скрининг', count: 156 },
      { name: 'HR-интервью', count: 89 },
      { name: 'Техническое', count: 45 },
      { name: 'Финал', count: 23 },
      { name: 'Оффер', count: 12 },
    ],
    stats: { conversion: '4.9%', avgTime: '18 дней', hired: 12 },
  },
  {
    id: 'exec',
    name: 'Топ-менеджмент',
    icon: Building2,
    description: 'C-level, директора',
    stages: [
      { name: 'Поиск', count: 48 },
      { name: 'Контакт', count: 32 },
      { name: 'HR-встреча', count: 18 },
      { name: 'CEO', count: 8 },
      { name: 'Переговоры', count: 4 },
      { name: 'Оффер', count: 2 },
    ],
    stats: { conversion: '4.2%', avgTime: '45 дней', hired: 2 },
  },
];

const features = [
  { icon: Layers, title: 'Бесконечное количество воронок', description: 'Уникальные воронки для каждого типа вакансий' },
  { icon: Target, title: 'Аналитика по каждой воронке', description: 'Конверсия, время на этапах в реальном времени' },
  { icon: UserCheck, title: 'Кадровый резерв', description: 'Сохраняйте кандидатов на будущее' },
  { icon: Clock, title: 'Время на этапах', description: 'Выявляйте узкие места в процессе' },
];

export default function PipelineSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeFunnel, setActiveFunnel] = useState(0);
  const currentFunnel = funnels[activeFunnel];
  const maxCount = currentFunnel.stages[0].count;

  return (
    <section id="funnel" className="py-16 px-4">
      <Container>
        <ContentCard variant="dark">
          <div ref={ref}>
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              className="text-center mb-10"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 mb-4 text-sm font-medium text-[#1890ff] bg-[#1890ff]/10 border border-[#1890ff]/20 rounded-full">
                <TrendingUp size={14} />
                Воронки подбора
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
                Любое количество <span className="text-[#1890ff]">воронок</span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Создавайте уникальные воронки для массового, точечного и executive-найма
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Left - Funnel selector & visualization */}
              <div>
                {/* Funnel tabs */}
                <div className="flex gap-2 mb-6 flex-wrap">
                  {funnels.map((funnel, i) => (
                    <motion.button
                      key={funnel.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: i * 0.1 }}
                      onClick={() => setActiveFunnel(i)}
                      className={`flex items-center gap-2 px-4 py-2 rounded-xl font-medium transition-all ${
                        activeFunnel === i
                          ? 'bg-[#1890ff] text-white'
                          : 'bg-white/10 text-gray-300 hover:bg-white/20'
                      }`}
                    >
                      <funnel.icon size={16} />
                      {funnel.name}
                    </motion.button>
                  ))}
                </div>

                {/* Funnel visualization */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentFunnel.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    className="bg-white/5 rounded-2xl p-6 border border-white/10"
                  >
                    <div className="space-y-3">
                      {currentFunnel.stages.map((stage, i) => (
                        <motion.div
                          key={stage.name}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.05 }}
                          className="relative"
                        >
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-gray-300 text-sm">{stage.name}</span>
                            <span className="text-white font-bold">{stage.count}</span>
                          </div>
                          <div className="h-8 bg-white/10 rounded-lg overflow-hidden">
                            <motion.div
                              className="h-full bg-gradient-to-r from-[#1890ff] to-[#40a9ff] rounded-lg"
                              initial={{ width: 0 }}
                              animate={{ width: `${(stage.count / maxCount) * 100}%` }}
                              transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                            />
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    {/* Stats row */}
                    <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-white/10">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-[#1890ff]">{currentFunnel.stats.conversion}</div>
                        <div className="text-xs text-gray-400">Конверсия</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-white">{currentFunnel.stats.avgTime}</div>
                        <div className="text-xs text-gray-400">Среднее время</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-green-400">{currentFunnel.stats.hired}</div>
                        <div className="text-xs text-gray-400">Нанято</div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Right - Features */}
              <div className="space-y-4">
                {features.map((feature, i) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.2 + i * 0.1 }}
                    className="flex items-start gap-4 p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-lg bg-[#1890ff]/20 flex items-center justify-center flex-shrink-0">
                      <feature.icon size={20} className="text-[#1890ff]" />
                    </div>
                    <div>
                      <div className="font-semibold text-white mb-1">{feature.title}</div>
                      <div className="text-sm text-gray-400">{feature.description}</div>
                    </div>
                  </motion.div>
                ))}

                {/* Mascot */}
                <div className="flex justify-center mt-6">
                  <Mascot size={100} variant="03" animate={true} />
                </div>
              </div>
            </div>
          </div>
        </ContentCard>
      </Container>
    </section>
  );
}
