'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, FileJson, Send, Users, FileSpreadsheet, Building2, BarChart3, Webhook, Database, Sparkles } from 'lucide-react';
import Container from '../ui/Container';
import CrazyBackground from '../ui/CrazyBackground';
import Mascot from '../ui/Mascot';
import Paws from '../ui/Paws';

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

// Entry directions for cards
const cardDirections = [
  { x: -60, y: 0 },
  { x: 0, y: -40 },
  { x: 60, y: 0 },
  { x: 80, y: 0 },
  { x: -80, y: 20 },
  { x: -60, y: 40 },
  { x: 0, y: 60 },
  { x: 60, y: 40 },
];

export default function API() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: '-10%' });

  return (
    <section 
      className="relative py-20 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #0a1628 0%, #1a1a3e 40%, #2d1b4e 60%, #1a1a3e 80%, #0a1628 100%)',
      }}
    >
      {/* Simple grid background - no blur */}
      <CrazyBackground variant="grid" color="#8b5cf6" />
      <CrazyBackground variant="particles" intensity="low" color="#1890ff" />

      {/* Decorative Paws */}
      <Paws 
        size={110} 
        className="absolute top-24 right-16 hidden xl:block" 
        rotation={25}
        opacity={0.25}
      />
      <Paws 
        size={70} 
        className="absolute bottom-16 right-[25%] hidden lg:block" 
        rotation={-35}
        opacity={0.2}
        flip
      />

      {/* Mascot - box variant */}
      <motion.div
        className="absolute left-6 lg:left-16 top-1/4 z-20 hidden lg:block"
        animate={{ y: [-15, 15, -15] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <Mascot size={130} variant="box" />
      </motion.div>

      <Container className="relative z-10">
        <div ref={ref}>
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 25 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <span className="inline-flex items-center gap-2 px-5 py-2 mb-5 text-sm font-medium text-white bg-gradient-to-r from-[#8b5cf6]/30 to-[#1890ff]/30 border border-white/10 rounded-full">
              <Code2 size={16} />
              Для разработчиков
              <Sparkles size={14} />
            </span>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-5">
              Суперсила <span className="text-[#8b5cf6]">API</span>
            </h2>
            
            <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-6">
              Интегрируйте WorkHere в экосистему вашей компании
            </p>
            
            <a
              href="#demo"
              className="inline-flex items-center gap-2 px-7 py-3 bg-gradient-to-r from-[#8b5cf6] to-[#1890ff] text-white rounded-xl font-bold shadow-lg hover:shadow-xl transition-shadow"
            >
              🚀 Портал для разработчиков
            </a>
          </motion.div>

          {/* Cards Grid - NO backdrop-blur */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {apiFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, ...cardDirections[index % cardDirections.length] }}
                animate={isInView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, ...cardDirections[index % cardDirections.length] }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                className="bg-[#1a1a3e]/80 rounded-xl p-5 border border-white/10 hover:border-[#8b5cf6]/40 hover:-translate-y-1 transition-all cursor-pointer"
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#8b5cf6]/20 to-[#1890ff]/20 flex items-center justify-center mb-3">
                  <feature.icon size={20} className="text-[#8b5cf6]" />
                </div>
                <h3 className="text-base font-semibold text-white mb-1">{feature.title}</h3>
                <p className="text-sm text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Code Preview - NO backdrop-blur */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="max-w-3xl mx-auto"
          >
            <div className="bg-gray-900 rounded-2xl overflow-hidden border border-gray-700/50 shadow-xl">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-800/50 bg-gray-800/50">
                <div className="flex gap-1.5">
                  {['#ff5f56', '#ffbd2e', '#27ca40'].map((color, i) => (
                    <div key={i} className="w-3 h-3 rounded-full" style={{ backgroundColor: color }} />
                  ))}
                </div>
                <span className="text-sm text-gray-500 ml-3 font-mono">api-example.js</span>
              </div>
              <div className="p-5 font-mono text-sm">
                <div className="text-gray-500">// Получить кандидатов</div>
                <div className="mt-2 space-y-0.5">
                  <div>
                    <span className="text-[#8b5cf6]">const</span>
                    <span className="text-gray-300"> response = </span>
                    <span className="text-[#8b5cf6]">await</span>
                    <span className="text-[#fbbf24]"> fetch</span>
                    <span className="text-gray-300">(</span>
                  </div>
                  <div className="pl-5 text-[#4ade80]">&apos;https://api.workhere.ru/v1/candidates&apos;</div>
                  <div className="text-gray-300">);</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
