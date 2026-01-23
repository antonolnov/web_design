'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Container from '../ui/Container';
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
    <section ref={ref} className="relative py-24 bg-[#0a1628]">
      {/* Subtle grid */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}
      />
      
      {/* Subtle glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full opacity-20"
        style={{ background: 'radial-gradient(ellipse, rgba(24,144,255,0.3) 0%, transparent 70%)' }}
      />
      
      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 mb-4 text-sm font-medium text-[#1890ff] bg-[#1890ff]/10 border border-[#1890ff]/20 rounded-full">
            <Building2 size={14} />
            Enterprise-решение
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Для крупных компаний
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Полный контроль над данными, соответствие требованиям регуляторов, выделенная поддержка
          </p>
        </motion.div>
        
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.05 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#1890ff]/30 transition-all text-center"
            >
              <stat.icon className="text-[#1890ff] mx-auto mb-3" size={24} />
              <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-sm text-gray-500">{stat.label}</div>
            </motion.div>
          ))}
        </div>
        
        {/* Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.05 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#1890ff]/30 hover:bg-white/[0.07] transition-all"
            >
              <div className="w-12 h-12 mb-4 rounded-xl bg-[#1890ff]/10 flex items-center justify-center">
                <feature.icon className="text-[#1890ff]" size={22} />
              </div>
              <h3 className="text-lg font-semibold text-white mb-1">{feature.title}</h3>
              <p className="text-sm text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
          className="mt-12 text-center"
        >
          <motion.a
            href="#demo"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#1890ff] text-white rounded-2xl font-medium hover:bg-[#40a9ff] transition-colors"
          >
            Обсудить Enterprise
            <span>→</span>
          </motion.a>
          <p className="mt-3 text-sm text-gray-500">Бесплатная консультация с архитектором</p>
        </motion.div>
      </Container>
    </section>
  );
}
