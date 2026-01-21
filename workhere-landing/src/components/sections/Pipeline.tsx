'use client';

import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import { Users, Clock, Target, Layers, Zap, Building2, UserCheck, TrendingUp, ChevronRight } from 'lucide-react';

// Примеры разных воронок
const funnels = [
  {
    id: 'mass',
    name: 'Массовый найм',
    icon: Users,
    description: 'Для розницы, колл-центров, производства',
    color: '#1890ff',
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
    description: 'Разработчики, дизайнеры, аналитики',
    color: '#722ed1',
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
    description: 'C-level, директора, руководители',
    color: '#13c2c2',
    stages: [
      { name: 'Поиск', count: 48 },
      { name: 'Первичный контакт', count: 32 },
      { name: 'Встреча с HR', count: 18 },
      { name: 'Встреча с CEO', count: 8 },
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
    description: 'Создавайте уникальные воронки для каждого типа вакансий, отдела или клиента',
  },
  {
    icon: Target,
    title: 'Аналитика по каждой воронке',
    description: 'Конверсия, время на этапах, причины отказов — всё в реальном времени',
  },
  {
    icon: UserCheck,
    title: 'Кадровый резерв',
    description: 'Сохраняйте перспективных кандидатов "на будущее" с тегами и напоминаниями',
  },
  {
    icon: Clock,
    title: 'Время на этапах',
    description: 'Выявляйте узкие места: на каком этапе кандидаты задерживаются дольше всего',
  },
];

export default function Pipeline() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-10%' });
  const [activeFunnel, setActiveFunnel] = useState(0);
  const currentFunnel = funnels[activeFunnel];

  return (
    <section 
      id="funnel" 
      ref={ref}
      className="relative overflow-hidden py-20 lg:py-24"
      style={{
        background: 'linear-gradient(180deg, #0c1929 0%, #0f2744 50%, #0c1929 100%)',
      }}
    >
      {/* Top transition gradient */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-white to-transparent z-[1]" />
      
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Grid */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'linear-gradient(#1890ff20 1px, transparent 1px), linear-gradient(90deg, #1890ff20 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
        
        {/* Floating particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-[#1890ff]"
            style={{
              left: `${10 + Math.random() * 80}%`,
              top: `${10 + Math.random() * 80}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
        
        {/* Glowing orbs */}
        <motion.div
          className="absolute w-[600px] h-[600px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(24, 144, 255, 0.15) 0%, transparent 70%)',
            top: '20%',
            right: '-10%',
          }}
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <motion.span 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            className="inline-block px-4 py-2 mb-6 text-sm font-medium text-[#1890ff] bg-[#1890ff]/10 border border-[#1890ff]/20 rounded-full"
          >
            Воронка подбора
          </motion.span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Любое количество воронок
          </h2>
          <p className="text-xl text-white/60 max-w-3xl mx-auto">
            Массовый найм, IT-рекрутинг, Executive Search — создавайте уникальные процессы 
            под каждый тип подбора со своей аналитикой
          </p>
        </motion.div>

        {/* Funnel selector */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {funnels.map((funnel, i) => (
            <motion.button
              key={funnel.id}
              onClick={() => setActiveFunnel(i)}
              className={`group relative px-6 py-4 rounded-2xl transition-all duration-300 ${
                activeFunnel === i
                  ? 'bg-white text-gray-900 shadow-2xl shadow-white/10'
                  : 'bg-white/5 text-white/80 hover:bg-white/10 border border-white/10'
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex items-center gap-3">
                <div 
                  className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                    activeFunnel === i ? 'bg-gray-100' : 'bg-white/10'
                  }`}
                  style={{ color: funnel.color }}
                >
                  <funnel.icon size={20} />
                </div>
                <div className="text-left">
                  <div className="font-semibold">{funnel.name}</div>
                  <div className={`text-xs ${activeFunnel === i ? 'text-gray-500' : 'text-white/50'}`}>
                    {funnel.description}
                  </div>
                </div>
              </div>
            </motion.button>
          ))}
          
          {/* "More" indicator */}
          <motion.div
            className="flex items-center gap-2 px-6 py-4 text-white/40"
            animate={{ x: [0, 5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="text-sm">+ ещё ∞</span>
            <ChevronRight size={16} />
          </motion.div>
        </motion.div>

        {/* Main content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Funnel visualization */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentFunnel.id}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 30 }}
              transition={{ duration: 0.4 }}
              className="relative"
            >
              <div 
                className="rounded-3xl p-8 border backdrop-blur-sm"
                style={{
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
                  borderColor: `${currentFunnel.color}30`,
                }}
              >
                {/* Funnel header */}
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-3">
                    <div 
                      className="w-12 h-12 rounded-2xl flex items-center justify-center"
                      style={{ background: `${currentFunnel.color}20`, color: currentFunnel.color }}
                    >
                      <currentFunnel.icon size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{currentFunnel.name}</h3>
                      <p className="text-white/50 text-sm">{currentFunnel.description}</p>
                    </div>
                  </div>
                  <div 
                    className="px-3 py-1.5 rounded-full text-sm font-medium"
                    style={{ background: `${currentFunnel.color}20`, color: currentFunnel.color }}
                  >
                    Активна
                  </div>
                </div>

                {/* Funnel stages */}
                <div className="space-y-3 mb-8">
                  {currentFunnel.stages.map((stage, i) => {
                    const maxCount = currentFunnel.stages[0].count;
                    const width = (stage.count / maxCount) * 100;
                    
                    return (
                      <motion.div
                        key={stage.name}
                        initial={{ opacity: 0, scaleX: 0 }}
                        animate={{ opacity: 1, scaleX: 1 }}
                        transition={{ delay: i * 0.1, duration: 0.5 }}
                        className="origin-left"
                      >
                        <div 
                          className="h-14 rounded-xl flex items-center justify-between px-5 transition-all duration-300 hover:scale-[1.02] cursor-pointer group"
                          style={{
                            width: `${Math.max(width, 30)}%`,
                            background: `linear-gradient(90deg, ${currentFunnel.color}40 0%, ${currentFunnel.color}20 100%)`,
                            borderLeft: `3px solid ${currentFunnel.color}`,
                          }}
                        >
                          <span className="text-white/80 font-medium">{stage.name}</span>
                          <motion.span 
                            className="text-white font-bold text-lg"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: i * 0.1 + 0.3 }}
                          >
                            {stage.count.toLocaleString()}
                          </motion.span>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10">
                  <div className="text-center">
                    <motion.div 
                      className="text-2xl font-bold"
                      style={{ color: currentFunnel.color }}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      {currentFunnel.stats.conversion}
                    </motion.div>
                    <div className="text-xs text-white/40 mt-1">Конверсия</div>
                  </div>
                  <div className="text-center">
                    <motion.div 
                      className="text-2xl font-bold text-white"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                    >
                      {currentFunnel.stats.avgTime}
                    </motion.div>
                    <div className="text-xs text-white/40 mt-1">Среднее время</div>
                  </div>
                  <div className="text-center">
                    <motion.div 
                      className="text-2xl font-bold text-white"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7 }}
                    >
                      {currentFunnel.stats.hired}
                    </motion.div>
                    <div className="text-xs text-white/40 mt-1">Наняли</div>
                  </div>
                </div>
              </div>

              {/* Decorative glow */}
              <div 
                className="absolute -inset-4 rounded-3xl opacity-20 blur-2xl -z-10"
                style={{ background: currentFunnel.color }}
              />
            </motion.div>
          </AnimatePresence>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-8">
              Полный контроль над<br />процессом найма
            </h3>
            
            <div className="space-y-6">
              {features.map((feature, i) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="flex gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#1890ff]/20 flex items-center justify-center flex-shrink-0 group-hover:bg-[#1890ff]/30 transition-colors">
                    <feature.icon className="text-[#1890ff]" size={22} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">{feature.title}</h4>
                    <p className="text-white/50 text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Additional info */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.8 }}
              className="mt-8 p-4 rounded-2xl bg-gradient-to-r from-[#1890ff]/20 to-transparent border border-[#1890ff]/20"
            >
              <div className="flex items-center gap-3">
                <TrendingUp className="text-[#1890ff]" size={20} />
                <span className="text-white/70 text-sm">
                  Компании с настроенными воронками нанимают на <span className="text-[#1890ff] font-semibold">40% быстрее</span>
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
