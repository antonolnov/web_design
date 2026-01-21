'use client';

import { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Building2, Users, Sparkles, TrendingUp } from 'lucide-react';
import Container from '../ui/Container';

const stats = [
  { icon: Building2, value: '1500+', label: 'Компаний' },
  { icon: Users, value: '10 000+', label: 'Рекрутеров' },
  { icon: Sparkles, value: 'AI', label: '' },
  { icon: TrendingUp, value: '3M+', label: 'Наймов в год' },
];

export default function StatsBlob() {
  const containerRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 30, damping: 25 });
  const orbitAngle = useTransform(smoothProgress, [0, 1], [0, 360]);
  
  // AI text reveal on scroll
  const aiOpacity = useTransform(smoothProgress, [0.2, 0.4], [0, 1]);
  const aiScale = useTransform(smoothProgress, [0.2, 0.4], [0.5, 1]);

  return (
    <section 
      ref={containerRef} 
      className="relative py-32 overflow-hidden"
      style={{ 
        minHeight: '100vh',
        perspective: '1200px',
        background: 'linear-gradient(180deg, #f0f7ff 0%, #e8f4ff 30%, #f0f7ff 60%, #ffffff 100%)',
      }}
    >
      {/* Seamless top transition */}
      <div 
        className="absolute top-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: 'linear-gradient(180deg, #f0f7ff 0%, transparent 100%)' }}
      />

      {/* Ambient glow */}
      <motion.div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(24,144,255,0.12) 0%, transparent 50%)',
          filter: 'blur(60px)',
        }}
      />

      <Container className="relative z-10">
        <div 
          className="flex items-center justify-center" 
          style={{ minHeight: '550px', transformStyle: 'preserve-3d' }}
        >
          <div 
            className="relative"
            style={{ transformStyle: 'preserve-3d', transform: 'rotateX(5deg)' }}
          >
            {/* Ribbed Organic Blob */}
            <motion.div
              className="relative cursor-pointer"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              animate={{ scale: isHovered ? 1.05 : 1 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              {/* Electric arcs */}
              {[...Array(16)].map((_, i) => (
                <motion.div
                  key={`arc-${i}`}
                  className="absolute pointer-events-none"
                  style={{
                    left: '50%',
                    top: '50%',
                    width: 2,
                    height: 40 + Math.random() * 50,
                    transformOrigin: 'center top',
                    transform: `rotate(${i * 22.5}deg) translateX(-50%)`,
                  }}
                >
                  <motion.div
                    className="w-full h-full"
                    style={{
                      background: 'linear-gradient(to bottom, rgba(24,144,255,0.8) 0%, rgba(64,169,255,0.4) 50%, transparent 100%)',
                      filter: 'blur(1px)',
                      borderRadius: '2px',
                    }}
                    animate={{ opacity: [0, 1, 0], scaleY: [0, 1, 0] }}
                    transition={{
                      duration: 0.3 + Math.random() * 0.3,
                      repeat: Infinity,
                      delay: Math.random() * 2,
                      repeatDelay: 1 + Math.random() * 2,
                    }}
                  />
                </motion.div>
              ))}

              {/* Glow */}
              <motion.div
                className="absolute rounded-full pointer-events-none"
                style={{
                  width: 220,
                  height: 220,
                  left: '50%',
                  top: '50%',
                  x: '-50%',
                  y: '-50%',
                  background: 'radial-gradient(circle, rgba(24,144,255,0.4) 0%, transparent 60%)',
                  filter: 'blur(30px)',
                }}
                animate={{
                  scale: isHovered ? 1.4 : [1, 1.15, 1],
                  opacity: isHovered ? 1 : [0.6, 0.8, 0.6],
                }}
                transition={{ duration: 2, repeat: isHovered ? 0 : Infinity }}
              />

              {/* Shadow */}
              <div
                className="absolute rounded-[50%] bg-black/10 pointer-events-none"
                style={{
                  width: 120,
                  height: 20,
                  left: '50%',
                  bottom: -35,
                  transform: 'translateX(-50%)',
                  filter: 'blur(10px)',
                }}
              />

              {/* RIBBED ORGANIC BLOB using SVG */}
              <motion.div
                className="relative"
                style={{ width: 160, height: 160 }}
                animate={{ rotate: isHovered ? 15 : 0 }}
                transition={{ duration: 0.5 }}
              >
                <svg viewBox="0 0 200 200" className="w-full h-full" style={{ filter: 'drop-shadow(0 10px 40px rgba(24,144,255,0.4))' }}>
                  <defs>
                    {/* Main gradient */}
                    <linearGradient id="blobGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#69c0ff" />
                      <stop offset="30%" stopColor="#40a9ff" />
                      <stop offset="60%" stopColor="#1890ff" />
                      <stop offset="100%" stopColor="#0050b3" />
                    </linearGradient>
                    
                    {/* Highlight gradient */}
                    <radialGradient id="highlight" cx="30%" cy="30%" r="50%">
                      <stop offset="0%" stopColor="rgba(255,255,255,0.6)" />
                      <stop offset="100%" stopColor="transparent" />
                    </radialGradient>

                    {/* Shadow gradient */}
                    <radialGradient id="innerShadow" cx="70%" cy="70%" r="50%">
                      <stop offset="0%" stopColor="rgba(0,0,0,0.3)" />
                      <stop offset="100%" stopColor="transparent" />
                    </radialGradient>
                  </defs>

                  {/* Main ribbed blob shape */}
                  <motion.path
                    fill="url(#blobGradient)"
                    animate={{
                      d: [
                        "M100,20 C130,20 150,35 160,50 C175,70 180,95 175,120 C170,145 155,165 130,175 C105,185 75,180 55,165 C35,150 20,125 25,95 C30,65 50,40 75,28 C85,23 95,20 100,20 Z",
                        "M100,25 C125,22 155,40 165,60 C178,85 175,115 165,140 C152,165 125,180 95,178 C65,176 40,155 30,125 C20,95 28,60 50,40 C70,22 90,25 100,25 Z",
                        "M100,20 C130,20 150,35 160,50 C175,70 180,95 175,120 C170,145 155,165 130,175 C105,185 75,180 55,165 C35,150 20,125 25,95 C30,65 50,40 75,28 C85,23 95,20 100,20 Z",
                      ],
                    }}
                    transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                  />

                  {/* Rib lines - rotating */}
                  <g opacity="0.3">
                    <motion.ellipse
                      cx="100" cy="100" rx="70" ry="25"
                      fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5"
                      animate={{ rotate: 360 }}
                      style={{ transformOrigin: 'center' }}
                      transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                    />
                    <motion.ellipse
                      cx="100" cy="100" rx="60" ry="20"
                      fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="1"
                      animate={{ rotate: -360 }}
                      style={{ transformOrigin: 'center' }}
                      transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                    />
                    <motion.ellipse
                      cx="100" cy="100" rx="50" ry="15"
                      fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1"
                      animate={{ rotate: 360 }}
                      style={{ transformOrigin: 'center' }}
                      transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
                    />
                  </g>

                  {/* Highlight overlay */}
                  <motion.ellipse
                    cx="70" cy="60" rx="35" ry="25"
                    fill="url(#highlight)"
                    animate={{
                      cx: [70, 75, 70],
                      cy: [60, 55, 60],
                    }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  />

                  {/* Inner shadow */}
                  <ellipse cx="130" cy="140" rx="30" ry="20" fill="url(#innerShadow)" />
                </svg>

                {/* AI text appearing on scroll */}
                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  style={{ opacity: aiOpacity, scale: aiScale }}
                >
                  <motion.span
                    className="text-white font-black text-5xl tracking-wider"
                    style={{ 
                      textShadow: '0 2px 20px rgba(0,0,0,0.4), 0 0 40px rgba(255,255,255,0.3)',
                      fontFamily: 'system-ui, -apple-system, sans-serif',
                    }}
                    animate={{
                      textShadow: isHovered 
                        ? ['0 0 20px rgba(255,255,255,0.8)', '0 0 40px rgba(255,255,255,1)', '0 0 20px rgba(255,255,255,0.8)']
                        : '0 2px 20px rgba(0,0,0,0.4)',
                    }}
                    transition={{ duration: 1, repeat: isHovered ? Infinity : 0 }}
                  >
                    AI
                  </motion.span>
                </motion.div>

                {/* Hover energy effect */}
                {isHovered && (
                  <>
                    {[...Array(12)].map((_, i) => (
                      <motion.div
                        key={`energy-${i}`}
                        className="absolute w-2 h-2 bg-white rounded-full pointer-events-none"
                        style={{
                          left: '50%',
                          top: '50%',
                          boxShadow: '0 0 10px rgba(255,255,255,0.8)',
                        }}
                        initial={{ x: 0, y: 0, scale: 0 }}
                        animate={{
                          x: Math.cos(i * 30 * Math.PI / 180) * 120,
                          y: Math.sin(i * 30 * Math.PI / 180) * 120,
                          scale: [0, 1, 0],
                          opacity: [0, 1, 0],
                        }}
                        transition={{ duration: 1, delay: i * 0.03 }}
                      />
                    ))}
                  </>
                )}
              </motion.div>
            </motion.div>

            {/* 3D Orbiting Cards */}
            {stats.map((stat, index) => {
              const baseAngle = index * 90;
              const orbitRadius = 180;
              
              return (
                <motion.div
                  key={stat.value}
                  className="absolute pointer-events-none"
                  style={{ left: '50%', top: '50%', transformStyle: 'preserve-3d' }}
                >
                  <motion.div
                    style={{
                      transformStyle: 'preserve-3d',
                      rotateY: useTransform(orbitAngle, (angle) => angle + baseAngle),
                    }}
                  >
                    <motion.div
                      className="absolute"
                      style={{ transform: `translateX(${orbitRadius}px)`, transformStyle: 'preserve-3d' }}
                    >
                      <motion.div
                        className="pointer-events-auto"
                        style={{
                          rotateY: useTransform(orbitAngle, (angle) => -(angle + baseAngle)),
                          opacity: useTransform(orbitAngle, (angle) => {
                            const cardAngle = (angle + baseAngle) % 360;
                            const rad = cardAngle * Math.PI / 180;
                            return 0.5 + 0.5 * Math.max(0, (Math.cos(rad) + 0.3) / 1.3);
                          }),
                          scale: useTransform(orbitAngle, (angle) => {
                            const cardAngle = (angle + baseAngle) % 360;
                            const rad = cardAngle * Math.PI / 180;
                            return 0.85 + 0.15 * (Math.cos(rad) + 1) / 2;
                          }),
                        }}
                      >
                        <motion.div
                          className="rounded-[18px] p-4 min-w-[115px] text-center"
                          style={{
                            background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
                            boxShadow: '0 12px 40px rgba(0,0,0,0.12), 0 0 0 1px rgba(24,144,255,0.08)',
                          }}
                          whileHover={{ 
                            scale: 1.08, 
                            boxShadow: '0 20px 50px rgba(24,144,255,0.2)',
                          }}
                        >
                          <div 
                            className="w-10 h-10 mx-auto mb-2 rounded-[10px] flex items-center justify-center"
                            style={{ background: 'linear-gradient(135deg, #e6f4ff 0%, #bae0ff 100%)' }}
                          >
                            <stat.icon className="text-[#1890ff]" size={20} />
                          </div>
                          <div className="text-xl font-bold text-gray-900">{stat.value}</div>
                          {stat.label && (
                            <div className="text-xs text-gray-500 mt-0.5">{stat.label}</div>
                          )}
                        </motion.div>
                      </motion.div>
                    </motion.div>
                  </motion.div>
                </motion.div>
              );
            })}

            {/* Orbit path */}
            <div 
              className="absolute rounded-full border border-[#1890ff]/10 pointer-events-none"
              style={{
                width: 360,
                height: 360,
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%) rotateX(70deg)',
              }}
            />
          </div>
        </div>
      </Container>

      {/* Bottom transition */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none"
        style={{ background: 'linear-gradient(180deg, transparent 0%, #ffffff 100%)' }}
      />
    </section>
  );
}
