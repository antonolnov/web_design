'use client';

import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import { 
  Zap, Mail, FileText, Bot, 
  BarChart3, TrendingUp, PieChart, Users,
  Globe, MessageSquare, Database, Code2,
  GitBranch, Briefcase, Target,
  CheckCircle
} from 'lucide-react';
import Container from '../ui/Container';
import Mascot from '../ui/Mascot';

interface FeatureCategory {
  id: string;
  title: string;
  subtitle: string;
  color: string;
  icon: typeof Zap;
  mascotVariant: '01' | '02' | '03' | '04' | '05' | '06' | '07' | '08';
  mascotSpeech: string;
  features: {
    icon: typeof Zap;
    title: string;
    description: string;
  }[];
}

const categories: FeatureCategory[] = [
  {
    id: 'automation',
    title: 'Автоматизация',
    subtitle: 'Избавьтесь от рутины',
    color: '#22c55e',
    icon: Zap,
    mascotVariant: '02',
    mascotSpeech: 'Автоматизируем! ⚡',
    features: [
      { icon: Bot, title: 'AI-скоринг', description: 'Автоматическая оценка кандидатов' },
      { icon: Mail, title: 'Email-автоматизация', description: 'Цепочки писем и шаблоны' },
      { icon: FileText, title: 'Парсинг резюме', description: 'Распознавание любых форматов' },
      { icon: Zap, title: 'Воркфлоу', description: 'Автоматические сценарии' },
    ],
  },
  {
    id: 'analytics',
    title: 'Аналитика',
    subtitle: 'Решения на основе данных',
    color: '#1890ff',
    icon: BarChart3,
    mascotVariant: '03',
    mascotSpeech: 'Отличные метрики! 📊',
    features: [
      { icon: BarChart3, title: 'Дашборды', description: 'Метрики в реальном времени' },
      { icon: PieChart, title: 'Отчёты', description: 'Кастомные отчёты и экспорт' },
      { icon: TrendingUp, title: 'Воронка', description: 'Анализ конверсии по этапам' },
      { icon: Users, title: 'Команда', description: 'Эффективность рекрутеров' },
    ],
  },
  {
    id: 'integrations',
    title: 'Интеграции',
    subtitle: 'Все сервисы в одном месте',
    color: '#8b5cf6',
    icon: Globe,
    mascotVariant: '07',
    mascotSpeech: 'Всё подключено! 🔗',
    features: [
      { icon: Globe, title: 'Job-сайты', description: 'HH, Avito, SuperJob и др.' },
      { icon: MessageSquare, title: 'Мессенджеры', description: 'Telegram, WhatsApp, Email' },
      { icon: Database, title: 'ERP/CRM', description: '1C, SAP, Битрикс24' },
      { icon: Code2, title: 'API', description: 'Открытый REST API' },
    ],
  },
  {
    id: 'pipeline',
    title: 'Воронки',
    subtitle: 'Любое количество воронок',
    color: '#f97316',
    icon: GitBranch,
    mascotVariant: '04',
    mascotSpeech: 'Воронка готова! 🎯',
    features: [
      { icon: GitBranch, title: 'Кастомные воронки', description: 'Создавайте под каждый тип найма' },
      { icon: Users, title: 'Массовый найм', description: 'Упрощённые этапы для скорости' },
      { icon: Briefcase, title: 'Точечный найм', description: 'Многоуровневый отбор' },
      { icon: Target, title: 'Статистика', description: 'Аналитика по каждой воронке' },
    ],
  },
];

function FeatureCard({ feature, index, color, isInView }: { 
  feature: FeatureCategory['features'][0]; 
  index: number; 
  color: string;
  isInView: boolean;
}) {
  // Different entry animations for each card
  const getEntryAnimation = (i: number) => {
    const animations = [
      { x: -100, y: -50, rotate: -15 },
      { x: 100, y: -30, rotate: 10 },
      { x: -80, y: 50, rotate: 12 },
      { x: 100, y: 30, rotate: -8 },
    ];
    return animations[i % animations.length];
  };

  const entry = getEntryAnimation(index);

  return (
    <motion.div
      initial={{ opacity: 0, ...entry }}
      animate={isInView ? { opacity: 1, x: 0, y: 0, rotate: 0 } : {}}
      transition={{ 
        delay: 0.2 + index * 0.15,
        duration: 0.6,
        type: 'spring',
        stiffness: 100,
        damping: 15,
      }}
      whileHover={{ 
        scale: 1.05, 
        y: -8,
        boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
      }}
      className="group relative bg-white rounded-2xl p-6 shadow-lg border border-gray-100 overflow-hidden"
    >
      {/* Hover gradient */}
      <motion.div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ 
          background: `linear-gradient(135deg, ${color}08 0%, ${color}15 100%)` 
        }}
      />

      {/* Content */}
      <div className="relative z-10">
        <motion.div 
          className="w-14 h-14 rounded-xl flex items-center justify-center mb-4"
          style={{ backgroundColor: `${color}15` }}
          whileHover={{ scale: 1.1, rotate: 5 }}
        >
          <feature.icon size={28} style={{ color }} />
        </motion.div>

        <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-gray-800">
          {feature.title}
        </h4>
        <p className="text-gray-600">
          {feature.description}
        </p>
      </div>

      {/* Corner accent */}
      <motion.div
        className="absolute -top-10 -right-10 w-20 h-20 rounded-full opacity-20"
        style={{ backgroundColor: color }}
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 3, repeat: Infinity }}
      />
    </motion.div>
  );
}

function CategorySection({ category, index }: { category: FeatureCategory; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} id={category.id} className="py-16">
      <Container>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 mb-12"
        >
          <div className="flex items-center gap-4">
            <motion.div 
              className="w-16 h-16 rounded-2xl flex items-center justify-center"
              style={{ backgroundColor: `${category.color}15` }}
              whileHover={{ scale: 1.1, rotate: -5 }}
            >
              <category.icon size={32} style={{ color: category.color }} />
            </motion.div>
            <div>
              <h3 className="text-3xl font-bold text-gray-900">{category.title}</h3>
              <p className="text-gray-600">{category.subtitle}</p>
            </div>
          </div>

          {/* Mascot */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.3, type: 'spring' }}
            className="hidden lg:block"
          >
            <Mascot 
              size={100} 
              variant={category.mascotVariant} 
              showSpeechBubble 
              speechText={category.mascotSpeech} 
            />
          </motion.div>
        </motion.div>

        {/* Feature cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {category.features.map((feature, i) => (
            <FeatureCard 
              key={feature.title} 
              feature={feature} 
              index={i} 
              color={category.color}
              isInView={isInView}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default function FeaturesPremium() {
  return (
    <div className="py-10">
      {categories.map((category, i) => (
        <CategorySection key={category.id} category={category} index={i} />
      ))}
    </div>
  );
}
