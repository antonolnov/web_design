'use client';

import { useState, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Neural network nodes
const generateNodes = () => {
  const nodes = [];
  for (let i = 0; i < 6; i++) {
    const angle = (i * 60) * Math.PI / 180;
    nodes.push({ x: Math.cos(angle) * 120, y: Math.sin(angle) * 120, delay: i * 0.02, ring: 1 });
  }
  for (let i = 0; i < 10; i++) {
    const angle = (i * 36 + 18) * Math.PI / 180;
    nodes.push({ x: Math.cos(angle) * 200, y: Math.sin(angle) * 200, delay: 0.1 + i * 0.02, ring: 2 });
  }
  for (let i = 0; i < 14; i++) {
    const angle = (i * 25.7) * Math.PI / 180;
    nodes.push({ x: Math.cos(angle) * 300, y: Math.sin(angle) * 300, delay: 0.2 + i * 0.015, ring: 3 });
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
    <div className="relative" style={{ width: 300, height: 300 }}>
      {/* Radial fade mask - makes edges dissolve into background */}
      <div 
        className="absolute inset-0 pointer-events-none z-10"
        style={{
          background: 'radial-gradient(circle, transparent 25%, rgba(240,247,255,0.5) 45%, rgba(240,247,255,0.85) 60%, #f0f7ff 75%)',
        }}
      />
      
      {/* Main content centered */}
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 inline-flex items-center justify-center cursor-pointer select-none"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleClick}
        style={{ width: 80, height: 80 }}
      >
        {/* Background glow */}
        <motion.div
          className="absolute rounded-full bg-[#1890ff]"
          animate={{
            scale: isActive ? 6 : isHovered ? 1.5 : 1,
            opacity: isActive ? 0.15 : isHovered ? 0.15 : 0.08,
          }}
          transition={{ duration: isActive ? 0.8 : 0.4 }}
          style={{ width: 80, height: 80, filter: 'blur(25px)' }}
        />

        {/* Electric arcs - soft fade */}
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
          <motion.div
            key={`arc-${i}`}
            className="absolute"
            style={{
              width: 2,
              height: 30 + (i % 3) * 8,
              left: '50%',
              top: '50%',
              transformOrigin: 'center top',
              transform: `rotate(${angle}deg) translateX(-50%)`,
            }}
          >
            <motion.div
              className="w-full h-full rounded-full"
              style={{
                background: 'linear-gradient(to bottom, rgba(24,144,255,0.6) 0%, transparent 100%)',
              }}
              animate={{ opacity: [0, 0.6, 0], scaleY: [0.3, 1, 0.3] }}
              transition={{
                duration: 0.7 + i * 0.05,
                repeat: Infinity,
                delay: i * 0.12,
              }}
            />
          </motion.div>
        ))}

        {/* Orbiting particles */}
        {orbitingParticles.map((particle, i) => (
          <motion.div
            key={`orbit-${i}`}
            className="absolute"
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
                boxShadow: '0 0 6px rgba(24,144,255,0.8)',
              }}
              animate={{ opacity: [0.3, 0.8, 0.3] }}
              transition={{ duration: 1, repeat: Infinity }}
            />
          </motion.div>
        ))}

        {/* Rings */}
        <motion.div
          className="absolute w-[68px] h-[68px] rounded-full border border-[#1890ff]/30"
          animate={{ rotate: 360 }}
          transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className="absolute w-[54px] h-[54px] rounded-full border border-[#1890ff]/20"
          animate={{ rotate: -360 }}
          transition={{ duration: 7, repeat: Infinity, ease: 'linear' }}
        />

        {/* Center orb */}
        <motion.div
          className="relative w-14 h-14 rounded-full bg-gradient-to-br from-[#1890ff] to-[#0d6edb] flex items-center justify-center"
          animate={{
            scale: isActive ? [1, 1.1, 1] : isHovered ? 1.05 : 1,
            boxShadow: isActive
              ? '0 0 50px rgba(24,144,255,0.7)'
              : isHovered ? '0 0 35px rgba(24,144,255,0.5)' : '0 0 20px rgba(24,144,255,0.35)',
          }}
          transition={{ duration: 0.3 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.span
            className="text-white font-bold text-xl tracking-wider"
            animate={{
              textShadow: isHovered 
                ? ['0 0 15px #fff', '0 0 30px #1890ff', '0 0 15px #fff']
                : '0 0 8px rgba(255,255,255,0.4)',
            }}
            transition={{ duration: 0.6, repeat: isHovered ? Infinity : 0 }}
          >
            AI
          </motion.span>
          <motion.div
            className="absolute inset-2 rounded-full bg-white/15"
            animate={{ opacity: [0.1, 0.25, 0.1], scale: [0.9, 1, 0.9] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>

        {/* Neural Network Explosion */}
        <AnimatePresence>
          {isActive && (
            <>
              {/* Shockwaves with fade */}
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={`shock-${i}`}
                  className="absolute rounded-full"
                  style={{ 
                    width: 56, 
                    height: 56,
                    border: '2px solid rgba(24,144,255,0.6)',
                  }}
                  initial={{ scale: 1, opacity: 0.7 }}
                  animate={{ scale: 10, opacity: 0 }}
                  transition={{ duration: 1.2, delay: i * 0.12 }}
                />
              ))}

              {/* Energy burst */}
              <motion.div
                className="absolute w-16 h-16 rounded-full bg-white/80"
                initial={{ scale: 0, opacity: 1 }}
                animate={{ scale: 3, opacity: 0 }}
                transition={{ duration: 0.5 }}
                style={{ filter: 'blur(12px)' }}
              />

              {/* Neural nodes */}
              {neuralNodes.map((node, i) => (
                <motion.div
                  key={`node-${i}`}
                  className="absolute rounded-full bg-[#1890ff]"
                  style={{
                    width: node.ring === 1 ? 6 : node.ring === 2 ? 5 : 3,
                    height: node.ring === 1 ? 6 : node.ring === 2 ? 5 : 3,
                    boxShadow: `0 0 ${node.ring * 6}px rgba(24,144,255,0.8)`,
                  }}
                  initial={{ x: 0, y: 0, scale: 0, opacity: 0 }}
                  animate={{ 
                    x: node.x, 
                    y: node.y, 
                    scale: [0, 1.2, 1],
                    opacity: [0, 0.9, 0.9, 0],
                  }}
                  transition={{ duration: 2.2, delay: node.delay }}
                />
              ))}

              {/* Connections */}
              <svg 
                className="absolute pointer-events-none" 
                style={{ width: 700, height: 700, left: -310, top: -310, overflow: 'visible' }}
              >
                <defs>
                  <radialGradient id="lineFade" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#1890ff" stopOpacity="0.7" />
                    <stop offset="70%" stopColor="#1890ff" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#1890ff" stopOpacity="0" />
                  </radialGradient>
                </defs>
                {connections.map(([from, to], i) => {
                  const fromNode = neuralNodes[from];
                  const toNode = neuralNodes[to];
                  return (
                    <motion.line
                      key={`line-${i}`}
                      x1={350 + fromNode.x}
                      y1={350 + fromNode.y}
                      x2={350 + toNode.x}
                      y2={350 + toNode.y}
                      stroke="#1890ff"
                      strokeWidth={1}
                      strokeOpacity={0.5}
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: [0, 1, 1, 0], opacity: [0, 0.5, 0.5, 0] }}
                      transition={{ duration: 2, delay: Math.max(fromNode.delay, toNode.delay) }}
                    />
                  );
                })}
              </svg>

              {/* Energy pulses */}
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={`energy-${i}`}
                  className="absolute w-2 h-2 rounded-full bg-white"
                  style={{ boxShadow: '0 0 12px rgba(255,255,255,0.9)' }}
                  initial={{ x: 0, y: 0, scale: 0, opacity: 0 }}
                  animate={{
                    x: [0, neuralNodes[i % 6].x, neuralNodes[6 + i % 10].x],
                    y: [0, neuralNodes[i % 6].y, neuralNodes[6 + i % 10].y],
                    scale: [0, 1, 0],
                    opacity: [0, 1, 0],
                  }}
                  transition={{ duration: 1.5, delay: 0.1 + i * 0.1 }}
                />
              ))}

              {/* Particles with natural fade */}
              {[...Array(30)].map((_, i) => {
                const angle = (i * 12) * Math.PI / 180;
                const distance = 80 + Math.random() * 120;
                return (
                  <motion.div
                    key={`particle-${i}`}
                    className="absolute rounded-full"
                    style={{
                      width: 2 + Math.random() * 2,
                      height: 2 + Math.random() * 2,
                      backgroundColor: i % 3 === 0 ? '#fff' : '#40a9ff',
                      boxShadow: '0 0 4px rgba(24,144,255,0.5)',
                    }}
                    initial={{ x: 0, y: 0, scale: 0, opacity: 0 }}
                    animate={{
                      x: Math.cos(angle) * distance,
                      y: Math.sin(angle) * distance,
                      scale: [0, 1, 0],
                      opacity: [0, 0.8, 0],
                    }}
                    transition={{ duration: 1.5 + Math.random() * 0.5, delay: Math.random() * 0.3 }}
                  />
                );
              })}
            </>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
