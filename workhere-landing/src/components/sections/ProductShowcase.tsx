'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import Container from '../ui/Container';
import CrazyBackground from '../ui/CrazyBackground';
import Mascot from '../ui/Mascot';
import { Search, Plus, Calendar, Clock, ChevronDown, Download, Star } from 'lucide-react';

function InterfaceMockup() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div 
      ref={ref}
      className="relative"
      initial={{ opacity: 0, y: 100, rotateX: 15 }}
      animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
      transition={{ duration: 1, type: 'spring' }}
      style={{ perspective: 1000 }}
    >
      {/* Glowing border */}
      <motion.div
        className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-[#1890ff] via-[#40a9ff] to-[#1890ff]"
        animate={{
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
        }}
        transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
        style={{ backgroundSize: '200% 200%' }}
      />
      
      <div className="relative flex h-[500px] md:h-[600px] bg-gray-100 rounded-2xl overflow-hidden text-sm">
        {/* Sidebar */}
        <motion.div 
          className="w-16 md:w-20 bg-[#1890ff] flex flex-col items-center py-4 gap-3"
          initial={{ x: -100 }}
          animate={isInView ? { x: 0 } : {}}
          transition={{ delay: 0.3, type: 'spring' }}
        >
          <motion.div 
            className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center text-white font-bold"
            whileHover={{ scale: 1.1, rotate: 10 }}
          >
            W
          </motion.div>
          <div className="flex-1 flex flex-col items-center gap-2 mt-4">
            {['📊', '👥', '💼', '📅', '⚙️'].map((icon, i) => (
              <motion.div 
                key={i} 
                className={`w-10 h-10 rounded-xl flex items-center justify-center cursor-pointer ${i === 1 ? 'bg-white/20 text-white' : 'text-white/60'}`}
                whileHover={{ scale: 1.15, backgroundColor: 'rgba(255,255,255,0.2)' }}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.4 + i * 0.1 }}
              >
                {icon}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Candidate list */}
        <motion.div 
          className="w-64 md:w-72 bg-white border-r border-gray-200 flex flex-col"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
        >
          <div className="p-4 border-b border-gray-200">
            <div className="flex items-center gap-2 mb-3">
              <div className="flex-1 flex items-center gap-2 px-3 py-2 bg-gray-100 rounded-lg">
                <Search size={14} className="text-gray-400" />
                <span className="text-gray-400">Поиск</span>
              </div>
              <motion.button 
                className="p-2 bg-[#1890ff] text-white rounded-lg"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Plus size={14} />
              </motion.button>
            </div>
          </div>
          <div className="flex-1 overflow-hidden">
            {[
              { name: 'Чухарева Елена', email: 'elena@mail.ru', salary: '140 000 ₽' },
              { name: 'Кровякова Екатерина', email: 'kate@gmail.com', salary: '100 000 ₽' },
              { name: 'Перевощиков Данил', email: 'dan@ya.ru', salary: '—' },
              { name: 'Докин Александр', email: 'alex@vtb.ru', salary: '100 000 ₽', active: true },
              { name: 'Соловьев Роман', email: 'roman@mail.ru', salary: '80 000 ₽' },
            ].map((c, i) => (
              <motion.div 
                key={i} 
                className={`p-3 border-b border-gray-100 cursor-pointer ${c.active ? 'bg-[#e6f4ff] border-l-2 border-l-[#1890ff]' : ''}`}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.6 + i * 0.1 }}
                whileHover={{ backgroundColor: '#f0f7ff', x: 5 }}
              >
                <div className="flex items-start gap-3">
                  <motion.div 
                    className="w-8 h-8 rounded-full bg-gradient-to-br from-[#1890ff] to-[#40a9ff] flex items-center justify-center text-white text-xs font-medium"
                    whileHover={{ scale: 1.2 }}
                  >
                    {c.name[0]}
                  </motion.div>
                  <div className="flex-1 min-w-0">
                    <div className="font-medium text-gray-900 truncate">{c.name}</div>
                    <div className="text-xs text-gray-500 truncate">{c.email}</div>
                    <div className="text-xs text-[#1890ff] mt-1">{c.salary}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Main content */}
        <motion.div 
          className="flex-1 bg-white overflow-hidden"
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.7 }}
        >
          <div className="h-full flex flex-col">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-4">
                  <motion.div 
                    className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#1890ff] to-[#40a9ff] flex items-center justify-center text-white text-2xl font-medium"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    ДА
                  </motion.div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Докин Александр (36 лет)</h3>
                    <p className="text-gray-600">Менеджер по работе с клиентами • Банк ВТБ</p>
                    <p className="text-[#1890ff] font-medium mt-1">64 000 — 100 000 ₽</p>
                  </div>
                </div>
              </div>
              <div className="flex gap-2 mt-4">
                <motion.button 
                  className="px-4 py-2 bg-[#1890ff] text-white rounded-lg text-sm font-medium"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Пригласить
                </motion.button>
                <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium">Редактировать</button>
              </div>
            </div>
            
            {/* Content area with animation */}
            <div className="flex-1 p-6 space-y-4">
              {[1, 2, 3].map((_, i) => (
                <motion.div
                  key={i}
                  className="h-16 bg-gray-50 rounded-xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 1 + i * 0.1 }}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function ProductShowcase() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const rotate = useTransform(scrollYProgress, [0, 1], [-5, 5]);

  return (
    <section 
      ref={containerRef}
      className="relative py-32 overflow-hidden bg-gradient-to-b from-white via-[#f8fbff] to-white"
    >
      {/* Crazy animated background */}
      <CrazyBackground variant="waves" intensity="medium" />
      
      {/* Optimized floating elements - just 6 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${(i * 16) % 100}%`,
              top: `${(i * 14) % 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.05, 0.2, 0.05],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          >
            <Star size={12 + (i % 6)} className="text-[#1890ff]" />
          </motion.div>
        ))}
      </div>

      {/* Mascot peeking */}
      <motion.div
        className="absolute left-0 top-1/2 -translate-y-1/2 z-20 hidden lg:block"
        style={{ y, rotate }}
      >
        <motion.div
          animate={{ x: [-20, 0, -20] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <Mascot size={120} variant="wave" />
        </motion.div>
      </motion.div>

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.span
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#1890ff]/10 rounded-full text-[#1890ff] text-sm font-medium mb-4"
            whileHover={{ scale: 1.05 }}
          >
            <motion.span
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            >
              ✨
            </motion.span>
            Продуманный до деталей
          </motion.span>
          
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Интерфейс, в который{' '}
            <span className="text-[#1890ff]">влюбляются</span>
          </motion.h2>
          
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            Каждый пиксель создан для эффективной работы рекрутеров
          </motion.p>
        </motion.div>

        <InterfaceMockup />
      </Container>
    </section>
  );
}
