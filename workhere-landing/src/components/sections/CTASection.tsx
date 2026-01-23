'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Send, ArrowRight, Check, Sparkles, Mail, User, Building } from 'lucide-react';
import Container from '../ui/Container';
import ContentCard from '../ui/ContentCard';
import Mascot from '../ui/Mascot';

export default function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [focusedField, setFocusedField] = useState<string | null>(null);

  return (
    <section id="demo" className="py-16 px-4 pb-24">
      <Container>
        <ContentCard variant="gradient">
          <div ref={ref} className="grid lg:grid-cols-2 gap-10 items-center">
            {/* Left content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#1890ff]/10 rounded-full text-[#1890ff] text-sm font-medium mb-5">
                <Sparkles size={14} />
                Начните бесплатно
              </span>
              
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5">
                Готовы ускорить <span className="text-[#1890ff]">найм</span>?
              </h2>
              
              <p className="text-lg text-gray-600 mb-6">
                Оставьте заявку — покажем возможности платформы и ответим на все вопросы
              </p>
              
              <div className="space-y-3 mb-8">
                {[
                  'Персональная демонстрация',
                  'Бесплатный пробный период',
                  'Помощь с миграцией данных',
                ].map((item, i) => (
                  <motion.div 
                    key={item} 
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -15 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.2 + i * 0.1 }}
                  >
                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                      <Check size={14} className="text-green-600" />
                    </div>
                    <span className="text-gray-700 font-medium">{item}</span>
                  </motion.div>
                ))}
              </div>

              {/* Mascot - with speech bubble */}
              <div className="hidden lg:block -mb-4">
                <Mascot size={200} variant="01" showSpeechBubble speechText="Ждём вас! 🎉" />
              </div>
            </motion.div>

            {/* Right form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <form className="bg-white rounded-2xl p-6 md:p-8 shadow-xl border border-gray-100">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">Запросить демо</h3>
                  <p className="text-gray-500 text-sm">Свяжемся в течение часа</p>
                </div>

                <div className="space-y-4">
                  {[
                    { name: 'name', icon: User, placeholder: 'Ваше имя' },
                    { name: 'email', icon: Mail, placeholder: 'Email' },
                    { name: 'company', icon: Building, placeholder: 'Компания' },
                  ].map((field, i) => (
                    <motion.div 
                      key={field.name}
                      className="relative"
                      initial={{ opacity: 0, y: 10 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.3 + i * 0.1 }}
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
                    className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-[#1890ff] hover:bg-[#40a9ff] text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all"
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.6 }}
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
              </form>
            </motion.div>
          </div>
        </ContentCard>
      </Container>
    </section>
  );
}
