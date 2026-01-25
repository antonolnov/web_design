'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Building2, Users, Shield, Zap, BarChart3, Headphones } from 'lucide-react';
import { ArrowRight } from 'lucide-react';
import Mascot from '@/components/ui/Mascot';

const enterpriseFeatures = [
  { icon: Building2, label: 'Организация работы больших команд' },
  { icon: Users, label: 'Управление доступами и ролями' },
  { icon: Shield, label: 'Повышенные требования к безопасности' },
  { icon: Zap, label: 'Выделенная инфраструктура' },
  { icon: BarChart3, label: 'Расширенная аналитика' },
  { icon: Headphones, label: 'Персональный менеджер' },
];

export default function EnterpriseHuntflow() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 0.2], [50, 0]);

  return (
    <section
      ref={sectionRef}
      id="enterprise"
      className="relative py-32 overflow-hidden"
      style={{ backgroundColor: '#0D0D0D' }}
    >
      {/* Background gradient */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-0 right-0 w-[800px] h-[800px] rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, rgba(24,144,255,0.3) 0%, transparent 70%)',
          }}
          animate={{
            scale: [1, 1.1, 1],
            x: [0, 50, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <motion.div
        className="max-w-[1400px] mx-auto px-6 relative"
        style={{ opacity, y }}
      >
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Info */}
          <div>
            {/* Badge */}
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-white font-medium text-sm">WorkHere Премьер</span>
            </motion.div>

            <motion.h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Автоматизация рекрутмента в крупных компаниях
            </motion.h2>

            <motion.p
              className="text-xl text-gray-400 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Готовое решение для трансформации, систематизации и масштабирования бизнес-процесса рекрутмента
            </motion.p>

            <motion.a
              href="#demo"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-900 font-medium rounded-full hover:bg-gray-100 transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              Узнать подробнее
              <ArrowRight className="w-4 h-4" />
            </motion.a>
          </div>

          {/* Right side - Features grid */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 gap-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            {enterpriseFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <motion.div
                  key={feature.label}
                  className="flex flex-col items-center text-center p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index }}
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  <motion.div
                    className="w-14 h-14 rounded-2xl bg-[#1890ff]/20 flex items-center justify-center mb-4"
                    whileHover={{ rotate: [0, -5, 5, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <IconComponent className="w-7 h-7 text-[#1890ff]" />
                  </motion.div>
                  <span className="text-white text-sm font-medium">{feature.label}</span>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Mascot - positioned on the right side */}
        <motion.div
          className="absolute bottom-8 right-8 hidden xl:block"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
        >
          <Mascot variant="08" size={90} phrase="Enterprise! 🏢" />
        </motion.div>
      </motion.div>
    </section>
  );
}
