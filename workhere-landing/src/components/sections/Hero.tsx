'use client';

import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, Database, Users, Zap, Shield } from 'lucide-react';
import Container from '../ui/Container';
import MagneticButton from '../ui/MagneticButton';
import AIBadge from '../ui/AIBadge';
import Mascot from '../ui/Mascot';

const features = [
  { icon: Database, label: 'Единая база кандидатов' },
  { icon: Users, label: 'Воронка подбора' },
  { icon: Zap, label: 'Автоматизация' },
  { icon: Shield, label: 'Безопасность данных' },
];

// Floating particles
const particles = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  x: (i * 37) % 100,
  y: (i * 23) % 100,
  size: 3 + (i % 4) * 2,
  duration: 15 + (i % 5) * 3,
  delay: i * 0.2,
}));

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  
  const y = useTransform(smoothProgress, [0, 1], [0, 300]);
  const opacity = useTransform(smoothProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(smoothProgress, [0, 0.5], [1, 0.9]);
  const rotate = useTransform(smoothProgress, [0, 1], [0, -5]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #f0f7ff 0%, #e6f2ff 50%, #f5f9ff 100%)' }}
    >
      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute rounded-full bg-[#1890ff]"
            style={{
              width: p.size,
              height: p.size,
              left: `${p.x}%`,
              top: `${p.y}%`,
              opacity: 0.2,
            }}
            animate={{
              y: [-20, 20, -20],
              x: [-10, 10, -10],
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              delay: p.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Animated gradient orbs */}
      <motion.div
        className="absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(24,144,255,0.2) 0%, transparent 70%)',
          y,
        }}
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 10, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/3 -left-60 w-[600px] h-[600px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(24,144,255,0.15) 0%, transparent 70%)',
        }}
        animate={{
          scale: [1.1, 1, 1.1],
          x: [0, 30, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Grid pattern with motion */}
      <motion.div 
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: 'linear-gradient(#1890ff 1px, transparent 1px), linear-gradient(90deg, #1890ff 1px, transparent 1px)',
          backgroundSize: '60px 60px',
          y: useTransform(smoothProgress, [0, 1], [0, 50]),
        }}
      />

      {/* Mascot - floating in corner */}
      <motion.div
        className="absolute bottom-20 right-10 lg:right-20 z-20"
        initial={{ opacity: 0, x: 100, y: 50 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8, type: 'spring' }}
      >
        <motion.div
          animate={{
            y: [-10, 10, -10],
            rotate: [-3, 3, -3],
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          <Mascot size={150} />
        </motion.div>
      </motion.div>

      <Container className="relative z-10">
        <motion.div 
          style={{ opacity, scale, rotate }} 
          className="max-w-5xl mx-auto text-center"
        >
          {/* AI Badge */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
            className="flex justify-center mb-6"
          >
            <AIBadge />
          </motion.div>

          {/* Badge with pulse */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-lg shadow-[#1890ff]/10 mb-8 border border-[#1890ff]/10"
          >
            <motion.span 
              className="relative flex h-2 w-2"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#1890ff] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#1890ff]" />
            </motion.span>
            <span className="text-sm font-medium text-gray-600">
              ATS-платформа для рекрутинга
            </span>
          </motion.div>

          {/* Main Heading with staggered reveal */}
          <div className="overflow-hidden mb-6">
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-[1.1]"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3, type: 'spring', stiffness: 80 }}
            >
              Единая система для
            </motion.h1>
          </div>
          <div className="overflow-hidden mb-6">
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#1890ff] leading-[1.1]"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5, type: 'spring', stiffness: 80 }}
            >
              управления наймом
            </motion.h1>
          </div>

          {/* Subtitle with wave animation */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Кандидаты, вакансии, воронки, коммуникации, аналитика — 
            всё в одном месте. Автоматизируйте рутину и фокусируйтесь на людях.
          </motion.p>

          {/* CTA Buttons with magnetic effect */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <MagneticButton
              href="#demo"
              className="flex items-center justify-center gap-2 px-8 py-4 bg-[#1890ff] text-white font-semibold text-lg rounded-2xl shadow-lg shadow-[#1890ff]/30 hover:bg-[#40a9ff] transition-colors"
            >
              Запросить демо
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight size={20} />
              </motion.span>
            </MagneticButton>
            <MagneticButton
              href="#features"
              className="flex items-center justify-center gap-2 px-8 py-4 bg-white text-gray-700 font-semibold text-lg rounded-2xl border border-gray-200 hover:bg-gray-50 hover:border-[#1890ff]/30 transition-all"
            >
              Возможности
            </MagneticButton>
          </motion.div>

          {/* Feature pills with stagger */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-3"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.label}
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 1.2 + index * 0.1, type: 'spring', stiffness: 100 }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -3,
                  boxShadow: '0 10px 30px rgba(24,144,255,0.15)' 
                }}
                className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-md border border-gray-100 cursor-pointer"
              >
                <feature.icon size={18} className="text-[#1890ff]" />
                <span className="text-sm font-medium text-gray-700">{feature.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </Container>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center text-gray-400"
        >
          <span className="text-xs mb-2">Листайте вниз</span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
