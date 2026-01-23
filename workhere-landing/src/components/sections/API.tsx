'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Code2, 
  Webhook, 
  FileJson, 
  Zap, 
  RefreshCw, 
  Shield, 
  Database,
  Send,
  Download
} from 'lucide-react';
import Container from '../ui/Container';

const apiFeatures = [
  {
    icon: Code2,
    title: 'REST API',
    description: 'Полноценный REST API для интеграции с любыми системами',
    direction: { x: -200, y: -100 },
  },
  {
    icon: Webhook,
    title: 'Webhooks',
    description: 'Мгновенные уведомления о событиях в реальном времени',
    direction: { x: 0, y: -150 },
  },
  {
    icon: FileJson,
    title: 'Документация',
    description: 'Интерактивная документация с примерами кода',
    direction: { x: 200, y: -100 },
  },
  {
    icon: Send,
    title: 'Передача заявок',
    description: 'Отправляйте заявки из интранета напрямую в систему',
    direction: { x: -250, y: 0 },
  },
  {
    icon: Zap,
    title: 'Высокая скорость',
    description: 'Ответ API менее 100ms, 99.9% uptime',
    direction: { x: 0, y: 0 },
  },
  {
    icon: Download,
    title: 'Импорт откликов',
    description: 'Передавайте отклики с карьерного сайта автоматически',
    direction: { x: 250, y: 0 },
  },
  {
    icon: RefreshCw,
    title: 'Синхронизация',
    description: 'Двусторонняя синхронизация с HR-системами',
    direction: { x: -200, y: 100 },
  },
  {
    icon: Database,
    title: 'Выгрузка данных',
    description: 'Экспорт кандидатов, вакансий, аналитики',
    direction: { x: 0, y: 150 },
  },
  {
    icon: Shield,
    title: 'Безопасность',
    description: 'OAuth 2.0, API ключи, rate limiting',
    direction: { x: 200, y: 100 },
  },
];

export default function API() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-15%' });

  return (
    <section 
      ref={ref}
      className="relative py-24 overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #4f46e5 0%, #6366f1 50%, #7c3aed 100%)',
      }}
    >
      {/* Animated background grid */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />
      
      {/* Glowing orbs */}
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(255,255,255,0.15) 0%, transparent 70%)',
          top: '10%',
          left: '-10%',
        }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)',
          bottom: '5%',
          right: '-5%',
        }}
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <Container className="relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-white/10 border border-white/20 rounded-full backdrop-blur-sm"
          >
            <Code2 size={16} className="text-white" />
            <span className="text-sm font-medium text-white">Для разработчиков</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            Суперсила API
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-white/70 max-w-2xl mx-auto"
          >
            Интегрируйте WorkHere в экосистему вашей компании. 
            Разработайте любые необходимые интеграции
          </motion.p>
          
          <motion.a
            href="#demo"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-white/10 border border-white/30 text-white rounded-full font-medium hover:bg-white/20 transition-colors"
          >
            Портал для разработчиков
          </motion.a>
        </motion.div>

        {/* Cards Grid - 3x3 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {apiFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ 
                opacity: 0, 
                x: feature.direction.x,
                y: feature.direction.y,
                scale: 0.8,
                rotate: feature.direction.x > 0 ? 10 : feature.direction.x < 0 ? -10 : 0,
              }}
              animate={isInView ? { 
                opacity: 1, 
                x: 0, 
                y: 0,
                scale: 1,
                rotate: 0,
              } : {}}
              transition={{ 
                duration: 0.8,
                delay: 0.4 + index * 0.1,
                type: 'spring',
                stiffness: 100,
                damping: 15,
              }}
              whileHover={{ 
                scale: 1.03, 
                y: -5,
                transition: { duration: 0.2 } 
              }}
              className="group relative bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 hover:border-white/30 transition-all cursor-pointer"
            >
              {/* Icon */}
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ 
                  delay: 0.6 + index * 0.1,
                  type: 'spring',
                  stiffness: 200,
                }}
                className="w-14 h-14 mb-4 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors"
              >
                <feature.icon className="text-white" size={28} />
              </motion.div>
              
              {/* Content */}
              <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{feature.description}</p>
              
              {/* Hover glow effect */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                style={{
                  background: 'radial-gradient(circle at center, rgba(255,255,255,0.1) 0%, transparent 70%)',
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* Code preview decoration */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-16 max-w-2xl mx-auto"
        >
          <div className="bg-gray-900/80 backdrop-blur-md rounded-2xl p-6 border border-white/10 font-mono text-sm">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <span className="ml-4 text-white/40">api-example.js</span>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 1.4 }}
            >
              <div className="text-gray-400">// Получить всех кандидатов</div>
              <div>
                <span className="text-purple-400">const</span>
                <span className="text-white"> response </span>
                <span className="text-purple-400">= await</span>
                <span className="text-yellow-300"> fetch</span>
                <span className="text-white">(</span>
              </div>
              <div className="pl-4">
                <span className="text-green-400">'https://api.workhere.ru/v1/candidates'</span>
                <span className="text-white">,</span>
              </div>
              <div className="pl-4">
                <span className="text-white">{'{'} </span>
                <span className="text-blue-300">headers</span>
                <span className="text-white">: {'{'} </span>
                <span className="text-green-400">'Authorization'</span>
                <span className="text-white">: </span>
                <span className="text-green-400">`Bearer {'$'}{'{'}token{'}'}`</span>
                <span className="text-white"> {'}'} {'}'}</span>
              </div>
              <div><span className="text-white">);</span></div>
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
