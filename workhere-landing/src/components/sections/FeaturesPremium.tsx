'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Zap, Mail, FileText, Bot, 
  BarChart3, TrendingUp, PieChart, Users,
  Globe, MessageSquare, Database, Code2,
  GitBranch, Briefcase, Target, ArrowRight
} from 'lucide-react';
import Container from '../ui/Container';
import SectionTitleScreen from '../ui/SectionTitleScreen';

interface FeatureBlock {
  id: string;
  label: string;
  title: string;
  color: string;
  titleScreenColor: 'blue' | 'purple' | 'teal' | 'orange' | 'green';
  features: {
    icon: typeof Zap;
    title: string;
    description: string;
  }[];
}

const blocks: FeatureBlock[] = [
  {
    id: 'automation',
    label: 'Автоматизация',
    title: 'Избавьтесь от рутины',
    color: '#22c55e',
    titleScreenColor: 'green',
    features: [
      { icon: Bot, title: 'AI-скоринг', description: 'Автоматическая оценка кандидатов по соответствию вакансии' },
      { icon: Mail, title: 'Email-цепочки', description: 'Персонализированные письма с автоматической отправкой' },
      { icon: FileText, title: 'Парсинг резюме', description: 'Распознавание данных из любых форматов документов' },
      { icon: Zap, title: 'Триггеры', description: 'Автоматические действия по событиям в системе' },
    ],
  },
  {
    id: 'analytics',
    label: 'Аналитика',
    title: 'Решения на основе данных',
    color: '#1890ff',
    titleScreenColor: 'blue',
    features: [
      { icon: BarChart3, title: 'Дашборды', description: 'Ключевые метрики найма в реальном времени' },
      { icon: PieChart, title: 'Отчёты', description: 'Конструктор отчётов с экспортом в любые форматы' },
      { icon: TrendingUp, title: 'Воронка', description: 'Анализ конверсии и узких мест процесса' },
      { icon: Users, title: 'Команда', description: 'Метрики эффективности каждого рекрутера' },
    ],
  },
  {
    id: 'integrations',
    label: 'Интеграции',
    title: 'Все сервисы в одном месте',
    color: '#8b5cf6',
    titleScreenColor: 'purple',
    features: [
      { icon: Globe, title: 'Job-сайты', description: 'HH.ru, Avito, SuperJob, Работа.ру' },
      { icon: MessageSquare, title: 'Мессенджеры', description: 'Telegram, WhatsApp, Email, SMS' },
      { icon: Database, title: 'ERP/CRM', description: '1C, SAP, Битрикс24, Microsoft 365' },
      { icon: Code2, title: 'API', description: 'Открытый REST API и Webhooks' },
    ],
  },
  {
    id: 'pipeline',
    label: 'Воронки',
    title: 'Гибкие воронки подбора',
    color: '#f97316',
    titleScreenColor: 'orange',
    features: [
      { icon: GitBranch, title: 'Кастомизация', description: 'Неограниченное количество воронок под каждый тип найма' },
      { icon: Users, title: 'Массовый найм', description: 'Упрощённые этапы для быстрого закрытия позиций' },
      { icon: Briefcase, title: 'Executive search', description: 'Многоуровневый отбор для ключевых позиций' },
      { icon: Target, title: 'Аналитика', description: 'Детальная статистика по каждой воронке' },
    ],
  },
];

function FeatureSection({ block, index }: { block: FeatureBlock; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const isReversed = index % 2 === 1;

  return (
    <>
      <SectionTitleScreen
        title={block.label}
        subtitle={block.title}
        color={block.titleScreenColor}
      />

      <section ref={ref} id={block.id} className="py-24">
        <Container>
          <div className={`grid lg:grid-cols-2 gap-16 lg:gap-24 items-start`}>
            {/* Features grid */}
            <div className={`grid sm:grid-cols-2 gap-8 ${isReversed ? 'lg:order-2' : ''}`}>
              {block.features.map((feature, i) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ 
                    delay: i * 0.1,
                    duration: 0.6,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="group"
                >
                  {/* Icon */}
                  <div 
                    className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110"
                    style={{ backgroundColor: `${block.color}10` }}
                  >
                    <feature.icon size={24} style={{ color: block.color }} />
                  </div>

                  {/* Title */}
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h4>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Visual placeholder / Stats */}
            <motion.div
              initial={{ opacity: 0, x: isReversed ? -40 : 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className={`${isReversed ? 'lg:order-1' : ''}`}
            >
              <div 
                className="rounded-3xl p-8 md:p-12 h-full min-h-[400px] flex flex-col justify-between"
                style={{ backgroundColor: `${block.color}05` }}
              >
                {/* Large number */}
                <div>
                  <div 
                    className="text-8xl md:text-9xl font-bold leading-none mb-4"
                    style={{ color: `${block.color}15` }}
                  >
                    0{index + 1}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {block.label}
                  </h3>
                  <p className="text-gray-600">
                    {block.title}
                  </p>
                </div>

                {/* CTA */}
                <motion.a
                  href="#demo"
                  className="inline-flex items-center gap-2 mt-8 font-medium group/link"
                  style={{ color: block.color }}
                  whileHover={{ x: 4 }}
                >
                  Подробнее
                  <ArrowRight size={18} className="transition-transform group-hover/link:translate-x-1" />
                </motion.a>
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
