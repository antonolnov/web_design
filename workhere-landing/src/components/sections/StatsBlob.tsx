'use client';

import { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Building2, Users, TrendingUp } from 'lucide-react';
import Container from '../ui/Container';

// Only 3 cards - no AI card
const stats = [
  { icon: Building2, value: '1500+', label: 'Компаний', baseAngle: 0 },
  { icon: Users, value: '10 000+', label: 'Рекрутеров', baseAngle: 120 },
  { icon: TrendingUp, value: '3M+', label: 'Наймов в год', baseAngle: 240 },
];

export default function StatsBlob() {
  const containerRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 40, damping: 20 });
  const rotation = useTransform(smoothProgress, [0, 1], [0, 540]);
  
  // Blob transforms on scroll
  const blobRotateX = useTransform(smoothProgress, [0, 0.3, 0.7, 1], [30, -5, 10, -20]);
  const blobRotateY = useTransform(smoothProgress, [0, 0.5, 1], [-30, 15, -25]);
  const blobScale = useTransform(smoothProgress, [0, 0.5, 1], [0.8, 1.1, 0.9]);
  
  // AI text reveal
  const aiOpacity = useTransform(smoothProgress, [0.15, 0.35], [0, 1]);
  const aiScale = useTransform(smoothProgress, [0.15, 0.35], [0.3, 1]);

  const blobPaths = [
    "M100,10 C155,5 190,40 195,85 C200,130 175,175 135,190 C90,205 40,185 20,140 C0,95 15,45 55,20 C80,5 70,12 100,10",
    "M95,5 C150,-5 200,35 200,90 C200,145 165,195 110,195 C55,195 10,155 5,100 C0,45 40,15 95,5",
    "M110,8 C165,0 195,45 190,100 C185,155 145,200 90,195 C35,190 -5,140 5,85 C15,30 55,15 110,8",
    "M90,12 C145,2 185,30 195,80 C205,130 180,185 125,192 C70,199 15,165 8,110 C1,55 35,22 90,12",
    "M105,5 C160,0 200,50 195,105 C190,160 150,200 95,198 C40,196 0,150 5,95 C10,40 50,10 105,5",
  ];

  const orbitRadius = 200;

  return (
    <section 
      ref={containerRef} 
      className="relative py-16 overflow-hidden"
      style={{ 
        minHeight: '100vh',
        background: 'linear-gradient(180deg, #f0f7ff 0%, #e0efff 30%, #eef6ff 60%, #ffffff 100%)',
      }}
    >
      {/* Immersive background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <motion.div
            key={`layer-${i}`}
            className="absolute rounded-full"
            style={{
              width: 300 + i * 180,
              height: 300 + i * 180,
              left: `${25 + (i % 3) * 20}%`,
              top: `${15 + (i % 2) * 25}%`,
              background: `radial-gradient(circle, rgba(24,144,255,${0.12 - i * 0.015}) 0%, transparent 55%)`,
              filter: `blur(${50 + i * 15}px)`,
            }}
            animate={{
              x: [0, 40 - i * 15, 0],
              y: [0, 25 + i * 8, 0],
              scale: [1, 1.08, 1],
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      <Container className="relative z-10">
        <div 
          className="flex items-center justify-center" 
          style={{ minHeight: '550px', perspective: '1000px' }}
        >
          <div className="relative" style={{ transformStyle: 'preserve-3d' }}>
            
            {/* THE DYNAMIC BLOB */}
            <motion.div
              className="relative cursor-pointer"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              style={{
                rotateX: blobRotateX,
                rotateY: blobRotateY,
                scale: blobScale,
              }}
            >
              {/* Glow */}
              <motion.div
                className="absolute rounded-full pointer-events-none"
                style={{
                  width: 400,
                  height: 400,
                  left: '50%',
                  top: '50%',
                  x: '-50%',
                  y: '-50%',
                  background: 'radial-gradient(circle, rgba(24,144,255,0.5) 0%, rgba(64,169,255,0.25) 35%, transparent 60%)',
                  filter: 'blur(50px)',
                }}
                animate={{
                  scale: isHovered ? 1.4 : [1, 1.2, 1],
                  opacity: isHovered ? 0.9 : [0.5, 0.75, 0.5],
                }}
                transition={{ 
                  duration: isHovered ? 0.4 : 3.5, 
                  repeat: isHovered ? 0 : Infinity,
                }}
              />

              {/* Electric bolts */}
              {[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19].map((i) => (
                <motion.div
                  key={`bolt-${i}`}
                  className="absolute pointer-events-none"
                  style={{
                    left: '50%',
                    top: '50%',
                    width: 2,
                    height: 50 + (i % 4) * 20,
                    transformOrigin: 'center top',
                    rotate: i * 18,
                    background: 'linear-gradient(to bottom, rgba(255,255,255,0.9) 0%, rgba(24,144,255,0.8) 40%, transparent 100%)',
                    borderRadius: 2,
                  }}
                  animate={{
                    opacity: [0, 0.8, 0],
                    scaleY: [0.3, 1, 0.3],
                  }}
                  transition={{
                    duration: 0.2 + (i % 3) * 0.1,
                    repeat: Infinity,
                    delay: (i % 7) * 0.4,
                    repeatDelay: 1 + (i % 5) * 0.5,
                  }}
                />
              ))}

              {/* Rings */}
              {[0, 1, 2].map((ring) => (
                <motion.div
                  key={`ring-${ring}`}
                  className="absolute rounded-full pointer-events-none"
                  style={{
                    width: 180 + ring * 35,
                    height: 180 + ring * 35,
                    left: '50%',
                    top: '50%',
                    x: '-50%',
                    y: '-50%',
                    border: `${2 - ring * 0.5}px solid rgba(24,144,255,${0.25 - ring * 0.06})`,
                  }}
                  animate={{ rotate: ring % 2 === 0 ? 360 : -360 }}
                  transition={{ duration: 12 + ring * 4, repeat: Infinity, ease: 'linear' }}
                />
              ))}

              {/* Shadow */}
              <motion.div
                className="absolute rounded-[50%] bg-black/20 pointer-events-none"
                style={{
                  width: 140,
                  height: 25,
                  left: '50%',
                  bottom: -45,
                  x: '-50%',
                  filter: 'blur(18px)',
                }}
                animate={{ scaleX: isHovered ? 1.3 : [1, 1.08, 1] }}
                transition={{ duration: isHovered ? 0.4 : 3, repeat: isHovered ? 0 : Infinity }}
              />

              {/* Morphing blob */}
              <motion.div
                className="relative"
                style={{ width: 180, height: 180 }}
                animate={{ rotate: isHovered ? [0, 15, -10, 0] : [0, 2, -2, 0] }}
                transition={{ duration: isHovered ? 0.6 : 5, repeat: isHovered ? 0 : Infinity }}
              >
                <svg 
                  viewBox="0 0 200 200" 
                  className="w-full h-full" 
                  style={{ filter: 'drop-shadow(0 20px 60px rgba(24,144,255,0.5))' }}
                >
                  <defs>
                    <linearGradient id="blobGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#69c0ff" />
                      <stop offset="50%" stopColor="#1890ff" />
                      <stop offset="100%" stopColor="#0050b3" />
                    </linearGradient>
                    <radialGradient id="shine" cx="30%" cy="25%" r="40%">
                      <stop offset="0%" stopColor="rgba(255,255,255,0.8)" />
                      <stop offset="100%" stopColor="transparent" />
                    </radialGradient>
                  </defs>

                  <motion.path
                    fill="url(#blobGrad)"
                    animate={{ d: blobPaths }}
                    transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                  />

                  {/* Inner rings */}
                  <motion.ellipse
                    cx="100" cy="100" rx="65" ry="20"
                    fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2"
                    animate={{ rotate: 360 }}
                    style={{ transformOrigin: 'center' }}
                    transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
                  />
                  <motion.ellipse
                    cx="100" cy="100" rx="45" ry="14"
                    fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5"
                    animate={{ rotate: -360 }}
                    style={{ transformOrigin: 'center' }}
                    transition={{ duration: 7, repeat: Infinity, ease: 'linear' }}
                  />

                  {/* Highlight */}
                  <ellipse cx="60" cy="50" rx="35" ry="28" fill="url(#shine)" />

                  {/* Core pulse */}
                  <motion.circle
                    cx="100" cy="100" r="20"
                    fill="rgba(255,255,255,0.2)"
                    animate={{ r: [20, 35, 20], opacity: [0.2, 0.4, 0.2] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </svg>

                {/* AI text */}
                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  style={{ opacity: aiOpacity, scale: aiScale }}
                >
                  <motion.span
                    className="text-white font-black text-6xl tracking-tight"
                    style={{ 
                      textShadow: '0 4px 30px rgba(0,0,0,0.5), 0 0 60px rgba(255,255,255,0.4)',
                    }}
                    animate={isHovered ? {
                      textShadow: ['0 0 30px #fff, 0 0 60px #1890ff', '0 0 50px #fff, 0 0 80px #1890ff', '0 0 30px #fff, 0 0 60px #1890ff'],
                      scale: [1, 1.1, 1],
                    } : {}}
                    transition={{ duration: 0.8, repeat: isHovered ? Infinity : 0 }}
                  >
                    AI
                  </motion.span>
                </motion.div>

                {/* Hover effects */}
                {isHovered && (
                  <>
                    {[0, 1, 2].map((i) => (
                      <motion.div
                        key={`wave-${i}`}
                        className="absolute inset-0 rounded-full border-2 border-white/50"
                        initial={{ scale: 0.5, opacity: 1 }}
                        animate={{ scale: 3, opacity: 0 }}
                        transition={{ duration: 0.8, delay: i * 0.12 }}
                      />
                    ))}
                    {[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15].map((i) => (
                      <motion.div
                        key={`part-${i}`}
                        className="absolute w-2 h-2 rounded-full bg-white pointer-events-none"
                        style={{ left: '50%', top: '50%', boxShadow: '0 0 10px #fff' }}
                        initial={{ x: 0, y: 0, scale: 0 }}
                        animate={{
                          x: Math.cos(i * 22.5 * Math.PI / 180) * 120,
                          y: Math.sin(i * 22.5 * Math.PI / 180) * 120,
                          scale: [0, 1.2, 0],
                          opacity: [0, 1, 0],
                        }}
                        transition={{ duration: 1, delay: i * 0.02 }}
                      />
                    ))}
                  </>
                )}
              </motion.div>
            </motion.div>

            {/* Orbiting cards */}
            {stats.map((stat) => (
              <motion.div
                key={stat.value}
                className="absolute"
                style={{ 
                  left: '50%', 
                  top: '50%',
                  width: 0,
                  height: 0,
                }}
              >
                <motion.div
                  style={{ rotate: rotation }}
                  className="relative"
                >
                  <motion.div
                    className="absolute"
                    style={{
                      transform: `rotate(${stat.baseAngle}deg) translateX(${orbitRadius}px) rotate(-${stat.baseAngle}deg)`,
                    }}
                  >
                    <motion.div
                      className="rounded-[20px] p-5 min-w-[130px] text-center"
                      style={{
                        background: 'linear-gradient(145deg, #ffffff 0%, #f8fafc 100%)',
                        boxShadow: '0 15px 50px rgba(0,0,0,0.1), 0 6px 20px rgba(24,144,255,0.08)',
                        transform: 'translate(-50%, -50%)',
                      }}
                      whileHover={{ 
                        scale: 1.1, 
                        boxShadow: '0 25px 70px rgba(24,144,255,0.25)',
                      }}
                    >
                      <div 
                        className="w-11 h-11 mx-auto mb-2 rounded-xl flex items-center justify-center"
                        style={{ background: 'linear-gradient(135deg, #e6f4ff 0%, #bae0ff 100%)' }}
                      >
                        <stat.icon className="text-[#1890ff]" size={22} />
                      </div>
                      <div className="text-xl font-bold text-gray-900">{stat.value}</div>
                      <div className="text-xs text-gray-500 mt-0.5">{stat.label}</div>
                    </motion.div>
                  </motion.div>
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

      {/* Bottom fade */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none"
        style={{ background: 'linear-gradient(180deg, transparent 0%, #ffffff 100%)' }}
      />
    </section>
  );
}
