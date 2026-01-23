'use client';

import { useState, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Neural network nodes - 3 rings
const generateNodes = () => {
  const nodes = [];
  for (let i = 0; i < 6; i++) {
    const angle = (i * 60) * Math.PI / 180;
    nodes.push({ x: Math.cos(angle) * 100, y: Math.sin(angle) * 100, delay: i * 0.02, ring: 1 });
  }
  for (let i = 0; i < 10; i++) {
    const angle = (i * 36 + 18) * Math.PI / 180;
    nodes.push({ x: Math.cos(angle) * 160, y: Math.sin(angle) * 160, delay: 0.1 + i * 0.02, ring: 2 });
  }
  for (let i = 0; i < 14; i++) {
    const angle = (i * 25.7) * Math.PI / 180;
    nodes.push({ x: Math.cos(angle) * 220, y: Math.sin(angle) * 220, delay: 0.2 + i * 0.015, ring: 3 });
  }
  return nodes;
};

const neuralNodes = generateNodes();

const generateConnections = () => {
  const conns: [number, number][] = [];
  for (let i = 0; i < 6; i++) {
    conns.push([i, 6 + (i * 2) % 10]);
    conns.push([i, 6 + (i * 2 + 1) % 10]);
  }
  for (let i = 0; i < 10; i++) {
    conns.push([6 + i, 16 + Math.floor(i * 1.4)]);
    conns.push([6 + i, 16 + (Math.floor(i * 1.4) + 1) % 14]);
  }
  for (let i = 0; i < 6; i++) conns.push([i, (i + 1) % 6]);
  for (let i = 0; i < 10; i++) conns.push([6 + i, 6 + (i + 1) % 10]);
  for (let i = 0; i < 14; i++) conns.push([16 + i, 16 + (i + 1) % 14]);
  return conns;
};

const connections = generateConnections();

export default function AIBadge() {
  const [isActive, setIsActive] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const orbitingParticles = useMemo(() => 
    [...Array(12)].map((_, i) => ({
      radius: 28 + (i % 3) * 8,
      duration: 2.5 + (i % 4) * 0.5,
      delay: i * 0.15,
      size: 2 + (i % 2),
      direction: i % 2 === 0 ? 1 : -1,
    })), []);

  const handleClick = useCallback(() => {
    if (isActive) return;
    setIsActive(true);
    setTimeout(() => setIsActive(false), 3000);
  }, [isActive]);

  return (
    <motion.div
      className="relative inline-flex items-center justify-center cursor-pointer select-none overflow-visible"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
      style={{ width: 80, height: 80 }}
    >
      {/* Deep background glow - radial fade */}
      <motion.div
        className="absolute rounded-full pointer-events-none"
        style={{ 
          width: 200, 
          height: 200,
          background: 'radial-gradient(circle, rgba(24,144,255,0.2) 0%, rgba(24,144,255,0.08) 40%, transparent 70%)',
        }}
        animate={{
          scale: isActive ? 4 : isHovered ? 1.5 : 1,
          opacity: isActive ? 0.6 : 1,
        }}
        transition={{ duration: isActive ? 0.8 : 0.4 }}
      />

      {/* Electric arcs - idle state */}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
        <motion.div
          key={`arc-${i}`}
          className="absolute pointer-events-none"
          style={{
            width: 2,
            height: 35,
            left: '50%',
            top: '50%',
            transformOrigin: 'center top',
            transform: `rotate(${angle}deg) translateX(-50%)`,
          }}
        >
          <motion.div
            className="w-full h-full rounded-full"
            style={{
              background: 'linear-gradient(to bottom, rgba(24,144,255,0.8) 0%, rgba(24,144,255,0.3) 50%, transparent 100%)',
            }}
            animate={{ opacity: [0, 0.8, 0], scaleY: [0.3, 1, 0.3] }}
            transition={{
              duration: 0.6 + (i * 0.04),
              repeat: Infinity,
              delay: i * 0.1,
              repeatDelay: 0.5,
            }}
          />
        </motion.div>
      ))}

      {/* Orbiting particles */}
      {orbitingParticles.map((particle, i) => (
        <motion.div
          key={`orbit-${i}`}
          className="absolute pointer-events-none"
          style={{ width: 80, height: 80 }}
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
              boxShadow: '0 0 8px rgba(24,144,255,0.8)',
            }}
            animate={{ opacity: [0.4, 1, 0.4], scale: [0.8, 1.2, 0.8] }}
            transition={{ duration: 1, repeat: Infinity, delay: particle.delay }}
          />
        </motion.div>
      ))}

      {/* Rotating rings */}
      <motion.div
        className="absolute w-[68px] h-[68px] rounded-full"
        style={{ border: '2px solid rgba(24,144,255,0.3)' }}
        animate={{ rotate: 360, opacity: [0.3, 0.6, 0.3] }}
        transition={{ rotate: { duration: 10, repeat: Infinity, ease: 'linear' }, opacity: { duration: 2, repeat: Infinity } }}
      />
      <motion.div
        className="absolute w-[54px] h-[54px] rounded-full"
        style={{ border: '1px solid rgba(24,144,255,0.2)' }}
        animate={{ rotate: -360 }}
        transition={{ duration: 7, repeat: Infinity, ease: 'linear' }}
      />

      {/* Center orb */}
      <motion.div
        className="relative w-14 h-14 rounded-full bg-gradient-to-br from-[#40a9ff] to-[#0d6edb] flex items-center justify-center z-10"
        animate={{
          scale: isActive ? [1, 1.15, 1] : isHovered ? 1.08 : 1,
          boxShadow: isActive
            ? '0 0 60px rgba(24,144,255,0.8)'
            : isHovered ? '0 0 40px rgba(24,144,255,0.6)' : '0 0 25px rgba(24,144,255,0.4)',
        }}
        transition={{ duration: 0.3 }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.span
          className="text-white font-bold text-xl tracking-wider"
          animate={{
            textShadow: isHovered 
              ? ['0 0 20px #fff', '0 0 40px #1890ff', '0 0 20px #fff']
              : '0 0 10px rgba(255,255,255,0.5)',
          }}
          transition={{ duration: 0.8, repeat: isHovered ? Infinity : 0 }}
        >
          AI
        </motion.span>
        <motion.div
          className="absolute inset-2 rounded-full bg-white/20"
          animate={{ opacity: [0.1, 0.3, 0.1], scale: [0.9, 1, 0.9] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.div>

      {/* MASSIVE Neural Network Explosion */}
      <AnimatePresence>
        {isActive && (
          <>
            {/* Shockwaves - fade naturally */}
            {[0, 1, 2].map((i) => (
              <motion.div
                key={`shock-${i}`}
                className="absolute rounded-full pointer-events-none"
                style={{ 
                  width: 56, 
                  height: 56,
                  background: 'radial-gradient(circle, transparent 60%, rgba(24,144,255,0.3) 80%, transparent 100%)',
                }}
                initial={{ scale: 1, opacity: 0.8 }}
                animate={{ scale: 12, opacity: 0 }}
                transition={{ duration: 1.5, delay: i * 0.15 }}
              />
            ))}

            {/* Central energy burst */}
            <motion.div
              className="absolute rounded-full pointer-events-none"
              style={{ 
                width: 80, 
                height: 80,
                background: 'radial-gradient(circle, rgba(255,255,255,0.9) 0%, rgba(24,144,255,0.5) 40%, transparent 70%)',
              }}
              initial={{ scale: 0, opacity: 1 }}
              animate={{ scale: 4, opacity: 0 }}
              transition={{ duration: 0.6 }}
            />

            {/* Neural nodes spreading */}
            {neuralNodes.map((node, i) => (
              <motion.div
                key={`node-${i}`}
                className="absolute rounded-full pointer-events-none"
                style={{
                  width: node.ring === 1 ? 8 : node.ring === 2 ? 6 : 4,
                  height: node.ring === 1 ? 8 : node.ring === 2 ? 6 : 4,
                  background: `radial-gradient(circle, #1890ff 0%, rgba(24,144,255,0.5) 60%, transparent 100%)`,
                  boxShadow: `0 0 ${node.ring * 8}px rgba(24,144,255,0.8)`,
                }}
                initial={{ x: 0, y: 0, scale: 0, opacity: 0 }}
                animate={{ 
                  x: node.x, 
                  y: node.y, 
                  scale: [0, 1.5, 1],
                  opacity: [0, 1, 1, 0],
                }}
                transition={{ duration: 2.5, delay: node.delay }}
              />
            ))}

            {/* Neural connections */}
            <svg 
              className="absolute pointer-events-none" 
              style={{ width: 500, height: 500, left: -210, top: -210, overflow: 'visible' }}
            >
              <defs>
                <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#1890ff" stopOpacity="0" />
                  <stop offset="50%" stopColor="#1890ff" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#1890ff" stopOpacity="0" />
                </linearGradient>
              </defs>
              {connections.map(([from, to], i) => {
                const fromNode = neuralNodes[from];
                const toNode = neuralNodes[to];
                return (
                  <motion.line
                    key={`line-${i}`}
                    x1={250 + fromNode.x}
                    y1={250 + fromNode.y}
                    x2={250 + toNode.x}
                    y2={250 + toNode.y}
                    stroke="url(#lineGrad)"
                    strokeWidth={fromNode.ring === 1 ? 2 : 1}
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: [0, 1, 1, 0], opacity: [0, 0.7, 0.7, 0] }}
                    transition={{ duration: 2.2, delay: Math.max(fromNode.delay, toNode.delay) + 0.05 }}
                  />
                );
              })}
            </svg>

            {/* Energy pulses traveling */}
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={`energy-${i}`}
                className="absolute rounded-full pointer-events-none"
                style={{ 
                  width: 6, 
                  height: 6,
                  background: 'radial-gradient(circle, #fff 0%, rgba(24,144,255,0.8) 50%, transparent 100%)',
                  boxShadow: '0 0 15px rgba(255,255,255,0.8)',
                }}
                initial={{ x: 0, y: 0, scale: 0, opacity: 0 }}
                animate={{
                  x: [0, neuralNodes[i % 6].x, neuralNodes[6 + i % 10].x, neuralNodes[16 + i % 14].x],
                  y: [0, neuralNodes[i % 6].y, neuralNodes[6 + i % 10].y, neuralNodes[16 + i % 14].y],
                  scale: [0, 1.5, 1, 0],
                  opacity: [0, 1, 1, 0],
                }}
                transition={{ duration: 2, delay: 0.1 + i * 0.08 }}
              />
            ))}

            {/* Particle explosion */}
            {[...Array(40)].map((_, i) => {
              const angle = (i * 9) * Math.PI / 180;
              const distance = 120 + (i % 10) * 15;
              const size = 2 + (i % 3);
              return (
                <motion.div
                  key={`particle-${i}`}
                  className="absolute rounded-full pointer-events-none"
                  style={{
                    width: size,
                    height: size,
                    background: `radial-gradient(circle, ${i % 3 === 0 ? '#fff' : '#40a9ff'} 0%, transparent 100%)`,
                  }}
                  initial={{ x: 0, y: 0, scale: 0, opacity: 0 }}
                  animate={{
                    x: Math.cos(angle) * distance,
                    y: Math.sin(angle) * distance,
                    scale: [0, 1.5, 0],
                    opacity: [0, 0.8, 0],
                  }}
                  transition={{ duration: 2 + (i % 5) * 0.1, delay: 0.1 + (i % 8) * 0.04 }}
                />
              );
            })}

            {/* Electric discharge arcs */}
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={`discharge-${i}`}
                className="absolute pointer-events-none"
                style={{
                  width: 3,
                  height: 200,
                  left: '50%',
                  top: '50%',
                  marginLeft: -1.5,
                  transformOrigin: 'center top',
                  transform: `rotate(${i * 45}deg)`,
                  background: 'linear-gradient(to bottom, rgba(24,144,255,0.8) 0%, rgba(64,169,255,0.4) 30%, transparent 100%)',
                  borderRadius: 3,
                  filter: 'blur(1px)',
                }}
                initial={{ scaleY: 0, opacity: 0 }}
                animate={{ scaleY: [0, 1, 0], opacity: [0, 0.7, 0] }}
                transition={{ duration: 0.8, delay: 0.1 + i * 0.05 }}
              />
            ))}

            {/* Final fade pulse */}
            <motion.div
              className="absolute rounded-full pointer-events-none"
              style={{ 
                width: 56, 
                height: 56, 
                background: 'radial-gradient(circle, rgba(24,144,255,0.5) 0%, transparent 70%)',
                filter: 'blur(20px)',
              }}
              initial={{ scale: 1, opacity: 0 }}
              animate={{ scale: 8, opacity: [0, 0.4, 0] }}
              transition={{ duration: 1.5, delay: 1.5 }}
            />
          </>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
