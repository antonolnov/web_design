'use client';

import { motion, useInView, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import { Users, Clock, Target, Layers, Zap, Building2, UserCheck, ChevronRight, TrendingUp, ArrowDown } from 'lucide-react';
import Container from '../ui/Container';
import CrazyBackground from '../ui/CrazyBackground';
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

export default function Pipeline() {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-10%' });
  const [activeFunnel, setActiveFunnel] = useState(0);
  const currentFunnel = funnels[activeFunnel];
  const maxCount = currentFunnel.stages[0].count;

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);

  return (
    <section id="funnel" ref={containerRef} className="relative py-24 overflow-hidden bg-[#0a1628]">
      {/* CRAZY animated background */}
      <CrazyBackground variant="matrix" intensity="high" color="#1890ff" />
      <CrazyBackground variant="aurora" intensity="low" />
      
      {/* Animated grid */}
      <motion.div 
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: 'linear-gradient(#1890ff 1px, transparent 1px), linear-gradient(90deg, #1890ff 1px, transparent 1px)',
          backgroundSize: '60px 60px',
          y: bgY,
        }}
      />

      {/* Floating orbs */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full blur-3xl"
          style={{
            width: 300 + i * 100,
            height: 300 + i * 100,
            left: `${(i * 25) % 80}%`,
            top: `${(i * 20) % 60}%`,
            background: `radial-gradient(circle, rgba(24,144,255,${0.15 - i * 0.02}) 0%, transparent 70%)`,
          }}
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 10 + i * 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Mascot floating */}
      <motion.div
        className="absolute right-10 top-20 z-20 hidden xl:block"
        animate={{
          y: [-20, 20, -20],
          rotate: [-5, 5, -5],
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <Mascot size={140} variant="float" />
      </motion.div>

      <Container className="relative z-10">
        <div ref={ref}>
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-16"
          >
            <motion.span 
              className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-sm font-medium text-[#1890ff] bg-[#1890ff]/10 border border-[#1890ff]/20 rounded-full"
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <TrendingUp size={14} />
              </motion.div>
              Воронки подбора
            </motion.span>
            
            <motion.h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
            >
              Любое количество{' '}
              <span className="text-[#1890ff]">воронок</span>
            </motion.h2>
            
            <motion.p
              className="text-xl text-gray-400 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2 }}
            >
              Массовый найм, IT-рекрутинг, Executive Search — создавайте уникальные процессы
            </motion.p>
          </motion.div>

          {/* Funnel selector with hover effects */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {funnels.map((funnel, i) => (
              <motion.button
                key={funnel.id}
                onClick={() => setActiveFunnel(i)}
                className={`group flex items-center gap-3 px-6 py-4 rounded-2xl transition-all ${
                  activeFunnel === i
                    ? 'bg-white text-gray-900 shadow-2xl shadow-white/20'
                    : 'bg-white/5 text-white/70 hover:bg-white/10 border border-white/10'
                }`}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                    activeFunnel === i ? 'bg-[#e6f4ff] text-[#1890ff]' : 'bg-white/10 text-white/70'
                  }`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <funnel.icon size={20} />
                </motion.div>
                <div className="text-left">
                  <div className="font-semibold">{funnel.name}</div>
                  <div className={`text-xs ${activeFunnel === i ? 'text-gray-500' : 'text-white/40'}`}>
                    {funnel.description}
                  </div>
                </div>
              </motion.button>
            ))}
            
            <motion.div
              className="flex items-center gap-2 px-4 py-4 text-white/30 text-sm"
              animate={{ x: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              + ещё ∞
              <ChevronRight size={14} />
            </motion.div>
          </motion.div>

          {/* Main content */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Funnel visualization */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentFunnel.id}
                initial={{ opacity: 0, x: -50, rotateY: -10 }}
                animate={{ opacity: 1, x: 0, rotateY: 0 }}
                exit={{ opacity: 0, x: 50, rotateY: 10 }}
                transition={{ duration: 0.5, type: 'spring' }}
                className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10"
              >
                {/* Stats row */}
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-xl font-bold text-white">{currentFunnel.name}</h3>
                  <div className="flex gap-6">
                    {[
                      { value: currentFunnel.stats.conversion, label: 'Конверсия', color: '#1890ff' },
                      { value: currentFunnel.stats.avgTime, label: 'Ср. время', color: '#fff' },
                      { value: currentFunnel.stats.hired, label: 'Наняли', color: '#52c41a' },
                    ].map((stat, i) => (
                      <motion.div 
                        key={stat.label}
                        className="text-center"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 + i * 0.1 }}
                      >
                        <motion.div 
                          className="text-2xl font-bold"
                          style={{ color: stat.color }}
                          animate={{ scale: [1, 1.05, 1] }}
                          transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                        >
                          {stat.value}
                        </motion.div>
                        <div className="text-gray-500 text-xs">{stat.label}</div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Funnel stages */}
                <div className="space-y-4">
                  {currentFunnel.stages.map((stage, i) => {
                    const width = (stage.count / maxCount) * 100;
                    return (
                      <motion.div
                        key={stage.name}
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 + i * 0.08 }}
                      >
                        <div className="flex items-center justify-between text-sm mb-2">
                          <span className="text-gray-300 flex items-center gap-2">
                            <motion.div
                              animate={{ rotate: [0, 360] }}
                              transition={{ duration: 3, repeat: Infinity, delay: i * 0.2 }}
                            >
                              <ArrowDown size={12} className="text-[#1890ff]" />
                            </motion.div>
                            {stage.name}
                          </span>
                          <motion.span 
                            className="text-white font-bold"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 + i * 0.1 }}
                          >
                            {stage.count.toLocaleString()}
                          </motion.span>
                        </div>
                        <div className="h-10 bg-white/5 rounded-xl overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${width}%` }}
                            transition={{ duration: 0.8, delay: 0.2 + i * 0.1, type: 'spring' }}
                            className="h-full rounded-xl relative overflow-hidden"
                            style={{
                              background: `linear-gradient(90deg, #1890ff ${100 - width * 0.5}%, #40a9ff 100%)`,
                            }}
                          >
                            {/* Shimmer effect */}
                            <motion.div
                              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                              animate={{ x: ['-100%', '200%'] }}
                              transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                            />
                          </motion.div>
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
                  initial={{ opacity: 0, y: 30, rotate: -2 }}
                  animate={isInView ? { opacity: 1, y: 0, rotate: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.1, type: 'spring' }}
                  whileHover={{ y: -8, scale: 1.02, rotate: 1 }}
                  className="bg-white/5 backdrop-blur rounded-2xl p-6 border border-white/10 hover:border-[#1890ff]/50 transition-all cursor-pointer group"
                >
                  <motion.div 
                    className="w-12 h-12 rounded-xl bg-[#1890ff]/10 flex items-center justify-center mb-4 group-hover:bg-[#1890ff]/20 transition-colors"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <feature.icon size={24} className="text-[#1890ff]" />
                  </motion.div>
                  <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-400 text-sm">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
