'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className = '', hover = true }: CardProps) {
  return (
    <motion.div
      className={`
        bg-white rounded-[16px] p-6
        shadow-[0_4px_20px_rgba(0,0,0,0.08)]
        border border-gray-100
        ${className}
      `}
      whileHover={hover ? { 
        y: -8, 
        boxShadow: '0 12px 40px rgba(24, 144, 255, 0.15)' 
      } : undefined}
      transition={{ duration: 0.3, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}
