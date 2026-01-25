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

          {/* Mascot pointing at the interface */}
          <motion.div
            className="absolute left-4 lg:left-8 -bottom-12 hidden lg:block"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
          >
            <Mascot variant="02" size={100} phrase="Смотри! 👀" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
