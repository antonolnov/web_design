'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Container from '../ui/Container';
import Button from '../ui/Button';

const navLinks = [
  { href: '#features', label: 'Возможности' },
  { href: '#funnel', label: 'Воронка' },
  { href: '#integrations', label: 'Интеграции' },
  { href: '#analytics', label: 'Аналитика' },
  { href: '#security', label: 'Безопасность' },
  { href: '#pricing', label: 'Тарифы' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.08)]'
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Container>
        <nav className="flex items-center justify-between h-20">
          {/* Logo - замените /logo.svg на путь к вашему логотипу */}
          <a href="#" className="flex items-center gap-2">
            {/* Вариант 1: Иконка + текст (текущий) */}
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
            <span className="text-xl font-bold text-gray-900">WorkHere</span>
            
            {/* Вариант 2: Ваш логотип (раскомментируйте и удалите вариант 1)
            <img 
              src="/web_design/logo.svg" 
              alt="WorkHere" 
              className="h-10 w-auto"
            />
            */}
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-600 hover:text-[#1890ff] transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a href="#contact" className="text-gray-600 hover:text-[#1890ff] transition-colors font-medium">
              Войти
            </a>
            <Button href="#demo" size="sm">
              Запросить демо
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-gray-600 hover:text-[#1890ff] transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Меню"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </Container>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="lg:hidden bg-white border-t border-gray-100"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Container>
              <div className="py-6 flex flex-col gap-4">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-gray-600 hover:text-[#1890ff] transition-colors font-medium py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
                <div className="pt-4 border-t border-gray-100">
                  <Button href="#demo" className="w-full">
                    Запросить демо
                  </Button>
                </div>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
