'use client';

import { motion } from 'framer-motion';

interface CrazyBackgroundProps {
  variant?: 'particles' | 'waves' | 'blobs' | 'matrix' | 'aurora';
  intensity?: 'low' | 'medium' | 'high' | 'insane';
  color?: string;
}

export default function CrazyBackground({ 
  variant = 'particles', 
  intensity = 'medium',
  color = '#1890ff'
}: CrazyBackgroundProps) {
  
  const counts = { low: 15, medium: 30, high: 50, insane: 80 };
  const count = counts[intensity];

  if (variant === 'particles') {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(count)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: 2 + (i % 6) * 2,
              height: 2 + (i % 6) * 2,
              left: `${(i * 3.7) % 100}%`,
              top: `${(i * 2.3) % 100}%`,
              background: i % 3 === 0 ? color : `${color}80`,
              boxShadow: `0 0 ${10 + (i % 10)}px ${color}60`,
            }}
            animate={{
              y: [0, -50 - (i % 30), 0],
              x: [0, (i % 2 === 0 ? 1 : -1) * (20 + i % 20), 0],
              scale: [1, 1.5, 1],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + (i % 5),
              repeat: Infinity,
              delay: (i * 0.1) % 3,
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
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-[200%] h-[200%] left-[-50%]"
            style={{
              top: `${20 + i * 15}%`,
              background: `linear-gradient(90deg, transparent, ${color}${10 + i * 5}, transparent)`,
              transform: 'rotate(-5deg)',
            }}
            animate={{
              x: ['-50%', '0%', '-50%'],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 8 + i * 2,
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
        {[...Array(Math.min(count, 8))].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full blur-3xl"
            style={{
              width: 200 + i * 100,
              height: 200 + i * 100,
              left: `${(i * 20) % 80}%`,
              top: `${(i * 25) % 70}%`,
              background: `radial-gradient(circle, ${color}30 0%, transparent 70%)`,
            }}
            animate={{
              x: [0, 100 * (i % 2 === 0 ? 1 : -1), 0],
              y: [0, 80 * (i % 2 === 0 ? -1 : 1), 0],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    );
  }

  if (variant === 'matrix') {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(count)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-px"
            style={{
              height: 20 + (i % 50),
              left: `${(i * 2) % 100}%`,
              top: `-${20 + (i % 50)}px`,
              background: `linear-gradient(to bottom, transparent, ${color}, transparent)`,
            }}
            animate={{
              y: ['0vh', '120vh'],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2 + (i % 3),
              repeat: Infinity,
              delay: (i * 0.1) % 5,
              ease: "linear",
            }}
          />
        ))}
      </div>
    );
  }

  if (variant === 'aurora') {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-full h-[50%] blur-[100px]"
            style={{
              top: `${i * 15}%`,
              background: `linear-gradient(${90 + i * 30}deg, 
                transparent, 
                ${color}${20 + i * 5}, 
                #40a9ff${15 + i * 3}, 
                transparent
              )`,
            }}
            animate={{
              x: ['-20%', '20%', '-20%'],
              opacity: [0.3, 0.6, 0.3],
              skewX: [-5, 5, -5],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          />
        ))}
      </div>
    );
  }

  return null;
}
