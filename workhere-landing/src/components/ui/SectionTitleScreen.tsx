'use client';

import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

interface SectionTitleScreenProps {
  title: string;
  subtitle?: string;
  color?: 'blue' | 'purple' | 'teal' | 'orange' | 'green';
}

const colorConfigs = {
  blue: {
    gradient1: '#1890ff',
    gradient2: '#0d6edb',
    gradient3: '#40a9ff',
    accent: '#e6f7ff',
  },
  purple: {
    gradient1: '#8b5cf6',
    gradient2: '#7c3aed',
    gradient3: '#a78bfa',
    accent: '#f3e8ff',
  },
  teal: {
    gradient1: '#14b8a6',
    gradient2: '#0d9488',
    gradient3: '#2dd4bf',
    accent: '#ccfbf1',
  },
  orange: {
    gradient1: '#f97316',
    gradient2: '#ea580c',
    gradient3: '#fb923c',
    accent: '#ffedd5',
  },
  green: {
    gradient1: '#22c55e',
    gradient2: '#16a34a',
    gradient3: '#4ade80',
    accent: '#dcfce7',
  },
};

export default function SectionTitleScreen({ 
  title, 
  subtitle,
  color = 'blue' 
}: SectionTitleScreenProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-20%' });
  const config = colorConfigs[color];

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  // Parallax transforms
  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [50, -150]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.9]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  // Split title into letters for animation
  const letters = title.split('');

  return (
    <section 
      ref={ref}
      className="relative min-h-[70vh] flex items-center justify-center overflow-hidden"
    >
      {/* Animated mesh gradient background */}
      <div className="absolute inset-0">
        {/* Base gradient with animation */}
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              `radial-gradient(ellipse at 20% 20%, ${config.gradient1}40 0%, transparent 50%),
               radial-gradient(ellipse at 80% 80%, ${config.gradient2}30 0%, transparent 50%),
               radial-gradient(ellipse at 50% 50%, ${config.gradient3}20 0%, transparent 70%),
               linear-gradient(135deg, ${config.gradient1}15 0%, ${config.gradient2}10 100%)`,
              `radial-gradient(ellipse at 80% 20%, ${config.gradient2}40 0%, transparent 50%),
               radial-gradient(ellipse at 20% 80%, ${config.gradient3}30 0%, transparent 50%),
               radial-gradient(ellipse at 50% 50%, ${config.gradient1}20 0%, transparent 70%),
               linear-gradient(135deg, ${config.gradient2}15 0%, ${config.gradient1}10 100%)`,
              `radial-gradient(ellipse at 50% 80%, ${config.gradient3}40 0%, transparent 50%),
               radial-gradient(ellipse at 50% 20%, ${config.gradient1}30 0%, transparent 50%),
               radial-gradient(ellipse at 80% 50%, ${config.gradient2}20 0%, transparent 70%),
               linear-gradient(135deg, ${config.gradient3}15 0%, ${config.gradient1}10 100%)`,
            ],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
          }}
        />

        {/* Floating blur orbs with parallax */}
        <motion.div
          className="absolute w-[500px] h-[500px] rounded-full blur-3xl"
          style={{ 
            background: `${config.gradient1}30`,
            left: '10%',
            top: '20%',
            y: y1,
          }}
        />
        <motion.div
          className="absolute w-[400px] h-[400px] rounded-full blur-3xl"
          style={{ 
            background: `${config.gradient2}25`,
            right: '15%',
            bottom: '20%',
            y: y2,
          }}
        />
        <motion.div
          className="absolute w-[300px] h-[300px] rounded-full blur-2xl"
          style={{ 
            background: `${config.gradient3}35`,
            left: '50%',
            top: '50%',
            x: '-50%',
            y: y3,
          }}
        />

        {/* Animated gradient lines */}
        <svg className="absolute inset-0 w-full h-full opacity-20" preserveAspectRatio="none">
          <defs>
            <linearGradient id={`lineGrad-${color}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={config.gradient1} stopOpacity="0" />
              <stop offset="50%" stopColor={config.gradient2} stopOpacity="0.5" />
              <stop offset="100%" stopColor={config.gradient3} stopOpacity="0" />
            </linearGradient>
          </defs>
          {[...Array(5)].map((_, i) => (
            <motion.line
              key={i}
              x1="0%"
              y1={`${20 + i * 15}%`}
              x2="100%"
              y2={`${30 + i * 15}%`}
              stroke={`url(#lineGrad-${color})`}
              strokeWidth="1"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={isInView ? { pathLength: 1, opacity: 0.5 } : {}}
              transition={{ duration: 2, delay: i * 0.2 }}
            />
          ))}
        </svg>

        {/* Noise texture overlay */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Content */}
      <motion.div 
        className="relative z-10 text-center px-6"
        style={{ scale, opacity }}
      >
        {/* Title with letter-by-letter animation */}
        <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold text-gray-900 mb-6 overflow-hidden">
          {letters.map((letter, i) => (
            <motion.span
              key={i}
              className="inline-block"
              initial={{ y: 100, opacity: 0, rotateX: -90 }}
              animate={isInView ? { y: 0, opacity: 1, rotateX: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: i * 0.05,
                type: 'spring',
                stiffness: 100,
                damping: 12,
              }}
              style={{
                background: `linear-gradient(135deg, ${config.gradient1} 0%, ${config.gradient2} 100%)`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              {letter === ' ' ? '\u00A0' : letter}
            </motion.span>
          ))}
        </h2>
        
        {/* Subtitle with fade in */}
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
            animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
            transition={{ duration: 0.8, delay: letters.length * 0.05 + 0.2 }}
            className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto"
          >
            {subtitle}
          </motion.p>
        )}

        {/* Animated underline */}
        <motion.div
          className="mx-auto mt-8 h-1 rounded-full"
          style={{ background: `linear-gradient(90deg, ${config.gradient1}, ${config.gradient2}, ${config.gradient3})` }}
          initial={{ width: 0, opacity: 0 }}
          animate={isInView ? { width: 120, opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: letters.length * 0.05 + 0.4 }}
        />
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 1 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center text-gray-400"
        >
          <span className="text-sm mb-2">Листайте</span>
          <motion.div
            className="w-6 h-10 rounded-full border-2 border-gray-300 flex justify-center pt-2"
          >
            <motion.div
              className="w-1.5 h-3 rounded-full"
              style={{ background: config.gradient1 }}
              animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
