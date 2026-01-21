'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Brain, Zap } from 'lucide-react';

const aiFeatures = [
  'AI-скоринг кандидатов',
  'Умный парсинг резюме',
  'Автоопределение дублей',
  'Сводки по кандидату',
];

export default function AIBadge() {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [ripples, setRipples] = useState<{ id: number; x: number; y: number }[]>([]);

  const handleClick = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const newRipple = { id: Date.now(), x, y };
    setRipples((prev) => [...prev, newRipple]);
    setIsClicked(true);
    
    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
    }, 1000);
    
    setTimeout(() => setIsClicked(false), 300);
  };

  return (
    <motion.div
      className="relative inline-flex cursor-pointer select-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
      whileTap={{ scale: 0.95 }}
    >
      {/* Main Badge */}
      <motion.div
        className="relative overflow-hidden flex items-center gap-2 px-5 py-2.5 rounded-full border-2"
        animate={{
          borderColor: isHovered ? '#1890ff' : 'rgba(24,144,255,0.3)',
          backgroundColor: isHovered ? 'rgba(24,144,255,0.1)' : 'white',
        }}
        transition={{ duration: 0.3 }}
      >
        {/* Ripple effects */}
        {ripples.map((ripple) => (
          <motion.span
            key={ripple.id}
            className="absolute rounded-full bg-[#1890ff]/30 pointer-events-none"
            initial={{ width: 0, height: 0, x: ripple.x, y: ripple.y, opacity: 1 }}
            animate={{ width: 200, height: 200, x: ripple.x - 100, y: ripple.y - 100, opacity: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          />
        ))}

        {/* AI Icon with animation */}
        <motion.div
          className="relative"
          animate={{
            rotate: isClicked ? [0, -10, 10, -5, 5, 0] : 0,
          }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            animate={{
              scale: isHovered ? [1, 1.2, 1] : 1,
            }}
            transition={{ duration: 0.6, repeat: isHovered ? Infinity : 0 }}
          >
            <Sparkles className="text-[#1890ff]" size={20} />
          </motion.div>
          
          {/* Glow effect */}
          <motion.div
            className="absolute inset-0 bg-[#1890ff] rounded-full blur-md"
            animate={{ opacity: isHovered ? 0.4 : 0 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>

        <span className="font-semibold text-gray-800 relative z-10">
          Powered by AI
        </span>

        {/* Floating particles */}
        <AnimatePresence>
          {isHovered && (
            <>
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-[#1890ff] rounded-full"
                  initial={{ 
                    x: 50, 
                    y: 15,
                    opacity: 0,
                    scale: 0 
                  }}
                  animate={{ 
                    x: 50 + Math.cos(i * 60 * Math.PI / 180) * 40,
                    y: 15 + Math.sin(i * 60 * Math.PI / 180) * 40,
                    opacity: [0, 1, 0],
                    scale: [0, 1.5, 0],
                  }}
                  exit={{ opacity: 0, scale: 0 }}
                  transition={{ 
                    duration: 1.5,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                />
              ))}
            </>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Tooltip with AI features */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            className="absolute top-full left-1/2 mt-3 z-50"
            initial={{ opacity: 0, y: -10, x: '-50%' }}
            animate={{ opacity: 1, y: 0, x: '-50%' }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <div className="bg-gray-900 text-white rounded-[16px] p-4 shadow-2xl min-w-[220px]">
              <div className="flex items-center gap-2 mb-3 pb-2 border-b border-gray-700">
                <Brain className="text-[#1890ff]" size={18} />
                <span className="font-semibold">AI-возможности</span>
              </div>
              <ul className="space-y-2">
                {aiFeatures.map((feature, i) => (
                  <motion.li
                    key={feature}
                    className="flex items-center gap-2 text-sm text-gray-300"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Zap className="text-[#1890ff]" size={12} />
                    {feature}
                  </motion.li>
                ))}
              </ul>
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-gray-900 rotate-45" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
