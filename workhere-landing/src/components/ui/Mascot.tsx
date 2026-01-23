'use client';

import { motion } from 'framer-motion';

interface MascotProps {
  size?: number;
  className?: string;
  animate?: boolean;
}

// Простой fallback-маскот пока пользователь не загрузит свою картинку
// Для использования своего маскота: положите mascot.png в папку public
// и измените этот компонент на использование Image из next/image

export default function Mascot({ 
  size = 200, 
  className = '', 
  animate = true
}: MascotProps) {
  return (
    <motion.div
      className={`relative ${className}`}
      style={{ width: size, height: size }}
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        animate={animate ? { y: [-6, 6, -6] } : undefined}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="w-full h-full"
      >
        {/* Placeholder: круг с иконкой кота */}
        <div 
          className="w-full h-full rounded-full flex items-center justify-center shadow-xl"
          style={{
            background: 'linear-gradient(135deg, #6BA5D7 0%, #4A90C7 100%)',
            border: '4px solid white',
          }}
        >
          <div className="text-center text-white">
            <div style={{ fontSize: size * 0.35 }}>🐱</div>
            <div 
              className="font-bold mt-1"
              style={{ fontSize: size * 0.08 }}
            >
              WorkHere
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
