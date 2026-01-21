'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link2, MessageSquare, Calendar, Code, Webhook, RefreshCw } from 'lucide-react';
import Container from '../ui/Container';
import TextReveal from '../ui/TextReveal';

const integrationCategories = [
  {
    title: 'Job-сайты',
    items: ['HH.ru', 'SuperJob', 'Avito Работа', 'Работа.ру'],
    description: 'Импорт откликов, публикация вакансий, синхронизация статусов',
  },
  {
    title: 'Мессенджеры',
    items: ['Telegram', 'WhatsApp', 'Email'],
    description: 'Переписка с кандидатами прямо из карточки',
  },
  {
    title: 'Календари',
    items: ['Google Calendar', 'Outlook', 'Яндекс'],
    description: 'Синхронизация интервью, напоминания участникам',
  },
  {
    title: 'Телефония',
    items: ['Mango Office', 'Sipuni', 'Zadarma'],
    description: 'Звонки из системы, запись разговоров, лог вызовов',
  },
];

const apiFeatures = [
  {
    icon: Code,
    title: 'REST API',
    description: 'Полный доступ к данным: кандидаты, вакансии, события',
  },
  {
    icon: Webhook,
    title: 'Вебхуки',
    description: 'Отправка событий во внешние системы в реальном времени',
  },
  {
    icon: RefreshCw,
    title: 'Синхронизация',
    description: 'Двусторонний обмен данными с CRM, BI, DWH',
  },
];

export default function Integrations() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="integrations" className="py-24 bg-white">
      <Container>
        <div ref={ref} className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-[#1890ff] bg-[#e6f4ff] rounded-full"
          >
            Интеграции
          </motion.span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            <TextReveal>Все источники в одном окне</TextReveal>
          </h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Интеграции с джоб-сайтами, мессенджерами, календарями и телефонией. 
            Открытый API для кастомных решений.
          </motion.p>
        </div>

        {/* Integration Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {integrationCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="bg-gray-50 rounded-[24px] p-6 hover:bg-white hover:shadow-lg hover:border-[#1890ff]/20 border border-transparent transition-all"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[#e6f4ff] rounded-[10px] flex items-center justify-center">
                  <Link2 className="text-[#1890ff]" size={20} />
                </div>
                <h3 className="font-bold text-gray-900">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {category.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 bg-white rounded-full text-sm text-gray-600 border border-gray-100"
                  >
                    {item}
                  </span>
                ))}
              </div>
              
              <p className="text-sm text-gray-500">{category.description}</p>
            </motion.div>
          ))}
        </div>

        {/* API Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gray-900 rounded-[32px] p-8 lg:p-12 overflow-hidden relative"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div
              className="w-full h-full"
              style={{
                backgroundImage: `radial-gradient(circle at 1px 1px, #1890ff 1px, transparent 0)`,
                backgroundSize: '32px 32px',
              }}
            />
          </div>

          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-[#1890ff] bg-[#1890ff]/20 rounded-full">
                Открытая платформа
              </span>
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                API для любых интеграций
              </h3>
              <p className="text-gray-400 mb-8">
                Подключайте WorkHere к вашим внутренним системам. 
                REST API, вебхуки, выгрузки в BI — всё документировано.
              </p>

              <div className="space-y-4">
                {apiFeatures.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-10 h-10 bg-[#1890ff]/20 rounded-[10px] flex items-center justify-center flex-shrink-0">
                      <feature.icon className="text-[#1890ff]" size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">{feature.title}</h4>
                      <p className="text-gray-400 text-sm">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Code Preview */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-gray-800 rounded-[16px] p-6 font-mono text-sm"
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <pre className="text-gray-300 overflow-x-auto">
{`GET /api/v1/candidates

{
  "data": [
    {
      "id": "cand_123",
      "name": "Анна Михайлова",
      "email": "anna@example.com",
      "stage": "interview",
      "vacancy_id": "vac_456",
      "source": "hh.ru",
      "created_at": "2024-01-15"
    }
  ],
  "meta": {
    "total": 1250,
    "page": 1
  }
}`}
              </pre>
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
