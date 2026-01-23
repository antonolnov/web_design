'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Mascot from './Mascot';

interface SectionDividerProps {
  showMascot?: boolean;
  variant?: 'wave' | 'simple';
}

export default function SectionDivider({ showMascot = true, variant = 'wave' }: SectionDividerProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <div ref={ref} className="relative py-16 overflow-hidden">
      {/* Animated wave */}
      {variant === 'wave' && (
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
        >
          <svg className="w-full h-24" viewBox="0 0 1440 120" preserveAspectRatio="none">
            <motion.path
              d="M0,60 C240,120 480,0 720,60 C960,120 1200,0 1440,60 L1440,120 L0,120 Z"
              fill="url(#waveGradient)"
              initial={{ d: "M0,60 C240,120 480,0 720,60 C960,120 1200,0 1440,60 L1440,120 L0,120 Z" }}
              animate={{
                d: [
                  "M0,60 C240,120 480,0 720,60 C960,120 1200,0 1440,60 L1440,120 L0,120 Z",
                  "M0,80 C240,20 480,100 720,40 C960,80 1200,40 1440,80 L1440,120 L0,120 Z",
                  "M0,60 C240,120 480,0 720,60 C960,120 1200,0 1440,60 L1440,120 L0,120 Z",
                ],
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            <defs>
              <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#e6f4ff" />
                <stop offset="50%" stopColor="#f0f9ff" />
                <stop offset="100%" stopColor="#e6f4ff" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>
      )}

      {/* Mascot */}
      {showMascot && (
        <motion.div
          className="relative z-10 flex justify-center"
          initial={{ opacity: 0, scale: 0.5, y: 30 }}
          animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
          transition={{ type: 'spring', stiffness: 100, damping: 15 }}
        >
          <motion.div
            animate={{
              y: [-5, 5, -5],
              rotate: [-3, 3, -3],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <Mascot size={100} />
          </motion.div>
        </motion.div>
      )}

      {/* Floating dots */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-[#1890ff]"
            style={{
              left: `${15 + i * 15}%`,
              top: '50%',
              opacity: 0.2,
            }}
            animate={{
              y: [-10, 10, -10],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.3,
            }}
          />
        ))}
      </div>
    </div>
  );
}
