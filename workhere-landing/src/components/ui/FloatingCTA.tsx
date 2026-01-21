'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 600);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed bottom-8 right-8 z-50"
          initial={{ opacity: 0, y: 40, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 40, scale: 0.9 }}
          transition={{ type: 'spring', stiffness: 400, damping: 30 }}
        >
          <motion.a
            href="#demo"
            className="flex items-center gap-3 px-7 py-4 bg-[#1890ff] text-white font-semibold text-base rounded-full shadow-[0_8px_30px_rgba(24,144,255,0.4)]"
            whileHover={{ 
              scale: 1.05,
              boxShadow: '0 12px 40px rgba(24,144,255,0.5)',
            }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 400, damping: 25 }}
          >
            <span>Запросить демо</span>
            <ArrowRight size={18} />
          </motion.a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
