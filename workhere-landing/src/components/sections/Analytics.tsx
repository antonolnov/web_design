'use client';

import { motion } from 'framer-motion';
import {
  BarChart3,
  TrendingUp,
  PieChart,
  Users,
  Timer,
  Target,
  Download,
  Calendar,
} from 'lucide-react';
import Container from '../ui/Container';
import SectionTitle from '../ui/SectionTitle';
import Card from '../ui/Card';

const metrics = [
  { label: 'Откликов', value: '2,847', change: '+23%', up: true },
  { label: 'Средний срок', value: '18 дн', change: '-5 дней', up: true },
  { label: 'Конверсия', value: '4.2%', change: '+0.8%', up: true },
  { label: 'Cost per hire', value: '₽45K', change: '-12%', up: true },
];

const chartData = [
  { month: 'Янв', value: 65 },
  { month: 'Фев', value: 78 },
  { month: 'Мар', value: 52 },
  { month: 'Апр', value: 91 },
  { month: 'Май', value: 84 },
  { month: 'Июн', value: 110 },
];

const reports = [
  {
    icon: BarChart3,
    title: 'Воронка по вакансиям',
    description: 'Анализ конверсии на каждом этапе для всех открытых позиций.',
  },
  {
    icon: Users,
    title: 'Эффективность рекрутеров',
    description: 'Сравнение показателей команды: скорость, качество, объём.',
  },
  {
    icon: PieChart,
    title: 'Источники кандидатов',
    description: 'ROI каналов привлечения: job-борды, рефералы, карьерный сайт.',
  },
  {
    icon: Timer,
    title: 'Time-to-hire',
    description: 'Среднее время закрытия по типам вакансий и подразделениям.',
  },
  {
    icon: Target,
    title: 'Quality of hire',
    description: 'Оценка качества найма: испытательный срок, retention, performance.',
  },
  {
    icon: TrendingUp,
    title: 'Прогнозы и тренды',
    description: 'AI-предсказания загрузки и рекомендации по оптимизации.',
  },
];

export default function Analytics() {
  return (
    <section id="analytics" className="py-24 bg-gray-50">
      <Container>
        <SectionTitle
          badge="Аналитика"
          title="Данные для принятия решений"
          subtitle="Мощные дашборды и отчёты. Отслеживайте все метрики рекрутинга в реальном времени."
        />

        {/* Dashboard Preview */}
        <motion.div
          className="bg-white rounded-[24px] p-6 lg:p-8 shadow-[0_8px_30px_rgba(0,0,0,0.08)] mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div>
              <h3 className="text-xl font-bold text-gray-900">Обзор рекрутинга</h3>
              <p className="text-gray-500">Данные за последние 30 дней</p>
            </div>
            <div className="flex items-center gap-3">
              <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-[12px] text-sm font-medium text-gray-700 hover:bg-gray-200 transition-colors">
                <Calendar size={16} />
                Июнь 2024
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-[#1890ff] rounded-[12px] text-sm font-medium text-white hover:bg-[#0d6edb] transition-colors">
                <Download size={16} />
                Экспорт
              </button>
            </div>
          </div>

          {/* Metrics Row */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {metrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                className="bg-gray-50 rounded-[16px] p-5"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <div className="text-sm text-gray-500 mb-2">{metric.label}</div>
                <div className="flex items-end justify-between">
                  <div className="text-2xl font-bold text-gray-900">{metric.value}</div>
                  <div
                    className={`text-sm font-medium ${
                      metric.up ? 'text-green-500' : 'text-red-500'
                    }`}
                  >
                    {metric.change}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Chart */}
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-semibold text-gray-900">Динамика наймов</h4>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#1890ff]" />
                    <span className="text-sm text-gray-500">2024</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-gray-300" />
                    <span className="text-sm text-gray-500">2023</span>
                  </div>
                </div>
              </div>
              <div className="h-64 flex items-end gap-4">
                {chartData.map((item, index) => (
                  <motion.div
                    key={item.month}
                    className="flex-1 flex flex-col items-center gap-2"
                    initial={{ opacity: 0, scaleY: 0 }}
                    whileInView={{ opacity: 1, scaleY: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    style={{ originY: 1 }}
                  >
                    <div
                      className="w-full bg-gradient-to-t from-[#1890ff] to-[#40a9ff] rounded-t-[8px] relative group cursor-pointer"
                      style={{ height: `${item.value * 2}px` }}
                    >
                      <div className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                        {item.value} наймов
                      </div>
                    </div>
                    <span className="text-sm text-gray-500">{item.month}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Pie Chart Placeholder */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Источники</h4>
              <div className="relative w-48 h-48 mx-auto mb-4">
                <svg viewBox="0 0 100 100" className="transform -rotate-90">
                  <motion.circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="transparent"
                    stroke="#1890ff"
                    strokeWidth="20"
                    strokeDasharray="125.6 251.2"
                    initial={{ strokeDashoffset: 251.2 }}
                    whileInView={{ strokeDashoffset: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                  />
                  <motion.circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="transparent"
                    stroke="#40a9ff"
                    strokeWidth="20"
                    strokeDasharray="75.4 251.2"
                    strokeDashoffset="-125.6"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                  />
                  <motion.circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="transparent"
                    stroke="#91d5ff"
                    strokeWidth="20"
                    strokeDasharray="50.24 251.2"
                    strokeDashoffset="-201"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.7, duration: 0.5 }}
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center flex-col">
                  <div className="text-2xl font-bold text-gray-900">847</div>
                  <div className="text-xs text-gray-500">Всего</div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#1890ff]" />
                    <span className="text-gray-600">HeadHunter</span>
                  </div>
                  <span className="font-medium text-gray-900">50%</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#40a9ff]" />
                    <span className="text-gray-600">Рефералы</span>
                  </div>
                  <span className="font-medium text-gray-900">30%</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#91d5ff]" />
                    <span className="text-gray-600">Карьерный сайт</span>
                  </div>
                  <span className="font-medium text-gray-900">20%</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Reports Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          {reports.map((report, index) => (
            <motion.div
              key={report.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card className="h-full group cursor-pointer">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#e6f4ff] rounded-[12px] flex items-center justify-center flex-shrink-0 group-hover:bg-[#1890ff] transition-colors">
                    <report.icon
                      className="text-[#1890ff] group-hover:text-white transition-colors"
                      size={24}
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2 group-hover:text-[#1890ff] transition-colors">
                      {report.title}
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{report.description}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
