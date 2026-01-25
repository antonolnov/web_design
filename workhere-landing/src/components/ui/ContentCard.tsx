'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, ReactNode } from 'react';

interface ContentCardProps {
  children: ReactNode;
  className?: string;
  variant?: 'white' | 'glass' | 'dark' | 'gradient';
  fullWidth?: boolean;
  noPadding?: boolean;
}

export default function ContentCard({ 
  children, 
  className = '',
  variant = 'white',
  fullWidth = false,
  noPadding = false
}: ContentCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  const variants = {
    white: 'bg-white/95 border-gray-100 shadow-xl',
    glass: 'bg-white/80 backdrop-blur-sm border-white/50 shadow-lg',
    dark: 'bg-[#0a1628]/95 border-[#1890ff]/10 shadow-2xl',
    gradient: 'bg-gradient-to-br from-[#1890ff] to-[#0d6edb] border-[#1890ff]/20 shadow-xl',
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`
        relative rounded-3xl border overflow-hidden
        ${variants[variant]}
        ${fullWidth ? 'w-full' : 'max-w-6xl mx-auto'}
        ${noPadding ? '' : 'p-8 md:p-12'}
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
}
