'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FileText, Send, FolderOpen, FileSpreadsheet, Code, Webhook, Database, Plug, Cpu } from 'lucide-react';
import { ArrowRight } from 'lucide-react';
import Mascot from '@/components/ui/Mascot';

const apiFeatures = [
  { 
    icon: FileText, 
    title: 'Интерактивная документация', 
    description: 'Полная документация с примерами кода',
    size: 'large', // 2x2
  },
  { 
    icon: Send, 
    title: 'Передавайте заявки из интранета', 
    description: 'Автоматический импорт заявок',
    size: 'medium', // 2x1
  },
  { 
    icon: FolderOpen, 
    title: 'Отправляйте финалистов в HR-систему', 
    description: 'Бесшовная интеграция',
    size: 'small',
  },
  { 
    icon: FileSpreadsheet, 
    title: 'Передавайте отклики с карьерного сайта', 
    description: 'Сбор откликов',
    size: 'medium',
  },
  { 
    icon: Code, 
    title: 'Разрабатывайте индивидуальные отчеты', 
    description: 'Кастомная аналитика',
    size: 'small',
  },
  { 
    icon: Webhook, 
    title: 'Webhooks для событий', 
    description: 'Real-time уведомления',
    size: 'small',
  },
  { 
    icon: Database, 
    title: 'Синхронизация данных', 
    description: 'Двусторонний обмен',
    size: 'small',
  },
  { 
    icon: Plug, 
    title: 'Готовые коннекторы', 
    description: 'Популярные интеграции',
    size: 'small',
  },
  { 
    icon: Cpu, 
    title: 'Sandbox для тестов', 
    description: 'Безопасная разработка',
    size: 'small',
  },
];

export default function APIHuntflow() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0.8]);

  return (
    <section
      ref={sectionRef}
      id="api"
      className="relative py-32 overflow-hidden"
      style={{ 
        background: 'linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #3730a3 100%)'
      }}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
        />
        {/* Glowing orbs */}
        <motion.div
          className="absolute top-20 left-20 w-[400px] h-[400px] rounded-full opacity-30"
          style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.5) 0%, transparent 70%)' }}
          animate={{ scale: [1, 1.2, 1], x: [0, 30, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-[300px] h-[300px] rounded-full opacity-20"
          style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.5) 0%, transparent 70%)' }}
          animate={{ scale: [1, 1.3, 1], y: [0, -30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <motion.div
        className="max-w-[1400px] mx-auto px-6 relative"
        style={{ opacity }}
      >
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Суперсила API
          </motion.h2>
          <motion.p
            className="text-xl text-purple-200 max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Мы сделали все для легкого встраивания WorkHere в экосистему вашей компании
          </motion.p>
          <motion.a
            href="#api-docs"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-purple-900 font-medium rounded-full hover:bg-purple-100 transition-colors"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Портал для разработчиков
            <ArrowRight className="w-4 h-4" />
          </motion.a>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {apiFeatures.map((feature, index) => {
            const IconComponent = feature.icon;
            const isLarge = feature.size === 'large';
            const isMedium = feature.size === 'medium';
            
            // Calculate animation direction
            const fromLeft = index % 4 < 2;
            const initialX = fromLeft ? -50 : 50;
            
            return (
              <motion.div
                key={feature.title}
                className={`
                  relative p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 
                  hover:bg-white/15 transition-all group overflow-hidden
                  ${isLarge ? 'col-span-2 row-span-2' : ''}
                  ${isMedium ? 'col-span-2' : ''}
                `}
                initial={{ opacity: 0, x: initialX, y: 30 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                {/* Background decoration for large card */}
                {isLarge && (
                  <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    <svg className="absolute -right-10 -bottom-10 w-48 h-48 opacity-20" viewBox="0 0 100 100">
                      <circle cx="50" cy="50" r="40" fill="none" stroke="white" strokeWidth="0.5" />
                      <circle cx="50" cy="50" r="30" fill="none" stroke="white" strokeWidth="0.5" />
                      <circle cx="50" cy="50" r="20" fill="none" stroke="white" strokeWidth="0.5" />
                    </svg>
                  </div>
                )}

                {/* Icon */}
                <motion.div
                  className={`
                    rounded-xl bg-purple-500/30 flex items-center justify-center mb-4 
                    group-hover:bg-purple-500/50 transition-colors
                    ${isLarge ? 'w-16 h-16' : 'w-12 h-12'}
                  `}
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <IconComponent className={`text-purple-200 ${isLarge ? 'w-8 h-8' : 'w-6 h-6'}`} />
                </motion.div>

                <h3 className={`font-semibold text-white mb-2 ${isLarge ? 'text-xl' : 'text-base'}`}>
                  {feature.title}
                </h3>
                <p className={`text-purple-200 ${isLarge ? 'text-base' : 'text-sm'}`}>
                  {feature.description}
                </p>

                {/* Code snippet for large card */}
                {isLarge && (
                  <motion.div
                    className="mt-6 p-4 rounded-lg bg-black/30 font-mono text-sm text-green-300"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                  >
                    <div className="text-purple-300">GET /api/v1/candidates</div>
                    <div className="text-gray-400 mt-1">Authorization: Bearer ...</div>
                  </motion.div>
                )}

                {/* Hover glow effect */}
                <motion.div
                  className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{
                    background: 'radial-gradient(circle at center, rgba(139,92,246,0.2) 0%, transparent 70%)',
                  }}
                />
              </motion.div>
            );
          })}
        </div>

      </motion.div>

      {/* Mascot - outside content container */}
      <motion.div
        className="absolute bottom-4 left-4 hidden xl:block z-20"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.8 }}
      >
        <Mascot variant="06" size={80} phrase="API! 💪" />
      </motion.div>
    </section>
  );
}
