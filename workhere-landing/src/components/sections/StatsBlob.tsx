'use client';

import { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Building2, Users, TrendingUp } from 'lucide-react';
import Container from '../ui/Container';

const stats = [
  { icon: Building2, value: '1500+', label: 'Компаний', angle: 0 },
  { icon: Users, value: '10 000+', label: 'Рекрутеров', angle: 120 },
  { icon: TrendingUp, value: '3M+', label: 'Наймов в год', angle: 240 },
];

export default function StatsBlob() {
  const containerRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 50, damping: 20 });
  const rotation = useTransform(smoothProgress, [0, 1], [0, 360]);
  
  const blobScale = useTransform(smoothProgress, [0, 0.5, 1], [0.9, 1.05, 0.95]);
  
  const aiOpacity = useTransform(smoothProgress, [0.1, 0.25], [0, 1]);
  const aiScale = useTransform(smoothProgress, [0.1, 0.25], [0.5, 1]);

  const blobPaths = [
    "M100,15 C150,10 185,40 190,85 C195,130 175,170 135,185 C95,200 45,180 25,140 C5,100 20,50 60,25 C85,10 75,17 100,15",
    "M95,10 C145,0 190,35 195,90 C200,145 165,190 115,190 C65,190 15,150 10,95 C5,40 45,20 95,10",
    "M105,12 C155,5 190,45 188,95 C186,145 150,190 100,188 C50,186 10,145 12,95 C14,45 55,18 105,12",
  ];

  const orbitRadius = 160;

  return (
    <section 
      ref={containerRef} 
      className="relative py-8 overflow-hidden"
      style={{ 
        background: 'linear-gradient(180deg, #f0f7ff 0%, #e8f4ff 50%, #ffffff 100%)',
      }}
    >
      {/* Simple background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(24,144,255,0.1) 0%, transparent 70%)',
          }}
        />
      </div>

      <Container className="relative z-10">
        <div 
          className="flex items-center justify-center" 
          style={{ minHeight: '400px' }}
        >
          <div className="relative">
            
            {/* Blob container */}
            <motion.div
              className="relative cursor-pointer"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              style={{ scale: blobScale }}
            >
              {/* Soft glow behind blob */}
              <div
                className="absolute rounded-full pointer-events-none"
                style={{
                  width: 200,
                  height: 200,
                  left: '50%',
                  top: '50%',
                  transform: 'translate(-50%, -50%)',
                  background: 'radial-gradient(circle, rgba(24,144,255,0.25) 0%, transparent 70%)',
                  filter: 'blur(30px)',
                }}
              />

              {/* Outer ring - very subtle */}
              <motion.div
                className="absolute rounded-full pointer-events-none"
                style={{
                  width: 170,
                  height: 170,
                  left: '50%',
                  top: '50%',
                  transform: 'translate(-50%, -50%)',
                  border: '1px solid rgba(24,144,255,0.15)',
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              />

              {/* Clean blob */}
              <motion.div
                className="relative"
                style={{ width: 150, height: 150 }}
                animate={{ rotate: isHovered ? [0, 5, -3, 0] : 0 }}
                transition={{ duration: 0.4 }}
              >
                <svg 
                  viewBox="0 0 200 200" 
                  className="w-full h-full overflow-visible"
                  style={{ overflow: 'visible' }}
                >
                  <defs>
                    <linearGradient id="blobGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#40a9ff" />
                      <stop offset="100%" stopColor="#1890ff" />
                    </linearGradient>
                    <filter id="softShadow" x="-50%" y="-50%" width="200%" height="200%">
                      <feDropShadow dx="0" dy="8" stdDeviation="12" floodColor="#1890ff" floodOpacity="0.3"/>
                    </filter>
                  </defs>

                  <motion.path
                    fill="url(#blobGradient)"
                    filter="url(#softShadow)"
                    animate={{ d: blobPaths }}
                    transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                  />
                </svg>

                {/* AI text */}
                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  style={{ opacity: aiOpacity, scale: aiScale }}
                >
                  <span
                    className="text-white font-black text-5xl tracking-tight"
                    style={{ textShadow: '0 2px 15px rgba(0,0,0,0.3)' }}
                  >
                    AI
                  </span>
                </motion.div>

                {/* Hover effect */}
                {isHovered && [...Array(8)].map((_, i) => (
                  <motion.div
                    key={`p-${i}`}
                    className="absolute w-1.5 h-1.5 rounded-full bg-white pointer-events-none"
                    style={{ left: '50%', top: '50%' }}
                    initial={{ x: 0, y: 0, scale: 0, opacity: 0 }}
                    animate={{
                      x: Math.cos(i * 45 * Math.PI / 180) * 70,
                      y: Math.sin(i * 45 * Math.PI / 180) * 70,
                      scale: [0, 1, 0],
                      opacity: [0, 0.8, 0],
                    }}
                    transition={{ duration: 0.7 }}
                  />
                ))}
              </motion.div>
            </motion.div>

            {/* Orbiting cards */}
            {stats.map((stat) => (
              <motion.div
                key={stat.value}
                className="absolute"
                style={{ left: '50%', top: '50%' }}
              >
                <motion.div style={{ rotate: rotation }}>
                  <div style={{ transform: `rotate(${stat.angle}deg) translateY(-${orbitRadius}px)` }}>
                    <motion.div
                      style={{ rotate: useTransform(rotation, (r) => -r - stat.angle) }}
                    >
                      <div
                        className="rounded-2xl p-4 text-center bg-white"
                        style={{
                          minWidth: '110px',
                          transform: 'translate(-50%, -50%)',
                          boxShadow: '0 8px 32px rgba(0,0,0,0.08)',
                        }}
                      >
                        <div 
                          className="w-10 h-10 mx-auto mb-2 rounded-xl flex items-center justify-center"
                          style={{ background: 'linear-gradient(135deg, #e6f4ff 0%, #bae0ff 100%)' }}
                        >
                          <stat.icon className="text-[#1890ff]" size={20} />
                        </div>
                        <div className="text-lg font-bold text-gray-900">{stat.value}</div>
                        <div className="text-xs text-gray-500">{stat.label}</div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            ))}

            {/* Orbit path */}
            <div 
              className="absolute rounded-full border border-dashed pointer-events-none"
              style={{
                width: orbitRadius * 2,
                height: orbitRadius * 2,
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)',
                borderColor: 'rgba(24,144,255,0.1)',
              }}
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
