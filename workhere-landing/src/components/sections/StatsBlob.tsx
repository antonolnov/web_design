'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue, useAnimationFrame } from 'framer-motion';
import { Building2, Users, TrendingUp } from 'lucide-react';
import Container from '../ui/Container';

// Only 3 cards - no AI card
const stats = [
  { icon: Building2, value: '1500+', label: 'Компаний' },
  { icon: Users, value: '10 000+', label: 'Рекрутеров' },
  { icon: TrendingUp, value: '3M+', label: 'Наймов в год' },
];

export default function StatsBlob() {
  const containerRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const time = useMotionValue(0);
  
  // Animate time for continuous crazy motion
  useAnimationFrame((t) => {
    time.set(t / 1000);
  });
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 40, damping: 20 });
  const orbitAngle = useTransform(smoothProgress, [0, 1], [0, 540]);
  
  // WILD 3D transforms on scroll
  const blobRotateX = useTransform(smoothProgress, [0, 0.3, 0.7, 1], [35, -10, 15, -25]);
  const blobRotateY = useTransform(smoothProgress, [0, 0.25, 0.5, 0.75, 1], [-45, 20, -15, 30, -40]);
  const blobRotateZ = useTransform(smoothProgress, [0, 0.5, 1], [-10, 8, -12]);
  const blobScale = useTransform(smoothProgress, [0, 0.4, 0.6, 1], [0.7, 1.15, 1.1, 0.85]);
  
  // AI text reveal
  const aiOpacity = useTransform(smoothProgress, [0.12, 0.3], [0, 1]);
  const aiScale = useTransform(smoothProgress, [0.12, 0.3], [0.2, 1]);
  const aiRotate = useTransform(smoothProgress, [0.12, 0.3], [-20, 0]);

  // Generate morphing blob paths
  const blobPaths = [
    "M100,10 C155,5 190,40 195,85 C200,130 175,175 135,190 C90,205 40,185 20,140 C0,95 15,45 55,20 C80,5 70,12 100,10",
    "M95,5 C150,-5 200,35 200,90 C200,145 165,195 110,195 C55,195 10,155 5,100 C0,45 40,15 95,5",
    "M110,8 C165,0 195,45 190,100 C185,155 145,200 90,195 C35,190 -5,140 5,85 C15,30 55,15 110,8",
    "M90,12 C145,2 185,30 195,80 C205,130 180,185 125,192 C70,199 15,165 8,110 C1,55 35,22 90,12",
    "M105,5 C160,0 200,50 195,105 C190,160 150,200 95,198 C40,196 0,150 5,95 C10,40 50,10 105,5",
  ];

  return (
    <section 
      ref={containerRef} 
      className="relative py-16 overflow-hidden"
      style={{ 
        minHeight: '100vh',
        perspective: '1200px',
        perspectiveOrigin: '50% 40%',
        background: 'linear-gradient(180deg, #f0f7ff 0%, #e0efff 30%, #eef6ff 60%, #ffffff 100%)',
      }}
    >
      {/* MASSIVE IMMERSIVE BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Animated depth layers */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`layer-${i}`}
            className="absolute rounded-full"
            style={{
              width: 300 + i * 200,
              height: 300 + i * 200,
              left: `${30 + (i % 3) * 20}%`,
              top: `${20 + (i % 2) * 30}%`,
              background: `radial-gradient(circle, 
                rgba(24,144,255,${0.15 - i * 0.02}) 0%, 
                transparent 60%)`,
              filter: `blur(${40 + i * 20}px)`,
            }}
            animate={{
              x: [0, 50 - i * 20, 0],
              y: [0, 30 + i * 10, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.5,
            }}
          />
        ))}

        {/* Floating particles in background */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-2 h-2 rounded-full"
            style={{
              left: `${10 + (i * 7) % 80}%`,
              top: `${15 + (i * 11) % 70}%`,
              background: 'rgba(24,144,255,0.3)',
              boxShadow: '0 0 10px rgba(24,144,255,0.5)',
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, 15, 0],
              opacity: [0.3, 0.6, 0.3],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 4 + (i % 3),
              repeat: Infinity,
              delay: i * 0.3,
            }}
          />
        ))}
      </div>

      <Container className="relative z-10">
        <div 
          className="flex items-center justify-center" 
          style={{ minHeight: '580px', transformStyle: 'preserve-3d' }}
        >
          <div 
            className="relative"
            style={{ transformStyle: 'preserve-3d' }}
          >
            {/* THE CRAZY DYNAMIC BLOB */}
            <motion.div
              className="relative cursor-pointer"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              style={{
                transformStyle: 'preserve-3d',
                rotateX: blobRotateX,
                rotateY: blobRotateY,
                rotateZ: blobRotateZ,
                scale: blobScale,
              }}
            >
              {/* LIVING PULSING GLOW */}
              <motion.div
                className="absolute rounded-full pointer-events-none"
                style={{
                  width: 500,
                  height: 500,
                  left: '50%',
                  top: '50%',
                  x: '-50%',
                  y: '-50%',
                  background: 'radial-gradient(circle, rgba(24,144,255,0.6) 0%, rgba(64,169,255,0.3) 30%, transparent 55%)',
                  filter: 'blur(60px)',
                }}
                animate={{
                  scale: isHovered ? [1, 1.5, 1.3] : [1, 1.25, 1.1, 1.2, 1],
                  opacity: isHovered ? [0.8, 1, 0.9] : [0.6, 0.85, 0.7, 0.9, 0.6],
                }}
                transition={{ 
                  duration: isHovered ? 0.6 : 4, 
                  repeat: isHovered ? 0 : Infinity,
                  ease: 'easeInOut',
                }}
              />

              {/* SECONDARY BREATHING GLOW */}
              <motion.div
                className="absolute rounded-[60%_40%_55%_45%] pointer-events-none"
                style={{
                  width: 350,
                  height: 350,
                  left: '50%',
                  top: '50%',
                  x: '-50%',
                  y: '-50%',
                  background: 'radial-gradient(ellipse at 30% 30%, rgba(105,192,255,0.4) 0%, transparent 50%)',
                  filter: 'blur(40px)',
                }}
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.15, 1],
                }}
                transition={{
                  rotate: { duration: 20, repeat: Infinity, ease: 'linear' },
                  scale: { duration: 3, repeat: Infinity, ease: 'easeInOut' },
                }}
              />

              {/* LIGHTNING BOLTS */}
              {[...Array(24)].map((_, i) => (
                <motion.div
                  key={`bolt-${i}`}
                  className="absolute pointer-events-none"
                  style={{
                    left: '50%',
                    top: '50%',
                    width: 2 + (i % 2),
                    height: 40 + Math.random() * 80,
                    transformOrigin: 'center top',
                    rotate: i * 15,
                  }}
                  animate={{
                    opacity: [0, 1, 0.4, 0.9, 0],
                    scaleY: [0, 1, 0.6, 1, 0],
                  }}
                  transition={{
                    duration: 0.15 + Math.random() * 0.2,
                    repeat: Infinity,
                    delay: Math.random() * 3,
                    repeatDelay: 0.3 + Math.random() * 2,
                  }}
                >
                  <div 
                    className="w-full h-full"
                    style={{
                      background: `linear-gradient(to bottom, 
                        rgba(255,255,255,1) 0%,
                        rgba(24,144,255,1) 30%,
                        rgba(64,169,255,0.5) 70%,
                        transparent 100%)`,
                      filter: 'blur(0.5px)',
                      borderRadius: '2px',
                    }}
                  />
                </motion.div>
              ))}

              {/* ORBITING ENERGY RINGS */}
              {[0, 1, 2].map((ring) => (
                <motion.div
                  key={`ring-${ring}`}
                  className="absolute pointer-events-none"
                  style={{
                    width: 200 + ring * 40,
                    height: 200 + ring * 40,
                    left: '50%',
                    top: '50%',
                    x: '-50%',
                    y: '-50%',
                    border: `${2 - ring * 0.5}px solid rgba(24,144,255,${0.3 - ring * 0.08})`,
                    borderRadius: '50%',
                  }}
                  animate={{ 
                    rotate: ring % 2 === 0 ? 360 : -360,
                    scale: [1, 1.05, 1],
                  }}
                  transition={{ 
                    rotate: { duration: 10 + ring * 5, repeat: Infinity, ease: 'linear' },
                    scale: { duration: 2 + ring, repeat: Infinity },
                  }}
                />
              ))}

              {/* SHADOW */}
              <motion.div
                className="absolute rounded-[50%] bg-black/25 pointer-events-none"
                style={{
                  width: 160,
                  height: 30,
                  left: '50%',
                  bottom: -50,
                  x: '-50%',
                  filter: 'blur(20px)',
                }}
                animate={{ 
                  scaleX: isHovered ? [1, 1.4, 1.3] : [1, 1.1, 1],
                  opacity: isHovered ? 0.5 : [0.25, 0.35, 0.25],
                }}
                transition={{ duration: isHovered ? 0.6 : 3, repeat: isHovered ? 0 : Infinity }}
              />

              {/* THE WILD MORPHING BLOB */}
              <motion.div
                className="relative"
                style={{ width: 200, height: 200 }}
                animate={{ 
                  rotate: isHovered ? [0, 25, -15, 10, 0] : [0, 3, -3, 0],
                }}
                transition={{ 
                  duration: isHovered ? 0.8 : 6, 
                  repeat: isHovered ? 0 : Infinity,
                  ease: 'easeInOut',
                }}
              >
                <svg 
                  viewBox="0 0 200 200" 
                  className="w-full h-full" 
                  style={{ 
                    filter: 'drop-shadow(0 25px 80px rgba(24,144,255,0.6))',
                  }}
                >
                  <defs>
                    <linearGradient id="wildGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <motion.stop
                        offset="0%"
                        animate={{ 
                          stopColor: ['#91d5ff', '#69c0ff', '#40a9ff', '#69c0ff', '#91d5ff'],
                        }}
                        transition={{ duration: 4, repeat: Infinity }}
                      />
                      <motion.stop
                        offset="40%"
                        animate={{ 
                          stopColor: ['#40a9ff', '#1890ff', '#096dd9', '#1890ff', '#40a9ff'],
                        }}
                        transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
                      />
                      <motion.stop
                        offset="100%"
                        animate={{ 
                          stopColor: ['#0050b3', '#003a8c', '#002766', '#003a8c', '#0050b3'],
                        }}
                        transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                      />
                    </linearGradient>
                    
                    <radialGradient id="innerGlow" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="rgba(255,255,255,0.4)" />
                      <stop offset="100%" stopColor="transparent" />
                    </radialGradient>

                    <radialGradient id="topShine" cx="30%" cy="25%" r="40%">
                      <stop offset="0%" stopColor="rgba(255,255,255,0.85)" />
                      <stop offset="60%" stopColor="rgba(255,255,255,0.2)" />
                      <stop offset="100%" stopColor="transparent" />
                    </radialGradient>
                  </defs>

                  {/* MAIN MORPHING SHAPE */}
                  <motion.path
                    fill="url(#wildGradient)"
                    animate={{
                      d: blobPaths,
                    }}
                    transition={{ 
                      duration: 8, 
                      repeat: Infinity, 
                      ease: 'easeInOut',
                    }}
                  />

                  {/* INNER DIMENSION RINGS */}
                  <g>
                    <motion.ellipse
                      cx="100" cy="100" rx="70" ry="22"
                      fill="none" 
                      stroke="rgba(255,255,255,0.35)" 
                      strokeWidth="2"
                      animate={{ 
                        rotate: 360,
                        rx: [70, 75, 65, 70],
                        ry: [22, 25, 20, 22],
                      }}
                      style={{ transformOrigin: 'center' }}
                      transition={{ 
                        rotate: { duration: 12, repeat: Infinity, ease: 'linear' },
                        rx: { duration: 4, repeat: Infinity },
                        ry: { duration: 4, repeat: Infinity },
                      }}
                    />
                    <motion.ellipse
                      cx="100" cy="100" rx="55" ry="16"
                      fill="none" 
                      stroke="rgba(255,255,255,0.25)" 
                      strokeWidth="1.5"
                      animate={{ 
                        rotate: -360,
                        rx: [55, 50, 58, 55],
                      }}
                      style={{ transformOrigin: 'center' }}
                      transition={{ 
                        rotate: { duration: 8, repeat: Infinity, ease: 'linear' },
                        rx: { duration: 3, repeat: Infinity },
                      }}
                    />
                    <motion.ellipse
                      cx="100" cy="100" rx="40" ry="10"
                      fill="none" 
                      stroke="rgba(255,255,255,0.15)" 
                      strokeWidth="1"
                      animate={{ rotate: 360 }}
                      style={{ transformOrigin: 'center' }}
                      transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
                    />
                  </g>

                  {/* TOP HIGHLIGHT */}
                  <motion.ellipse
                    cx="55" cy="45" rx="40" ry="32"
                    fill="url(#topShine)"
                    animate={{
                      cx: [55, 65, 55],
                      cy: [45, 40, 45],
                      rx: [40, 45, 40],
                      ry: [32, 36, 32],
                    }}
                    transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                  />

                  {/* PULSING ENERGY CORE */}
                  <motion.circle
                    cx="100" cy="100" r="25"
                    fill="url(#innerGlow)"
                    animate={{
                      r: [25, 40, 25],
                      opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                  />

                  {/* INNER SPARKLES */}
                  {[...Array(6)].map((_, i) => (
                    <motion.circle
                      key={`sparkle-${i}`}
                      cx={70 + (i % 3) * 30}
                      cy={60 + Math.floor(i / 3) * 60}
                      r="3"
                      fill="white"
                      animate={{
                        opacity: [0, 1, 0],
                        r: [2, 4, 2],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        delay: i * 0.3,
                      }}
                    />
                  ))}
                </svg>

                {/* AI TEXT - DRAMATIC */}
                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  style={{ 
                    opacity: aiOpacity, 
                    scale: aiScale,
                    rotateX: aiRotate,
                  }}
                >
                  <motion.span
                    className="text-white font-black text-7xl tracking-tight"
                    style={{ 
                      textShadow: `
                        0 5px 40px rgba(0,0,0,0.6), 
                        0 0 80px rgba(255,255,255,0.5),
                        0 0 120px rgba(24,144,255,0.4)
                      `,
                      fontFamily: 'system-ui, -apple-system, sans-serif',
                    }}
                    animate={isHovered ? {
                      textShadow: [
                        '0 0 30px #fff, 0 0 80px #1890ff, 0 0 120px #1890ff',
                        '0 0 50px #fff, 0 0 100px #40a9ff, 0 0 150px #1890ff',
                        '0 0 30px #fff, 0 0 80px #1890ff, 0 0 120px #1890ff',
                      ],
                      scale: [1, 1.15, 1],
                    } : {
                      textShadow: [
                        '0 5px 40px rgba(0,0,0,0.6), 0 0 80px rgba(255,255,255,0.5)',
                        '0 5px 40px rgba(0,0,0,0.6), 0 0 100px rgba(255,255,255,0.7)',
                        '0 5px 40px rgba(0,0,0,0.6), 0 0 80px rgba(255,255,255,0.5)',
                      ],
                    }}
                    transition={{ duration: 1.2, repeat: Infinity }}
                  >
                    AI
                  </motion.span>
                </motion.div>

                {/* HOVER EXPLOSION */}
                {isHovered && (
                  <>
                    {/* Shockwaves */}
                    {[0, 1, 2].map((i) => (
                      <motion.div
                        key={`shock-${i}`}
                        className="absolute inset-0 rounded-full border-2"
                        style={{ borderColor: 'rgba(255,255,255,0.6)' }}
                        initial={{ scale: 0.5, opacity: 1 }}
                        animate={{ scale: 3.5, opacity: 0 }}
                        transition={{ duration: 1, delay: i * 0.15 }}
                      />
                    ))}
                    
                    {/* Particle explosion */}
                    {[...Array(20)].map((_, i) => (
                      <motion.div
                        key={`exp-${i}`}
                        className="absolute rounded-full pointer-events-none"
                        style={{
                          left: '50%',
                          top: '50%',
                          width: 4 + (i % 3) * 2,
                          height: 4 + (i % 3) * 2,
                          background: i % 2 === 0 ? '#fff' : '#40a9ff',
                          boxShadow: `0 0 ${10 + i}px ${i % 2 === 0 ? '#fff' : '#1890ff'}`,
                        }}
                        initial={{ x: 0, y: 0, scale: 0 }}
                        animate={{
                          x: Math.cos(i * 18 * Math.PI / 180) * (100 + i * 8),
                          y: Math.sin(i * 18 * Math.PI / 180) * (100 + i * 8),
                          scale: [0, 1.5, 0],
                          opacity: [0, 1, 0],
                        }}
                        transition={{ duration: 1.2, delay: i * 0.02 }}
                      />
                    ))}

                    {/* Energy burst */}
                    <motion.div
                      className="absolute w-32 h-32 rounded-full"
                      style={{
                        left: '50%',
                        top: '50%',
                        x: '-50%',
                        y: '-50%',
                        background: 'radial-gradient(circle, rgba(255,255,255,0.8) 0%, transparent 60%)',
                      }}
                      initial={{ scale: 0, opacity: 1 }}
                      animate={{ scale: 4, opacity: 0 }}
                      transition={{ duration: 0.8 }}
                    />
                  </>
                )}
              </motion.div>
            </motion.div>

            {/* 3D ORBITING CARDS - 3 cards now */}
            {stats.map((stat, index) => {
              const baseAngle = index * 120;
              const orbitRadius = 210;
              
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
                      style={{ 
                        transform: `translateX(${orbitRadius}px)`, 
                        transformStyle: 'preserve-3d',
                      }}
                    >
                      <motion.div
                        className="pointer-events-auto"
                        style={{
                          rotateY: useTransform(orbitAngle, (angle) => -(angle + baseAngle)),
                          opacity: useTransform(orbitAngle, (angle) => {
                            const cardAngle = (angle + baseAngle) % 360;
                            const rad = cardAngle * Math.PI / 180;
                            return 0.4 + 0.6 * Math.max(0, (Math.cos(rad) + 0.5) / 1.5);
                          }),
                          scale: useTransform(orbitAngle, (angle) => {
                            const cardAngle = (angle + baseAngle) % 360;
                            const rad = cardAngle * Math.PI / 180;
                            return 0.8 + 0.2 * (Math.cos(rad) + 1) / 2;
                          }),
                        }}
                      >
                        <motion.div
                          className="rounded-[20px] p-5 min-w-[135px] text-center backdrop-blur-sm"
                          style={{
                            background: 'linear-gradient(145deg, rgba(255,255,255,0.95) 0%, rgba(248,250,252,0.9) 100%)',
                            boxShadow: '0 20px 60px rgba(0,0,0,0.12), 0 8px 25px rgba(24,144,255,0.1), inset 0 1px 0 rgba(255,255,255,1)',
                            border: '1px solid rgba(255,255,255,0.5)',
                          }}
                          whileHover={{ 
                            scale: 1.12, 
                            boxShadow: '0 30px 80px rgba(24,144,255,0.3), 0 15px 40px rgba(0,0,0,0.1)',
                            y: -5,
                          }}
                          transition={{ duration: 0.3 }}
                        >
                          <motion.div 
                            className="w-12 h-12 mx-auto mb-3 rounded-[14px] flex items-center justify-center"
                            style={{ 
                              background: 'linear-gradient(135deg, #e6f4ff 0%, #bae0ff 100%)',
                              boxShadow: 'inset 0 2px 4px rgba(255,255,255,0.5), 0 4px 12px rgba(24,144,255,0.2)',
                            }}
                            whileHover={{ rotate: [0, -10, 10, 0] }}
                            transition={{ duration: 0.5 }}
                          >
                            <stat.icon className="text-[#1890ff]" size={24} />
                          </motion.div>
                          <div className="text-2xl font-bold text-gray-900 mb-0.5">{stat.value}</div>
                          <div className="text-sm text-gray-500 font-medium">{stat.label}</div>
                        </motion.div>
                      </motion.div>
                    </motion.div>
                  </motion.div>
                </motion.div>
              );
            })}

            {/* Orbit path visualization */}
            <motion.div 
              className="absolute rounded-full pointer-events-none"
              style={{
                width: 420,
                height: 420,
                left: '50%',
                top: '50%',
                x: '-50%',
                y: '-50%',
                border: '1px dashed rgba(24,144,255,0.15)',
                rotateX: 70,
              }}
            />
          </div>
        </div>
      </Container>

      {/* Seamless bottom transition */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-48 pointer-events-none"
        style={{ background: 'linear-gradient(180deg, transparent 0%, #ffffff 100%)' }}
      />
    </section>
  );
}
