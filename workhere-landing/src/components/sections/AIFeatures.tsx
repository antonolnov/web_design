'use client';

import { motion } from 'framer-motion';
import { Bot, Sparkles, Brain, Wand2, MessagesSquare, FileSearch } from 'lucide-react';
import Container from '../ui/Container';
import SectionTitle from '../ui/SectionTitle';

const aiFeatures = [
  {
    icon: Brain,
    title: 'AI-скоринг кандидатов',
    description:
      'Автоматическая оценка соответствия кандидата вакансии на основе навыков, опыта и достижений.',
    score: 92,
  },
  {
    icon: FileSearch,
    title: 'Семантический поиск',
    description:
      'Находите кандидатов не только по ключевым словам, но и по смыслу. Понимание контекста и синонимов.',
    score: 88,
  },
  {
    icon: MessagesSquare,
    title: 'Генерация откликов',
    description:
      'AI-помощник составляет персонализированные письма кандидатам на основе их профиля и вакансии.',
    score: 95,
  },
  {
    icon: Wand2,
    title: 'Авто-парсинг резюме',
    description:
      'Извлечение структурированных данных из резюме любого формата с точностью 99%.',
    score: 99,
  },
];

export default function AIFeatures() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <Container>
        <SectionTitle
          badge="AI-возможности"
          title="Искусственный интеллект в рекрутинге"
          subtitle="Используйте силу AI для автоматизации рутины и принятия лучших решений о найме."
        />

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - AI Demo Visual */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-white rounded-[24px] p-6 shadow-[0_20px_60px_rgba(24,144,255,0.1)] border border-gray-100">
              {/* AI Header */}
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
                <div className="w-12 h-12 bg-gradient-to-br from-[#1890ff] to-[#0d6edb] rounded-[12px] flex items-center justify-center">
                  <Bot className="text-white" size={24} />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">WorkHere AI</div>
                  <div className="text-sm text-gray-500">Анализирую кандидата...</div>
                </div>
                <motion.div
                  className="ml-auto flex gap-1"
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <div className="w-2 h-2 rounded-full bg-[#1890ff]" />
                  <div className="w-2 h-2 rounded-full bg-[#40a9ff]" />
                  <div className="w-2 h-2 rounded-full bg-[#69c0ff]" />
                </motion.div>
              </div>

              {/* Candidate Card */}
              <div className="bg-gray-50 rounded-[16px] p-4 mb-4">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 bg-[#1890ff] rounded-full flex items-center justify-center text-white font-bold text-lg">
                    ИС
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Иван Смирнов</div>
                    <div className="text-sm text-gray-500">Senior Python Developer</div>
                    <div className="text-xs text-[#1890ff]">5 лет опыта • Москва</div>
                  </div>
                </div>

                {/* AI Analysis */}
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-600">Соответствие вакансии</span>
                      <span className="font-bold text-[#1890ff]">92%</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-[#1890ff] to-[#40a9ff] rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: '92%' }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5, duration: 1 }}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-600">Технические навыки</span>
                      <span className="font-bold text-[#1890ff]">88%</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-[#1890ff] to-[#40a9ff] rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: '88%' }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.7, duration: 1 }}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-600">Soft skills</span>
                      <span className="font-bold text-[#1890ff]">85%</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-[#1890ff] to-[#40a9ff] rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: '85%' }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.9, duration: 1 }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* AI Recommendations */}
              <motion.div
                className="bg-[#e6f4ff] rounded-[12px] p-4"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 1.2, duration: 0.5 }}
              >
                <div className="flex items-start gap-3">
                  <Sparkles className="text-[#1890ff] flex-shrink-0 mt-0.5" size={18} />
                  <div>
                    <div className="font-medium text-gray-900 mb-1">Рекомендация AI</div>
                    <p className="text-sm text-gray-600">
                      Сильный кандидат с релевантным опытом. Рекомендую пригласить 
                      на техническое интервью. Обратите внимание на опыт работы с микросервисами.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Floating elements */}
            <motion.div
              className="absolute -top-4 -right-4 bg-white rounded-[12px] shadow-lg p-3 border border-gray-100"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            >
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-[#e6f4ff] rounded-full flex items-center justify-center">
                  <Sparkles className="text-[#1890ff]" size={16} />
                </div>
                <span className="text-sm font-medium text-gray-900">AI Score: 92</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right - Features */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
          >
            {aiFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="flex gap-5 p-4 rounded-[16px] hover:bg-gray-50 transition-colors group"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <div className="w-14 h-14 bg-gradient-to-br from-[#e6f4ff] to-[#d1e9ff] rounded-[14px] flex items-center justify-center flex-shrink-0 group-hover:from-[#1890ff] group-hover:to-[#0d6edb] transition-all">
                  <feature.icon
                    className="text-[#1890ff] group-hover:text-white transition-colors"
                    size={26}
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-lg font-bold text-gray-900">{feature.title}</h4>
                    <span className="text-sm font-semibold text-[#1890ff]">{feature.score}%</span>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}

            <motion.div
              className="p-6 bg-gradient-to-r from-[#1890ff]/10 to-[#1890ff]/5 rounded-[16px] border border-[#1890ff]/20"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <div className="flex items-center gap-3 mb-2">
                <Bot className="text-[#1890ff]" size={24} />
                <span className="font-bold text-gray-900">Постоянное обучение</span>
              </div>
              <p className="text-gray-600 text-sm">
                AI-модели постоянно обучаются на новых данных, улучшая точность предсказаний 
                и качество рекомендаций с каждым днём использования.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
