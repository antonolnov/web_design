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
    <section 
      id="security" 
      className="relative py-24 overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #0f172a 0%, #0c2d4d 50%, #0a3a5c 100%)',
      }}
    >
      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />
      
      {/* Subtle floating particles - minimal */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-white/20"
          style={{
            left: `${15 + i * 15}%`,
            top: `${20 + (i % 3) * 25}%`,
          }}
          animate={{
            y: [0, -10, 0],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}

      <Container className="relative z-10">
        <div ref={ref} className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-sm font-medium text-white/90 bg-white/10 border border-white/20 rounded-full backdrop-blur-sm"
          >
            <Shield size={16} />
            Безопасность
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4"
          >
            Данные под надёжной защитой
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-lg text-white/60 max-w-2xl mx-auto"
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
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3 + index * 0.1 }}
                whileHover={{ x: 4, transition: { duration: 0.2 } }}
                className="flex gap-4 p-5 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <feature.icon className="text-[#69c0ff]" size={22} />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">{feature.title}</h4>
                  <p className="text-white/50 text-sm leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Deployment Options */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center">
                <Server className="text-[#69c0ff]" size={20} />
              </div>
              <span className="font-semibold text-white text-lg">Режимы поставки</span>
            </div>
            
            <div className="space-y-4">
              {deploymentOptions.map((option, index) => (
                <motion.div
                  key={option.title}
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.01, transition: { duration: 0.2 } }}
                  className="bg-white/5 rounded-2xl p-5 border border-white/10 hover:border-white/20 transition-all"
                >
                  <h4 className="font-bold text-white text-lg mb-2">{option.title}</h4>
                  <p className="text-white/50 text-sm mb-3">{option.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {option.features.map((f) => (
                      <span
                        key={f}
                        className="px-3 py-1.5 bg-white/10 rounded-full text-xs text-white/70"
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
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center">
              <Shield className="text-[#69c0ff]" size={20} />
            </div>
            <h3 className="text-xl font-bold text-white">Качество данных и контроль</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {qualityFeatures.map((feature, index) => (
              <motion.div 
                key={feature.title} 
                className="flex gap-4"
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.7 + index * 0.1 }}
              >
                <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <feature.icon className="text-[#69c0ff]" size={18} />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">{feature.title}</h4>
                  <p className="text-white/50 text-sm leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
