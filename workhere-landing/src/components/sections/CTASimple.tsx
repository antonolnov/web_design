'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';
import Container from '../ui/Container';
import ContentCard from '../ui/ContentCard';
import Mascot from '../ui/Mascot';

export default function CTASimple() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="demo" className="py-20 px-4">
      <Container>
        <ContentCard variant="gradient">
          <div ref={ref} className="max-w-2xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-bold text-white mb-4"
            >
              Готовы начать?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-white/80 text-lg mb-8"
            >
              Оставьте заявку и мы покажем, как WorkHere может улучшить ваш найм
            </motion.p>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex items-center justify-center gap-3 text-white bg-white/20 rounded-2xl p-6"
              >
                <CheckCircle size={24} />
                <span className="text-lg font-medium">Спасибо! Мы свяжемся с вами в ближайшее время</span>
              </motion.div>
            ) : (
              <motion.form
                onSubmit={handleSubmit}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex flex-col sm:flex-row gap-3"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Ваш email"
                  required
                  className="flex-1 px-6 py-4 rounded-xl bg-white/90 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
                />
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#22c55e] text-white font-bold rounded-xl shadow-lg hover:bg-[#16a34a] transition-all hover:-translate-y-0.5"
                >
                  <Send size={18} />
                  Запросить демо
                </button>
              </motion.form>
            )}

            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap justify-center gap-6 mt-8 text-white/60 text-sm"
            >
              {['Бесплатная демонстрация', 'Без обязательств', 'Ответ в течение 24 часов'].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle size={14} />
                  <span>{item}</span>
                </div>
              ))}
            </motion.div>

            {/* Mascot */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.6, type: 'spring' }}
              className="flex justify-center mt-8"
            >
              <Mascot size={140} variant="08" showSpeechBubble speechText="Ждём вас! 🎉" />
            </motion.div>
          </div>
        </ContentCard>
      </Container>
    </section>
  );
}
