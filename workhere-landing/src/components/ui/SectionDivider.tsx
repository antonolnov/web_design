'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Mascot from './Mascot';

interface SectionDividerProps {
  showMascot?: boolean;
}

export default function SectionDivider({ showMascot = true }: SectionDividerProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <div ref={ref} className="relative py-16 overflow-hidden bg-gradient-to-b from-white via-[#f8fbff] to-white">
      {/* Simple static gradient */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[200px] rounded-full opacity-30"
        style={{ background: 'radial-gradient(ellipse, rgba(24,144,255,0.2) 0%, transparent 70%)' }}
      />

      {/* Mascot */}
      {showMascot && (
        <motion.div
          className="relative z-10 flex justify-center"
          initial={{ opacity: 0, scale: 0.8, y: 30 }}
          animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            animate={{ y: [-5, 5, -5] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <Mascot size={100} />
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
