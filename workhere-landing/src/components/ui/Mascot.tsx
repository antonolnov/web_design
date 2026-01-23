'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface MascotProps {
  size?: number;
  className?: string;
  animate?: boolean;
}

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
        animate={animate ? { y: [-5, 5, -5] } : undefined}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="w-full h-full"
      >
        <Image
          src="/mascot.png"
          alt="WorkHere Mascot"
          width={size}
          height={size}
          className="w-full h-full object-contain"
          priority
        />
      </motion.div>
    </motion.div>
  );
}
