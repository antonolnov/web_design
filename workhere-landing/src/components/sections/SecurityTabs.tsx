'use client';

import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import { Shield, Lock, Users, Server, Key, Eye, Database, CheckCircle } from 'lucide-react';
import Container from '../ui/Container';
import ContentCard from '../ui/ContentCard';

const tabs = [
  {
    id: 'access',
    icon: Lock,
    title: 'Доступы',
    description: 'Управление правами',
    content: {
      heading: 'Гибкое управление доступами',
      points: [
        'Ролевая модель (RBAC)',
        'Кастомные роли и права',
        'Доступ к данным по подразделениям',
        'Аудит всех действий',
      ],
    },
  },
  {
    id: 'data',
    icon: Database,
    title: 'Данные',
    description: 'Защита информации',
    content: {
      heading: 'Безопасность данных',
      points: [
        'Шифрование данных (AES-256)',
        'GDPR и 152-ФЗ compliance',
        'Автоматическое резервное копирование',
        'Контроль персональных данных',
      ],
    },
  },
  {
    id: 'auth',
    icon: Key,
    title: 'Авторизация',
    description: 'Методы входа',
    content: {
      heading: 'Надёжная авторизация',
      points: [
        'SSO (SAML, OAuth 2.0)',
        'Двухфакторная аутентификация',
        'LDAP/Active Directory',
        'IP-ограничения',
      ],
    },
  },
  {
    id: 'deploy',
    icon: Server,
    title: 'Деплой',
    description: 'Варианты размещения',
    content: {
      heading: 'Гибкие варианты размещения',
      points: [
        'Облако (SaaS)',
        'On-premise установка',
        'Приватное облако',
        'Hybrid-решения',
      ],
    },
  },
];

export default function SecurityTabs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeTab, setActiveTab] = useState(0);
  const current = tabs[activeTab];

  return (
    <section id="security" className="py-20 px-4">
      <Container>
        <ContentCard variant="dark">
          <div ref={ref}>
            {/* Tabs */}
            <div className="flex flex-wrap justify-center gap-2 mb-10">
              {tabs.map((tab, i) => (
                <motion.button
                  key={tab.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => setActiveTab(i)}
                  className={`flex items-center gap-2 px-5 py-3 rounded-xl font-medium transition-all ${
                    activeTab === i
                      ? 'bg-[#1890ff] text-white shadow-lg'
                      : 'bg-white/10 text-white/80 hover:bg-white/20'
                  }`}
                >
                  <tab.icon size={18} />
                  <span>{tab.title}</span>
                </motion.button>
              ))}
            </div>

            {/* Tab content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="grid lg:grid-cols-2 gap-8"
              >
                {/* Left - Info */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-[#1890ff]/20 flex items-center justify-center">
                      <current.icon size={24} className="text-[#1890ff]" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">{current.content.heading}</h3>
                    </div>
                  </div>

                  <div className="space-y-3 mb-6">
                    {current.content.points.map((point, i) => (
                      <motion.div
                        key={point}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-center gap-3"
                      >
                        <CheckCircle size={18} className="text-[#1890ff]" />
                        <span className="text-white/80">{point}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Right - Visual */}
                <div className="bg-gradient-to-br from-[#1890ff]/10 to-[#1890ff]/20 rounded-2xl p-6 flex items-center justify-center">
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: 'spring', stiffness: 200 }}
                    className="text-center"
                  >
                    <div className="relative">
                      <Shield size={80} className="text-[#1890ff]/30 mx-auto" />
                      <motion.div
                        className="absolute inset-0 flex items-center justify-center"
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <current.icon size={40} className="text-[#1890ff]" />
                      </motion.div>
                    </div>
                    <p className="text-white/60 mt-4">{current.description}</p>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </ContentCard>
      </Container>
    </section>
  );
}
