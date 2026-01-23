'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Mascot from './Mascot';

interface SectionDividerProps {
  showMascot?: boolean;
  variant?: 'wave' | 'simple' | 'crazy';
}

export default function SectionDivider({ showMascot = true, variant = 'crazy' }: SectionDividerProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <div ref={ref} className="relative py-20 overflow-hidden bg-gradient-to-b from-white via-[#f8fbff] to-white">
      {/* Animated waves */}
      <svg 
        className="absolute inset-0 w-full h-full" 
        preserveAspectRatio="none"
        viewBox="0 0 1440 200"
      >
        <motion.path
          d="M0,100 C240,150 480,50 720,100 C960,150 1200,50 1440,100 L1440,200 L0,200 Z"
          fill="rgba(24,144,255,0.05)"
          animate={{
            d: [
              "M0,100 C240,150 480,50 720,100 C960,150 1200,50 1440,100 L1440,200 L0,200 Z",
              "M0,100 C240,50 480,150 720,100 C960,50 1200,150 1440,100 L1440,200 L0,200 Z",
              "M0,100 C240,150 480,50 720,100 C960,150 1200,50 1440,100 L1440,200 L0,200 Z",
            ],
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.path
          d="M0,120 C360,80 720,160 1080,120 C1260,100 1350,130 1440,120 L1440,200 L0,200 Z"
          fill="rgba(24,144,255,0.03)"
          animate={{
            d: [
              "M0,120 C360,80 720,160 1080,120 C1260,100 1350,130 1440,120 L1440,200 L0,200 Z",
              "M0,120 C360,160 720,80 1080,120 C1260,140 1350,110 1440,120 L1440,200 L0,200 Z",
              "M0,120 C360,80 720,160 1080,120 C1260,100 1350,130 1440,120 L1440,200 L0,200 Z",
            ],
          }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />
      </svg>

      {/* Floating particles */}
      {variant === 'crazy' && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-[#1890ff]"
              style={{
                width: 3 + (i % 5),
                height: 3 + (i % 5),
                left: `${(i * 3.5) % 100}%`,
                top: `${(i * 2.8) % 100}%`,
                opacity: 0.2,
              }}
              animate={{
                y: [0, -50, 0],
                x: [0, (i % 2 === 0 ? 1 : -1) * 20, 0],
                scale: [1, 1.5, 1],
                opacity: [0.1, 0.4, 0.1],
              }}
              transition={{
                duration: 3 + (i % 4),
                repeat: Infinity,
                delay: (i * 0.1) % 2,
              }}
            />
          ))}
        </div>
      )}

      {/* Light streaks */}
      {variant === 'crazy' && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-full w-px"
              style={{
                left: `${20 + i * 15}%`,
                background: 'linear-gradient(to bottom, transparent, rgba(24,144,255,0.1), transparent)',
              }}
              animate={{
                opacity: [0, 0.5, 0],
                x: [-20, 80, -20],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: i * 0.8,
              }}
            />
          ))}
        </div>
      )}

      {/* Mascot */}
      {showMascot && (
        <motion.div
          className="relative z-10 flex justify-center"
          initial={{ opacity: 0, scale: 0, y: 50, rotate: -180 }}
          animate={isInView ? { opacity: 1, scale: 1, y: 0, rotate: 0 } : {}}
          transition={{ type: 'spring', stiffness: 100, damping: 15, duration: 1 }}
        >
          <motion.div
            animate={{ 
              y: [-10, 10, -10],
              rotate: [-5, 5, -5],
              scale: [1, 1.05, 1],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <Mascot size={130} variant="crazy" />
          </motion.div>

          {/* Sparkle ring around mascot */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          >
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-3 h-3 rounded-full bg-[#1890ff]"
                style={{
                  left: '50%',
                  top: '50%',
                  x: Math.cos((i * 45 * Math.PI) / 180) * 80,
                  y: Math.sin((i * 45 * Math.PI) / 180) * 80,
                }}
                animate={{
                  scale: [0.5, 1.5, 0.5],
                  opacity: [0.3, 0.8, 0.3],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.15,
                }}
              />
            ))}
          </motion.div>
        </motion.div>
      )}

      {/* Floating dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-[#1890ff]/20"
            style={{
              left: `${15 + i * 10}%`,
              top: `${30 + (i % 3) * 20}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.6, 0.2],
              scale: [1, 1.5, 1],
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
