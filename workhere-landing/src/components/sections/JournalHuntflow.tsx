'use client';

import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, Newspaper, Video, Headphones } from 'lucide-react';

const articles = [
  {
    id: 1,
    category: 'Экспертиза',
    title: 'Как правильно считать срок закрытия позиции',
    description: 'И почему это самая важная метрика',
    color: '#8B5CF6',
    bgColor: '#EDE9FE',
    icon: BookOpen,
  },
  {
    id: 2,
    category: 'Руководства',
    title: 'Как руководителю контролировать работу рекрутеров',
    description: 'Пошаговое руководство для HR-директора',
    color: '#10B981',
    bgColor: '#D1FAE5',
    icon: Newspaper,
  },
  {
    id: 3,
    category: 'Интервью',
    title: 'IT-рекрутеру нужны широкие, но поверхностные знания',
    description: 'Разговор с ведущим IT-рекрутером',
    color: '#F59E0B',
    bgColor: '#FEF3C7',
    icon: Video,
  },
  {
    id: 4,
    category: 'Подкаст',
    title: '75 телеграм-каналов для размещения вакансий',
    description: 'Подборка лучших каналов',
    color: '#EF4444',
    bgColor: '#FEE2E2',
    icon: Headphones,
  },
];

export default function JournalHuntflow() {
  return (
    <section className="relative py-32 overflow-hidden" style={{ backgroundColor: '#1D1D1F' }}>
      {/* Background pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-5">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 20%, rgba(255,255,255,0.1) 0%, transparent 50%),
              radial-gradient(circle at 80% 80%, rgba(255,255,255,0.1) 0%, transparent 50%)
            `,
          }}
        />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 relative">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <motion.h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Журнал WorkHere
            </motion.h2>
            <motion.p
              className="text-xl text-gray-400 max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Более 500 экспертных материалов обо всем, что связано с наймом
            </motion.p>
          </div>
          <motion.a
            href="#journal"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-900 font-medium rounded-full hover:bg-gray-100 transition-colors"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Все материалы
            <ArrowRight className="w-4 h-4" />
          </motion.a>
        </div>

        {/* Articles grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {articles.map((article, index) => {
            const IconComponent = article.icon;
            return (
              <motion.article
                key={article.id}
                className="group rounded-3xl overflow-hidden cursor-pointer"
                style={{ backgroundColor: article.bgColor }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                {/* Image area placeholder */}
                <div 
                  className="h-40 flex items-center justify-center"
                  style={{ backgroundColor: `${article.color}20` }}
                >
                  <motion.div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center"
                    style={{ backgroundColor: article.color }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <IconComponent className="w-8 h-8 text-white" />
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <span 
                    className="text-xs font-medium px-3 py-1 rounded-full"
                    style={{ backgroundColor: `${article.color}20`, color: article.color }}
                  >
                    {article.category}
                  </span>
                  <h3 className="text-lg font-semibold text-gray-900 mt-4 mb-2 group-hover:text-[#1890ff] transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-sm text-gray-600">{article.description}</p>

                  <motion.span
                    className="inline-flex items-center gap-2 mt-4 text-sm font-medium"
                    style={{ color: article.color }}
                  >
                    Читать
                    <ArrowRight className="w-3 h-3" />
                  </motion.span>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Newsletter signup */}
        <motion.div
          className="mt-16 p-8 rounded-3xl bg-white/5 border border-white/10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-white mb-2">Подпишитесь на рассылку</h3>
              <p className="text-gray-400">Наши письма читают уже более 55 000 HR-специалистов</p>
            </div>
            <form className="flex gap-4 w-full md:w-auto" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Ваша эл. почта"
                className="flex-1 md:w-64 px-5 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:border-[#1890ff] focus:ring-2 focus:ring-[#1890ff]/20 outline-none transition-all"
              />
              <motion.button
                type="submit"
                className="px-6 py-3 bg-[#16BF54] text-white font-semibold rounded-xl hover:bg-[#14a849] transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Подписаться
              </motion.button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
