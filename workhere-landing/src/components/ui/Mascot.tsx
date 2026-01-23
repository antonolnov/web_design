'use client';

import { motion } from 'framer-motion';

interface MascotProps {
  size?: number;
  className?: string;
  animate?: boolean;
  variant?: 'default' | 'box' | 'plant';
  showSpeechBubble?: boolean;
  speechText?: string;
}

// BasePath для GitHub Pages
const basePath = '/web_design/workhere-landing';

const mascotImages = {
  default: `${basePath}/mascot.svg`,
  box: `${basePath}/cat_box.svg`,
  plant: `${basePath}/cat_plant.svg`,
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
      {/* Speech Bubble */}
      {showSpeechBubble && (
        <motion.div
          className="absolute -top-16 -left-4 z-10"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5, type: 'spring', stiffness: 300, damping: 15 }}
        >
          <div className="relative bg-white px-5 py-3 rounded-2xl shadow-lg border-2 border-[#1890ff]/20">
            <span className="font-bold text-gray-800 text-lg whitespace-nowrap">{speechText}</span>
            {/* Triangle pointer */}
            <div 
              className="absolute -bottom-3 left-8 w-0 h-0"
              style={{
                borderLeft: '10px solid transparent',
                borderRight: '10px solid transparent',
                borderTop: '12px solid white',
              }}
            />
            <div 
              className="absolute -bottom-[14px] left-8 w-0 h-0"
              style={{
                borderLeft: '10px solid transparent',
                borderRight: '10px solid transparent',
                borderTop: '12px solid rgba(24, 144, 255, 0.2)',
              }}
            />
          </div>
        </motion.div>
      )}

      <motion.div
        animate={animate ? { y: [-5, 5, -5] } : undefined}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="w-full h-full"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={mascotImages[variant]}
          alt="WorkHere Mascot"
          className="w-full h-full object-contain"
          width={size}
          height={size}
        />
      </motion.div>
    </motion.div>
  );
}
