'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Container from '../ui/Container';

// Placeholder logos - будут заменены на реальные
const clients = [
  { name: 'Сбербанк', color: '#21A038' },
  { name: 'Яндекс', color: '#FC3F1D' },
  { name: 'Тинькофф', color: '#FFDD2D' },
  { name: 'МТС', color: '#E30611' },
  { name: 'Ростелеком', color: '#7B2D8E' },
  { name: 'ВТБ', color: '#009FDF' },
];

export default function TrustedBy() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <section ref={ref} className="py-12 overflow-hidden">
      <Container>
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          className="text-center text-gray-400 text-sm uppercase tracking-widest mb-8"
        >
          Нам доверяют
        </motion.p>

        {/* Infinite scroll effect */}
        <div className="relative">
          {/* Gradient masks */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#f0f7ff] to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#f0f7ff] to-transparent z-10" />

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            className="flex items-center justify-center gap-12 md:gap-20"
          >
            {clients.map((client, i) => (
              <motion.div
                key={client.name}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.1 }}
                className="group cursor-default flex-shrink-0"
              >
                {/* Stylized logo placeholder */}
                <div className="relative">
                  {/* Logo circle/shape */}
                  <motion.div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center relative overflow-hidden"
                    style={{ 
                      background: `linear-gradient(135deg, ${client.color}20 0%, ${client.color}40 100%)`,
                    }}
                    whileHover={{ 
                      boxShadow: `0 8px 30px ${client.color}30`,
                    }}
                  >
                    {/* First letter as stylized logo */}
                    <span 
                      className="text-2xl font-black"
                      style={{ color: client.color }}
                    >
                      {client.name[0]}
                    </span>
                    
                    {/* Shine effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: '100%' }}
                      transition={{ duration: 0.6 }}
                    />
                  </motion.div>

                  {/* Name on hover */}
                  <motion.span
                    initial={{ opacity: 0, y: 5 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs text-gray-500 whitespace-nowrap"
                  >
                    {client.name}
                  </motion.span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="text-center text-gray-400 text-sm mt-12"
        >
          2000+ компаний по всей России
        </motion.p>
      </Container>
    </section>
  );
}
