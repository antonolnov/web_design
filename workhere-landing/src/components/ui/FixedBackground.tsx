'use client';

import { motion, useScroll, useTransform } from 'framer-motion';

export default function FixedBackground() {
  const { scrollYProgress } = useScroll();
  
  // Color transitions based on scroll
  // Start: light blue -> purple -> dark blue -> teal -> back to blue
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.2, 0.4, 0.6, 0.8, 1],
    [
      'linear-gradient(135deg, #e8f4ff 0%, #f0f7ff 50%, #e0efff 100%)',
      'linear-gradient(135deg, #e8f0ff 0%, #f0e8ff 50%, #e8e0ff 100%)',
      'linear-gradient(135deg, #f0e8ff 0%, #e8e8ff 50%, #e0e8ff 100%)',
      'linear-gradient(135deg, #e0f0ff 0%, #e8f8ff 50%, #e0ffff 100%)',
      'linear-gradient(135deg, #e8fff8 0%, #e0fff0 50%, #e8ffff 100%)',
      'linear-gradient(135deg, #e8f4ff 0%, #f0f7ff 50%, #e0efff 100%)',
    ]
  );

  // Subtle orb movements
  const orb1Y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const orb2Y = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const orb1Scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.2, 1]);
  const orb2Scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 1]);

  // Color shifts for orbs
  const orb1Color = useTransform(
    scrollYProgress,
    [0, 0.3, 0.6, 1],
    [
      'rgba(24, 144, 255, 0.15)',
      'rgba(139, 92, 246, 0.15)',
      'rgba(20, 184, 166, 0.15)',
      'rgba(24, 144, 255, 0.15)',
    ]
  );

  const orb2Color = useTransform(
    scrollYProgress,
    [0, 0.3, 0.6, 1],
    [
      'rgba(64, 169, 255, 0.12)',
      'rgba(167, 139, 250, 0.12)',
      'rgba(45, 212, 191, 0.12)',
      'rgba(64, 169, 255, 0.12)',
    ]
  );

  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      {/* Animated gradient background */}
      <motion.div 
        className="absolute inset-0"
        style={{ background: backgroundColor }}
      />

      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: 'linear-gradient(#1890ff 1px, transparent 1px), linear-gradient(90deg, #1890ff 1px, transparent 1px)',
          backgroundSize: '100px 100px',
        }}
      />

      {/* Floating gradient orbs with scroll-based color */}
      <motion.div 
        className="absolute w-[900px] h-[900px] rounded-full"
        style={{
          background: `radial-gradient(circle, ${orb1Color} 0%, transparent 70%)`,
          top: '-300px',
          right: '-300px',
          y: orb1Y,
          scale: orb1Scale,
        }}
      />
      
      <motion.div 
        className="absolute w-[700px] h-[700px] rounded-full"
        style={{
          background: `radial-gradient(circle, ${orb2Color} 0%, transparent 70%)`,
          bottom: '10%',
          left: '-200px',
          y: orb2Y,
          scale: orb2Scale,
        }}
      />

      <motion.div 
        className="absolute w-[500px] h-[500px] rounded-full"
        style={{
          background: `radial-gradient(circle, ${orb1Color} 0%, transparent 70%)`,
          top: '50%',
          right: '5%',
          y: orb2Y,
        }}
      />

      {/* Subtle animated dots */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: 3 + (i % 4) * 2,
            height: 3 + (i % 4) * 2,
            left: `${5 + (i * 5) % 90}%`,
            top: `${8 + (i * 5.3) % 85}%`,
            backgroundColor: '#1890ff',
            opacity: 0.06 + (i % 3) * 0.02,
          }}
          animate={{
            y: [0, -10, 0],
            opacity: [0.04, 0.08, 0.04],
          }}
          transition={{
            duration: 4 + (i % 3),
            repeat: Infinity,
            delay: i * 0.2,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}
