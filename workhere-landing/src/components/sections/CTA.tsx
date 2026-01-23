'use client';

import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import { Send, ArrowRight, Check, Sparkles, Mail, User, Building } from 'lucide-react';
import Container from '../ui/Container';
import CrazyBackground from '../ui/CrazyBackground';
import Mascot from '../ui/Mascot';

export default function CTA() {
  const containerRef = useRef(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-10%' });
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const mascotY = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <section 
      id="demo" 
      ref={containerRef}
      className="relative py-24 overflow-hidden bg-gradient-to-b from-white via-[#f8fbff] to-white"
    >
      {/* Optimized background */}
      <CrazyBackground variant="particles" intensity="low" />
      <CrazyBackground variant="waves" intensity="low" />
      
      {/* Just 2 orbs */}
      <motion.div
        className="absolute -left-32 top-1/4 w-[350px] h-[350px] rounded-full blur-3xl"
        style={{ background: 'radial-gradient(circle, rgba(24,144,255,0.12) 0%, transparent 70%)' }}
        animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -right-32 bottom-1/4 w-[300px] h-[300px] rounded-full blur-3xl"
        style={{ background: 'radial-gradient(circle, rgba(64,169,255,0.1) 0%, transparent 70%)' }}
        animate={{ x: [0, -25, 0], y: [0, 20, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Mascot */}
      <motion.div
        className="absolute right-4 lg:right-12 top-16 z-20 hidden md:block"
        style={{ y: mascotY }}
      >
        <motion.div
          animate={{ y: [-12, 12, -12] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          <Mascot size={170} variant="float" />
        </motion.div>
      </motion.div>

      <Container>
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          className="relative z-10 grid lg:grid-cols-2 gap-14 items-center"
        >
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <motion.span
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#e6f4ff] rounded-full text-[#1890ff] text-sm font-medium mb-5"
              whileHover={{ scale: 1.03 }}
            >
              <Sparkles size={14} />
              Начните бесплатно
            </motion.span>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-5">
              Готовы ускорить <span className="text-[#1890ff]">найм</span>?
            </h2>
            
            <p className="text-lg text-gray-600 mb-7">
              Оставьте заявку — покажем возможности платформы и ответим на все вопросы
            </p>
            
            <div className="space-y-3">
              {[
                'Персональная демонстрация',
                'Бесплатный пробный период',
                'Помощь с миграцией данных',
              ].map((item, i) => (
                <motion.div 
                  key={item} 
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.08 }}
                  whileHover={{ x: 6 }}
                >
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                    <Check size={14} className="text-green-600" />
                  </div>
                  <span className="text-gray-700 font-medium">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <motion.form
              className="relative bg-white rounded-2xl p-7 shadow-xl border border-gray-100"
              whileHover={{ boxShadow: '0 25px 50px rgba(24,144,255,0.12)' }}
            >
              <div className="relative space-y-4">
                <div className="text-center mb-5">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">Запросить демо</h3>
                  <p className="text-gray-500 text-sm">Заполните форму — свяжемся в течение часа</p>
                </div>

                {[
                  { name: 'name', icon: User, placeholder: 'Ваше имя' },
                  { name: 'email', icon: Mail, placeholder: 'Email' },
                  { name: 'company', icon: Building, placeholder: 'Компания' },
                ].map((field, i) => (
                  <motion.div 
                    key={field.name}
                    className="relative"
                    initial={{ opacity: 0, y: 15 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.4 + i * 0.08 }}
                  >
                    <div className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors ${
                      focusedField === field.name ? 'text-[#1890ff]' : 'text-gray-400'
                    }`}>
                      <field.icon size={18} />
                    </div>
                    <input
                      type={field.name === 'email' ? 'email' : 'text'}
                      placeholder={field.placeholder}
                      onFocus={() => setFocusedField(field.name)}
                      onBlur={() => setFocusedField(null)}
                      className="w-full pl-11 pr-4 py-3.5 border-2 border-gray-200 rounded-xl focus:border-[#1890ff] focus:outline-none transition-all text-gray-900 placeholder:text-gray-400"
                    />
                  </motion.div>
                ))}

                <motion.button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-7 py-4 bg-gradient-to-r from-[#1890ff] to-[#40a9ff] text-white font-bold text-base rounded-xl shadow-lg shadow-[#1890ff]/25"
                  whileHover={{ scale: 1.02, boxShadow: '0 15px 30px rgba(24,144,255,0.35)' }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: 15 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.7 }}
                >
                  <Send size={18} />
                  Отправить заявку
                  <ArrowRight size={18} />
                </motion.button>

                <p className="text-center text-xs text-gray-500 pt-2">
                  Нажимая кнопку, вы соглашаетесь с{' '}
                  <a href="#" className="text-[#1890ff] hover:underline">политикой обработки данных</a>
                </p>
              </div>
            </motion.form>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
