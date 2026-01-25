'use client';

import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import Container from '../ui/Container';
import ContentCard from '../ui/ContentCard';

const testimonials = [
  {
    id: 1,
    name: 'Анна Смирнова',
    role: 'HR Director',
    company: 'ТехноГрупп',
    avatar: '👩‍💼',
    text: 'WorkHere полностью изменил наш подход к найму. Время закрытия вакансий сократилось в 2 раза, а качество кандидатов значительно выросло.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Михаил Козлов',
    role: 'Руководитель HR',
    company: 'ФинансПро',
    avatar: '👨‍💻',
    text: 'Отличная система с удобным интерфейсом. Особенно нравится AI-скоринг — экономит огромное количество времени на первичном отборе.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Елена Петрова',
    role: 'Talent Acquisition Lead',
    company: 'РетейлМаркет',
    avatar: '👩‍🦰',
    text: 'Перешли на WorkHere с конкурентов и не жалеем. Интеграции работают отлично, поддержка отвечает моментально.',
    rating: 5,
  },
  {
    id: 4,
    name: 'Дмитрий Волков',
    role: 'CEO',
    company: 'СтартапХаб',
    avatar: '👨‍💼',
    text: 'Для стартапа важно нанимать быстро и качественно. WorkHere помог нам вырасти с 10 до 100 человек за год без потери качества найма.',
    rating: 5,
  },
  {
    id: 5,
    name: 'Ольга Новикова',
    role: 'Рекрутер',
    company: 'ПроизводствоПлюс',
    avatar: '👩',
    text: 'Работаю с системой каждый день и получаю удовольствие. Всё интуитивно понятно, автоматизация рутины на высшем уровне.',
    rating: 5,
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

  // Auto-rotate
  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, []);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9,
    }),
  };

  return (
    <section ref={ref} className="py-20 px-4">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#22c55e]/10 text-[#22c55e] text-sm font-medium mb-4">
            💬 Отзывы клиентов
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Что говорят о нас
          </h2>
          <p className="text-lg text-gray-600">
            Более 2000 компаний уже выбрали WorkHere
          </p>
        </motion.div>

        <ContentCard variant="white" className="relative overflow-hidden">
          <div className="min-h-[300px] flex items-center justify-center px-4 md:px-12">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                className="text-center max-w-3xl"
              >
                {/* Quote icon */}
                <Quote size={40} className="text-[#1890ff]/20 mx-auto mb-6" />
                
                {/* Text */}
                <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
                  "{testimonials[current].text}"
                </p>

                {/* Author */}
                <div className="flex items-center justify-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#1890ff]/20 to-[#8b5cf6]/20 flex items-center justify-center text-2xl">
                    {testimonials[current].avatar}
                  </div>
                  <div className="text-left">
                    <div className="font-bold text-gray-900">{testimonials[current].name}</div>
                    <div className="text-gray-500 text-sm">
                      {testimonials[current].role}, {testimonials[current].company}
                    </div>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex justify-center gap-1 mt-4">
                  {[...Array(testimonials[current].rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">★</span>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-4 mt-6">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={prev}
              className="p-3 rounded-full bg-gray-100 hover:bg-[#1890ff]/10 text-gray-600 hover:text-[#1890ff] transition-colors"
            >
              <ChevronLeft size={24} />
            </motion.button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setDirection(i > current ? 1 : -1);
                    setCurrent(i);
                  }}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    i === current ? 'bg-[#1890ff] w-8' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={next}
              className="p-3 rounded-full bg-gray-100 hover:bg-[#1890ff]/10 text-gray-600 hover:text-[#1890ff] transition-colors"
            >
              <ChevronRight size={24} />
            </motion.button>
          </div>
        </ContentCard>
      </Container>
    </section>
  );
}
