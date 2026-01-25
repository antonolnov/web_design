'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  onClick?: () => void;
  className?: string;
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  className = '',
}: ButtonProps) {
  const baseStyles = `
    inline-flex items-center justify-center font-semibold
    transition-all duration-200 cursor-pointer
    focus:outline-none focus:ring-2 focus:ring-[#1890ff]/50 focus:ring-offset-2
  `;

  const variants = {
    primary: `
      bg-[#1890ff] text-white
      hover:bg-[#0d6edb]
      shadow-lg shadow-[#1890ff]/25
    `,
    secondary: `
      bg-[#e6f4ff] text-[#1890ff]
      hover:bg-[#d1e9ff]
    `,
    outline: `
      bg-transparent text-[#1890ff] border-2 border-[#1890ff]
      hover:bg-[#1890ff] hover:text-white
    `,
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm rounded-[12px]',
    md: 'px-6 py-3 text-base rounded-[16px]',
    lg: 'px-8 py-4 text-lg rounded-[16px]',
  };

  const combinedStyles = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  const Component = href ? motion.a : motion.button;

  return (
    <Component
      href={href}
      onClick={onClick}
      className={combinedStyles}
      whileHover={{ y: -2, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2 }}
    >
      {children}
    </Component>
  );
}
