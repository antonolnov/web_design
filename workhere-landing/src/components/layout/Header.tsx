'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';

const navLinks = [
  { 
    href: '#features', 
    label: 'Возможности',
    hasDropdown: true,
    items: [
      { href: '#automation', label: 'Автоматизация' },
      { href: '#integrations', label: 'Интеграции' },
      { href: '#analytics', label: 'Аналитика' },
    ]
  },
  { href: '#enterprise', label: 'Для бизнеса' },
  { href: '#cases', label: 'Кейсы' },
  { href: '#testimonials', label: 'Отзывы' },
  { href: '#security', label: 'Безопасность' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-md'
          : 'bg-white/80 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6">
        <nav className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            {/* Logo icon */}
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#1890ff] to-[#0d6edb] flex items-center justify-center">
              <span className="text-white font-black text-sm">W</span>
            </div>
            <span className="text-xl font-bold text-gray-900">
              Work<span className="text-[#1890ff]">Here</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div
                key={link.href}
                className="relative"
                onMouseEnter={() => link.hasDropdown && setOpenDropdown(link.href)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <a
                  href={link.href}
                  className="flex items-center gap-1 px-4 py-2 text-gray-700 hover:text-gray-900 font-medium transition-colors text-[15px]"
                >
                  {link.label}
                  {link.hasDropdown && <ChevronDown size={14} />}
                </a>
                
                {/* Dropdown */}
                <AnimatePresence>
                  {link.hasDropdown && openDropdown === link.href && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 pt-2"
                    >
                      <div className="bg-white rounded-xl shadow-xl border border-gray-100 py-2 min-w-[200px]">
                        {link.items?.map((item) => (
                          <a
                            key={item.href}
                            href={item.href}
                            className="block px-4 py-2.5 text-gray-600 hover:text-[#1890ff] hover:bg-gray-50 transition-colors text-[14px]"
                          >
                            {item.label}
                          </a>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="#login"
              className="px-5 py-2 text-gray-900 font-medium hover:bg-gray-100 rounded-md transition-colors text-[14px]"
            >
              Войти
            </a>
            <motion.a
              href="#demo"
              className="px-6 py-2.5 bg-[#16BF54] text-white font-semibold rounded-md hover:bg-[#14a849] transition-colors text-[14px]"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Оставить заявку на демо
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-gray-600 hover:text-gray-900"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="lg:hidden bg-white border-t"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-gray-700 hover:text-[#1890ff] font-medium py-3 border-b border-gray-100"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-4 flex flex-col gap-3">
                <a href="#login" className="text-gray-700 font-medium py-2 text-center">
                  Войти
                </a>
                <a
                  href="#demo"
                  className="w-full text-center px-6 py-3 bg-[#16BF54] text-white font-semibold rounded-md"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Оставить заявку на демо
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
