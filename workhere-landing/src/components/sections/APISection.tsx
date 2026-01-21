'use client';

import { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import Container from '../ui/Container';
import TextReveal from '../ui/TextReveal';
import { Code2, Webhook, Plug, Database, MessageSquare, Phone, BarChart3, Bot } from 'lucide-react';

const useCases = [
  { icon: MessageSquare, title: 'Telegram-боты', description: 'Уведомления о новых откликах, интервью и решениях', code: 'POST /webhooks/telegram', color: '#1890ff', side: 'left' },
  { icon: Phone, title: 'Телефония', description: 'Интеграция с АТС: звонки из карточки, запись разговоров', code: 'GET /api/v1/calls/:id', color: '#40a9ff', side: 'right' },
  { icon: BarChart3, title: 'BI-системы', description: 'Выгрузка данных в DWH для кастомных дашбордов', code: 'GET /api/v1/analytics/export', color: '#69c0ff', side: 'left' },
  { icon: Bot, title: 'HR-боты', description: 'Автоматизация сбора обратной связи и скрининга', code: 'POST /api/v1/candidates/screen', color: '#1890ff', side: 'right' },
  { icon: Database, title: 'CRM-синхронизация', description: 'Двусторонняя синхронизация контактов с CRM', code: 'PATCH /api/v1/sync/crm', color: '#40a9ff', side: 'left' },
  { icon: Plug, title: 'Карьерный сайт', description: 'Виджет откликов для вашего сайта', code: 'GET /api/v1/vacancies/public', color: '#69c0ff', side: 'right' },
];

const codeExample = `// Получение списка кандидатов
const response = await fetch(
  'https://api.workhere.ru/v1/candidates',
  {
    headers: {
      'Authorization': 'Bearer YOUR_API_KEY',
      'Content-Type': 'application/json'
    }
  }
);

const candidates = await response.json();
console.log(\`Найдено: \${candidates.total}\`);`;

export default function APISection() {
  const containerRef = useRef(null);

  return (
    <section ref={containerRef} className="py-32 bg-gradient-to-b from-gray-900 via-gray-950 to-black overflow-hidden">
      <Container>
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-20">
          <motion.div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full border border-gray-700 bg-gray-900/50" whileHover={{ scale: 1.05 }}><Code2 className="text-[#1890ff]" size={16} /><span className="text-sm text-gray-400">Developer-first</span></motion.div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"><TextReveal>Открытый API</TextReveal></h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">REST API и вебхуки для интеграции с любыми системами. Полная документация и SDK.</p>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
          {[{ value: '150+', label: 'Эндпоинтов' },{ value: '99.9%', label: 'Uptime API' },{ value: '<100ms', label: 'Время ответа' },{ value: 'v2.0', label: 'Версия API' }].map((stat, i) => (<motion.div key={stat.label} className="p-6 rounded-[16px] bg-gray-800/30 border border-gray-800 text-center" initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}><div className="text-2xl md:text-3xl font-bold text-[#1890ff] mb-1">{stat.value}</div><div className="text-sm text-gray-500">{stat.label}</div></motion.div>))}
        </motion.div>
        <div className="relative mb-20">
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gray-700 to-transparent hidden md:block" />
          {useCases.map((useCase, i) => {
            const isLeft = useCase.side === 'left';
            return (
              <motion.div key={useCase.title} className={`relative flex items-center gap-8 mb-12 ${isLeft ? 'justify-start' : 'justify-end'}`} initial={{ opacity: 0, x: isLeft ? -200 : 200 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: '-100px' }} transition={{ duration: 0.8, delay: i * 0.15, type: 'spring', stiffness: 50, damping: 15 }}>
                <motion.div className={`w-full md:w-[45%] p-6 rounded-[20px] bg-gray-800/50 border border-gray-700 backdrop-blur-sm ${isLeft ? 'md:mr-auto' : 'md:ml-auto'}`} whileHover={{ scale: 1.02, borderColor: useCase.color }}>
                  <div className="flex items-start gap-4">
                    <motion.div className="w-12 h-12 rounded-[12px] flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${useCase.color}20` }} whileHover={{ rotate: [0, -10, 10, 0] }} transition={{ duration: 0.5 }}><useCase.icon style={{ color: useCase.color }} size={24} /></motion.div>
                    <div className="flex-1"><h3 className="text-lg font-bold text-white mb-1">{useCase.title}</h3><p className="text-gray-400 text-sm mb-3">{useCase.description}</p><code className="inline-block px-3 py-1 bg-gray-900 rounded-lg text-xs text-[#1890ff] font-mono">{useCase.code}</code></div>
                  </div>
                </motion.div>
                <motion.div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gray-800 border-2 hidden md:block" style={{ borderColor: useCase.color }} initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.15 + 0.3 }} />
              </motion.div>
            );
          })}
        </div>
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Начните за минуты</h3>
            <p className="text-gray-400 mb-6">Простой API. Документация с примерами на JavaScript, Python, PHP. SDK для быстрого старта.</p>
            <div className="flex flex-wrap gap-3">{['JavaScript', 'Python', 'PHP', 'Ruby', 'Go'].map(lang => (<motion.span key={lang} className="px-4 py-2 bg-gray-800 rounded-lg text-sm text-gray-400 border border-gray-700" whileHover={{ scale: 1.05, borderColor: '#1890ff', color: '#1890ff' }}>{lang}</motion.span>))}</div>
          </div>
          <motion.div className="relative" initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }}>
            <div className="bg-gray-950 rounded-[20px] p-6 border border-gray-800 overflow-hidden">
              <div className="flex items-center gap-2 mb-4"><div className="w-3 h-3 rounded-full bg-red-500" /><div className="w-3 h-3 rounded-full bg-yellow-500" /><div className="w-3 h-3 rounded-full bg-green-500" /><span className="ml-3 text-xs text-gray-500">api-example.js</span></div>
              <pre className="text-sm text-gray-300 overflow-x-auto"><code>{codeExample}</code></pre>
            </div>
            <motion.div className="absolute -top-4 -right-4 w-24 h-24 border border-[#1890ff]/30 rounded-[16px]" animate={{ rotate: [0, 90, 0] }} transition={{ duration: 20, repeat: Infinity }} />
            <motion.div className="absolute -bottom-4 -left-4 w-16 h-16 border border-purple-500/30 rounded-full" animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 4, repeat: Infinity }} />
          </motion.div>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="mt-20 p-8 rounded-[24px] bg-gradient-to-r from-[#1890ff]/10 to-purple-500/10 border border-[#1890ff]/20">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <motion.div className="w-20 h-20 rounded-[20px] bg-[#1890ff]/20 flex items-center justify-center flex-shrink-0" animate={{ rotate: [0, 10, -10, 0] }} transition={{ duration: 4, repeat: Infinity }}><Webhook className="text-[#1890ff]" size={40} /></motion.div>
            <div className="flex-1 text-center md:text-left"><h3 className="text-2xl font-bold text-white mb-2">Real-time Webhooks</h3><p className="text-gray-400">Мгновенные уведомления о событиях: новый отклик, смена этапа, интервью. До 50 webhooks.</p></div>
            <motion.a href="#" className="px-6 py-3 bg-[#1890ff] text-white font-semibold rounded-full flex-shrink-0" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>Документация API</motion.a>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
