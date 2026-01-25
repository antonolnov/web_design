'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Zap, Mail, FileText, Bot, 
  BarChart3, TrendingUp, PieChart, Users,
  Globe, MessageSquare, Database, Code2,
  GitBranch, Briefcase, Target, CheckCircle
} from 'lucide-react';
import Container from '../ui/Container';
import SectionTitleScreen from '../ui/SectionTitleScreen';
import Mascot from '../ui/Mascot';

interface FeatureBlock {
  id: string;
  title: string;
  subtitle: string;
  color: string;
  titleScreenColor: 'blue' | 'purple' | 'teal' | 'orange' | 'green';
  mascotVariant: '01' | '02' | '03' | '04' | '05' | '06' | '07' | '08';
  mascotSpeech: string;
  features: {
    icon: typeof Zap;
    title: string;
    description: string;
  }[];
}

const blocks: FeatureBlock[] = [
  {
    id: 'automation',
    title: 'Автоматизация',
    subtitle: 'Избавьтесь от рутины и сфокусируйтесь на главном',
    color: '#22c55e',
    titleScreenColor: 'green',
    mascotVariant: '02',
    mascotSpeech: 'Автоматизируем! ⚡',
    features: [
      { icon: Bot, title: 'AI-скоринг кандидатов', description: 'Автоматическая оценка соответствия вакансии' },
      { icon: Mail, title: 'Email-автоматизация', description: 'Цепочки писем с персонализацией' },
      { icon: FileText, title: 'Парсинг резюме', description: 'Распознавание любых форматов документов' },
      { icon: Zap, title: 'Триггерные воркфлоу', description: 'Автоматические действия по событиям' },
    ],
  },
  {
    id: 'analytics',
    title: 'Аналитика',
    subtitle: 'Принимайте решения на основе данных',
    color: '#1890ff',
    titleScreenColor: 'blue',
    mascotVariant: '03',
    mascotSpeech: 'Отличные метрики! 📊',
    features: [
      { icon: BarChart3, title: 'Дашборды реального времени', description: 'Все ключевые метрики на одном экране' },
      { icon: PieChart, title: 'Кастомные отчёты', description: 'Конструктор отчётов с экспортом' },
      { icon: TrendingUp, title: 'Анализ воронки', description: 'Конверсия и узкие места процесса' },
      { icon: Users, title: 'Метрики команды', description: 'Эффективность каждого рекрутера' },
    ],
  },
  {
    id: 'integrations',
    title: 'Интеграции',
    subtitle: 'Подключайте любые сервисы и источники',
    color: '#8b5cf6',
    titleScreenColor: 'purple',
    mascotVariant: '07',
    mascotSpeech: 'Всё подключено! 🔗',
    features: [
      { icon: Globe, title: 'Job-сайты', description: 'HH.ru, Avito, SuperJob, Работа.ру' },
      { icon: MessageSquare, title: 'Мессенджеры', description: 'Telegram, WhatsApp, Email, SMS' },
      { icon: Database, title: 'Корпоративные системы', description: '1C, SAP, Битрикс24, MS 365' },
      { icon: Code2, title: 'Открытый API', description: 'REST API, Webhooks, SDK' },
    ],
  },
  {
    id: 'pipeline',
    title: 'Воронки подбора',
    subtitle: 'Любое количество воронок под каждый тип найма',
    color: '#f97316',
    titleScreenColor: 'orange',
    mascotVariant: '04',
    mascotSpeech: 'Воронка готова! 🎯',
    features: [
      { icon: GitBranch, title: 'Бесконечные воронки', description: 'Создавайте под каждый тип найма' },
      { icon: Users, title: 'Массовый найм', description: 'Упрощённые этапы для скорости' },
      { icon: Briefcase, title: 'Точечный найм', description: 'Многоуровневый отбор топов' },
      { icon: Target, title: 'Аналитика воронок', description: 'Статистика по каждой воронке' },
    ],
  },
];

function FeatureSection({ block, index }: { block: FeatureBlock; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  // Alternate layout - left/right
  const isReversed = index % 2 === 1;

  return (
    <>
      {/* Section title screen */}
      <SectionTitleScreen
        title={block.title}
        subtitle={block.subtitle}
        color={block.titleScreenColor}
      />

      {/* Content */}
      <section ref={ref} id={block.id} className="py-20">
        <Container>
          <div className={`flex flex-col ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-20 items-center`}>
            
            {/* Left/Right - Features list */}
            <div className="flex-1 space-y-6">
              {block.features.map((feature, i) => (
                <motion.div
                  key={feature.title}
                  initial={{ 
                    opacity: 0, 
                    x: isReversed ? 50 : -50,
                    y: 20,
                  }}
                  animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
                  transition={{ 
                    delay: 0.1 + i * 0.15,
                    duration: 0.6,
                    type: 'spring',
                    stiffness: 100,
                  }}
                  whileHover={{ x: isReversed ? -10 : 10 }}
                  className="group flex items-start gap-5 cursor-default"
                >
                  {/* Icon with animated background */}
                  <motion.div 
                    className="flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center relative overflow-hidden"
                    style={{ backgroundColor: `${block.color}15` }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <feature.icon size={26} style={{ color: block.color }} className="relative z-10" />
                    
                    {/* Pulse effect on hover */}
                    <motion.div
                      className="absolute inset-0 rounded-2xl"
                      style={{ backgroundColor: block.color }}
                      initial={{ scale: 0, opacity: 0 }}
                      whileHover={{ scale: 1.5, opacity: 0 }}
                      transition={{ duration: 0.5 }}
                    />
                  </motion.div>

                  {/* Text */}
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-gray-700 transition-colors">
                      {feature.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 }}
                className="pt-4"
              >
                <a
                  href="#demo"
                  className="inline-flex items-center gap-2 font-medium transition-colors"
                  style={{ color: block.color }}
                >
                  <span>Узнать подробнее</span>
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </a>
              </motion.div>
            </div>

            {/* Right/Left - Visual with mascot */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="flex-1 flex justify-center"
            >
              <div className="relative">
                {/* Decorative blob */}
                <motion.div
                  className="absolute inset-0 rounded-[60px] -z-10"
                  style={{ 
                    background: `linear-gradient(135deg, ${block.color}10 0%, ${block.color}05 100%)`,
                    transform: 'scale(1.5)',
                  }}
                  animate={{ 
                    borderRadius: ['60px', '80px', '60px'],
                    rotate: [0, 5, 0],
                  }}
                  transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                />

                {/* Floating particles */}
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-3 h-3 rounded-full"
                    style={{ 
                      backgroundColor: block.color,
                      opacity: 0.3,
                      left: `${20 + i * 15}%`,
                      top: `${10 + (i % 3) * 30}%`,
                    }}
                    animate={{ 
                      y: [-10, 10, -10],
                      x: [-5, 5, -5],
                      scale: [1, 1.2, 1],
                    }}
                    transition={{ 
                      duration: 3 + i * 0.5,
                      repeat: Infinity,
                      delay: i * 0.3,
                    }}
                  />
                ))}

                {/* Mascot */}
                <Mascot 
                  size={280} 
                  variant={block.mascotVariant} 
                  showSpeechBubble 
                  speechText={block.mascotSpeech}
                />
              </div>
            </motion.div>
          </div>
        </Container>
      </section>
    </>
  );
}

export default function FeaturesPremium() {
  return (
    <>
      {blocks.map((block, i) => (
        <FeatureSection key={block.id} block={block} index={i} />
      ))}
    </>
  );
}
