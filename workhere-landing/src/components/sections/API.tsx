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
  const isInView = useInView(ref, { once: true, margin: '-10%' });

  return (
    <section 
      ref={ref}
      className="relative py-24 overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #0c1929 0%, #0f2d4a 50%, #0f172a 100%)',
      }}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-[0.05]">
        <div 
          style={{
            backgroundImage: 'linear-gradient(rgba(24,144,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(24,144,255,0.3) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
          className="absolute inset-0"
        />
      </div>
      
      {/* Glowing orbs */}
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(24,144,255,0.15) 0%, transparent 70%)',
          top: '20%',
          left: '-10%',
        }}
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(24,144,255,0.1) 0%, transparent 70%)',
          bottom: '10%',
          right: '-5%',
        }}
        animate={{ scale: [1.1, 1, 1.1] }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      <Container className="relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-[#1890ff]/20 border border-[#1890ff]/30 rounded-full"
          >
            <Code2 size={16} className="text-[#1890ff]" />
            <span className="text-sm font-medium text-[#1890ff]">Для разработчиков</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            Суперсила API
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/70 max-w-2xl mx-auto mb-8"
          >
            Интегрируйте WorkHere в экосистему вашей компании
          </motion.p>
          
          <motion.a
            href="#demo"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(24,144,255,0.3)' }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#1890ff] text-white rounded-full font-medium hover:bg-[#40a9ff] transition-colors"
          >
            Портал для разработчиков
          </motion.a>
        </motion.div>

        {/* Creative card layout */}
        <div className="relative max-w-6xl mx-auto">
          {/* Row 1 - 3 cards */}
          <div className="grid grid-cols-12 gap-4 mb-4">
            {/* Docs - large */}
            <motion.div
              initial={{ opacity: 0, x: -150, y: -80 }}
              animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4, type: 'spring', stiffness: 80 }}
              className="col-span-12 md:col-span-4 bg-white/5 backdrop-blur-md rounded-3xl p-6 border border-[#1890ff]/20 flex flex-col items-center text-center hover:border-[#1890ff]/40 transition-colors"
            >
              <DocsVisual />
              <h3 className="text-lg font-bold text-white">Интерактивная документация</h3>
            </motion.div>
            
            {/* Send from intranet */}
            <motion.div
              initial={{ opacity: 0, y: -120 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5, type: 'spring', stiffness: 80 }}
              className="col-span-6 md:col-span-3 bg-white/5 backdrop-blur-md rounded-3xl p-5 border border-[#1890ff]/20 flex flex-col items-center text-center hover:border-[#1890ff]/40 transition-colors"
            >
              <IconVisual icon={Send} />
              <h3 className="text-sm font-bold text-white leading-tight">Передавайте заявки из интранета</h3>
            </motion.div>
            
            {/* Send to HR */}
            <motion.div
              initial={{ opacity: 0, x: 150, y: -80 }}
              animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6, type: 'spring', stiffness: 80 }}
              className="col-span-6 md:col-span-3 bg-white/5 backdrop-blur-md rounded-3xl p-5 border border-[#1890ff]/20 flex flex-col items-center text-center hover:border-[#1890ff]/40 transition-colors"
            >
              <IconVisual icon={Users} />
              <h3 className="text-sm font-bold text-white leading-tight">Отправляйте финалистов в HR-систему</h3>
            </motion.div>
            
            {/* Career site */}
            <motion.div
              initial={{ opacity: 0, x: 100, y: -50 }}
              animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.55, type: 'spring', stiffness: 80 }}
              className="col-span-12 md:col-span-2 bg-white/5 backdrop-blur-md rounded-3xl p-4 border border-[#1890ff]/20 flex flex-col items-center text-center justify-center hover:border-[#1890ff]/40 transition-colors"
            >
              <IconVisual icon={Database} />
              <h3 className="text-xs font-bold text-white leading-tight">Отклики с сайта</h3>
            </motion.div>
          </div>

          {/* Row 2 - asymmetric */}
          <div className="grid grid-cols-12 gap-4 mb-4">
            {/* Excel */}
            <motion.div
              initial={{ opacity: 0, x: -200 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.7, type: 'spring', stiffness: 80 }}
              className="col-span-6 md:col-span-3 bg-white/5 backdrop-blur-md rounded-3xl p-5 border border-[#1890ff]/20 flex flex-col items-center text-center hover:border-[#1890ff]/40 transition-colors"
            >
              <ExcelVisual />
              <h3 className="text-sm font-bold text-white leading-tight">Индивидуальные Excel-отчёты</h3>
            </motion.div>
            
            {/* Sandbox - large */}
            <motion.div
              initial={{ opacity: 0, x: 200 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.75, type: 'spring', stiffness: 80 }}
              className="col-span-12 md:col-span-5 bg-white/5 backdrop-blur-md rounded-3xl p-6 border border-[#1890ff]/20 flex flex-col items-center text-center hover:border-[#1890ff]/40 transition-colors"
            >
              <SandboxVisual />
              <h3 className="text-lg font-bold text-white">Песочница для экспериментов</h3>
            </motion.div>
            
            {/* Departments */}
            <motion.div
              initial={{ opacity: 0, x: 180, y: 50 }}
              animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8, type: 'spring', stiffness: 80 }}
              className="col-span-6 md:col-span-4 bg-white/5 backdrop-blur-md rounded-3xl p-5 border border-[#1890ff]/20 flex flex-col items-center text-center hover:border-[#1890ff]/40 transition-colors"
            >
              <IconVisual icon={Building2} />
              <h3 className="text-sm font-bold text-white leading-tight">Загружайте справочник подразделений</h3>
            </motion.div>
          </div>

          {/* Row 3 */}
          <div className="grid grid-cols-12 gap-4">
            {/* Webhooks - xlarge */}
            <motion.div
              initial={{ opacity: 0, x: -180, y: 100 }}
              animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.85, type: 'spring', stiffness: 80 }}
              className="col-span-12 md:col-span-6 bg-white/5 backdrop-blur-md rounded-3xl p-6 border border-[#1890ff]/20 flex flex-col items-center text-center hover:border-[#1890ff]/40 transition-colors"
            >
              <WebhooksVisual />
              <h3 className="text-lg font-bold text-white">Вебхуки для интеграций</h3>
            </motion.div>
            
            {/* BI export */}
            <motion.div
              initial={{ opacity: 0, y: 150 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.9, type: 'spring', stiffness: 80 }}
              className="col-span-6 md:col-span-3 bg-white/5 backdrop-blur-md rounded-3xl p-5 border border-[#1890ff]/20 flex flex-col items-center text-center hover:border-[#1890ff]/40 transition-colors"
            >
              <IconVisual icon={BarChart3} />
              <h3 className="text-sm font-bold text-white leading-tight">Экспортируйте данные в BI-систему</h3>
            </motion.div>
            
            {/* Empty decorative space / small card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.95, type: 'spring', stiffness: 80 }}
              className="col-span-6 md:col-span-3 bg-gradient-to-br from-[#1890ff]/20 to-[#1890ff]/5 backdrop-blur-md rounded-3xl p-5 border border-[#1890ff]/30 flex flex-col items-center justify-center text-center hover:border-[#1890ff]/50 transition-colors"
            >
              <div className="text-4xl mb-2">🚀</div>
              <h3 className="text-sm font-bold text-white leading-tight">И многое другое...</h3>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}
