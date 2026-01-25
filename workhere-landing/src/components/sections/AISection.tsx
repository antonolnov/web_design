'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const phrases = [
  'Представьте будущее,',
  'где вакансии',
  'закрываются',
  'быстрее',
  'сами собой...',
];

export default function AISection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  // Transform scroll progress to opacity and scale for text
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.5, 0.8], [0, 1, 1, 0.5]);
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.9, 1, 1, 0.95]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[200vh] overflow-hidden"
      style={{
        background: 'linear-gradient(to bottom, #fff 0%, #FFF0F3 20%, #FFCDD8 50%, #F8B4C0 80%, #fff 100%)',
      }}
    >
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: 4 + (i % 4) * 2,
              height: 4 + (i % 4) * 2,
              left: `${5 + (i * 3.2) % 90}%`,
              top: `${10 + (i * 2.7) % 80}%`,
              background: `rgba(172, 69, 90, ${0.1 + (i % 5) * 0.05})`,
            }}
            animate={{
              y: [0, -40, 0],
              x: [0, (i % 2 === 0 ? 20 : -20), 0],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 6 + (i % 4),
              repeat: Infinity,
              delay: i * 0.2,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      {/* Sticky text container */}
      <div className="sticky top-0 h-screen flex items-center justify-center">
        <motion.div
          className="text-center px-6"
          style={{ opacity, scale }}
        >
          {phrases.map((phrase, index) => (
            <motion.div
              key={index}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
              style={{
                color: '#AC455A',
              }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ delay: index * 0.15, duration: 0.8 }}
            >
              {phrase}
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* AI reveal section */}
      <div className="relative h-screen flex items-center justify-center">
        <motion.div
          className="text-center px-6 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* AI Icon */}
          <motion.div
            className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-[#F97B8B] to-[#AC455A] mb-8 shadow-xl"
            animate={{
              boxShadow: [
                '0 0 30px rgba(172, 69, 90, 0.3)',
                '0 0 60px rgba(172, 69, 90, 0.5)',
                '0 0 30px rgba(172, 69, 90, 0.3)',
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="text-white font-black text-2xl">AI</span>
          </motion.div>

          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            style={{ color: '#AC455A' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Мы создали
            <br />
            искусственный интеллект
            <br />
            <span className="text-[#1890ff]">WorkHere AI</span>
          </motion.h2>

          <motion.p
            className="text-xl text-gray-600 max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Он непрерывно анализирует работу рекрутера над вакансией и рекомендует подходящих кандидатов из вашей базы резюме
          </motion.p>

          <motion.a
            href="#demo"
            className="inline-flex items-center justify-center px-8 py-4 bg-[#16BF54] text-white font-semibold rounded-lg text-lg shadow-lg shadow-green-500/25 hover:bg-[#14a849] transition-colors"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            Оставить заявку на демо
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
