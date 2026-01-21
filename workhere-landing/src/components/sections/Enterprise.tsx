'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Container from '../ui/Container';
import { Shield, Server, Lock, FileKey, Users, Building2, Cpu, Database, Globe, Zap } from 'lucide-react';

const features = [
  { icon: Shield, title: 'ISO 27001', description: 'Сертифицированная система ИБ' },
  { icon: Server, title: 'On-Premise', description: 'Развертывание в вашем контуре' },
  { icon: Lock, title: 'SSO / LDAP', description: 'Корпоративная авторизация' },
  { icon: FileKey, title: 'Шифрование', description: 'AES-256 и TLS 1.3' },
  { icon: Users, title: 'RBAC', description: 'Гранулярный контроль доступа' },
  { icon: Database, title: 'Audit Log', description: 'Полный лог действий' },
];

const stats = [
  { value: '99.9%', label: 'SLA', icon: Zap },
  { value: '24/7', label: 'Поддержка', icon: Globe },
  { value: '50+', label: 'Enterprise клиентов', icon: Building2 },
  { value: '<1ч', label: 'Время отклика', icon: Cpu },
];

export default function Enterprise() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start end', 'end start'] });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);

  return (
    <section ref={containerRef} className="relative py-32 bg-gray-950 overflow-hidden">
      <motion.div className="absolute inset-0 opacity-[0.03]" style={{ y: backgroundY }}>
        <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '50px 50px' }} />
      </motion.div>
      <motion.div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#1890ff] rounded-full blur-[150px] opacity-20" animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }} transition={{ duration: 8, repeat: Infinity }} />
      <motion.div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500 rounded-full blur-[120px] opacity-10" animate={{ scale: [1.2, 1, 1.2], opacity: [0.1, 0.15, 0.1] }} transition={{ duration: 6, repeat: Infinity }} />
      <Container className="relative z-10">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-center mb-20">
          <motion.div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full border border-gray-700 bg-gray-900/50" whileHover={{ scale: 1.05 }}><Building2 className="text-[#1890ff]" size={16} /><span className="text-sm text-gray-400">Enterprise-решение</span></motion.div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">Для крупных компаний,<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1890ff] to-purple-400">которым важна безопасность</span></h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">Полный контроль над данными, соответствие требованиям регуляторов, выделенная поддержка</p>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
          {stats.map((stat, i) => (<motion.div key={stat.label} className="relative p-6 rounded-[20px] bg-gradient-to-b from-gray-800/50 to-gray-900/50 border border-gray-800 backdrop-blur-sm" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 * i }} whileHover={{ scale: 1.05, borderColor: 'rgba(24,144,255,0.5)' }}><stat.icon className="text-[#1890ff] mb-3" size={24} /><div className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}</div><div className="text-sm text-gray-500">{stat.label}</div><div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#1890ff]/30 rounded-tr-[20px]" /></motion.div>))}
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (<motion.div key={feature.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="group relative"><motion.div className="relative p-8 rounded-[20px] bg-gray-900/50 border border-gray-800 backdrop-blur-sm h-full" whileHover={{ scale: 1.02, borderColor: 'rgba(24,144,255,0.5)' }} transition={{ duration: 0.3 }}><motion.div className="w-14 h-14 mb-5 rounded-[14px] bg-gradient-to-br from-[#1890ff]/20 to-[#1890ff]/5 border border-[#1890ff]/20 flex items-center justify-center" whileHover={{ rotate: [0, -5, 5, 0] }} transition={{ duration: 0.5 }}><feature.icon className="text-[#1890ff]" size={24} /></motion.div><h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3><p className="text-gray-400">{feature.description}</p></motion.div></motion.div>))}
        </div>
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }} className="mt-20 text-center">
          <motion.a href="#demo" className="inline-flex items-center gap-3 px-8 py-4 bg-white text-gray-900 font-semibold rounded-full" whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(255,255,255,0.3)' }} whileTap={{ scale: 0.98 }}>Обсудить Enterprise<motion.span animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>→</motion.span></motion.a>
          <p className="mt-4 text-sm text-gray-500">Бесплатная консультация с архитектором</p>
        </motion.div>
      </Container>
    </section>
  );
}
