'use client';

import { motion } from 'framer-motion';
import {
  Shield,
  Lock,
  Server,
  Eye,
  FileCheck,
  Users,
  Key,
  AlertTriangle,
  CheckCircle2,
} from 'lucide-react';
import Container from '../ui/Container';
import SectionTitle from '../ui/SectionTitle';

const securityFeatures = [
  {
    icon: Lock,
    title: 'Шифрование данных',
    description: 'AES-256 шифрование всех данных at rest и in transit. TLS 1.3 для всех соединений.',
  },
  {
    icon: Server,
    title: 'Надёжная инфраструктура',
    description: 'Серверы в сертифицированных дата-центрах Tier III. Географически распределённые бэкапы.',
  },
  {
    icon: Eye,
    title: 'Контроль доступа',
    description: 'Гибкие роли и права доступа. SSO через SAML 2.0 и OAuth. Двухфакторная аутентификация.',
  },
  {
    icon: FileCheck,
    title: 'Соответствие стандартам',
    description: 'Соответствие 152-ФЗ, GDPR. Регулярные аудиты безопасности и пентесты.',
  },
  {
    icon: Users,
    title: 'Аудит действий',
    description: 'Полный лог всех действий пользователей. Отслеживание изменений и экспорта данных.',
  },
  {
    icon: Key,
    title: 'API безопасность',
    description: 'Rate limiting, IP whitelist, токены с ограниченным сроком. Webhook signatures.',
  },
];

const certifications = [
  { name: '152-ФЗ', description: 'Персональные данные' },
  { name: 'GDPR', description: 'Европейский регламент' },
  { name: 'ISO 27001', description: 'Информационная безопасность' },
  { name: 'SOC 2', description: 'Аудит безопасности' },
];

export default function Security() {
  return (
    <section id="security" className="py-24 bg-white">
      <Container>
        <SectionTitle
          badge="Безопасность"
          title="Ваши данные под надёжной защитой"
          subtitle="Enterprise-уровень безопасности для компаний любого размера. Соответствие всем требованиям регуляторов."
        />

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Security Visual */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative w-full max-w-md mx-auto">
              {/* Central Shield */}
              <motion.div
                className="w-48 h-48 mx-auto bg-gradient-to-br from-[#1890ff] to-[#0d6edb] rounded-[32px] flex items-center justify-center shadow-[0_20px_60px_rgba(24,144,255,0.3)]"
                animate={{
                  boxShadow: [
                    '0 20px 60px rgba(24,144,255,0.3)',
                    '0 20px 80px rgba(24,144,255,0.5)',
                    '0 20px 60px rgba(24,144,255,0.3)',
                  ],
                }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              >
                <Shield className="text-white" size={80} />
              </motion.div>

              {/* Orbiting Elements */}
              <motion.div
                className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white rounded-[16px] shadow-lg flex items-center justify-center"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              >
                <Lock className="text-[#1890ff]" size={28} />
              </motion.div>

              <motion.div
                className="absolute top-1/2 -left-8 -translate-y-1/2 w-14 h-14 bg-white rounded-[14px] shadow-lg flex items-center justify-center"
                animate={{ x: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              >
                <Key className="text-[#1890ff]" size={24} />
              </motion.div>

              <motion.div
                className="absolute top-1/2 -right-8 -translate-y-1/2 w-14 h-14 bg-white rounded-[14px] shadow-lg flex items-center justify-center"
                animate={{ x: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              >
                <Eye className="text-[#1890ff]" size={24} />
              </motion.div>

              <motion.div
                className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-16 h-16 bg-white rounded-[16px] shadow-lg flex items-center justify-center"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
              >
                <Server className="text-[#1890ff]" size={28} />
              </motion.div>

              {/* Connection Lines */}
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none"
                viewBox="0 0 300 300"
              >
                <motion.path
                  d="M150 50 L150 100"
                  stroke="#1890ff"
                  strokeWidth="2"
                  strokeDasharray="5,5"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 0.3 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1 }}
                />
                <motion.path
                  d="M50 150 L100 150"
                  stroke="#1890ff"
                  strokeWidth="2"
                  strokeDasharray="5,5"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 0.3 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.2 }}
                />
                <motion.path
                  d="M200 150 L250 150"
                  stroke="#1890ff"
                  strokeWidth="2"
                  strokeDasharray="5,5"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 0.3 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.4 }}
                />
                <motion.path
                  d="M150 200 L150 250"
                  stroke="#1890ff"
                  strokeWidth="2"
                  strokeDasharray="5,5"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 0.3 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.6 }}
                />
              </svg>
            </div>
          </motion.div>

          {/* Features List */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
          >
            {securityFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="flex gap-4 p-4 rounded-[16px] hover:bg-gray-50 transition-colors"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <div className="w-12 h-12 bg-[#e6f4ff] rounded-[12px] flex items-center justify-center flex-shrink-0">
                  <feature.icon className="text-[#1890ff]" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">{feature.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Certifications */}
        <motion.div
          className="bg-gray-50 rounded-[24px] p-8 lg:p-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Сертификации и соответствие стандартам
              </h3>
              <p className="text-gray-600 mb-6">
                WorkHere соответствует всем требованиям регуляторов для обработки персональных данных. 
                Мы регулярно проходим независимый аудит безопасности.
              </p>
              <div className="flex items-center gap-4 p-4 bg-white rounded-[16px] border border-[#1890ff]/20">
                <div className="w-10 h-10 bg-[#e6f4ff] rounded-full flex items-center justify-center">
                  <AlertTriangle className="text-[#1890ff]" size={20} />
                </div>
                <div className="text-sm">
                  <div className="font-semibold text-gray-900">Инцидентов безопасности: 0</div>
                  <div className="text-gray-500">За всё время работы платформы</div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.name}
                  className="bg-white rounded-[16px] p-6 text-center shadow-sm hover:shadow-md transition-shadow"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="w-12 h-12 mx-auto mb-3 bg-[#e6f4ff] rounded-full flex items-center justify-center">
                    <CheckCircle2 className="text-[#1890ff]" size={24} />
                  </div>
                  <div className="text-xl font-bold text-gray-900 mb-1">{cert.name}</div>
                  <div className="text-sm text-gray-500">{cert.description}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
