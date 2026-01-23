'use client';

import { motion, useScroll, useTransform } from 'framer-motion';

export default function FixedBackground() {
  const { scrollYProgress } = useScroll();
  
  // Smooth color transitions based on scroll position
  const bgColor1 = useTransform(
    scrollYProgress,
    [0, 0.2, 0.4, 0.6, 0.8, 1],
    [
      '#e8f4ff', // light blue
      '#ede9fe', // light purple
      '#e0f2fe', // light cyan
      '#fef3c7', // light amber
      '#ecfdf5', // light green
      '#e8f4ff', // back to light blue
    ]
  );

  const bgColor2 = useTransform(
    scrollYProgress,
    [0, 0.2, 0.4, 0.6, 0.8, 1],
    [
      '#f0f7ff', // soft blue
      '#f5f3ff', // soft purple
      '#e0f7fa', // soft teal
      '#fff7ed', // soft orange
      '#f0fdf4', // soft green
      '#f0f7ff', // back to soft blue
    ]
  );

  const orbColor1 = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1],
    [
      'rgba(24, 144, 255, 0.15)',   // blue
      'rgba(139, 92, 246, 0.15)',   // purple
      'rgba(20, 184, 166, 0.15)',   // teal
      'rgba(249, 115, 22, 0.12)',   // orange
      'rgba(24, 144, 255, 0.15)',   // blue
    ]
  );

  const orbColor2 = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1],
    [
      'rgba(64, 169, 255, 0.12)',   // light blue
      'rgba(167, 139, 250, 0.12)', // light purple
      'rgba(45, 212, 191, 0.12)',  // light teal
      'rgba(251, 146, 60, 0.10)',  // light orange
      'rgba(64, 169, 255, 0.12)',  // light blue
    ]
  );

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Animated gradient background - changes color on scroll */}
      <motion.div 
        className="absolute inset-0"
        style={{
          background: useTransform(
            [bgColor1, bgColor2],
            ([c1, c2]) => `linear-gradient(135deg, ${c1} 0%, ${c2} 50%, ${c1} 100%)`
          ),
        }}
      />

      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: 'linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)',
          backgroundSize: '80px 80px',
          color: '#1890ff',
        }}
      />

      {/* Gradient orbs - colors change with scroll */}
      <motion.div 
        className="absolute w-[800px] h-[800px] rounded-full"
        style={{
          background: useTransform(orbColor1, (c) => `radial-gradient(circle, ${c} 0%, transparent 70%)`),
          top: '-200px',
          right: '-200px',
        }}
      />
      
      <motion.div 
        className="absolute w-[600px] h-[600px] rounded-full"
        style={{
          background: useTransform(orbColor2, (c) => `radial-gradient(circle, ${c} 0%, transparent 70%)`),
          bottom: '10%',
          left: '-150px',
        }}
      />

      <motion.div 
        className="absolute w-[500px] h-[500px] rounded-full"
        style={{
          background: useTransform(orbColor1, (c) => `radial-gradient(circle, ${c} 0%, transparent 70%)`),
          top: '40%',
          right: '10%',
        }}
      />

      <motion.div 
        className="absolute w-[400px] h-[400px] rounded-full"
        style={{
          background: useTransform(orbColor2, (c) => `radial-gradient(circle, ${c} 0%, transparent 70%)`),
          bottom: '30%',
          left: '20%',
        }}
      />

      {/* Subtle dots */}
      {[...Array(10)].map((_, i) => (
        <motion.div
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
