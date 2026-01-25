'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Send, CheckCircle, Sparkles } from 'lucide-react';
import Container from '../ui/Container';
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
    <section id="demo" ref={ref} className="py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1890ff] to-[#0d6edb]" />
      
      {/* Decorative shapes */}
      <motion.div
        className="absolute top-20 left-10 w-64 h-64 rounded-full bg-white/5"
        animate={{ y: [-20, 20, -20], x: [-10, 10, -10] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-10 right-20 w-96 h-96 rounded-full bg-white/5"
        animate={{ y: [20, -20, 20], x: [10, -10, 10] }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      <motion.div
        className="absolute top-1/2 left-1/4 w-32 h-32 rounded-full bg-white/10"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 5, repeat: Infinity }}
      />

      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Content */}
            <div className="text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 text-white text-sm font-medium mb-6"
              >
                <Sparkles size={16} />
                Начните сегодня
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-5xl font-bold text-white mb-6"
              >
                Готовы нанимать эффективнее?
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 }}
                className="text-xl text-white/80 mb-8"
              >
                Оставьте заявку и мы покажем, как WorkHere может улучшить ваш найм
              </motion.p>

              {/* Benefits */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.3 }}
                className="flex flex-wrap justify-center lg:justify-start gap-4 text-white/70"
              >
                {['Бесплатная демо', 'Без обязательств', 'Ответ за 24 часа'].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle size={16} className="text-[#22c55e]" />
                    <span>{item}</span>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right - Form + Mascot */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="relative"
            >
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 200 }}
                    className="w-20 h-20 rounded-full bg-[#22c55e] flex items-center justify-center mx-auto mb-6"
                  >
                    <CheckCircle size={40} className="text-white" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-white mb-2">Спасибо!</h3>
                  <p className="text-white/80">Мы свяжемся с вами в ближайшее время</p>
                </motion.div>
              ) : (
                <div className="space-y-4">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Ваш email"
                    className="w-full px-6 py-4 rounded-2xl bg-white/95 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-white/30 text-lg"
                  />
                  <motion.button
                    onClick={handleSubmit}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-[#22c55e] text-white font-bold text-lg rounded-2xl shadow-lg hover:bg-[#16a34a] transition-colors"
                  >
                    <Send size={20} />
                    Запросить демо
                  </motion.button>
                </div>
              )}

              {/* Mascot */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.5 }}
                className="absolute -right-16 -bottom-8 hidden xl:block"
              >
                <Mascot size={140} variant="08" showSpeechBubble speechText="Ждём вас! 🎉" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}
