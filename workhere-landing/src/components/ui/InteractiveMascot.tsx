'use client';

import { useState, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface InteractiveMascotProps {
  size?: number;
  className?: string;
  variant?: 'default' | 'box' | 'plant' | '01' | '02' | '03' | '04' | '05' | '06' | '07' | '08';
}

// BasePath для GitHub Pages
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

const mascotImages: Record<string, string> = {
  default: `${basePath}/mascot.svg`,
  box: `${basePath}/cat_box.svg`,
  plant: `${basePath}/cat_plant.svg`,
  '01': `${basePath}/workhere_mascot_01_transparent.svg`,
  '02': `${basePath}/workhere_mascot_02_transparent.svg`,
  '03': `${basePath}/workhere_mascot_03_transparent.svg`,
  '04': `${basePath}/workhere_mascot_04_transparent.svg`,
  '05': `${basePath}/workhere_mascot_05_transparent.svg`,
  '06': `${basePath}/workhere_mascot_06_transparent.svg`,
  '07': `${basePath}/workhere_mascot_07_transparent.svg`,
  '08': `${basePath}/workhere_mascot_08_transparent.svg`,
};

// Phrases for different states
const activePhrases = [
  '✨ AI Power! ✨',
  '🚀 Поехали!',
  '💫 Магия процессов!',
  '🔥 Вжух!',
  '⚡ Супер-сила!',
  '🌟 Автоматизация!',
  '🎯 В точку!',
  '💪 Мощь AI!',
  '🧠 Умные решения!',
  '✨ Вау-эффект!',
  '🎉 Круто же!',
  '💎 Топ!',
];

const afterClickPhrases = [
  'Ещё раз? 😊',
  'Понравилось? 🤩',
  'Давай ещё! 🎯',
  'Нажми снова! ✨',
  'Ещё хочешь? 😏',
  'Круто, да? 🔥',
  'Попробуй ещё! 💫',
  'Я готов! 🚀',
];

// Neural network nodes - 3 rings
const generateNodes = () => {
  const nodes = [];
  for (let i = 0; i < 8; i++) {
    const angle = (i * 45) * Math.PI / 180;
    nodes.push({ x: Math.cos(angle) * 150, y: Math.sin(angle) * 150, delay: i * 0.02, ring: 1 });
  }
  for (let i = 0; i < 12; i++) {
    const angle = (i * 30 + 15) * Math.PI / 180;
    nodes.push({ x: Math.cos(angle) * 250, y: Math.sin(angle) * 250, delay: 0.1 + i * 0.02, ring: 2 });
  }
  for (let i = 0; i < 16; i++) {
    const angle = (i * 22.5) * Math.PI / 180;
    nodes.push({ x: Math.cos(angle) * 350, y: Math.sin(angle) * 350, delay: 0.2 + i * 0.015, ring: 3 });
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

export default function InteractiveMascot({ 
  size = 300, 
  className = '', 
  variant = '01'
}: InteractiveMascotProps) {
  const [isActive, setIsActive] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const [currentActivePhrase, setCurrentActivePhrase] = useState(0);
  const [currentAfterPhrase, setCurrentAfterPhrase] = useState(0);

  const orbitingParticles = useMemo(() => 
    [...Array(12)].map((_, i) => ({
      radius: 120 + (i % 3) * 25,
      duration: 4 + (i % 3) * 0.8,
      delay: i * 0.15,
      size: 3 + (i % 3),
      direction: i % 2 === 0 ? 1 : -1,
    })), []);

  const handleClick = useCallback(() => {
    if (isActive) return;
    setIsActive(true);
    setClickCount(prev => prev + 1);
    // Rotate through phrases
    setCurrentActivePhrase(prev => (prev + 1) % activePhrases.length);
    setCurrentAfterPhrase(prev => (prev + 1) % afterClickPhrases.length);
    setTimeout(() => setIsActive(false), 3500);
  }, [isActive]);

  return (
    <motion.div
      className={`relative cursor-pointer select-none ${className}`}
      style={{ width: size, height: size }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Animated Speech Bubble - changes based on state */}
      <motion.div
        className="absolute -top-16 left-1/2 -translate-x-1/2 z-20"
        initial={{ scale: 0, opacity: 0, rotate: -10 }}
        animate={{ 
          scale: 1, 
          opacity: 1, 
          rotate: 0,
        }}
        transition={{ delay: 0.5, type: 'spring', stiffness: 400, damping: 12 }}
      >
        <motion.div 
          className="relative bg-white px-5 py-3 rounded-2xl shadow-lg border-2 border-[#1890ff]/20"
          animate={{ 
            y: [0, -3, 0],
            rotate: [0, 1, -1, 0],
            borderColor: isHovered ? 'rgba(24,144,255,0.5)' : 'rgba(24,144,255,0.2)',
          }}
          transition={{ 
            duration: 3, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        >
          {/* Dynamic text */}
          <motion.span 
            className="font-bold text-gray-800 text-lg whitespace-nowrap inline-block"
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <AnimatePresence mode="wait">
              {isActive ? (
                <motion.span
                  key={`active-${currentActivePhrase}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="text-[#1890ff]"
                >
                  {activePhrases[currentActivePhrase]}
                </motion.span>
              ) : isHovered && clickCount === 0 ? (
                <motion.span
                  key="hover"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="text-[#1890ff]"
                >
                  Нажми на меня! 👆
                </motion.span>
              ) : clickCount > 0 ? (
                <motion.span
                  key={`clicked-${currentAfterPhrase}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  {afterClickPhrases[currentAfterPhrase]}
                </motion.span>
              ) : (
                <motion.span
                  key="default"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  Привет! 👋
                </motion.span>
              )}
            </AnimatePresence>
          </motion.span>
          
          {/* Animated sparkles */}
          <motion.span
            className="absolute -top-1 -right-1 text-yellow-400"
            animate={{ 
              rotate: [0, 15, -15, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            ✨
          </motion.span>
          
          {/* Triangle pointer with wobble */}
          <motion.div 
            className="absolute -bottom-3 left-1/2 -translate-x-1/2"
            animate={{ x: [-1, 1, -1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div 
              className="w-0 h-0"
              style={{
                borderLeft: '10px solid transparent',
                borderRight: '10px solid transparent',
                borderTop: '12px solid white',
              }}
            />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Subtle glow around mascot - intensifies on hover */}
      <motion.div
        className="absolute inset-0 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(24,144,255,0.15) 0%, transparent 70%)',
        }}
        animate={{
          scale: isHovered ? 1.3 : 1.1,
          opacity: isHovered ? 1 : 0.5,
        }}
        transition={{ duration: 0.3 }}
      />

      {/* AI indicator badge - positioned at top-left like a sticker/badge */}
      <motion.div
        className="absolute -left-3 -top-3 z-20"
        initial={{ scale: 0, rotate: -20 }}
        animate={{
          scale: 1,
          rotate: isHovered ? [-5, 5, -5] : -10,
        }}
        transition={{ 
          scale: { duration: 0.5, type: 'spring' },
          rotate: { duration: 2, repeat: Infinity, ease: "easeInOut" }
        }}
      >
        <div className="relative">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#40a9ff] to-[#0d6edb] flex items-center justify-center shadow-lg transform rotate-12">
            <motion.span 
              className="text-white font-black text-lg"
              animate={{ 
                textShadow: isHovered 
                  ? ['0 0 10px #fff', '0 0 20px #1890ff', '0 0 10px #fff']
                  : '0 0 5px rgba(255,255,255,0.5)'
              }}
              transition={{ duration: 0.6, repeat: isHovered ? Infinity : 0 }}
            >
              AI
            </motion.span>
          </div>
          {/* Pulse rings around AI badge */}
          {[0, 1].map((i) => (
            <motion.div
              key={i}
              className="absolute inset-0 rounded-2xl pointer-events-none rotate-12"
              style={{ border: '2px solid rgba(24,144,255,0.4)' }}
              animate={{ scale: [1, 1.4, 1.6], opacity: [0.6, 0.2, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.5 }}
            />
          ))}
          {/* Small sparkle */}
          <motion.span 
            className="absolute -top-1 -right-1 text-lg"
            animate={{ rotate: [0, 20, 0], scale: [1, 1.2, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          >
            ⚡
          </motion.span>
        </div>
      </motion.div>

      {/* Orbiting particles - visible on hover */}
      <AnimatePresence>
        {isHovered && !isActive && (
          <>
            {orbitingParticles.map((particle, i) => (
              <motion.div
                key={`orbit-${i}`}
                className="absolute pointer-events-none"
                style={{ 
                  width: size, 
                  height: size,
                  left: 0,
                  top: 0,
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, rotate: 360 * particle.direction }}
                exit={{ opacity: 0 }}
                transition={{ 
                  opacity: { duration: 0.3 },
                  rotate: { duration: particle.duration, repeat: Infinity, ease: 'linear', delay: particle.delay }
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
                    boxShadow: '0 0 10px rgba(24,144,255,0.9)',
                  }}
                  animate={{ opacity: [0.5, 1, 0.5], scale: [0.8, 1.3, 0.8] }}
                  transition={{ duration: 0.8, repeat: Infinity, delay: particle.delay }}
                />
              </motion.div>
            ))}
          </>
        )}
      </AnimatePresence>

      {/* Mascot image with floating animation */}
      <motion.div
        animate={{ y: [-5, 5, -5] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="w-full h-full relative z-10"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={mascotImages[variant] || mascotImages.default}
          alt="CloudFlow Mascot - Click me!"
          className="w-full h-full object-contain drop-shadow-2xl"
          width={size}
          height={size}
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
                  width: size * 0.4, 
                  height: size * 0.4,
                  left: '50%',
                  top: '50%',
                  marginLeft: -size * 0.2,
                  marginTop: -size * 0.2,
                  background: 'radial-gradient(circle, transparent 50%, rgba(24,144,255,0.4) 70%, transparent 100%)',
                }}
                initial={{ scale: 1, opacity: 0.9 }}
                animate={{ scale: 12, opacity: 0 }}
                transition={{ duration: 2, delay: i * 0.12 }}
              />
            ))}

            {/* Central energy burst */}
            <motion.div
              className="absolute rounded-full pointer-events-none"
              style={{ 
                width: size * 0.5, 
                height: size * 0.5,
                left: '50%',
                top: '50%',
                marginLeft: -size * 0.25,
                marginTop: -size * 0.25,
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
                  width: node.ring === 1 ? 12 : node.ring === 2 ? 9 : 6,
                  height: node.ring === 1 ? 12 : node.ring === 2 ? 9 : 6,
                  left: '50%',
                  top: '50%',
                  marginLeft: node.ring === 1 ? -6 : node.ring === 2 ? -4.5 : -3,
                  marginTop: node.ring === 1 ? -6 : node.ring === 2 ? -4.5 : -3,
                  background: `radial-gradient(circle, #fff 0%, #1890ff 50%, rgba(24,144,255,0.5) 80%, transparent 100%)`,
                  boxShadow: `0 0 ${node.ring * 12}px rgba(24,144,255,0.9)`,
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
              style={{ 
                width: 800, 
                height: 800, 
                left: '50%', 
                top: '50%',
                marginLeft: -400,
                marginTop: -400,
                overflow: 'visible' 
              }}
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
                    x1={400 + fromNode.x}
                    y1={400 + fromNode.y}
                    x2={400 + toNode.x}
                    y2={400 + toNode.y}
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
            {[...Array(16)].map((_, i) => (
              <motion.div
                key={`energy-${i}`}
                className="absolute rounded-full pointer-events-none"
                style={{ 
                  width: 10, 
                  height: 10,
                  left: '50%',
                  top: '50%',
                  marginLeft: -5,
                  marginTop: -5,
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
            {[...Array(48)].map((_, i) => {
              const angle = (i * 7.5) * Math.PI / 180;
              const distance = 180 + (i % 12) * 25;
              const pSize = 3 + (i % 4);
              return (
                <motion.div
                  key={`particle-${i}`}
                  className="absolute rounded-full pointer-events-none"
                  style={{
                    width: pSize,
                    height: pSize,
                    left: '50%',
                    top: '50%',
                    marginLeft: -pSize / 2,
                    marginTop: -pSize / 2,
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

            {/* Electric discharge arcs */}
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={`discharge-${i}`}
                className="absolute pointer-events-none"
                style={{
                  width: 3,
                  height: 350,
                  left: '50%',
                  top: '50%',
                  marginLeft: -1.5,
                  transformOrigin: 'center top',
                  transform: `rotate(${i * 45}deg)`,
                  background: 'linear-gradient(to bottom, rgba(24,144,255,0.9) 0%, rgba(64,169,255,0.5) 30%, transparent 100%)',
                  borderRadius: 3,
                }}
                initial={{ scaleY: 0, opacity: 0 }}
                animate={{ scaleY: [0, 1, 0], opacity: [0, 0.8, 0] }}
                transition={{ duration: 1, delay: 0.05 + i * 0.05 }}
              />
            ))}

            {/* Final fade pulse */}
            <motion.div
              className="absolute rounded-full pointer-events-none"
              style={{ 
                width: size * 0.4, 
                height: size * 0.4, 
                left: '50%',
                top: '50%',
                marginLeft: -size * 0.2,
                marginTop: -size * 0.2,
                background: 'radial-gradient(circle, rgba(24,144,255,0.6) 0%, transparent 70%)',
              }}
              initial={{ scale: 1, opacity: 0 }}
              animate={{ scale: 10, opacity: [0, 0.5, 0] }}
              transition={{ duration: 2, delay: 1.8 }}
            />

            {/* "AI" text explosion */}
            <motion.div
              className="absolute text-5xl font-black text-white pointer-events-none z-20"
              style={{ 
                left: '50%',
                top: '50%',
                marginLeft: -30,
                marginTop: -30,
                textShadow: '0 0 30px rgba(24,144,255,0.9)' 
              }}
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
