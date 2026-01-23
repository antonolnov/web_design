'use client';

import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Code2, FileJson, Send, Users, FileSpreadsheet, Building2, BarChart3, Webhook, Database, Sparkles } from 'lucide-react';
import Container from '../ui/Container';
import CrazyBackground from '../ui/CrazyBackground';
import Mascot from '../ui/Mascot';

const apiFeatures = [
  { icon: FileJson, title: 'Интерактивная документация', description: 'Полное руководство с примерами кода' },
  { icon: Send, title: 'Заявки из интранета', description: 'Передавайте заявки напрямую в систему' },
  { icon: Users, title: 'Синхронизация с HR', description: 'Автоматическая передача финалистов' },
  { icon: FileSpreadsheet, title: 'Excel-отчёты', description: 'Индивидуальные шаблоны выгрузки' },
  { icon: Database, title: 'Песочница API', description: 'Тестируйте запросы без риска' },
  { icon: Building2, title: 'Справочники', description: 'Загрузка структуры компании' },
  { icon: Webhook, title: 'Вебхуки', description: 'Telegram, 1C, CRM, Slack' },
  { icon: BarChart3, title: 'BI-экспорт', description: 'Данные в любом формате' },
];

// Entry animations from different directions
const cardAnimations = [
  { initial: { x: -200, y: -50, rotate: -15 } },
  { initial: { x: 0, y: -200, rotate: 10 } },
  { initial: { x: 200, y: -50, rotate: 15 } },
  { initial: { x: 300, y: 0, rotate: -10 } },
  { initial: { x: -300, y: 50, rotate: 10 } },
  { initial: { x: -200, y: 100, rotate: -5 } },
  { initial: { x: 0, y: 200, rotate: -15 } },
  { initial: { x: 200, y: 100, rotate: 10 } },
];

export default function API() {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const isInView = useInView(ref, { once: false, margin: '-10%' });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const codeY = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section 
      ref={containerRef}
      className="relative py-24 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #0a1628 0%, #1a1a3e 35%, #2d1b4e 65%, #1a1a3e 85%, #0a1628 100%)',
      }}
    >
      {/* CRAZY background effects */}
      <CrazyBackground variant="matrix" intensity="medium" color="#8b5cf6" />
      <CrazyBackground variant="particles" intensity="high" color="#1890ff" />
      
      {/* Animated gradient orbs */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full blur-3xl"
          style={{
            width: 300 + i * 80,
            height: 300 + i * 80,
            left: `${(i * 20) % 80}%`,
            top: `${(i * 15) % 70}%`,
            background: i % 2 === 0 
              ? 'radial-gradient(circle, rgba(139,92,246,0.2) 0%, transparent 70%)'
              : 'radial-gradient(circle, rgba(24,144,255,0.2) 0%, transparent 70%)',
            y: bgY,
          }}
          animate={{
            x: [0, 50, 0],
            y: [0, -40, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8 + i * 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Grid lines */}
      <motion.div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(#8b5cf6 1px, transparent 1px), linear-gradient(90deg, #8b5cf6 1px, transparent 1px)',
          backgroundSize: '80px 80px',
          y: bgY,
        }}
      />

      {/* Light streaks */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-[200%] w-0.5"
            style={{
              left: `${10 + i * 12}%`,
              top: '-50%',
              background: `linear-gradient(to bottom, transparent, ${i % 2 === 0 ? '#1890ff' : '#8b5cf6'}30, transparent)`,
              transform: `rotate(${-20 + i * 3}deg)`,
            }}
            animate={{
              opacity: [0, 0.5, 0],
              x: [-50, 150, -50],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              delay: i * 0.6,
            }}
          />
        ))}
      </div>

      {/* Mascot */}
      <motion.div
        className="absolute left-5 lg:left-20 top-1/4 z-20 hidden lg:block"
        animate={{
          y: [-30, 30, -30],
          rotate: [-10, 10, -10],
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <Mascot size={160} variant="crazy" />
      </motion.div>

      <Container className="relative z-10">
        <div ref={ref}>
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.span 
              className="inline-flex items-center gap-2 px-5 py-2.5 mb-6 text-sm font-medium text-white bg-gradient-to-r from-[#8b5cf6]/30 to-[#1890ff]/30 border border-white/10 rounded-full"
              whileHover={{ scale: 1.05 }}
              animate={{
                boxShadow: ['0 0 20px rgba(139,92,246,0.3)', '0 0 40px rgba(139,92,246,0.5)', '0 0 20px rgba(139,92,246,0.3)'],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              >
                <Code2 size={16} />
              </motion.div>
              Для разработчиков
              <motion.div
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <Sparkles size={14} />
              </motion.div>
            </motion.span>
            
            <motion.h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ delay: 0.1 }}
            >
              Суперсила{' '}
              <span 
                className="bg-gradient-to-r from-[#8b5cf6] to-[#1890ff] bg-clip-text text-transparent"
                style={{ WebkitBackgroundClip: 'text' }}
              >
                API
              </span>
            </motion.h2>
            
            <motion.p
              className="text-xl text-gray-400 max-w-3xl mx-auto mb-8"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.2 }}
            >
              Интегрируйте WorkHere в экосистему вашей компании
            </motion.p>
            
            <motion.a
              href="#demo"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(139,92,246,0.5)' }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#8b5cf6] to-[#1890ff] text-white rounded-2xl font-bold text-lg shadow-2xl"
            >
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                🚀
              </motion.span>
              Портал для разработчиков
            </motion.a>
          </motion.div>

          {/* Cards Grid - Crazy flying animations */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
            {apiFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ 
                  opacity: 0, 
                  ...cardAnimations[index % cardAnimations.length].initial 
                }}
                animate={isInView ? { opacity: 1, x: 0, y: 0, rotate: 0 } : { 
                  opacity: 0, 
                  ...cardAnimations[index % cardAnimations.length].initial 
                }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.1, 
                  type: 'spring', 
                  stiffness: 60 
                }}
                whileHover={{ 
                  y: -10, 
                  scale: 1.05,
                  boxShadow: '0 25px 50px rgba(139,92,246,0.3)',
                }}
                className="relative group bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-[#8b5cf6]/50 transition-all cursor-pointer overflow-hidden"
              >
                {/* Hover glow */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-[#8b5cf6]/20 to-[#1890ff]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
                
                {/* Shimmer effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '200%' }}
                  transition={{ duration: 0.6 }}
                />
                
                <div className="relative">
                  <motion.div 
                    className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#8b5cf6]/20 to-[#1890ff]/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <feature.icon size={24} className="text-[#8b5cf6]" />
                  </motion.div>
                  <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-400">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Code Preview - Floating with parallax */}
          <motion.div
            style={{ y: codeY }}
            initial={{ opacity: 0, y: 100 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <motion.div 
              className="bg-gray-900/80 backdrop-blur-xl rounded-3xl overflow-hidden border border-gray-700/50 shadow-2xl"
              whileHover={{ 
                scale: 1.02,
                boxShadow: '0 40px 80px rgba(139,92,246,0.2)',
              }}
            >
              <div className="flex items-center gap-2 px-5 py-4 border-b border-gray-800/50 bg-gray-800/30">
                <div className="flex gap-2">
                  {['#ff5f56', '#ffbd2e', '#27ca40'].map((color, i) => (
                    <motion.div 
                      key={i}
                      className="w-3.5 h-3.5 rounded-full"
                      style={{ backgroundColor: color }}
                      whileHover={{ scale: 1.3 }}
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-500 ml-3 font-mono">api-example.js</span>
              </div>
              <motion.div 
                className="p-6 font-mono text-base"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.8 }}
              >
                <motion.div 
                  className="text-gray-500"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  // Получить кандидатов
                </motion.div>
                <div className="mt-3 space-y-1">
                  <div>
                    <span className="text-[#8b5cf6]">const</span>
                    <span className="text-gray-300"> response = </span>
                    <span className="text-[#8b5cf6]">await</span>
                    <span className="text-[#fbbf24]"> fetch</span>
                    <span className="text-gray-300">(</span>
                  </div>
                  <motion.div 
                    className="pl-6 text-[#4ade80]"
                    animate={{ opacity: [1, 0.7, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    'https://api.workhere.ru/v1/candidates'
                  </motion.div>
                  <div className="text-gray-300">);</div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
