'use client';

import { motion } from 'framer-motion';
import { Check, Sparkles, Building2, Building, Rocket } from 'lucide-react';
import Container from '../ui/Container';
import SectionTitle from '../ui/SectionTitle';
import Button from '../ui/Button';

const plans = [
  {
    name: 'Старт',
    icon: Rocket,
    price: '9 900',
    period: 'месяц',
    description: 'Для небольших команд до 5 рекрутеров',
    features: [
      'До 50 активных вакансий',
      'Единая база кандидатов',
      'Воронка подбора',
      'Email-интеграция',
      'Базовая аналитика',
      '5 пользователей',
    ],
    cta: 'Начать бесплатно',
    highlighted: false,
  },
  {
    name: 'Профи',
    icon: Building2,
    price: '24 900',
    period: 'месяц',
    description: 'Для растущих HR-отделов',
    features: [
      'Безлимитные вакансии',
      'AI-скоринг кандидатов',
      'Интеграции с job-бордами',
      'Расширенная аналитика',
      'Карьерный сайт',
      'API доступ',
      '15 пользователей',
      'Приоритетная поддержка',
    ],
    cta: 'Попробовать бесплатно',
    highlighted: true,
    badge: 'Популярный',
  },
  {
    name: 'Enterprise',
    icon: Building,
    price: 'Индивидуально',
    period: '',
    description: 'Для крупных компаний с особыми требованиями',
    features: [
      'Всё из тарифа Профи',
      'Безлимит пользователей',
      'SSO / SAML',
      'Выделенный менеджер',
      'SLA 99.9%',
      'On-premise опция',
      'Кастомные интеграции',
      'Персональное обучение',
    ],
    cta: 'Связаться с нами',
    highlighted: false,
  },
];

const faqs = [
  {
    question: 'Есть ли бесплатный период?',
    answer: 'Да, все тарифы включают 14 дней бесплатного пробного периода без ограничений функционала.',
  },
  {
    question: 'Можно ли сменить тариф?',
    answer: 'Конечно! Вы можете изменить тариф в любой момент. При апгрейде изменения вступят в силу сразу.',
  },
  {
    question: 'Какие способы оплаты?',
    answer: 'Принимаем оплату по счёту для юрлиц, банковские карты. Возможна помесячная и годовая оплата со скидкой 20%.',
  },
  {
    question: 'Что входит в поддержку?',
    answer: 'Все тарифы включают email-поддержку. Профи и Enterprise получают чат-поддержку и выделенного менеджера.',
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-white">
      <Container>
        <SectionTitle
          badge="Тарифы"
          title="Прозрачное ценообразование"
          subtitle="Выберите план, который подходит вашей команде. Все тарифы включают 14 дней бесплатного периода."
        />

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              className={`relative rounded-[24px] p-8 ${
                plan.highlighted
                  ? 'bg-gradient-to-b from-[#1890ff] to-[#0d6edb] text-white shadow-[0_20px_60px_rgba(24,144,255,0.3)]'
                  : 'bg-white border-2 border-gray-100 hover:border-[#1890ff]/30 hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)]'
              } transition-all duration-300`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -10 }}
            >
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-white text-[#1890ff] text-sm font-semibold rounded-full shadow-lg flex items-center gap-2">
                  <Sparkles size={14} />
                  {plan.badge}
                </div>
              )}

              <div className="flex items-center gap-4 mb-6">
                <div
                  className={`w-14 h-14 rounded-[16px] flex items-center justify-center ${
                    plan.highlighted ? 'bg-white/20' : 'bg-[#e6f4ff]'
                  }`}
                >
                  <plan.icon
                    className={plan.highlighted ? 'text-white' : 'text-[#1890ff]'}
                    size={28}
                  />
                </div>
                <div>
                  <h3 className={`text-xl font-bold ${plan.highlighted ? 'text-white' : 'text-gray-900'}`}>
                    {plan.name}
                  </h3>
                </div>
              </div>

              <div className="mb-4">
                <span className={`text-4xl font-bold ${plan.highlighted ? 'text-white' : 'text-gray-900'}`}>
                  {plan.price.includes('Индивидуально') ? '' : '₽'}
                  {plan.price}
                </span>
                {plan.period && (
                  <span className={`text-lg ${plan.highlighted ? 'text-white/70' : 'text-gray-500'}`}>
                    /{plan.period}
                  </span>
                )}
              </div>

              <p className={`mb-6 ${plan.highlighted ? 'text-white/80' : 'text-gray-600'}`}>
                {plan.description}
              </p>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <div
                      className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                        plan.highlighted ? 'bg-white/20' : 'bg-[#e6f4ff]'
                      }`}
                    >
                      <Check
                        className={plan.highlighted ? 'text-white' : 'text-[#1890ff]'}
                        size={12}
                      />
                    </div>
                    <span className={plan.highlighted ? 'text-white/90' : 'text-gray-700'}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.highlighted ? 'secondary' : 'primary'}
                className={`w-full ${
                  plan.highlighted
                    ? 'bg-white text-[#1890ff] hover:bg-gray-100'
                    : ''
                }`}
              >
                {plan.cta}
              </Button>
            </motion.div>
          ))}
        </div>

        {/* FAQ */}
        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Часто задаваемые вопросы
          </h3>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.question}
                className="bg-gray-50 rounded-[16px] p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <h4 className="font-semibold text-gray-900 mb-2">{faq.question}</h4>
                <p className="text-gray-600">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
