'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Shield, Lock, Users, Eye, Server, FileCheck, History, Key } from 'lucide-react';
import Container from '../ui/Container';

const securityFeatures = [
  {
    icon: Users,
    title: 'Роли и права доступа',
    description: 'Гибкая система ролей: рекрутеры, руководители, наблюдатели',
  },
  {
    icon: Eye,
    title: 'Разграничение доступа',
    description: 'Доступ к кандидатам и вакансиям по командам и проектам',
  },
  {
    icon: History,
    title: 'Аудит действий',
    description: 'Полный лог: входы, операции, экспорт данных',
  },
  {
    icon: Lock,
    title: 'Защита данных',
    description: 'Шифрование, резервное копирование, соответствие 152-ФЗ',
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
  const isInView = useInView(ref, { once: true, margin: '-10%' });

  return (
    <section id="security" ref={ref} className="py-24 bg-white">
      <Container>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 mb-4 text-sm font-medium text-[#1890ff] bg-[#e6f4ff] rounded-full">
            <Shield size={14} />
            Безопасность
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Данные под надёжной защитой
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Гибкие роли, аудит действий, выбор режима поставки — SaaS или on-premise
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Security Features */}
          <div className="space-y-4">
            {securityFeatures.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 + i * 0.05 }}
                whileHover={{ y: -2, transition: { duration: 0.2 } }}
                className="flex gap-4 p-5 bg-[#f8fafc] rounded-2xl border border-gray-100 hover:border-[#1890ff]/20 hover:shadow-lg hover:shadow-[#1890ff]/5 transition-all"
              >
                <div className="w-12 h-12 bg-[#e6f4ff] rounded-xl flex items-center justify-center flex-shrink-0">
                  <feature.icon className="text-[#1890ff]" size={22} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">{feature.title}</h4>
                  <p className="text-gray-500 text-sm">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Deployment Options */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="bg-[#f8fafc] rounded-2xl p-6 border border-gray-100"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-[#e6f4ff] rounded-xl flex items-center justify-center">
                <Server className="text-[#1890ff]" size={20} />
              </div>
              <span className="font-semibold text-gray-900">Режимы поставки</span>
            </div>
            
            <div className="space-y-4">
              {deploymentOptions.map((option, i) => (
                <motion.div
                  key={option.title}
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="bg-white rounded-xl p-5 border border-gray-100"
                >
                  <h4 className="font-bold text-gray-900 mb-1">{option.title}</h4>
                  <p className="text-gray-500 text-sm mb-3">{option.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {option.features.map((f) => (
                      <span
                        key={f}
                        className="px-3 py-1 bg-[#f0f7ff] rounded-full text-xs text-[#1890ff]"
                      >
                        {f}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Data Quality */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
          className="bg-[#f8fafc] rounded-2xl p-6 border border-gray-100"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-[#e6f4ff] rounded-xl flex items-center justify-center">
              <Shield className="text-[#1890ff]" size={20} />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">Качество данных и контроль</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {qualityFeatures.map((feature, i) => (
              <div key={feature.title} className="flex gap-4">
                <div className="w-10 h-10 bg-[#e6f4ff] rounded-xl flex items-center justify-center flex-shrink-0">
                  <feature.icon className="text-[#1890ff]" size={18} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">{feature.title}</h4>
                  <p className="text-gray-500 text-sm">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
