'use client';

import { motion } from 'framer-motion';
import {
  Users,
  Search,
  Calendar,
  MessageSquare,
  FileText,
  Zap,
  Globe,
  Smartphone,
  Clock,
  Target,
  Star,
  CheckCircle2,
} from 'lucide-react';
import Container from '../ui/Container';
import Card from '../ui/Card';
import SectionTitle from '../ui/SectionTitle';

const features = [
  {
    icon: Users,
    title: 'Единая база кандидатов',
    description:
      'Храните всех кандидатов в одном месте. Быстрый поиск по любым параметрам, теги, заметки и полная история взаимодействий.',
    highlights: ['Дедупликация', 'Теги и фильтры', 'История коммуникаций'],
  },
  {
    icon: Search,
    title: 'Умный поиск и подбор',
    description:
      'AI-powered поиск кандидатов по резюме, навыкам и опыту. Автоматическое ранжирование по релевантности вакансии.',
    highlights: ['AI-скоринг', 'Семантический поиск', 'Автоподбор'],
  },
  {
    icon: Calendar,
    title: 'Планирование интервью',
    description:
      'Интеграция с календарями, автоматические напоминания, слоты для самостоятельного выбора времени кандидатом.',
    highlights: ['Синхронизация календарей', 'Авто-напоминания', 'Self-scheduling'],
  },
  {
    icon: MessageSquare,
    title: 'Коммуникации',
    description:
      'Email, мессенджеры, SMS — всё в одном окне. Шаблоны сообщений и автоматические триггеры на каждом этапе.',
    highlights: ['Мультиканальность', 'Шаблоны', 'Авто-ответы'],
  },
  {
    icon: FileText,
    title: 'Парсинг резюме',
    description:
      'Автоматическое извлечение данных из резюме любого формата. Структурирование информации и добавление в профиль.',
    highlights: ['PDF, DOC, HTML', 'Мультиязычность', '99% точность'],
  },
  {
    icon: Zap,
    title: 'Автоматизация процессов',
    description:
      'Настраиваемые воронки, триггеры и автоматические действия. Экономьте до 10 часов в неделю на рутине.',
    highlights: ['Визуальный конструктор', 'Триггеры', 'Webhooks'],
  },
  {
    icon: Globe,
    title: 'Карьерный сайт',
    description:
      'Создайте брендированный карьерный портал за минуты. SEO-оптимизация и интеграция с job-бордами.',
    highlights: ['Конструктор страниц', 'SEO', 'Виджеты'],
  },
  {
    icon: Smartphone,
    title: 'Мобильное приложение',
    description:
      'Управляйте подбором с мобильного. Просматривайте кандидатов, назначайте интервью, оставляйте фидбек.',
    highlights: ['iOS и Android', 'Push-уведомления', 'Офлайн-доступ'],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export default function Features() {
  return (
    <section id="features" className="py-24 bg-white">
      <Container>
        <SectionTitle
          badge="Возможности"
          title="Всё для эффективного найма"
          subtitle="Полный набор инструментов для HR-команды любого размера. От стартапа до enterprise."
        />

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {features.map((feature) => (
            <motion.div key={feature.title} variants={itemVariants}>
              <Card className="h-full">
                <div className="w-14 h-14 bg-[#e6f4ff] rounded-[16px] flex items-center justify-center mb-5">
                  <feature.icon className="text-[#1890ff]" size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-center gap-2 text-sm text-gray-500">
                      <CheckCircle2 className="text-[#1890ff] flex-shrink-0" size={16} />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional feature blocks */}
        <motion.div
          className="mt-16 grid lg:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          <div className="lg:col-span-2 bg-gradient-to-br from-[#1890ff] to-[#0d6edb] rounded-[24px] p-8 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="text-white/80" size={24} />
                <span className="text-white/80 font-medium">Экономия времени</span>
              </div>
              <h3 className="text-3xl font-bold mb-4">
                Сократите время закрытия вакансии на 40%
              </h3>
              <p className="text-white/80 text-lg mb-6 max-w-xl">
                Автоматизация рутинных задач, умные напоминания и интегрированные коммуникации 
                позволяют рекрутерам сфокусироваться на главном — работе с людьми.
              </p>
              <div className="grid grid-cols-3 gap-6">
                <div>
                  <div className="text-4xl font-bold mb-1">40%</div>
                  <div className="text-white/70 text-sm">Быстрее найм</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-1">10ч</div>
                  <div className="text-white/70 text-sm">Экономии в неделю</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-1">3x</div>
                  <div className="text-white/70 text-sm">Больше кандидатов</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-[24px] p-8">
            <div className="flex items-center gap-3 mb-4">
              <Target className="text-[#1890ff]" size={24} />
              <span className="text-gray-600 font-medium">Качество найма</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Принимайте решения на основе данных
            </h3>
            <p className="text-gray-600 mb-6">
              Скоринг кандидатов, аналитика источников и эффективности рекрутеров 
              помогают постоянно улучшать процесс подбора.
            </p>
            <ul className="space-y-3">
              {['Прогнозирование успешности', 'A/B тесты вакансий', 'ROI каналов привлечения'].map(
                (item) => (
                  <li key={item} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-[#1890ff] rounded-full flex items-center justify-center">
                      <Star className="text-white" size={12} />
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                )
              )}
            </ul>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
