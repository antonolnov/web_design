'use client';

import { motion } from 'framer-motion';
import Container from '../ui/Container';

const clients = [
  { name: 'TechCorp', letter: 'T' },
  { name: 'FinanceGroup', letter: 'F' },
  { name: 'RetailMax', letter: 'R' },
  { name: 'MediaHolding', letter: 'M' },
  { name: 'LogisticsPro', letter: 'L' },
  { name: 'DataSolutions', letter: 'D' },
  { name: 'CloudServices', letter: 'C' },
  { name: 'DigitalAgency', letter: 'D' },
];

export default function Clients() {
  return (
    <section className="py-16 bg-white border-y border-gray-100">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-center text-gray-500 mb-8">
            Более 2000 компаний доверяют WorkHere
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-16">
            {clients.map((client, index) => (
              <motion.div
                key={client.name}
                className="flex items-center gap-3 group cursor-pointer"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-10 h-10 bg-gray-100 rounded-[10px] flex items-center justify-center text-gray-400 font-bold group-hover:bg-[#e6f4ff] group-hover:text-[#1890ff] transition-colors">
                  {client.letter}
                </div>
                <span className="text-gray-400 font-semibold group-hover:text-[#1890ff] transition-colors hidden sm:block">
                  {client.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
