'use client';

import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import { Send, ArrowRight, Check, Sparkles, Mail, User, Building, Star } from 'lucide-react';
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

  const mascotY = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const mascotRotate = useTransform(scrollYProgress, [0, 1], [-20, 20]);
  const bgScale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.1, 1]);

  return (
    <section 
      id="demo" 
      ref={containerRef}
      className="relative py-32 overflow-hidden bg-gradient-to-b from-white via-[#f8fbff] to-white"
    >
      {/* CRAZY background */}
      <CrazyBackground variant="particles" intensity="high" />
      <CrazyBackground variant="waves" intensity="medium" />
      
      {/* Floating stars */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${(i * 5) % 100}%`,
              top: `${(i * 7) % 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              rotate: [0, 360],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 4 + (i % 3),
              repeat: Infinity,
              delay: i * 0.2,
            }}
          >
            <Star size={8 + (i % 8)} className="text-[#1890ff]" fill="currentColor" />
          </motion.div>
        ))}
      </div>

      {/* Animated gradient orbs */}
      <motion.div
        className="absolute -left-40 top-1/4 w-96 h-96 rounded-full blur-3xl"
        style={{ 
          background: 'radial-gradient(circle, rgba(24,144,255,0.2) 0%, transparent 70%)',
          scale: bgScale,
        }}
        animate={{
          x: [0, 50, 0],
          y: [0, -30, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -right-40 bottom-1/4 w-96 h-96 rounded-full blur-3xl"
        style={{ 
          background: 'radial-gradient(circle, rgba(64,169,255,0.2) 0%, transparent 70%)',
          scale: bgScale,
        }}
        animate={{
          x: [0, -50, 0],
          y: [0, 30, 0],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Pulsing rings */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#1890ff]/10"
            style={{
              width: 200 + i * 150,
              height: 200 + i * 150,
            }}
            animate={{
              scale: [1, 1.05, 1],
              opacity: [0.05, 0.2, 0.05],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3,
            }}
          />
        ))}
      </div>

      {/* Mascot flying */}
      <motion.div
        className="absolute right-0 lg:right-10 top-10 z-20 hidden md:block"
        style={{ y: mascotY, rotate: mascotRotate }}
      >
        <motion.div
          animate={{ 
            y: [-15, 15, -15],
            rotate: [-8, 8, -8],
            scale: [1, 1.05, 1],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <Mascot size={200} variant="crazy" />
        </motion.div>
        
        {/* Flying trail */}
        <motion.div
          className="absolute left-1/2 top-1/2 -z-10"
          animate={{
            x: [0, -100],
            opacity: [0.5, 0],
            scale: [1, 2],
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
          }}
        >
          <div className="w-20 h-10 bg-gradient-to-r from-[#1890ff]/30 to-transparent rounded-full blur-xl" />
        </motion.div>
      </motion.div>

      <Container>
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          className="relative z-10 grid lg:grid-cols-2 gap-16 items-center"
        >
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, type: 'spring' }}
          >
            <motion.span
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#e6f4ff] rounded-full text-[#1890ff] text-sm font-medium mb-6"
              whileHover={{ scale: 1.05 }}
              animate={{
                boxShadow: ['0 0 15px rgba(24,144,255,0.2)', '0 0 30px rgba(24,144,255,0.4)', '0 0 15px rgba(24,144,255,0.2)'],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles size={14} />
              </motion.div>
              Начните бесплатно
            </motion.span>
            
            <motion.h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
            >
              Готовы ускорить{' '}
              <motion.span 
                className="text-[#1890ff]"
                animate={{ opacity: [1, 0.8, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                найм
              </motion.span>
              ?
            </motion.h2>
            
            <motion.p
              className="text-xl text-gray-600 mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
            >
              Оставьте заявку — покажем возможности платформы и ответим на все вопросы
            </motion.p>
            
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
            >
              {[
                'Персональная демонстрация',
                'Бесплатный пробный период',
                'Помощь с миграцией данных',
              ].map((item, i) => (
                <motion.div 
                  key={item} 
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  whileHover={{ x: 10 }}
                >
                  <motion.div 
                    className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center"
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Check size={14} className="text-green-600" />
                  </motion.div>
                  <span className="text-gray-700 font-medium">{item}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Form */}
          <motion.div
            initial={{ opacity: 0, x: 100, rotateY: 15 }}
            animate={isInView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
            transition={{ duration: 0.8, type: 'spring' }}
          >
            <motion.form
              className="relative bg-white rounded-3xl p-8 shadow-2xl shadow-[#1890ff]/10 border border-gray-100"
              whileHover={{ 
                boxShadow: '0 40px 80px rgba(24,144,255,0.15)',
                y: -5,
              }}
            >
              {/* Form glow */}
              <motion.div
                className="absolute -inset-px rounded-3xl bg-gradient-to-r from-[#1890ff] to-[#40a9ff] opacity-0"
                animate={{ opacity: focusedField ? 0.2 : 0 }}
                transition={{ duration: 0.3 }}
              />
              
              <div className="relative space-y-5">
                <div className="text-center mb-6">
                  <motion.h3 
                    className="text-2xl font-bold text-gray-900 mb-2"
                    animate={{ scale: [1, 1.02, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    Запросить демо
                  </motion.h3>
                  <p className="text-gray-500">Заполните форму — свяжемся в течение часа</p>
                </div>

                {[
                  { name: 'name', icon: User, placeholder: 'Ваше имя' },
                  { name: 'email', icon: Mail, placeholder: 'Email' },
                  { name: 'company', icon: Building, placeholder: 'Компания' },
                ].map((field, i) => (
                  <motion.div 
                    key={field.name}
                    className="relative"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.5 + i * 0.1 }}
                  >
                    <motion.div
                      className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors ${
                        focusedField === field.name ? 'text-[#1890ff]' : 'text-gray-400'
                      }`}
                      animate={focusedField === field.name ? { scale: 1.2, rotate: 10 } : { scale: 1, rotate: 0 }}
                    >
                      <field.icon size={20} />
                    </motion.div>
                    <motion.input
                      type={field.name === 'email' ? 'email' : 'text'}
                      placeholder={field.placeholder}
                      onFocus={() => setFocusedField(field.name)}
                      onBlur={() => setFocusedField(null)}
                      className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-2xl focus:border-[#1890ff] focus:outline-none transition-all text-gray-900 placeholder:text-gray-400"
                      whileFocus={{ scale: 1.02 }}
                    />
                  </motion.div>
                ))}

                <motion.button
                  type="submit"
                  className="w-full flex items-center justify-center gap-3 px-8 py-5 bg-gradient-to-r from-[#1890ff] to-[#40a9ff] text-white font-bold text-lg rounded-2xl shadow-xl shadow-[#1890ff]/30"
                  whileHover={{ 
                    scale: 1.03, 
                    boxShadow: '0 20px 40px rgba(24,144,255,0.4)',
                  }}
                  whileTap={{ scale: 0.97 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.8 }}
                >
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  >
                    <Send size={22} />
                  </motion.div>
                  Отправить заявку
                  <motion.span
                    animate={{ x: [0, 8, 0] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  >
                    <ArrowRight size={22} />
                  </motion.span>
                </motion.button>

                <motion.p 
                  className="text-center text-sm text-gray-500"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: 1 }}
                >
                  Нажимая кнопку, вы соглашаетесь с{' '}
                  <motion.a 
                    href="#" 
                    className="text-[#1890ff] hover:underline"
                    whileHover={{ scale: 1.05 }}
                  >
                    политикой обработки данных
                  </motion.a>
                </motion.p>
              </div>
            </motion.form>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
