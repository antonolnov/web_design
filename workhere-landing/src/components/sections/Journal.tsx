'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, BookOpen, TrendingUp, Users, Lightbulb } from 'lucide-react';
import Container from '../ui/Container';
import ContentCard from '../ui/ContentCard';

const articles = [
  {
    id: 1,
    title: '10 ошибок при проведении собеседований',
    category: 'Интервью',
    readTime: '5 мин',
    icon: Users,
    color: '#1890ff',
  },
  {
    id: 2,
    title: 'Как составить вакансию, которая привлекает',
    category: 'Вакансии',
    readTime: '7 мин',
    icon: TrendingUp,
    color: '#22c55e',
  },
  {
    id: 3,
    title: 'AI в рекрутинге: тренды 2026',
    category: 'Технологии',
    icon: Lightbulb,
    readTime: '8 мин',
    color: '#8b5cf6',
  },
];

export default function Journal() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-20 px-4">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-12"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#f97316]/10 text-[#f97316] text-sm font-medium mb-4">
              <BookOpen size={16} />
              Журнал WorkHere
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Полезные статьи для HR
            </h2>
          </div>
          <motion.a
            href="#"
            whileHover={{ x: 5 }}
            className="inline-flex items-center gap-2 text-[#1890ff] font-medium hover:underline"
          >
            Все статьи
            <ArrowRight size={18} />
          </motion.a>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {articles.map((article, i) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ 
                delay: i * 0.15,
                duration: 0.5,
                type: 'spring',
                stiffness: 100,
              }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group cursor-pointer"
            >
              <ContentCard variant="white" className="h-full">
                {/* Category badge */}
                <div 
                  className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium mb-4"
                  style={{ 
                    backgroundColor: `${article.color}15`,
                    color: article.color,
                  }}
                >
                  <article.icon size={14} />
                  {article.category}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-[#1890ff] transition-colors">
                  {article.title}
                </h3>

                {/* Meta */}
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                  <span className="text-sm text-gray-500">{article.readTime} чтения</span>
                  <motion.div
                    whileHover={{ x: 3 }}
                    className="text-[#1890ff]"
                  >
                    <ArrowRight size={18} />
                  </motion.div>
                </div>
              </ContentCard>
            </motion.div>
          ))}
        </div>

        {/* Bottom text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="text-center text-gray-500 mt-8"
        >
          Регулярно публикуем полезные материалы для HR-специалистов
        </motion.p>
      </Container>
    </section>
  );
}
