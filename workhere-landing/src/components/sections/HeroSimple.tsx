'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import Container from '../ui/Container';
import InteractiveMascot from '../ui/InteractiveMascot';

export default function HeroSimple() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="relative min-h-screen flex items-center pt-20 pb-12">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Content */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1890ff]/5 border border-[#1890ff]/10 text-[#1890ff] text-sm font-medium mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-[#1890ff] animate-pulse" />
              ATS нового поколения
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-[1.1] tracking-tight mb-6"
            >
              Лучшая{' '}
              <span className="text-[#1890ff]">ATS</span>
              {' '}система России
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-600 leading-relaxed mb-8 max-w-lg"
            >
              WorkHere — современная платформа для управления наймом с искусственным интеллектом
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#demo"
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#1890ff] text-white font-semibold rounded-full hover:bg-[#0d6edb] transition-colors"
              >
                Запросить демо
                <ArrowRight size={18} />
              </a>
              <a
                href="#automation"
                className="inline-flex items-center gap-3 px-8 py-4 text-gray-700 font-medium rounded-full border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-colors"
              >
                Узнать больше
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex gap-12 mt-16 pt-8 border-t border-gray-100"
            >
              {[
                { value: '2000+', label: 'Компаний' },
                { value: '3x', label: 'Быстрее найм' },
                { value: '99.9%', label: 'Uptime' },
              ].map((stat, i) => (
                <div key={stat.label}>
                  <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right - Mascot */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center lg:justify-end"
          >
            <InteractiveMascot size={380} variant="01" />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
