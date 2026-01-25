'use client';

import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import Container from '../ui/Container';
import Mascot from '../ui/Mascot';

const faqs = [
  {
    question: 'Сколько стоит WorkHere?',
    answer: 'Стоимость зависит от количества пользователей и выбранного функционала. Мы предлагаем гибкие тарифы для компаний любого размера. Оставьте заявку на демо, и мы подберём оптимальный вариант для вас.',
  },
  {
    question: 'Как долго длится внедрение системы?',
    answer: 'Базовое внедрение занимает от 1 до 3 дней. Для enterprise-клиентов с кастомными интеграциями — до 2 недель. Мы полностью сопровождаем процесс и обучаем вашу команду.',
  },
  {
    question: 'Можно ли перенести данные из другой ATS?',
    answer: 'Да, мы помогаем с миграцией данных из любых систем. Наша команда выполнит перенос кандидатов, вакансий и истории без потери информации.',
  },
  {
    question: 'Есть ли мобильное приложение?',
    answer: 'Да, WorkHere имеет адаптивный веб-интерфейс, который отлично работает на мобильных устройствах. Также есть нативные приложения для iOS и Android.',
  },
  {
    question: 'Как работает AI-скоринг кандидатов?',
    answer: 'AI анализирует резюме кандидата, сопоставляет с требованиями вакансии и присваивает скор от 0 до 100. Алгоритм учитывает опыт, навыки, образование и даже soft skills.',
  },
  {
    question: 'Какие интеграции доступны?',
    answer: 'Интегрируемся с HeadHunter, SuperJob, Avito Работа, Telegram, WhatsApp, 1C, SAP, Microsoft 365 и многими другими сервисами. Также есть открытый API для кастомных интеграций.',
  },
  {
    question: 'Безопасно ли хранить данные кандидатов в WorkHere?',
    answer: 'Абсолютно. Мы соответствуем требованиям 152-ФЗ, используем шифрование данных, регулярные бэкапы и строгий контроль доступа. Система входит в реестр отечественного ПО.',
  },
];

function FAQItem({ faq, isOpen, onClick, index }: { 
  faq: typeof faqs[0]; 
  isOpen: boolean; 
  onClick: () => void;
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.4 }}
      className="border-b border-gray-200 last:border-0"
    >
      <button
        onClick={onClick}
        className="w-full py-5 flex items-center justify-between text-left group"
      >
        <span className="text-lg font-medium text-gray-900 group-hover:text-[#1890ff] transition-colors pr-4">
          {faq.question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className={`flex-shrink-0 p-2 rounded-full ${
            isOpen ? 'bg-[#1890ff] text-white' : 'bg-gray-100 text-gray-600'
          } transition-colors`}
        >
          {isOpen ? <Minus size={18} /> : <Plus size={18} />}
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-gray-600 leading-relaxed">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section ref={ref} className="py-20 px-4">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1890ff]/10 text-[#1890ff] text-sm font-medium mb-4">
            ❓ Вопросы
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Часто задаваемые вопросы
          </h2>
          <p className="text-lg text-gray-600">
            Ответы на популярные вопросы о WorkHere
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* FAQ list */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6"
            >
              {faqs.map((faq, i) => (
                <FAQItem
                  key={i}
                  faq={faq}
                  index={i}
                  isOpen={openIndex === i}
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                />
              ))}
            </motion.div>
          </div>

          {/* Sidebar with mascot */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="hidden lg:block"
          >
            <div className="sticky top-32 text-center">
              <Mascot size={180} variant="02" showSpeechBubble speechText="Остались вопросы? 🤔" />
              <p className="text-gray-600 mt-6 mb-4">
                Не нашли ответ на свой вопрос?
              </p>
              <a
                href="#demo"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#1890ff] text-white font-semibold rounded-xl hover:bg-[#0d6edb] transition-colors"
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
