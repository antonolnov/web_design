'use client';

import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, Database, Users, Zap, Shield, Sparkles } from 'lucide-react';
import Container from '../ui/Container';
import MagneticButton from '../ui/MagneticButton';
import AIBadge from '../ui/AIBadge';
import Mascot from '../ui/Mascot';
import CrazyBackground from '../ui/CrazyBackground';

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

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const opacity = useTransform(smoothProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(smoothProgress, [0, 0.5], [1, 0.95]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #f0f7ff 0%, #e0efff 50%, #f5f9ff 100%)' }}
    >
      {/* Static gradient background - NO blur, NO animation on large elements */}
      <CrazyBackground variant="gradient" />
      <CrazyBackground variant="particles" intensity="low" />

      {/* MASCOT */}
      <motion.div
        className="absolute bottom-16 right-8 lg:right-20 z-20"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        <Mascot size={150} />
      </motion.div>

      <Container className="relative z-10">
        <motion.div 
          style={{ opacity, scale }} 
          className="max-w-5xl mx-auto text-center"
        >
          {/* AI Badge */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
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
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-white rounded-full shadow-lg mb-8 border border-[#1890ff]/10"
          >
            <Sparkles size={16} className="text-[#1890ff]" />
            <span className="text-sm font-semibold text-gray-700">ATS-платформа нового поколения</span>
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          </motion.div>

          {/* Main heading */}
          <motion.h1
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-gray-900 leading-[1.05] mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Единая система
          </motion.h1>
          <motion.h1
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.05] mb-6 text-[#1890ff]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            для найма
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="text-lg md:text-xl lg:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Кандидаты, вакансии, воронки, коммуникации, аналитика — 
            <span className="text-[#1890ff] font-semibold"> всё в одном месте</span>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <MagneticButton
              href="#demo"
              className="flex items-center justify-center gap-3 px-10 py-5 bg-gradient-to-r from-[#1890ff] to-[#40a9ff] text-white font-bold text-lg rounded-2xl shadow-xl hover:shadow-2xl transition-shadow"
            >
              🚀 Запросить демо
              <ArrowRight size={20} />
            </MagneticButton>
            
            <MagneticButton
              href="#features"
              className="flex items-center justify-center gap-2 px-10 py-5 bg-white text-gray-700 font-bold text-lg rounded-2xl border-2 border-gray-200 hover:border-[#1890ff]/30 transition-colors shadow-lg"
            >
              Возможности
            </MagneticButton>
          </motion.div>

          {/* Feature pills */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.label}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 + index * 0.1 }}
                className="flex items-center gap-3 px-5 py-3 bg-white rounded-2xl shadow-md border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all cursor-pointer"
              >
                <feature.icon size={20} className="text-[#1890ff]" />
                <span className="font-medium text-gray-700">{feature.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </Container>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center text-gray-400"
        >
          <span className="text-sm font-medium mb-2">Листайте</span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
