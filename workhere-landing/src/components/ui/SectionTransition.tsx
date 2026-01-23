'use client';

import { motion } from 'framer-motion';

interface SectionTransitionProps {
  from?: 'light' | 'dark';
  to?: 'light' | 'dark';
  height?: number;
}

export default function SectionTransition({ 
  from = 'light', 
  to = 'dark',
  height = 120 
}: SectionTransitionProps) {
  const gradients = {
    'light-dark': 'linear-gradient(180deg, #ffffff 0%, #f0f4f8 20%, #1a2332 80%, #0a1628 100%)',
    'dark-light': 'linear-gradient(180deg, #0a1628 0%, #1a2332 20%, #f0f4f8 80%, #ffffff 100%)',
    'light-light': 'linear-gradient(180deg, #ffffff 0%, #f8fafc 50%, #ffffff 100%)',
    'dark-dark': 'linear-gradient(180deg, #0a1628 0%, #0f1d2e 50%, #0a1628 100%)',
  };

  const key = `${from}-${to}` as keyof typeof gradients;
  const gradient = gradients[key] || gradients['light-dark'];

  return (
    <div 
      className="relative w-full overflow-hidden"
      style={{ 
        height,
        background: gradient,
      }}
    >
      {/* Subtle animated wave */}
      <svg 
        className="absolute inset-0 w-full h-full" 
        preserveAspectRatio="none"
        viewBox="0 0 1440 120"
      >
        <motion.path
          d="M0,60 C360,90 720,30 1080,60 C1260,75 1350,45 1440,60 L1440,120 L0,120 Z"
          fill={to === 'dark' ? 'rgba(10,22,40,0.3)' : 'rgba(255,255,255,0.3)'}
          animate={{
            d: [
              "M0,60 C360,90 720,30 1080,60 C1260,75 1350,45 1440,60 L1440,120 L0,120 Z",
              "M0,60 C360,30 720,90 1080,60 C1260,45 1350,75 1440,60 L1440,120 L0,120 Z",
              "M0,60 C360,90 720,30 1080,60 C1260,75 1350,45 1440,60 L1440,120 L0,120 Z",
            ],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </svg>
    </div>
  );
}
