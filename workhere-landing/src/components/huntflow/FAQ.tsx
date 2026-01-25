'use client';

import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: 'Сколько стоит WorkHere?',
    answer: 'Стоимость зависит от количества пользователей и функционала. Оставьте заявку на демо, и мы подберём оптимальный тариф для вашей компании.',
  },
  {
    question: 'Как долго длится внедрение?',
    answer: 'Базовое внедрение занимает 1-3 дня. Для enterprise-клиентов с кастомными интеграциями — до 2 недель. Мы полностью сопровождаем процесс.',
  },
  {
    question: 'Можно ли перенести данные из другой ATS?',
    answer: 'Да, мы помогаем с миграцией из любых систем. Перенесём кандидатов, вакансии и историю без потери данных.',
  },
  {
    question: 'Какие интеграции доступны?',
    answer: 'Интегрируемся с HeadHunter, SuperJob, Avito, Telegram, WhatsApp, 1C, SAP и многими другими сервисами. Есть открытый API.',
  },
  {
    question: 'Есть ли мобильное приложение?',
    answer: 'Да, WorkHere имеет адаптивный веб-интерфейс и нативные приложения для iOS и Android.',
  },
];

export default function FAQ() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section ref={ref} className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <p className="text-[#5b5fc7] font-semibold mb-4">FAQ</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Частые вопросы
          </h2>
        </motion.div>

        {/* FAQ List */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="space-y-4"
        >
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className="border border-gray-200 rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${
                    isOpen ? 'bg-[#5b5fc7] text-white' : 'bg-gray-100 text-gray-600'
                  }`}>
                    {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                  </div>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-6 text-gray-600">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
