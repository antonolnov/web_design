'use client';

import { motion } from 'framer-motion';

interface MascotProps {
  size?: number;
  className?: string;
  animate?: boolean;
  variant?: 'default' | 'box' | 'plant' | '01' | '02' | '03' | '04' | '05' | '06' | '07' | '08';
  showSpeechBubble?: boolean;
  speechText?: string;
}

// BasePath для GitHub Pages
const basePath = '/web_design/workhere-landing';

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

export default function Mascot({ 
  size = 200, 
  className = '', 
  animate = true,
  variant = 'default',
  showSpeechBubble = false,
  speechText = 'Привет!'
}: MascotProps) {
  return (
    <motion.div
      className={`relative ${className}`}
      style={{ width: size, height: size }}
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Animated Speech Bubble - positioned above mascot, not covering other content */}
      {showSpeechBubble && (
        <motion.div
          className="absolute -top-14 left-0 right-0 flex justify-center z-10 pointer-events-none"
          initial={{ scale: 0, opacity: 0, y: 10 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          transition={{ delay: 0.5, type: 'spring', stiffness: 400, damping: 12 }}
        >
          <motion.div 
            className="relative bg-white px-4 py-2.5 rounded-2xl shadow-lg border-2 border-[#1890ff]/20"
            animate={{ 
              y: [0, -3, 0],
              rotate: [0, 1, -1, 0],
            }}
            transition={{ 
              duration: 3, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          >
            {/* Text with emoji */}
            <motion.span 
              className="font-bold text-gray-800 text-base whitespace-nowrap inline-block"
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              {speechText}
            </motion.span>
            
            {/* Sparkle */}
            <motion.span
              className="absolute -top-1 -right-1 text-yellow-400 text-sm"
              animate={{ rotate: [0, 15, -15, 0], scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              ✨
            </motion.span>
            
            {/* Triangle pointer */}
            <div 
              className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0"
              style={{
                borderLeft: '8px solid transparent',
                borderRight: '8px solid transparent',
                borderTop: '10px solid white',
              }}
            />
          </motion.div>
        </motion.div>
      )}

      <motion.div
        animate={animate ? { y: [-5, 5, -5] } : undefined}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="w-full h-full"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={mascotImages[variant] || mascotImages.default}
          alt="WorkHere Mascot"
          className="w-full h-full object-contain"
          width={size}
          height={size}
        />
      </motion.div>
    </motion.div>
  );
}
