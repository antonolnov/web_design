'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, BookOpen, TrendingUp, Users, Lightbulb, Clock } from 'lucide-react';
import Container from '../ui/Container';

const articles = [
  {
    id: 1,
    title: '10 ошибок при проведении собеседований',
    excerpt: 'Разбираем типичные ошибки рекрутеров и как их избежать',
    category: 'Интервью',
    readTime: '5 мин',
    icon: Users,
    color: '#1890ff',
    size: 'large',
  },
  {
    id: 2,
    title: 'Как составить вакансию, которая привлекает',
    excerpt: 'Секреты написания вакансий, которые получают больше откликов',
    category: 'Вакансии',
    readTime: '7 мин',
    icon: TrendingUp,
    color: '#22c55e',
    size: 'small',
  },
  {
    id: 3,
    title: 'AI в рекрутинге: тренды 2026',
    excerpt: 'Что нового принесёт искусственный интеллект в найм',
    category: 'Технологии',
    icon: Lightbulb,
    readTime: '8 мин',
    color: '#8b5cf6',
    size: 'small',
  },
];

export default function Journal() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-24">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16"
        >
          <div>
            <span className="text-[#f97316] font-medium flex items-center gap-2">
              <BookOpen size={18} />
              Журнал WorkHere
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2">
              Полезные статьи для HR
            </h2>
          </div>
          <motion.a
            href="#"
            whileHover={{ x: 5 }}
            className="inline-flex items-center gap-2 text-[#1890ff] font-medium text-lg"
          >
            Все статьи
            <ArrowRight size={20} />
          </motion.a>
        </motion.div>

        {/* Bento grid layout */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Large article */}
          <motion.article
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            whileHover={{ y: -5 }}
            className="group cursor-pointer md:row-span-2"
          >
            <div 
              className="h-full rounded-3xl p-8 md:p-10 relative overflow-hidden"
              style={{ 
                background: `linear-gradient(135deg, ${articles[0].color}10 0%, ${articles[0].color}05 100%)`,
              }}
            >
              {/* Decorative shape */}
              <motion.div
                className="absolute -right-20 -bottom-20 w-60 h-60 rounded-full"
                style={{ backgroundColor: `${articles[0].color}10` }}
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 5, repeat: Infinity }}
              />

              <div className="relative z-10 h-full flex flex-col">
                {/* Category */}
                {(() => {
                  const IconComponent = articles[0].icon;
                  return (
                    <div 
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium w-fit mb-6"
                      style={{ backgroundColor: `${articles[0].color}20`, color: articles[0].color }}
                    >
                      <IconComponent size={16} />
                      {articles[0].category}
                    </div>
                  );
                })()}

                {/* Title */}
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 group-hover:text-[#1890ff] transition-colors">
                  {articles[0].title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-600 text-lg mb-8 flex-grow">
                  {articles[0].excerpt}
                </p>

                {/* Meta */}
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-2 text-gray-500">
                    <Clock size={16} />
                    {articles[0].readTime}
                  </span>
                  <motion.span
                    className="flex items-center gap-2 font-medium"
                    style={{ color: articles[0].color }}
                    whileHover={{ x: 5 }}
                  >
                    Читать
                    <ArrowRight size={18} />
                  </motion.span>
                </div>
              </div>
            </div>
          </motion.article>

          {/* Small articles */}
          {articles.slice(1).map((article, i) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.1 }}
              whileHover={{ y: -5 }}
              className="group cursor-pointer"
            >
              <div 
                className="h-full rounded-3xl p-6 md:p-8 relative overflow-hidden"
                style={{ 
                  background: `linear-gradient(135deg, ${article.color}10 0%, ${article.color}05 100%)`,
                }}
              >
                {/* Decorative dot */}
                <motion.div
                  className="absolute -right-10 -top-10 w-32 h-32 rounded-full"
                  style={{ backgroundColor: `${article.color}08` }}
                />

                <div className="relative z-10">
                  {/* Category */}
                  <div 
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium mb-4"
                    style={{ backgroundColor: `${article.color}20`, color: article.color }}
                  >
                    <article.icon size={14} />
                    {article.category}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#1890ff] transition-colors">
                    {article.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-gray-600 mb-6">
                    {article.excerpt}
                  </p>

                  {/* Meta */}
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-2 text-gray-500 text-sm">
                      <Clock size={14} />
                      {article.readTime}
                    </span>
                    <motion.span
                      className="text-sm font-medium"
                      style={{ color: article.color }}
                      whileHover={{ x: 3 }}
                    >
                      →
                    </motion.span>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="text-center text-gray-500 mt-12"
        >
          Регулярно публикуем полезные материалы для HR-специалистов
        </motion.p>
      </Container>
    </section>
  );
}
