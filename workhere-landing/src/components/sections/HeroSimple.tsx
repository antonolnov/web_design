'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, Sparkles, CheckCircle } from 'lucide-react';
import Container from '../ui/Container';

export default function HeroSimple() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="relative min-h-screen flex items-center py-20">
      <Container>
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1890ff]/10 border border-[#1890ff]/20 text-[#1890ff] text-sm font-medium mb-8"
          >
            <Sparkles size={16} />
            <span>ATS нового поколения с AI</span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight"
          >
            Нанимайте
            <span className="text-[#1890ff]"> быстрее</span>
            <br />
            и эффективнее
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto"
          >
            WorkHere — современная система для управления наймом с искусственным интеллектом
          </motion.p>

          {/* Features list */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4 mb-10"
          >
            {['AI-скоринг кандидатов', 'Автоматизация процессов', 'Аналитика в реальном времени'].map((feature, i) => (
              <div key={feature} className="flex items-center gap-2 text-gray-700">
                <CheckCircle size={18} className="text-[#22c55e]" />
                <span>{feature}</span>
              </div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="#demo"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#22c55e] text-white font-bold text-lg rounded-2xl shadow-lg shadow-[#22c55e]/30 hover:shadow-xl transition-all hover:-translate-y-0.5"
            >
              🚀 Запросить демо
              <ArrowRight size={20} />
            </a>
            <a
              href="#features"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-gray-700 font-semibold text-lg rounded-2xl border border-gray-200 hover:border-[#1890ff] hover:text-[#1890ff] transition-all"
            >
              Узнать больше
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-10 border-t border-gray-200"
          >
            {[
              { value: 'AI', label: 'Умный найм' },
              { value: '2000+', label: 'Компаний' },
              { value: '3x', label: 'Быстрее найм' },
              { value: '∞', label: 'Воронок подбора' },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.6 + i * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-[#1890ff]">{stat.value}</div>
                <div className="text-gray-500 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
