'use client';

import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import Container from '../ui/Container';
import CrazyBackground from '../ui/CrazyBackground';
import Mascot from '../ui/Mascot';
import { Shield, Server, Lock, FileKey, Users, Building2, Cpu, Database, Globe, Zap, CheckCircle } from 'lucide-react';

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
  const containerRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-10%' });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

  return (
    <section ref={containerRef} className="relative py-24 overflow-hidden bg-[#0a1628]">
      {/* CRAZY background */}
      <CrazyBackground variant="matrix" intensity="medium" color="#1890ff" />
      
      {/* Animated grid */}
      <motion.div 
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: 'linear-gradient(#1890ff 1px, transparent 1px), linear-gradient(90deg, #1890ff 1px, transparent 1px)',
          backgroundSize: '60px 60px',
          y: bgY,
        }}
      />
      
      {/* Floating orbs */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full blur-3xl"
          style={{
            width: 400 + i * 100,
            height: 400 + i * 100,
            left: `${(i * 25) % 80}%`,
            top: `${(i * 20) % 60}%`,
            background: `radial-gradient(circle, rgba(24,144,255,${0.15 - i * 0.02}) 0%, transparent 70%)`,
          }}
          animate={{
            x: [0, 60, 0],
            y: [0, -40, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 12 + i * 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Security shield animation */}
      <motion.div
        className="absolute right-10 top-20 opacity-10 hidden xl:block"
        animate={{ 
          rotate: [0, 10, -10, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      >
        <Shield size={200} className="text-[#1890ff]" />
      </motion.div>

      {/* Mascot */}
      <motion.div
        className="absolute left-5 lg:left-10 bottom-20 z-20 hidden lg:block"
        animate={{
          y: [-15, 15, -15],
          rotate: [-5, 5, -5],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <Mascot size={150} variant="float" />
      </motion.div>
      
      <Container className="relative z-10">
        <div ref={ref}>
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-16"
          >
            <motion.span 
              className="inline-flex items-center gap-2 px-5 py-2.5 mb-6 text-sm font-medium text-[#1890ff] bg-[#1890ff]/10 border border-[#1890ff]/20 rounded-full"
              whileHover={{ scale: 1.05 }}
              animate={{
                boxShadow: ['0 0 20px rgba(24,144,255,0.2)', '0 0 40px rgba(24,144,255,0.4)', '0 0 20px rgba(24,144,255,0.2)'],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <Building2 size={16} />
              </motion.div>
              Enterprise-решение
            </motion.span>
            
            <motion.h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
            >
              Для{' '}
              <span className="text-[#1890ff]">крупных</span> компаний
            </motion.h2>
            
            <motion.p
              className="text-xl text-gray-400 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2 }}
            >
              Полный контроль над данными, соответствие требованиям регуляторов
            </motion.p>
          </motion.div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-16">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 50, scale: 0.8 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ delay: 0.1 + i * 0.1, type: 'spring' }}
                whileHover={{ 
                  y: -10, 
                  scale: 1.05,
                  boxShadow: '0 20px 40px rgba(24,144,255,0.2)',
                }}
                className="relative p-8 rounded-3xl bg-white/5 backdrop-blur border border-white/10 hover:border-[#1890ff]/50 transition-all text-center overflow-hidden cursor-pointer group"
              >
                {/* Hover glow */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-[#1890ff]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
                />
                
                <motion.div 
                  className="relative"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <stat.icon className="text-[#1890ff] mx-auto mb-4" size={32} />
                </motion.div>
                <motion.div 
                  className="text-3xl md:text-4xl font-bold text-white mb-2 relative"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-sm text-gray-400 relative">{stat.label}</div>
              </motion.div>
            ))}
          </div>
          
          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50, rotate: i % 2 === 0 ? -5 : 5 }}
                animate={isInView ? { opacity: 1, x: 0, rotate: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.1, type: 'spring' }}
                whileHover={{ 
                  y: -8, 
                  scale: 1.03,
                  boxShadow: '0 20px 40px rgba(24,144,255,0.15)',
                }}
                className="relative p-6 rounded-2xl bg-white/5 backdrop-blur border border-white/10 hover:border-[#1890ff]/50 transition-all cursor-pointer group overflow-hidden"
              >
                {/* Shimmer effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '200%' }}
                  transition={{ duration: 0.6 }}
                />
                
                <div className="relative flex items-start gap-4">
                  <motion.div 
                    className="w-12 h-12 rounded-xl bg-[#1890ff]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#1890ff]/20 transition-colors"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <feature.icon className="text-[#1890ff]" size={24} />
                  </motion.div>
                  <div>
                    <h4 className="font-bold text-white mb-1">{feature.title}</h4>
                    <p className="text-gray-400 text-sm">{feature.description}</p>
                  </div>
                  <motion.div
                    className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  >
                    <CheckCircle size={20} className="text-[#1890ff]" />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
