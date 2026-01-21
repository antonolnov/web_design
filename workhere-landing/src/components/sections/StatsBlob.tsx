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
  const [ripples, setRipples] = useState<number[]>([]);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  // Smooth spring for orbit rotation
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 30, damping: 25 });
  
  // Orbit rotation - full 360 degrees over scroll
  const orbitAngle = useTransform(smoothProgress, [0, 1], [0, 360]);

  const handleBlobHover = () => {
    setIsHovered(true);
    setRipples(prev => [...prev, Date.now()]);
    setTimeout(() => {
      setRipples(prev => prev.slice(1));
    }, 1500);
  };

  return (
    <section 
      ref={containerRef} 
      className="relative py-32 overflow-hidden"
      style={{ 
        minHeight: '100vh',
        perspective: '1200px',
        perspectiveOrigin: '50% 50%',
      }}
    >
      {/* Deep gradient background - creates depth */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 100% 80% at 50% 100%, rgba(24,144,255,0.08) 0%, transparent 50%),
            radial-gradient(ellipse 80% 60% at 50% 50%, rgba(24,144,255,0.12) 0%, transparent 40%),
            radial-gradient(ellipse 120% 100% at 50% 0%, #e8f4ff 0%, #f0f7ff 30%, #f8fafc 60%, #ffffff 100%)
          `,
        }}
      />

      {/* Depth layers - soft blurred shapes in background */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(24,144,255,0.06) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
        animate={{
          x: [0, 30, 0],
          y: [0, -20, 0],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(64,169,255,0.05) 0%, transparent 70%)',
          filter: 'blur(50px)',
        }}
        animate={{
          x: [0, -25, 0],
          y: [0, 25, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Subtle grid for tech feel */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(#1890ff 1px, transparent 1px),
            linear-gradient(90deg, #1890ff 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }}
      />

      <Container className="relative z-10">
        <div 
          className="flex items-center justify-center" 
          style={{ 
            minHeight: '600px',
            transformStyle: 'preserve-3d',
          }}
        >
          {/* 3D Scene Container */}
          <div 
            className="relative"
            style={{ 
              transformStyle: 'preserve-3d',
              transform: 'rotateX(10deg)',
            }}
          >
            {/* Main Blob with hover effect */}
            <motion.div
              className="relative cursor-pointer"
              onMouseEnter={handleBlobHover}
              onMouseLeave={() => setIsHovered(false)}
              animate={{
                scale: isHovered ? 1.08 : 1,
              }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Outer glow - depth effect */}
              <motion.div
                className="absolute rounded-full"
                style={{
                  width: 320,
                  height: 320,
                  left: '50%',
                  top: '50%',
                  x: '-50%',
                  y: '-50%',
                  background: 'radial-gradient(circle, rgba(24,144,255,0.3) 0%, transparent 70%)',
                  filter: 'blur(40px)',
                  transform: 'translateZ(-50px)',
                }}
                animate={{
                  scale: isHovered ? 1.3 : 1,
                  opacity: isHovered ? 1 : 0.6,
                }}
                transition={{ duration: 0.4 }}
              />

              {/* Shadow for 3D depth */}
              <div
                className="absolute rounded-full bg-black/10"
                style={{
                  width: 200,
                  height: 40,
                  left: '50%',
                  bottom: -60,
                  transform: 'translateX(-50%) rotateX(90deg)',
                  filter: 'blur(20px)',
                }}
              />

              {/* Main sphere */}
              <motion.div
                className="relative w-56 h-56 rounded-full"
                style={{
                  background: `
                    radial-gradient(circle at 35% 25%, rgba(255,255,255,0.4) 0%, transparent 40%),
                    radial-gradient(circle at 50% 50%, #40a9ff 0%, #1890ff 40%, #0d6edb 80%, #0050b3 100%)
                  `,
                  boxShadow: isHovered 
                    ? `
                      0 0 80px rgba(24,144,255,0.6),
                      0 0 160px rgba(24,144,255,0.3),
                      inset 0 0 80px rgba(255,255,255,0.2),
                      inset -20px -20px 60px rgba(0,0,0,0.2)
                    `
                    : `
                      0 0 60px rgba(24,144,255,0.4),
                      0 20px 60px rgba(0,0,0,0.15),
                      inset 0 0 60px rgba(255,255,255,0.1),
                      inset -15px -15px 40px rgba(0,0,0,0.15)
                    `,
                  transform: 'translateZ(0)',
                }}
                animate={{
                  boxShadow: isHovered 
                    ? `
                      0 0 100px rgba(24,144,255,0.7),
                      0 0 200px rgba(24,144,255,0.4),
                      inset 0 0 100px rgba(255,255,255,0.3),
                      inset -20px -20px 60px rgba(0,0,0,0.2)
                    `
                    : `
                      0 0 60px rgba(24,144,255,0.4),
                      0 20px 60px rgba(0,0,0,0.15),
                      inset 0 0 60px rgba(255,255,255,0.1),
                      inset -15px -15px 40px rgba(0,0,0,0.15)
                    `,
                }}
                transition={{ duration: 0.4 }}
              >
                {/* Animated highlight */}
                <motion.div
                  className="absolute inset-0 rounded-full overflow-hidden"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                >
                  <div 
                    className="absolute w-1/2 h-full"
                    style={{
                      background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.1) 50%, transparent 100%)',
                    }}
                  />
                </motion.div>

                {/* Inner glow on hover */}
                <motion.div
                  className="absolute inset-4 rounded-full"
                  style={{
                    background: 'radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 70%)',
                  }}
                  animate={{
                    scale: isHovered ? [1, 1.2, 1] : 1,
                    opacity: isHovered ? [0.5, 1, 0.5] : 0.3,
                  }}
                  transition={{ duration: 1, repeat: isHovered ? Infinity : 0 }}
                />

                {/* Center text */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.span
                    className="text-white font-bold text-3xl tracking-wide"
                    style={{ textShadow: '0 2px 20px rgba(0,0,0,0.3)' }}
                    animate={{
                      scale: isHovered ? 1.05 : 1,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    WorkHere
                  </motion.span>
                </div>

                {/* Power ripples on hover */}
                {ripples.map((id) => (
                  <motion.div
                    key={id}
                    className="absolute inset-0 rounded-full border-2 border-white/50"
                    initial={{ scale: 1, opacity: 0.8 }}
                    animate={{ scale: 2.5, opacity: 0 }}
                    transition={{ duration: 1.2, ease: 'easeOut' }}
                  />
                ))}

                {/* Energy particles on hover */}
                {isHovered && [...Array(12)].map((_, i) => (
                  <motion.div
                    key={`particle-${i}`}
                    className="absolute w-2 h-2 bg-white rounded-full"
                    style={{
                      left: '50%',
                      top: '50%',
                      boxShadow: '0 0 10px rgba(255,255,255,0.8)',
                    }}
                    initial={{ x: 0, y: 0, scale: 0 }}
                    animate={{
                      x: Math.cos(i * 30 * Math.PI / 180) * 150,
                      y: Math.sin(i * 30 * Math.PI / 180) * 150,
                      scale: [0, 1, 0],
                      opacity: [0, 1, 0],
                    }}
                    transition={{
                      duration: 1.5,
                      delay: i * 0.05,
                      ease: 'easeOut',
                    }}
                  />
                ))}
              </motion.div>
            </motion.div>

            {/* 3D Orbiting Cards */}
            {stats.map((stat, index) => {
              const baseAngle = index * 90; // 4 cards, 90° apart
              const orbitRadius = 220;
              
              return (
                <motion.div
                  key={stat.value}
                  className="absolute pointer-events-none"
                  style={{
                    left: '50%',
                    top: '50%',
                    width: 0,
                    height: 0,
                    transformStyle: 'preserve-3d',
                  }}
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
                        transform: `translateX(${orbitRadius}px) translateZ(0px)`,
                        transformStyle: 'preserve-3d',
                      }}
                    >
                      {/* Card with 3D depth and smooth z-based visibility */}
                      <motion.div
                        className="pointer-events-auto"
                        style={{
                          // Counter-rotate to keep card facing forward
                          rotateY: useTransform(orbitAngle, (angle) => -(angle + baseAngle)),
                          // Smooth opacity based on position (behind = hidden)
                          opacity: useTransform(orbitAngle, (angle) => {
                            const cardAngle = (angle + baseAngle) % 360;
                            // Smooth sine-based opacity: 1 at front (0°), 0 at back (180°)
                            const normalizedAngle = cardAngle * Math.PI / 180;
                            return 0.3 + 0.7 * (Math.cos(normalizedAngle) + 1) / 2;
                          }),
                          // Scale based on z-position
                          scale: useTransform(orbitAngle, (angle) => {
                            const cardAngle = (angle + baseAngle) % 360;
                            const normalizedAngle = cardAngle * Math.PI / 180;
                            return 0.75 + 0.25 * (Math.cos(normalizedAngle) + 1) / 2;
                          }),
                          // Z-index simulation via filter
                          filter: useTransform(orbitAngle, (angle) => {
                            const cardAngle = (angle + baseAngle) % 360;
                            const normalizedAngle = cardAngle * Math.PI / 180;
                            const blur = (1 - (Math.cos(normalizedAngle) + 1) / 2) * 2;
                            return `blur(${blur}px)`;
                          }),
                        }}
                      >
                        <motion.div
                          className="bg-white/95 backdrop-blur-sm rounded-[20px] p-5 border border-white/50 min-w-[120px] text-center"
                          style={{
                            boxShadow: '0 10px 40px rgba(0,0,0,0.1), 0 0 0 1px rgba(255,255,255,0.5)',
                          }}
                          whileHover={{ 
                            scale: 1.1, 
                            boxShadow: '0 20px 60px rgba(24,144,255,0.25), 0 0 0 1px rgba(24,144,255,0.3)',
                          }}
                        >
                          <div className="w-11 h-11 mx-auto mb-2 bg-gradient-to-br from-[#e6f4ff] to-[#bae0ff] rounded-[12px] flex items-center justify-center shadow-inner">
                            <stat.icon className="text-[#1890ff]" size={22} />
                          </div>
                          <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
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

            {/* Orbit path indicator */}
            <div 
              className="absolute rounded-full border border-[#1890ff]/10 pointer-events-none"
              style={{
                width: 440,
                height: 440,
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%) rotateX(75deg)',
              }}
            />
          </div>
        </div>
      </Container>

      {/* Bottom fade for smooth transition */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white via-white/80 to-transparent" />
    </section>
  );
}
