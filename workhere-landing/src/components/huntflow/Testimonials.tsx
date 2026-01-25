'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    text: 'WorkHere помог нам сократить время закрытия вакансий в 2 раза. Интеграция с job-сайтами работает отлично, а аналитика позволяет принимать решения на основе данных.',
    author: 'Анна Смирнова',
    role: 'HR Director',
    company: 'ТехноГрупп',
  },
  {
    text: 'Перешли с конкурентов и не жалеем. Интерфейс интуитивно понятный, поддержка отвечает быстро. AI-скоринг экономит часы работы каждый день.',
    author: 'Михаил Козлов',
    role: 'Руководитель HR',
    company: 'ФинансПро',
  },
  {
    text: 'Для нашего стартапа WorkHere стал незаменимым инструментом. Выросли с 10 до 100 человек за год благодаря автоматизации найма.',
    author: 'Дмитрий Волков',
    role: 'CEO',
    company: 'СтартапХаб',
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section ref={ref} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <p className="text-[#5b5fc7] font-semibold mb-4">Отзывы</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Что говорят клиенты
          </h2>
        </motion.div>

        {/* Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-gray-50 rounded-3xl p-8 md:p-12 relative">
            <Quote size={48} className="text-[#5b5fc7]/20 absolute top-8 left-8" />
            
            <div className="relative z-10">
              <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8">
                "{testimonials[current].text}"
              </p>

              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold text-gray-900">
                    {testimonials[current].author}
                  </div>
                  <div className="text-gray-500">
                    {testimonials[current].role}, {testimonials[current].company}
                  </div>
                </div>

                {/* Navigation */}
                <div className="flex gap-2">
                  <button
                    onClick={prev}
                    className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-100 transition-colors"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    onClick={next}
                    className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-100 transition-colors"
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2 h-2 rounded-full transition-all ${
                  i === current ? 'bg-[#5b5fc7] w-6' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
