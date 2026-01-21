'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Container from '../ui/Container';
import TextReveal from '../ui/TextReveal';
import { Search, Plus, Calendar, Clock, ChevronDown, Download } from 'lucide-react';

function InterfaceMockup() {
  return (
    <div className="flex h-[500px] md:h-[600px] bg-gray-100 text-sm">
      <div className="w-16 md:w-20 bg-[#1890ff] flex flex-col items-center py-4 gap-3">
        <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center text-white font-bold">W</div>
        <div className="flex-1 flex flex-col items-center gap-2 mt-4">
          {['📊', '👥', '💼', '📅', '⚙️'].map((icon, i) => (
            <div key={i} className={`w-10 h-10 rounded-xl flex items-center justify-center ${i === 1 ? 'bg-white/20 text-white' : 'text-white/60'}`}>{icon}</div>
          ))}
        </div>
      </div>
      <div className="w-64 md:w-72 bg-white border-r border-gray-200 flex flex-col">
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center gap-2 mb-3">
            <div className="flex-1 flex items-center gap-2 px-3 py-2 bg-gray-100 rounded-lg">
              <Search size={14} className="text-gray-400" /><span className="text-gray-400">Поиск</span>
            </div>
            <button className="p-2 bg-[#1890ff] text-white rounded-lg"><Plus size={14} /></button>
          </div>
          <div className="flex gap-2 text-xs">
            <span className="px-2 py-1 bg-gray-100 rounded-md text-gray-600">Фильтры</span>
            <span className="px-2 py-1 bg-[#e6f4ff] text-[#1890ff] rounded-md">Все: 1,234</span>
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
            <div key={i} className={`p-3 border-b border-gray-100 ${c.active ? 'bg-[#e6f4ff] border-l-2 border-l-[#1890ff]' : ''}`}>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#1890ff] to-[#40a9ff] flex items-center justify-center text-white text-xs font-medium">{c.name[0]}</div>
                <div className="flex-1 min-w-0">
                  <div className="font-medium text-gray-900 truncate">{c.name}</div>
                  <div className="text-xs text-gray-500 truncate">{c.email}</div>
                  <div className="text-xs text-[#1890ff] mt-1">{c.salary}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex-1 bg-white overflow-hidden">
        <div className="h-full flex flex-col">
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#1890ff] to-[#40a9ff] flex items-center justify-center text-white text-2xl font-medium">ДА</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Докин Александр (36 лет)</h3>
                  <p className="text-gray-600">Менеджер по работе с клиентами • Банк ВТБ</p>
                  <p className="text-[#1890ff] font-medium mt-1">64 000 — 100 000 ₽</p>
                </div>
              </div>
              <button className="px-3 py-1.5 text-xs bg-gray-100 text-gray-600 rounded-lg flex items-center gap-1"><Download size={12} /> Скачать</button>
            </div>
            <div className="flex gap-2 mt-4">
              <button className="px-4 py-2 bg-[#1890ff] text-white rounded-lg text-sm font-medium">Пригласить</button>
              <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium">Редактировать</button>
              <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium flex items-center gap-1">Действия <ChevronDown size={14} /></button>
            </div>
          </div>
          <div className="px-6 border-b border-gray-200">
            <div className="flex gap-6">
              {['Основное', 'Собеседования', 'Комментарии', 'История', 'Файлы'].map((tab, i) => (
                <button key={tab} className={`py-3 text-sm font-medium border-b-2 ${i === 1 ? 'border-[#1890ff] text-[#1890ff]' : 'border-transparent text-gray-500'}`}>
                  {tab} {i === 2 && <span className="ml-1 px-1.5 py-0.5 bg-gray-100 rounded text-xs">31</span>}
                </button>
              ))}
            </div>
          </div>
          <div className="flex-1 p-6 overflow-auto">
            <div className="bg-[#f0faf5] rounded-xl p-4 mb-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                  <span className="font-medium text-gray-900">Проверка</span>
                </div>
                <select className="px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-sm"><option>Приглашён</option></select>
              </div>
              <div className="flex items-center gap-6 text-sm text-gray-600">
                <span className="flex items-center gap-1"><Calendar size={14} /> 22.01.2026</span>
                <span className="flex items-center gap-1"><Clock size={14} /> 12:00 - 13:00</span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div><div className="text-xs text-gray-500 mb-2">Стаж работы</div><div className="text-lg font-medium text-gray-900">более 10 лет</div></div>
              <div><div className="text-xs text-gray-500 mb-2">Навыки</div><div className="flex flex-wrap gap-1">{['Коммуникация', 'Продажи'].map(s => (<span key={s} className="px-2 py-1 bg-gray-100 rounded-md text-xs text-gray-600">• {s}</span>))}</div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ProductShowcase() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start end', 'end start'] });
  const opacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0.95, 1, 1, 0.95]);
  const y = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [60, 0, 0, -60]);

  return (
    <section ref={containerRef} className="py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <Container>
        <motion.div style={{ opacity, scale, y }} className="relative">
          <div className="text-center mb-12">
            <motion.span initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-[#1890ff] bg-[#e6f4ff] rounded-full">Интерфейс системы</motion.span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4"><TextReveal>Продуманный до деталей</TextReveal></h2>
            <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="text-lg text-gray-600 max-w-2xl mx-auto">Интуитивный интерфейс с полной историей взаимодействий</motion.p>
          </div>
          <motion.div className="relative mx-auto max-w-6xl" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3, duration: 0.8 }}>
            <div className="bg-gray-800 rounded-t-[20px] p-4 flex items-center gap-2">
              <div className="flex gap-2"><div className="w-3 h-3 rounded-full bg-red-500" /><div className="w-3 h-3 rounded-full bg-yellow-500" /><div className="w-3 h-3 rounded-full bg-green-500" /></div>
              <div className="flex-1 mx-4"><div className="bg-gray-700 rounded-lg px-4 py-2 text-gray-400 text-sm">app.workhere.ru/candidates/12345</div></div>
            </div>
            <div className="relative bg-white rounded-b-[20px] shadow-[0_40px_100px_rgba(0,0,0,0.15)] overflow-hidden">
              <InterfaceMockup />
              <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none" />
            </div>
            <motion.div className="absolute -left-4 top-1/4 bg-white rounded-[16px] p-4 shadow-xl border border-gray-100 max-w-[200px] hidden lg:block" initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.5 }}><div className="text-sm font-semibold text-gray-900 mb-1">Быстрый поиск</div><div className="text-xs text-gray-500">Находите кандидатов за секунды</div></motion.div>
            <motion.div className="absolute -right-4 top-1/3 bg-white rounded-[16px] p-4 shadow-xl border border-gray-100 max-w-[200px] hidden lg:block" initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.6 }}><div className="text-sm font-semibold text-gray-900 mb-1">Полная история</div><div className="text-xs text-gray-500">Все взаимодействия в одном месте</div></motion.div>
            <motion.div className="absolute -right-4 bottom-1/4 bg-[#1890ff] rounded-[16px] p-4 shadow-xl max-w-[200px] text-white hidden lg:block" initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.7 }}><div className="text-sm font-semibold mb-1">Один клик</div><div className="text-xs opacity-80">Действия доступны мгновенно</div></motion.div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
