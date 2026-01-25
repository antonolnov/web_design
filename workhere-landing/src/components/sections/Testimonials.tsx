'use client';

import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Container from '../ui/Container';

const testimonials = [
  {
    id: 1,
    name: 'Анна Смирнова',
    role: 'HR Director',
    company: 'ТехноГрупп',
    text: 'WorkHere полностью изменил наш подход к найму. Время закрытия вакансий сократилось в 2 раза, а качество кандидатов значительно выросло.',
    color: '#1890ff',
  },
  {
    id: 2,
    name: 'Михаил Козлов',
    role: 'Руководитель HR',
    company: 'ФинансПро',
    text: 'Отличная система с удобным интерфейсом. Особенно нравится AI-скоринг — экономит огромное количество времени на первичном отборе.',
    color: '#22c55e',
  },
  {
    id: 3,
    name: 'Елена Петрова',
    role: 'Talent Acquisition Lead',
    company: 'РетейлМаркет',
    text: 'Перешли на WorkHere с конкурентов и не жалеем. Интеграции работают отлично, поддержка отвечает моментально.',
    color: '#8b5cf6',
  },
  {
    id: 4,
    name: 'Дмитрий Волков',
    role: 'CEO',
    company: 'СтартапХаб',
    text: 'Для стартапа важно нанимать быстро и качественно. WorkHere помог нам вырасти с 10 до 100 человек за год.',
    color: '#f97316',
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const next = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, []);

  const currentTestimonial = testimonials[current];

  return (
    <section ref={ref} className="py-24">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <span className="text-[#1890ff] font-medium">Отзывы</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2">
            Что говорят о нас
          </h2>
        </motion.div>

        {/* Main testimonial - no card, directly on background */}
        <div className="max-w-4xl mx-auto relative min-h-[300px]">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              initial={{ opacity: 0, x: direction > 0 ? 100 : -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction < 0 ? 100 : -100 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className="text-center"
            >
              {/* Large quote */}
              <motion.div
                className="text-8xl font-serif leading-none mb-6"
                style={{ color: currentTestimonial.color }}
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 0.3 }}
                transition={{ delay: 0.2 }}
              >
                "
              </motion.div>

              {/* Quote text */}
              <motion.p
                className="text-2xl md:text-3xl lg:text-4xl font-medium text-gray-800 leading-relaxed mb-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                {currentTestimonial.text}
              </motion.p>

              {/* Author */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-col items-center"
              >
                {/* Avatar circle */}
                <div 
                  className="w-16 h-16 rounded-full mb-4 flex items-center justify-center text-white text-2xl font-bold"
                  style={{ backgroundColor: currentTestimonial.color }}
                >
                  {currentTestimonial.name[0]}
                </div>
                
                <div className="font-bold text-gray-900 text-lg">
                  {currentTestimonial.name}
                </div>
                <div className="text-gray-500">
                  {currentTestimonial.role}, {currentTestimonial.company}
                </div>

                {/* Rating stars */}
                <div className="flex gap-1 mt-3">
                  {[...Array(5)].map((_, i) => (
                    <motion.span 
                      key={i} 
                      className="text-yellow-400 text-xl"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.4 + i * 0.1 }}
                    >
                      ★
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-6 mt-12">
            <motion.button
              whileHover={{ scale: 1.1, backgroundColor: '#1890ff', color: '#fff' }}
              whileTap={{ scale: 0.95 }}
              onClick={prev}
              className="p-4 rounded-full border-2 border-gray-200 text-gray-400 transition-colors"
            >
              <ChevronLeft size={24} />
            </motion.button>

            {/* Progress dots */}
            <div className="flex gap-3">
              {testimonials.map((t, i) => (
                <motion.button
                  key={t.id}
                  onClick={() => {
                    setDirection(i > current ? 1 : -1);
                    setCurrent(i);
                  }}
                  className="relative h-2 rounded-full overflow-hidden transition-all"
                  style={{ 
                    width: i === current ? 40 : 12,
                    backgroundColor: i === current ? t.color : '#e5e7eb',
                  }}
                  whileHover={{ scale: 1.2 }}
                >
                  {i === current && (
                    <motion.div
                      className="absolute inset-0 bg-white/30"
                      initial={{ x: '-100%' }}
                      animate={{ x: '100%' }}
                      transition={{ duration: 6, ease: 'linear' }}
                    />
                  )}
                </motion.button>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1, backgroundColor: '#1890ff', color: '#fff' }}
              whileTap={{ scale: 0.95 }}
              onClick={next}
              className="p-4 rounded-full border-2 border-gray-200 text-gray-400 transition-colors"
            >
              <ChevronRight size={24} />
            </motion.button>
          </div>
        </div>
      </Container>
    </section>
  );
}
