'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Play, Calendar, Users, Clock } from 'lucide-react';
import Container from '../ui/Container';
import ContentCard from '../ui/ContentCard';
import Mascot from '../ui/Mascot';

const webinars = [
  {
    id: 1,
    title: 'Психология для рекрутера: как читать кандидата',
    speaker: 'Мария Иванова',
    date: '15 января 2026',
    attendees: 234,
    duration: '1.5 часа',
    image: '🧠',
  },
  {
    id: 2,
    title: 'Мастер-класс: Интервью по компетенциям',
    speaker: 'Алексей Петров',
    date: '22 января 2026',
    attendees: 189,
    duration: '2 часа',
    image: '🎯',
  },
  {
    id: 3,
    title: 'Тренды HR 2026: что ждёт рынок труда',
    speaker: 'Елена Смирнова',
    date: '29 января 2026',
    attendees: 312,
    duration: '1 час',
    image: '📈',
  },
  {
    id: 4,
    title: 'Employer Branding: как привлечь топов',
    speaker: 'Дмитрий Козлов',
    date: '5 февраля 2026',
    attendees: 156,
    duration: '1.5 часа',
    image: '⭐',
  },
];

export default function Webinars() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-20 px-4">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#8b5cf6]/10 text-[#8b5cf6] text-sm font-medium mb-4">
            🎓 Обучение
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Вебинары для рекрутеров
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Регулярно проводим вебинары на различные темы: от психологии для рекрутеров до мастер-классов от опытных HR-специалистов
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {webinars.map((webinar, i) => (
            <motion.div
              key={webinar.id}
              initial={{ opacity: 0, y: 30, rotateY: -10 }}
              animate={isInView ? { opacity: 1, y: 0, rotateY: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group"
            >
              <ContentCard variant="white" noPadding className="overflow-hidden h-full">
                <div className="p-6">
                  {/* Header with emoji */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#8b5cf6]/20 to-[#1890ff]/20 flex items-center justify-center text-3xl">
                      {webinar.image}
                    </div>
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="p-3 rounded-full bg-[#8b5cf6]/10 text-[#8b5cf6] cursor-pointer"
                    >
                      <Play size={20} />
                    </motion.div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#8b5cf6] transition-colors">
                    {webinar.title}
                  </h3>

                  {/* Speaker */}
                  <p className="text-gray-600 text-sm mb-4">
                    Спикер: {webinar.speaker}
                  </p>

                  {/* Meta */}
                  <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      <span>{webinar.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users size={14} />
                      <span>{webinar.attendees} участников</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={14} />
                      <span>{webinar.duration}</span>
                    </div>
                  </div>
                </div>

                {/* Hover gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#8b5cf6]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </ContentCard>
            </motion.div>
          ))}
        </div>

        {/* CTA with mascot */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="flex flex-col md:flex-row items-center justify-center gap-6 mt-8"
        >
          <Mascot size={100} variant="03" showSpeechBubble speechText="Учимся вместе! 📚" />
          <div className="text-center md:text-left">
            <p className="text-gray-600 mb-3">Хотите участвовать в вебинарах?</p>
            <a
              href="#demo"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#8b5cf6] text-white font-semibold rounded-xl hover:bg-[#7c3aed] transition-colors"
            >
              Получить доступ
            </a>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
