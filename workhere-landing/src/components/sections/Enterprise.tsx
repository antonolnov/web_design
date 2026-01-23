'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Container from '../ui/Container';
import CrazyBackground from '../ui/CrazyBackground';
import Mascot from '../ui/Mascot';
import { Shield, Server, Lock, FileKey, Users, Building2, Cpu, Database, Globe, Zap } from 'lucide-react';

const features = [
  { icon: Shield, title: 'ISO 27001', description: 'Сертифицированная система ИБ' },
  { icon: Server, title: 'On-Premise', description: 'Развертывание в вашем контуре' },
  { icon: Lock, title: 'SSO / LDAP', description: 'Корпоративная авторизация' },
  { icon: FileKey, title: 'Шифрование', description: 'AES-256 и TLS 1.3' },
  { icon: Users, title: 'Управление ролями', description: 'Гранулярный контроль доступа' },
  { icon: Database, title: 'Журнал действий', description: 'Полный лог операций' },
];

const stats = [
  { value: '99.9%', label: 'Доступность', icon: Zap },
  { value: '24/7', label: 'Поддержка', icon: Globe },
  { value: '50+', label: 'Крупных клиентов', icon: Building2 },
  { value: '<1ч', label: 'Время отклика', icon: Cpu },
];

export default function Enterprise() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-10%' });

  return (
    <section className="relative py-20 overflow-hidden bg-[#0a1628]">
      {/* Simple grid background */}
      <CrazyBackground variant="grid" color="#1890ff" />
      <CrazyBackground variant="particles" intensity="low" color="#1890ff" />

      {/* Mascot */}
      <motion.div
        className="absolute left-6 lg:left-10 bottom-16 z-20 hidden lg:block"
        animate={{ y: [-10, 10, -10] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <Mascot size={120} />
      </motion.div>
      
      <Container className="relative z-10">
        <div ref={ref}>
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-12"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 mb-5 text-sm font-medium text-[#1890ff] bg-[#1890ff]/10 border border-[#1890ff]/20 rounded-full">
              <Building2 size={14} />
              Enterprise-решение
            </span>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-5">
              Для <span className="text-[#1890ff]">крупных</span> компаний
            </h2>
            
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Полный контроль над данными, соответствие требованиям регуляторов
            </p>
          </motion.div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 + i * 0.06 }}
                className="p-6 rounded-2xl bg-[#0d1a2d] border border-white/10 hover:border-[#1890ff]/40 hover:-translate-y-1 transition-all text-center"
              >
                <stat.icon className="text-[#1890ff] mx-auto mb-3" size={26} />
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
          
          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 15 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.05 }}
                className="p-5 rounded-xl bg-[#0d1a2d] border border-white/10 hover:border-[#1890ff]/40 hover:-translate-y-1 transition-all cursor-pointer"
              >
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-lg bg-[#1890ff]/10 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="text-[#1890ff]" size={22} />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">{feature.title}</h4>
                    <p className="text-gray-400 text-sm">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
