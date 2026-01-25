'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';

export default function Hero() {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-b from-[#f0f4ff] to-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-gray-100 mb-8"
          >
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-sm text-gray-600">Лучшая ATS России 2024</span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-6"
          >
            Система для управления
            <br />
            <span className="text-[#5b5fc7]">рекрутингом</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto"
          >
            Автоматизируйте найм, сократите Time-to-Hire и принимайте решения на основе данных
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4 mb-16"
          >
            <a
              href="#demo"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#5b5fc7] text-white font-semibold rounded-xl hover:bg-[#4a4eb3] transition-colors"
            >
              Попробовать бесплатно
              <ArrowRight size={18} />
            </a>
            <button className="inline-flex items-center gap-2 px-8 py-4 bg-white text-gray-700 font-semibold rounded-xl border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-colors">
              <Play size={18} className="text-[#5b5fc7]" />
              Смотреть демо
            </button>
          </motion.div>

          {/* Product Screenshot */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
              <img
                src="/web_design/workhere-landing/interface-screenshot.png"
                alt="WorkHere Interface"
                className="w-full"
              />
            </div>
            {/* Shadow */}
            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[90%] h-20 bg-gradient-to-b from-black/10 to-transparent blur-2xl rounded-full" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
