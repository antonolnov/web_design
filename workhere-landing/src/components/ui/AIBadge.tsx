'use client';

import { useState, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Extended neural network - 3 layers for massive explosion
const generateNodes = () => {
  const nodes = [];
  // Inner ring (6 nodes)
  for (let i = 0; i < 6; i++) {
    const angle = (i * 60) * Math.PI / 180;
    nodes.push({ x: Math.cos(angle) * 120, y: Math.sin(angle) * 120, delay: i * 0.02, ring: 1 });
  }
  // Middle ring (10 nodes)
  for (let i = 0; i < 10; i++) {
    const angle = (i * 36 + 18) * Math.PI / 180;
    nodes.push({ x: Math.cos(angle) * 200, y: Math.sin(angle) * 200, delay: 0.1 + i * 0.02, ring: 2 });
  }
  // Outer ring (14 nodes)
  for (let i = 0; i < 14; i++) {
    const angle = (i * 25.7) * Math.PI / 180;
    nodes.push({ x: Math.cos(angle) * 300, y: Math.sin(angle) * 300, delay: 0.2 + i * 0.015, ring: 3 });
  }
  return nodes;
};

const neuralNodes = generateNodes();

// Generate connections between adjacent rings
const generateConnections = () => {
  const conns: [number, number][] = [];
  // Connect inner ring to middle
  for (let i = 0; i < 6; i++) {
    conns.push([i, 6 + (i * 2) % 10]);
    conns.push([i, 6 + (i * 2 + 1) % 10]);
  }
  // Connect middle ring to outer
  for (let i = 0; i < 10; i++) {
    conns.push([6 + i, 16 + Math.floor(i * 1.4)]);
    conns.push([6 + i, 16 + (Math.floor(i * 1.4) + 1) % 14]);
  }
  // Connect within rings
  for (let i = 0; i < 6; i++) conns.push([i, (i + 1) % 6]);
  for (let i = 0; i < 10; i++) conns.push([6 + i, 6 + (i + 1) % 10]);
  for (let i = 0; i < 14; i++) conns.push([16 + i, 16 + (i + 1) % 14]);
  return conns;
};

const connections = generateConnections();

// Electric arc points for idle state
const electricArcs = [
  { angle: 0, length: 35 },
  { angle: 45, length: 30 },
  { angle: 90, length: 38 },
  { angle: 135, length: 32 },
  { angle: 180, length: 36 },
  { angle: 225, length: 31 },
  { angle: 270, length: 37 },
  { angle: 315, length: 33 },
];

export default function AIBadge() {
  const [isActive, setIsActive] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [pulseCount, setPulseCount] = useState(0);

  // Generate random particle positions for idle state
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
    setPulseCount(p => p + 1);
    setTimeout(() => setIsActive(false), 3000);
  }, [isActive]);

  return (
    <motion.div
      className="relative inline-flex items-center justify-center cursor-pointer select-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
      style={{ width: 80, height: 80 }}
    >
      {/* Deep background glow */}
      <motion.div
        className="absolute rounded-full bg-[#1890ff]"
        animate={{
          scale: isActive ? 8 : isHovered ? 1.5 : 1,
          opacity: isActive ? 0.08 : isHovered ? 0.12 : 0.06,
        }}
        transition={{ duration: isActive ? 0.8 : 0.4 }}
        style={{ width: 80, height: 80, filter: 'blur(30px)' }}
      />

      {/* Electric field effect - idle state */}
      {electricArcs.map((arc, i) => (
        <motion.div
          key={`arc-${i}`}
          className="absolute"
          style={{
            width: 2,
            height: arc.length,
            left: '50%',
            top: '50%',
            transformOrigin: 'center top',
            transform: `rotate(${arc.angle}deg) translateX(-50%)`,
          }}
        >
          <motion.div
            className="w-full h-full bg-gradient-to-b from-[#1890ff] to-transparent rounded-full"
            animate={{
              opacity: [0, 0.8, 0],
              scaleY: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 0.8 + Math.random() * 0.4,
              repeat: Infinity,
              delay: i * 0.1,
              ease: 'easeInOut',
            }}
          />
        </motion.div>
      ))}

      {/* Multiple orbiting particles - enhanced */}
      {orbitingParticles.map((particle, i) => (
        <motion.div
          key={`orbit-${i}`}
          className="absolute"
          style={{ width: 80, height: 80 }}
          animate={{ rotate: 360 * particle.direction }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: 'linear',
            delay: particle.delay,
          }}
        >
          <motion.div
            className="absolute rounded-full bg-[#1890ff]"
            style={{
              width: particle.size,
              height: particle.size,
              left: '50%',
              top: `calc(50% - ${particle.radius}px)`,
              marginLeft: -particle.size / 2,
            }}
            animate={{
              opacity: [0.3, 1, 0.3],
              scale: [0.8, 1.2, 0.8],
              boxShadow: [
                '0 0 4px rgba(24,144,255,0.5)',
                '0 0 12px rgba(24,144,255,1)',
                '0 0 4px rgba(24,144,255,0.5)',
              ],
            }}
            transition={{
              duration: 1 + Math.random() * 0.5,
              repeat: Infinity,
              delay: particle.delay,
            }}
          />
        </motion.div>
      ))}

      {/* Outer ring - rotating with electric effect */}
      <motion.div
        className="absolute w-[68px] h-[68px] rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
        style={{
          border: '2px solid transparent',
          borderImage: 'linear-gradient(45deg, #1890ff, transparent, #1890ff, transparent) 1',
        }}
      >
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-[#1890ff]/40"
          animate={{
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
      </motion.div>

      {/* Middle ring - counter-rotating */}
      <motion.div
        className="absolute w-[54px] h-[54px] rounded-full border border-[#1890ff]/30"
        animate={{ rotate: -360 }}
        transition={{ duration: 7, repeat: Infinity, ease: 'linear' }}
      />

      {/* Inner ring - fast rotating */}
      <motion.div
        className="absolute w-[46px] h-[46px] rounded-full border border-[#1890ff]/20"
        animate={{ rotate: 360 }}
        transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
      />

      {/* Center orb */}
      <motion.div
        className="relative w-14 h-14 rounded-full bg-gradient-to-br from-[#1890ff] to-[#0d6edb] flex items-center justify-center"
        animate={{
          scale: isActive ? [1, 1.15, 1] : isHovered ? 1.08 : 1,
          boxShadow: isActive
            ? '0 0 60px rgba(24,144,255,0.8)'
            : isHovered 
              ? '0 0 40px rgba(24,144,255,0.6)' 
              : '0 0 20px rgba(24,144,255,0.4)',
        }}
        transition={{ duration: 0.3 }}
        whileTap={{ scale: 0.95 }}
      >
        {/* AI Text */}
        <motion.span
          className="text-white font-bold text-xl tracking-wider relative z-10"
          animate={{
            textShadow: isHovered 
              ? ['0 0 20px #fff', '0 0 40px #1890ff', '0 0 20px #fff']
              : '0 0 10px rgba(255,255,255,0.5)',
          }}
          transition={{ duration: 0.8, repeat: isHovered ? Infinity : 0 }}
        >
          AI
        </motion.span>

        {/* Inner glow pulse */}
        <motion.div
          className="absolute inset-2 rounded-full bg-white/20"
          animate={{
            opacity: [0.1, 0.3, 0.1],
            scale: [0.9, 1, 0.9],
          }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.div>

      {/* MASSIVE Neural Network Explosion Effect */}
      <AnimatePresence>
        {isActive && (
          <>
            {/* Initial shockwave */}
            {[0, 1, 2].map((i) => (
              <motion.div
                key={`shockwave-${i}`}
                className="absolute rounded-full border-2 border-[#1890ff]"
                style={{ width: 56, height: 56 }}
                initial={{ scale: 1, opacity: 0.8 }}
                animate={{ scale: 12, opacity: 0 }}
                transition={{ duration: 1.5, delay: i * 0.15, ease: 'easeOut' }}
              />
            ))}

            {/* Central energy burst */}
            <motion.div
              className="absolute w-20 h-20 rounded-full bg-white"
              initial={{ scale: 0, opacity: 1 }}
              animate={{ scale: 4, opacity: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              style={{ filter: 'blur(15px)' }}
            />

            {/* Neural nodes - 3 rings spreading out */}
            {neuralNodes.map((node, i) => (
              <motion.div
                key={`node-${i}`}
                className="absolute rounded-full"
                style={{
                  width: node.ring === 1 ? 8 : node.ring === 2 ? 6 : 4,
                  height: node.ring === 1 ? 8 : node.ring === 2 ? 6 : 4,
                  backgroundColor: '#1890ff',
                  boxShadow: `0 0 ${node.ring * 8}px rgba(24,144,255,0.9)`,
                }}
                initial={{ x: 0, y: 0, scale: 0, opacity: 0 }}
                animate={{ 
                  x: node.x, 
                  y: node.y, 
                  scale: [0, 1.5, 1],
                  opacity: [0, 1, 1, 0],
                }}
                transition={{ 
                  duration: 2.5,
                  delay: node.delay,
                  ease: 'easeOut',
                }}
              />
            ))}

            {/* Neural connections */}
            <svg 
              className="absolute pointer-events-none" 
              style={{ 
                width: 700, 
                height: 700, 
                left: -310, 
                top: -310,
                overflow: 'visible',
              }}
            >
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
                    strokeWidth={fromNode.ring === 1 ? 2 : 1}
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ 
                      pathLength: [0, 1, 1, 0],
                      opacity: [0, 0.7, 0.7, 0],
                    }}
                    transition={{ 
                      duration: 2.2,
                      delay: Math.max(fromNode.delay, toNode.delay) + 0.05,
                      ease: 'easeOut',
                    }}
                  />
                );
              })}
            </svg>

            {/* Energy pulses traveling through the network */}
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={`energy-${i}`}
                className="absolute w-3 h-3 rounded-full bg-white"
                style={{ boxShadow: '0 0 20px rgba(255,255,255,1)' }}
                initial={{ x: 0, y: 0, scale: 0, opacity: 0 }}
                animate={{
                  x: [0, neuralNodes[i % 6].x, neuralNodes[6 + i % 10].x, neuralNodes[16 + i % 14].x],
                  y: [0, neuralNodes[i % 6].y, neuralNodes[6 + i % 10].y, neuralNodes[16 + i % 14].y],
                  scale: [0, 1.5, 1, 0],
                  opacity: [0, 1, 1, 0],
                }}
                transition={{
                  duration: 2,
                  delay: 0.1 + i * 0.08,
                  ease: 'easeOut',
                }}
              />
            ))}

            {/* Particle explosion - massive spread */}
            {[...Array(40)].map((_, i) => {
              const angle = (i * 9) * Math.PI / 180;
              const distance = 150 + Math.random() * 200;
              return (
                <motion.div
                  key={`particle-${i}`}
                  className="absolute rounded-full"
                  style={{
                    width: 2 + Math.random() * 3,
                    height: 2 + Math.random() * 3,
                    backgroundColor: i % 3 === 0 ? '#fff' : '#40a9ff',
                  }}
                  initial={{ x: 0, y: 0, scale: 0, opacity: 0 }}
                  animate={{
                    x: Math.cos(angle) * distance,
                    y: Math.sin(angle) * distance,
                    scale: [0, 1.5, 0],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 2 + Math.random() * 0.5,
                    delay: 0.1 + Math.random() * 0.3,
                    ease: 'easeOut',
                  }}
                />
              );
            })}

            {/* Electric discharge arcs */}
            {[...Array(8)].map((_, i) => {
              const angle = i * 45;
              return (
                <motion.div
                  key={`discharge-${i}`}
                  className="absolute"
                  style={{
                    width: 3,
                    height: 280,
                    left: '50%',
                    top: '50%',
                    marginLeft: -1.5,
                    transformOrigin: 'center top',
                    transform: `rotate(${angle}deg)`,
                  }}
                  initial={{ scaleY: 0, opacity: 0 }}
                  animate={{ 
                    scaleY: [0, 1, 0],
                    opacity: [0, 0.8, 0],
                  }}
                  transition={{
                    duration: 0.8,
                    delay: 0.1 + i * 0.05,
                    ease: 'easeOut',
                  }}
                >
                  <div 
                    className="w-full h-full rounded-full"
                    style={{
                      background: 'linear-gradient(to bottom, #1890ff 0%, #40a9ff 30%, transparent 100%)',
                      filter: 'blur(2px)',
                    }}
                  />
                </motion.div>
              );
            })}

            {/* Final fade pulse */}
            <motion.div
              className="absolute rounded-full bg-[#1890ff]"
              style={{ width: 56, height: 56, filter: 'blur(40px)' }}
              initial={{ scale: 1, opacity: 0 }}
              animate={{ scale: 8, opacity: [0, 0.3, 0] }}
              transition={{ duration: 1.5, delay: 1.5, ease: 'easeOut' }}
            />
          </>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
