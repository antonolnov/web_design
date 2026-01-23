'use client';

import { motion } from 'framer-motion';

interface CrazyBackgroundProps {
  variant?: 'particles' | 'gradient' | 'grid';
  intensity?: 'low' | 'medium' | 'high';
  color?: string;
}

export default function CrazyBackground({ 
  variant = 'particles', 
  intensity = 'medium',
  color = '#1890ff'
}: CrazyBackgroundProps) {
  
  const counts = { low: 5, medium: 8, high: 12 };
  const count = counts[intensity];

  if (variant === 'particles') {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(count)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: 4 + (i % 4) * 2,
              height: 4 + (i % 4) * 2,
              left: `${(i * 12) % 100}%`,
              top: `${(i * 10) % 100}%`,
              background: color,
              opacity: 0.15,
            }}
            animate={{
              y: [0, -50, 0],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 8 + (i % 4) * 2,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    );
  }

  if (variant === 'gradient') {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Static gradients - no blur, no animation */}
        <div 
          className="absolute w-[500px] h-[500px] rounded-full opacity-20"
          style={{
            background: `radial-gradient(circle, ${color}30 0%, transparent 70%)`,
            left: '10%',
            top: '20%',
          }}
        />
        <div 
          className="absolute w-[400px] h-[400px] rounded-full opacity-15"
          style={{
            background: `radial-gradient(circle, ${color}25 0%, transparent 70%)`,
            right: '10%',
            bottom: '20%',
          }}
        />
      </div>
    );
  }

  if (variant === 'grid') {
    return (
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(${color} 1px, transparent 1px), linear-gradient(90deg, ${color} 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />
    );
  }

  return null;
}
