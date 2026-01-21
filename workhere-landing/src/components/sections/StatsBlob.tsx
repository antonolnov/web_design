'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Building2, Users, Sparkles, Zap, Shield, Globe } from 'lucide-react';
import Container from '../ui/Container';

const stats = [
  { icon: Building2, value: '1500+', label: 'Компаний', angle: 0 },
  { icon: Users, value: '10 000+', label: 'Рекрутеров', angle: 60 },
  { icon: Sparkles, value: 'AI', label: 'Powered', angle: 120 },
  { icon: Zap, value: '50M+', label: 'Кандидатов', angle: 180 },
  { icon: Shield, value: '99.9%', label: 'Uptime', angle: 240 },
  { icon: Globe, value: '24/7', label: 'Поддержка', angle: 300 },
];

export default function StatsBlob() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);

  return (
    <section ref={containerRef} className="py-32 bg-gradient-to-b from-[#f0f7ff] to-white overflow-hidden">
      <Container>
        <div className="relative flex items-center justify-center min-h-[600px]">
          {/* Central Blob */}
          <motion.div
            className="relative w-64 h-64 md:w-80 md:h-80"
            style={{ scale }}
          >
            {/* Animated gradient blob */}
            <motion.div
              className="absolute inset-0"
              style={{ rotate }}
            >
              <svg viewBox="0 0 200 200" className="w-full h-full">
                <defs>
                  <linearGradient id="blobGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <motion.stop
                      offset="0%"
                      animate={{
                        stopColor: ['#1890ff', '#40a9ff', '#1890ff'],
                      }}
                      transition={{ duration: 4, repeat: Infinity }}
                    />
                    <motion.stop
                      offset="50%"
                      animate={{
                        stopColor: ['#40a9ff', '#69c0ff', '#40a9ff'],
                      }}
                      transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                    />
                    <motion.stop
                      offset="100%"
                      animate={{
                        stopColor: ['#69c0ff', '#1890ff', '#69c0ff'],
                      }}
                      transition={{ duration: 4, repeat: Infinity, delay: 2 }}
                    />
                  </linearGradient>
                </defs>
                <motion.path
                  fill="url(#blobGradient)"
                  animate={{
                    d: [
                      "M44.5,-76.3C57.1,-68.2,66.4,-54.8,73.2,-40.4C80,-26.1,84.3,-10.8,83.1,4.1C81.9,19,75.2,33.5,65.7,45.5C56.2,57.5,43.9,67,30.1,73.2C16.3,79.4,1,82.4,-14.2,80.6C-29.4,78.8,-44.5,72.2,-56.8,62C-69.1,51.8,-78.6,38,-82.4,22.8C-86.2,7.6,-84.3,-9,-78.4,-23.8C-72.5,-38.6,-62.6,-51.6,-49.9,-59.6C-37.2,-67.6,-21.7,-70.6,-5.9,-71.3C9.9,-72,31.9,-84.4,44.5,-76.3Z",
                      "M47.7,-79.7C60.9,-71.8,70.1,-57.1,76.5,-41.6C82.9,-26.1,86.5,-9.8,84.3,5.4C82.1,20.6,74.1,34.7,64.2,47.2C54.3,59.7,42.5,70.6,28.5,76.6C14.5,82.6,-1.7,83.7,-17.3,80.2C-32.9,76.7,-47.9,68.6,-59.4,57C-70.9,45.4,-78.9,30.3,-82.3,14C-85.7,-2.3,-84.5,-19.8,-77.8,-34.4C-71.1,-49,-58.9,-60.7,-44.8,-68.3C-30.7,-75.9,-14.7,-79.4,1.2,-81.4C17.1,-83.4,34.5,-87.6,47.7,-79.7Z",
                      "M44.5,-76.3C57.1,-68.2,66.4,-54.8,73.2,-40.4C80,-26.1,84.3,-10.8,83.1,4.1C81.9,19,75.2,33.5,65.7,45.5C56.2,57.5,43.9,67,30.1,73.2C16.3,79.4,1,82.4,-14.2,80.6C-29.4,78.8,-44.5,72.2,-56.8,62C-69.1,51.8,-78.6,38,-82.4,22.8C-86.2,7.6,-84.3,-9,-78.4,-23.8C-72.5,-38.6,-62.6,-51.6,-49.9,-59.6C-37.2,-67.6,-21.7,-70.6,-5.9,-71.3C9.9,-72,31.9,-84.4,44.5,-76.3Z",
                    ],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  transform="translate(100, 100)"
                />
              </svg>
            </motion.div>

            {/* Center content */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white">
                <motion.div
                  className="text-4xl md:text-5xl font-bold mb-2"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  WorkHere
                </motion.div>
                <div className="text-sm opacity-80">Платформа #1</div>
              </div>
            </div>
          </motion.div>

          {/* Orbiting Stats */}
          {stats.map((stat, index) => {
            const radius = 220;
            const baseAngle = stat.angle;
            
            return (
              <motion.div
                key={stat.label}
                className="absolute"
                style={{
                  left: '50%',
                  top: '50%',
                }}
                animate={{
                  x: Math.cos((baseAngle + (index * 2)) * Math.PI / 180) * radius - 60,
                  y: Math.sin((baseAngle + (index * 2)) * Math.PI / 180) * radius - 40,
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  x: { duration: 20, repeat: Infinity, ease: 'linear' },
                  y: { duration: 20, repeat: Infinity, ease: 'linear' },
                  rotate: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
                }}
              >
                <motion.div
                  className="bg-white rounded-[20px] p-5 shadow-[0_10px_40px_rgba(0,0,0,0.1)] border border-gray-100 min-w-[120px] text-center"
                  whileHover={{ scale: 1.1, boxShadow: '0 20px 60px rgba(24,144,255,0.2)' }}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="w-10 h-10 mx-auto mb-2 bg-[#e6f4ff] rounded-[10px] flex items-center justify-center">
                    <stat.icon className="text-[#1890ff]" size={20} />
                  </div>
                  <div className="text-xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-xs text-gray-500">{stat.label}</div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
