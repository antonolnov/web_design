'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, X } from 'lucide-react';

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Показываем кнопку после прокрутки 500px
      const scrolled = window.scrollY > 500;
      setIsVisible(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3"
          initial={{ opacity: 0, y: 100, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 100, scale: 0.8 }}
          transition={{ 
            type: 'spring', 
            stiffness: 260, 
            damping: 20 
          }}
        >
          {/* Minimize button */}
          {!isMinimized && (
            <motion.button
              onClick={() => setIsMinimized(true)}
              className="w-8 h-8 bg-white/80 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center text-gray-400 hover:text-gray-600 hover:bg-white transition-all"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ delay: 0.2 }}
              aria-label="Скрыть"
            >
              <X size={14} />
            </motion.button>
          )}

          {/* Main CTA Button */}
          <AnimatePresence mode="wait">
            {isMinimized ? (
              <motion.button
                key="minimized"
                onClick={() => setIsMinimized(false)}
                className="w-14 h-14 bg-[#1890ff] rounded-full shadow-[0_8px_30px_rgba(24,144,255,0.4)] flex items-center justify-center text-white hover:bg-[#0d6edb] transition-colors"
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                exit={{ scale: 0, rotate: 180 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Запросить демо"
              >
                <ArrowRight size={24} />
              </motion.button>
            ) : (
              <motion.a
                key="expanded"
                href="#demo"
                className="group flex items-center gap-3 px-6 py-4 bg-[#1890ff] text-white font-semibold rounded-full shadow-[0_8px_30px_rgba(24,144,255,0.4)] hover:bg-[#0d6edb] transition-colors"
                initial={{ scale: 0, x: 50 }}
                animate={{ scale: 1, x: 0 }}
                exit={{ scale: 0, x: 50 }}
                whileHover={{ scale: 1.05, boxShadow: '0 12px 40px rgba(24,144,255,0.5)' }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Запросить демо</span>
                <motion.div
                  className="flex items-center justify-center"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ 
                    duration: 1.5, 
                    repeat: Infinity, 
                    ease: 'easeInOut' 
                  }}
                >
                  <ArrowRight size={20} />
                </motion.div>
              </motion.a>
            )}
          </AnimatePresence>

          {/* Pulse effect behind button */}
          {!isMinimized && (
            <motion.div
              className="absolute bottom-0 right-0 w-full h-full bg-[#1890ff] rounded-full -z-10"
              animate={{
                scale: [1, 1.5, 1.5],
                opacity: [0.4, 0, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeOut',
              }}
              style={{ 
                width: '100%', 
                height: '56px',
                borderRadius: '9999px'
              }}
            />
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
