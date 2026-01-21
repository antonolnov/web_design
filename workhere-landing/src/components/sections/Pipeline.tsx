'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Check, ArrowRight, Users, Clock, Target, Layers } from 'lucide-react';
import Container from '../ui/Container';
import TextReveal from '../ui/TextReveal';

const stages = [
  { name: 'Новый', count: 245, color: '#1890ff' },
  { name: 'Скрининг', count: 156, color: '#40a9ff' },
  { name: 'HR-интервью', count: 89, color: '#69c0ff' },
  { name: 'Техническое', count: 45, color: '#91d5ff' },
  { name: 'Финал', count: 23, color: '#bae7ff' },
  { name: 'Оффер', count: 12, color: '#e6f4ff' },
];

const pipelineFeatures = [
  {
    icon: Layers,
    title: 'Настраиваемые этапы',
    description: 'Создавайте уникальные воронки для разных типов вакансий, отделов или заказчиков',
  },
  {
    icon: Target,
    title: 'Причины отказов',
    description: 'Классифицируйте отказы для аналитики: почему кандидаты отваливаются на каждом этапе',
  },
  {
    icon: Users,
    title: 'Талент-пулы',
    description: 'Сохраняйте перспективных кандидатов в пулы "на будущее" с тегами и критериями',
  },
  {
    icon: Clock,
    title: 'Time-in-stage',
    description: 'Отслеживайте время на каждом этапе, выявляйте узкие места в процессе',
  },
];

export default function Pipeline() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [hoveredStage, setHoveredStage] = useState<number | null>(null);

  return (
    <section id="funnel" className="py-24 bg-white overflow-hidden">
      <Container>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Pipeline Visualization */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-[32px] p-8 border border-gray-100 shadow-[0_20px_60px_rgba(0,0,0,0.06)]">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Frontend Developer</h3>
                  <p className="text-gray-500 text-sm">Открыта 12 дней • 245 кандидатов</p>
                </div>
                <span className="px-3 py-1 bg-[#e6f4ff] text-[#1890ff] text-sm font-medium rounded-full">
                  В работе
                </span>
              </div>

              {/* Funnel Visualization */}
              <div className="relative">
                {stages.map((stage, index) => {
                  const width = 100 - index * 12;
                  const isHovered = hoveredStage === index;
                  
                  return (
                    <motion.div
                      key={stage.name}
                      initial={{ opacity: 0, scaleX: 0 }}
                      animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
                      transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                      className="mb-3 origin-left"
                      onMouseEnter={() => setHoveredStage(index)}
                      onMouseLeave={() => setHoveredStage(null)}
                    >
                      <div
                        className="h-12 rounded-[8px] flex items-center justify-between px-4 cursor-pointer transition-all duration-300"
                        style={{
                          width: `${width}%`,
                          backgroundColor: isHovered ? stage.color : `${stage.color}40`,
                          transform: isHovered ? 'scale(1.02)' : 'scale(1)',
                        }}
                      >
                        <span
                          className="font-medium text-sm transition-colors"
                          style={{ color: isHovered ? 'white' : '#374151' }}
                        >
                          {stage.name}
                        </span>
                        <span
                          className="font-bold transition-colors"
                          style={{ color: isHovered ? 'white' : stage.color }}
                        >
                          {stage.count}
                        </span>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Stats */}
              <div className="flex items-center justify-between mt-6 pt-6 border-t border-gray-100">
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#1890ff]">4.9%</div>
                  <div className="text-xs text-gray-500">Конверсия</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">18 дней</div>
                  <div className="text-xs text-gray-500">Среднее время</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">6 этапов</div>
                  <div className="text-xs text-gray-500">В воронке</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-[#1890ff] bg-[#e6f4ff] rounded-full">
              Воронка подбора
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              <TextReveal>Полный контроль над процессом найма</TextReveal>
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Настраивайте этапы воронки под ваши процессы. Отслеживайте каждого кандидата 
              от первого контакта до выхода на работу с полной историей изменений.
            </p>

            <div className="space-y-6">
              {pipelineFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="w-12 h-12 bg-[#e6f4ff] rounded-[12px] flex items-center justify-center flex-shrink-0">
                    <feature.icon className="text-[#1890ff]" size={22} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">{feature.title}</h4>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
