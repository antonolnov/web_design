'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FileText, Send, FolderOpen, FileSpreadsheet, Code, Webhook, Database, Plug, Cpu } from 'lucide-react';
import { ArrowRight } from 'lucide-react';

const apiFeatures = [
  { icon: FileText, title: 'Интерактивная документация', description: 'Полная документация с примерами' },
  { icon: Send, title: 'Передавайте заявки из интранета', description: 'Автоматический импорт' },
  { icon: FolderOpen, title: 'Отправляйте финалистов в HR-систему', description: 'Бесшовная интеграция' },
  { icon: FileSpreadsheet, title: 'Передавайте отклики с карьерного сайта', description: 'Сбор откликов' },
  { icon: Code, title: 'Разрабатывайте индивидуальные отчеты', description: 'Кастомная аналитика' },
  { icon: Webhook, title: 'Webhooks для событий', description: 'Real-time уведомления' },
  { icon: Database, title: 'Синхронизация данных', description: 'Двусторонний обмен' },
  { icon: Plug, title: 'Готовые коннекторы', description: 'Популярные интеграции' },
  { icon: Cpu, title: 'Sandbox для тестов', description: 'Безопасная разработка' },
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
            Мы сделали все для легкого встраивания WorkHere в экосистему вашей компании. 
            Разработайте все необходимые интеграции
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

        {/* API Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {apiFeatures.map((feature, index) => {
            const IconComponent = feature.icon;
            // Alternate animation direction based on position
            const fromLeft = index % 3 === 0;
            const fromRight = index % 3 === 2;
            const initialX = fromLeft ? -50 : fromRight ? 50 : 0;
            
            return (
              <motion.div
                key={feature.title}
                className="relative p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-all group"
                initial={{ opacity: 0, x: initialX, y: 30 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                {/* Icon */}
                <motion.div
                  className="w-12 h-12 rounded-xl bg-purple-500/30 flex items-center justify-center mb-4 group-hover:bg-purple-500/50 transition-colors"
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <IconComponent className="w-6 h-6 text-purple-200" />
                </motion.div>

                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-purple-200 text-sm">{feature.description}</p>

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
    </section>
  );
}
