'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Container from '../ui/Container';
import CrazyBackground from '../ui/CrazyBackground';
import Mascot from '../ui/Mascot';
import Paws from '../ui/Paws';
import { Search, Plus, Mail, Phone } from 'lucide-react';

function InterfaceMockup() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div 
      ref={ref}
      className="relative"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
    >
      {/* Border glow - static */}
      <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-[#1890ff] via-[#40a9ff] to-[#1890ff] opacity-30" />
      
      <div className="relative flex h-[500px] md:h-[550px] bg-gray-100 rounded-2xl overflow-hidden text-sm">
        {/* Sidebar */}
        <motion.div 
          className="w-16 md:w-20 bg-[#1890ff] flex flex-col items-center py-4 gap-3"
          initial={{ x: -50 }}
          animate={isInView ? { x: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.4 }}
        >
          <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center text-white font-bold">
            W
          </div>
          <div className="flex-1 flex flex-col items-center gap-2 mt-4">
            {['📊', '👥', '💼', '📅', '⚙️'].map((icon, i) => (
              <div 
                key={i} 
                className={`w-10 h-10 rounded-xl flex items-center justify-center cursor-pointer ${i === 1 ? 'bg-white/20 text-white' : 'text-white/60 hover:bg-white/10'}`}
              >
                {icon}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Candidate list */}
        <motion.div 
          className="w-64 md:w-72 bg-white border-r border-gray-200 flex flex-col"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
        >
          <div className="p-4 border-b border-gray-200">
            <div className="flex items-center gap-2 mb-3">
              <div className="flex-1 flex items-center gap-2 px-3 py-2 bg-gray-100 rounded-lg">
                <Search size={14} className="text-gray-400" />
                <span className="text-gray-400">Поиск</span>
              </div>
              <button className="p-2 bg-[#1890ff] text-white rounded-lg">
                <Plus size={14} />
              </button>
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
                className={`p-3 border-b border-gray-100 cursor-pointer hover:bg-gray-50 ${c.active ? 'bg-[#e6f4ff] border-l-2 border-l-[#1890ff]' : ''}`}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.4 + i * 0.05 }}
              >
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#1890ff] to-[#40a9ff] flex items-center justify-center text-white text-xs font-medium">
                    {c.name[0]}
                  </div>
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
          initial={{ opacity: 0, x: 30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.5 }}
        >
          <div className="h-full flex flex-col">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#1890ff] to-[#40a9ff] flex items-center justify-center text-white text-2xl font-medium">
                    ДА
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Докин Александр (36 лет)</h3>
                    <p className="text-gray-600">Менеджер по работе с клиентами • Банк ВТБ</p>
                    <p className="text-[#1890ff] font-medium mt-1">64 000 — 100 000 ₽</p>
                  </div>
                </div>
              </div>
              <div className="flex gap-2 mt-4">
                <button className="px-4 py-2 bg-[#1890ff] text-white rounded-lg text-sm font-medium hover:bg-[#40a9ff] transition-colors">
                  Пригласить
                </button>
                <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors">
                  Редактировать
                </button>
              </div>
            </div>
            
            {/* Content area */}
            <div className="flex-1 p-6 space-y-4">
              {[1, 2, 3].map((_, i) => (
                <motion.div
                  key={i}
                  className="h-16 bg-gray-50 rounded-xl"
                  initial={{ opacity: 0, y: 15 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.7 + i * 0.08 }}
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
  return (
    <section className="relative py-28 overflow-hidden bg-gradient-to-b from-white via-[#f8fbff] to-white">
      {/* Simple background */}
      <CrazyBackground variant="gradient" />

      {/* Decorative Paws */}
      <Paws 
        size={75} 
        className="absolute top-28 right-20 hidden lg:block" 
        rotation={15}
        opacity={0.5}
      />
      <Paws 
        size={55} 
        className="absolute bottom-32 right-[40%] hidden lg:block" 
        rotation={-25}
        opacity={0.4}
        flip
      />
      
      {/* Mascot - plant variant */}
      <motion.div
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 hidden lg:block"
        animate={{ y: [-10, 10, -10] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <Mascot size={110} variant="plant" />
      </motion.div>

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#1890ff]/10 rounded-full text-[#1890ff] text-sm font-medium mb-4">
            ✨ Продуманный до деталей
          </span>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-5">
            Интерфейс, в который <span className="text-[#1890ff]">влюбляются</span>
          </h2>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Каждый пиксель создан для эффективной работы рекрутеров
          </p>
        </motion.div>

        <InterfaceMockup />
      </Container>
    </section>
  );
}
