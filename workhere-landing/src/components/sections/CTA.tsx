'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Mail, Phone, MessageCircle, Calendar, Send } from 'lucide-react';
import Container from '../ui/Container';
import Button from '../ui/Button';

export default function CTA() {
  return (
    <section id="demo" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <Container>
        <div className="relative bg-gradient-to-br from-[#1890ff] to-[#0d6edb] rounded-[32px] p-8 lg:p-16 overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div
              className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-white/10"
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 90, 0],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
            <motion.div
              className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-white/5"
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
            <svg
              className="absolute top-0 right-0 w-full h-full opacity-10"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <pattern id="dots" width="5" height="5" patternUnits="userSpaceOnUse">
                <circle cx="2.5" cy="2.5" r="0.5" fill="white" />
              </pattern>
              <rect width="100" height="100" fill="url(#dots)" />
            </svg>
          </div>

          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Text */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-6 leading-tight">
                Начните нанимать эффективнее уже сегодня
              </h2>
              <p className="text-white/80 text-lg mb-8 leading-relaxed">
                Запросите персональную демонстрацию WorkHere. Наш эксперт покажет, 
                как платформа решит задачи именно вашей компании.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-3 text-white/90">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <Calendar className="text-white" size={18} />
                  </div>
                  <span>30-минутный звонок</span>
                </div>
                <div className="flex items-center gap-3 text-white/90">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <MessageCircle className="text-white" size={18} />
                  </div>
                  <span>Ответы на вопросы</span>
                </div>
                <div className="flex items-center gap-3 text-white/90">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <Send className="text-white" size={18} />
                  </div>
                  <span>Персональный план</span>
                </div>
                <div className="flex items-center gap-3 text-white/90">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <ArrowRight className="text-white" size={18} />
                  </div>
                  <span>Бесплатный триал</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex items-center gap-3 text-white/70">
                  <Mail size={18} />
                  <span>demo@workhere.ru</span>
                </div>
                <div className="flex items-center gap-3 text-white/70">
                  <Phone size={18} />
                  <span>8 800 123-45-67</span>
                </div>
              </div>
            </motion.div>

            {/* Right - Form */}
            <motion.div
              className="bg-white rounded-[24px] p-8 shadow-[0_20px_60px_rgba(0,0,0,0.2)]"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Запросить демо
              </h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Имя
                  </label>
                  <input
                    type="text"
                    placeholder="Ваше имя"
                    className="w-full px-4 py-3 bg-gray-50 rounded-[12px] border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#1890ff] focus:border-transparent transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="email@company.ru"
                    className="w-full px-4 py-3 bg-gray-50 rounded-[12px] border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#1890ff] focus:border-transparent transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Компания
                  </label>
                  <input
                    type="text"
                    placeholder="Название компании"
                    className="w-full px-4 py-3 bg-gray-50 rounded-[12px] border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#1890ff] focus:border-transparent transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Телефон
                  </label>
                  <input
                    type="tel"
                    placeholder="+7 (___) ___-__-__"
                    className="w-full px-4 py-3 bg-gray-50 rounded-[12px] border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#1890ff] focus:border-transparent transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Сколько рекрутеров в команде?
                  </label>
                  <select className="w-full px-4 py-3 bg-gray-50 rounded-[12px] border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#1890ff] focus:border-transparent transition-all text-gray-700">
                    <option value="">Выберите</option>
                    <option value="1-5">1-5 человек</option>
                    <option value="6-15">6-15 человек</option>
                    <option value="16-50">16-50 человек</option>
                    <option value="50+">Более 50</option>
                  </select>
                </div>
                <Button className="w-full" size="lg">
                  Отправить заявку
                  <ArrowRight className="ml-2" size={20} />
                </Button>
                <p className="text-xs text-gray-500 text-center">
                  Нажимая кнопку, вы соглашаетесь с{' '}
                  <a href="#privacy" className="text-[#1890ff] hover:underline">
                    политикой конфиденциальности
                  </a>
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}
