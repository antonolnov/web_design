'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Linkedin, MessageCircle } from 'lucide-react';
import Container from '../ui/Container';

const footerLinks = {
  product: {
    title: 'Продукт',
    links: [
      { label: 'Возможности', href: '#features' },
      { label: 'Интеграции', href: '#integrations' },
      { label: 'Аналитика', href: '#analytics' },
      { label: 'Безопасность', href: '#security' },
      { label: 'Тарифы', href: '#pricing' },
    ],
  },
  company: {
    title: 'Компания',
    links: [
      { label: 'О нас', href: '#about' },
      { label: 'Карьера', href: '#careers' },
      { label: 'Блог', href: '#blog' },
      { label: 'Партнёрам', href: '#partners' },
    ],
  },
  resources: {
    title: 'Ресурсы',
    links: [
      { label: 'Документация', href: '#docs' },
      { label: 'API', href: '#api' },
      { label: 'Кейсы', href: '#cases' },
      { label: 'Вебинары', href: '#webinars' },
    ],
  },
  legal: {
    title: 'Правовая информация',
    links: [
      { label: 'Политика конфиденциальности', href: '#privacy' },
      { label: 'Условия использования', href: '#terms' },
      { label: 'SLA', href: '#sla' },
    ],
  },
};

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-20 pb-8">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-16">
          {/* Logo & Contact */}
          <div className="col-span-2">
            <a href="#" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-[#1890ff] rounded-[12px] flex items-center justify-center">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 2L4 6V12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12V6L12 2Z"
                    fill="white"
                    fillOpacity="0.3"
                  />
                  <path
                    d="M12 6L8 8V12C8 14.2091 9.79086 16 12 16C14.2091 16 16 14.2091 16 12V8L12 6Z"
                    fill="white"
                  />
                </svg>
              </div>
              <span className="text-xl font-bold">WorkHere</span>
            </a>
            <p className="text-gray-400 mb-6 max-w-xs">
              Современная ATS-платформа для эффективного подбора персонала и управления кандидатами.
            </p>
            <div className="space-y-3">
              <a
                href="mailto:hello@workhere.ru"
                className="flex items-center gap-3 text-gray-400 hover:text-[#1890ff] transition-colors"
              >
                <Mail size={18} />
                <span>hello@workhere.ru</span>
              </a>
              <a
                href="tel:+78001234567"
                className="flex items-center gap-3 text-gray-400 hover:text-[#1890ff] transition-colors"
              >
                <Phone size={18} />
                <span>8 800 123-45-67</span>
              </a>
              <div className="flex items-center gap-3 text-gray-400">
                <MapPin size={18} />
                <span>Москва, Россия</span>
              </div>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([key, section]) => (
            <div key={key}>
              <h4 className="font-semibold mb-4 text-white">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.href}>
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
          className="bg-gray-800 rounded-[16px] p-8 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="text-xl font-bold mb-2">Подпишитесь на рассылку</h4>
              <p className="text-gray-400">Получайте новости HR-индустрии и обновления продукта</p>
            </div>
            <div className="flex gap-3 w-full md:w-auto">
              <input
                type="email"
                placeholder="Ваш email"
                className="flex-1 md:w-80 px-4 py-3 bg-gray-700 rounded-[12px] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1890ff]"
              />
              <motion.button
                className="px-6 py-3 bg-[#1890ff] text-white rounded-[12px] font-semibold hover:bg-[#0d6edb] transition-colors flex items-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Send size={18} />
                <span className="hidden sm:inline">Подписаться</span>
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-gray-800">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} WorkHere. Все права защищены.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="#telegram"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 text-gray-400 hover:bg-[#1890ff] hover:text-white transition-all"
              aria-label="Telegram"
            >
              <Send size={18} />
            </a>
            <a
              href="#linkedin"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 text-gray-400 hover:bg-[#1890ff] hover:text-white transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="#vk"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 text-gray-400 hover:bg-[#1890ff] hover:text-white transition-all"
              aria-label="VK"
            >
              <MessageCircle size={18} />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
