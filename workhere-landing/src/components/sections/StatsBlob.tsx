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
  
  // Blob transforms
  const blobRotateY = useTransform(smoothProgress, [0, 0.5, 1], [-15, 10, -15]);
  const blobScale = useTransform(smoothProgress, [0, 0.5, 1], [0.9, 1.05, 0.95]);
  
  // AI text reveal
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
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(24,144,255,0.08) 0%, transparent 60%)',
            filter: 'blur(40px)',
          }}
        />
      </div>

      <Container className="relative z-10">
        <div 
          className="flex items-center justify-center" 
          style={{ minHeight: '400px' }}
        >
          <div className="relative">
            
            {/* Blob */}
            <motion.div
              className="relative cursor-pointer"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              style={{
                rotateY: blobRotateY,
                scale: blobScale,
              }}
            >
              {/* Glow */}
              <motion.div
                className="absolute rounded-full pointer-events-none"
                style={{
                  width: 300,
                  height: 300,
                  left: '50%',
                  top: '50%',
                  x: '-50%',
                  y: '-50%',
                  background: 'radial-gradient(circle, rgba(24,144,255,0.4) 0%, rgba(24,144,255,0.15) 40%, transparent 60%)',
                  filter: 'blur(40px)',
                }}
                animate={{
                  scale: isHovered ? 1.3 : [1, 1.15, 1],
                  opacity: isHovered ? 0.8 : [0.5, 0.7, 0.5],
                }}
                transition={{ duration: isHovered ? 0.3 : 3, repeat: isHovered ? 0 : Infinity }}
              />

              {/* Electric effect */}
              {[...Array(12)].map((_, i) => (
                <motion.div
                  key={`bolt-${i}`}
                  className="absolute pointer-events-none"
                  style={{
                    left: '50%',
                    top: '50%',
                    width: 2,
                    height: 35 + (i % 3) * 15,
                    transformOrigin: 'center top',
                    rotate: i * 30,
                    background: 'linear-gradient(to bottom, rgba(255,255,255,0.8) 0%, rgba(24,144,255,0.6) 50%, transparent 100%)',
                    borderRadius: 2,
                  }}
                  animate={{
                    opacity: [0, 0.7, 0],
                    scaleY: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 0.25,
                    repeat: Infinity,
                    delay: (i % 5) * 0.3,
                    repeatDelay: 1.5,
                  }}
                />
              ))}

              {/* Rings */}
              {[0, 1].map((ring) => (
                <motion.div
                  key={`ring-${ring}`}
                  className="absolute rounded-full pointer-events-none"
                  style={{
                    width: 160 + ring * 30,
                    height: 160 + ring * 30,
                    left: '50%',
                    top: '50%',
                    x: '-50%',
                    y: '-50%',
                    border: `${1.5 - ring * 0.5}px solid rgba(24,144,255,${0.2 - ring * 0.05})`,
                  }}
                  animate={{ rotate: ring % 2 === 0 ? 360 : -360 }}
                  transition={{ duration: 15 + ring * 5, repeat: Infinity, ease: 'linear' }}
                />
              ))}

              {/* Shadow */}
              <div
                className="absolute rounded-[50%] bg-black/15 pointer-events-none"
                style={{
                  width: 120,
                  height: 20,
                  left: '50%',
                  bottom: -30,
                  transform: 'translateX(-50%)',
                  filter: 'blur(12px)',
                }}
              />

              {/* Blob SVG */}
              <motion.div
                className="relative"
                style={{ width: 150, height: 150 }}
                animate={{ rotate: isHovered ? [0, 10, -5, 0] : 0 }}
                transition={{ duration: 0.5 }}
              >
                <svg 
                  viewBox="0 0 200 200" 
                  className="w-full h-full" 
                  style={{ filter: 'drop-shadow(0 15px 40px rgba(24,144,255,0.4))' }}
                >
                  <defs>
                    <linearGradient id="blobGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#91d5ff" />
                      <stop offset="50%" stopColor="#40a9ff" />
                      <stop offset="100%" stopColor="#1890ff" />
                    </linearGradient>
                    <radialGradient id="shine" cx="30%" cy="30%" r="50%">
                      <stop offset="0%" stopColor="rgba(255,255,255,0.6)" />
                      <stop offset="100%" stopColor="transparent" />
                    </radialGradient>
                  </defs>

                  <motion.path
                    fill="url(#blobGrad)"
                    animate={{ d: blobPaths }}
                    transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                  />

                  {/* White highlight only */}
                  <ellipse cx="65" cy="60" rx="35" ry="28" fill="url(#shine)" />

                  {/* Subtle inner ring */}
                  <motion.ellipse
                    cx="100" cy="100" rx="50" ry="16"
                    fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1"
                    animate={{ rotate: 360 }}
                    style={{ transformOrigin: 'center' }}
                    transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
                  />
                </svg>

                {/* AI text */}
                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  style={{ opacity: aiOpacity, scale: aiScale }}
                >
                  <motion.span
                    className="text-white font-black text-5xl tracking-tight"
                    style={{ textShadow: '0 3px 20px rgba(0,0,0,0.4)' }}
                    animate={isHovered ? {
                      textShadow: ['0 0 20px #fff', '0 0 40px #fff', '0 0 20px #fff'],
                      scale: [1, 1.1, 1],
                    } : {}}
                    transition={{ duration: 0.6, repeat: isHovered ? Infinity : 0 }}
                  >
                    AI
                  </motion.span>
                </motion.div>

                {/* Hover particles */}
                {isHovered && [...Array(10)].map((_, i) => (
                  <motion.div
                    key={`p-${i}`}
                    className="absolute w-1.5 h-1.5 rounded-full bg-white pointer-events-none"
                    style={{ left: '50%', top: '50%', boxShadow: '0 0 8px #fff' }}
                    initial={{ x: 0, y: 0, scale: 0 }}
                    animate={{
                      x: Math.cos(i * 36 * Math.PI / 180) * 80,
                      y: Math.sin(i * 36 * Math.PI / 180) * 80,
                      scale: [0, 1, 0],
                      opacity: [0, 1, 0],
                    }}
                    transition={{ duration: 0.8 }}
                  />
                ))}
              </motion.div>
            </motion.div>

            {/* Orbiting cards - FIXED: no rotation on cards */}
            {stats.map((stat) => (
              <motion.div
                key={stat.value}
                className="absolute"
                style={{ 
                  left: '50%', 
                  top: '50%',
                }}
              >
                <motion.div
                  style={{ rotate: rotation }}
                >
                  <div
                    style={{
                      transform: `rotate(${stat.angle}deg) translateY(-${orbitRadius}px)`,
                    }}
                  >
                    {/* Counter-rotate to keep card upright */}
                    <motion.div
                      style={{
                        rotate: useTransform(rotation, (r) => -r - stat.angle),
                      }}
                    >
                      <div
                        className="rounded-2xl p-4 text-center bg-white shadow-lg"
                        style={{
                          minWidth: '110px',
                          transform: 'translate(-50%, -50%)',
                          boxShadow: '0 10px 40px rgba(0,0,0,0.08)',
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

            {/* Orbit ring */}
            <div 
              className="absolute rounded-full border border-dashed border-[#1890ff]/10 pointer-events-none"
              style={{
                width: orbitRadius * 2,
                height: orbitRadius * 2,
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)',
              }}
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
