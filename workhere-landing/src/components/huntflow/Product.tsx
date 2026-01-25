'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Check } from 'lucide-react';

const tabs = [
  {
    id: 'candidates',
    title: 'База кандидатов',
    features: [
      'Единая база всех кандидатов',
      'История взаимодействий',
      'Теги и сегментация',
      'Быстрый поиск и фильтры',
    ],
  },
  {
    id: 'pipeline',
    title: 'Воронки подбора',
    features: [
      'Кастомные этапы воронки',
      'Drag-and-drop перемещение',
      'Автоматические переходы',
      'Аналитика конверсии',
    ],
  },
  {
    id: 'automation',
    title: 'Автоматизация',
    features: [
      'Автоматические письма',
      'Триггерные действия',
      'Напоминания команде',
      'Парсинг резюме',
    ],
  },
  {
    id: 'analytics',
    title: 'Аналитика',
    features: [
      'Дашборды в реальном времени',
      'Отчёты по вакансиям',
      'Метрики рекрутеров',
      'Экспорт данных',
    ],
  },
];

export default function Product() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section ref={ref} className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <p className="text-[#5b5fc7] font-semibold mb-4">Продукт</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Как это работает
          </h2>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {tabs.map((tab, i) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(i)}
              className={`px-6 py-3 rounded-full font-medium transition-all ${
                activeTab === i
                  ? 'bg-[#5b5fc7] text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              {tab.title}
            </button>
          ))}
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left - Screenshot */}
          <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-200 bg-white">
            <img
              src="/web_design/workhere-landing/interface-screenshot.png"
              alt="WorkHere Interface"
              className="w-full"
            />
          </div>

          {/* Right - Features */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              {tabs[activeTab].title}
            </h3>
            <div className="space-y-4">
              {tabs[activeTab].features.map((feature, i) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check size={14} className="text-green-600" />
                  </div>
                  <span className="text-gray-700 text-lg">{feature}</span>
                </motion.div>
              ))}
            </div>

            <a
              href="#demo"
              className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-[#5b5fc7] text-white font-semibold rounded-xl hover:bg-[#4a4eb3] transition-colors"
            >
              Попробовать бесплатно
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
