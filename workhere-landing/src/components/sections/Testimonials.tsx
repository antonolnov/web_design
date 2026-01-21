'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import Container from '../ui/Container';
import SectionTitle from '../ui/SectionTitle';

const testimonials = [
  {
    quote:
      'WorkHere полностью изменил наш процесс найма. Время закрытия вакансий сократилось вдвое, а качество кандидатов заметно выросло.',
    author: 'Мария Соколова',
    position: 'HR Director',
    company: 'TechCorp Russia',
    rating: 5,
    avatar: 'МС',
    avatarColor: '#1890ff',
  },
  {
    quote:
      'Наконец-то все рекрутеры работают в одной системе. Прозрачность процесса, единые стандарты, понятная аналитика.',
    author: 'Алексей Петров',
    position: 'Head of Talent Acquisition',
    company: 'FinanceGroup',
    rating: 5,
    avatar: 'АП',
    avatarColor: '#40a9ff',
  },
  {
    quote:
      'Интеграции с job-бордами и парсинг резюме — это то, что мы искали годами. Экономим часы каждый день на рутине.',
    author: 'Елена Козлова',
    position: 'Senior Recruiter',
    company: 'RetailMax',
    rating: 5,
    avatar: 'ЕК',
    avatarColor: '#69c0ff',
  },
  {
    quote:
      'Поддержка отвечает моментально, а функционал постоянно развивается. Видно, что команда прислушивается к пользователям.',
    author: 'Дмитрий Волков',
    position: 'CEO',
    company: 'StartupHub',
    rating: 5,
    avatar: 'ДВ',
    avatarColor: '#91d5ff',
  },
  {
    quote:
      'Перешли с известной западной ATS. WorkHere оказался не хуже по функционалу, но гораздо удобнее для российского рынка.',
    author: 'Анна Белова',
    position: 'People Operations Manager',
    company: 'MediaHolding',
    rating: 5,
    avatar: 'АБ',
    avatarColor: '#1890ff',
  },
  {
    quote:
      'Аналитика в WorkHere помогла нам понять узкие места воронки и оптимизировать процесс. ROI виден сразу.',
    author: 'Игорь Новиков',
    position: 'CHRO',
    company: 'LogisticsPro',
    rating: 5,
    avatar: 'ИН',
    avatarColor: '#40a9ff',
  },
];

const logos = [
  'TechCorp', 'FinanceGroup', 'RetailMax', 'StartupHub', 'MediaHolding', 'LogisticsPro',
  'DataSolutions', 'CloudServices', 'DigitalAgency', 'E-Commerce'
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-gray-50">
      <Container>
        <SectionTitle
          badge="Отзывы"
          title="Нам доверяют лидеры рынка"
          subtitle="Более 2000 компаний используют WorkHere для эффективного найма."
        />

        {/* Testimonials Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              className="bg-white rounded-[20px] p-6 shadow-[0_4px_20px_rgba(0,0,0,0.06)] border border-gray-100 relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -5, boxShadow: '0 12px 40px rgba(24, 144, 255, 0.1)' }}
            >
              <Quote className="absolute top-6 right-6 text-[#1890ff]/10" size={40} />
              
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="text-[#1890ff] fill-[#1890ff]" size={16} />
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-700 mb-6 leading-relaxed relative z-10">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white font-semibold"
                  style={{ backgroundColor: testimonial.avatarColor }}
                >
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.author}</div>
                  <div className="text-sm text-gray-500">
                    {testimonial.position}, {testimonial.company}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Logos */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-gray-500 mb-8">Нам доверяют компании со всего мира</p>
          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12">
            {logos.map((logo, index) => (
              <motion.div
                key={logo}
                className="text-gray-400 font-semibold text-lg hover:text-[#1890ff] transition-colors cursor-pointer"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
                whileHover={{ scale: 1.1 }}
              >
                {logo}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {[
            { value: '2000+', label: 'Компаний' },
            { value: '500K+', label: 'Кандидатов в базах' },
            { value: '98%', label: 'Рекомендуют' },
            { value: '4.9', label: 'Средняя оценка' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div className="text-4xl lg:text-5xl font-bold text-[#1890ff] mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
