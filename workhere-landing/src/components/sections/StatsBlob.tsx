'use client';

import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Users, Briefcase, Building2, Zap, TrendingUp, Clock, Check } from 'lucide-react';
import Container from '../ui/Container';
import CrazyBackground from '../ui/CrazyBackground';
import Mascot from '../ui/Mascot';

const stats = [
  { 
    icon: Users, 
    value: '500K+', 
    label: 'Кандидатов в системе',
    description: 'Единая база резюме',
    color: '#1890ff',
  },
  { 
    icon: Briefcase, 
    value: '50K+', 
    label: 'Активных вакансий',
    description: 'В реальном времени',
    color: '#40a9ff',
  },
  { 
    icon: Building2, 
    value: '2000+', 
    label: 'Компаний-клиентов',
    description: 'Доверяют WorkHere',
    color: '#69c0ff',
  },
  { 
    icon: TrendingUp, 
    value: '3x', 
    label: 'Рост эффективности',
    description: 'В среднем по клиентам',
    color: '#91d5ff',
  },
];

export default function StatsBlob() {
  const containerRef = useRef(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-10%' });
  const [hoveredStat, setHoveredStat] = useState<number | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  
  const blobScale = useTransform(smoothProgress, [0, 0.5, 1], [0.8, 1.1, 0.9]);
  const blobRotate = useTransform(smoothProgress, [0, 1], [0, 360]);
  const mascotY = useTransform(smoothProgress, [0, 1], [50, -50]);
  const mascotRotate = useTransform(smoothProgress, [0, 1], [-10, 10]);

  return (
    <section
      ref={containerRef}
      className="relative py-32 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #f5f9ff 0%, #e8f4ff 50%, #f0f7ff 100%)' }}
    >
      {/* CRAZY background */}
      <CrazyBackground variant="particles" intensity="high" />
      <CrazyBackground variant="blobs" intensity="medium" />

      {/* Animated circles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full border border-[#1890ff]/10"
            style={{
              width: 100 + i * 80,
              height: 100 + i * 80,
              left: '50%',
              top: '50%',
              x: '-50%',
              y: '-50%',
            }}
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.1, 0.3, 0.1],
              rotate: i % 2 === 0 ? [0, 360] : [360, 0],
            }}
            transition={{
              scale: { duration: 4 + i, repeat: Infinity, ease: "easeInOut" },
              opacity: { duration: 3 + i, repeat: Infinity, ease: "easeInOut" },
              rotate: { duration: 20 + i * 5, repeat: Infinity, ease: "linear" },
            }}
          />
        ))}
      </div>

      {/* Floating icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[Zap, Clock, Check, Users, Briefcase, TrendingUp].map((Icon, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${10 + (i * 15) % 80}%`,
              top: `${20 + (i * 12) % 60}%`,
            }}
            animate={{
              y: [0, -30, 0],
              rotate: [0, 360],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 5 + i,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          >
            <Icon size={20 + i * 5} className="text-[#1890ff]" />
          </motion.div>
        ))}
      </div>

      <Container className="relative z-10">
        <div ref={ref} className="flex flex-col lg:flex-row items-center justify-between gap-16">
          {/* Stats Grid */}
          <motion.div 
            className="flex-1 grid grid-cols-2 gap-6"
            initial={{ opacity: 0, x: -100 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, type: 'spring' }}
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 50, rotate: -5 }}
                animate={isInView ? { opacity: 1, y: 0, rotate: 0 } : {}}
                transition={{ delay: i * 0.15, type: 'spring', stiffness: 100 }}
                whileHover={{ 
                  y: -12, 
                  scale: 1.05, 
                  rotate: i % 2 === 0 ? 2 : -2,
                  boxShadow: '0 25px 50px rgba(24,144,255,0.2)'
                }}
                onHoverStart={() => setHoveredStat(i)}
                onHoverEnd={() => setHoveredStat(null)}
                className="relative bg-white rounded-3xl p-6 shadow-xl border border-gray-100 cursor-pointer overflow-hidden"
              >
                {/* Background glow on hover */}
                <motion.div
                  className="absolute inset-0 rounded-3xl"
                  style={{ background: `radial-gradient(circle at center, ${stat.color}15 0%, transparent 70%)` }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredStat === i ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                />
                
                <div className="relative">
                  <motion.div 
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4"
                    style={{ backgroundColor: `${stat.color}20` }}
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <stat.icon size={28} style={{ color: stat.color }} />
                  </motion.div>
                  
                  <motion.div 
                    className="text-4xl font-bold text-gray-900 mb-2"
                    animate={hoveredStat === i ? { scale: [1, 1.1, 1] } : {}}
                    transition={{ duration: 0.3 }}
                  >
                    {stat.value}
                  </motion.div>
                  
                  <div className="font-medium text-gray-800 mb-1">{stat.label}</div>
                  <div className="text-sm text-gray-500">{stat.description}</div>
                </div>

                {/* Shimmer effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent"
                  initial={{ x: '-100%' }}
                  animate={hoveredStat === i ? { x: '200%' } : { x: '-100%' }}
                  transition={{ duration: 0.6 }}
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Blob with Mascot */}
          <motion.div
            className="flex-1 flex items-center justify-center relative"
            style={{ minHeight: 450 }}
          >
            {/* Dynamic morphing blob */}
            <motion.div
              style={{ scale: blobScale, rotate: blobRotate }}
              className="absolute"
            >
              <svg width="420" height="420" viewBox="0 0 400 400">
                <defs>
                  <linearGradient id="blobGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#1890ff">
                      <animate attributeName="stop-color" values="#1890ff;#40a9ff;#1890ff" dur="4s" repeatCount="indefinite" />
                    </stop>
                    <stop offset="50%" stopColor="#40a9ff">
                      <animate attributeName="stop-color" values="#40a9ff;#69c0ff;#40a9ff" dur="4s" repeatCount="indefinite" />
                    </stop>
                    <stop offset="100%" stopColor="#69c0ff">
                      <animate attributeName="stop-color" values="#69c0ff;#91d5ff;#69c0ff" dur="4s" repeatCount="indefinite" />
                    </stop>
                  </linearGradient>
                  <filter id="glow2">
                    <feGaussianBlur stdDeviation="15" result="coloredBlur"/>
                    <feMerge>
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>
                <motion.path
                  fill="url(#blobGrad)"
                  filter="url(#glow2)"
                  opacity={0.85}
                  animate={{
                    d: [
                      "M200,50 C280,50 350,100 370,180 C390,260 350,340 280,360 C210,380 130,360 80,300 C30,240 30,160 80,100 C130,40 160,50 200,50",
                      "M200,60 C290,40 360,110 375,190 C380,270 340,350 260,370 C180,390 110,350 60,280 C10,210 20,120 90,70 C150,30 170,70 200,60",
                      "M200,45 C270,55 340,90 365,175 C395,255 360,345 290,365 C220,385 140,370 85,310 C35,250 40,150 95,90 C140,45 160,40 200,45",
                      "M200,50 C280,50 350,100 370,180 C390,260 350,340 280,360 C210,380 130,360 80,300 C30,240 30,160 80,100 C130,40 160,50 200,50",
                    ],
                  }}
                  transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                />
              </svg>
            </motion.div>

            {/* Inner glow rings */}
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full border-2 border-[#1890ff]"
                style={{
                  width: 150 + i * 60,
                  height: 150 + i * 60,
                  opacity: 0.2 - i * 0.05,
                }}
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.1, 0.3, 0.1],
                }}
                transition={{
                  duration: 3 + i,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.5,
                }}
              />
            ))}

            {/* MASCOT - Wild animation */}
            <motion.div
              className="relative z-10"
              style={{ y: mascotY, rotate: mascotRotate }}
            >
              <motion.div
                animate={{ 
                  y: [-10, 10, -10],
                  rotate: [-5, 5, -5],
                  scale: [1, 1.05, 1],
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <Mascot size={260} variant="crazy" />
              </motion.div>
            </motion.div>

            {/* Orbiting elements */}
            {[0, 90, 180, 270].map((angle, i) => {
              const IconComponent = stats[i]?.icon;
              return (
                <motion.div
                  key={i}
                  className="absolute w-14 h-14 bg-white rounded-2xl shadow-2xl flex items-center justify-center"
                  style={{
                    left: '50%',
                    top: '50%',
                  }}
                  animate={{
                    x: [
                      Math.cos((angle * Math.PI) / 180) * 180,
                      Math.cos(((angle + 360) * Math.PI) / 180) * 180,
                    ],
                    y: [
                      Math.sin((angle * Math.PI) / 180) * 180,
                      Math.sin(((angle + 360) * Math.PI) / 180) * 180,
                    ],
                    rotate: [0, 360],
                  }}
                  transition={{
                    x: { duration: 15, repeat: Infinity, ease: "linear" },
                    y: { duration: 15, repeat: Infinity, ease: "linear" },
                    rotate: { duration: 8, repeat: Infinity, ease: "linear" },
                  }}
                  whileHover={{ scale: 1.3 }}
                >
                  {IconComponent && <IconComponent size={24} className="text-[#1890ff]" />}
                </motion.div>
              );
            })}

            {/* Sparkle particles */}
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={`sparkle-${i}`}
                className="absolute w-2 h-2 rounded-full bg-[#1890ff]"
                style={{
                  left: '50%',
                  top: '50%',
                }}
                animate={{
                  x: [0, Math.cos((i * 30 * Math.PI) / 180) * 200],
                  y: [0, Math.sin((i * 30 * Math.PI) / 180) * 200],
                  opacity: [1, 0],
                  scale: [1, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.15,
                  ease: "easeOut",
                }}
              />
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
