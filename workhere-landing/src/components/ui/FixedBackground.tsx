'use client';

import { motion } from 'framer-motion';

export default function FixedBackground() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Static gradient background */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, #e8f4ff 0%, #f0f7ff 50%, #e0efff 100%)',
        }}
      />

      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(#1890ff 1px, transparent 1px), linear-gradient(90deg, #1890ff 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      {/* Static gradient orbs */}
      <div 
        className="absolute w-[800px] h-[800px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(24, 144, 255, 0.12) 0%, transparent 70%)',
          top: '-200px',
          right: '-200px',
        }}
      />
      
      <div 
        className="absolute w-[600px] h-[600px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.08) 0%, transparent 70%)',
          bottom: '10%',
          left: '-150px',
        }}
      />

      <div 
        className="absolute w-[500px] h-[500px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(20, 184, 166, 0.08) 0%, transparent 70%)',
          top: '40%',
          right: '10%',
        }}
      />

      <div 
        className="absolute w-[400px] h-[400px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(24, 144, 255, 0.10) 0%, transparent 70%)',
          bottom: '20%',
          right: '30%',
        }}
      />

      {/* Very subtle animated dots for life */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-[#1890ff]"
          style={{
            width: 4 + (i % 3) * 2,
            height: 4 + (i % 3) * 2,
            left: `${10 + (i * 7) % 80}%`,
            top: `${15 + (i * 6.5) % 70}%`,
            opacity: 0.06,
          }}
          animate={{
            opacity: [0.04, 0.08, 0.04],
          }}
          transition={{
            duration: 3 + (i % 2),
            repeat: Infinity,
            delay: i * 0.3,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}
