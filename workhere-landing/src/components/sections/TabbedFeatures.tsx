'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Container from '../ui/Container';
import TextReveal from '../ui/TextReveal';
import { MessageSquare, Clock, BarChart3, Star, CheckCircle } from 'lucide-react';

const tabs = [
  { id: 'requests', label: 'ЗАЯВКИ НА ПОДБОР', title: 'Получение заявок от заказчиков', description: 'Заявки на подбор позволяют сразу получить точные требования к кандидатам. Все поля настраиваются под ваши процессы.', features: ['Шаблоны заявок', 'Согласование в системе', 'Приоритеты и SLA', 'История изменений'], visual: (<div className="bg-white rounded-[20px] p-6 shadow-xl border border-gray-100"><div className="text-sm font-semibold text-gray-900 mb-4">Заявка на подбор</div><div className="space-y-3"><div className="text-lg font-bold text-gray-800">Дизайнер продукта</div><div className="text-sm text-gray-500">Отдел Дизайна • Новая позиция</div><div className="mt-4"><div className="text-xs text-gray-500 mb-2">Требования</div><div className="flex flex-wrap gap-2"><span className="px-3 py-1 bg-green-500 text-white text-xs rounded-full">Опыт &gt; 3 лет</span><span className="px-3 py-1 bg-orange-500 text-white text-xs rounded-full">Анимация</span></div></div></div></div>) },
  { id: 'feedback', label: 'ОБРАТНАЯ СВЯЗЬ', title: 'Сбор фидбека от менеджеров', description: 'Автоматизируйте сбор обратной связи. Настраиваемые формы, напоминания, агрегация мнений.', features: ['Гибкие формы оценки', 'Автонапоминания', 'Сводка мнений', 'Скоринговые карты'], visual: (<div className="bg-white rounded-[20px] p-6 shadow-xl border border-gray-100"><div className="flex items-center gap-3 mb-4"><div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center"><MessageSquare className="text-[#1890ff]" size={20} /></div><div><div className="text-sm font-semibold text-gray-900">Оценка кандидата</div><div className="text-xs text-gray-500">3 из 4 участников</div></div></div><div className="space-y-2">{['Навыки', 'Культурный fit', 'Мотивация'].map((item, i) => (<div key={item} className="flex items-center justify-between"><span className="text-sm text-gray-600">{item}</span><div className="flex gap-1">{[1,2,3,4,5].map(s => (<Star key={s} size={14} className={s <= 4-i*0.5 ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'} />))}</div></div>))}</div></div>) },
  { id: 'deadlines', label: 'КОНТРОЛЬ СРОКОВ', title: 'Time-to-hire под контролем', description: 'Отслеживайте время на каждом этапе. Уведомления о "зависших" кандидатах. Анализ узких мест.', features: ['Время на этапах', 'Автоэскалации', 'Прогноз закрытия', 'Bottleneck-анализ'], visual: (<div className="bg-white rounded-[20px] p-6 shadow-xl border border-gray-100"><div className="flex items-center gap-3 mb-4"><Clock className="text-[#1890ff]" size={24} /><div className="text-sm font-semibold text-gray-900">Метрики времени</div></div><div className="space-y-3">{[{ label: 'Time-to-contact', value: '2.4 ч', color: 'bg-green-500' },{ label: 'Time-to-interview', value: '3.2 дня', color: 'bg-blue-500' },{ label: 'Time-to-hire', value: '18 дней', color: 'bg-purple-500' }].map(m => (<div key={m.label} className="flex items-center justify-between"><div className="flex items-center gap-2"><div className={`w-2 h-2 rounded-full ${m.color}`} /><span className="text-sm text-gray-600">{m.label}</span></div><span className="text-sm font-semibold text-gray-900">{m.value}</span></div>))}</div></div>) },
  { id: 'stats', label: 'СТАТИСТИКА', title: 'Аналитика для заказчика', description: 'Дайте заказчикам прозрачность. Настраиваемые дашборды, отчёты по воронке.', features: ['Персональные дашборды', 'Воронка по вакансиям', 'Сравнение источников', 'Экспорт отчётов'], visual: (<div className="bg-white rounded-[20px] p-6 shadow-xl border border-gray-100"><div className="flex items-center gap-3 mb-4"><BarChart3 className="text-[#1890ff]" size={24} /><div className="text-sm font-semibold text-gray-900">Воронка вакансии</div></div><div className="space-y-2">{[{ stage: 'Новые', count: 156, width: '100%' },{ stage: 'Скрининг', count: 89, width: '57%' },{ stage: 'Интервью', count: 34, width: '22%' },{ stage: 'Найм', count: 3, width: '2%' }].map(item => (<div key={item.stage} className="flex items-center gap-3"><span className="text-xs text-gray-500 w-16">{item.stage}</span><div className="flex-1 h-6 bg-gray-100 rounded-full overflow-hidden"><motion.div className="h-full bg-[#1890ff] rounded-full" initial={{ width: 0 }} whileInView={{ width: item.width }} viewport={{ once: true }} transition={{ duration: 1 }} /></div><span className="text-xs font-semibold text-gray-900 w-8">{item.count}</span></div>))}</div></div>) },
  { id: 'rating', label: 'ОЦЕНКА НАЙМА', title: 'Качество подбора в цифрах', description: 'Оценивайте успешность найма через 30, 60, 90 дней. NPS от менеджеров.', features: ['Оценка после испытательного', 'NPS по рекрутерам', 'Анализ текучести', 'ROI источников'], visual: (<div className="bg-white rounded-[20px] p-6 shadow-xl border border-gray-100"><div className="text-center mb-4"><div className="text-3xl font-bold text-[#1890ff]">92%</div><div className="text-sm text-gray-500">Успешных наймов</div></div><div className="space-y-3">{[{ label: 'Прошли испытательный', value: '94%', icon: CheckCircle },{ label: 'NPS заказчиков', value: '+67', icon: Star },{ label: 'Ср. время закрытия', value: '21 день', icon: Clock }].map(item => (<div key={item.label} className="flex items-center justify-between p-2 bg-gray-50 rounded-lg"><div className="flex items-center gap-2"><item.icon size={14} className="text-[#1890ff]" /><span className="text-xs text-gray-600">{item.label}</span></div><span className="text-sm font-semibold text-gray-900">{item.value}</span></div>))}</div></div>) },
];

export default function TabbedFeatures() {
  const [activeTab, setActiveTab] = useState('requests');
  const activeContent = tabs.find(t => t.id === activeTab);

  return (
    <section className="py-24 bg-gradient-to-b from-[#f0faf5] to-white overflow-hidden">
      <Container>
        <div className="text-center mb-12">
          <motion.span initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-[#1890ff] bg-[#e6f4ff] rounded-full">Работа с заказчиками</motion.span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4"><TextReveal>Прозрачность для всех</TextReveal></h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="text-lg text-gray-600 max-w-2xl mx-auto">Вовлекайте нанимающих менеджеров без потери контроля</motion.p>
        </div>
        <motion.div className="flex flex-wrap justify-center gap-2 mb-12" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
          {tabs.map(tab => (<button key={tab.id} onClick={() => setActiveTab(tab.id)} className={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${activeTab === tab.id ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>{tab.label}</button>))}
        </motion.div>
        <AnimatePresence mode="wait">
          {activeContent && (
            <motion.div key={activeContent.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }} className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{activeContent.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{activeContent.description}</p>
                <ul className="space-y-3">{activeContent.features.map((f, i) => (<motion.li key={f} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }} className="flex items-center gap-3"><div className="w-5 h-5 bg-[#e6f4ff] rounded-full flex items-center justify-center flex-shrink-0"><CheckCircle className="text-[#1890ff]" size={12} /></div><span className="text-gray-700">{f}</span></motion.li>))}</ul>
              </div>
              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }} className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#e6f4ff] to-[#d1fae5] rounded-[30px] -rotate-3" />
                <div className="relative p-8">{activeContent.visual}</div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
        <div className="flex justify-center gap-2 mt-12">{tabs.map(tab => (<button key={tab.id} onClick={() => setActiveTab(tab.id)} className={`w-2 h-2 rounded-full transition-all ${activeTab === tab.id ? 'w-8 bg-gray-900' : 'bg-gray-300'}`} />))}</div>
      </Container>
    </section>
  );
}
