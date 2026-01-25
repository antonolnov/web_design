'use client';

import { useState, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Neural network nodes - 3 rings
const generateNodes = () => {
  const nodes = [];
  for (let i = 0; i < 8; i++) {
    const angle = (i * 45) * Math.PI / 180;
    nodes.push({ x: Math.cos(angle) * 120, y: Math.sin(angle) * 120, delay: i * 0.02, ring: 1 });
  }
  for (let i = 0; i < 12; i++) {
    const angle = (i * 30 + 15) * Math.PI / 180;
    nodes.push({ x: Math.cos(angle) * 200, y: Math.sin(angle) * 200, delay: 0.1 + i * 0.02, ring: 2 });
  }
  for (let i = 0; i < 16; i++) {
    const angle = (i * 22.5) * Math.PI / 180;
    nodes.push({ x: Math.cos(angle) * 280, y: Math.sin(angle) * 280, delay: 0.2 + i * 0.015, ring: 3 });
  }
  return nodes;
};

const neuralNodes = generateNodes();

const generateConnections = () => {
  const conns: [number, number][] = [];
  for (let i = 0; i < 8; i++) {
    conns.push([i, 8 + (i * 2) % 12]);
    conns.push([i, 8 + (i * 2 + 1) % 12]);
  }
  for (let i = 0; i < 12; i++) {
    conns.push([8 + i, 20 + Math.floor(i * 1.3)]);
    conns.push([8 + i, 20 + (Math.floor(i * 1.3) + 1) % 16]);
  }
  for (let i = 0; i < 8; i++) conns.push([i, (i + 1) % 8]);
  for (let i = 0; i < 12; i++) conns.push([8 + i, 8 + (i + 1) % 12]);
  for (let i = 0; i < 16; i++) conns.push([20 + i, 20 + (i + 1) % 16]);
  return conns;
};

const connections = generateConnections();

export default function AIBadge() {
  const [isActive, setIsActive] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const orbitingParticles = useMemo(() => 
    [...Array(16)].map((_, i) => ({
      radius: 35 + (i % 4) * 10,
      duration: 2 + (i % 4) * 0.4,
      delay: i * 0.12,
      size: 2 + (i % 3),
      direction: i % 2 === 0 ? 1 : -1,
    })), []);

  const handleClick = useCallback(() => {
    if (isActive) return;
    setIsActive(true);
    setTimeout(() => setIsActive(false), 3500);
  }, [isActive]);

  return (
    <motion.div
      className="relative inline-flex items-center justify-center cursor-pointer select-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
      style={{ width: 100, height: 100 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Hint text */}
      <motion.div
        className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered && !isActive ? 1 : 0 }}
        transition={{ duration: 0.2 }}
      >
        <span className="text-xs text-gray-400 font-medium">Нажми на меня!</span>
      </motion.div>

      {/* Deep background glow - radial fade */}
      <motion.div
        className="absolute rounded-full pointer-events-none"
        style={{ 
          width: 250, 
          height: 250,
          background: 'radial-gradient(circle, rgba(24,144,255,0.25) 0%, rgba(24,144,255,0.1) 40%, transparent 70%)',
        }}
        animate={{
          scale: isActive ? 5 : isHovered ? 1.6 : 1,
          opacity: isActive ? 0.7 : 1,
        }}
        transition={{ duration: isActive ? 1 : 0.4 }}
      />

      {/* Pulsing rings */}
      {[0, 1, 2].map((i) => (
        <motion.div
          key={`pulse-ring-${i}`}
          className="absolute rounded-full pointer-events-none"
          style={{ 
            width: 80 + i * 25, 
            height: 80 + i * 25,
            border: `1px solid rgba(24,144,255,${0.3 - i * 0.08})`,
          }}
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ 
            duration: 2 + i * 0.5, 
            repeat: Infinity, 
            delay: i * 0.4,
          }}
        />
      ))}

      {/* Electric arcs - idle state */}
      {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle, i) => (
        <motion.div
          key={`arc-${i}`}
          className="absolute pointer-events-none"
          style={{
            width: 2,
            height: 45,
            left: '50%',
            top: '50%',
            transformOrigin: 'center top',
            transform: `rotate(${angle}deg) translateX(-50%)`,
          }}
        >
          <motion.div
            className="w-full h-full rounded-full"
            style={{
              background: 'linear-gradient(to bottom, rgba(24,144,255,0.9) 0%, rgba(24,144,255,0.4) 50%, transparent 100%)',
            }}
            animate={{ opacity: [0, 0.9, 0], scaleY: [0.2, 1, 0.2] }}
            transition={{
              duration: 0.5 + (i * 0.03),
              repeat: Infinity,
              delay: i * 0.08,
              repeatDelay: 0.3,
            }}
          />
        </motion.div>
      ))}

      {/* Orbiting particles */}
      {orbitingParticles.map((particle, i) => (
        <motion.div
          key={`orbit-${i}`}
          className="absolute pointer-events-none"
          style={{ width: 100, height: 100 }}
          animate={{ rotate: 360 * particle.direction }}
          transition={{ duration: particle.duration, repeat: Infinity, ease: 'linear', delay: particle.delay }}
        >
          <motion.div
            className="absolute rounded-full bg-[#1890ff]"
            style={{
              width: particle.size,
              height: particle.size,
              left: '50%',
              top: `calc(50% - ${particle.radius}px)`,
              marginLeft: -particle.size / 2,
              boxShadow: '0 0 10px rgba(24,144,255,0.9)',
            }}
            animate={{ opacity: [0.5, 1, 0.5], scale: [0.8, 1.3, 0.8] }}
            transition={{ duration: 0.8, repeat: Infinity, delay: particle.delay }}
          />
        </motion.div>
      ))}

      {/* Rotating rings */}
      <motion.div
        className="absolute w-[85px] h-[85px] rounded-full"
        style={{ border: '2px solid rgba(24,144,255,0.4)' }}
        animate={{ rotate: 360, opacity: [0.4, 0.7, 0.4] }}
        transition={{ rotate: { duration: 8, repeat: Infinity, ease: 'linear' }, opacity: { duration: 1.5, repeat: Infinity } }}
      />
      <motion.div
        className="absolute w-[70px] h-[70px] rounded-full"
        style={{ border: '1.5px solid rgba(24,144,255,0.25)' }}
        animate={{ rotate: -360 }}
        transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
      />

      {/* Center orb with brain/AI icon */}
      <motion.div
        className="relative w-16 h-16 rounded-full bg-gradient-to-br from-[#40a9ff] to-[#0d6edb] flex items-center justify-center z-10"
        animate={{
          scale: isActive ? [1, 1.2, 1] : isHovered ? 1.1 : 1,
          boxShadow: isActive
            ? '0 0 80px rgba(24,144,255,0.9)'
            : isHovered ? '0 0 50px rgba(24,144,255,0.7)' : '0 0 30px rgba(24,144,255,0.5)',
        }}
        transition={{ duration: 0.3 }}
      >
        {/* AI Symbol - stylized brain/neural icon */}
        <motion.svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          animate={{
            filter: isHovered 
              ? ['drop-shadow(0 0 8px #fff)', 'drop-shadow(0 0 15px #1890ff)', 'drop-shadow(0 0 8px #fff)']
              : 'drop-shadow(0 0 4px rgba(255,255,255,0.5))',
          }}
          transition={{ duration: 0.6, repeat: isHovered ? Infinity : 0 }}
        >
          {/* Brain outline */}
          <path d="M12 2C8 2 5 5 5 9c0 2 1 4 2.5 5.5L9 16h6l1.5-1.5C18 13 19 11 19 9c0-4-3-7-7-7z" />
          {/* Neural connections */}
          <circle cx="9" cy="8" r="1" fill="white" />
          <circle cx="15" cy="8" r="1" fill="white" />
          <circle cx="12" cy="11" r="1" fill="white" />
          <line x1="9" y1="8" x2="12" y2="11" />
          <line x1="15" y1="8" x2="12" y2="11" />
          <line x1="9" y1="8" x2="15" y2="8" />
          {/* Base */}
          <path d="M9 16v2a2 2 0 002 2h2a2 2 0 002-2v-2" />
        </motion.svg>

        {/* Inner glow */}
        <motion.div
          className="absolute inset-2 rounded-full bg-white/25"
          animate={{ opacity: [0.15, 0.35, 0.15], scale: [0.9, 1, 0.9] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
      </motion.div>

      {/* MASSIVE Neural Network Explosion */}
      <AnimatePresence>
        {isActive && (
          <>
            {/* Screen flash */}
            <motion.div
              className="fixed inset-0 pointer-events-none z-50"
              style={{ background: 'radial-gradient(circle at center, rgba(24,144,255,0.3) 0%, transparent 70%)' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.6, 0] }}
              transition={{ duration: 0.4 }}
            />

            {/* Shockwaves - massive */}
            {[0, 1, 2, 3].map((i) => (
              <motion.div
                key={`shock-${i}`}
                className="absolute rounded-full pointer-events-none"
                style={{ 
                  width: 64, 
                  height: 64,
                  background: 'radial-gradient(circle, transparent 50%, rgba(24,144,255,0.4) 70%, transparent 100%)',
                }}
                initial={{ scale: 1, opacity: 0.9 }}
                animate={{ scale: 15, opacity: 0 }}
                transition={{ duration: 2, delay: i * 0.12 }}
              />
            ))}

            {/* Central energy burst */}
            <motion.div
              className="absolute rounded-full pointer-events-none"
              style={{ 
                width: 100, 
                height: 100,
                background: 'radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(24,144,255,0.6) 40%, transparent 70%)',
              }}
              initial={{ scale: 0, opacity: 1 }}
              animate={{ scale: 5, opacity: 0 }}
              transition={{ duration: 0.7 }}
            />

            {/* Neural nodes spreading */}
            {neuralNodes.map((node, i) => (
              <motion.div
                key={`node-${i}`}
                className="absolute rounded-full pointer-events-none"
                style={{
                  width: node.ring === 1 ? 10 : node.ring === 2 ? 8 : 5,
                  height: node.ring === 1 ? 10 : node.ring === 2 ? 8 : 5,
                  background: `radial-gradient(circle, #fff 0%, #1890ff 50%, rgba(24,144,255,0.5) 80%, transparent 100%)`,
                  boxShadow: `0 0 ${node.ring * 10}px rgba(24,144,255,0.9)`,
                }}
                initial={{ x: 0, y: 0, scale: 0, opacity: 0 }}
                animate={{ 
                  x: node.x, 
                  y: node.y, 
                  scale: [0, 2, 1],
                  opacity: [0, 1, 1, 0],
                }}
                transition={{ duration: 3, delay: node.delay }}
              />
            ))}

            {/* Neural connections - glowing lines */}
            <svg 
              className="absolute pointer-events-none" 
              style={{ width: 600, height: 600, left: -250, top: -250, overflow: 'visible' }}
            >
              <defs>
                <linearGradient id="lineGradBig" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#1890ff" stopOpacity="0" />
                  <stop offset="50%" stopColor="#40a9ff" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#1890ff" stopOpacity="0" />
                </linearGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>
              {connections.map(([from, to], i) => {
                const fromNode = neuralNodes[from];
                const toNode = neuralNodes[to];
                return (
                  <motion.line
                    key={`line-${i}`}
                    x1={300 + fromNode.x}
                    y1={300 + fromNode.y}
                    x2={300 + toNode.x}
                    y2={300 + toNode.y}
                    stroke="url(#lineGradBig)"
                    strokeWidth={fromNode.ring === 1 ? 2.5 : 1.5}
                    filter="url(#glow)"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: [0, 1, 1, 0], opacity: [0, 0.9, 0.9, 0] }}
                    transition={{ duration: 2.5, delay: Math.max(fromNode.delay, toNode.delay) + 0.05 }}
                  />
                );
              })}
            </svg>

            {/* Energy pulses traveling along connections */}
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={`energy-${i}`}
                className="absolute rounded-full pointer-events-none"
                style={{ 
                  width: 8, 
                  height: 8,
                  background: 'radial-gradient(circle, #fff 0%, rgba(24,144,255,0.9) 50%, transparent 100%)',
                  boxShadow: '0 0 20px rgba(255,255,255,0.9)',
                }}
                initial={{ x: 0, y: 0, scale: 0, opacity: 0 }}
                animate={{
                  x: [0, neuralNodes[i % 8].x, neuralNodes[8 + i % 12].x, neuralNodes[20 + i % 16].x],
                  y: [0, neuralNodes[i % 8].y, neuralNodes[8 + i % 12].y, neuralNodes[20 + i % 16].y],
                  scale: [0, 2, 1.5, 0],
                  opacity: [0, 1, 1, 0],
                }}
                transition={{ duration: 2.5, delay: 0.1 + i * 0.06 }}
              />
            ))}

            {/* Particle explosion - massive */}
            {[...Array(60)].map((_, i) => {
              const angle = (i * 6) * Math.PI / 180;
              const distance = 150 + (i % 15) * 20;
              const size = 2 + (i % 4);
              return (
                <motion.div
                  key={`particle-${i}`}
                  className="absolute rounded-full pointer-events-none"
                  style={{
                    width: size,
                    height: size,
                    background: `radial-gradient(circle, ${i % 4 === 0 ? '#fff' : '#40a9ff'} 0%, transparent 100%)`,
                    boxShadow: i % 4 === 0 ? '0 0 8px rgba(255,255,255,0.8)' : 'none',
                  }}
                  initial={{ x: 0, y: 0, scale: 0, opacity: 0 }}
                  animate={{
                    x: Math.cos(angle) * distance,
                    y: Math.sin(angle) * distance,
                    scale: [0, 2, 0],
                    opacity: [0, 0.9, 0],
                  }}
                  transition={{ duration: 2.5 + (i % 6) * 0.1, delay: 0.1 + (i % 10) * 0.03 }}
                />
              );
            })}

            {/* Electric discharge arcs - longer */}
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={`discharge-${i}`}
                className="absolute pointer-events-none"
                style={{
                  width: 3,
                  height: 300,
                  left: '50%',
                  top: '50%',
                  marginLeft: -1.5,
                  transformOrigin: 'center top',
                  transform: `rotate(${i * 30}deg)`,
                  background: 'linear-gradient(to bottom, rgba(24,144,255,0.9) 0%, rgba(64,169,255,0.5) 30%, transparent 100%)',
                  borderRadius: 3,
                }}
                initial={{ scaleY: 0, opacity: 0 }}
                animate={{ scaleY: [0, 1, 0], opacity: [0, 0.8, 0] }}
                transition={{ duration: 1, delay: 0.05 + i * 0.04 }}
              />
            ))}

            {/* Spiraling particles */}
            {[...Array(8)].map((_, i) => {
              const baseAngle = i * 45;
              const distance = 200;
              return (
                <motion.div
                  key={`spiral-${i}`}
                  className="absolute rounded-full pointer-events-none"
                  style={{
                    width: 6,
                    height: 6,
                    background: 'radial-gradient(circle, #fff 0%, #1890ff 100%)',
                    boxShadow: '0 0 15px rgba(24,144,255,0.8)',
                  }}
                  initial={{ x: 0, y: 0, scale: 0, opacity: 0 }}
                  animate={{
                    x: Math.cos(baseAngle * Math.PI / 180) * distance,
                    y: Math.sin(baseAngle * Math.PI / 180) * distance,
                    rotate: 720,
                    scale: [0, 1.5, 1, 0],
                    opacity: [0, 1, 1, 0],
                  }}
                  transition={{ 
                    duration: 2, 
                    delay: i * 0.1,
                  }}
                />
              );
            })}

            {/* Final fade pulse */}
            <motion.div
              className="absolute rounded-full pointer-events-none"
              style={{ 
                width: 64, 
                height: 64, 
                background: 'radial-gradient(circle, rgba(24,144,255,0.6) 0%, transparent 70%)',
              }}
              initial={{ scale: 1, opacity: 0 }}
              animate={{ scale: 10, opacity: [0, 0.5, 0] }}
              transition={{ duration: 2, delay: 1.8 }}
            />

            {/* "AI" text explosion */}
            <motion.div
              className="absolute text-4xl font-black text-white pointer-events-none z-20"
              style={{ textShadow: '0 0 30px rgba(24,144,255,0.9)' }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: [0, 3, 2], opacity: [0, 1, 0] }}
              transition={{ duration: 1.5, delay: 0.2 }}
            >
              AI
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
