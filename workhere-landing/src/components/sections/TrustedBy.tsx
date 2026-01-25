'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Container from '../ui/Container';

const clients = [
  { name: 'Сбербанк', logo: '🏦' },
  { name: 'Яндекс', logo: '🔍' },
  { name: 'Тинькофф', logo: '💳' },
  { name: 'МТС', logo: '📱' },
  { name: 'Ростелеком', logo: '📡' },
  { name: 'Газпром', logo: '⛽' },
  { name: 'Роснефть', logo: '🛢️' },
  { name: 'ВТБ', logo: '🏛️' },
];

export default function TrustedBy() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <section ref={ref} className="py-16 px-4">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-10"
        >
          <p className="text-gray-500 text-sm font-medium uppercase tracking-wider">
            Нам доверяют
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {clients.map((client, i) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.05 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="flex items-center gap-2 px-4 py-3 rounded-xl bg-white/80 border border-gray-100 shadow-sm hover:shadow-md transition-all cursor-default"
            >
              <span className="text-2xl">{client.logo}</span>
              <span className="text-gray-700 font-medium">{client.name}</span>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="text-center mt-8"
        >
          <p className="text-gray-400 text-sm">
            и ещё 2000+ компаний по всей России
          </p>
        </motion.div>
      </Container>
    </section>
  );
}
