'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Play, Users, Building2, Trophy } from 'lucide-react';
import Container from '../ui/Container';
import Button from '../ui/Button';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-to-b from-[#f0f7ff] to-white">
      {/* Animated Background Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-gradient-to-br from-[#1890ff]/20 to-[#1890ff]/5 blur-3xl"
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute top-1/3 -left-32 w-80 h-80 rounded-full bg-gradient-to-tr from-[#1890ff]/15 to-transparent blur-3xl"
          animate={{
            x: [0, 20, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-20 right-1/4 w-64 h-64 rounded-full bg-gradient-to-tl from-[#1890ff]/10 to-transparent blur-3xl"
          animate={{
            x: [0, -25, 0],
            y: [0, 15, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* Geometric shapes */}
        <motion.svg
          className="absolute top-40 right-20 w-20 h-20 text-[#1890ff]/10"
          viewBox="0 0 80 80"
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
        >
          <rect width="80" height="80" rx="16" fill="currentColor" />
        </motion.svg>
        <motion.svg
          className="absolute bottom-40 left-20 w-16 h-16 text-[#1890ff]/15"
          viewBox="0 0 64 64"
          animate={{ rotate: -360 }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        >
          <circle cx="32" cy="32" r="32" fill="currentColor" />
        </motion.svg>
      </div>

      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-lg shadow-[#1890ff]/10 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <span className="w-2 h-2 bg-[#1890ff] rounded-full animate-pulse" />
              <span className="text-sm font-medium text-gray-600">
                ATS нового поколения
              </span>
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Нанимайте лучших{' '}
              <span className="text-[#1890ff] relative">
                быстрее
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 200 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <motion.path
                    d="M2 8C50 2 150 2 198 8"
                    stroke="#1890ff"
                    strokeWidth="3"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ delay: 1, duration: 0.8 }}
                  />
                </svg>
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed max-w-xl">
              WorkHere — единая платформа для управления подбором персонала. 
              Автоматизируйте рутину, сосредоточьтесь на людях.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button href="#demo" size="lg">
                Запросить демо
                <ArrowRight className="ml-2" size={20} />
              </Button>
              <Button href="#video" variant="secondary" size="lg">
                <Play className="mr-2" size={20} />
                Смотреть видео
              </Button>
            </div>

            {/* Stats */}
            <motion.div
              className="flex flex-wrap gap-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#e6f4ff] rounded-[12px] flex items-center justify-center">
                  <Users className="text-[#1890ff]" size={24} />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">500K+</div>
                  <div className="text-sm text-gray-500">Кандидатов</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#e6f4ff] rounded-[12px] flex items-center justify-center">
                  <Building2 className="text-[#1890ff]" size={24} />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">2000+</div>
                  <div className="text-sm text-gray-500">Компаний</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#e6f4ff] rounded-[12px] flex items-center justify-center">
                  <Trophy className="text-[#1890ff]" size={24} />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">98%</div>
                  <div className="text-sm text-gray-500">Довольных</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Visual */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Main Dashboard Card */}
            <motion.div
              className="bg-white rounded-[24px] shadow-[0_20px_60px_rgba(24,144,255,0.15)] p-6 border border-gray-100"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#1890ff] rounded-full flex items-center justify-center text-white font-semibold">
                    АМ
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Анна Михайлова</div>
                    <div className="text-sm text-gray-500">Senior Developer</div>
                  </div>
                </div>
                <span className="px-3 py-1 bg-[#e6f4ff] text-[#1890ff] text-sm font-medium rounded-full">
                  Новый
                </span>
              </div>

              {/* Progress */}
              <div className="mb-6">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-600">Прогресс воронки</span>
                  <span className="font-semibold text-[#1890ff]">75%</span>
                </div>
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-[#1890ff] to-[#40a9ff] rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: '75%' }}
                    transition={{ delay: 1, duration: 1, ease: 'easeOut' }}
                  />
                </div>
              </div>

              {/* Stages */}
              <div className="flex justify-between">
                {['Скрининг', 'HR', 'Техническое', 'Финал'].map((stage, i) => (
                  <div key={stage} className="text-center">
                    <div
                      className={`w-10 h-10 mx-auto mb-2 rounded-full flex items-center justify-center ${
                        i < 3
                          ? 'bg-[#1890ff] text-white'
                          : 'bg-gray-100 text-gray-400'
                      }`}
                    >
                      {i + 1}
                    </div>
                    <div className="text-xs text-gray-500">{stage}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Floating Cards */}
            <motion.div
              className="absolute -top-4 -right-4 bg-white rounded-[16px] shadow-lg p-4 border border-gray-100"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-green-500" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M8 0a8 8 0 100 16A8 8 0 008 0zm3.78 5.28l-4.5 6a.75.75 0 01-1.18.02l-2-2.25a.75.75 0 111.12-1l1.38 1.55 3.94-5.26a.75.75 0 111.2.9z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-900">+12 откликов</div>
                  <div className="text-xs text-gray-500">Сегодня</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="absolute -bottom-4 -left-4 bg-white rounded-[16px] shadow-lg p-4 border border-gray-100"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-[#e6f4ff] rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-[#1890ff]" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M8 1a7 7 0 100 14A7 7 0 008 1zm0 2a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm0 8.5a5.5 5.5 0 01-4.5-2.33A4.5 4.5 0 018 7a4.5 4.5 0 014.5 2.17A5.5 5.5 0 018 11.5z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-900">5 интервью</div>
                  <div className="text-xs text-gray-500">На этой неделе</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </Container>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-[#1890ff]/30 rounded-full flex justify-center">
          <motion.div
            className="w-1.5 h-3 bg-[#1890ff] rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}
