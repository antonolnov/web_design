'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Sparkles, Building2, TrendingUp, GitBranch, Zap, Clock, Users } from 'lucide-react';
import Container from '../ui/Container';
import ContentCard from '../ui/ContentCard';
import Mascot from '../ui/Mascot';

const stats = [
  { icon: Sparkles, value: 'AI', label: 'Умный найм', color: '#1890ff' },
  { icon: Building2, value: '2000+', label: 'Компаний', color: '#722ed1' },
  { icon: TrendingUp, value: '3x', label: 'Быстрее найм', color: '#52c41a' },
  { icon: GitBranch, value: '∞', label: 'Воронок подбора', color: '#fa8c16' },
];

const features = [
  { icon: Zap, title: 'Автоматизация', desc: 'Рутинные задачи на автопилоте' },
  { icon: Clock, title: 'Экономия времени', desc: 'До 70% меньше времени на найм' },
  { icon: Users, title: 'Единая база', desc: 'Все кандидаты в одном месте' },
];

export default function StatsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-16 px-4">
      <Container>
        <ContentCard variant="white" className="mb-8">
          <div ref={ref}>
            {/* Stats grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: i * 0.1 }}
                  className="text-center"
                >
                  <div 
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-3"
                    style={{ backgroundColor: `${stat.color}15` }}
                  >
                    <stat.icon size={26} style={{ color: stat.color }} />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-1">{stat.value}</div>
                  <div className="text-gray-500 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Divider */}
            <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mb-10" />

            {/* Features row */}
            <div className="grid md:grid-cols-3 gap-6">
              {features.map((feature, i) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="flex items-start gap-4 p-4 rounded-2xl bg-gray-50 hover:bg-[#e6f4ff] transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#1890ff]/10 flex items-center justify-center flex-shrink-0">
                    <feature.icon size={22} className="text-[#1890ff]" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 mb-1">{feature.title}</div>
                    <div className="text-sm text-gray-500">{feature.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Mascot - larger and positioned in empty space */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.6 }}
              className="flex justify-end mt-6 mr-4"
            >
              <Mascot size={140} variant="02" />
            </motion.div>
          </div>
        </ContentCard>
      </Container>
    </section>
  );
}
