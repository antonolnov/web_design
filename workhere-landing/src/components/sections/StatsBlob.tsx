'use client';

import { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Building2, Users, TrendingUp, Sparkles } from 'lucide-react';
import Container from '../ui/Container';
import Mascot from '../ui/Mascot';

const stats = [
  { icon: Building2, value: '1500+', label: 'Компаний', color: '#1890ff' },
  { icon: Users, value: '10 000+', label: 'Рекрутеров', color: '#52c41a' },
  { icon: TrendingUp, value: '3M+', label: 'Наймов в год', color: '#722ed1' },
];

export default function StatsBlob() {
  const containerRef = useRef(null);
  const [hoveredStat, setHoveredStat] = useState<number | null>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 50, damping: 20 });
  
  const blobScale = useTransform(smoothProgress, [0, 0.5, 1], [0.8, 1.1, 0.9]);
  const blobRotate = useTransform(smoothProgress, [0, 1], [0, 360]);
  const mascotY = useTransform(smoothProgress, [0, 0.5, 1], [50, 0, -30]);
  const mascotRotate = useTransform(smoothProgress, [0, 0.5, 1], [-10, 0, 10]);

  return (
    <section 
      ref={containerRef} 
      className="relative py-24 overflow-hidden"
      style={{ 
        background: 'linear-gradient(180deg, #f5f9ff 0%, #e8f4ff 50%, #f0f7ff 100%)',
      }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Floating circles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: 100 + i * 50,
              height: 100 + i * 50,
              left: `${(i * 15) % 80}%`,
              top: `${(i * 20) % 70}%`,
              background: `radial-gradient(circle, rgba(24,144,255,${0.05 - i * 0.005}) 0%, transparent 70%)`,
            }}
            animate={{
              x: [0, 30, 0],
              y: [0, -20, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <Container className="relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          {/* Left side - Stats */}
          <motion.div 
            className="flex-1 space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#1890ff]/10 rounded-full"
            >
              <Sparkles size={16} className="text-[#1890ff]" />
              <span className="text-sm font-medium text-[#1890ff]">Нам доверяют</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900"
            >
              Платформа, которой{' '}
              <span className="text-[#1890ff]">доверяют тысячи</span>{' '}
              компаний
            </motion.h2>

            <div className="space-y-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  onMouseEnter={() => setHoveredStat(index)}
                  onMouseLeave={() => setHoveredStat(null)}
                  whileHover={{ x: 10, scale: 1.02 }}
                  className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-lg cursor-pointer group"
                  style={{
                    boxShadow: hoveredStat === index 
                      ? `0 20px 40px ${stat.color}20` 
                      : '0 4px 20px rgba(0,0,0,0.05)',
                  }}
                >
                  <motion.div
                    className="w-14 h-14 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: `${stat.color}15` }}
                    animate={hoveredStat === index ? { rotate: [0, -10, 10, 0] } : {}}
                    transition={{ duration: 0.5 }}
                  >
                    <stat.icon size={24} style={{ color: stat.color }} />
                  </motion.div>
                  <div>
                    <motion.div 
                      className="text-3xl font-bold text-gray-900"
                      animate={hoveredStat === index ? { scale: [1, 1.1, 1] } : {}}
                    >
                      {stat.value}
                    </motion.div>
                    <div className="text-gray-500">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right side - Blob with mascot */}
          <motion.div 
            className="flex-1 flex items-center justify-center relative"
            style={{ minHeight: 400 }}
          >
            {/* Dynamic blob background */}
            <motion.div
              className="absolute"
              style={{ 
                scale: blobScale,
                rotate: blobRotate,
              }}
            >
              <svg width="400" height="400" viewBox="0 0 400 400">
                <defs>
                  <linearGradient id="blobGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#40a9ff" />
                    <stop offset="50%" stopColor="#1890ff" />
                    <stop offset="100%" stopColor="#0050b3" />
                  </linearGradient>
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="20" result="coloredBlur"/>
                    <feMerge>
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>
                <motion.path
                  d="M200,50 C280,50 350,100 370,180 C390,260 350,340 280,360 C210,380 130,360 80,300 C30,240 30,160 80,100 C130,40 160,50 200,50"
                  fill="url(#blobGradient)"
                  filter="url(#glow)"
                  animate={{
                    d: [
                      "M200,50 C280,50 350,100 370,180 C390,260 350,340 280,360 C210,380 130,360 80,300 C30,240 30,160 80,100 C130,40 160,50 200,50",
                      "M200,40 C290,60 360,110 375,190 C385,270 340,350 270,365 C200,380 120,355 70,290 C20,230 25,150 85,95 C145,35 150,45 200,40",
                      "M200,50 C280,50 350,100 370,180 C390,260 350,340 280,360 C210,380 130,360 80,300 C30,240 30,160 80,100 C130,40 160,50 200,50",
                    ],
                  }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                  opacity={0.9}
                />
              </svg>
            </motion.div>

            {/* Mascot on top of blob */}
            <motion.div
              className="relative z-10"
              style={{ y: mascotY, rotate: mascotRotate }}
            >
              <motion.div
                animate={{
                  y: [-5, 5, -5],
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <Mascot size={220} />
              </motion.div>
            </motion.div>

            {/* Orbiting elements */}
            {[0, 120, 240].map((angle, i) => {
              const IconComponent = stats[i]?.icon;
              return (
                <motion.div
                  key={i}
                  className="absolute w-12 h-12 bg-white rounded-xl shadow-lg flex items-center justify-center"
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                    delay: i * 0.5,
                  }}
                  style={{
                    transformOrigin: '200px 200px',
                    rotate: angle,
                  }}
                >
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear", delay: i * 0.5 }}
                  >
                    {IconComponent && <IconComponent size={20} className="text-[#1890ff]" />}
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
