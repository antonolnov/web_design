'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

export default function CTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="demo" ref={ref} className="py-24 bg-gradient-to-b from-[#f0f4ff] to-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Начните бесплатно
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Оставьте заявку и мы покажем, как WorkHere может улучшить ваш найм
          </p>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex items-center justify-center gap-3 p-6 bg-green-50 rounded-2xl text-green-700"
            >
              <CheckCircle size={24} />
              <span className="font-medium">Спасибо! Мы свяжемся с вами в ближайшее время</span>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Ваш рабочий email"
                required
                className="flex-1 px-6 py-4 rounded-xl border border-gray-200 focus:outline-none focus:border-[#5b5fc7] focus:ring-2 focus:ring-[#5b5fc7]/20"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#5b5fc7] text-white font-semibold rounded-xl hover:bg-[#4a4eb3] transition-colors"
              >
                <Send size={18} />
                Запросить демо
              </button>
            </form>
          )}

          <p className="text-sm text-gray-500 mt-4">
            Бесплатная демонстрация • Без обязательств • Ответ в течение 24 часов
          </p>
        </motion.div>
      </div>
    </section>
  );
}
