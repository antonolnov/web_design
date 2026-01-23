'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Puzzle, ArrowRight, Code2, Webhook, FileJson, Database } from 'lucide-react';
import Container from '../ui/Container';
import ContentCard from '../ui/ContentCard';
import Mascot from '../ui/Mascot';

const integrations = [
  { name: 'HH.ru', type: 'Job site' },
  { name: 'Avito', type: 'Job site' },
  { name: 'SuperJob', type: 'Job site' },
  { name: 'Telegram', type: 'Messenger' },
  { name: 'WhatsApp', type: 'Messenger' },
  { name: '1C', type: 'ERP' },
  { name: 'Slack', type: 'Messenger' },
  { name: 'SAP', type: 'ERP' },
];

const apiFeatures = [
  { icon: FileJson, title: 'REST API', desc: 'Полная документация' },
  { icon: Webhook, title: 'Webhooks', desc: 'Реальное время' },
  { icon: Database, title: 'Sandbox', desc: 'Тестовая среда' },
];

export default function IntegrationSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-16 px-4">
      <Container>
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Integrations card */}
          <ContentCard variant="white">
            <div ref={ref}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                className="mb-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#1890ff]/10 flex items-center justify-center">
                    <Puzzle size={24} className="text-[#1890ff]" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Интеграции</h3>
                    <p className="text-gray-500">Готовые подключения</p>
                  </div>
                </div>
              </motion.div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
                {integrations.map((item, i) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: i * 0.05 }}
                    className="p-3 bg-gray-50 rounded-xl text-center hover:bg-[#e6f4ff] transition-colors cursor-pointer"
                  >
                    <div className="font-semibold text-gray-900">{item.name}</div>
                    <div className="text-xs text-gray-500">{item.type}</div>
                  </motion.div>
                ))}
              </div>

              <motion.a
                href="#"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.4 }}
                className="inline-flex items-center gap-2 text-[#1890ff] font-medium hover:gap-3 transition-all"
              >
                Все интеграции
                <ArrowRight size={18} />
              </motion.a>
            </div>
          </ContentCard>

          {/* API card */}
          <ContentCard variant="dark">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
            >
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-[#1890ff]/20 flex items-center justify-center">
                    <Code2 size={24} className="text-[#1890ff]" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">API</h3>
                    <p className="text-gray-400">Для разработчиков</p>
                  </div>
                </div>
                <Mascot size={180} variant="01" animate={true} />
              </div>

              <div className="space-y-4 mb-6">
                {apiFeatures.map((feature, i) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    className="flex items-center gap-3 p-3 bg-white/5 rounded-xl"
                  >
                    <feature.icon size={20} className="text-[#1890ff]" />
                    <div>
                      <div className="font-medium text-white">{feature.title}</div>
                      <div className="text-sm text-gray-400">{feature.desc}</div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Code preview */}
              <div className="bg-black/40 rounded-xl p-4 font-mono text-sm">
                <div className="text-gray-400">// Получение кандидатов</div>
                <div>
                  <span className="text-purple-400">GET</span>{' '}
                  <span className="text-green-400">/api/v1/candidates</span>
                </div>
                <div className="text-gray-500 mt-2">→ 200 OK • 45ms</div>
              </div>
            </motion.div>
          </ContentCard>
        </div>
      </Container>
    </section>
  );
}
