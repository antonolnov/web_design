'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Container from '../ui/Container';
import MagneticButton from '../ui/MagneticButton';

const navLinks = [
  { href: '#features', label: 'Возможности' },
  { href: '#funnel', label: 'Воронки' },
  { href: '#analytics', label: 'Аналитика' },
  { href: '#security', label: 'Безопасность' },
  { href: '#demo', label: 'Демо' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.06)]'
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <Container>
        <nav className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.a
            href="#"
            className="flex items-center"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="text-2xl font-bold">
              <span className="bg-[#1890ff] text-white px-2 py-1 rounded-l-[8px]">Work</span>
              <span className="text-gray-900 px-1">Here</span>
            </span>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <motion.a
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-gray-600 hover:text-[#1890ff] font-medium rounded-full hover:bg-[#1890ff]/5 transition-all"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {link.label}
              </motion.a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <motion.a
              href="#"
              className="px-5 py-2.5 text-gray-600 hover:text-[#1890ff] font-semibold rounded-full hover:bg-[#1890ff]/5 transition-all"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Вход
            </motion.a>
            <MagneticButton
              href="#demo"
              className="px-6 py-2.5 bg-[#22c55e] text-white font-semibold rounded-full shadow-lg shadow-[#22c55e]/20 hover:bg-[#16a34a] transition-colors"
            >
              Запросить демо
            </MagneticButton>
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
              <div className="py-6 flex flex-col gap-2">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="px-4 py-3 text-gray-600 hover:text-[#1890ff] hover:bg-[#1890ff]/5 font-medium rounded-[12px] transition-all"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
                <div className="pt-4 border-t border-gray-100 mt-2 space-y-2">
                  <a
                    href="#"
                    className="block w-full text-center px-6 py-3 text-gray-600 font-semibold rounded-full border border-gray-200"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Вход
                  </a>
                  <a
                    href="#demo"
                    className="block w-full text-center px-6 py-3 bg-[#22c55e] text-white font-semibold rounded-full"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Запросить демо
                  </a>
                </div>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
