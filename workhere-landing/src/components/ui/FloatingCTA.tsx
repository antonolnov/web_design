'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Показываем кнопку после прокрутки 400px
      setIsVisible(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed bottom-8 right-8 z-50"
          initial={{ opacity: 0, y: 60, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 60, scale: 0.8 }}
          transition={{ 
            type: 'spring', 
            stiffness: 300, 
            damping: 25,
            mass: 0.8
          }}
        >
          {/* Glow effect behind button */}
          <div className="absolute inset-0 bg-[#1890ff] rounded-full blur-xl opacity-40 scale-110" />
          
          {/* Main CTA Button */}
          <motion.a
            href="#demo"
            className="relative flex items-center gap-3 px-8 py-5 bg-gradient-to-r from-[#1890ff] to-[#0d6edb] text-white font-bold text-lg rounded-full shadow-[0_10px_40px_rgba(24,144,255,0.5)] hover:shadow-[0_15px_50px_rgba(24,144,255,0.6)] transition-shadow"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <span>Запросить демо</span>
            <motion.div
              className="flex items-center justify-center bg-white/20 rounded-full p-1"
              animate={{ x: [0, 4, 0] }}
              transition={{ 
                duration: 1.5, 
                repeat: Infinity, 
                ease: 'easeInOut',
                repeatType: 'loop'
              }}
            >
              <ArrowRight size={20} />
            </motion.div>
          </motion.a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
