'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Container from '../ui/Container';

const clients = [
  'Сбербанк',
  'Яндекс',
  'Тинькофф',
  'МТС',
  'Ростелеком',
  'ВТБ',
];

export default function TrustedBy() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <section ref={ref} className="py-16 border-y border-gray-100">
      <Container>
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          className="flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <p className="text-sm text-gray-400 uppercase tracking-widest flex-shrink-0">
            Нам доверяют
          </p>

          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {clients.map((client, i) => (
              <motion.div
                key={client}
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: i * 0.1 }}
                className="text-gray-300 font-semibold text-lg hover:text-gray-400 transition-colors cursor-default"
              >
                {client}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
