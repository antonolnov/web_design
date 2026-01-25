'use client';

import { useState, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { GitBranch, Users, MessageSquare, Search, Globe, Phone, Code, BarChart3, TrendingUp } from 'lucide-react';
import Mascot from '@/components/ui/Mascot';

// Feature sections data
const featureSections = [
  {
    id: 'automation',
    badge: 'Автоматизация',
    badgeColor: 'bg-cyan-100 text-cyan-700',
    title: 'Ускорьте работу рекрутеров',
    description: 'Чтобы конкурировать за кандидатов, нужно действовать быстро. WorkHere автоматизирует всю рутину и фокусирует рекрутеров на действительно важных задачах',
    stat: { value: '2ч', label: 'рабочего времени рекрутера экономит WorkHere каждый день' },
    tabs: [
      {
        id: 'funnels',
        label: 'Воронки подбора',
        icon: GitBranch,
        title: 'Любое количество воронок подбора',
        description: 'Создавайте отдельные воронки для массового и точечного найма. Настраивайте этапы под каждый тип вакансий. Отслеживайте статистику по каждой воронке.',
        features: ['Гибкая настройка этапов', 'Автоматическое продвижение', 'Статистика по каждой воронке'],
      },
      {
        id: 'cards',
        label: 'Карточки кандидатов',
        icon: Users,
        title: 'Полная информация о кандидате',
        description: 'Все данные о кандидате в одном месте: резюме, история взаимодействий, комментарии коллег, результаты оценки.',
        features: ['История коммуникаций', 'Теги и комментарии', 'Быстрый поиск'],
      },
      {
        id: 'templates',
        label: 'Шаблоны писем',
        icon: MessageSquare,
        title: 'Персонализированные шаблоны',
        description: 'Создавайте шаблоны писем с переменными. Отправляйте массовые рассылки с персонализацией. Отслеживайте открытия и ответы.',
        features: ['Переменные в шаблонах', 'A/B тестирование', 'Аналитика писем'],
      },
      {
        id: 'duplicates',
        label: 'Поиск дублей',
        icon: Search,
        title: 'Определение дубликатов резюме',
        description: 'Автоматически находите повторные отклики и резюме одного кандидата. Объединяйте профили и сохраняйте историю.',
        features: ['Автоматическое определение', 'Умное объединение', 'Сохранение истории'],
      },
    ],
  },
  {
    id: 'integrations',
    badge: 'Интеграции',
    badgeColor: 'bg-green-100 text-green-700',
    title: 'Подключите все источники кандидатов',
    description: 'Собирайте отклики со всех job-сайтов и мессенджеров в одном месте. Автоматизируйте публикацию вакансий и получение откликов.',
    stat: { value: '20+', label: 'интеграций с популярными сервисами' },
    tabs: [
      {
        id: 'jobsites',
        label: 'Job-сайты',
        icon: Globe,
        title: 'Интеграция с работными сайтами',
        description: 'Публикуйте вакансии на HH.ru, SuperJob, Avito, Работа.ру одним кликом. Автоматически получайте отклики в систему.',
        features: ['HeadHunter', 'SuperJob', 'Avito Работа', 'Работа.ру'],
      },
      {
        id: 'messengers',
        label: 'Мессенджеры',
        icon: MessageSquare,
        title: 'Общайтесь там, где удобно кандидатам',
        description: 'Отправляйте сообщения в WhatsApp и Telegram прямо из системы. Вся переписка сохраняется в карточке кандидата.',
        features: ['WhatsApp', 'Telegram', 'Email', 'SMS'],
      },
      {
        id: 'telephony',
        label: 'Телефония',
        icon: Phone,
        title: 'Звонки прямо из системы',
        description: 'Интеграция с IP-телефонией. Записи звонков автоматически прикрепляются к карточке кандидата.',
        features: ['Запись разговоров', 'Click-to-call', 'Статистика звонков'],
      },
      {
        id: 'api',
        label: 'API',
        icon: Code,
        title: 'Открытый API для разработчиков',
        description: 'Интегрируйте WorkHere с любыми корпоративными системами. Полная документация и поддержка разработчиков.',
        features: ['REST API', 'Webhooks', 'SDK'],
      },
    ],
  },
  {
    id: 'analytics',
    badge: 'Аналитика',
    badgeColor: 'bg-purple-100 text-purple-700',
    title: 'Найдите и исправьте узкие места',
    description: 'Нельзя улучшить процессы без точных метрик. 16+ готовых отчетов WorkHere позволяют найти и исправить проблемы с закрытием вакансий.',
    stat: { value: '16+', label: 'готовых отчетов для анализа подбора' },
    tabs: [
      {
        id: 'dashboards',
        label: 'Дашборды',
        icon: BarChart3,
        title: 'Интерактивные дашборды',
        description: 'Визуализация ключевых метрик подбора в реальном времени. Настраиваемые виджеты и фильтры.',
        features: ['Real-time данные', 'Кастомизация', 'Экспорт отчетов'],
      },
      {
        id: 'reports',
        label: 'Отчёты',
        icon: TrendingUp,
        title: 'Детальные отчёты по подбору',
        description: 'Воронка кандидатов, срок закрытия вакансий, эффективность рекрутеров, источники кандидатов и многое другое.',
        features: ['Воронка кандидатов', 'Срок закрытия', 'Эффективность источников'],
      },
    ],
  },
];

// Single feature section component
function FeatureSection({ section, index }: { section: typeof featureSections[0]; index: number }) {
  const [activeTab, setActiveTab] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'start center'],
  });

  const badgeScale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);
  const badgeOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  const currentTab = section.tabs[activeTab];
  const IconComponent = currentTab.icon;

  return (
    <section 
      ref={sectionRef}
      id={section.id} 
      className="relative py-32 overflow-hidden"
    >
      {/* Badge - Huntflow style */}
      <motion.div
        className="flex justify-center mb-12"
        style={{ scale: badgeScale, opacity: badgeOpacity }}
      >
        <motion.div
          className={`px-6 py-3 rounded-2xl ${section.badgeColor} font-semibold text-lg`}
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        >
          {section.badge}
        </motion.div>
      </motion.div>

      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              {section.title}
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              {section.description}
            </p>
            
            {/* Stat */}
            <motion.div
              className="flex items-center gap-4 p-6 rounded-2xl bg-gray-50 border border-gray-100"
              whileHover={{ scale: 1.02 }}
            >
              <div className="text-4xl font-bold text-[#1890ff]">{section.stat.value}</div>
              <div className="text-gray-600">{section.stat.label}</div>
            </motion.div>
          </motion.div>

          {/* Right side - Tabs and content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Tabs */}
            <div className="flex flex-wrap gap-2 mb-8">
              {section.tabs.map((tab, i) => (
                <motion.button
                  key={tab.id}
                  onClick={() => setActiveTab(i)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    activeTab === i
                      ? 'bg-gray-900 text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {tab.label}
                </motion.button>
              ))}
            </div>

            {/* Tab content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTab.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="relative bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 border border-gray-100 shadow-sm min-h-[350px]"
              >
                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-[#1890ff]/10 flex items-center justify-center mb-6">
                  <IconComponent className="w-7 h-7 text-[#1890ff]" />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">{currentTab.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{currentTab.description}</p>

                {/* Features list */}
                <div className="flex flex-wrap gap-2">
                  {currentTab.features.map((feature, i) => (
                    <motion.span
                      key={feature}
                      className="px-3 py-1.5 rounded-full bg-white border border-gray-200 text-sm text-gray-700"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      {feature}
                    </motion.span>
                  ))}
                </div>

                {/* Mascot in corner */}
                {index === 1 && (
                  <div className="absolute -bottom-4 -right-4 hidden lg:block">
                    <Mascot variant="02" size={100} phrase="Интеграции!" />
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default function FeaturesHuntflow() {
  return (
    <div className="bg-white">
      {featureSections.map((section, index) => (
        <FeatureSection key={section.id} section={section} index={index} />
      ))}
    </div>
  );
}
