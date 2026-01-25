'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const cases = [
  {
    id: 1,
    company: 'E-Commerce Corp',
    tags: ['E-commerce', 'Массовый найм'],
    title: 'Как увеличили скорость найма на 30%',
    color: '#4F46E5',
    bgColor: '#EEF2FF',
  },
  {
    id: 2,
    company: 'Tech Solutions',
    tags: ['IT', 'Стартап'],
    title: 'Автоматизация подбора в быстрорастущей компании',
    color: '#059669',
    bgColor: '#ECFDF5',
  },
  {
    id: 3,
    company: 'Finance Bank',
    tags: ['Финансы', 'Enterprise'],
    title: 'Внедрение ATS в крупном банке с 1000+ сотрудников',
    color: '#DC2626',
    bgColor: '#FEF2F2',
  },
];

export default function CasesHuntflow() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-20%']);

  return (
    <section id="cases" className="py-24 bg-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <motion.h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Кейсы клиентов
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Клиенты рассказали о результатах, которых они достигли после внедрения WorkHere
            </motion.p>
          </div>
          <motion.a
            href="#all-cases"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white font-medium rounded-full hover:bg-gray-800 transition-colors"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Все кейсы
            <ArrowRight className="w-4 h-4" />
          </motion.a>
        </div>

        {/* Cases carousel */}
        <div ref={containerRef} className="relative">
          <motion.div
            className="flex gap-6"
            style={{ x }}
          >
            {cases.map((caseItem, index) => (
              <motion.article
                key={caseItem.id}
                className="flex-shrink-0 w-[350px] md:w-[400px] rounded-3xl overflow-hidden cursor-pointer group"
                style={{ backgroundColor: caseItem.bgColor }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                {/* Image placeholder */}
                <div 
                  className="h-48 flex items-center justify-center"
                  style={{ backgroundColor: `${caseItem.color}20` }}
                >
                  <div 
                    className="w-24 h-24 rounded-2xl flex items-center justify-center"
                    style={{ backgroundColor: caseItem.color }}
                  >
                    <span className="text-white font-bold text-2xl">
                      {caseItem.company.split(' ').map(w => w[0]).join('')}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {caseItem.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full text-xs font-medium"
                        style={{ 
                          backgroundColor: `${caseItem.color}20`,
                          color: caseItem.color,
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 group-hover:text-[#1890ff] transition-colors">
                    {caseItem.title}
                  </h3>

                  {/* CTA */}
                  <motion.span
                    className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded-full"
                    whileHover={{ scale: 1.02 }}
                  >
                    Читать кейс
                    <ArrowRight className="w-3 h-3" />
                  </motion.span>
                </div>
              </motion.article>
            ))}

            {/* Duplicate for infinite scroll effect */}
            {cases.map((caseItem) => (
              <motion.article
                key={`dup-${caseItem.id}`}
                className="flex-shrink-0 w-[350px] md:w-[400px] rounded-3xl overflow-hidden cursor-pointer group"
                style={{ backgroundColor: caseItem.bgColor }}
                whileHover={{ y: -5 }}
              >
                <div 
                  className="h-48 flex items-center justify-center"
                  style={{ backgroundColor: `${caseItem.color}20` }}
                >
                  <div 
                    className="w-24 h-24 rounded-2xl flex items-center justify-center"
                    style={{ backgroundColor: caseItem.color }}
                  >
                    <span className="text-white font-bold text-2xl">
                      {caseItem.company.split(' ').map(w => w[0]).join('')}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {caseItem.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full text-xs font-medium"
                        style={{ 
                          backgroundColor: `${caseItem.color}20`,
                          color: caseItem.color,
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 group-hover:text-[#1890ff] transition-colors">
                    {caseItem.title}
                  </h3>
                  <span className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded-full">
                    Читать кейс
                    <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
