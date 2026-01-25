'use client';

import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Users, Briefcase, Building2, TrendingUp } from 'lucide-react';
import Container from '../ui/Container';
import CrazyBackground from '../ui/CrazyBackground';
import Mascot from '../ui/Mascot';
import Paws from '../ui/Paws';

const stats = [
  { 
    icon: Users, 
    value: '500K+', 
    label: 'Кандидатов в системе',
    description: 'Единая база резюме',
  },
  { 
    icon: Briefcase, 
    value: '50K+', 
    label: 'Активных вакансий',
    description: 'В реальном времени',
  },
  { 
    icon: Building2, 
    value: '2000+', 
    label: 'Компаний-клиентов',
    description: 'Доверяют WorkHere',
  },
  { 
    icon: TrendingUp, 
    value: '3x', 
    label: 'Рост эффективности',
    description: 'В среднем по клиентам',
  },
];

export default function StatsBlob() {
  const containerRef = useRef(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-10%' });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const blobScale = useTransform(smoothProgress, [0, 0.5, 1], [0.9, 1.05, 0.95]);
  const mascotY = useTransform(smoothProgress, [0, 1], [20, -20]);

  return (
    <section
      ref={containerRef}
      className="relative py-28 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #f5f9ff 0%, #e8f4ff 50%, #f0f7ff 100%)' }}
    >
      {/* Static gradient background */}
      <CrazyBackground variant="gradient" />
      <CrazyBackground variant="particles" intensity="low" />

      {/* Decorative Paws */}
      <Paws 
        size={90} 
        className="absolute top-20 right-16 hidden lg:block" 
        rotation={20}
        opacity={0.5}
      />
      <Paws 
        size={70} 
        className="absolute bottom-32 left-12 hidden lg:block" 
        rotation={-25}
        opacity={0.4}
        flip
      />

      <Container className="relative z-10">
        <div ref={ref} className="flex flex-col lg:flex-row items-center justify-between gap-16">
          {/* Stats Grid */}
          <motion.div 
            className="flex-1 grid grid-cols-2 gap-5"
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="relative bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer"
              >
                <div className="w-12 h-12 rounded-xl bg-[#e6f4ff] flex items-center justify-center mb-4">
                  <stat.icon size={24} className="text-[#1890ff]" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="font-medium text-gray-800 mb-1">{stat.label}</div>
                <div className="text-sm text-gray-500">{stat.description}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Blob with Mascot */}
          <motion.div
            className="flex-1 flex items-center justify-center relative"
            style={{ minHeight: 400 }}
          >
            {/* Simple blob - no blur */}
            <motion.div style={{ scale: blobScale }} className="absolute">
              <svg width="350" height="350" viewBox="0 0 400 400">
                <defs>
                  <linearGradient id="blobGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#1890ff" />
                    <stop offset="50%" stopColor="#40a9ff" />
                    <stop offset="100%" stopColor="#69c0ff" />
                  </linearGradient>
                </defs>
                <motion.path
                  fill="url(#blobGrad)"
                  opacity={0.8}
                  animate={{
                    d: [
                      "M200,50 C280,50 350,100 370,180 C390,260 350,340 280,360 C210,380 130,360 80,300 C30,240 30,160 80,100 C130,40 160,50 200,50",
                      "M200,60 C290,40 360,110 375,190 C380,270 340,350 260,370 C180,390 110,350 60,280 C10,210 20,120 90,70 C150,30 170,70 200,60",
                      "M200,50 C280,50 350,100 370,180 C390,260 350,340 280,360 C210,380 130,360 80,300 C30,240 30,160 80,100 C130,40 160,50 200,50",
                    ],
                  }}
                  transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                />
              </svg>
            </motion.div>

            {/* MASCOT - cat in box variant */}
            <motion.div className="relative z-10" style={{ y: mascotY }}>
              <Mascot size={220} variant="box" />
            </motion.div>

            {/* Orbiting elements - simple, no blur */}
            {[0, 120, 240].map((angle, i) => {
              const IconComponent = stats[i]?.icon;
              return (
                <motion.div
                  key={i}
                  className="absolute w-12 h-12 bg-white rounded-xl shadow-lg flex items-center justify-center"
                  style={{ left: '50%', top: '50%' }}
                  animate={{
                    x: Math.cos((angle + (i * 10)) * Math.PI / 180) * 150,
                    y: Math.sin((angle + (i * 10)) * Math.PI / 180) * 150,
                    rotate: [0, 360],
                  }}
                  transition={{ 
                    x: { duration: 25, repeat: Infinity, ease: "linear" },
                    y: { duration: 25, repeat: Infinity, ease: "linear" },
                    rotate: { duration: 25, repeat: Infinity, ease: "linear" },
                  }}
                >
                  {IconComponent && <IconComponent size={22} className="text-[#1890ff]" />}
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
