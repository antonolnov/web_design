'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ArrowRight, Check, Calendar, MessageSquare, Users } from 'lucide-react';
import Container from '../ui/Container';
import MagneticButton from '../ui/MagneticButton';

const benefits = [
  { icon: Calendar, text: '30-минутная демонстрация' },
  { icon: MessageSquare, text: 'Ответы на ваши вопросы' },
  { icon: Users, text: 'Персональный план внедрения' },
];

export default function CTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <section id="demo" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <Container>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="relative bg-gradient-to-br from-[#1890ff] to-[#0d6edb] rounded-[40px] p-8 lg:p-16 overflow-hidden"
        >
          {/* Background Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-white/10" />
            <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-white/5" />
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                backgroundSize: '40px 40px',
              }}
            />
          </div>

          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 }}
                className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-6 leading-tight"
              >
                Начните нанимать эффективнее
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 }}
                className="text-white/80 text-lg mb-8"
              >
                Запросите персональную демонстрацию WorkHere. 
                Покажем, как платформа решит задачи вашей компании.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 }}
                className="space-y-4"
              >
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                      <benefit.icon className="text-white" size={18} />
                    </div>
                    <span className="text-white/90">{benefit.text}</span>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="bg-white rounded-[24px] p-8 shadow-[0_20px_60px_rgba(0,0,0,0.2)]"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Запросить демо
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Имя
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Ваше имя"
                    className="w-full px-4 py-3 bg-gray-50 rounded-[12px] border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#1890ff] focus:border-transparent transition-all"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Email
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="email@company.ru"
                    className="w-full px-4 py-3 bg-gray-50 rounded-[12px] border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#1890ff] focus:border-transparent transition-all"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Компания
                  </label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="Название компании"
                    className="w-full px-4 py-3 bg-gray-50 rounded-[12px] border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#1890ff] focus:border-transparent transition-all"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Телефон
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+7 (___) ___-__-__"
                    className="w-full px-4 py-3 bg-gray-50 rounded-[12px] border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#1890ff] focus:border-transparent transition-all"
                  />
                </div>

                <MagneticButton
                  className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-[#1890ff] text-white font-semibold rounded-[16px] shadow-lg shadow-[#1890ff]/30 hover:bg-[#0d6edb] transition-colors"
                >
                  Отправить заявку
                  <ArrowRight size={20} />
                </MagneticButton>

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
