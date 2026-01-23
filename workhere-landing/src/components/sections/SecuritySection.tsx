'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Shield, Lock, Key, Server, Users, FileCheck, Cloud, Database, CheckCircle, Sparkles } from 'lucide-react';
import Container from '../ui/Container';
import ContentCard from '../ui/ContentCard';
import Mascot from '../ui/Mascot';

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
  { icon: FileCheck, title: 'Дедупликация', description: 'Автоматическое объединение дублей кандидатов' },
  { icon: CheckCircle, title: 'Валидация', description: 'Проверка корректности email и телефонов' },
];

export default function SecuritySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="security" className="py-16 px-4">
      <Container>
        <ContentCard variant="white">
          <div ref={ref}>
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              className="text-center mb-10"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 mb-4 text-sm font-medium text-[#1890ff] bg-[#e6f4ff] rounded-full">
                <Shield size={14} />
                Безопасность данных
                <Sparkles size={12} />
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                Ваши данные под <span className="text-[#1890ff]">защитой</span>
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Соответствие всем требованиям законодательства и корпоративным стандартам
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Security features */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-4">Защита данных</h3>
                <div className="space-y-3">
                  {securityFeatures.map((feature, i) => (
                    <motion.div
                      key={feature.title}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl hover:bg-[#e6f4ff] transition-colors"
                    >
                      <div className="w-10 h-10 rounded-lg bg-[#1890ff]/10 flex items-center justify-center flex-shrink-0">
                        <feature.icon size={20} className="text-[#1890ff]" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900 mb-0.5">{feature.title}</div>
                        <div className="text-sm text-gray-500">{feature.description}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Deployment & Data quality */}
              <div className="space-y-6">
                {/* Deployment options */}
                <div>
                  <h3 className="font-semibold text-gray-900 mb-4">Варианты размещения</h3>
                  <div className="space-y-3">
                    {deploymentOptions.map((option, i) => (
                      <motion.div
                        key={option.title}
                        initial={{ opacity: 0, x: 20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.2 + i * 0.1 }}
                        className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl hover:bg-[#e6f4ff] transition-colors"
                      >
                        <div className="w-10 h-10 rounded-lg bg-[#1890ff]/10 flex items-center justify-center flex-shrink-0">
                          <option.icon size={20} className="text-[#1890ff]" />
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900 mb-0.5">{option.title}</div>
                          <div className="text-sm text-gray-500">{option.description}</div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Data quality */}
                <div>
                  <h3 className="font-semibold text-gray-900 mb-4">Качество данных</h3>
                  <div className="space-y-3">
                    {dataQuality.map((item, i) => (
                      <motion.div
                        key={item.title}
                        initial={{ opacity: 0, x: 20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.5 + i * 0.1 }}
                        className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl hover:bg-[#e6f4ff] transition-colors"
                      >
                        <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center flex-shrink-0">
                          <item.icon size={20} className="text-green-600" />
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900 mb-0.5">{item.title}</div>
                          <div className="text-sm text-gray-500">{item.description}</div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Mascot */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.6 }}
                  className="flex justify-center"
                >
                  <Mascot size={200} variant="01" />
                </motion.div>
              </div>
            </div>
          </div>
        </ContentCard>
      </Container>
    </section>
  );
}
