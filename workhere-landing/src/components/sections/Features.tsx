'use client';

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import {
  Database,
  Users,
  Search,
  Upload,
  Workflow,
  Bell,
  FileText,
  BarChart3,
  TrendingUp,
  PieChart,
  Link2,
  Calendar,
  MessageSquare,
  Code,
  CheckCircle,
  User,
  Mail,
  Phone,
  Tag,
  Filter,
  Zap,
  Clock,
} from 'lucide-react';
import Container from '../ui/Container';
import TextReveal from '../ui/TextReveal';

// Визуальные компоненты для каждого таба
function CandidateCardVisual() {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 max-w-sm">
      <div className="flex items-center gap-4 mb-4">
        <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white text-xl font-bold">
          АИ
        </div>
        <div>
          <div className="font-semibold text-gray-900">Анна Иванова</div>
          <div className="text-sm text-gray-500">Product Designer</div>
          <div className="flex gap-1 mt-1">
            <span className="px-2 py-0.5 bg-blue-100 text-blue-600 text-xs rounded">Senior</span>
            <span className="px-2 py-0.5 bg-green-100 text-green-600 text-xs rounded">Активный</span>
          </div>
        </div>
      </div>
      <div className="space-y-2 text-sm">
        <div className="flex items-center gap-2 text-gray-600">
          <Mail size={14} /> anna.ivanova@email.com
        </div>
        <div className="flex items-center gap-2 text-gray-600">
          <Phone size={14} /> +7 (999) 123-45-67
        </div>
      </div>
      <div className="mt-4 pt-4 border-t flex gap-2">
        <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">#figma</span>
        <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">#ui/ux</span>
        <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">#remote</span>
      </div>
    </div>
  );
}

function DeduplicationVisual() {
  return (
    <div className="relative">
      <div className="flex items-center gap-4">
        <div className="bg-white rounded-xl shadow p-4 border-2 border-red-200">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gray-200 rounded-full" />
            <div>
              <div className="text-sm font-medium">Иван Петров</div>
              <div className="text-xs text-gray-500">ivan@mail.ru</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <Zap className="text-yellow-500" size={24} />
          <div className="text-xs text-gray-500 mt-1">AI</div>
        </div>
        <div className="bg-white rounded-xl shadow p-4 border-2 border-red-200">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gray-200 rounded-full" />
            <div>
              <div className="text-sm font-medium">И. Петров</div>
              <div className="text-xs text-gray-500">+7 999 111 22 33</div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4 flex justify-center">
        <div className="bg-green-50 border border-green-200 rounded-xl p-4">
          <div className="flex items-center gap-2">
            <CheckCircle className="text-green-500" size={20} />
            <span className="text-sm text-green-700">Объединено в 1 профиль</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function SearchVisual() {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-4">
      <div className="flex items-center gap-2 mb-4 bg-gray-50 rounded-lg px-3 py-2">
        <Search size={18} className="text-gray-400" />
        <span className="text-gray-400 text-sm">Product Designer, Senior...</span>
      </div>
      <div className="flex flex-wrap gap-2 mb-4">
        <span className="px-3 py-1 bg-blue-100 text-blue-600 text-xs rounded-full flex items-center gap-1">
          <Filter size={12} /> Опыт: 3+ лет
        </span>
        <span className="px-3 py-1 bg-blue-100 text-blue-600 text-xs rounded-full">Москва</span>
        <span className="px-3 py-1 bg-blue-100 text-blue-600 text-xs rounded-full">Remote</span>
      </div>
      <div className="text-xs text-gray-500 mb-2">Найдено: 47 кандидатов</div>
      <div className="space-y-2">
        {['Анна И.', 'Михаил К.', 'Елена С.'].map((name, i) => (
          <div key={i} className="flex items-center gap-3 p-2 bg-gray-50 rounded-lg">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full" />
            <div className="text-sm font-medium text-gray-700">{name}</div>
            <div className="ml-auto text-xs text-green-600">98% match</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ImportVisual() {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      <div className="border-2 border-dashed border-gray-200 rounded-xl p-8 text-center mb-4">
        <Upload className="mx-auto text-gray-400 mb-2" size={32} />
        <div className="text-sm text-gray-500">Перетащите Excel или CSV</div>
      </div>
      <div className="space-y-2">
        <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
          <CheckCircle className="text-green-500" size={18} />
          <span className="text-sm">candidates.xlsx</span>
          <span className="ml-auto text-xs text-green-600">247 записей</span>
        </div>
        <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-green-500 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </div>
    </div>
  );
}

function TriggersVisual() {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-5">
      <div className="space-y-3">
        <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg border border-blue-100">
          <Zap className="text-blue-500" size={20} />
          <div className="flex-1">
            <div className="text-sm font-medium">Новый отклик</div>
            <div className="text-xs text-gray-500">→ Отправить приветствие</div>
          </div>
          <div className="w-2 h-2 bg-green-500 rounded-full" />
        </div>
        <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg border border-purple-100">
          <Clock className="text-purple-500" size={20} />
          <div className="flex-1">
            <div className="text-sm font-medium">3 дня без активности</div>
            <div className="text-xs text-gray-500">→ Напомнить рекрутеру</div>
          </div>
          <div className="w-2 h-2 bg-green-500 rounded-full" />
        </div>
        <div className="flex items-center gap-3 p-3 bg-orange-50 rounded-lg border border-orange-100">
          <Bell className="text-orange-500" size={20} />
          <div className="flex-1">
            <div className="text-sm font-medium">Смена этапа → Оффер</div>
            <div className="text-xs text-gray-500">→ Уведомить HR-директора</div>
          </div>
          <div className="w-2 h-2 bg-green-500 rounded-full" />
        </div>
      </div>
    </div>
  );
}

function NotificationsVisual() {
  return (
    <div className="space-y-3">
      {[
        { icon: Mail, text: 'Новый отклик от Анны И.', time: 'Сейчас', color: 'blue' },
        { icon: Calendar, text: 'Интервью через 30 минут', time: '10 мин', color: 'purple' },
        { icon: CheckCircle, text: 'Михаил принял оффер!', time: '1 час', color: 'green' },
      ].map((n, i) => (
        <motion.div
          key={i}
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: i * 0.2 }}
          className="bg-white rounded-xl shadow-lg p-4 flex items-center gap-3"
        >
          <div className={`w-10 h-10 rounded-full flex items-center justify-center bg-${n.color}-100`}>
            <n.icon className={`text-${n.color}-500`} size={18} />
          </div>
          <div className="flex-1">
            <div className="text-sm font-medium">{n.text}</div>
            <div className="text-xs text-gray-400">{n.time}</div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

function TemplatesVisual() {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-5">
      <div className="flex items-center gap-2 mb-4">
        <FileText className="text-blue-500" size={20} />
        <span className="font-medium">Приглашение на интервью</span>
      </div>
      <div className="bg-gray-50 rounded-lg p-4 text-sm text-gray-600 space-y-2">
        <p>Здравствуйте, <span className="bg-blue-100 text-blue-600 px-1 rounded">{'{{имя}}'}</span>!</p>
        <p>Приглашаем вас на интервью по вакансии <span className="bg-blue-100 text-blue-600 px-1 rounded">{'{{вакансия}}'}</span>.</p>
        <p>Дата: <span className="bg-blue-100 text-blue-600 px-1 rounded">{'{{дата}}'}</span></p>
      </div>
      <div className="mt-3 flex gap-2">
        <span className="px-2 py-1 bg-gray-100 text-xs rounded">Приветствие</span>
        <span className="px-2 py-1 bg-gray-100 text-xs rounded">Отказ</span>
        <span className="px-2 py-1 bg-gray-100 text-xs rounded">Оффер</span>
      </div>
    </div>
  );
}

function FunnelVisual() {
  const stages = [
    { name: 'Отклики', count: 245, width: '100%', color: 'bg-blue-400' },
    { name: 'Скрининг', count: 120, width: '75%', color: 'bg-blue-500' },
    { name: 'Интервью', count: 45, width: '45%', color: 'bg-blue-600' },
    { name: 'Оффер', count: 12, width: '20%', color: 'bg-green-500' },
  ];
  return (
    <div className="bg-white rounded-2xl shadow-lg p-5">
      <div className="space-y-3">
        {stages.map((s, i) => (
          <div key={i}>
            <div className="flex justify-between text-sm mb-1">
              <span className="text-gray-600">{s.name}</span>
              <span className="font-medium">{s.count}</span>
            </div>
            <motion.div 
              className={`h-8 ${s.color} rounded-lg`}
              initial={{ width: 0 }}
              animate={{ width: s.width }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

function MetricsVisual() {
  return (
    <div className="grid grid-cols-2 gap-3">
      {[
        { label: 'Time-to-hire', value: '18 дней', icon: Clock, trend: '-3 дня' },
        { label: 'Cost-per-hire', value: '45 000 ₽', icon: TrendingUp, trend: '-12%' },
        { label: 'Конверсия', value: '4.8%', icon: PieChart, trend: '+0.5%' },
        { label: 'Качество', value: '92%', icon: CheckCircle, trend: '+8%' },
      ].map((m, i) => (
        <motion.div
          key={i}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: i * 0.1 }}
          className="bg-white rounded-xl shadow p-4"
        >
          <m.icon className="text-blue-500 mb-2" size={20} />
          <div className="text-2xl font-bold text-gray-900">{m.value}</div>
          <div className="text-xs text-gray-500">{m.label}</div>
          <div className="text-xs text-green-500 mt-1">{m.trend}</div>
        </motion.div>
      ))}
    </div>
  );
}

function ReportsVisual() {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-5">
      <div className="flex items-center justify-between mb-4">
        <span className="font-medium">Еженедельный отчёт</span>
        <span className="text-xs text-gray-400">PDF • Excel</span>
      </div>
      <div className="space-y-3">
        {['Воронка по вакансиям', 'Эффективность рекрутеров', 'Источники кандидатов'].map((r, i) => (
          <div key={i} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
            <BarChart3 className="text-blue-500" size={18} />
            <span className="text-sm">{r}</span>
            <CheckCircle className="ml-auto text-green-500" size={16} />
          </div>
        ))}
      </div>
    </div>
  );
}

function JobSitesVisual() {
  return (
    <div className="grid grid-cols-2 gap-3">
      {[
        { name: 'HH.ru', count: '12 вакансий', color: 'bg-red-500' },
        { name: 'Avito', count: '8 вакансий', color: 'bg-green-500' },
        { name: 'SuperJob', count: '5 вакансий', color: 'bg-blue-500' },
        { name: 'Работа.ру', count: '3 вакансии', color: 'bg-purple-500' },
      ].map((site, i) => (
        <motion.div
          key={i}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: i * 0.1 }}
          className="bg-white rounded-xl shadow p-4 flex items-center gap-3"
        >
          <div className={`w-10 h-10 ${site.color} rounded-lg flex items-center justify-center text-white font-bold text-xs`}>
            {site.name.slice(0, 2)}
          </div>
          <div>
            <div className="font-medium text-sm">{site.name}</div>
            <div className="text-xs text-gray-500">{site.count}</div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

function CalendarVisual() {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-5">
      <div className="grid grid-cols-7 gap-1 text-center text-xs text-gray-400 mb-2">
        {['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'].map(d => <div key={d}>{d}</div>)}
      </div>
      <div className="grid grid-cols-7 gap-1">
        {[...Array(28)].map((_, i) => (
          <div 
            key={i} 
            className={`h-8 rounded flex items-center justify-center text-xs ${
              [5, 12, 18].includes(i) ? 'bg-blue-500 text-white' : 'bg-gray-50 text-gray-600'
            }`}
          >
            {i + 1}
          </div>
        ))}
      </div>
      <div className="mt-3 text-xs text-gray-500">3 интервью на этой неделе</div>
    </div>
  );
}

function MessengersVisual() {
  return (
    <div className="space-y-3">
      {[
        { name: 'Email', icon: Mail, status: 'Подключено', connected: true },
        { name: 'Telegram', icon: MessageSquare, status: 'Подключено', connected: true },
        { name: 'WhatsApp', icon: Phone, status: 'Настроить', connected: false },
      ].map((m, i) => (
        <div key={i} className="bg-white rounded-xl shadow p-4 flex items-center gap-3">
          <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${m.connected ? 'bg-green-100' : 'bg-gray-100'}`}>
            <m.icon className={m.connected ? 'text-green-500' : 'text-gray-400'} size={20} />
          </div>
          <div className="flex-1">
            <div className="font-medium text-sm">{m.name}</div>
            <div className={`text-xs ${m.connected ? 'text-green-500' : 'text-gray-400'}`}>{m.status}</div>
          </div>
          {m.connected && <CheckCircle className="text-green-500" size={18} />}
        </div>
      ))}
    </div>
  );
}

function APIVisual() {
  return (
    <div className="bg-gray-900 rounded-2xl p-5 text-sm font-mono">
      <div className="text-gray-400 mb-2">// Получить кандидатов</div>
      <div className="text-green-400">GET /api/v1/candidates</div>
      <div className="mt-4 text-gray-400 mb-2">// Response</div>
      <div className="text-blue-300">{'{'}</div>
      <div className="pl-4 text-yellow-300">"total": <span className="text-purple-300">247</span>,</div>
      <div className="pl-4 text-yellow-300">"data": [...]</div>
      <div className="text-blue-300">{'}'}</div>
    </div>
  );
}

// Единая тема для всех заставок
const sectionTheme = {
  bg: 'from-[#0c1929] via-[#0f2744] to-[#0c1929]',
  accent: '#1890ff',
  glow: 'rgba(24, 144, 255, 0.5)',
};

// Анимированный экран-заставка с заголовком
function SectionTitleScreen({ title, icon: Icon, index }: { title: string; icon: React.ComponentType<{ size?: number; className?: string }>; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-10%' });
  const theme = sectionTheme;
  
  return (
    <section 
      ref={ref}
      className={`relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br ${theme.bg}`}
    >
      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-20">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(${theme.accent}20 1px, transparent 1px), linear-gradient(90deg, ${theme.accent}20 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 6 + 2,
              height: Math.random() * 6 + 2,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: theme.accent,
              boxShadow: `0 0 ${10 + Math.random() * 20}px ${theme.glow}`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>
      
      {/* Animated circles/waves */}
      <div className="absolute inset-0 flex items-center justify-center">
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full border"
            style={{
              width: 200 + i * 150,
              height: 200 + i * 150,
              borderColor: `${theme.accent}${20 - i * 4}`,
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={isInView ? {
              scale: [0, 1.2, 1],
              opacity: [0, 0.6, 0.2],
            } : {}}
            transition={{
              duration: 1.5,
              delay: i * 0.15,
              ease: 'easeOut',
            }}
          />
        ))}
      </div>
      
      {/* Glowing orbs */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full"
        style={{
          background: `radial-gradient(circle, ${theme.glow} 0%, transparent 70%)`,
          filter: 'blur(60px)',
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      
      {/* Main content */}
      <div className="relative z-10 text-center px-4">
        {/* Animated title */}
        <div className="overflow-hidden mb-6">
          <motion.h2
            initial={{ y: 120, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ 
              duration: 0.8,
              delay: 0.2,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="text-5xl md:text-6xl lg:text-8xl font-bold text-white tracking-tight"
          >
            {title}
          </motion.h2>
        </div>
        
        {/* Animated underline */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={isInView ? { scaleX: 1, opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mx-auto h-1.5 w-32 rounded-full mb-12"
          style={{
            background: `linear-gradient(90deg, transparent, ${theme.accent}, transparent)`,
            boxShadow: `0 0 20px ${theme.glow}`,
          }}
        />
        
        {/* Scroll indicator - below title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            className="flex flex-col items-center text-gray-400"
          >
            <span className="text-sm mb-2">Листайте вниз</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Corner decorations */}
      <motion.div
        className="absolute top-0 left-0 w-64 h-64"
        style={{
          background: `radial-gradient(circle at top left, ${theme.accent}30 0%, transparent 70%)`,
        }}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 1, delay: 0.3 }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-96 h-96"
        style={{
          background: `radial-gradient(circle at bottom right, ${theme.accent}20 0%, transparent 70%)`,
        }}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 1, delay: 0.5 }}
      />
      
      {/* Bottom transition to light content */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}

// Конфигурация блоков
const blocks = [
  {
    badge: 'База кандидатов',
    title: 'Единая база данных',
    subtitle: 'Все кандидаты, история и коммуникации в одном месте',
    icon: Database,
    bgColor: 'from-[#f0f7ff] to-white',
    tabs: [
      { id: 'cards', label: 'КАРТОЧКИ', title: 'Полная карточка кандидата', description: 'Вся информация о кандидате собрана в одном месте.', features: ['Контакты и резюме', 'Теги и заметки', 'История изменений', 'Кастомные поля'], visual: CandidateCardVisual },
      { id: 'dedup', label: 'ДЕДУПЛИКАЦИЯ', title: 'Умная дедупликация', description: 'Автоматическое определение дубликатов.', features: ['Авто-определение', 'Объединение профилей', 'AI-сопоставление'], visual: DeduplicationVisual },
      { id: 'search', label: 'ПОИСК', title: 'Мощный поиск', description: 'Находите нужных кандидатов за секунды.', features: ['Глобальный поиск', 'Умные фильтры', 'Сохранённые запросы'], visual: SearchVisual },
      { id: 'import', label: 'ИМПОРТ', title: 'Импорт данных', description: 'Загружайте базы из любых источников.', features: ['Excel/CSV', 'Массовые действия', 'Экспорт'], visual: ImportVisual },
    ],
  },
  {
    badge: 'Автоматизация',
    title: 'Автоматизируйте рутину',
    subtitle: 'Освободите время для важных задач',
    icon: Workflow,
    bgColor: 'from-[#f5f0ff] to-white',
    tabs: [
      { id: 'triggers', label: 'ТРИГГЕРЫ', title: 'Автоматические действия', description: 'Настройте триггеры на события.', features: ['Триггеры по событиям', 'Цепочки действий', 'Условная логика'], visual: TriggersVisual },
      { id: 'notifications', label: 'УВЕДОМЛЕНИЯ', title: 'Умные уведомления', description: 'Никогда не пропустите важное.', features: ['Email', 'Telegram', 'Push', 'Эскалации'], visual: NotificationsVisual },
      { id: 'templates', label: 'ШАБЛОНЫ', title: 'Шаблоны сообщений', description: 'Экономьте время с готовыми шаблонами.', features: ['Email шаблоны', 'Переменные', 'Мультиязычность'], visual: TemplatesVisual },
    ],
  },
  {
    badge: 'Аналитика',
    title: 'Данные для решений',
    subtitle: 'Отслеживайте эффективность найма',
    icon: BarChart3,
    bgColor: 'from-[#f0fff4] to-white',
    tabs: [
      { id: 'funnel', label: 'ВОРОНКА', title: 'Аналитика воронки', description: 'Конверсия на каждом этапе.', features: ['Конверсия', 'Сравнение периодов', 'Фильтры'], visual: FunnelVisual },
      { id: 'metrics', label: 'МЕТРИКИ', title: 'Ключевые метрики', description: 'Time-to-hire, стоимость, качество.', features: ['Time-to-hire', 'Cost-per-hire', 'Retention'], visual: MetricsVisual },
      { id: 'reports', label: 'ОТЧЁТЫ', title: 'Готовые отчёты', description: 'Автоматические отчёты для руководства.', features: ['Еженедельные', 'По вакансиям', 'Кастомные'], visual: ReportsVisual },
    ],
  },
  {
    badge: 'Интеграции',
    title: 'Всё подключено',
    subtitle: 'Работайте с привычными инструментами',
    icon: Link2,
    bgColor: 'from-[#fff7e6] to-white',
    tabs: [
      { id: 'jobsites', label: 'ДЖОБ-САЙТЫ', title: 'Интеграция с площадками', description: 'HH.ru, Avito, SuperJob.', features: ['Публикация вакансий', 'Авто-импорт откликов'], visual: JobSitesVisual },
      { id: 'calendar', label: 'КАЛЕНДАРИ', title: 'Синхронизация', description: 'Google, Outlook, Apple.', features: ['Синхронизация', 'Приглашения'], visual: CalendarVisual },
      { id: 'messengers', label: 'МЕССЕНДЖЕРЫ', title: 'Чаты и email', description: 'Вся переписка в одном окне.', features: ['Email', 'Telegram', 'WhatsApp'], visual: MessengersVisual },
      { id: 'api', label: 'API', title: 'Открытый API', description: 'Интеграция с любыми системами.', features: ['REST API', 'Webhooks', 'SDK'], visual: APIVisual },
    ],
  },
];

function FeatureBlock({ block, index, isLast }: { block: typeof blocks[0]; index: number; isLast: boolean }) {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const activeContent = block.tabs[activeTabIndex];
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-10%' });

  return (
    <section 
      ref={ref} 
      className="min-h-screen flex flex-col justify-center relative py-20"
      style={{
        background: index % 2 === 0 
          ? 'linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)' 
          : 'linear-gradient(180deg, #f8fafc 0%, #ffffff 100%)',
      }}
    >
      {/* Subtle decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute top-0 right-0 w-[800px] h-[800px] opacity-30"
          style={{
            background: 'radial-gradient(circle, #1890ff10 0%, transparent 70%)',
            transform: 'translate(30%, -30%)',
          }}
        />
        <div 
          className="absolute bottom-0 left-0 w-[600px] h-[600px] opacity-20"
          style={{
            background: 'radial-gradient(circle, #1890ff10 0%, transparent 70%)',
            transform: 'translate(-30%, 30%)',
          }}
        />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-14 h-14 mb-6 bg-gradient-to-br from-[#1890ff] to-[#40a9ff] rounded-2xl shadow-lg shadow-[#1890ff]/20">
            <block.icon size={28} className="text-white" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">{block.title}</h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">{block.subtitle}</p>
        </motion.div>

        {/* Main content area with sidebar navigation */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          
          {/* Left sidebar - Vertical tabs */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="lg:w-72 flex-shrink-0"
          >
            <div className="lg:sticky lg:top-24 space-y-2">
              {block.tabs.map((tab, i) => (
                <motion.button
                  key={tab.id}
                  onClick={() => setActiveTabIndex(i)}
                  className={`w-full text-left p-4 rounded-2xl transition-all duration-300 group ${
                    activeTabIndex === i
                      ? 'bg-[#1890ff] text-white shadow-xl shadow-[#1890ff]/25'
                      : 'bg-white hover:bg-gray-50 text-gray-700 shadow-sm hover:shadow-md border border-gray-100'
                  }`}
                  whileHover={{ x: activeTabIndex === i ? 0 : 4 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className={`text-xs font-medium uppercase tracking-wider mb-1 ${
                        activeTabIndex === i ? 'text-white/70' : 'text-gray-400'
                      }`}>
                        0{i + 1}
                      </div>
                      <div className="font-semibold">{tab.label}</div>
                    </div>
                    <motion.div
                      animate={{ x: activeTabIndex === i ? 0 : -5, opacity: activeTabIndex === i ? 1 : 0 }}
                      className="text-white"
                    >
                      →
                    </motion.div>
                  </div>
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Right content area - Fixed height */}
          <div className="flex-1 min-h-[550px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeContent.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                className="h-full"
              >
                <div className="bg-white rounded-3xl shadow-xl shadow-gray-200/50 border border-gray-100 overflow-hidden h-full">
                  <div className="grid lg:grid-cols-2 h-full">
                    {/* Visual area - takes more space */}
                    <div className="bg-gradient-to-br from-[#f0f7ff] via-[#e6f4ff] to-[#d6ebff] p-8 lg:p-12 flex items-center justify-center min-h-[300px] lg:min-h-full">
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="w-full max-w-md transform hover:scale-105 transition-transform duration-500"
                      >
                        <activeContent.visual />
                      </motion.div>
                    </div>

                    {/* Text content */}
                    <div className="p-8 lg:p-12 flex flex-col justify-center">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                      >
                        <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                          {activeContent.title}
                        </h3>
                        <p className="text-gray-500 mb-8 text-lg leading-relaxed">
                          {activeContent.description}
                        </p>
                        <ul className="space-y-4">
                          {activeContent.features.map((feature, i) => (
                            <motion.li
                              key={feature}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.2 + i * 0.08 }}
                              className="flex items-center gap-3"
                            >
                              <div className="w-6 h-6 rounded-full bg-[#e6f4ff] flex items-center justify-center flex-shrink-0">
                                <CheckCircle className="text-[#1890ff]" size={14} />
                              </div>
                              <span className="text-gray-700">{feature}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
      
      {/* Bottom gradient for last block to transition to dark Pipeline */}
      {isLast && (
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-[#0c1929]/20" />
      )}
    </section>
  );
}

export default function Features() {
  const titleRef = useRef(null);
  const isInView = useInView(titleRef, { once: true });

  return (
    <>
      <section id="features" className="py-16 bg-white">
        <Container>
          <div ref={titleRef} className="text-center">
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

      {blocks.map((block, index) => (
        <div key={block.badge}>
          <SectionTitleScreen title={block.badge} icon={block.icon} index={index} />
          <FeatureBlock block={block} index={index} isLast={index === blocks.length - 1} />
        </div>
      ))}
    </>
  );
}
