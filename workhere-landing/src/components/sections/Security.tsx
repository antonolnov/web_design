'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
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
  const isInView = useInView(ref, { once: true, margin: '-10%' });

  return (
    <section id="security" className="relative py-20 overflow-hidden bg-gradient-to-b from-white via-[#f8fbff] to-white">
      {/* Optimized background */}
      <CrazyBackground variant="particles" intensity="low" />
      <CrazyBackground variant="waves" intensity="low" />
      
      {/* Just 2 orbs */}
      <motion.div
        className="absolute -left-40 top-1/4 w-[400px] h-[400px] rounded-full blur-3xl"
        style={{ background: 'radial-gradient(circle, rgba(24,144,255,0.1) 0%, transparent 70%)' }}
        animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -right-40 bottom-1/4 w-[350px] h-[350px] rounded-full blur-3xl"
        style={{ background: 'radial-gradient(circle, rgba(64,169,255,0.1) 0%, transparent 70%)' }}
        animate={{ x: [0, -30, 0], y: [0, 20, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Mascot */}
      <motion.div
        className="absolute right-6 lg:right-16 top-24 z-20 hidden lg:block"
        animate={{ y: [-15, 15, -15] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <Mascot size={140} variant="float" />
      </motion.div>
      
      <Container className="relative z-10">
        <div ref={ref}>
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-14"
          >
            <motion.span 
              className="inline-flex items-center gap-2 px-4 py-2 mb-5 text-sm font-medium text-[#1890ff] bg-[#e6f4ff] rounded-full"
              whileHover={{ scale: 1.03 }}
            >
              <Shield size={14} />
              Безопасность данных
              <Sparkles size={12} />
            </motion.span>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-5">
              Ваши данные под <span className="text-[#1890ff]">защитой</span>
            </h2>
            
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Многоуровневая система безопасности, соответствие российскому законодательству
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 mb-10">
            {/* Security Features */}
            <div className="space-y-4">
              {securityFeatures.map((feature, i) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.15 + i * 0.08 }}
                  whileHover={{ x: 6 }}
                  className="flex gap-4 p-5 bg-white rounded-xl border border-gray-100 hover:border-[#1890ff]/30 hover:shadow-lg transition-all cursor-pointer"
                >
                  <div className="w-12 h-12 bg-[#e6f4ff] rounded-xl flex items-center justify-center flex-shrink-0">
                    <feature.icon className="text-[#1890ff]" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">{feature.title}</h4>
                    <p className="text-gray-500 text-sm">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Deployment & Data Quality */}
            <div className="space-y-5">
              {/* Deployment Options */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.25 }}
                className="bg-gradient-to-br from-[#e6f4ff] to-white rounded-2xl p-6 border border-[#1890ff]/10"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Server size={22} className="text-[#1890ff]" />
                  Варианты развертывания
                </h3>
                <div className="grid gap-3">
                  {deploymentOptions.map((option, i) => (
                    <motion.div 
                      key={option.title}
                      initial={{ opacity: 0, y: 15 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.35 + i * 0.08 }}
                      whileHover={{ x: 5 }}
                      className="flex items-start gap-3 p-3 bg-white rounded-xl hover:shadow-md transition-all cursor-pointer"
                    >
                      <div className="w-9 h-9 bg-[#e6f4ff] rounded-lg flex items-center justify-center flex-shrink-0">
                        <option.icon size={18} className="text-[#1890ff]" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 text-sm">{option.title}</h4>
                        <p className="text-xs text-gray-500">{option.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Data Quality */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.4 }}
                className="bg-white rounded-2xl p-6 border border-gray-100 shadow-md"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <CheckCircle size={22} className="text-green-500" />
                  Качество данных
                </h3>
                <div className="grid gap-3">
                  {dataQuality.map((item, i) => (
                    <motion.div 
                      key={item.title}
                      initial={{ opacity: 0, y: 15 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.5 + i * 0.08 }}
                      whileHover={{ x: 5 }}
                      className="flex items-start gap-3 p-3 bg-gray-50 rounded-xl hover:bg-[#e6f4ff]/50 transition-all cursor-pointer"
                    >
                      <div className="w-9 h-9 bg-white rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm">
                        <item.icon size={18} className="text-[#1890ff]" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 text-sm">{item.title}</h4>
                        <p className="text-xs text-gray-500">{item.description}</p>
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
