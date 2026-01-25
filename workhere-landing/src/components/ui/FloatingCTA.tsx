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
          className="fixed bottom-6 right-6 z-50"
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
        >
          <a
            href="#demo"
            className="flex items-center gap-2 px-6 py-3 bg-[#5b5fc7] text-white font-semibold rounded-full shadow-lg shadow-[#5b5fc7]/30 hover:bg-[#4a4eb3] transition-colors"
          >
            Запросить демо
            <ArrowRight size={18} />
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
