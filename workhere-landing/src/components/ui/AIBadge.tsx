'use client';

import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Neural network nodes configuration
const neuralNodes = [
  { x: 0, y: -80, delay: 0 },
  { x: 70, y: -40, delay: 0.05 },
  { x: 70, y: 40, delay: 0.1 },
  { x: 0, y: 80, delay: 0.15 },
  { x: -70, y: 40, delay: 0.2 },
  { x: -70, y: -40, delay: 0.25 },
  { x: 120, y: 0, delay: 0.1 },
  { x: -120, y: 0, delay: 0.15 },
  { x: 100, y: -70, delay: 0.12 },
  { x: 100, y: 70, delay: 0.18 },
  { x: -100, y: -70, delay: 0.22 },
  { x: -100, y: 70, delay: 0.28 },
];

// Neural connections between nodes
const connections = [
  [0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 0],
  [0, 6], [3, 6], [0, 7], [3, 7],
  [1, 8], [2, 9], [4, 10], [5, 11],
  [6, 8], [6, 9], [7, 10], [7, 11],
];

export default function AIBadge() {
  const [isActive, setIsActive] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [pulseCount, setPulseCount] = useState(0);

  const handleClick = useCallback(() => {
    setIsActive(true);
    setPulseCount(p => p + 1);
    
    // Auto-close after animation
    setTimeout(() => setIsActive(false), 2500);
  }, []);

  return (
    <motion.div
      className="relative inline-flex items-center justify-center cursor-pointer select-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
      style={{ width: 80, height: 80 }}
    >
      {/* Background glow */}
      <motion.div
        className="absolute inset-0 rounded-full bg-[#1890ff]"
        animate={{
          scale: isHovered ? 1.2 : 1,
          opacity: isHovered ? 0.15 : 0.08,
        }}
        transition={{ duration: 0.4 }}
        style={{ filter: 'blur(20px)' }}
      />

      {/* Outer ring - rotating */}
      <motion.div
        className="absolute w-16 h-16 rounded-full border-2 border-[#1890ff]/30"
        animate={{
          rotate: 360,
          borderColor: isHovered ? 'rgba(24,144,255,0.6)' : 'rgba(24,144,255,0.3)',
        }}
        transition={{
          rotate: { duration: 8, repeat: Infinity, ease: 'linear' },
          borderColor: { duration: 0.3 },
        }}
      />

      {/* Inner ring - counter-rotating */}
      <motion.div
        className="absolute w-12 h-12 rounded-full border border-[#1890ff]/20"
        animate={{
          rotate: -360,
          borderColor: isHovered ? 'rgba(24,144,255,0.4)' : 'rgba(24,144,255,0.2)',
        }}
        transition={{
          rotate: { duration: 6, repeat: Infinity, ease: 'linear' },
          borderColor: { duration: 0.3 },
        }}
      />

      {/* Center orb */}
      <motion.div
        className="relative w-14 h-14 rounded-full bg-gradient-to-br from-[#1890ff] to-[#0d6edb] flex items-center justify-center shadow-lg"
        animate={{
          scale: isActive ? [1, 1.1, 1] : isHovered ? 1.05 : 1,
          boxShadow: isHovered 
            ? '0 0 30px rgba(24,144,255,0.5)' 
            : '0 4px 20px rgba(24,144,255,0.3)',
        }}
        transition={{ duration: 0.3 }}
        whileTap={{ scale: 0.95 }}
      >
        {/* AI Text with glitch effect */}
        <motion.span
          className="text-white font-bold text-lg tracking-wider relative"
          animate={{
            textShadow: isHovered 
              ? ['0 0 10px rgba(255,255,255,0.8)', '0 0 20px rgba(255,255,255,0.5)', '0 0 10px rgba(255,255,255,0.8)']
              : '0 0 0px transparent',
          }}
          transition={{ duration: 1, repeat: isHovered ? Infinity : 0 }}
        >
          AI
        </motion.span>

        {/* Pulse ring on click */}
        <AnimatePresence>
          {isActive && (
            <motion.div
              key={pulseCount}
              className="absolute inset-0 rounded-full border-2 border-[#1890ff]"
              initial={{ scale: 1, opacity: 1 }}
              animate={{ scale: 3, opacity: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            />
          )}
        </AnimatePresence>
      </motion.div>

      {/* Orbiting particles */}
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="absolute w-1.5 h-1.5 bg-[#1890ff] rounded-full"
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 3 + i,
            repeat: Infinity,
            ease: 'linear',
          }}
          style={{
            transformOrigin: '32px 32px',
          }}
        >
          <motion.div
            className="w-1.5 h-1.5 bg-[#1890ff] rounded-full"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              delay: i * 0.3,
            }}
            style={{
              transform: `translateX(${24 + i * 4}px)`,
            }}
          />
        </motion.div>
      ))}

      {/* Neural Network Explosion Effect */}
      <AnimatePresence>
        {isActive && (
          <>
            {/* Neural nodes */}
            {neuralNodes.map((node, i) => (
              <motion.div
                key={`node-${i}`}
                className="absolute w-3 h-3 rounded-full bg-[#1890ff]"
                initial={{ x: 0, y: 0, scale: 0, opacity: 0 }}
                animate={{ 
                  x: node.x, 
                  y: node.y, 
                  scale: 1, 
                  opacity: [0, 1, 1, 0],
                }}
                exit={{ scale: 0, opacity: 0 }}
                transition={{ 
                  duration: 2,
                  delay: node.delay,
                  ease: 'easeOut',
                }}
                style={{
                  boxShadow: '0 0 10px rgba(24,144,255,0.8)',
                }}
              />
            ))}

            {/* Neural connections (lines between nodes) */}
            <svg 
              className="absolute pointer-events-none" 
              style={{ 
                width: 300, 
                height: 200, 
                left: -110, 
                top: -60,
                overflow: 'visible',
              }}
            >
              {connections.map(([from, to], i) => {
                const fromNode = neuralNodes[from];
                const toNode = neuralNodes[to];
                return (
                  <motion.line
                    key={`line-${i}`}
                    x1={150 + fromNode.x}
                    y1={100 + fromNode.y}
                    x2={150 + toNode.x}
                    y2={100 + toNode.y}
                    stroke="#1890ff"
                    strokeWidth="1"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ 
                      pathLength: [0, 1, 1, 0],
                      opacity: [0, 0.6, 0.6, 0],
                    }}
                    transition={{ 
                      duration: 2,
                      delay: Math.max(fromNode.delay, toNode.delay) + 0.1,
                      ease: 'easeOut',
                    }}
                  />
                );
              })}
            </svg>

            {/* Energy pulse traveling through network */}
            {[0, 1, 2, 3].map((i) => (
              <motion.div
                key={`pulse-${i}`}
                className="absolute w-2 h-2 rounded-full bg-white"
                initial={{ x: 0, y: 0, scale: 0, opacity: 0 }}
                animate={{
                  x: [0, neuralNodes[i * 3 % 12].x, neuralNodes[(i * 3 + 1) % 12].x],
                  y: [0, neuralNodes[i * 3 % 12].y, neuralNodes[(i * 3 + 1) % 12].y],
                  scale: [0, 1, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 1.5,
                  delay: 0.3 + i * 0.2,
                  ease: 'easeInOut',
                }}
                style={{
                  boxShadow: '0 0 15px rgba(255,255,255,0.9)',
                }}
              />
            ))}

            {/* Data particles flying out */}
            {[...Array(16)].map((_, i) => (
              <motion.div
                key={`particle-${i}`}
                className="absolute w-1 h-1 bg-[#40a9ff] rounded-full"
                initial={{ x: 0, y: 0, scale: 0, opacity: 0 }}
                animate={{
                  x: Math.cos(i * 22.5 * Math.PI / 180) * (80 + Math.random() * 40),
                  y: Math.sin(i * 22.5 * Math.PI / 180) * (80 + Math.random() * 40),
                  scale: [0, 1, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 1.8,
                  delay: 0.2 + Math.random() * 0.3,
                  ease: 'easeOut',
                }}
              />
            ))}

            {/* Central flash */}
            <motion.div
              className="absolute w-20 h-20 rounded-full bg-white"
              initial={{ scale: 0, opacity: 0.8 }}
              animate={{ scale: 2, opacity: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              style={{ filter: 'blur(10px)' }}
            />
          </>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
