'use client';

import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import { Users, Clock, Target, Layers, Zap, Building2, UserCheck, ChevronRight, TrendingUp } from 'lucide-react';
import Container from '../ui/Container';

// Примеры разных воронок
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
  {
    icon: Layers,
    title: 'Бесконечное количество воронок',
    description: 'Создавайте уникальные воронки для каждого типа вакансий',
  },
  {
    icon: Target,
    title: 'Аналитика по каждой воронке',
    description: 'Конверсия, время на этапах — всё в реальном времени',
  },
  {
    icon: UserCheck,
    title: 'Кадровый резерв',
    description: 'Сохраняйте кандидатов "на будущее" с тегами',
  },
  {
    icon: Clock,
    title: 'Время на этапах',
    description: 'Выявляйте узкие места в процессе подбора',
  },
];

export default function Pipeline() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-10%' });
  const [activeFunnel, setActiveFunnel] = useState(0);
  const currentFunnel = funnels[activeFunnel];
  const maxCount = currentFunnel.stages[0].count;

  return (
    <section id="funnel" ref={ref} className="py-24 bg-[#0a1628]">
      {/* Subtle grid */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(#1890ff 1px, transparent 1px), linear-gradient(90deg, #1890ff 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <Container className="relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 mb-4 text-sm font-medium text-[#1890ff] bg-[#1890ff]/10 border border-[#1890ff]/20 rounded-full">
            <TrendingUp size={14} />
            Воронки подбора
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Любое количество воронок
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Массовый найм, IT-рекрутинг, Executive Search — создавайте уникальные процессы под каждый тип подбора
          </p>
        </motion.div>

        {/* Funnel selector */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {funnels.map((funnel, i) => (
            <button
              key={funnel.id}
              onClick={() => setActiveFunnel(i)}
              className={`group flex items-center gap-3 px-5 py-3 rounded-2xl transition-all ${
                activeFunnel === i
                  ? 'bg-white text-gray-900'
                  : 'bg-white/5 text-white/70 hover:bg-white/10 border border-white/10'
              }`}
            >
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                activeFunnel === i ? 'bg-[#e6f4ff] text-[#1890ff]' : 'bg-white/10 text-white/70'
              }`}>
                <funnel.icon size={16} />
              </div>
              <div className="text-left">
                <div className="font-medium text-sm">{funnel.name}</div>
                <div className={`text-xs ${activeFunnel === i ? 'text-gray-500' : 'text-white/40'}`}>
                  {funnel.description}
                </div>
              </div>
            </button>
          ))}
          
          <div className="flex items-center gap-2 px-4 py-3 text-white/30 text-sm">
            + ещё ∞
            <ChevronRight size={14} />
          </div>
        </motion.div>

        {/* Main content */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Funnel visualization */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentFunnel.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-white">Воронка: {currentFunnel.name}</h3>
                <div className="flex gap-4 text-sm">
                  <div className="text-center">
                    <div className="text-[#1890ff] font-bold">{currentFunnel.stats.conversion}</div>
                    <div className="text-gray-500 text-xs">Конверсия</div>
                  </div>
                  <div className="text-center">
                    <div className="text-white font-bold">{currentFunnel.stats.avgTime}</div>
                    <div className="text-gray-500 text-xs">Ср. время</div>
                  </div>
                  <div className="text-center">
                    <div className="text-emerald-400 font-bold">{currentFunnel.stats.hired}</div>
                    <div className="text-gray-500 text-xs">Наняли</div>
                  </div>
                </div>
              </div>

              {/* Funnel stages */}
              <div className="space-y-3">
                {currentFunnel.stages.map((stage, i) => {
                  const width = (stage.count / maxCount) * 100;
                  return (
                    <motion.div
                      key={stage.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                    >
                      <div className="flex items-center justify-between text-sm mb-1">
                        <span className="text-gray-300">{stage.name}</span>
                        <span className="text-white font-medium">{stage.count.toLocaleString()}</span>
                      </div>
                      <div className="h-8 bg-white/5 rounded-lg overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${width}%` }}
                          transition={{ duration: 0.5, delay: i * 0.05 }}
                          className="h-full rounded-lg"
                          style={{
                            background: `linear-gradient(90deg, #1890ff ${100 - width * 0.5}%, #40a9ff 100%)`,
                          }}
                        />
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Features */}
          <div className="grid sm:grid-cols-2 gap-4">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.1 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="bg-white/5 rounded-2xl p-5 border border-white/10 hover:border-[#1890ff]/30 hover:bg-white/[0.07] transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-[#1890ff]/10 flex items-center justify-center mb-4">
                  <feature.icon size={20} className="text-[#1890ff]" />
                </div>
                <h3 className="text-base font-semibold text-white mb-1">{feature.title}</h3>
                <p className="text-sm text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
