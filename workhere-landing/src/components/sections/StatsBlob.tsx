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

// Electric arc configurations - lots of them for intense effect
const electricArcs = [...Array(24)].map((_, i) => ({
  angle: i * 15,
  length: 60 + Math.random() * 80,
  width: 1 + Math.random() * 2,
  delay: Math.random() * 2,
  duration: 0.3 + Math.random() * 0.5,
}));

export default function StatsBlob() {
  const containerRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [ripples, setRipples] = useState<number[]>([]);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 30, damping: 25 });
  const orbitAngle = useTransform(smoothProgress, [0, 1], [0, 360]);

  const handleBlobHover = () => {
    setIsHovered(true);
    setRipples(prev => [...prev, Date.now()]);
    setTimeout(() => setRipples(prev => prev.slice(1)), 1500);
  };

  return (
    <section 
      ref={containerRef} 
      className="relative py-32 overflow-hidden"
      style={{ 
        minHeight: '100vh',
        perspective: '1200px',
        perspectiveOrigin: '50% 50%',
        // Seamless gradient that matches hero section
        background: 'linear-gradient(180deg, #f0f7ff 0%, #e8f4ff 20%, #f0f7ff 50%, #ffffff 100%)',
      }}
    >
      {/* Seamless top transition - matches hero gradient */}
      <div 
        className="absolute top-0 left-0 right-0 h-64 pointer-events-none"
        style={{
          background: 'linear-gradient(180deg, #f0f7ff 0%, transparent 100%)',
        }}
      />

      {/* Deep ambient glow */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 80% 60% at 50% 50%, rgba(24,144,255,0.15) 0%, transparent 50%),
            radial-gradient(ellipse 60% 40% at 30% 60%, rgba(24,144,255,0.08) 0%, transparent 40%),
            radial-gradient(ellipse 50% 50% at 70% 40%, rgba(64,169,255,0.06) 0%, transparent 40%)
          `,
        }}
      />

      {/* Floating depth layers */}
      <motion.div
        className="absolute top-1/3 left-1/4 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(24,144,255,0.08) 0%, transparent 60%)',
          filter: 'blur(80px)',
        }}
        animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />

      <Container className="relative z-10">
        <div 
          className="flex items-center justify-center" 
          style={{ minHeight: '600px', transformStyle: 'preserve-3d' }}
        >
          <div 
            className="relative"
            style={{ transformStyle: 'preserve-3d', transform: 'rotateX(5deg)' }}
          >
            {/* Main Blob with INTENSE electric effect */}
            <motion.div
              className="relative cursor-pointer"
              onMouseEnter={handleBlobHover}
              onMouseLeave={() => setIsHovered(false)}
              animate={{ scale: isHovered ? 1.08 : 1 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              {/* INTENSE Electric arcs - idle state */}
              {electricArcs.map((arc, i) => (
                <motion.div
                  key={`arc-${i}`}
                  className="absolute pointer-events-none"
                  style={{
                    left: '50%',
                    top: '50%',
                    width: arc.width,
                    height: arc.length,
                    transformOrigin: 'center top',
                    transform: `rotate(${arc.angle}deg) translateX(-50%)`,
                  }}
                >
                  <motion.div
                    className="w-full h-full"
                    style={{
                      background: `linear-gradient(to bottom, 
                        rgba(24,144,255,0.9) 0%, 
                        rgba(64,169,255,0.7) 20%, 
                        rgba(24,144,255,0.5) 50%, 
                        transparent 100%)`,
                      filter: 'blur(1px)',
                      borderRadius: '2px',
                    }}
                    animate={{
                      opacity: [0, 1, 0.8, 1, 0],
                      scaleY: [0, 1, 0.7, 1, 0],
                    }}
                    transition={{
                      duration: arc.duration,
                      repeat: Infinity,
                      delay: arc.delay,
                      repeatDelay: 0.5 + Math.random() * 1.5,
                    }}
                  />
                </motion.div>
              ))}

              {/* Secondary shorter arcs - more chaos */}
              {[...Array(16)].map((_, i) => (
                <motion.div
                  key={`short-arc-${i}`}
                  className="absolute pointer-events-none"
                  style={{
                    left: '50%',
                    top: '50%',
                    width: 2,
                    height: 30 + Math.random() * 40,
                    transformOrigin: 'center top',
                    transform: `rotate(${i * 22.5 + 10}deg) translateX(-50%)`,
                  }}
                >
                  <motion.div
                    className="w-full h-full bg-gradient-to-b from-white via-[#40a9ff] to-transparent"
                    style={{ filter: 'blur(0.5px)', borderRadius: '1px' }}
                    animate={{
                      opacity: [0, 1, 0],
                      scaleY: [0, 1, 0],
                    }}
                    transition={{
                      duration: 0.2,
                      repeat: Infinity,
                      delay: Math.random() * 3,
                      repeatDelay: 1 + Math.random() * 2,
                    }}
                  />
                </motion.div>
              ))}

              {/* Electric glow pulse */}
              <motion.div
                className="absolute rounded-full pointer-events-none"
                style={{
                  width: 350,
                  height: 350,
                  left: '50%',
                  top: '50%',
                  x: '-50%',
                  y: '-50%',
                  background: 'radial-gradient(circle, rgba(24,144,255,0.4) 0%, transparent 60%)',
                  filter: 'blur(30px)',
                }}
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />

              {/* Outer glow */}
              <motion.div
                className="absolute rounded-full pointer-events-none"
                style={{
                  width: 280,
                  height: 280,
                  left: '50%',
                  top: '50%',
                  x: '-50%',
                  y: '-50%',
                  background: 'radial-gradient(circle, rgba(24,144,255,0.5) 0%, transparent 70%)',
                  filter: 'blur(40px)',
                }}
                animate={{
                  scale: isHovered ? 1.5 : 1,
                  opacity: isHovered ? 1 : 0.7,
                }}
                transition={{ duration: 0.4 }}
              />

              {/* Shadow for depth */}
              <div
                className="absolute rounded-[50%] bg-black/15 pointer-events-none"
                style={{
                  width: 180,
                  height: 30,
                  left: '50%',
                  bottom: -50,
                  transform: 'translateX(-50%)',
                  filter: 'blur(15px)',
                }}
              />

              {/* Main sphere */}
              <motion.div
                className="relative w-56 h-56 rounded-full"
                style={{
                  background: `
                    radial-gradient(circle at 30% 25%, rgba(255,255,255,0.5) 0%, transparent 35%),
                    radial-gradient(circle at 50% 50%, #40a9ff 0%, #1890ff 35%, #0d6edb 70%, #0050b3 100%)
                  `,
                  boxShadow: `
                    0 0 80px rgba(24,144,255,0.5),
                    0 0 160px rgba(24,144,255,0.3),
                    inset 0 0 60px rgba(255,255,255,0.15),
                    inset -20px -20px 60px rgba(0,0,0,0.2)
                  `,
                }}
              >
                {/* Rotating highlight */}
                <motion.div
                  className="absolute inset-0 rounded-full overflow-hidden"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                >
                  <div 
                    className="absolute w-1/2 h-full opacity-30"
                    style={{ background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.4) 50%, transparent 100%)' }}
                  />
                </motion.div>

                {/* Inner glow pulse */}
                <motion.div
                  className="absolute inset-4 rounded-full"
                  style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.4) 0%, transparent 70%)' }}
                  animate={{
                    scale: isHovered ? [1, 1.3, 1] : [1, 1.1, 1],
                    opacity: isHovered ? [0.5, 1, 0.5] : [0.3, 0.5, 0.3],
                  }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />

                {/* Center text */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.span
                    className="text-white font-bold text-3xl tracking-wide"
                    style={{ textShadow: '0 2px 30px rgba(0,0,0,0.4)' }}
                    animate={{ scale: isHovered ? 1.05 : 1 }}
                  >
                    WorkHere
                  </motion.span>
                </div>

                {/* Hover ripples */}
                {ripples.map((id) => (
                  <motion.div
                    key={id}
                    className="absolute inset-0 rounded-full border-2 border-white/60"
                    initial={{ scale: 1, opacity: 0.8 }}
                    animate={{ scale: 3, opacity: 0 }}
                    transition={{ duration: 1.2, ease: 'easeOut' }}
                  />
                ))}

                {/* Hover particles */}
                {isHovered && [...Array(16)].map((_, i) => (
                  <motion.div
                    key={`p-${i}`}
                    className="absolute w-2 h-2 bg-white rounded-full"
                    style={{ left: '50%', top: '50%', boxShadow: '0 0 15px rgba(255,255,255,1)' }}
                    initial={{ x: 0, y: 0, scale: 0 }}
                    animate={{
                      x: Math.cos(i * 22.5 * Math.PI / 180) * 180,
                      y: Math.sin(i * 22.5 * Math.PI / 180) * 180,
                      scale: [0, 1.5, 0],
                      opacity: [0, 1, 0],
                    }}
                    transition={{ duration: 1.2, delay: i * 0.03 }}
                  />
                ))}
              </motion.div>
            </motion.div>

            {/* 3D Orbiting Cards - BETTER VISIBILITY */}
            {stats.map((stat, index) => {
              const baseAngle = index * 90;
              const orbitRadius = 240;
              
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
                            // More visible range: only very back is faded
                            return 0.4 + 0.6 * Math.max(0, (Math.cos(rad) + 0.5) / 1.5);
                          }),
                          scale: useTransform(orbitAngle, (angle) => {
                            const cardAngle = (angle + baseAngle) % 360;
                            const rad = cardAngle * Math.PI / 180;
                            return 0.85 + 0.15 * (Math.cos(rad) + 1) / 2;
                          }),
                        }}
                      >
                        {/* Card with HIGH CONTRAST for readability */}
                        <motion.div
                          className="rounded-[20px] p-5 min-w-[130px] text-center"
                          style={{
                            background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
                            boxShadow: `
                              0 15px 50px rgba(0,0,0,0.15),
                              0 5px 20px rgba(24,144,255,0.1),
                              inset 0 1px 0 rgba(255,255,255,1),
                              0 0 0 1px rgba(24,144,255,0.1)
                            `,
                          }}
                          whileHover={{ 
                            scale: 1.1, 
                            boxShadow: '0 25px 70px rgba(24,144,255,0.25), 0 0 0 2px rgba(24,144,255,0.3)',
                          }}
                        >
                          <div 
                            className="w-12 h-12 mx-auto mb-3 rounded-[14px] flex items-center justify-center"
                            style={{
                              background: 'linear-gradient(135deg, #e6f4ff 0%, #bae0ff 100%)',
                              boxShadow: 'inset 0 2px 4px rgba(24,144,255,0.1)',
                            }}
                          >
                            <stat.icon className="text-[#1890ff]" size={24} />
                          </div>
                          <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                          {stat.label && (
                            <div className="text-sm text-gray-600 mt-1 font-medium">{stat.label}</div>
                          )}
                        </motion.div>
                      </motion.div>
                    </motion.div>
                  </motion.div>
                </motion.div>
              );
            })}

            {/* Orbit path - subtle */}
            <div 
              className="absolute rounded-full border border-[#1890ff]/10 pointer-events-none"
              style={{
                width: 480,
                height: 480,
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%) rotateX(70deg)',
              }}
            />
          </div>
        </div>
      </Container>

      {/* Bottom seamless transition */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-48 pointer-events-none"
        style={{ background: 'linear-gradient(180deg, transparent 0%, #ffffff 100%)' }}
      />
    </section>
  );
}
