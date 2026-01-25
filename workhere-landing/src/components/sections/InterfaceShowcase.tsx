'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Container from '../ui/Container';

const basePath = process.env.NODE_ENV === 'production' ? '/web_design/workhere-landing' : '';

export default function InterfaceShowcase() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-24 overflow-hidden">
      <Container>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-[#1890ff] font-medium mb-4">Интерфейс</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Удобная работа с кандидатами
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Интуитивный интерфейс, который ускоряет работу рекрутера
          </p>
        </motion.div>

        {/* Screenshot */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative max-w-5xl mx-auto"
        >
          {/* Browser frame */}
          <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-200 bg-white">
            {/* Browser bar */}
            <div className="flex items-center gap-2 px-4 py-3 bg-gray-50 border-b border-gray-100">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>
              <div className="flex-1 flex justify-center">
                <div className="px-4 py-1 bg-white rounded-lg text-sm text-gray-400 border border-gray-100">
                  app.workhere.ru
                </div>
              </div>
            </div>

            {/* Screenshot */}
            <img
              src={`${basePath}/interface-screenshot.png`}
              alt="WorkHere Interface"
              className="w-full h-auto"
            />
          </div>

          {/* Decorative shadow */}
          <div 
            className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[80%] h-8 rounded-[100%] blur-2xl"
            style={{ background: 'rgba(0,0,0,0.1)' }}
          />
        </motion.div>
      </Container>
    </section>
  );
}
