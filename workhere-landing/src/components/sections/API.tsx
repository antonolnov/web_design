'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, FileJson, Send, Users, FileSpreadsheet, Building2, BarChart3, Webhook, Database } from 'lucide-react';
import Container from '../ui/Container';

const apiFeatures = [
  {
    icon: FileJson,
    title: 'Интерактивная документация',
    description: 'Полное руководство с примерами кода и live-песочницей',
  },
  {
    icon: Send,
    title: 'Заявки из интранета',
    description: 'Передавайте заявки напрямую в систему',
  },
  {
    icon: Users,
    title: 'Синхронизация с HR',
    description: 'Автоматическая передача финалистов',
  },
  {
    icon: FileSpreadsheet,
    title: 'Excel-отчёты',
    description: 'Индивидуальные шаблоны выгрузки',
  },
  {
    icon: Database,
    title: 'Песочница API',
    description: 'Тестируйте запросы без риска',
  },
  {
    icon: Building2,
    title: 'Справочники',
    description: 'Загрузка структуры компании',
  },
  {
    icon: Webhook,
    title: 'Вебхуки',
    description: 'Telegram, 1C, CRM, Slack',
  },
  {
    icon: BarChart3,
    title: 'BI-экспорт',
    description: 'Данные в любом формате',
  },
];

export default function API() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-10%' });

  return (
    <section 
      ref={ref}
      className="py-24 bg-[#f8fafc]"
    >
      <Container>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 mb-4 text-sm font-medium text-[#1890ff] bg-[#e6f4ff] rounded-full">
            <Code2 size={14} />
            Для разработчиков
          </span>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Суперсила API
          </h2>
          
          <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-8">
            Интегрируйте WorkHere в экосистему вашей компании. 
            Разработайте любые необходимые интеграции.
          </p>
          
          <motion.a
            href="#demo"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#1890ff] text-white rounded-2xl font-medium hover:bg-[#40a9ff] transition-colors"
          >
            Портал для разработчиков
            <span>→</span>
          </motion.a>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {apiFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.1 + index * 0.05 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-[#1890ff]/20 hover:shadow-lg hover:shadow-[#1890ff]/5 transition-all"
            >
              <div className="w-10 h-10 rounded-xl bg-[#e6f4ff] flex items-center justify-center mb-4">
                <feature.icon size={20} className="text-[#1890ff]" />
              </div>
              <h3 className="text-base font-semibold text-gray-900 mb-1">{feature.title}</h3>
              <p className="text-sm text-gray-500">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Code Preview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12 max-w-3xl mx-auto"
        >
          <div className="bg-gray-900 rounded-2xl overflow-hidden border border-gray-800">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-800">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-gray-700" />
                <div className="w-3 h-3 rounded-full bg-gray-700" />
                <div className="w-3 h-3 rounded-full bg-gray-700" />
              </div>
              <span className="text-xs text-gray-500 ml-2">api-example.js</span>
            </div>
            <div className="p-5 font-mono text-sm">
              <div className="text-gray-500">// Получить кандидатов</div>
              <div className="mt-2">
                <span className="text-blue-400">const</span>
                <span className="text-gray-300"> response = </span>
                <span className="text-blue-400">await</span>
                <span className="text-yellow-300"> fetch</span>
                <span className="text-gray-300">(</span>
              </div>
              <div className="pl-4 text-green-400">'https://api.workhere.ru/v1/candidates'</div>
              <div className="text-gray-300">);</div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
