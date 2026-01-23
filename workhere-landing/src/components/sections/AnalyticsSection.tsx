'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { BarChart3, TrendingUp, PieChart, Calendar, Clock, Target, ArrowUpRight, Users } from 'lucide-react';
import Container from '../ui/Container';
import ContentCard from '../ui/ContentCard';
import Mascot from '../ui/Mascot';

const metrics = [
  { label: 'Время закрытия вакансии', value: '12 дней', change: '-23%', positive: true },
  { label: 'Стоимость найма', value: '₽45,000', change: '-15%', positive: true },
  { label: 'Конверсия воронки', value: '8.2%', change: '+2.1%', positive: true },
  { label: 'Отклик на офферы', value: '94%', change: '+5%', positive: true },
];

const features = [
  { 
    icon: BarChart3, 
    title: 'Дашборды в реальном времени', 
    description: 'Мониторинг всех ключевых метрик на одном экране' 
  },
  { 
    icon: PieChart, 
    title: 'Источники кандидатов', 
    description: 'Анализ эффективности каналов привлечения' 
  },
  { 
    icon: Clock, 
    title: 'Время на этапах', 
    description: 'Выявляйте узкие места в процессе подбора' 
  },
  { 
    icon: Target, 
    title: 'Воронка по рекрутерам', 
    description: 'Сравнение эффективности команды' 
  },
  { 
    icon: Calendar, 
    title: 'Планирование найма', 
    description: 'Прогнозы на основе исторических данных' 
  },
  { 
    icon: TrendingUp, 
    title: 'Экспорт в BI', 
    description: 'Выгрузка в любом формате для внешних систем' 
  },
];

export default function AnalyticsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="analytics" className="py-16 px-4">
      <Container>
        <ContentCard variant="gradient">
          <div ref={ref}>
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              className="text-center mb-10"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 mb-4 text-sm font-medium text-[#1890ff] bg-[#1890ff]/10 rounded-full">
                <BarChart3 size={14} />
                Аналитика
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                Данные для <span className="text-[#1890ff]">решений</span>
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Полная картина эффективности найма в реальном времени
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Metrics cards */}
              <div className="lg:col-span-2">
                <div className="grid sm:grid-cols-2 gap-4 mb-6">
                  {metrics.map((metric, i) => (
                    <motion.div
                      key={metric.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: i * 0.1 }}
                      className="bg-white rounded-xl p-5 shadow-md border border-gray-100"
                    >
                      <div className="flex items-start justify-between">
                        <div>
                          <div className="text-sm text-gray-500 mb-1">{metric.label}</div>
                          <div className="text-2xl font-bold text-gray-900">{metric.value}</div>
                        </div>
                        <div className={`flex items-center gap-1 px-2 py-1 rounded-full text-sm font-medium ${
                          metric.positive ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'
                        }`}>
                          <ArrowUpRight size={14} />
                          {metric.change}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Features grid */}
                <div className="grid sm:grid-cols-2 gap-4">
                  {features.map((feature, i) => (
                    <motion.div
                      key={feature.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.4 + i * 0.05 }}
                      className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                    >
                      <div className="w-10 h-10 rounded-lg bg-[#e6f4ff] flex items-center justify-center flex-shrink-0">
                        <feature.icon size={20} className="text-[#1890ff]" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900 mb-0.5">{feature.title}</div>
                        <div className="text-sm text-gray-500">{feature.description}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Right side - Chart mockup & mascot */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3 }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-semibold text-gray-900">Воронка найма</h3>
                  <span className="text-sm text-gray-500">Последние 30 дней</span>
                </div>

                {/* Mini chart visualization */}
                <div className="space-y-3 mb-6">
                  {[
                    { label: 'Отклики', value: 1247, percent: 100 },
                    { label: 'Скрининг', value: 834, percent: 67 },
                    { label: 'Интервью', value: 312, percent: 25 },
                    { label: 'Оффер', value: 89, percent: 7 },
                    { label: 'Найм', value: 76, percent: 6 },
                  ].map((item, i) => (
                    <div key={item.label}>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-600">{item.label}</span>
                        <span className="font-medium text-gray-900">{item.value}</span>
                      </div>
                      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-[#1890ff] rounded-full"
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${item.percent}%` } : {}}
                          transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Mascot */}
                <div className="flex justify-center">
                  <Mascot size={90} variant="04" showSpeechBubble speechText="Отличные метрики! 📊" />
                </div>
              </motion.div>
            </div>
          </div>
        </ContentCard>
      </Container>
    </section>
  );
}
