'use client';

import { motion } from 'framer-motion';
import InteractiveMascot from '@/components/ui/InteractiveMascot';

export default function HeroHuntflow() {
  return (
    <section className="relative min-h-screen pt-20 pb-12 overflow-hidden bg-gradient-to-b from-white via-white to-gray-50">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient orbs */}
        <motion.div
          className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full opacity-30"
          style={{
            background: 'radial-gradient(circle, rgba(24,144,255,0.15) 0%, transparent 70%)',
          }}
          animate={{
            scale: [1, 1.1, 1],
            x: [0, 20, 0],
            y: [0, -20, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, rgba(24,144,255,0.2) 0%, transparent 70%)',
          }}
          animate={{
            scale: [1, 1.15, 1],
            x: [0, -20, 0],
            y: [0, 20, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        
        {/* Floating particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-[#1890ff]/20"
            style={{
              left: `${10 + (i * 6) % 80}%`,
              top: `${20 + (i * 7) % 60}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.5, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 4 + (i % 3),
              repeat: Infinity,
              delay: i * 0.3,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      <div className="relative max-w-[1400px] mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 min-h-[calc(100vh-120px)]">
          {/* Left side - Text content */}
          <motion.div
            className="flex-1 text-center lg:text-left pt-8 lg:pt-0"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1890ff]/10 border border-[#1890ff]/20 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="w-2 h-2 rounded-full bg-[#16BF54] animate-pulse" />
              <span className="text-[#1890ff] font-medium text-sm">
                Система автоматизации рекрутмента №1
              </span>
            </motion.div>

            {/* Main heading */}
            <motion.h1
              className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 leading-[1.1] tracking-tight mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Лучшая ATS
              <br />
              <span className="relative">
                система России
                {/* Underline decoration */}
                <motion.svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 300 12"
                  fill="none"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ delay: 0.8, duration: 1 }}
                >
                  <motion.path
                    d="M2 8C50 4 100 2 150 5C200 8 250 6 298 3"
                    stroke="#1890ff"
                    strokeWidth="4"
                    strokeLinecap="round"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ delay: 0.8, duration: 1 }}
                  />
                </motion.svg>
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              className="text-xl text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              WorkHere — система автоматизации рекрутмента{' '}
              <span className="text-[#1890ff] font-medium">с искусственным интеллектом</span>,
              которая помогает закрывать вакансии в срок
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.a
                href="#demo"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#16BF54] text-white font-semibold rounded-lg text-lg shadow-lg shadow-green-500/25 hover:bg-[#14a849] transition-colors"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Оставить заявку на демо
              </motion.a>
              <motion.a
                href="#features"
                className="inline-flex items-center justify-center px-8 py-4 bg-gray-100 text-gray-700 font-semibold rounded-lg text-lg hover:bg-gray-200 transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Узнать больше
              </motion.a>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="flex flex-wrap justify-center lg:justify-start gap-8 mt-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              {[
                { value: '2500+', label: 'компаний' },
                { value: '1M+', label: 'кандидатов' },
                { value: '99.9%', label: 'uptime' },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  className="text-center lg:text-left"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.1 + i * 0.1 }}
                >
                  <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-sm text-gray-500">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right side - Mascot with AI */}
          <motion.div
            className="flex-1 flex items-center justify-center relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            {/* Background glow for mascot */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center pointer-events-none"
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            >
              <div 
                className="w-[400px] h-[400px] rounded-full opacity-40"
                style={{
                  background: 'radial-gradient(circle, rgba(24,144,255,0.2) 0%, transparent 70%)',
                }}
              />
            </motion.div>

            {/* Interactive Mascot */}
            <InteractiveMascot size={350} variant="01" />

          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <span className="text-sm text-gray-400">Листайте вниз</span>
          <motion.div
            className="w-6 h-10 rounded-full border-2 border-gray-300 flex items-start justify-center p-1"
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <motion.div
              className="w-1.5 h-3 rounded-full bg-gray-400"
              animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
