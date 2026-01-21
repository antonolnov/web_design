'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Link2, RefreshCw, Puzzle, Webhook } from 'lucide-react';
import Container from '../ui/Container';
import SectionTitle from '../ui/SectionTitle';
import Card from '../ui/Card';
import Button from '../ui/Button';

const integrationCategories = [
  {
    name: 'Job-борды',
    integrations: ['HeadHunter', 'SuperJob', 'Работа.ру', 'Avito', 'LinkedIn'],
    color: '#1890ff',
  },
  {
    name: 'Коммуникации',
    integrations: ['Email', 'Telegram', 'WhatsApp', 'Slack', 'Teams'],
    color: '#40a9ff',
  },
  {
    name: 'Календари',
    integrations: ['Google Calendar', 'Outlook', 'Яндекс', 'Calendly', 'Zoom'],
    color: '#69c0ff',
  },
  {
    name: 'HR-системы',
    integrations: ['1C', 'SAP', 'Битрикс24', 'AmoCRM', 'Salesforce'],
    color: '#91d5ff',
  },
];

const apiFeatures = [
  {
    icon: Webhook,
    title: 'Webhooks',
    description: 'Получайте уведомления о событиях в реальном времени в вашу систему.',
  },
  {
    icon: RefreshCw,
    title: 'Синхронизация',
    description: 'Двусторонняя синхронизация данных с вашими внутренними системами.',
  },
  {
    icon: Puzzle,
    title: 'Кастомизация',
    description: 'Гибкий API для создания любых интеграций под ваши задачи.',
  },
];

export default function Integrations() {
  return (
    <section id="integrations" className="py-24 bg-white">
      <Container>
        <SectionTitle
          badge="Интеграции"
          title="Работает с вашими инструментами"
          subtitle="50+ готовых интеграций с популярными сервисами. Открытый API для кастомных решений."
        />

        {/* Integration Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          {integrationCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1, duration: 0.5 }}
            >
              <Card className="h-full">
                <div
                  className="w-12 h-12 rounded-[12px] flex items-center justify-center mb-4"
                  style={{ backgroundColor: `${category.color}20` }}
                >
                  <Link2 style={{ color: category.color }} size={24} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-4">{category.name}</h3>
                <div className="space-y-3">
                  {category.integrations.map((integration) => (
                    <motion.div
                      key={integration}
                      className="flex items-center gap-3 p-3 bg-gray-50 rounded-[12px] hover:bg-[#e6f4ff] transition-colors cursor-pointer group"
                      whileHover={{ x: 5 }}
                    >
                      <div className="w-8 h-8 bg-white rounded-[8px] shadow-sm flex items-center justify-center">
                        <span className="text-xs font-bold text-gray-400">
                          {integration.charAt(0)}
                        </span>
                      </div>
                      <span className="text-sm font-medium text-gray-700 group-hover:text-[#1890ff]">
                        {integration}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* API Section */}
        <motion.div
          className="bg-gray-900 rounded-[24px] p-8 lg:p-12 overflow-hidden relative"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#1890ff" strokeWidth="0.5" />
              </pattern>
              <rect width="100" height="100" fill="url(#grid)" />
            </svg>
          </div>

          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-[#1890ff] bg-[#1890ff]/20 rounded-full">
                REST API
              </span>
              <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Открытый API для любых интеграций
              </h3>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                Полноценный REST API с подробной документацией. Создавайте кастомные интеграции, 
                автоматизируйте процессы, стройте отчёты в ваших BI-системах.
              </p>

              <div className="grid sm:grid-cols-3 gap-6 mb-8">
                {apiFeatures.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                  >
                    <div className="w-12 h-12 bg-[#1890ff]/20 rounded-[12px] flex items-center justify-center mx-auto mb-3">
                      <feature.icon className="text-[#1890ff]" size={24} />
                    </div>
                    <h4 className="font-semibold text-white mb-1">{feature.title}</h4>
                    <p className="text-sm text-gray-500">{feature.description}</p>
                  </motion.div>
                ))}
              </div>

              <Button href="#api-docs">
                Документация API
                <ArrowRight className="ml-2" size={18} />
              </Button>
            </div>

            {/* Code Preview */}
            <motion.div
              className="bg-gray-800 rounded-[16px] p-6 font-mono text-sm overflow-hidden"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <pre className="text-gray-300 overflow-x-auto">
                <code>
                  <span className="text-[#1890ff]">GET</span>{' '}
                  <span className="text-gray-500">/api/v1/candidates</span>
                  {'\n\n'}
                  <span className="text-gray-500">{'{'}</span>
                  {'\n'}
                  {'  '}<span className="text-[#40a9ff]">&quot;data&quot;</span>: [{'\n'}
                  {'    '}{'{'}{'\n'}
                  {'      '}<span className="text-[#40a9ff]">&quot;id&quot;</span>:{' '}
                  <span className="text-yellow-400">&quot;c_123456&quot;</span>,{'\n'}
                  {'      '}<span className="text-[#40a9ff]">&quot;name&quot;</span>:{' '}
                  <span className="text-yellow-400">&quot;Анна Михайлова&quot;</span>,{'\n'}
                  {'      '}<span className="text-[#40a9ff]">&quot;position&quot;</span>:{' '}
                  <span className="text-yellow-400">&quot;Senior Developer&quot;</span>,{'\n'}
                  {'      '}<span className="text-[#40a9ff]">&quot;stage&quot;</span>:{' '}
                  <span className="text-yellow-400">&quot;interview&quot;</span>,{'\n'}
                  {'      '}<span className="text-[#40a9ff]">&quot;score&quot;</span>:{' '}
                  <span className="text-green-400">92</span>{'\n'}
                  {'    '}{'}'}{'\n'}
                  {'  '}],{'\n'}
                  {'  '}<span className="text-[#40a9ff]">&quot;meta&quot;</span>: {'{'}{' '}
                  <span className="text-[#40a9ff]">&quot;total&quot;</span>:{' '}
                  <span className="text-green-400">156</span> {'}'}{'\n'}
                  <span className="text-gray-500">{'}'}</span>
                </code>
              </pre>
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
