'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    company: 'TechCorp',
    logo: 'TC',
    logoColor: '#4F46E5',
    quote: '«Ни разу не пожалели о своем решении»',
    text: 'Даже на старте WorkHere был удобнее наших стандартных инструментов. Мы понимали, что дальше станет еще лучше и комфортнее. С тех пор мы ни разу не пожалели о своем решении.',
    author: 'Анастасия Петрова',
    position: 'Руководитель отдела персонала',
  },
  {
    id: 2,
    company: 'FinanceGroup',
    logo: 'FG',
    logoColor: '#059669',
    quote: '«WorkHere дает большой объем функциональности»',
    text: 'Система позволяет вести полный цикл подбора от публикации вакансии до оформления сотрудника. Интеграции с job-сайтами экономят массу времени.',
    author: 'Михаил Сидоров',
    position: 'HR-директор',
  },
  {
    id: 3,
    company: 'RetailMax',
    logo: 'RM',
    logoColor: '#DC2626',
    quote: '«Процессы, на которые раньше тратили время, теперь автоматизированы»',
    text: 'Раньше рекрутеры тратили часы на рутинную работу. Теперь всё автоматизировано: отклики приходят в систему, письма отправляются по шаблонам, отчеты формируются сами.',
    author: 'Елена Козлова',
    position: 'Руководитель группы подбора',
  },
  {
    id: 4,
    company: 'ITStartup',
    logo: 'IT',
    logoColor: '#7C3AED',
    quote: '«В WorkHere мне нравится все»',
    text: 'Удобный интерфейс, быстрая работа, отличная поддержка. Особенно радует аналитика — теперь мы видим все узкие места в воронке подбора.',
    author: 'Дмитрий Иванов',
    position: 'HRD',
  },
];

export default function TestimonialsHuntflow() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="max-w-[1000px] mx-auto px-6">
        <div className="relative">
          {/* Navigation arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 w-12 h-12 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors hidden lg:flex"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 w-12 h-12 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors hidden lg:flex"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>

          {/* Testimonial content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="text-center"
            >
              {/* Company logo placeholder */}
              <motion.div
                className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-8"
                style={{ backgroundColor: `${current.logoColor}15` }}
                whileHover={{ scale: 1.05 }}
              >
                <span 
                  className="text-2xl font-bold"
                  style={{ color: current.logoColor }}
                >
                  {current.logo}
                </span>
              </motion.div>

              {/* Quote */}
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900 mb-6 leading-tight">
                {current.quote}
              </h2>

              {/* Text */}
              <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8 leading-relaxed italic">
                {current.text}
              </p>

              {/* Author */}
              <div className="flex flex-col items-center gap-4">
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-xl"
                  style={{ backgroundColor: current.logoColor }}
                >
                  {current.author.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{current.author}</div>
                  <div className="text-gray-500">{current.position}, {current.company}</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  i === currentIndex ? 'bg-gray-900 w-8' : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>

          {/* Mobile navigation */}
          <div className="flex justify-center gap-4 mt-6 lg:hidden">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </button>
            <button
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center"
            >
              <ChevronRight className="w-6 h-6 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
