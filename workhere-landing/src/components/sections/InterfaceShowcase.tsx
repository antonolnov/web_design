'use client';

import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { useRef } from 'react';
import Container from '../ui/Container';

const basePath = process.env.NODE_ENV === 'production' ? '/web_design/workhere-landing' : '';

export default function InterfaceShowcase() {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  // Animated elements that "fly in" as you scroll
  const cardX = useTransform(scrollYProgress, [0.1, 0.4], [-200, 0]);
  const cardOpacity = useTransform(scrollYProgress, [0.1, 0.3], [0, 1]);
  
  const buttonY = useTransform(scrollYProgress, [0.2, 0.5], [100, 0]);
  const buttonOpacity = useTransform(scrollYProgress, [0.2, 0.4], [0, 1]);
  
  const photoScale = useTransform(scrollYProgress, [0.15, 0.45], [0.5, 1]);
  const photoOpacity = useTransform(scrollYProgress, [0.15, 0.35], [0, 1]);

  return (
    <section ref={containerRef} className="py-20 px-4 overflow-hidden">
      <Container>
        <div ref={ref} className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1890ff]/10 text-[#1890ff] text-sm font-medium mb-4"
          >
            ✨ Современный интерфейс
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
          >
            Удобная работа с кандидатами
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Интуитивный интерфейс, который ускоряет работу рекрутера в 3 раза
          </motion.p>
        </div>

        {/* Interface screenshot with animated elements */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="relative max-w-5xl mx-auto"
        >
          {/* Main screenshot */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
            <img
              src={`${basePath}/interface-screenshot.png`}
              alt="WorkHere Interface"
              className="w-full h-auto"
            />
            
            {/* Overlay gradient for depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent pointer-events-none" />
          </div>

          {/* Animated floating elements */}
          {/* Left card element */}
          <motion.div
            style={{ x: cardX, opacity: cardOpacity }}
            className="absolute left-[-20px] top-[20%] w-48 bg-white rounded-xl shadow-xl p-4 border border-gray-100 hidden lg:block"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#1890ff] to-[#0d6edb]" />
              <div>
                <div className="font-semibold text-gray-900 text-sm">Иван Петров</div>
                <div className="text-xs text-gray-500">Senior Developer</div>
              </div>
            </div>
            <div className="flex gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-yellow-400 text-xs">★</span>
              ))}
            </div>
            <div className="text-xs text-green-600 font-medium">✓ Подходит</div>
          </motion.div>

          {/* Top right button element */}
          <motion.div
            style={{ y: buttonY, opacity: buttonOpacity }}
            className="absolute right-[-10px] top-[15%] hidden lg:block"
          >
            <div className="bg-[#22c55e] text-white px-4 py-2 rounded-lg shadow-lg text-sm font-medium">
              + Добавить в воронку
            </div>
          </motion.div>

          {/* Photo element */}
          <motion.div
            style={{ scale: photoScale, opacity: photoOpacity }}
            className="absolute right-[10%] bottom-[-20px] w-20 h-20 rounded-xl overflow-hidden shadow-xl border-4 border-white hidden lg:block"
          >
            <div className="w-full h-full bg-gradient-to-br from-[#1890ff]/20 to-[#8b5cf6]/20 flex items-center justify-center">
              <span className="text-3xl">👤</span>
            </div>
          </motion.div>

          {/* Decorative elements */}
          <motion.div
            animate={{ y: [-5, 5, -5] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute -right-8 top-1/2 w-16 h-16 bg-[#1890ff]/10 rounded-full blur-xl"
          />
          <motion.div
            animate={{ y: [5, -5, 5] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute -left-8 bottom-1/3 w-20 h-20 bg-[#8b5cf6]/10 rounded-full blur-xl"
          />
        </motion.div>
      </Container>
    </section>
  );
}
