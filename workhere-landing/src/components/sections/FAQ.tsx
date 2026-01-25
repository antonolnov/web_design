'use client';

import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import Container from '../ui/Container';
import Mascot from '../ui/Mascot';

const faqs = [
  {
    question: 'Сколько стоит WorkHere?',
    answer: 'Стоимость зависит от количества пользователей и выбранного функционала. Мы предлагаем гибкие тарифы для компаний любого размера. Оставьте заявку на демо, и мы подберём оптимальный вариант.',
  },
  {
    question: 'Как долго длится внедрение системы?',
    answer: 'Базовое внедрение занимает от 1 до 3 дней. Для enterprise-клиентов с кастомными интеграциями — до 2 недель. Мы полностью сопровождаем процесс.',
  },
  {
    question: 'Можно ли перенести данные из другой ATS?',
    answer: 'Да, мы помогаем с миграцией данных из любых систем. Наша команда выполнит перенос без потери информации.',
  },
  {
    question: 'Как работает AI-скоринг кандидатов?',
    answer: 'AI анализирует резюме, сопоставляет с требованиями вакансии и присваивает скор от 0 до 100. Алгоритм учитывает опыт, навыки и образование.',
  },
  {
    question: 'Какие интеграции доступны?',
    answer: 'Интегрируемся с HeadHunter, SuperJob, Avito, Telegram, WhatsApp, 1C, SAP и многими другими. Есть открытый API.',
  },
  {
    question: 'Безопасно ли хранить данные в WorkHere?',
    answer: 'Абсолютно. Мы соответствуем 152-ФЗ, используем шифрование данных. Система входит в реестр отечественного ПО.',
  },
];

export default function FAQ() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section ref={ref} className="py-24">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <span className="text-[#1890ff] font-medium">Вопросы</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-4">
            Часто спрашивают
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
          {/* FAQ list */}
          <div className="lg:col-span-2 space-y-4">
            {faqs.map((faq, i) => {
              const isOpen = openIndex === i;
              
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: i * 0.1 }}
                  className="group"
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className={`w-full text-left py-5 px-6 rounded-2xl transition-all ${
                      isOpen 
                        ? 'bg-[#1890ff]/10' 
                        : 'hover:bg-gray-100'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-4">
                      <span className={`text-lg font-medium transition-colors ${
                        isOpen ? 'text-[#1890ff]' : 'text-gray-900'
                      }`}>
                        {faq.question}
                      </span>
                      <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                        className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                          isOpen 
                            ? 'bg-[#1890ff] text-white' 
                            : 'bg-gray-100 text-gray-600'
                        }`}
                      >
                        {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                      </motion.div>
                    </div>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <p className="pt-4 text-gray-600 leading-relaxed">
                            {faq.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </button>
                </motion.div>
              );
            })}
          </div>

          {/* Sidebar with mascot */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="hidden lg:block"
          >
            <div className="sticky top-32 text-center">
              <Mascot size={200} variant="02" showSpeechBubble speechText="Остались вопросы? 🤔" />
              <p className="text-gray-600 mt-8 mb-6 text-lg">
                Не нашли ответ?
              </p>
              <a
                href="#demo"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#1890ff] text-white font-semibold rounded-2xl hover:bg-[#0d6edb] transition-colors"
              >
                Связаться с нами
              </a>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
