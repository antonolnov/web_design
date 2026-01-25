'use client';

import { motion } from 'framer-motion';
import Mascot from '@/components/ui/Mascot';

export default function CTAHuntflow() {
  return (
    <section id="demo" className="relative py-24 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-30"
          style={{
            background: 'radial-gradient(circle, rgba(24,144,255,0.1) 0%, transparent 70%)',
          }}
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="max-w-[1400px] mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Mascot */}
          <motion.div
            className="flex-shrink-0"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Mascot 
              variant="03" 
              size={280} 
              phrase="Ждём вас! 🚀"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <motion.h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Закажите персональное демо
            </motion.h2>

            <motion.p
              className="text-xl text-gray-600 mb-8 max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Оставьте заявку — мы покажем, как WorkHere поможет улучшить ваш подбор
            </motion.p>

            {/* Form */}
            <motion.form
              className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="Ваша эл. почта"
                className="flex-1 px-5 py-4 rounded-xl border border-gray-200 focus:border-[#1890ff] focus:ring-2 focus:ring-[#1890ff]/20 outline-none transition-all text-gray-900"
                required
              />
              <motion.button
                type="submit"
                className="px-8 py-4 bg-[#16BF54] text-white font-semibold rounded-xl hover:bg-[#14a849] transition-colors shadow-lg shadow-green-500/25"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Оставить заявку
              </motion.button>
            </motion.form>

            {/* Trust indicators */}
            <motion.div
              className="flex flex-wrap justify-center lg:justify-start gap-6 mt-8 text-sm text-gray-500"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500" />
                Бесплатная консультация
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500" />
                Ответим за 24 часа
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500" />
                Без обязательств
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
