'use client';

import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import { ArrowRight, Calendar, MessageSquare, Users, Sparkles } from 'lucide-react';
import Container from '../ui/Container';
import MagneticButton from '../ui/MagneticButton';
import Mascot from '../ui/Mascot';

const benefits = [
  { icon: Calendar, text: '30-минутная демонстрация' },
  { icon: MessageSquare, text: 'Ответы на ваши вопросы' },
  { icon: Users, text: 'Персональный план внедрения' },
];

export default function CTA() {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });
  
  const mascotY = useTransform(scrollYProgress, [0, 1], [100, -50]);
  const mascotRotate = useTransform(scrollYProgress, [0, 1], [-15, 15]);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <section id="demo" ref={containerRef} className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-[#1890ff]"
            style={{
              width: 4 + (i % 4) * 2,
              height: 4 + (i % 4) * 2,
              left: `${(i * 7) % 100}%`,
              top: `${(i * 11) % 100}%`,
              opacity: 0.1,
            }}
            animate={{
              y: [-20, 20, -20],
              x: [-10, 10, -10],
            }}
            transition={{
              duration: 8 + i,
              repeat: Infinity,
              delay: i * 0.3,
            }}
          />
        ))}
      </div>

      <Container>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="relative bg-gradient-to-br from-[#1890ff] to-[#0d6edb] rounded-[40px] p-8 lg:p-16 overflow-hidden"
        >
          {/* Animated background */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div 
              className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-white/10"
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 90, 0],
              }}
              transition={{ duration: 20, repeat: Infinity }}
            />
            <motion.div 
              className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-white/5"
              animate={{
                scale: [1.2, 1, 1.2],
                rotate: [0, -90, 0],
              }}
              transition={{ duration: 15, repeat: Infinity }}
            />
            
            {/* Sparkle effects */}
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-white rounded-full"
                style={{
                  left: `${(i * 5) % 100}%`,
                  top: `${(i * 7) % 100}%`,
                }}
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            ))}
          </div>

          {/* Mascot floating */}
          <motion.div
            className="absolute -right-10 lg:right-10 top-0 lg:-top-20 z-20 hidden md:block"
            style={{ y: mascotY, rotate: mascotRotate }}
          >
            <motion.div
              animate={{
                y: [-10, 10, -10],
                rotate: [-5, 5, -5],
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <Mascot size={180} />
            </motion.div>
          </motion.div>

          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full mb-6"
              >
                <Sparkles size={16} className="text-white" />
                <span className="text-white text-sm font-medium">Начните сегодня</span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 }}
                className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-6 leading-tight"
              >
                Начните нанимать эффективнее
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 }}
                className="text-white/80 text-lg mb-8"
              >
                Запросите персональную демонстрацию WorkHere. 
                Покажем, как платформа решит задачи вашей компании.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 }}
                className="space-y-4"
              >
                {benefits.map((benefit, index) => (
                  <motion.div 
                    key={index} 
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    whileHover={{ x: 10 }}
                  >
                    <motion.div 
                      className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center"
                      whileHover={{ scale: 1.1, rotate: 10 }}
                    >
                      <benefit.icon className="text-white" size={18} />
                    </motion.div>
                    <span className="text-white/90">{benefit.text}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Right Form */}
            <motion.div
              initial={{ opacity: 0, x: 50, rotateY: -10 }}
              animate={isInView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.8, type: 'spring' }}
              whileHover={{ y: -5, boxShadow: '0 30px 80px rgba(0,0,0,0.3)' }}
              className="bg-white rounded-[24px] p-8 shadow-[0_20px_60px_rgba(0,0,0,0.2)]"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Запросить демо
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                {[
                  { label: 'Имя', type: 'text', key: 'name', placeholder: 'Ваше имя' },
                  { label: 'Email', type: 'email', key: 'email', placeholder: 'email@company.ru' },
                  { label: 'Компания', type: 'text', key: 'company', placeholder: 'Название компании' },
                  { label: 'Телефон', type: 'tel', key: 'phone', placeholder: '+7 (___) ___-__-__' },
                ].map((field, index) => (
                  <motion.div
                    key={field.key}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.7 + index * 0.1 }}
                  >
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      {field.label}
                    </label>
                    <motion.input
                      type={field.type}
                      value={formData[field.key as keyof typeof formData]}
                      onChange={(e) => setFormData({ ...formData, [field.key]: e.target.value })}
                      placeholder={field.placeholder}
                      className="w-full px-4 py-3 bg-gray-50 rounded-[12px] border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#1890ff] focus:border-transparent transition-all"
                      whileFocus={{ scale: 1.01 }}
                      required={field.key !== 'phone'}
                    />
                  </motion.div>
                ))}

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-[#1890ff] text-white font-semibold rounded-[16px] shadow-lg shadow-[#1890ff]/30 hover:bg-[#0d6edb] transition-colors"
                  >
                    Отправить заявку
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ArrowRight size={20} />
                    </motion.span>
                  </button>
                </motion.div>

                <p className="text-xs text-gray-500 text-center">
                  Нажимая кнопку, вы соглашаетесь с{' '}
                  <a href="#privacy" className="text-[#1890ff] hover:underline">
                    политикой конфиденциальности
                  </a>
                </p>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
