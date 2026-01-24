'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, ArrowRight } from 'lucide-react';
import Container from '../ui/Container';

const footerLinks = {
  product: {
    title: 'Продукт',
    links: [
      { label: 'Автоматизация', href: '#automation' },
      { label: 'Процессы', href: '#pipeline' },
      { label: 'Аналитика', href: '#analytics' },
      { label: 'Интеграции', href: '#integrations' },
      { label: 'Enterprise', href: '#enterprise' },
    ],
  },
  features: {
    title: 'Возможности',
    links: [
      { label: 'Командные воркфлоу', href: '#pipeline' },
      { label: 'Дашборды', href: '#analytics' },
      { label: 'API и webhooks', href: '#integrations' },
      { label: 'Безопасность', href: '#security' },
      { label: 'SLA 99.9%', href: '#enterprise' },
    ],
  },
  company: {
    title: 'Компания',
    links: [
      { label: 'О нас', href: '#' },
      { label: 'Блог', href: '#' },
      { label: 'Карьера', href: '#' },
      { label: 'Контакты', href: '#demo' },
    ],
  },
  legal: {
    title: 'Документы',
    links: [
      { label: 'Политика конфиденциальности', href: '#' },
      { label: 'Условия использования', href: '#' },
      { label: 'SLA', href: '#' },
    ],
  },
};

export default function Footer() {
  return (
    <footer className="relative z-10 bg-gray-900 text-white pt-20 pb-8">
      <Container>
        {/* Main Footer */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-16">
          {/* Logo & Contact */}
          <div className="col-span-2">
            <a href="#" className="inline-flex items-center mb-6">
              <span className="text-2xl font-bold">
                <span className="bg-[#1890ff] text-white px-2 py-1 rounded-l-[8px]">Cloud</span>
                <span className="text-white px-1">Flow</span>
              </span>
            </a>
            <p className="text-gray-400 mb-6 max-w-xs">
              Универсальная SaaS-платформа для управления процессами и ростом.
              Автоматизация, аналитика и интеграции — всё в одном месте.
            </p>
            <div className="space-y-3">
              <a
                href="mailto:hello@cloudflow.app"
                className="flex items-center gap-3 text-gray-400 hover:text-[#1890ff] transition-colors"
              >
                <Mail size={18} />
                <span>hello@cloudflow.app</span>
              </a>
              <a
                href="tel:+78005553535"
                className="flex items-center gap-3 text-gray-400 hover:text-[#1890ff] transition-colors"
              >
                <Phone size={18} />
                <span>8 800 555-35-35</span>
              </a>
              <div className="flex items-center gap-3 text-gray-400">
                <MapPin size={18} />
                <span>Санкт-Петербург, Россия</span>
              </div>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([key, section]) => (
            <div key={key}>
              <h4 className="font-semibold mb-4 text-white">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-[#1890ff] transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <motion.div
          className="bg-gray-800/50 rounded-[24px] p-8 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="text-xl font-bold mb-2">Будьте в курсе обновлений</h4>
              <p className="text-gray-400">Новости продукта и лучшие практики управления процессами</p>
            </div>
            <div className="flex gap-3 w-full md:w-auto">
              <input
                type="email"
                placeholder="Ваш email"
                className="flex-1 md:w-80 px-4 py-3 bg-gray-700/50 rounded-[12px] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1890ff] border border-gray-600"
              />
              <motion.button
                className="px-6 py-3 bg-[#1890ff] text-white rounded-[12px] font-semibold hover:bg-[#0d6edb] transition-colors flex items-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <ArrowRight size={18} />
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-gray-800">
          <p className="text-gray-500 text-sm mb-4 md:mb-0" suppressHydrationWarning>
            © {new Date().getFullYear()} CloudFlow. Все права защищены.
          </p>
          <div className="flex items-center gap-2 text-gray-500 text-sm">
            <span>Сделано с</span>
            <span className="text-[#1890ff]">♥</span>
            <span>для современных команд</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
