'use client';

import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import { Building2, Users, Headphones, Cog, Award, Clock, CheckCircle } from 'lucide-react';
import Container from '../ui/Container';
import ContentCard from '../ui/ContentCard';

const tabs = [
  {
    id: 'scale',
    icon: Building2,
    title: 'Масштаб',
    description: 'Для любого размера',
    content: {
      heading: 'Масштабируемость без границ',
      points: [
        'От 10 до 100 000+ сотрудников',
        'Мультибрендовая архитектура',
        'Неограниченное количество пользователей',
        'Высокая производительность',
      ],
    },
  },
  {
    id: 'support',
    icon: Headphones,
    title: 'Поддержка',
    description: 'Персональный менеджер',
    content: {
      heading: 'Enterprise-поддержка',
      points: [
        'Выделенный аккаунт-менеджер',
        'SLA до 99.9% uptime',
        'Приоритетная техподдержка 24/7',
        'Помощь с миграцией данных',
      ],
    },
  },
  {
    id: 'custom',
    icon: Cog,
    title: 'Кастомизация',
    description: 'Под ваши процессы',
    content: {
      heading: 'Гибкая кастомизация',
      points: [
        'Брендирование интерфейса',
        'Кастомные поля и сущности',
        'Индивидуальные интеграции',
        'Доработки под требования',
      ],
    },
  },
  {
    id: 'onboarding',
    icon: Award,
    title: 'Внедрение',
    description: 'Сопровождение проекта',
    content: {
      heading: 'Профессиональное внедрение',
      points: [
        'Анализ текущих процессов',
        'Настройка под вашу компанию',
        'Обучение команды',
        'Консалтинг по HR-процессам',
      ],
    },
  },
];

export default function EnterpriseTabs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeTab, setActiveTab] = useState(0);
  const current = tabs[activeTab];

  return (
    <section id="enterprise" className="py-20 px-4">
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
                      ? 'bg-[#722ed1] text-white shadow-lg'
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
                    <div className="w-12 h-12 rounded-xl bg-[#722ed1]/20 flex items-center justify-center">
                      <current.icon size={24} className="text-[#a78bfa]" />
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
                        <CheckCircle size={18} className="text-[#a78bfa]" />
                        <span className="text-white/80">{point}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Right - Visual */}
                <div className="bg-gradient-to-br from-[#722ed1]/10 to-[#722ed1]/20 rounded-2xl p-6 flex items-center justify-center">
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: 'spring', stiffness: 200 }}
                    className="text-center"
                  >
                    <div className="relative">
                      <Building2 size={80} className="text-[#722ed1]/30 mx-auto" />
                      <motion.div
                        className="absolute inset-0 flex items-center justify-center"
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <current.icon size={40} className="text-[#a78bfa]" />
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
