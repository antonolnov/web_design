'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Server, Award, Shield, FileCheck } from 'lucide-react';

const securityFeatures = [
  {
    icon: Server,
    title: 'Инфраструктура — в России',
    description: 'Сервера WorkHere размещаются в дата-центрах в Санкт-Петербурге и Москве. Организовано географически распределенное непрерывное резервное копирование данных.',
  },
  {
    icon: Award,
    title: 'Реестр отечественного ПО',
    description: 'WorkHere включен в единый реестр российского программного обеспечения. Это гарантирует соответствие требованиям импортозамещения.',
  },
  {
    icon: Shield,
    title: 'Регулярный аудит безопасности',
    description: 'Проводим регулярные проверки безопасности с привлечением внешних экспертов. Постоянный мониторинг и обновление систем защиты.',
  },
  {
    icon: FileCheck,
    title: 'Соответствие 152-ФЗ',
    description: 'Полное соответствие требованиям Федерального закона №152-ФЗ «О персональных данных». Защита данных ваших кандидатов и сотрудников.',
  },
];

export default function SecurityHuntflow() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0.8]);

  return (
    <section
      ref={sectionRef}
      id="security"
      className="relative py-32 bg-white overflow-hidden"
    >
      <motion.div
        className="max-w-[1400px] mx-auto px-6"
        style={{ opacity }}
      >
        {/* Header */}
        <div className="text-center mb-16">
          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 text-green-700 font-medium text-sm mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Shield className="w-4 h-4" />
            Безопасность
          </motion.div>

          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Надежная работа и защита ваших данных
          </motion.h2>
        </div>

        {/* Security features grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {securityFeatures.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <motion.div
                key={feature.title}
                className="relative p-8 rounded-3xl bg-gray-50 border border-gray-100 hover:shadow-lg transition-shadow group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                {/* Icon */}
                <motion.div
                  className="w-16 h-16 rounded-2xl bg-[#1890ff]/10 flex items-center justify-center mb-6 group-hover:bg-[#1890ff]/20 transition-colors"
                  whileHover={{ rotate: [0, -5, 5, 0], scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                >
                  <IconComponent className="w-8 h-8 text-[#1890ff]" />
                </motion.div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>

                {/* Decorative corner */}
                <div className="absolute top-6 right-6 w-8 h-8 border-t-2 border-r-2 border-[#1890ff]/20 rounded-tr-lg" />
              </motion.div>
            );
          })}
        </div>

        {/* Certificates / Trust badges */}
        <motion.div
          className="flex flex-wrap justify-center gap-8 mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          {['152-ФЗ', 'Реестр ПО', 'ISO 27001', 'ГОСТ Р'].map((badge, i) => (
            <motion.div
              key={badge}
              className="px-6 py-3 rounded-full bg-gray-100 text-gray-600 font-medium"
              whileHover={{ scale: 1.05, backgroundColor: '#1890ff', color: '#fff' }}
              transition={{ duration: 0.2 }}
            >
              {badge}
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
