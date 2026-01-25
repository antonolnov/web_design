'use client';

import { useState, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { GitBranch, Users, MessageSquare, Search, Globe, Phone, Code, BarChart3, TrendingUp, ChevronDown } from 'lucide-react';
import Mascot from '@/components/ui/Mascot';

// Title screen colors for each section
const titleScreenStyles = {
  automation: {
    bg: 'linear-gradient(135deg, #0891b2 0%, #06b6d4 30%, #22d3ee 70%, #67e8f9 100%)',
    text: 'white',
  },
  integrations: {
    bg: 'linear-gradient(135deg, #059669 0%, #10b981 30%, #34d399 70%, #6ee7b7 100%)',
    text: 'white',
  },
  analytics: {
    bg: 'linear-gradient(135deg, #7c3aed 0%, #8b5cf6 30%, #a78bfa 70%, #c4b5fd 100%)',
    text: 'white',
  },
};

// Full-screen title component
function FeatureTitleScreen({ title, sectionId }: { title: string; sectionId: string }) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 0.5, 1], [100, 0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.8, 1, 1, 0.9]);

  const style = titleScreenStyles[sectionId as keyof typeof titleScreenStyles] || titleScreenStyles.automation;

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: style.bg }}
    >
      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full opacity-20"
            style={{
              width: 100 + i * 50,
              height: 100 + i * 50,
              left: `${10 + (i * 12) % 80}%`,
              top: `${15 + (i * 11) % 70}%`,
              background: 'rgba(255,255,255,0.3)',
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, 20, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 6 + i,
              repeat: Infinity,
              delay: i * 0.5,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      {/* Main title */}
      <motion.div
        className="relative z-10 text-center px-6"
        style={{ y, opacity, scale }}
      >
        <motion.h2
          className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black leading-none"
          style={{ color: style.text }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: 'spring' }}
        >
          {title}
        </motion.h2>
        
        {/* Decorative line */}
        <motion.div
          className="mt-8 mx-auto h-1 rounded-full bg-white/50"
          initial={{ width: 0 }}
          whileInView={{ width: 200 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
        />
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.8 }}
      >
        <span className="text-white/70 text-sm font-medium">Листайте вниз</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown className="w-6 h-6 text-white/70" />
        </motion.div>
      </motion.div>
    </section>
  );
}

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

  const currentTab = section.tabs[activeTab];
  const IconComponent = currentTab.icon;

  return (
    <section 
      ref={sectionRef}
      className="relative py-24 overflow-hidden"
    >
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
            {/* Tabs - Linear with underline */}
            <div className="relative mb-8">
              <div className="flex gap-1 overflow-x-auto scrollbar-hide">
                {section.tabs.map((tab, i) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(i)}
                    className={`relative px-4 py-3 text-sm font-medium whitespace-nowrap transition-colors ${
                      activeTab === i
                        ? 'text-gray-900'
                        : 'text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    {tab.label}
                    {activeTab === i && (
                      <motion.div
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-900 rounded-full"
                        layoutId={`tab-underline-${section.id}`}
                        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                      />
                    )}
                  </button>
                ))}
              </div>
              {/* Bottom border */}
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gray-200" />
            </div>

            {/* Tab content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTab.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="relative bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 border border-gray-100 shadow-sm min-h-[400px] overflow-hidden"
              >
                {/* Background SVG decoration */}
                <div className="absolute top-0 right-0 w-64 h-64 pointer-events-none opacity-10">
                  <svg viewBox="0 0 200 200" className="w-full h-full">
                    <defs>
                      <linearGradient id={`grad-${section.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#1890ff" />
                        <stop offset="100%" stopColor="#40a9ff" />
                      </linearGradient>
                    </defs>
                    <circle cx="100" cy="100" r="80" fill={`url(#grad-${section.id})`} />
                    <circle cx="150" cy="50" r="40" fill="#1890ff" opacity="0.5" />
                    <circle cx="50" cy="150" r="30" fill="#40a9ff" opacity="0.3" />
                  </svg>
                </div>

                {/* Floating shapes animation */}
                <motion.div
                  className="absolute top-8 right-8 w-3 h-3 rounded-full bg-[#1890ff]/30"
                  animate={{ y: [0, -10, 0], x: [0, 5, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                />
                <motion.div
                  className="absolute top-20 right-16 w-2 h-2 rounded-full bg-[#16BF54]/40"
                  animate={{ y: [0, 8, 0], x: [0, -4, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                />
                <motion.div
                  className="absolute bottom-24 right-12 w-4 h-4 rounded-full bg-[#1890ff]/20"
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                />

                {/* Icon */}
                <motion.div 
                  className="w-16 h-16 rounded-2xl bg-[#1890ff]/10 flex items-center justify-center mb-6"
                  whileHover={{ scale: 1.05, rotate: 5 }}
                >
                  <IconComponent className="w-8 h-8 text-[#1890ff]" />
                </motion.div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">{currentTab.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{currentTab.description}</p>

                {/* Features list */}
                <div className="flex flex-wrap gap-2">
                  {currentTab.features.map((feature, i) => (
                    <motion.span
                      key={feature}
                      className="px-3 py-1.5 rounded-full bg-white border border-gray-200 text-sm text-gray-700 shadow-sm"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.1 }}
                      whileHover={{ scale: 1.05, backgroundColor: '#f0f9ff' }}
                    >
                      {feature}
                    </motion.span>
                  ))}
                </div>

                {/* Mascot in corner - different for each section */}
                <div className="absolute bottom-4 right-4 hidden lg:block">
                  <Mascot 
                    variant={index === 0 ? '02' : index === 1 ? '03' : '05'} 
                    size={80} 
                    phrase={index === 0 ? 'Быстро! ⚡' : index === 1 ? 'Интеграции!' : 'Аналитика! 📊'}
                  />
                </div>
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
    <div className="bg-white" id="features">
      {featureSections.map((section, index) => (
        <div key={section.id}>
          {/* Full-screen title screen */}
          <FeatureTitleScreen title={section.badge} sectionId={section.id} />
          {/* Feature content section */}
          <FeatureSection section={section} index={index} />
        </div>
      ))}
    </div>
  );
}
