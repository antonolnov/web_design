'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface SectionTitleScreenProps {
  title: string;
  subtitle?: string;
  color?: 'blue' | 'purple' | 'teal' | 'orange' | 'green';
}

const colorConfigs = {
  blue: '#1890ff',
  purple: '#8b5cf6',
  teal: '#14b8a6',
  orange: '#f97316',
  green: '#22c55e',
};

export default function SectionTitleScreen({ 
  title, 
  subtitle,
  color = 'blue' 
}: SectionTitleScreenProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-30%' });
  const accentColor = colorConfigs[color];

  return (
    <section 
      ref={ref}
      className="relative py-32 md:py-40 overflow-hidden"
    >
      {/* Minimal accent line */}
      <motion.div
        className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-32 rounded-full"
        style={{ backgroundColor: accentColor }}
        initial={{ height: 0, opacity: 0 }}
        animate={isInView ? { height: 128, opacity: 1 } : {}}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      />

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="max-w-3xl">
          {/* Number/Label */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4 mb-6"
          >
            <div 
              className="w-12 h-[1px]"
              style={{ backgroundColor: accentColor }}
            />
            <span 
              className="text-sm font-medium tracking-widest uppercase"
              style={{ color: accentColor }}
            >
              {title}
            </span>
          </motion.div>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-[1.1] tracking-tight"
          >
            {subtitle || title}
          </motion.h2>

          {/* Decorative dot */}
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="w-3 h-3 rounded-full mt-8"
            style={{ backgroundColor: accentColor }}
          />
        </div>
      </div>

      {/* Large background text */}
      <motion.div
        className="absolute right-0 top-1/2 -translate-y-1/2 text-[20vw] font-bold text-gray-100 leading-none pointer-events-none select-none hidden lg:block"
        initial={{ opacity: 0, x: 100 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        style={{ 
          WebkitTextStroke: `1px ${accentColor}10`,
        }}
      >
        {title.slice(0, 2)}
      </motion.div>
    </section>
  );
}
