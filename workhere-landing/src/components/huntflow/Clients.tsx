'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const clients = [
  'Сбербанк',
  'Яндекс',
  'Тинькофф',
  'МТС',
  'Ростелеком',
  'ВТБ',
  'Газпром',
  'Магнит',
];

export default function Clients() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="py-16 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          className="text-center"
        >
          <p className="text-sm text-gray-500 mb-8">
            Более 2000 компаний доверяют нам подбор персонала
          </p>
          
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6">
            {clients.map((client, i) => (
              <motion.span
                key={client}
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: i * 0.05 }}
                className="text-xl font-semibold text-gray-300 hover:text-gray-400 transition-colors"
              >
                {client}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
