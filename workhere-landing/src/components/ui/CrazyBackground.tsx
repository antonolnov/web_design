'use client';

import { motion } from 'framer-motion';

interface CrazyBackgroundProps {
  variant?: 'particles' | 'waves' | 'blobs' | 'grid' | 'aurora';
  intensity?: 'low' | 'medium' | 'high';
  color?: string;
}

export default function CrazyBackground({ 
  variant = 'particles', 
  intensity = 'medium',
  color = '#1890ff'
}: CrazyBackgroundProps) {
  
  // Optimized counts - much fewer particles for better performance
  const counts = { low: 6, medium: 10, high: 15 };
  const count = counts[intensity];

  if (variant === 'particles') {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(count)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: 3 + (i % 4) * 2,
              height: 3 + (i % 4) * 2,
              left: `${(i * 10) % 100}%`,
              top: `${(i * 8) % 100}%`,
              background: i % 2 === 0 ? color : `${color}60`,
            }}
            animate={{
              y: [0, -40 - (i % 20), 0],
              opacity: [0.15, 0.5, 0.15],
            }}
            transition={{
              duration: 6 + (i % 4),
              repeat: Infinity,
              delay: (i * 0.3) % 4,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    );
  }

  if (variant === 'waves') {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-[200%] h-[60%] left-[-50%]"
            style={{
              top: `${30 + i * 20}%`,
              background: `linear-gradient(90deg, transparent, ${color}${8 + i * 3}, transparent)`,
              transform: 'rotate(-3deg)',
            }}
            animate={{
              x: ['-30%', '0%', '-30%'],
              opacity: [0.1, 0.25, 0.1],
            }}
            transition={{
              duration: 12 + i * 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    );
  }

  if (variant === 'blobs') {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(Math.min(count, 4))].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full blur-3xl"
            style={{
              width: 250 + i * 80,
              height: 250 + i * 80,
              left: `${(i * 25) % 80}%`,
              top: `${(i * 20) % 70}%`,
              background: `radial-gradient(circle, ${color}20 0%, transparent 70%)`,
            }}
            animate={{
              x: [0, 60 * (i % 2 === 0 ? 1 : -1), 0],
              y: [0, 40 * (i % 2 === 0 ? -1 : 1), 0],
              scale: [1, 1.15, 1],
            }}
            transition={{
              duration: 15 + i * 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    );
  }

  if (variant === 'grid') {
    return (
      <motion.div 
        className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(${color} 1px, transparent 1px), linear-gradient(90deg, ${color} 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
        animate={{ y: [0, 60, 0] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      />
    );
  }

  if (variant === 'aurora') {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-full h-[40%] blur-[80px]"
            style={{
              top: `${i * 25}%`,
              background: `linear-gradient(${90 + i * 40}deg, 
                transparent, 
                ${color}15, 
                transparent
              )`,
            }}
            animate={{
              x: ['-15%', '15%', '-15%'],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 12 + i * 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.8,
            }}
          />
        ))}
      </div>
    );
  }

  return null;
}
