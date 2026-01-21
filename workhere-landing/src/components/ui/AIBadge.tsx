'use client';

import { useState, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function AIBadge() {
  const [isActive, setIsActive] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const orbitingParticles = useMemo(() => 
    [...Array(8)].map((_, i) => ({
      radius: 30 + (i % 3) * 6,
      duration: 3 + (i % 4) * 0.5,
      delay: i * 0.2,
      size: 2,
      direction: i % 2 === 0 ? 1 : -1,
    })), []);

  const handleClick = useCallback(() => {
    if (isActive) return;
    setIsActive(true);
    setTimeout(() => setIsActive(false), 2500);
  }, [isActive]);

  return (
    <motion.div
      className="relative inline-flex items-center justify-center cursor-pointer select-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
      style={{ width: 80, height: 80 }}
    >
      {/* Soft ambient glow - no hard edges */}
      <motion.div
        className="absolute rounded-full"
        style={{ 
          width: 120, 
          height: 120,
          background: 'radial-gradient(circle, rgba(24,144,255,0.15) 0%, rgba(24,144,255,0.05) 50%, transparent 70%)',
          filter: 'blur(10px)',
        }}
        animate={{
          scale: isActive ? 3 : isHovered ? 1.3 : 1,
          opacity: isActive ? 0.5 : 1,
        }}
        transition={{ duration: 0.5 }}
      />

      {/* Soft electric rays - fade naturally */}
      {[0, 60, 120, 180, 240, 300].map((angle, i) => (
        <motion.div
          key={`ray-${i}`}
          className="absolute pointer-events-none"
          style={{
            width: 1.5,
            height: 25,
            left: '50%',
            top: '50%',
            transformOrigin: 'center top',
            transform: `rotate(${angle}deg) translateX(-50%)`,
            background: 'linear-gradient(to bottom, rgba(24,144,255,0.4) 0%, rgba(24,144,255,0.1) 50%, transparent 100%)',
            borderRadius: 2,
          }}
          animate={{ 
            opacity: [0, 0.5, 0], 
            scaleY: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            delay: i * 0.15,
          }}
        />
      ))}

      {/* Orbiting particles - small and subtle */}
      {orbitingParticles.map((particle, i) => (
        <motion.div
          key={`orbit-${i}`}
          className="absolute pointer-events-none"
          style={{ width: 80, height: 80 }}
          animate={{ rotate: 360 * particle.direction }}
          transition={{ duration: particle.duration, repeat: Infinity, ease: 'linear', delay: particle.delay }}
        >
          <div
            className="absolute rounded-full"
            style={{
              width: particle.size,
              height: particle.size,
              left: '50%',
              top: `calc(50% - ${particle.radius}px)`,
              marginLeft: -particle.size / 2,
              background: 'rgba(24,144,255,0.6)',
              boxShadow: '0 0 4px rgba(24,144,255,0.4)',
            }}
          />
        </motion.div>
      ))}

      {/* Outer ring - subtle */}
      <motion.div
        className="absolute w-[62px] h-[62px] rounded-full"
        style={{ border: '1px solid rgba(24,144,255,0.2)' }}
        animate={{ rotate: 360 }}
        transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
      />

      {/* Center orb */}
      <motion.div
        className="relative w-12 h-12 rounded-full bg-gradient-to-br from-[#40a9ff] to-[#0d6edb] flex items-center justify-center"
        style={{
          boxShadow: '0 0 25px rgba(24,144,255,0.4)',
        }}
        animate={{
          scale: isActive ? [1, 1.1, 1] : isHovered ? 1.05 : 1,
          boxShadow: isHovered 
            ? '0 0 35px rgba(24,144,255,0.5)' 
            : '0 0 25px rgba(24,144,255,0.4)',
        }}
        transition={{ duration: 0.3 }}
        whileTap={{ scale: 0.95 }}
      >
        <span className="text-white font-bold text-lg tracking-wide">
          AI
        </span>
        
        {/* Inner pulse */}
        <motion.div
          className="absolute inset-1 rounded-full bg-white/10"
          animate={{ opacity: [0.1, 0.2, 0.1], scale: [0.95, 1, 0.95] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.div>

      {/* Click explosion - soft particles */}
      <AnimatePresence>
        {isActive && (
          <>
            {/* Soft waves */}
            {[0, 1, 2].map((i) => (
              <motion.div
                key={`wave-${i}`}
                className="absolute rounded-full"
                style={{ 
                  width: 48, 
                  height: 48,
                  border: '1px solid rgba(24,144,255,0.4)',
                }}
                initial={{ scale: 1, opacity: 0.6 }}
                animate={{ scale: 6, opacity: 0 }}
                transition={{ duration: 1.2, delay: i * 0.1 }}
              />
            ))}

            {/* Soft particles spreading */}
            {[...Array(16)].map((_, i) => {
              const angle = (i * 22.5) * Math.PI / 180;
              const distance = 60 + Math.random() * 40;
              return (
                <motion.div
                  key={`p-${i}`}
                  className="absolute rounded-full pointer-events-none"
                  style={{
                    width: 3,
                    height: 3,
                    background: 'rgba(24,144,255,0.6)',
                    boxShadow: '0 0 6px rgba(24,144,255,0.4)',
                  }}
                  initial={{ x: 0, y: 0, scale: 0, opacity: 0 }}
                  animate={{
                    x: Math.cos(angle) * distance,
                    y: Math.sin(angle) * distance,
                    scale: [0, 1, 0],
                    opacity: [0, 0.7, 0],
                  }}
                  transition={{ duration: 1, delay: i * 0.02 }}
                />
              );
            })}

            {/* Center flash */}
            <motion.div
              className="absolute w-12 h-12 rounded-full"
              style={{ 
                background: 'radial-gradient(circle, rgba(255,255,255,0.6) 0%, transparent 70%)',
              }}
              initial={{ scale: 0, opacity: 1 }}
              animate={{ scale: 3, opacity: 0 }}
              transition={{ duration: 0.5 }}
            />
          </>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
