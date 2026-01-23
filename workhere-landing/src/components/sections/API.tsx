'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Search, FileSpreadsheet, Users, Send, Database, Building2, BarChart3 } from 'lucide-react';
import Container from '../ui/Container';

// Карточки с разными размерами и позициями
const apiCards = [
  {
    id: 1,
    title: 'Интерактивная документация',
    visual: 'docs',
    size: 'large',
    direction: { x: -150, y: -80 },
  },
  {
    id: 2,
    title: 'Передавайте заявки из интранета',
    visual: 'icon',
    icon: Send,
    size: 'medium',
    direction: { x: 0, y: -120 },
  },
  {
    id: 3,
    title: 'Отправляйте финалистов в HR-систему',
    visual: 'icon',
    icon: Users,
    size: 'medium',
    direction: { x: 150, y: -80 },
  },
  {
    id: 4,
    title: 'Разработайте индивидуальные Excel-отчёты',
    visual: 'excel',
    size: 'medium',
    direction: { x: -200, y: 0 },
  },
  {
    id: 5,
    title: 'Песочница для экспериментов',
    visual: 'sandbox',
    size: 'large',
    direction: { x: 200, y: 0 },
  },
  {
    id: 6,
    title: 'Передавайте отклики с карьерного сайта',
    visual: 'icon',
    icon: Database,
    size: 'small',
    direction: { x: 100, y: -50 },
  },
  {
    id: 7,
    title: 'Вебхуки для интеграций',
    visual: 'webhooks',
    size: 'xlarge',
    direction: { x: -180, y: 100 },
  },
  {
    id: 8,
    title: 'Экспортируйте данные в BI-систему',
    visual: 'icon',
    icon: BarChart3,
    size: 'medium',
    direction: { x: 0, y: 150 },
  },
  {
    id: 9,
    title: 'Загружайте справочник подразделений',
    visual: 'icon',
    icon: Building2,
    size: 'small',
    direction: { x: 180, y: 100 },
  },
];

// Визуальные компоненты для карточек
function DocsVisual() {
  return (
    <div className="bg-white rounded-xl p-3 shadow-lg mb-4 w-full max-w-[180px]">
      <div className="flex items-center gap-2 mb-2">
        <div className="w-6 h-6 bg-[#1890ff] rounded flex items-center justify-center">
          <Code2 size={14} className="text-white" />
        </div>
        <span className="text-xs font-medium text-gray-700">For developers</span>
      </div>
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-xs text-gray-500">API</span>
          <div className="w-6 h-6 bg-[#1890ff] rounded flex items-center justify-center">
            <Search size={12} className="text-white" />
          </div>
        </div>
        <div className="text-xs text-gray-400">Request</div>
        <div className="h-2 bg-[#1890ff] rounded w-full" />
        <div className="h-2 bg-[#1890ff]/60 rounded w-3/4" />
      </div>
    </div>
  );
}

function ExcelVisual() {
  return (
    <div className="w-16 h-16 bg-white rounded-xl shadow-lg flex items-center justify-center mb-3">
      <div className="w-12 h-12 bg-[#217346] rounded-lg flex items-center justify-center">
        <span className="text-white font-bold text-xl">X</span>
      </div>
    </div>
  );
}

function SandboxVisual() {
  return (
    <div className="bg-gray-900 rounded-xl p-3 shadow-lg mb-4 w-full max-w-[200px] font-mono text-[10px]">
      <div className="flex items-center gap-1.5 mb-2">
        <div className="w-2 h-2 rounded-full bg-red-500" />
        <div className="w-2 h-2 rounded-full bg-yellow-500" />
        <div className="w-2 h-2 rounded-full bg-green-500" />
        <span className="ml-2 text-gray-500">Sandbox</span>
      </div>
      <div className="text-gray-300">{'{'}</div>
      <div className="pl-2 text-gray-300">"id": <span className="text-purple-400">19083</span>,</div>
      <div className="pl-2 text-gray-300">"name": <span className="text-green-400">"Fox Finance"</span>,</div>
      <div className="pl-2 text-gray-300">"nick": <span className="text-green-400">"foxfinance"</span>,</div>
      <div className="pl-2 text-gray-300">"member_type": <span className="text-green-400">"owner"</span></div>
      <div className="text-gray-300">{'}'}</div>
    </div>
  );
}

function WebhooksVisual() {
  return (
    <div className="flex items-center justify-center gap-3 mb-4">
      {/* Telegram */}
      <motion.div 
        className="w-12 h-12 bg-[#26A5E4] rounded-xl flex items-center justify-center shadow-lg"
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 2, repeat: Infinity, delay: 0 }}
      >
        <svg viewBox="0 0 24 24" className="w-6 h-6 text-white fill-current">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27-.02-.12.02-1.96 1.25-5.54 3.67-.52.36-1 .53-1.42.52-.47-.01-1.37-.26-2.03-.48-.82-.27-1.47-.42-1.42-.88.03-.24.37-.49 1.02-.75 3.98-1.73 6.64-2.87 7.97-3.43 3.79-1.52 4.58-1.78 5.08-1.79.11 0 .36.03.52.17.14.12.18.28.2.45-.02.07-.02.27-.04.43z"/>
        </svg>
      </motion.div>
      {/* 1C */}
      <motion.div 
        className="w-12 h-12 bg-[#FFD700] rounded-xl flex items-center justify-center shadow-lg"
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
      >
        <span className="text-red-600 font-bold text-lg">1С</span>
      </motion.div>
      {/* Center hub */}
      <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-xl border-2 border-[#1890ff]/20">
        <div className="w-10 h-10 bg-[#1890ff] rounded-xl flex items-center justify-center">
          <Code2 size={20} className="text-white" />
        </div>
      </div>
      {/* CRM */}
      <motion.div 
        className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center shadow-lg"
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
      >
        <span className="text-white font-bold text-xs">CRM</span>
      </motion.div>
      {/* Slack */}
      <motion.div 
        className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-lg"
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 2, repeat: Infinity, delay: 0.9 }}
      >
        <svg viewBox="0 0 24 24" className="w-6 h-6">
          <path fill="#E01E5A" d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52z"/>
          <path fill="#36C5F0" d="M15.165 5.042a2.528 2.528 0 0 1 2.523-2.52A2.528 2.528 0 0 1 20.21 5.044a2.527 2.527 0 0 1-2.52 2.522h-2.52v-2.52z"/>
          <path fill="#2EB67D" d="M5.042 8.835a2.528 2.528 0 0 1-2.52-2.523A2.528 2.528 0 0 1 5.044 3.79a2.527 2.527 0 0 1 2.52 2.522v2.52H5.042z"/>
          <path fill="#ECB22E" d="M8.835 18.958a2.528 2.528 0 0 1 2.523 2.52A2.528 2.528 0 0 1 8.835 24a2.527 2.527 0 0 1-2.52-2.522v-2.52h2.52z"/>
        </svg>
      </motion.div>
    </div>
  );
}

function IconVisual({ icon: Icon }: { icon: typeof Send }) {
  return (
    <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mb-3">
      <Icon size={28} className="text-white" />
    </div>
  );
}

export default function API() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: '-10%' });

  return (
    <section 
      ref={ref}
      className="relative py-24 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #0c1929 0%, #1a1a3e 25%, #2d1b4e 50%, #1a1a3e 75%, #0c1929 100%)',
      }}
    >
      {/* Smooth transition from previous section */}
      <div 
        className="absolute top-0 left-0 right-0 h-32 z-[1]"
        style={{
          background: 'linear-gradient(180deg, #0c1929 0%, transparent 100%)',
        }}
      />
      
      {/* Background grid */}
      <div className="absolute inset-0 opacity-[0.06]">
        <div 
          style={{
            backgroundImage: 'linear-gradient(rgba(139,92,246,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.5) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
          className="absolute inset-0"
        />
      </div>
      
      {/* Floating particles */}
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: 2 + Math.random() * 4,
            height: 2 + Math.random() * 4,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            background: i % 2 === 0 ? '#8b5cf6' : '#1890ff',
            boxShadow: `0 0 ${6 + Math.random() * 10}px ${i % 2 === 0 ? 'rgba(139,92,246,0.6)' : 'rgba(24,144,255,0.6)'}`,
          }}
          animate={{
            y: [0, -30 - Math.random() * 40, 0],
            x: [0, (Math.random() - 0.5) * 30, 0],
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 4 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 3,
            ease: 'easeInOut',
          }}
        />
      ))}
      
      {/* Glowing orbs - blue and purple */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(139,92,246,0.25) 0%, transparent 70%)',
          top: '5%',
          left: '-15%',
          filter: 'blur(40px)',
        }}
        animate={{ scale: [1, 1.3, 1], x: [0, 50, 0], y: [0, 30, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(24,144,255,0.2) 0%, transparent 70%)',
          top: '50%',
          right: '-10%',
          filter: 'blur(30px)',
        }}
        animate={{ scale: [1.2, 1, 1.2], y: [0, -50, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute w-[450px] h-[450px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(168,85,247,0.2) 0%, transparent 70%)',
          bottom: '0%',
          left: '30%',
          filter: 'blur(35px)',
        }}
        animate={{ scale: [1, 1.2, 1], x: [0, -30, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
      />
      
      {/* Moving light streaks */}
      <motion.div
        className="absolute w-[2px] h-[100px] pointer-events-none"
        style={{
          background: 'linear-gradient(180deg, transparent, rgba(139,92,246,0.5), transparent)',
          left: '20%',
          top: '-100px',
        }}
        animate={{ y: [0, 800], opacity: [0, 1, 0] }}
        transition={{ duration: 3, repeat: Infinity, delay: 0, ease: 'linear' }}
      />
      <motion.div
        className="absolute w-[2px] h-[80px] pointer-events-none"
        style={{
          background: 'linear-gradient(180deg, transparent, rgba(24,144,255,0.5), transparent)',
          left: '70%',
          top: '-80px',
        }}
        animate={{ y: [0, 700], opacity: [0, 1, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, delay: 1.5, ease: 'linear' }}
      />
      <motion.div
        className="absolute w-[2px] h-[60px] pointer-events-none"
        style={{
          background: 'linear-gradient(180deg, transparent, rgba(168,85,247,0.4), transparent)',
          left: '45%',
          top: '-60px',
        }}
        animate={{ y: [0, 600], opacity: [0, 1, 0] }}
        transition={{ duration: 2, repeat: Infinity, delay: 2.5, ease: 'linear' }}
      />

      <Container className="relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-gradient-to-r from-[#8b5cf6]/20 to-[#1890ff]/20 border border-[#8b5cf6]/30 rounded-full"
          >
            <Code2 size={16} className="text-[#a78bfa]" />
            <span className="text-sm font-medium text-[#a78bfa]">Для разработчиков</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: isInView ? 0.1 : 0, duration: 0.5 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            Суперсила API
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: isInView ? 0.2 : 0, duration: 0.5 }}
            className="text-xl text-white/70 max-w-2xl mx-auto mb-8"
          >
            Интегрируйте WorkHere в экосистему вашей компании
          </motion.p>
          
          <motion.a
            href="#demo"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.3 }}
            whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(139,92,246,0.4)' }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#8b5cf6] to-[#1890ff] text-white rounded-full font-medium hover:from-[#a78bfa] hover:to-[#40a9ff] transition-all"
          >
            Портал для разработчиков
          </motion.a>
        </motion.div>

        {/* Artistic floating cards */}
        <div className="relative max-w-6xl mx-auto">
          <div className="grid grid-cols-12 gap-5 lg:gap-6">
            
            {/* Card 1 - Docs - glass morphism with glow */}
            <motion.div
              initial={{ opacity: 0, x: -200, rotate: -5 }}
              animate={isInView ? { opacity: 1, x: 0, rotate: -1 } : { opacity: 0, x: -200, rotate: -5 }}
              transition={{ duration: 1.2, delay: isInView ? 0.2 : 0, type: 'spring', stiffness: 40 }}
              whileHover={{ rotate: 0, y: -8, scale: 1.02 }}
              className="col-span-12 md:col-span-5 relative group"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-[#8b5cf6] to-[#1890ff] rounded-[2rem] opacity-20 group-hover:opacity-40 blur-xl transition-opacity" />
              <div className="relative bg-white/[0.08] backdrop-blur-2xl rounded-[2rem] p-8 border border-white/10 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#8b5cf6]/20 to-transparent rounded-bl-full" />
                <DocsVisual />
                <h3 className="text-xl font-semibold text-white mt-4">Интерактивная документация</h3>
                <p className="text-white/40 text-sm mt-2">Полное руководство с живыми примерами</p>
              </div>
            </motion.div>
            
            {/* Card 2 - Send - organic shape */}
            <motion.div
              initial={{ opacity: 0, y: -180 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -180 }}
              transition={{ duration: 1.1, delay: isInView ? 0.3 : 0, type: 'spring', stiffness: 45 }}
              whileHover={{ y: -12 }}
              className="col-span-6 md:col-span-3"
            >
              <div className="h-full bg-gradient-to-b from-[#a78bfa]/15 to-white/5 backdrop-blur-2xl rounded-[2rem] p-6 border border-white/10 hover:border-[#a78bfa]/30 transition-all">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#8b5cf6] to-[#7c3aed] flex items-center justify-center shadow-lg shadow-purple-500/25">
                  <Send size={24} className="text-white" />
                </div>
                <h3 className="text-base font-semibold text-white mt-5">Заявки из интранета</h3>
                <p className="text-white/35 text-sm mt-2">Прямая интеграция</p>
              </div>
            </motion.div>
            
            {/* Card 3 - HR system */}
            <motion.div
              initial={{ opacity: 0, x: 180, rotate: 3 }}
              animate={isInView ? { opacity: 1, x: 0, rotate: 2 } : { opacity: 0, x: 180, rotate: 3 }}
              transition={{ duration: 1.1, delay: isInView ? 0.35 : 0, type: 'spring', stiffness: 45 }}
              whileHover={{ rotate: 0, scale: 1.03 }}
              className="col-span-6 md:col-span-4"
            >
              <div className="h-full bg-white/[0.06] backdrop-blur-2xl rounded-[2rem] p-6 border border-white/10 hover:bg-white/10 transition-all">
                <Users size={28} className="text-[#60a5fa]" />
                <h3 className="text-base font-semibold text-white mt-4">Финалисты в HR</h3>
                <p className="text-white/35 text-sm mt-2">Автоматическая передача данных</p>
              </div>
            </motion.div>
            
            {/* Card 4 - Excel - accent card */}
            <motion.div
              initial={{ opacity: 0, x: -220, rotate: -8 }}
              animate={isInView ? { opacity: 1, x: 0, rotate: -2 } : { opacity: 0, x: -220, rotate: -8 }}
              transition={{ duration: 1.2, delay: isInView ? 0.45 : 0, type: 'spring', stiffness: 40 }}
              whileHover={{ rotate: 0, y: -8 }}
              className="col-span-6 md:col-span-3"
            >
              <div className="relative overflow-hidden bg-gradient-to-br from-emerald-500/15 to-white/5 backdrop-blur-2xl rounded-[2rem] p-6 border border-emerald-500/20 hover:border-emerald-400/40 transition-all">
                <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-emerald-500/10 rounded-full blur-xl" />
                <ExcelVisual />
                <h3 className="text-base font-semibold text-white mt-2">Excel-отчёты</h3>
              </div>
            </motion.div>
            
            {/* Card 5 - Sandbox - hero card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.85 }}
              transition={{ duration: 1.3, delay: isInView ? 0.5 : 0, type: 'spring', stiffness: 35 }}
              whileHover={{ scale: 1.02 }}
              className="col-span-12 md:col-span-6 relative group"
            >
              <div className="absolute -inset-2 bg-gradient-to-r from-[#8b5cf6]/30 via-[#1890ff]/20 to-[#8b5cf6]/30 rounded-[2.5rem] opacity-40 group-hover:opacity-60 blur-2xl transition-opacity" />
              <div className="relative bg-gray-900/80 backdrop-blur-2xl rounded-[2rem] p-8 border border-white/10 shadow-2xl">
                <SandboxVisual />
                <h3 className="text-xl font-semibold text-white mt-4">Песочница</h3>
                <p className="text-white/40 text-sm mt-2">Безопасные эксперименты с API</p>
              </div>
            </motion.div>
            
            {/* Card 6 - Departments - minimal */}
            <motion.div
              initial={{ opacity: 0, x: 200 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 200 }}
              transition={{ duration: 1.1, delay: isInView ? 0.55 : 0, type: 'spring', stiffness: 45 }}
              whileHover={{ x: 5 }}
              className="col-span-6 md:col-span-3"
            >
              <div className="h-full bg-white/[0.04] backdrop-blur-xl rounded-[2rem] p-6 border border-white/5 hover:border-white/15 hover:bg-white/[0.08] transition-all">
                <Building2 size={26} className="text-[#a78bfa]" />
                <h3 className="text-base font-semibold text-white mt-4">Справочники</h3>
                <p className="text-white/30 text-sm mt-2">Структура компании</p>
              </div>
            </motion.div>
            
            {/* Card 7 - Webhooks - wide artistic */}
            <motion.div
              initial={{ opacity: 0, y: 180, rotate: 3 }}
              animate={isInView ? { opacity: 1, y: 0, rotate: 1 } : { opacity: 0, y: 180, rotate: 3 }}
              transition={{ duration: 1.3, delay: isInView ? 0.6 : 0, type: 'spring', stiffness: 35 }}
              whileHover={{ rotate: 0, y: -5 }}
              className="col-span-12 md:col-span-7 relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#8b5cf6]/15 to-[#1890ff]/15 rounded-[2rem] blur-xl opacity-50 group-hover:opacity-80 transition-opacity" />
              <div className="relative bg-white/[0.06] backdrop-blur-2xl rounded-[2rem] p-8 border border-white/10 overflow-hidden">
                <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-[#8b5cf6]/10 to-transparent rounded-tr-full" />
                <WebhooksVisual />
                <h3 className="text-xl font-semibold text-white mt-4">Вебхуки</h3>
                <p className="text-white/40 text-sm mt-1">Telegram · 1C · CRM · Slack</p>
              </div>
            </motion.div>
            
            {/* Card 8 - BI + More - combined artistic */}
            <motion.div
              initial={{ opacity: 0, x: 150, y: 100, rotate: 5 }}
              animate={isInView ? { opacity: 1, x: 0, y: 0, rotate: 2 } : { opacity: 0, x: 150, y: 100, rotate: 5 }}
              transition={{ duration: 1.2, delay: isInView ? 0.7 : 0, type: 'spring', stiffness: 40 }}
              whileHover={{ rotate: 0, scale: 1.03 }}
              className="col-span-12 md:col-span-5 relative group"
            >
              <div className="absolute -inset-1 bg-gradient-to-br from-[#60a5fa]/20 to-[#a78bfa]/20 rounded-[2rem] opacity-30 group-hover:opacity-50 blur-xl transition-opacity" />
              <div className="relative bg-gradient-to-br from-white/[0.08] to-white/[0.03] backdrop-blur-2xl rounded-[2rem] p-6 border border-white/10 flex gap-6">
                <div className="flex-1">
                  <BarChart3 size={28} className="text-[#60a5fa]" />
                  <h3 className="text-base font-semibold text-white mt-3">BI-экспорт</h3>
                  <p className="text-white/35 text-sm mt-1">Аналитика в любой формат</p>
                </div>
                <div className="flex-1 border-l border-white/10 pl-6">
                  <div className="text-2xl mb-2">✨</div>
                  <h3 className="text-base font-semibold text-white">+20 интеграций</h3>
                  <p className="text-white/35 text-sm mt-1">И это не предел</p>
                </div>
              </div>
            </motion.div>
            
          </div>
        </div>
      </Container>
    </section>
  );
}
