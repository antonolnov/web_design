'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Users, 
  Zap, 
  BarChart3, 
  Globe, 
  MessageSquare, 
  Shield,
  GitBranch,
  Bot,
  FileText
} from 'lucide-react';

const features = [
  {
    icon: Users,
    title: 'Единая база кандидатов',
    description: 'Все резюме, контакты и история взаимодействий в одном месте',
  },
  {
    icon: GitBranch,
    title: 'Гибкие воронки',
    description: 'Настраивайте этапы подбора под каждый тип вакансии',
  },
  {
    icon: Bot,
    title: 'AI-скоринг',
    description: 'Автоматическая оценка соответствия кандидата требованиям',
  },
  {
    icon: Globe,
    title: 'Интеграции',
    description: 'Подключение к job-сайтам, мессенджерам и корпоративным системам',
  },
  {
    icon: BarChart3,
    title: 'Аналитика',
    description: 'Дашборды и отчёты для принятия решений на основе данных',
  },
  {
    icon: Zap,
    title: 'Автоматизация',
    description: 'Автоматические письма, напоминания и продвижение по воронке',
  },
  {
    icon: MessageSquare,
    title: 'Коммуникации',
    description: 'Переписка с кандидатами через email, Telegram и WhatsApp',
  },
  {
    icon: FileText,
    title: 'Парсинг резюме',
    description: 'Автоматическое распознавание данных из любых форматов',
  },
  {
    icon: Shield,
    title: 'Безопасность',
    description: 'Соответствие 152-ФЗ, шифрование данных, контроль доступа',
  },
];

export default function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <p className="text-[#5b5fc7] font-semibold mb-4">Возможности</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Всё для эффективного найма
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Полный набор инструментов для автоматизации рекрутинга
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 }}
              className="p-6 rounded-2xl border border-gray-100 hover:border-[#5b5fc7]/20 hover:shadow-lg hover:shadow-[#5b5fc7]/5 transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-[#5b5fc7]/10 flex items-center justify-center mb-4 group-hover:bg-[#5b5fc7]/20 transition-colors">
                <feature.icon size={24} className="text-[#5b5fc7]" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
