'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Check, Settings, Shuffle, Eye, Clock } from 'lucide-react';
import Container from '../ui/Container';
import SectionTitle from '../ui/SectionTitle';

const stages = [
  {
    name: 'Отклик',
    count: 156,
    color: 'bg-[#1890ff]',
    width: '100%',
  },
  {
    name: 'Скрининг',
    count: 89,
    color: 'bg-[#40a9ff]',
    width: '57%',
  },
  {
    name: 'HR-интервью',
    count: 45,
    color: 'bg-[#69c0ff]',
    width: '29%',
  },
  {
    name: 'Техническое',
    count: 23,
    color: 'bg-[#91d5ff]',
    width: '15%',
  },
  {
    name: 'Финал',
    count: 8,
    color: 'bg-[#bae7ff]',
    width: '5%',
  },
  {
    name: 'Оффер',
    count: 4,
    color: 'bg-[#e6f4ff]',
    width: '2.5%',
  },
];

const benefits = [
  {
    icon: Settings,
    title: 'Гибкая настройка',
    description: 'Создавайте уникальные воронки для разных типов вакансий. Drag-and-drop редактор этапов.',
  },
  {
    icon: Shuffle,
    title: 'Автоматические переходы',
    description: 'Настраивайте автоматические действия при переходе между этапами. Письма, задачи, уведомления.',
  },
  {
    icon: Eye,
    title: 'Полная прозрачность',
    description: 'Видите всех кандидатов на каждом этапе. Фильтры, сортировка, массовые действия.',
  },
  {
    icon: Clock,
    title: 'Контроль сроков',
    description: 'Отслеживайте время на каждом этапе. Автоматические напоминания о застрявших кандидатах.',
  },
];

export default function Funnel() {
  return (
    <section id="funnel" className="py-24 bg-gray-50">
      <Container>
        <SectionTitle
          badge="Воронка найма"
          title="Визуализируйте весь процесс"
          subtitle="Kanban-доска с кандидатами, настраиваемые этапы и полный контроль над воронкой подбора."
        />

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Funnel Visualization */}
          <motion.div
            className="bg-white rounded-[24px] p-8 shadow-[0_8px_30px_rgba(0,0,0,0.08)]"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-between mb-8">
              <div>
                <h3 className="text-xl font-bold text-gray-900">Senior Frontend Developer</h3>
                <p className="text-gray-500">Открыта 14 дней назад</p>
              </div>
              <span className="px-4 py-2 bg-[#e6f4ff] text-[#1890ff] rounded-full text-sm font-medium">
                Активна
              </span>
            </div>

            <div className="space-y-4">
              {stages.map((stage, index) => (
                <motion.div
                  key={stage.name}
                  className="relative"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700">{stage.name}</span>
                    <span className="text-sm font-bold text-gray-900">{stage.count}</span>
                  </div>
                  <div className="h-10 bg-gray-100 rounded-[8px] overflow-hidden">
                    <motion.div
                      className={`h-full ${stage.color} rounded-[8px] flex items-center px-4`}
                      initial={{ width: 0 }}
                      whileInView={{ width: stage.width }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + index * 0.1, duration: 0.8, ease: 'easeOut' }}
                    >
                      {index < 3 && (
                        <span className="text-white text-sm font-medium truncate">
                          {stage.count} кандидатов
                        </span>
                      )}
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-gray-100">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#1890ff]">2.6%</div>
                    <div className="text-xs text-gray-500">Конверсия</div>
                  </div>
                  <div className="w-px h-10 bg-gray-200" />
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900">18 дней</div>
                    <div className="text-xs text-gray-500">Среднее время</div>
                  </div>
                </div>
                <motion.button
                  className="flex items-center gap-2 text-[#1890ff] font-medium hover:underline"
                  whileHover={{ x: 5 }}
                >
                  Подробная аналитика
                  <ArrowRight size={16} />
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Benefits */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                className="flex gap-5"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <div className="w-14 h-14 bg-white rounded-[16px] shadow-[0_4px_20px_rgba(0,0,0,0.08)] flex items-center justify-center flex-shrink-0">
                  <benefit.icon className="text-[#1890ff]" size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </div>
              </motion.div>
            ))}

            <motion.div
              className="mt-8 p-6 bg-gradient-to-r from-[#1890ff]/10 to-transparent rounded-[16px] border border-[#1890ff]/20"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#1890ff] rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="text-white" size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Готовые шаблоны воронок</h4>
                  <p className="text-gray-600 text-sm">
                    Используйте проверенные шаблоны для разных типов позиций: IT, продажи, маркетинг, 
                    топ-менеджмент и другие.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
