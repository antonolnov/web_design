'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Mascot from '@/components/ui/Mascot';

// BasePath для GitHub Pages
const basePath = '/web_design/workhere-landing';

export default function InterfaceSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  // Parallax and scale effects
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7], [0.8, 1, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 0.3], [100, 0]);

  // Elements that "fly in" on scroll
  const cardY = useTransform(scrollYProgress, [0.1, 0.4], [50, 0]);
  const cardOpacity = useTransform(scrollYProgress, [0.1, 0.3], [0, 1]);
  
  const buttonY = useTransform(scrollYProgress, [0.15, 0.45], [30, 0]);
  const buttonOpacity = useTransform(scrollYProgress, [0.15, 0.35], [0, 1]);

  return (
    <section
      ref={sectionRef}
      className="relative py-20 lg:py-32 bg-gradient-to-b from-gray-50 to-white overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] rounded-full opacity-30"
          style={{
            background: 'radial-gradient(ellipse, rgba(24,144,255,0.1) 0%, transparent 70%)',
          }}
        />
      </div>

      <div className="max-w-[1400px] mx-auto px-6">
        {/* Section header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Удобный интерфейс для всей команды
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Интуитивно понятная система, с которой справится каждый рекрутер
          </p>
        </motion.div>

        {/* Main screenshot container */}
        <motion.div
          className="relative mx-auto max-w-5xl"
          style={{ scale, opacity, y }}
        >
          {/* Browser frame */}
          <div className="relative rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl shadow-gray-900/10 border border-gray-200 bg-white">
            {/* Browser header */}
            <div className="flex items-center gap-2 px-4 py-3 bg-gray-100 border-b border-gray-200">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>
              <div className="flex-1 flex justify-center">
                <div className="px-4 py-1 bg-white rounded-md text-sm text-gray-500 border border-gray-200">
                  app.workhere.ru
                </div>
              </div>
            </div>

            {/* Screenshot */}
            <div className="relative">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`${basePath}/interface-screenshot.png`}
                alt="WorkHere Interface"
                className="w-full h-auto"
              />

              {/* Overlay elements that animate in */}
              {/* Left sidebar highlight */}
              <motion.div
                className="absolute left-[2%] top-[15%] w-[18%] h-[70%] rounded-xl border-2 border-[#1890ff] pointer-events-none"
                style={{ opacity: cardOpacity, y: cardY }}
              >
                <motion.div
                  className="absolute -top-8 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-[#1890ff] text-white text-xs font-medium rounded-full whitespace-nowrap"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, type: 'spring' }}
                >
                  Список кандидатов
                </motion.div>
              </motion.div>

              {/* Main content highlight */}
              <motion.div
                className="absolute right-[2%] top-[10%] w-[55%] h-[80%] rounded-xl border-2 border-[#16BF54] pointer-events-none"
                style={{ opacity: buttonOpacity, y: buttonY }}
              >
                <motion.div
                  className="absolute -top-8 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-[#16BF54] text-white text-xs font-medium rounded-full whitespace-nowrap"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7, type: 'spring' }}
                >
                  Карточка кандидата
                </motion.div>
              </motion.div>

              {/* Shine effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none"
                initial={{ x: '-100%' }}
                whileInView={{ x: '200%' }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: 0.3 }}
              />
            </div>
          </div>

          {/* Floating feature badges */}
          <motion.div
            className="absolute -left-4 lg:-left-16 top-1/4 px-4 py-2 bg-white rounded-xl shadow-lg border border-gray-100 hidden md:flex items-center gap-2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            <span className="text-2xl">⚡</span>
            <span className="text-sm font-medium text-gray-700">Быстрый поиск</span>
          </motion.div>

          <motion.div
            className="absolute -right-4 lg:-right-16 top-1/3 px-4 py-2 bg-white rounded-xl shadow-lg border border-gray-100 hidden md:flex items-center gap-2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
          >
            <span className="text-2xl">🎯</span>
            <span className="text-sm font-medium text-gray-700">AI подбор</span>
          </motion.div>

          <motion.div
            className="absolute -right-4 lg:-right-12 bottom-1/4 px-4 py-2 bg-white rounded-xl shadow-lg border border-gray-100 hidden md:flex items-center gap-2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1 }}
          >
            <span className="text-2xl">📊</span>
            <span className="text-sm font-medium text-gray-700">Аналитика</span>
          </motion.div>

          {/* Mascot pointing at the interface */}
          <motion.div
            className="absolute -left-8 lg:-left-20 bottom-0 hidden xl:block"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1.2 }}
          >
            <Mascot variant="02" size={100} phrase="Смотри! 👀" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
