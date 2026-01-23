'use client';

import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import { 
  Users, GitBranch, BarChart3, MessageSquare, Shield, Zap,
  ChevronRight, CheckCircle
} from 'lucide-react';
import Container from '../ui/Container';
import ContentCard from '../ui/ContentCard';
import Mascot from '../ui/Mascot';

const features = [
  {
    id: 'ai',
    icon: Zap,
    title: 'AI-возможности',
    description: 'Искусственный интеллект для умного найма',
    points: [
      'AI-скоринг кандидатов',
      'Умный поиск по резюме',
      'Автоматический парсинг резюме',
      'Рекомендации по вакансиям',
      'Предсказание успешности найма',
    ],
    mascotVariant: '01' as const,
  },
  {
    id: 'candidates',
    icon: Users,
    title: 'База кандидатов',
    description: 'Единая база всех кандидатов с полной историей взаимодействий',
    points: [
      'Умный поиск по резюме',
      'Автоматический парсинг',
      'Дедупликация контактов',
      'История коммуникаций',
    ],
    mascotVariant: '02' as const,
  },
  {
    id: 'funnel',
    icon: GitBranch,
    title: 'Воронки подбора',
    description: 'Гибкие воронки для любого типа найма',
    points: [
      'Неограниченное количество воронок',
      'Настраиваемые этапы',
      'Автоматические действия',
      'Аналитика конверсии',
    ],
    mascotVariant: '03' as const,
  },
  {
    id: 'analytics',
    icon: BarChart3,
    title: 'Аналитика',
    description: 'Полная картина эффективности найма',
    points: [
      'Дашборды в реальном времени',
      'Кастомные отчёты',
      'Экспорт в BI-системы',
      'Метрики по рекрутерам',
    ],
    mascotVariant: '04' as const,
  },
  {
    id: 'communication',
    icon: MessageSquare,
    title: 'Коммуникации',
    description: 'Все каналы связи в одном месте',
    points: [
      'Email, SMS, мессенджеры',
      'Шаблоны сообщений',
      'Автоматические рассылки',
      'Единая история переписки',
    ],
    mascotVariant: '05' as const,
  },
  {
    id: 'security',
    icon: Shield,
    title: 'Безопасность',
    description: 'Enterprise-уровень защиты данных',
    points: [
      'Соответствие 152-ФЗ',
      'Шифрование AES-256',
      'SSO интеграция',
      'Гранулярные права доступа',
    ],
    mascotVariant: '06' as const,
  },
  {
    id: 'integrations',
    icon: GitBranch,
    title: 'Интеграции',
    description: 'Связь со всеми вашими инструментами',
    points: [
      'Job-сайты (HH, Avito, SuperJob)',
      'Мессенджеры (Telegram, WhatsApp)',
      'CRM и ERP системы',
      'Открытый API',
    ],
    mascotVariant: '07' as const,
  },
];

export default function FeaturesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeFeature, setActiveFeature] = useState(0);
  const current = features[activeFeature];

  return (
    <section id="features" className="py-16 px-4">
      <Container>
        <ContentCard variant="gradient">
          <div ref={ref}>
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              className="text-center mb-10"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#1890ff]/10 rounded-full text-[#1890ff] text-sm font-medium mb-4">
                <Zap size={14} />
                Возможности платформы
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Всё для эффективного найма
              </h2>
            </motion.div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Feature tabs */}
              <div className="space-y-2">
                {features.map((feature, i) => (
                  <motion.button
                    key={feature.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: i * 0.05 }}
                    onClick={() => setActiveFeature(i)}
                    className={`w-full flex items-center gap-3 p-4 rounded-xl text-left transition-all ${
                      activeFeature === i
                        ? 'bg-[#1890ff] text-white shadow-lg'
                        : 'bg-white hover:bg-gray-50 text-gray-700'
                    }`}
                  >
                    <feature.icon size={20} />
                    <span className="font-medium flex-1">{feature.title}</span>
                    <ChevronRight size={18} className={activeFeature === i ? 'opacity-100' : 'opacity-30'} />
                  </motion.button>
                ))}
              </div>

              {/* Feature content */}
              <div className="lg:col-span-2">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={current.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 h-full"
                  >
                    <div className="flex items-start gap-6">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-12 h-12 rounded-xl bg-[#1890ff]/10 flex items-center justify-center">
                            <current.icon size={24} className="text-[#1890ff]" />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-gray-900">{current.title}</h3>
                            <p className="text-gray-500 text-sm">{current.description}</p>
                          </div>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-3">
                          {current.points.map((point, i) => (
                            <motion.div
                              key={point}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: i * 0.05 }}
                              className="flex items-center gap-2"
                            >
                              <CheckCircle size={18} className="text-green-500 flex-shrink-0" />
                              <span className="text-gray-700">{point}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      {/* Mascot - larger size */}
                      <div className="hidden md:block flex-shrink-0">
                        <Mascot size={180} variant={current.mascotVariant} animate={true} />
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </ContentCard>
      </Container>
    </section>
  );
}
