'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Shield, Lock, Server, CheckCircle } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Соответствие 152-ФЗ',
    description: 'Полное соответствие требованиям законодательства о персональных данных',
  },
  {
    icon: Lock,
    title: 'Шифрование данных',
    description: 'AES-256 шифрование данных в покое и при передаче',
  },
  {
    icon: Server,
    title: 'Реестр отечественного ПО',
    description: 'Система включена в единый реестр российских программ',
  },
  {
    icon: CheckCircle,
    title: 'SLA 99.9%',
    description: 'Гарантированная доступность сервиса и резервное копирование',
  },
];

export default function Security() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-24 bg-[#1a1a2e] text-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <p className="text-[#8b8bf5] font-semibold mb-4">Безопасность</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Защита данных на всех уровнях
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Enterprise-уровень безопасности для вашей компании
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-[#5b5fc7]/20 flex items-center justify-center mx-auto mb-4">
                <feature.icon size={28} className="text-[#8b8bf5]" />
              </div>
              <h3 className="text-lg font-semibold mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-400">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
