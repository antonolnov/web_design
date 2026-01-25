'use client';

import { motion } from 'framer-motion';

// Placeholder client logos (text-based for now)
const clients = [
  { name: 'Сбербанк', color: '#21A038' },
  { name: 'Яндекс', color: '#FC3F1D' },
  { name: 'Тинькофф', color: '#FFDD2D' },
  { name: 'ВТБ', color: '#009FDF' },
  { name: 'МТС', color: '#E30611' },
  { name: 'Альфа-Банк', color: '#EF3124' },
  { name: 'Ozon', color: '#005BFF' },
  { name: 'Wildberries', color: '#481173' },
  { name: 'Магнит', color: '#D5152F' },
];

export default function ClientsHuntflow() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1400px] mx-auto px-6">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-xl font-medium text-gray-400">
            Нам доверяют <span className="text-gray-600">2500+</span> компаний
          </h2>
        </motion.div>

        {/* Client logos - simple row */}
        <motion.div
          className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {clients.map((client, index) => (
            <motion.div
              key={client.name}
              className="flex items-center justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
            >
              {/* Placeholder logo - styled text */}
              <div 
                className="px-4 py-2 rounded-lg font-bold text-lg transition-all duration-300 opacity-40 hover:opacity-80 grayscale hover:grayscale-0"
                style={{ 
                  color: client.color,
                }}
              >
                {client.name}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
