'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Shield, Server, Lock, FileKey, Users, Building2, Cpu, Database, Globe, Zap } from 'lucide-react';
import Container from '../ui/Container';
import ContentCard from '../ui/ContentCard';
import Mascot from '../ui/Mascot';

const features = [
  { icon: Shield, title: 'ISO 27001', description: 'Сертифицированная система информационной безопасности' },
  { icon: Server, title: 'On-Premise', description: 'Развертывание в вашем контуре безопасности' },
  { icon: Lock, title: 'SSO / LDAP', description: 'Интеграция с корпоративной авторизацией' },
  { icon: FileKey, title: 'Шифрование', description: 'AES-256 в покое и TLS 1.3 при передаче' },
  { icon: Users, title: 'Управление ролями', description: 'Гранулярный контроль доступа' },
  { icon: Database, title: 'Журнал действий', description: 'Полный аудит всех операций' },
];

const stats = [
  { value: '99.9%', label: 'Доступность', icon: Zap },
  { value: '24/7', label: 'Поддержка', icon: Globe },
  { value: '50+', label: 'Крупных клиентов', icon: Building2 },
  { value: '<1ч', label: 'Время отклика', icon: Cpu },
];

export default function EnterpriseSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-16 px-4">
      <Container>
        <ContentCard variant="dark">
          <div ref={ref}>
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              className="text-center mb-10"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 mb-4 text-sm font-medium text-[#1890ff] bg-[#1890ff]/10 border border-[#1890ff]/20 rounded-full">
                <Building2 size={14} />
                Enterprise-решение
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
                Для <span className="text-[#1890ff]">крупных</span> компаний
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Полный контроль над данными, соответствие требованиям регуляторов
              </p>
            </motion.div>

            {/* Stats row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: i * 0.1 }}
                  className="text-center p-4 bg-white/5 rounded-xl border border-white/10"
                >
                  <stat.icon size={24} className="text-[#1890ff] mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Features grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {features.map((feature, i) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.05 }}
                  className="flex items-start gap-4 p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#1890ff]/20 flex items-center justify-center flex-shrink-0">
                    <feature.icon size={20} className="text-[#1890ff]" />
                  </div>
                  <div>
                    <div className="font-semibold text-white mb-1">{feature.title}</div>
                    <div className="text-sm text-gray-400">{feature.description}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Mascot */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.5 }}
              className="flex justify-center mt-8"
            >
              <Mascot size={120} variant="05" showSpeechBubble speechText="Надёжно! 🔐" />
            </motion.div>
          </div>
        </ContentCard>
      </Container>
    </section>
  );
}
