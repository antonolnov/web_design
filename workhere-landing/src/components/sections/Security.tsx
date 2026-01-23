'use client';

import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import Container from '../ui/Container';
import CrazyBackground from '../ui/CrazyBackground';
import Mascot from '../ui/Mascot';
import { Shield, Lock, Key, Server, Users, FileCheck, Cloud, Database, CheckCircle, Sparkles } from 'lucide-react';

const securityFeatures = [
  { icon: Shield, title: '152-ФЗ', description: 'Полное соответствие законодательству о персональных данных' },
  { icon: Lock, title: 'Шифрование', description: 'Все данные защищены AES-256 в покое и TLS 1.3 при передаче' },
  { icon: Key, title: 'SSO интеграция', description: 'SAML 2.0, OAuth 2.0, LDAP, Active Directory' },
  { icon: Users, title: 'Гранулярные роли', description: 'Тонкая настройка прав для каждого пользователя' },
];

const deploymentOptions = [
  { icon: Cloud, title: 'Облако WorkHere', description: 'Готовое решение с гарантией SLA 99.9%' },
  { icon: Server, title: 'On-Premise', description: 'Развертывание в вашей инфраструктуре' },
  { icon: Database, title: 'Гибридный вариант', description: 'Данные у вас, интерфейс в облаке' },
];

const dataQuality = [
  { icon: FileCheck, title: 'Дедупликация', description: 'Автоматическое объединение дублей' },
  { icon: CheckCircle, title: 'Валидация', description: 'Проверка корректности данных' },
];

export default function Security() {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-10%' });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const bgScale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.1, 1]);

  return (
    <section id="security" ref={containerRef} className="relative py-24 overflow-hidden bg-gradient-to-b from-white via-[#f8fbff] to-white">
      {/* CRAZY background */}
      <CrazyBackground variant="particles" intensity="high" />
      <CrazyBackground variant="waves" intensity="medium" />
      
      {/* Floating shield icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${(i * 18) % 90}%`,
              top: `${(i * 15) % 80}%`,
            }}
            animate={{
              y: [0, -30, 0],
              rotate: [0, 360],
              opacity: [0.05, 0.15, 0.05],
            }}
            transition={{
              duration: 6 + i,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          >
            <Shield size={30 + i * 10} className="text-[#1890ff]" />
          </motion.div>
        ))}
      </div>

      {/* Animated gradient orbs */}
      <motion.div
        className="absolute -left-60 top-1/4 w-[500px] h-[500px] rounded-full blur-3xl"
        style={{ 
          background: 'radial-gradient(circle, rgba(24,144,255,0.15) 0%, transparent 70%)',
          scale: bgScale,
        }}
        animate={{
          x: [0, 50, 0],
          y: [0, -30, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -right-60 bottom-1/4 w-[500px] h-[500px] rounded-full blur-3xl"
        style={{ 
          background: 'radial-gradient(circle, rgba(64,169,255,0.15) 0%, transparent 70%)',
          scale: bgScale,
        }}
        animate={{
          x: [0, -50, 0],
          y: [0, 30, 0],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Mascot */}
      <motion.div
        className="absolute right-5 lg:right-20 top-32 z-20 hidden lg:block"
        animate={{
          y: [-20, 20, -20],
          rotate: [-8, 8, -8],
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <Mascot size={160} variant="float" />
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
              className="inline-flex items-center gap-2 px-5 py-2.5 mb-6 text-sm font-medium text-[#1890ff] bg-[#e6f4ff] rounded-full"
              whileHover={{ scale: 1.05 }}
              animate={{
                boxShadow: ['0 0 15px rgba(24,144,255,0.2)', '0 0 30px rgba(24,144,255,0.4)', '0 0 15px rgba(24,144,255,0.2)'],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <Shield size={16} />
              </motion.div>
              Безопасность данных
              <motion.div
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <Sparkles size={14} />
              </motion.div>
            </motion.span>
            
            <motion.h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
            >
              Ваши данные под{' '}
              <span className="text-[#1890ff]">защитой</span>
            </motion.h2>
            
            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2 }}
            >
              Многоуровневая система безопасности, соответствие российскому законодательству
            </motion.p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Security Features */}
            <div className="space-y-4">
              {securityFeatures.map((feature, i) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: -50, rotate: -3 }}
                  animate={isInView ? { opacity: 1, x: 0, rotate: 0 } : {}}
                  transition={{ delay: 0.2 + i * 0.1, type: 'spring' }}
                  whileHover={{ 
                    x: 10, 
                    scale: 1.02,
                    boxShadow: '0 20px 40px rgba(24,144,255,0.15)',
                  }}
                  className="relative flex gap-4 p-6 bg-white rounded-2xl border border-gray-100 hover:border-[#1890ff]/30 transition-all cursor-pointer group overflow-hidden"
                >
                  {/* Shimmer */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-[#1890ff]/5 to-transparent"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '200%' }}
                    transition={{ duration: 0.6 }}
                  />
                  
                  <motion.div 
                    className="relative w-14 h-14 bg-[#e6f4ff] rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#1890ff]/20 transition-colors"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <feature.icon className="text-[#1890ff]" size={26} />
                  </motion.div>
                  <div className="relative">
                    <h4 className="font-bold text-gray-900 mb-1 text-lg">{feature.title}</h4>
                    <p className="text-gray-500">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Deployment & Data Quality */}
            <div className="space-y-6">
              {/* Deployment Options */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3, type: 'spring' }}
                className="bg-gradient-to-br from-[#e6f4ff] to-white rounded-3xl p-6 border border-[#1890ff]/10"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-5 flex items-center gap-2">
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  >
                    <Server size={24} className="text-[#1890ff]" />
                  </motion.div>
                  Варианты развертывания
                </h3>
                <div className="grid gap-4">
                  {deploymentOptions.map((option, i) => (
                    <motion.div 
                      key={option.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.4 + i * 0.1 }}
                      whileHover={{ x: 8, scale: 1.02 }}
                      className="flex items-start gap-3 p-4 bg-white rounded-xl hover:shadow-lg transition-all cursor-pointer"
                    >
                      <motion.div 
                        className="w-10 h-10 bg-[#e6f4ff] rounded-lg flex items-center justify-center flex-shrink-0"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <option.icon size={20} className="text-[#1890ff]" />
                      </motion.div>
                      <div>
                        <h4 className="font-semibold text-gray-900">{option.title}</h4>
                        <p className="text-sm text-gray-500">{option.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Data Quality */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.5, type: 'spring' }}
                className="bg-white rounded-3xl p-6 border border-gray-100 shadow-lg"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-5 flex items-center gap-2">
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <CheckCircle size={24} className="text-green-500" />
                  </motion.div>
                  Качество данных
                </h3>
                <div className="grid gap-4">
                  {dataQuality.map((item, i) => (
                    <motion.div 
                      key={item.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.6 + i * 0.1 }}
                      whileHover={{ x: 8 }}
                      className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl hover:bg-[#e6f4ff]/50 transition-all cursor-pointer"
                    >
                      <motion.div 
                        className="w-10 h-10 bg-white rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <item.icon size={20} className="text-[#1890ff]" />
                      </motion.div>
                      <div>
                        <h4 className="font-semibold text-gray-900">{item.title}</h4>
                        <p className="text-sm text-gray-500">{item.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
