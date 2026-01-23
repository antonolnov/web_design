'use client';

import { motion, useScroll, useTransform } from 'framer-motion';

export default function FixedBackground() {
  const { scrollYProgress } = useScroll();
  
  // Main background gradient - changes color on scroll
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.2, 0.4, 0.6, 0.8, 1],
    [
      'linear-gradient(135deg, #e8f4ff 0%, #f0f7ff 50%, #e8f4ff 100%)',
      'linear-gradient(135deg, #ede9fe 0%, #f5f3ff 50%, #ede9fe 100%)',
      'linear-gradient(135deg, #e0f2fe 0%, #e0f7fa 50%, #e0f2fe 100%)',
      'linear-gradient(135deg, #fef3c7 0%, #fff7ed 50%, #fef3c7 100%)',
      'linear-gradient(135deg, #ecfdf5 0%, #f0fdf4 50%, #ecfdf5 100%)',
      'linear-gradient(135deg, #e8f4ff 0%, #f0f7ff 50%, #e8f4ff 100%)',
    ]
  );

  // Orb colors
  const orb1Background = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1],
    [
      'radial-gradient(circle, rgba(24, 144, 255, 0.15) 0%, transparent 70%)',
      'radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, transparent 70%)',
      'radial-gradient(circle, rgba(20, 184, 166, 0.15) 0%, transparent 70%)',
      'radial-gradient(circle, rgba(249, 115, 22, 0.12) 0%, transparent 70%)',
      'radial-gradient(circle, rgba(24, 144, 255, 0.15) 0%, transparent 70%)',
    ]
  );

  const orb2Background = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1],
    [
      'radial-gradient(circle, rgba(64, 169, 255, 0.12) 0%, transparent 70%)',
      'radial-gradient(circle, rgba(167, 139, 250, 0.12) 0%, transparent 70%)',
      'radial-gradient(circle, rgba(45, 212, 191, 0.12) 0%, transparent 70%)',
      'radial-gradient(circle, rgba(251, 146, 60, 0.10) 0%, transparent 70%)',
      'radial-gradient(circle, rgba(64, 169, 255, 0.12) 0%, transparent 70%)',
    ]
  );

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Animated gradient background - changes color on scroll */}
      <motion.div 
        className="absolute inset-0"
        style={{ background: backgroundColor }}
      />

      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: 'linear-gradient(#1890ff 1px, transparent 1px), linear-gradient(90deg, #1890ff 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      {/* Gradient orbs - colors change with scroll */}
      <motion.div 
        className="absolute w-[800px] h-[800px] rounded-full"
        style={{
          background: orb1Background,
          top: '-200px',
          right: '-200px',
        }}
      />
      
      <motion.div 
        className="absolute w-[600px] h-[600px] rounded-full"
        style={{
          background: orb2Background,
          bottom: '10%',
          left: '-150px',
        }}
      />

      <motion.div 
        className="absolute w-[500px] h-[500px] rounded-full"
        style={{
          background: orb1Background,
          top: '40%',
          right: '10%',
        }}
      />

      <motion.div 
        className="absolute w-[400px] h-[400px] rounded-full"
        style={{
          background: orb2Background,
          bottom: '30%',
          left: '20%',
        }}
      />

      {/* Subtle static dots */}
      {[...Array(10)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full"
          style={{
            width: 4 + (i % 3) * 2,
            height: 4 + (i % 3) * 2,
            left: `${12 + (i * 8) % 76}%`,
            top: `${18 + (i * 7) % 64}%`,
            backgroundColor: '#1890ff',
            opacity: 0.05,
          }}
        />
      ))}
    </div>
  );
}
