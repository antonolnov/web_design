'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ChevronDown } from 'lucide-react';

interface SectionTitleScreenProps {
  title: string;
  subtitle?: string;
  color?: 'blue' | 'purple' | 'teal' | 'orange' | 'green';
}

const colorStyles = {
  blue: {
    gradient: 'from-[#1890ff] to-[#0d6edb]',
    text: 'text-white',
    subtitleText: 'text-white/80',
  },
  purple: {
    gradient: 'from-[#8b5cf6] to-[#7c3aed]',
    text: 'text-white',
    subtitleText: 'text-white/80',
  },
  teal: {
    gradient: 'from-[#14b8a6] to-[#0d9488]',
    text: 'text-white',
    subtitleText: 'text-white/80',
  },
  orange: {
    gradient: 'from-[#f97316] to-[#ea580c]',
    text: 'text-white',
    subtitleText: 'text-white/80',
  },
  green: {
    gradient: 'from-[#22c55e] to-[#16a34a]',
    text: 'text-white',
    subtitleText: 'text-white/80',
  },
};

export default function SectionTitleScreen({ 
  title, 
  subtitle,
  color = 'blue' 
}: SectionTitleScreenProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-20%' });
  const styles = colorStyles[color];

  return (
    <section 
      ref={ref}
      className={`relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br ${styles.gradient}`}
    >
      {/* Decorative patterns */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        />
        
        {/* Floating shapes */}
        <motion.div
          className="absolute w-64 h-64 rounded-full bg-white/5"
          style={{ top: '10%', right: '15%' }}
          animate={{ y: [-20, 20, -20], rotate: [0, 10, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute w-48 h-48 rounded-full bg-white/5"
          style={{ bottom: '15%', left: '10%' }}
          animate={{ y: [20, -20, 20], rotate: [0, -10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute w-32 h-32 rounded-full bg-white/10"
          style={{ top: '40%', left: '20%' }}
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className={`text-5xl md:text-6xl lg:text-7xl font-bold ${styles.text} mb-4`}
        >
          {title}
        </motion.h2>
        
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={`text-xl md:text-2xl ${styles.subtitleText} max-w-2xl mx-auto`}
          >
            {subtitle}
          </motion.p>
        )}
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 0.5 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center text-white/60"
        >
          <span className="text-sm mb-2">Листайте вниз</span>
          <ChevronDown size={24} />
        </motion.div>
      </motion.div>
    </section>
  );
}
