'use client';

import { motion } from 'framer-motion';

interface PawsProps {
  size?: number;
  className?: string;
  animate?: boolean;
  rotation?: number;
  opacity?: number;
  flip?: boolean;
}

// BasePath для GitHub Pages
const basePath = '/web_design/workhere-landing';

export default function Paws({ 
  size = 100, 
  className = '', 
  animate = true,
  rotation = 0,
  opacity = 1,
  flip = false
}: PawsProps) {
  return (
    <motion.div
      className={`pointer-events-none ${className}`}
      style={{ 
        width: size, 
        height: size,
        transform: `rotate(${rotation}deg) ${flip ? 'scaleX(-1)' : ''}`,
        opacity
      }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        animate={animate ? { 
          y: [-3, 3, -3],
          rotate: [-2, 2, -2]
        } : undefined}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="w-full h-full"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`${basePath}/paws.svg`}
          alt=""
          className="w-full h-full object-contain"
          width={size}
          height={size}
        />
      </motion.div>
    </motion.div>
  );
}
