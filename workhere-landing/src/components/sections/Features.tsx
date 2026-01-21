'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import {
  Database,
  Users,
  Search,
  Layers,
  Workflow,
  BarChart3,
  Link2,
  Shield,
  CheckCircle,
} from 'lucide-react';
import Container from '../ui/Container';
import TextReveal from '../ui/TextReveal';

// Блок 1: База кандидатов
const candidatesBlock = {
  badge: 'База кандидатов',
  title: 'Единая база данных',
  subtitle: 'Все кандидаты, история и коммуникации в одном месте',
  tabs: [
    {
      id: 'cards',
      label: 'КАРТОЧКИ',
      title: 'Полная карточка кандидата',
      description: 'Вся информация о кандидате собрана в одном месте: контакты, резюме, история взаимодействий.',
      features: ['Контакты и резюме', 'Теги и заметки', 'История изменений', 'Кастомные поля'],
    },
    {
      id: 'dedup',
      label: 'ДЕДУПЛИКАЦИЯ',
      title: 'Умная дедупликация',
      description: 'Автоматическое определение дубликатов по телефону, email и социальным сетям.',
      features: ['Авто-определение дублей', 'Объединение профилей', 'Сохранение истории', 'AI-сопоставление'],
    },
    {
      id: 'search',
      label: 'ПОИСК',
      title: 'Мощный поиск и фильтры',
      description: 'Находите нужных кандидатов за секунды с помощью гибких фильтров.',
      features: ['Глобальный поиск', 'Фильтры по опыту', 'Сохранённые запросы', 'Канбан и таблица'],
    },
    {
      id: 'import',
      label: 'ИМПОРТ',
      title: 'Импорт и массовые действия',
      description: 'Загружайте базы из Excel/CSV и выполняйте массовые операции.',
      features: ['Импорт Excel/CSV', 'Массовые теги', 'Массовые письма', 'Экспорт данных'],
    },
  ],
};

// Блок 2: Автоматизация
const automationBlock = {
  badge: 'Автоматизация',
  title: 'Автоматизируйте рутину',
  subtitle: 'Освободите время для важных задач',
  tabs: [
    {
      id: 'triggers',
      label: 'ТРИГГЕРЫ',
      title: 'Автоматические действия',
      description: 'Настройте триггеры на события: смена этапа, новый отклик, дедлайн.',
      features: ['Триггеры по событиям', 'Цепочки действий', 'Условная логика', 'Журнал срабатываний'],
    },
    {
      id: 'notifications',
      label: 'УВЕДОМЛЕНИЯ',
      title: 'Умные уведомления',
      description: 'Никогда не пропустите важное событие — настройте уведомления под себя.',
      features: ['Email уведомления', 'Telegram-бот', 'Push в браузере', 'Эскалации'],
    },
    {
      id: 'templates',
      label: 'ШАБЛОНЫ',
      title: 'Шаблоны сообщений',
      description: 'Экономьте время с готовыми шаблонами писем и сообщений.',
      features: ['Email шаблоны', 'Переменные (ФИО, вакансия)', 'Шаблоны офферов', 'Мультиязычность'],
    },
  ],
};

// Блок 3: Аналитика
const analyticsBlock = {
  badge: 'Аналитика',
  title: 'Данные для решений',
  subtitle: 'Отслеживайте эффективность найма',
  tabs: [
    {
      id: 'funnel',
      label: 'ВОРОНКА',
      title: 'Аналитика воронки',
      description: 'Смотрите конверсию на каждом этапе и находите узкие места.',
      features: ['Конверсия по этапам', 'Сравнение периодов', 'Фильтр по рекрутерам', 'Экспорт в Excel'],
    },
    {
      id: 'metrics',
      label: 'МЕТРИКИ',
      title: 'Ключевые метрики',
      description: 'Time-to-hire, стоимость найма, эффективность источников.',
      features: ['Time-to-hire', 'Cost-per-hire', 'Качество найма', 'Retention метрики'],
    },
    {
      id: 'reports',
      label: 'ОТЧЁТЫ',
      title: 'Готовые отчёты',
      description: 'Автоматические отчёты для руководства и заказчиков.',
      features: ['Еженедельные отчёты', 'Отчёты по вакансиям', 'Отчёты по рекрутерам', 'Кастомные отчёты'],
    },
  ],
};

// Блок 4: Интеграции
const integrationsBlock = {
  badge: 'Интеграции',
  title: 'Всё подключено',
  subtitle: 'Работайте с привычными инструментами',
  tabs: [
    {
      id: 'jobsites',
      label: 'ДЖОБ-САЙТЫ',
      title: 'Интеграция с площадками',
      description: 'Публикуйте вакансии и получайте отклики из HH.ru, Avito, SuperJob.',
      features: ['HH.ru', 'Avito', 'SuperJob', 'Авто-импорт откликов'],
    },
    {
      id: 'calendar',
      label: 'КАЛЕНДАРИ',
      title: 'Синхронизация календарей',
      description: 'Интервью автоматически синхронизируются с вашим календарём.',
      features: ['Google Calendar', 'Outlook', 'Apple Calendar', 'Приглашения'],
    },
    {
      id: 'messengers',
      label: 'МЕССЕНДЖЕРЫ',
      title: 'Чаты и email',
      description: 'Вся переписка с кандидатами в одном окне.',
      features: ['Email', 'Telegram', 'WhatsApp', 'Шаблоны'],
    },
    {
      id: 'api',
      label: 'API',
      title: 'Открытый API',
      description: 'Интегрируйте WorkHere с любыми системами.',
      features: ['REST API', 'Webhooks', 'SDK', 'Документация'],
    },
  ],
};

const allBlocks = [candidatesBlock, automationBlock, analyticsBlock, integrationsBlock];

function FeatureBlock({ block, index }: { block: typeof candidatesBlock; index: number }) {
  const [activeTab, setActiveTab] = useState(block.tabs[0].id);
  const activeContent = block.tabs.find(t => t.id === activeTab);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const bgColors = [
    'from-[#f0f7ff] to-white',
    'from-[#f5f0ff] to-white',
    'from-[#f0fff4] to-white',
    'from-[#fff7e6] to-white',
  ];

  const iconMap: Record<number, React.ElementType> = {
    0: Database,
    1: Workflow,
    2: BarChart3,
    3: Link2,
  };
  const BlockIcon = iconMap[index] || Database;

  return (
    <section
      ref={ref}
      className={`py-20 bg-gradient-to-b ${bgColors[index % bgColors.length]}`}
    >
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 mb-4 text-sm font-medium text-[#1890ff] bg-[#e6f4ff] rounded-full">
            <BlockIcon size={16} />
            {block.badge}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            {block.title}
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">{block.subtitle}</p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {block.tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2.5 text-sm font-medium rounded-full transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-gray-900 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </motion.div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          {activeContent && (
            <motion.div
              key={activeContent.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid lg:grid-cols-2 gap-10 items-center"
            >
              {/* Text */}
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  {activeContent.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {activeContent.description}
                </p>
                <ul className="space-y-3">
                  {activeContent.features.map((feature, i) => (
                    <motion.li
                      key={feature}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-center gap-3 text-gray-700"
                    >
                      <CheckCircle className="text-green-500 flex-shrink-0" size={20} />
                      <span>{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Visual */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#e6f4ff] to-[#d1fae5] rounded-[30px] -rotate-3" />
                <div className="relative bg-white rounded-[24px] p-8 shadow-xl">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-[#1890ff] rounded-xl flex items-center justify-center">
                      <BlockIcon className="text-white" size={24} />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{activeContent.title}</div>
                      <div className="text-sm text-gray-500">WorkHere</div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    {activeContent.features.map((feature, i) => (
                      <motion.div
                        key={feature}
                        initial={{ width: 0 }}
                        animate={{ width: '100%' }}
                        transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                        className="h-10 bg-gray-50 rounded-lg flex items-center px-4"
                      >
                        <div className="w-2 h-2 rounded-full bg-[#1890ff] mr-3" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-10">
          {block.tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`h-2 rounded-full transition-all duration-300 ${
                activeTab === tab.id ? 'w-8 bg-gray-900' : 'w-2 bg-gray-300'
              }`}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default function Features() {
  const titleRef = useRef(null);
  const isInView = useInView(titleRef, { once: true });

  return (
    <>
      {/* Main Header */}
      <section id="features" className="py-16 bg-white">
        <Container>
          <div ref={titleRef} className="text-center">
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
        </Container>
      </section>

      {/* Feature Blocks */}
      {allBlocks.map((block, index) => (
        <FeatureBlock key={block.badge} block={block} index={index} />
      ))}
    </>
  );
}
