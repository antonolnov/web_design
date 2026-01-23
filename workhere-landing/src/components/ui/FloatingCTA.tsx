'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

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
          {/* Pulsing glow behind button */}
          <motion.div
            className="absolute inset-0 rounded-full bg-[#22c55e]"
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.4, 0.2, 0.4],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          
          {/* Second pulse ring */}
          <motion.div
            className="absolute inset-0 rounded-full"
            style={{ border: '2px solid #22c55e' }}
            animate={{
              scale: [1, 1.3, 1.5],
              opacity: [0.6, 0.3, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeOut",
            }}
          />
          
          <motion.a
            href="#demo"
            className="relative flex items-center gap-3 px-7 py-4 bg-[#22c55e] text-white font-bold text-base rounded-full shadow-[0_8px_30px_rgba(34,197,94,0.5)]"
            whileHover={{ 
              scale: 1.05,
              boxShadow: '0 12px 40px rgba(34,197,94,0.6)',
            }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 400, damping: 25 }}
            animate={{
              boxShadow: [
                '0 8px 30px rgba(34,197,94,0.4)',
                '0 8px 40px rgba(34,197,94,0.6)',
                '0 8px 30px rgba(34,197,94,0.4)',
              ],
            }}
          >
            <motion.span
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
            >
              <Sparkles size={18} />
            </motion.span>
            <span>Запросить демо</span>
            <ArrowRight size={18} />
          </motion.a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
