'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import Container from '../ui/Container';
import InteractiveMascot from '../ui/InteractiveMascot';

export default function HeroNew() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-16">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg border border-[#1890ff]/10 mb-6"
            >
              <Sparkles size={16} className="text-[#1890ff]" />
              <span className="text-sm font-semibold text-gray-700">ATS-платформа нового поколения</span>
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-[1.1] mb-6"
            >
              Единая система
              <br />
              <span className="text-[#1890ff]">для найма</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-gray-600 mb-8 max-w-lg leading-relaxed"
            >
              Кандидаты, вакансии, воронки, коммуникации, аналитика — 
              <span className="text-[#1890ff] font-semibold"> всё в одном месте</span>
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#demo"
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#22c55e] hover:bg-[#16a34a] text-white font-bold text-lg rounded-2xl shadow-lg shadow-[#22c55e]/30 hover:shadow-xl transition-all hover:-translate-y-0.5"
              >
                🚀 Запросить демо
                <ArrowRight size={20} />
              </a>
              
              <a
                href="#features"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/90 backdrop-blur-sm text-gray-700 font-bold text-lg rounded-2xl border-2 border-gray-200 hover:border-[#1890ff]/30 transition-all shadow-lg"
              >
                Возможности
              </a>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="mt-10 flex items-center gap-6 text-sm text-gray-500"
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500" />
                <span>2000+ компаний</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#1890ff]" />
                <span>500K+ кандидатов</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right - Interactive Mascot with AI explosion */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="relative flex items-center justify-center"
          >
            {/* Decorative cards behind mascot */}
            <div className="absolute w-80 h-80 bg-white/60 backdrop-blur-sm rounded-3xl border border-white/50 shadow-xl -rotate-6" />
            <div className="absolute w-72 h-72 bg-[#1890ff]/10 rounded-3xl rotate-6" />
            
            {/* Interactive Mascot - click triggers AI explosion */}
            <div className="relative z-10">
              <InteractiveMascot size={320} variant="01" />
            </div>
          </motion.div>
        </div>
      </Container>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center text-gray-400"
        >
          <span className="text-sm font-medium mb-2">Листайте вниз</span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
