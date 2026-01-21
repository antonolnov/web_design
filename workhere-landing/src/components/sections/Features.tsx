'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Database,
  Users,
  Search,
  Link2,
  MessageSquare,
  CheckSquare,
  Calendar,
  Building2,
  BarChart3,
  Workflow,
  Shield,
  Code,
  Settings,
  Sparkles,
  Layers,
  GitMerge,
} from 'lucide-react';
import Container from '../ui/Container';
import TextReveal from '../ui/TextReveal';

const featureGroups = [
  {
    id: 'candidates',
    icon: Database,
    title: 'Кандидаты и база данных',
    description: 'Единая база с полной историей и умной дедупликацией',
    features: [
      'Карточка кандидата: контакты, резюме, источники, теги, заметки',
      'Автоматическая дедупликация по телефону, email, соц. сетям',
      'История изменений: кто, когда и что изменил',
      'Гибкие кастомные поля под ваши процессы',
      'Импорт из Excel/CSV, массовые действия',
    ],
  },
  {
    id: 'pipeline',
    icon: Layers,
    title: 'Вакансии и воронка подбора',
    description: 'Настраиваемые этапы и полный контроль процесса',
    features: [
      'Гибкие статусы вакансий: черновик, в работе, приостановлена, закрыта',
      'Настраиваемые этапы воронки под тип вакансии',
      'Правила переходов и причины отказов',
      'Привязка кандидата к нескольким вакансиям',
      'Талент-пулы для кандидатов "на будущее"',
    ],
  },
  {
    id: 'search',
    icon: Search,
    title: 'Поиск и фильтры',
    description: 'Находите нужных кандидатов за секунды',
    features: [
      'Глобальный поиск по всей базе',
      'Фильтры: опыт, город, зарплата, источники, теги',
      'Сохранённые фильтры с закреплением',
      'Разные виды: таблица, канбан, список',
      'Фильтрация по кастомным полям',
    ],
  },
  {
    id: 'integrations',
    icon: Link2,
    title: 'Источники и интеграции',
    description: 'Все джоб-сайты в одном окне',
    features: [
      'Интеграция с HH.ru, Avito, SuperJob',
      'Автоматический импорт откликов',
      'Фиксация источника каждого кандидата',
      'Публикация вакансий на площадки',
      'Сбор откликов обратно в WorkHere',
    ],
  },
  {
    id: 'communications',
    icon: MessageSquare,
    title: 'Омниканальные коммуникации',
    description: 'Вся переписка в карточке кандидата',
    features: [
      'Email с шаблонами и историей',
      'Telegram и WhatsApp интеграции',
      'Шаблоны с переменными (ФИО, вакансия, время)',
      'Полный лог коммуникаций',
      'Уведомления по событиям',
    ],
  },
  {
    id: 'tasks',
    icon: CheckSquare,
    title: 'Задачи и активности',
    description: 'Ничего не забудете и не упустите',
    features: [
      'Задачи по кандидату/вакансии/клиенту',
      'Дедлайны и назначение ответственных',
      'Лента активностей: звонки, письма, интервью',
      'Конструктор уведомлений и напоминаний',
      'Эскалация при отсутствии активности',
    ],
  },
  {
    id: 'calendar',
    icon: Calendar,
    title: 'Календарь и интервью',
    description: 'Планирование встреч без хаоса',
    features: [
      'Создание интервью из карточки кандидата',
      'Участники: рекрутер, нанимающий, кандидат',
      'Синхронизация с Google/Outlook календарями',
      'Шаблоны приглашений',
      'Оценка и решение по итогам',
    ],
  },
  {
    id: 'clients',
    icon: Building2,
    title: 'Заказчики и B2B',
    description: 'Для агентств и внутренних заказчиков',
    features: [
      'Карточка заказчика: реквизиты, контакты, договоры',
      'Контактные лица с ролями',
      'Связь вакансия ↔ заказчик с SLA',
      'Задачи и коммуникации по заказчику',
      'Аналитика эффективности по клиентам',
    ],
  },
];

const secondaryFeatures = [
  {
    icon: BarChart3,
    title: 'Аналитика и отчёты',
    items: ['Воронка по вакансиям/рекрутерам', 'Time-to-hire метрики', 'Эффективность источников', 'Причины отказов'],
  },
  {
    icon: Workflow,
    title: 'Автоматизация',
    items: ['Автодействия по событиям', 'Конструктор сценариев', 'Уведомления и эскалации', 'Журнал срабатываний'],
  },
  {
    icon: Shield,
    title: 'Роли и безопасность',
    items: ['Гибкие роли и права', 'Доступ по командам/проектам', 'Аудит действий', 'SaaS и on-premise'],
  },
  {
    icon: Code,
    title: 'API и интеграции',
    items: ['Открытый REST API', 'Вебхуки событий', 'Интеграция с BI', 'Telegram-боты'],
  },
  {
    icon: Settings,
    title: 'Кастомизация',
    items: ['Настройка воронок', 'Справочники и статусы', 'Кастомные поля', 'Брендинг писем'],
  },
  {
    icon: Sparkles,
    title: 'AI-функции',
    items: ['AI-скоринг кандидатов', 'Парсинг резюме', 'Определение дублей', 'Сводки по кандидату'],
  },
];

function FeatureCard({ feature, index }: { feature: typeof featureGroups[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative bg-white rounded-[24px] p-8 shadow-[0_4px_20px_rgba(0,0,0,0.06)] border border-gray-100 hover:shadow-[0_20px_50px_rgba(24,144,255,0.12)] hover:border-[#1890ff]/20 transition-all duration-500"
    >
      <div className="flex items-start gap-5 mb-6">
        <div className="w-14 h-14 bg-gradient-to-br from-[#e6f4ff] to-[#d1e9ff] rounded-[16px] flex items-center justify-center flex-shrink-0 group-hover:from-[#1890ff] group-hover:to-[#0d6edb] transition-all duration-500">
          <feature.icon
            className="text-[#1890ff] group-hover:text-white transition-colors duration-500"
            size={26}
          />
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-1">{feature.title}</h3>
          <p className="text-gray-500 text-sm">{feature.description}</p>
        </div>
      </div>
      
      <ul className="space-y-3">
        {feature.features.map((item, i) => (
          <motion.li
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.3 + i * 0.05 }}
            className="flex items-start gap-3 text-gray-600"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-[#1890ff] mt-2 flex-shrink-0" />
            <span className="text-sm leading-relaxed">{item}</span>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}

export default function Features() {
  const titleRef = useRef(null);
  const isInView = useInView(titleRef, { once: true });

  return (
    <section id="features" className="py-24 bg-gray-50">
      <Container>
        {/* Section Header */}
        <div ref={titleRef} className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-[#1890ff] bg-[#e6f4ff] rounded-full"
          >
            Возможности платформы
          </motion.span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            <TextReveal>Всё для эффективного найма</TextReveal>
          </h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Полный набор инструментов: от первого контакта до выхода на работу
          </motion.p>
        </div>

        {/* Main Features Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {featureGroups.map((feature, index) => (
            <FeatureCard key={feature.id} feature={feature} index={index} />
          ))}
        </div>

        {/* Secondary Features */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
        >
          {secondaryFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-white rounded-[16px] p-5 text-center border border-gray-100 hover:border-[#1890ff]/20 hover:shadow-lg transition-all group"
            >
              <div className="w-12 h-12 mx-auto mb-3 bg-[#e6f4ff] rounded-[12px] flex items-center justify-center group-hover:bg-[#1890ff] transition-colors">
                <feature.icon className="text-[#1890ff] group-hover:text-white transition-colors" size={22} />
              </div>
              <h4 className="font-semibold text-gray-900 text-sm mb-2">{feature.title}</h4>
              <ul className="space-y-1">
                {feature.items.map((item, i) => (
                  <li key={i} className="text-xs text-gray-500">{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
