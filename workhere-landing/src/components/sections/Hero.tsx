'use client';

import { motion, useScroll, useTransform, useSpring, useMotionValue, useAnimationFrame } from 'framer-motion';
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
  
  const y = useTransform(smoothProgress, [0, 1], [0, 400]);
  const opacity = useTransform(smoothProgress, [0, 0.4], [1, 0]);
  const scale = useTransform(smoothProgress, [0, 0.5], [1, 0.8]);
  const rotateX = useTransform(smoothProgress, [0, 0.5], [0, 15]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #f0f7ff 0%, #e0efff 50%, #f5f9ff 100%)' }}
    >
      {/* CRAZY BACKGROUND - Multiple layers */}
      <CrazyBackground variant="particles" intensity="insane" />
      <CrazyBackground variant="blobs" intensity="medium" />
      
      {/* Animated gradient mesh */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={`mesh-${i}`}
            className="absolute w-[150%] h-[150%] rounded-full"
            style={{
              background: `radial-gradient(ellipse at ${30 + i * 20}% ${20 + i * 30}%, rgba(24,144,255,${0.15 - i * 0.03}) 0%, transparent 50%)`,
              left: '-25%',
              top: '-25%',
            }}
            animate={{
              rotate: [0, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              rotate: { duration: 60 + i * 20, repeat: Infinity, ease: "linear" },
              scale: { duration: 15 + i * 5, repeat: Infinity, ease: "easeInOut" },
            }}
          />
        ))}
      </div>

      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={`shape-${i}`}
            className="absolute"
            style={{
              width: 20 + i * 10,
              height: 20 + i * 10,
              left: `${(i * 8) % 90}%`,
              top: `${(i * 7) % 80}%`,
              border: `2px solid rgba(24,144,255,${0.1 + (i % 3) * 0.1})`,
              borderRadius: i % 3 === 0 ? '50%' : i % 3 === 1 ? '30%' : '10%',
            }}
            animate={{
              rotate: [0, 360],
              y: [0, -30, 0],
              x: [0, i % 2 === 0 ? 20 : -20, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              rotate: { duration: 10 + i * 2, repeat: Infinity, ease: "linear" },
              y: { duration: 4 + i, repeat: Infinity, ease: "easeInOut" },
              x: { duration: 5 + i, repeat: Infinity, ease: "easeInOut" },
              scale: { duration: 3 + i, repeat: Infinity, ease: "easeInOut" },
            }}
          />
        ))}
      </div>

      {/* Light beams */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={`beam-${i}`}
            className="absolute h-[200%] w-px"
            style={{
              left: `${15 + i * 18}%`,
              top: '-50%',
              background: `linear-gradient(to bottom, transparent, rgba(24,144,255,0.1), transparent)`,
              transform: `rotate(${-30 + i * 5}deg)`,
            }}
            animate={{
              opacity: [0, 0.5, 0],
              x: [0, 100, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              delay: i * 1.5,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Pulsing rings */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={`ring-${i}`}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#1890ff]"
            style={{
              width: 200 + i * 150,
              height: 200 + i * 150,
            }}
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.05, 0.15, 0.05],
              rotate: i % 2 === 0 ? [0, 360] : [360, 0],
            }}
            transition={{
              scale: { duration: 4 + i, repeat: Infinity, ease: "easeInOut" },
              opacity: { duration: 3 + i, repeat: Infinity, ease: "easeInOut" },
              rotate: { duration: 30 + i * 10, repeat: Infinity, ease: "linear" },
            }}
          />
        ))}
      </div>

      {/* MASCOT - Floating wild animation */}
      <motion.div
        className="absolute bottom-10 right-5 lg:right-16 z-20"
        initial={{ opacity: 0, x: 200, rotate: 45 }}
        animate={{ opacity: 1, x: 0, rotate: 0 }}
        transition={{ delay: 0.8, duration: 1, type: 'spring', stiffness: 50 }}
      >
        <motion.div
          animate={{
            y: [-20, 20, -20],
            rotate: [-8, 8, -8],
            scale: [1, 1.05, 1],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <Mascot size={180} variant="crazy" />
        </motion.div>
        
        {/* Speech bubble */}
        <motion.div
          className="absolute -top-16 -left-20 bg-white rounded-2xl px-4 py-2 shadow-lg"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.5, type: 'spring' }}
        >
          <motion.span 
            className="text-sm font-medium text-gray-700"
            animate={{ opacity: [1, 0.5, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Привет! 👋
          </motion.span>
          <div className="absolute -bottom-2 right-8 w-4 h-4 bg-white transform rotate-45" />
        </motion.div>
      </motion.div>

      <Container className="relative z-10">
        <motion.div 
          style={{ opacity, scale, rotateX, transformPerspective: 1000 }} 
          className="max-w-5xl mx-auto text-center"
        >
          {/* AI Badge with glow effect */}
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.5 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, type: 'spring', stiffness: 80 }}
            className="flex justify-center mb-6"
          >
            <motion.div
              animate={{ 
                boxShadow: [
                  '0 0 20px rgba(24,144,255,0.3)',
                  '0 0 60px rgba(24,144,255,0.5)',
                  '0 0 20px rgba(24,144,255,0.3)',
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="rounded-full"
            >
              <AIBadge />
            </motion.div>
          </motion.div>

          {/* Animated badge */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, type: 'spring' }}
            whileHover={{ scale: 1.05, y: -3 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-white rounded-full shadow-xl shadow-[#1890ff]/20 mb-8 border border-[#1890ff]/20 cursor-pointer"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles size={16} className="text-[#1890ff]" />
            </motion.div>
            <span className="text-sm font-semibold text-gray-700">
              ATS-платформа нового поколения
            </span>
            <motion.span 
              className="w-2 h-2 rounded-full bg-green-500"
              animate={{ scale: [1, 1.3, 1], opacity: [1, 0.5, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </motion.div>

          {/* Main heading with crazy stagger */}
          <div className="overflow-hidden mb-4">
            <motion.h1
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-gray-900 leading-[1.05]"
              initial={{ y: 150, opacity: 0, skewY: 7 }}
              animate={{ y: 0, opacity: 1, skewY: 0 }}
              transition={{ duration: 1, delay: 0.3, type: 'spring', stiffness: 60 }}
            >
              Единая система
            </motion.h1>
          </div>
          <div className="overflow-hidden mb-6">
            <motion.h1
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.05]"
              style={{
                background: 'linear-gradient(135deg, #1890ff 0%, #40a9ff 50%, #1890ff 100%)',
                backgroundSize: '200% 200%',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
              initial={{ y: 150, opacity: 0, skewY: 7 }}
              animate={{ 
                y: 0, 
                opacity: 1, 
                skewY: 0,
                backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
              }}
              transition={{ 
                y: { duration: 1, delay: 0.5, type: 'spring', stiffness: 60 },
                backgroundPosition: { duration: 5, repeat: Infinity, ease: "linear" },
              }}
            >
              для найма
            </motion.h1>
          </div>

          {/* Subtitle with wave effect */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-lg md:text-xl lg:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Кандидаты, вакансии, воронки, коммуникации, аналитика — 
            <motion.span 
              className="text-[#1890ff] font-semibold"
              animate={{ opacity: [1, 0.7, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              {' '}всё в одном месте
            </motion.span>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <MagneticButton
                href="#demo"
                className="flex items-center justify-center gap-3 px-10 py-5 bg-gradient-to-r from-[#1890ff] to-[#40a9ff] text-white font-bold text-lg rounded-2xl shadow-2xl shadow-[#1890ff]/40 hover:shadow-[#1890ff]/60 transition-shadow"
              >
                <motion.span
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  🚀
                </motion.span>
                Запросить демо
                <motion.span
                  animate={{ x: [0, 8, 0] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  <ArrowRight size={22} />
                </motion.span>
              </MagneticButton>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <MagneticButton
                href="#features"
                className="flex items-center justify-center gap-2 px-10 py-5 bg-white text-gray-700 font-bold text-lg rounded-2xl border-2 border-gray-200 hover:border-[#1890ff] transition-colors shadow-lg"
              >
                Возможности
              </MagneticButton>
            </motion.div>
          </motion.div>

          {/* Feature pills with stagger and hover */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.label}
                initial={{ opacity: 0, y: 30, rotate: -5 }}
                animate={{ opacity: 1, y: 0, rotate: 0 }}
                transition={{ delay: 1.3 + index * 0.15, type: 'spring', stiffness: 100 }}
                whileHover={{ 
                  scale: 1.1, 
                  y: -8,
                  rotate: index % 2 === 0 ? 3 : -3,
                  boxShadow: '0 20px 40px rgba(24,144,255,0.2)' 
                }}
                className="flex items-center gap-3 px-5 py-3 bg-white rounded-2xl shadow-lg border border-gray-100 cursor-pointer"
              >
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.5 }}
                >
                  <feature.icon size={22} className="text-[#1890ff]" />
                </motion.div>
                <span className="font-medium text-gray-700">{feature.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </Container>

      {/* Scroll indicator - bouncing */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2 }}
      >
        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center text-gray-400 cursor-pointer hover:text-[#1890ff] transition-colors"
        >
          <motion.div
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <span className="text-sm font-medium mb-2">Листайте</span>
          </motion.div>
          <motion.svg 
            width="28" 
            height="28" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2"
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1, repeat: Infinity }}
          >
            <path d="M12 5v14M5 12l7 7 7-7" />
          </motion.svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
