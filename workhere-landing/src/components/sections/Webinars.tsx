'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Play, Calendar, Users, Clock } from 'lucide-react';
import Container from '../ui/Container';
import Mascot from '../ui/Mascot';

const webinars = [
  {
    id: 1,
    title: 'Психология для рекрутера: как читать кандидата',
    speaker: 'Мария Иванова',
    date: '15 января',
    attendees: 234,
    color: '#8b5cf6',
  },
  {
    id: 2,
    title: 'Мастер-класс: Интервью по компетенциям',
    speaker: 'Алексей Петров',
    date: '22 января',
    attendees: 189,
    color: '#1890ff',
  },
  {
    id: 3,
    title: 'Тренды HR 2026: что ждёт рынок труда',
    speaker: 'Елена Смирнова',
    date: '29 января',
    attendees: 312,
    color: '#22c55e',
  },
  {
    id: 4,
    title: 'Employer Branding: как привлечь топов',
    speaker: 'Дмитрий Козлов',
    date: '5 февраля',
    attendees: 156,
    color: '#f97316',
  },
];

export default function Webinars() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-24">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <span className="text-[#8b5cf6] font-medium">Обучение</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-4">
            Вебинары для рекрутеров
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            От психологии до мастер-классов от опытных HR
          </p>
        </motion.div>

        {/* Timeline layout */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#8b5cf6] via-[#1890ff] to-[#22c55e]" />

          {webinars.map((webinar, i) => {
            const isLeft = i % 2 === 0;
            
            return (
              <motion.div
                key={webinar.id}
                initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className={`relative flex items-center mb-12 ${
                  isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <motion.div
                  className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full -translate-x-1/2 z-10"
                  style={{ backgroundColor: webinar.color }}
                  whileHover={{ scale: 1.5 }}
                />

                {/* Content */}
                <div className={`ml-16 md:ml-0 md:w-1/2 ${isLeft ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="group cursor-pointer"
                  >
                    {/* Date badge */}
                    <div 
                      className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm mb-3"
                      style={{ backgroundColor: `${webinar.color}15`, color: webinar.color }}
                    >
                      <Calendar size={14} />
                      {webinar.date}
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#1890ff] transition-colors">
                      {webinar.title}
                    </h3>

                    {/* Speaker */}
                    <p className="text-gray-600 mb-3">
                      Спикер: {webinar.speaker}
                    </p>

                    {/* Meta */}
                    <div className={`flex gap-4 text-sm text-gray-500 ${isLeft ? 'md:justify-end' : ''}`}>
                      <span className="flex items-center gap-1">
                        <Users size={14} />
                        {webinar.attendees}
                      </span>
                      <motion.span 
                        className="flex items-center gap-1"
                        style={{ color: webinar.color }}
                        whileHover={{ scale: 1.1 }}
                      >
                        <Play size={14} />
                        Смотреть
                      </motion.span>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA with mascot */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-center gap-8 mt-16"
        >
          <Mascot size={120} variant="03" showSpeechBubble speechText="Учимся вместе! 📚" />
          <div className="text-center md:text-left">
            <p className="text-gray-600 mb-4 text-lg">
              Хотите участвовать в вебинарах?
            </p>
            <a
              href="#demo"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#8b5cf6] text-white font-semibold rounded-2xl hover:bg-[#7c3aed] transition-colors"
            >
              Получить доступ
            </a>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
