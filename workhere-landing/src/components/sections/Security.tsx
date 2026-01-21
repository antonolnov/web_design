'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Shield,
  Lock,
  Users,
  Eye,
  Server,
  FileCheck,
  History,
  Key,
} from 'lucide-react';
import Container from '../ui/Container';
import TextReveal from '../ui/TextReveal';

const securityFeatures = [
  {
    icon: Users,
    title: 'Роли и права доступа',
    description: 'Гибкая система ролей: рекрутеры, руководители, наблюдатели, заказчики с гостевым доступом',
  },
  {
    icon: Eye,
    title: 'Разграничение доступа',
    description: 'Доступ к кандидатам/вакансиям по командам и проектам. "Видит всё" vs "только свои"',
  },
  {
    icon: History,
    title: 'Аудит действий',
    description: 'Полный лог: входы, важные операции, экспорт данных. Кто, когда и что изменил',
  },
  {
    icon: Lock,
    title: 'Защита данных',
    description: 'Шифрование данных, резервное копирование, соответствие 152-ФЗ',
  },
];

const deploymentOptions = [
  {
    title: 'SaaS',
    description: 'Облачное решение с мгновенным стартом',
    features: ['Быстрое развёртывание', 'Автоматические обновления', 'Отказоустойчивость'],
  },
  {
    title: 'On-Premise',
    description: 'Установка на серверах заказчика',
    features: ['Полный контроль данных', 'Интеграция с инфраструктурой', 'Кастомизация'],
  },
];

const qualityFeatures = [
  {
    icon: FileCheck,
    title: 'Нормализация контактов',
    description: 'Телефоны в едином формате, автоматическая чистка данных',
  },
  {
    icon: Key,
    title: 'Контроль дублей',
    description: 'Режимы импорта: пропускать, обновлять, создавать с пометкой',
  },
];

export default function Security() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="security" className="py-24 bg-white relative">
      {/* Top gradient transition from dark section */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-gray-100 to-transparent" />
      
      <Container>
        <div ref={ref} className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-[#1890ff] bg-[#e6f4ff] rounded-full"
          >
            Безопасность
          </motion.span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            <TextReveal>Данные под надёжной защитой</TextReveal>
          </h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Гибкие роли, аудит действий, выбор режима поставки — SaaS или on-premise
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Security Features */}
          <div className="space-y-4">
            {securityFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="flex gap-4 p-5 bg-gray-50 rounded-[20px] hover:bg-white hover:shadow-lg border border-transparent hover:border-[#1890ff]/10 transition-all"
              >
                <div className="w-12 h-12 bg-[#e6f4ff] rounded-[12px] flex items-center justify-center flex-shrink-0">
                  <feature.icon className="text-[#1890ff]" size={22} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">{feature.title}</h4>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Deployment Options */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="bg-gradient-to-br from-[#1890ff] to-[#0d6edb] rounded-[32px] p-8 text-white"
          >
            <div className="flex items-center gap-3 mb-6">
              <Server className="text-white/80" size={24} />
              <span className="font-semibold">Режимы поставки</span>
            </div>
            
            <div className="space-y-6">
              {deploymentOptions.map((option, index) => (
                <div
                  key={option.title}
                  className="bg-white/10 backdrop-blur-sm rounded-[16px] p-5"
                >
                  <h4 className="font-bold text-lg mb-2">{option.title}</h4>
                  <p className="text-white/70 text-sm mb-3">{option.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {option.features.map((f) => (
                      <span
                        key={f}
                        className="px-3 py-1 bg-white/10 rounded-full text-xs"
                      >
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Data Quality */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gray-50 rounded-[32px] p-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <Shield className="text-[#1890ff]" size={24} />
            <h3 className="text-xl font-bold text-gray-900">Качество данных и "антихаос"</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {qualityFeatures.map((feature, index) => (
              <div key={feature.title} className="flex gap-4">
                <div className="w-10 h-10 bg-white rounded-[10px] flex items-center justify-center flex-shrink-0 shadow-sm">
                  <feature.icon className="text-[#1890ff]" size={18} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">{feature.title}</h4>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
