'use client';

import { motion } from 'framer-motion';

interface SectionTitleProps {
  badge?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export default function SectionTitle({
  badge,
  title,
  subtitle,
  centered = true,
}: SectionTitleProps) {
  return (
    <motion.div
      className={`mb-12 ${centered ? 'text-center' : ''}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6 }}
    >
      {badge && (
        <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-[#1890ff] bg-[#e6f4ff] rounded-full">
          {badge}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
