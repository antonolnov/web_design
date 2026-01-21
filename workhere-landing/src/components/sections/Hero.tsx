'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, Database, Users, Zap, Shield, Sparkles } from 'lucide-react';
import Container from '../ui/Container';
import MagneticButton from '../ui/MagneticButton';
import TextReveal from '../ui/TextReveal';
import AIBadge from '../ui/AIBadge';

const features = [
  { icon: Database, label: 'Единая база кандидатов' },
  { icon: Users, label: 'Воронка подбора' },
  { icon: Zap, label: 'Автоматизация' },
  { icon: Shield, label: 'Безопасность данных' },
];

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #f0f7ff 0%, #f5f9ff 50%, #f0f7ff 100%)' }}
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(24,144,255,0.15) 0%, transparent 70%)',
            y,
          }}
        />
        <motion.div
          className="absolute top-1/2 -left-40 w-[500px] h-[500px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(24,144,255,0.1) 0%, transparent 70%)',
            y: useTransform(scrollYProgress, [0, 1], [0, 150]),
          }}
        />
        
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(#1890ff 1px, transparent 1px), linear-gradient(90deg, #1890ff 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <Container className="relative z-10">
        <motion.div style={{ opacity }} className="max-w-5xl mx-auto text-center">
          {/* AI Badge - Interactive element */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center mb-6"
          >
            <AIBadge />
          </motion.div>

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-lg shadow-[#1890ff]/10 mb-8 border border-[#1890ff]/10"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#1890ff] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#1890ff]" />
            </span>
            <span className="text-sm font-medium text-gray-600">
              ATS-платформа для рекрутинга
            </span>
          </motion.div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-[1.1]">
            <TextReveal delay={0.2}>
              Единая система для
            </TextReveal>
            <br />
            <span className="text-[#1890ff]">
              <TextReveal delay={0.4}>
                управления наймом
              </TextReveal>
            </span>
          </h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Кандидаты, вакансии, воронки, коммуникации, аналитика — 
            всё в одном месте. Автоматизируйте рутину и фокусируйтесь на людях.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <MagneticButton
              href="#demo"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#1890ff] text-white font-semibold text-lg rounded-full shadow-lg shadow-[#1890ff]/30 hover:bg-[#0d6edb] transition-colors"
            >
              Запросить демо
              <ArrowRight size={20} />
            </MagneticButton>
            <MagneticButton
              href="#features"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-gray-700 font-semibold text-lg rounded-full shadow-lg border border-gray-200 hover:border-[#1890ff]/30 hover:text-[#1890ff] transition-all"
            >
              Возможности
            </MagneticButton>
          </motion.div>

          {/* Feature Pills */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-3"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.1 + index * 0.1, duration: 0.4 }}
                className="flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-gray-100 shadow-sm"
              >
                <feature.icon size={16} className="text-[#1890ff]" />
                <span className="text-sm text-gray-600">{feature.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </Container>

      {/* Scroll indicator - modern tech style */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.6 }}
      >
        {/* Animated chevrons */}
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            animate={{ 
              y: [0, 4, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{ 
              duration: 1.5, 
              repeat: Infinity, 
              delay: i * 0.15,
              ease: 'easeInOut',
            }}
          >
            <svg width="20" height="8" viewBox="0 0 20 8" fill="none">
              <motion.path
                d="M1 1L10 7L19 1"
                stroke="#1890ff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                animate={{
                  stroke: ['rgba(24,144,255,0.3)', 'rgba(24,144,255,0.8)', 'rgba(24,144,255,0.3)'],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: i * 0.15,
                }}
              />
            </svg>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
