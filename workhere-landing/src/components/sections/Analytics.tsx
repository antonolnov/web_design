'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  BarChart3,
  TrendingUp,
  Clock,
  Users,
  Target,
  FileDown,
} from 'lucide-react';
import Container from '../ui/Container';
import TextReveal from '../ui/TextReveal';

const metrics = [
  { label: 'Time-to-first-contact', value: '2.4ч', change: '-35%', positive: true },
  { label: 'Time-to-interview', value: '5.2 дн', change: '-18%', positive: true },
  { label: 'Time-to-offer', value: '14 дн', change: '-22%', positive: true },
  { label: 'Time-to-hire', value: '21 дн', change: '-28%', positive: true },
];

const reports = [
  {
    icon: BarChart3,
    title: 'Воронка подбора',
    description: 'Конверсия этапов, время на стадиях, узкие места по вакансиям и рекрутерам',
  },
  {
    icon: TrendingUp,
    title: 'Эффективность источников',
    description: 'Откуда приходят кандидаты, какие источники дают наймы, ROI каналов',
  },
  {
    icon: Users,
    title: 'Отчёты по рекрутерам',
    description: 'Активность, нагрузка, результативность каждого члена команды',
  },
  {
    icon: Target,
    title: 'Причины отказов',
    description: 'Классификация и статистика: почему кандидаты отваливаются',
  },
];

const chartData = [
  { month: 'Янв', hires: 8, interviews: 45 },
  { month: 'Фев', hires: 12, interviews: 62 },
  { month: 'Мар', hires: 15, interviews: 78 },
  { month: 'Апр', hires: 11, interviews: 55 },
  { month: 'Май', hires: 18, interviews: 92 },
  { month: 'Июн', hires: 22, interviews: 110 },
];

export default function Analytics() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="analytics" className="py-24 bg-gray-50">
      <Container>
        <div ref={ref} className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-[#1890ff] bg-[#e6f4ff] rounded-full"
          >
            Аналитика и отчёты
          </motion.span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            <TextReveal>Принимайте решения на основе данных</TextReveal>
          </h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Отслеживайте все метрики рекрутинга в реальном времени. 
            Экспортируйте отчёты в Excel или подключите к BI-системе.
          </motion.p>
        </div>

        {/* Dashboard Preview */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="bg-white rounded-[32px] p-8 shadow-[0_20px_60px_rgba(0,0,0,0.08)] border border-gray-100 mb-12"
        >
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div>
              <h3 className="text-xl font-bold text-gray-900">Обзор рекрутинга</h3>
              <p className="text-gray-500">Данные за последние 6 месяцев</p>
            </div>
            <button className="inline-flex items-center gap-2 px-4 py-2 bg-[#1890ff] text-white rounded-[12px] font-medium hover:bg-[#0d6edb] transition-colors">
              <FileDown size={18} />
              Экспорт отчёта
            </button>
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {metrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="bg-gray-50 rounded-[16px] p-5"
              >
                <div className="flex items-center gap-2 mb-2">
                  <Clock size={16} className="text-gray-400" />
                  <span className="text-sm text-gray-500">{metric.label}</span>
                </div>
                <div className="flex items-end justify-between">
                  <span className="text-2xl font-bold text-gray-900">{metric.value}</span>
                  <span className={`text-sm font-medium ${metric.positive ? 'text-green-500' : 'text-red-500'}`}>
                    {metric.change}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Chart */}
          <div className="bg-gray-50 rounded-[16px] p-6">
            <div className="flex items-center justify-between mb-6">
              <h4 className="font-semibold text-gray-900">Динамика наймов</h4>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#1890ff]" />
                  <span className="text-sm text-gray-500">Наймы</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#91d5ff]" />
                  <span className="text-sm text-gray-500">Интервью</span>
                </div>
              </div>
            </div>
            
            <div className="h-48 flex items-end gap-4">
              {chartData.map((item, index) => (
                <motion.div
                  key={item.month}
                  className="flex-1 flex flex-col items-center gap-2"
                  initial={{ scaleY: 0 }}
                  animate={isInView ? { scaleY: 1 } : {}}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                  style={{ originY: 1 }}
                >
                  <div className="w-full flex gap-1 items-end justify-center h-40">
                    <motion.div
                      className="w-6 bg-[#91d5ff] rounded-t-[4px]"
                      style={{ height: `${item.interviews}%` }}
                      whileHover={{ scale: 1.1 }}
                    />
                    <motion.div
                      className="w-6 bg-[#1890ff] rounded-t-[4px]"
                      style={{ height: `${item.hires * 4}%` }}
                      whileHover={{ scale: 1.1 }}
                    />
                  </div>
                  <span className="text-sm text-gray-500">{item.month}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Reports Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reports.map((report, index) => (
            <motion.div
              key={report.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-[20px] p-6 border border-gray-100 hover:border-[#1890ff]/20 hover:shadow-lg transition-all group cursor-pointer"
            >
              <div className="w-12 h-12 bg-[#e6f4ff] rounded-[12px] flex items-center justify-center mb-4 group-hover:bg-[#1890ff] transition-colors">
                <report.icon className="text-[#1890ff] group-hover:text-white transition-colors" size={22} />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">{report.title}</h4>
              <p className="text-gray-600 text-sm">{report.description}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
