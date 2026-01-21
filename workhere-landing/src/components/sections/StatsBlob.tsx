'use client';

import { useRef } from 'react';
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
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  // Smooth spring for orbit rotation
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 50, damping: 20 });
  
  // Orbit rotation based on scroll (multiple rotations)
  const orbitRotation = useTransform(smoothProgress, [0, 1], [0, 360]);
  
  // Background gradient movement
  const gradientX = useTransform(smoothProgress, [0, 0.5, 1], ['0%', '50%', '100%']);
  const gradientY = useTransform(smoothProgress, [0, 0.5, 1], ['0%', '30%', '0%']);
  
  // Blob scale and glow
  const blobScale = useTransform(smoothProgress, [0, 0.3, 0.7, 1], [0.6, 1.1, 1.1, 0.6]);
  const blobGlow = useTransform(smoothProgress, [0, 0.5, 1], [0.3, 1, 0.3]);

  return (
    <section 
      ref={containerRef} 
      className="relative py-40 overflow-hidden"
      style={{ minHeight: '100vh' }}
    >
      {/* Dynamic gradient background */}
      <motion.div 
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 80% 50% at 50% 50%, rgba(24,144,255,0.15) 0%, transparent 50%),
            radial-gradient(ellipse 60% 40% at 30% 30%, rgba(24,144,255,0.1) 0%, transparent 40%),
            radial-gradient(ellipse 50% 50% at 70% 70%, rgba(64,169,255,0.08) 0%, transparent 40%),
            linear-gradient(180deg, #f0f7ff 0%, #ffffff 50%, #f8fafc 100%)
          `,
        }}
      />

      {/* Animated gradient waves */}
      <motion.div
        className="absolute inset-0 opacity-60"
        style={{ x: gradientX, y: gradientY }}
      >
        <div 
          className="absolute w-[200%] h-[200%] -left-1/2 -top-1/2"
          style={{
            background: `
              radial-gradient(circle at 30% 40%, rgba(24,144,255,0.2) 0%, transparent 30%),
              radial-gradient(circle at 70% 60%, rgba(64,169,255,0.15) 0%, transparent 25%),
              radial-gradient(circle at 50% 80%, rgba(24,144,255,0.1) 0%, transparent 35%)
            `,
          }}
        />
      </motion.div>

      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(#1890ff 1px, transparent 1px),
            linear-gradient(90deg, #1890ff 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Floating particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-[#1890ff] rounded-full"
          style={{
            left: `${10 + (i * 4.5) % 80}%`,
            top: `${15 + (i * 7) % 70}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.6, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 3 + (i % 3),
            repeat: Infinity,
            delay: i * 0.2,
          }}
        />
      ))}

      <Container className="relative z-10">
        <div className="flex items-center justify-center" style={{ minHeight: '500px' }}>
          
          {/* Central Tech Blob */}
          <motion.div
            className="relative"
            style={{ scale: blobScale }}
          >
            {/* Outer glow rings */}
            {[1, 2, 3].map((ring) => (
              <motion.div
                key={ring}
                className="absolute rounded-full border border-[#1890ff]"
                style={{
                  width: 200 + ring * 60,
                  height: 200 + ring * 60,
                  left: '50%',
                  top: '50%',
                  x: '-50%',
                  y: '-50%',
                  opacity: useTransform(blobGlow, (v) => v * (0.3 - ring * 0.08)),
                }}
                animate={{ rotate: ring % 2 === 0 ? 360 : -360 }}
                transition={{ duration: 20 + ring * 5, repeat: Infinity, ease: 'linear' }}
              />
            ))}

            {/* Main blob with gradient */}
            <motion.div
              className="relative w-52 h-52 rounded-full"
              style={{
                background: `
                  radial-gradient(circle at 30% 30%, #40a9ff 0%, #1890ff 50%, #0d6edb 100%)
                `,
                boxShadow: `
                  0 0 60px rgba(24,144,255,0.4),
                  0 0 120px rgba(24,144,255,0.2),
                  inset 0 0 60px rgba(255,255,255,0.1)
                `,
              }}
            >
              {/* Inner shimmer effect */}
              <motion.div
                className="absolute inset-4 rounded-full"
                style={{
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.3) 0%, transparent 50%, rgba(255,255,255,0.1) 100%)',
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
              />

              {/* Tech circuit pattern */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 200">
                <motion.circle
                  cx="100" cy="100" r="60"
                  fill="none"
                  stroke="rgba(255,255,255,0.2)"
                  strokeWidth="1"
                  strokeDasharray="10 5"
                  animate={{ rotate: 360 }}
                  style={{ transformOrigin: 'center' }}
                  transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                />
                <motion.circle
                  cx="100" cy="100" r="40"
                  fill="none"
                  stroke="rgba(255,255,255,0.15)"
                  strokeWidth="1"
                  strokeDasharray="5 10"
                  animate={{ rotate: -360 }}
                  style={{ transformOrigin: 'center' }}
                  transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
                />
              </svg>

              {/* Center content */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  className="text-center text-white"
                  animate={{ scale: [1, 1.02, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <div className="text-3xl font-bold tracking-wide">WorkHere</div>
                </motion.div>
              </div>

              {/* Pulse effect */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-white/30"
                animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </motion.div>

            {/* Orbiting cards container */}
            <motion.div
              className="absolute"
              style={{
                width: 500,
                height: 500,
                left: '50%',
                top: '50%',
                x: '-50%',
                y: '-50%',
                rotate: orbitRotation,
              }}
            >
              {stats.map((stat, index) => {
                const baseAngle = index * 90; // 4 cards, 90 degrees apart
                const orbitRadius = 200;
                
                return (
                  <motion.div
                    key={stat.label || stat.value}
                    className="absolute"
                    style={{
                      left: '50%',
                      top: '50%',
                      x: '-50%',
                      y: '-50%',
                    }}
                  >
                    <motion.div
                      style={{
                        transform: `rotate(${baseAngle}deg) translateX(${orbitRadius}px)`,
                      }}
                    >
                      {/* Counter-rotate to keep cards upright */}
                      <motion.div
                        style={{ rotate: useTransform(orbitRotation, (r) => -r - baseAngle) }}
                      >
                        {/* Card with 3D depth and visibility based on position */}
                        <motion.div
                          className="bg-white rounded-[20px] p-5 shadow-[0_10px_40px_rgba(0,0,0,0.1)] border border-gray-100 min-w-[110px] text-center"
                          style={{
                            opacity: useTransform(
                              orbitRotation,
                              (r) => {
                                const currentAngle = (r + baseAngle) % 360;
                                // Fade out when behind the blob (180-270 degrees range)
                                if (currentAngle > 150 && currentAngle < 300) {
                                  return 0.3;
                                }
                                return 1;
                              }
                            ),
                            scale: useTransform(
                              orbitRotation,
                              (r) => {
                                const currentAngle = (r + baseAngle) % 360;
                                // Scale down when behind
                                if (currentAngle > 150 && currentAngle < 300) {
                                  return 0.8;
                                }
                                return 1;
                              }
                            ),
                          }}
                          whileHover={{ scale: 1.1, boxShadow: '0 20px 60px rgba(24,144,255,0.2)' }}
                        >
                          <div className="w-10 h-10 mx-auto mb-2 bg-[#e6f4ff] rounded-[10px] flex items-center justify-center">
                            <stat.icon className="text-[#1890ff]" size={20} />
                          </div>
                          <div className="text-xl font-bold text-gray-900">{stat.value}</div>
                          {stat.label && (
                            <div className="text-xs text-gray-500 mt-1">{stat.label}</div>
                          )}
                        </motion.div>
                      </motion.div>
                    </motion.div>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Energy particles orbiting */}
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={`energy-${i}`}
                className="absolute w-2 h-2 bg-[#1890ff] rounded-full"
                style={{
                  left: '50%',
                  top: '50%',
                  boxShadow: '0 0 10px rgba(24,144,255,0.8)',
                }}
                animate={{
                  x: [
                    Math.cos((i * 45) * Math.PI / 180) * 130,
                    Math.cos((i * 45 + 180) * Math.PI / 180) * 130,
                    Math.cos((i * 45 + 360) * Math.PI / 180) * 130,
                  ],
                  y: [
                    Math.sin((i * 45) * Math.PI / 180) * 130,
                    Math.sin((i * 45 + 180) * Math.PI / 180) * 130,
                    Math.sin((i * 45 + 360) * Math.PI / 180) * 130,
                  ],
                  opacity: [0.3, 1, 0.3],
                  scale: [1, 1.5, 1],
                }}
                transition={{
                  duration: 4 + i * 0.5,
                  repeat: Infinity,
                  ease: 'linear',
                  delay: i * 0.3,
                }}
              />
            ))}
          </motion.div>
        </div>
      </Container>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
