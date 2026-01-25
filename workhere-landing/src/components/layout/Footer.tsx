'use client';

import { motion } from 'framer-motion';

const footerLinks = {
  product: {
    title: 'Продукт',
    links: [
      { label: 'Что такое WorkHere', href: '#' },
      { label: 'Тарифы', href: '#' },
      { label: 'Внедрение', href: '#' },
      { label: 'Безопасность', href: '#security' },
      { label: 'API', href: '#api' },
    ],
  },
  features: {
    title: 'Возможности',
    links: [
      { label: 'Автоматизация', href: '#automation' },
      { label: 'Интеграции', href: '#integrations' },
      { label: 'Аналитика', href: '#analytics' },
      { label: 'Для крупных клиентов', href: '#enterprise' },
    ],
  },
  resources: {
    title: 'Ресурсы',
    links: [
      { label: 'Журнал WorkHere', href: '#' },
      { label: 'Руководства', href: '#' },
      { label: 'Кейсы', href: '#cases' },
      { label: 'Рассылка', href: '#' },
    ],
  },
  company: {
    title: 'Компания',
    links: [
      { label: 'О компании', href: '#' },
      { label: 'Карьера', href: '#' },
      { label: 'Контакты', href: '#' },
    ],
  },
  legal: {
    title: 'Официальное',
    links: [
      { label: 'Пользовательское соглашение', href: '#' },
      { label: 'Политика конфиденциальности', href: '#' },
      { label: 'Документы', href: '#' },
    ],
  },
  social: {
    title: 'Социальные сети',
    links: [
      { label: 'Telegram', href: '#' },
      { label: 'VK', href: '#' },
    ],
  },
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1D1D1F] text-white pt-20 pb-10">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Copyright at top - Huntflow style */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400">© ООО «WorkHere», 2020 — {currentYear}</p>
        </motion.div>

        {/* Links grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-12">
          {Object.entries(footerLinks).map(([key, section], index) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <h2 className="text-white font-medium mb-4">{section.title}</h2>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom section */}
        <motion.div
          className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#1890ff] to-[#0d6edb] flex items-center justify-center">
              <span className="text-white font-black text-xs">W</span>
            </div>
            <span className="text-lg font-bold">
              Work<span className="text-[#1890ff]">Here</span>
            </span>
          </div>

          {/* Contact */}
          <div className="text-gray-400 text-sm">
            <a href="mailto:hello@workhere.ru" className="hover:text-white transition-colors">
              hello@workhere.ru
            </a>
            <span className="mx-3">·</span>
            <a href="tel:+78001234567" className="hover:text-white transition-colors">
              8 800 123-45-67
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
