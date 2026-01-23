'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Paws from './Paws';

const basePath = '/web_design/workhere-landing';

export default function FixedBackground() {
  const { scrollYProgress } = useScroll();
  
  // Subtle parallax for background elements
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 15]);
  const rotate2 = useTransform(scrollYProgress, [0, 1], [0, -10]);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      {/* Base gradient */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, #e8f4ff 0%, #f0f7ff 25%, #e0efff 50%, #f5faff 75%, #e8f4ff 100%)',
        }}
      />

      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(#1890ff 1px, transparent 1px), linear-gradient(90deg, #1890ff 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      {/* Large gradient orbs - static, no blur for performance */}
      <div 
        className="absolute w-[800px] h-[800px] rounded-full opacity-20"
        style={{
          background: 'radial-gradient(circle, rgba(24,144,255,0.3) 0%, transparent 70%)',
          top: '-200px',
          right: '-200px',
        }}
      />
      <div 
        className="absolute w-[600px] h-[600px] rounded-full opacity-15"
        style={{
          background: 'radial-gradient(circle, rgba(24,144,255,0.25) 0%, transparent 70%)',
          bottom: '20%',
          left: '-150px',
        }}
      />
      <div 
        className="absolute w-[500px] h-[500px] rounded-full opacity-10"
        style={{
          background: 'radial-gradient(circle, rgba(64,169,255,0.3) 0%, transparent 70%)',
          top: '40%',
          right: '10%',
        }}
      />

      {/* Floating mascots with parallax */}
      <motion.div
        className="absolute right-[10%] top-[15%] hidden lg:block"
        style={{ y: y1 }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`${basePath}/mascot.svg`}
          alt=""
          className="w-32 h-32 opacity-40"
        />
      </motion.div>

      <motion.div
        className="absolute left-[8%] top-[45%] hidden lg:block"
        style={{ y: y2 }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`${basePath}/cat_box.svg`}
          alt=""
          className="w-28 h-28 opacity-30"
        />
      </motion.div>

      <motion.div
        className="absolute right-[15%] top-[70%] hidden xl:block"
        style={{ y: y3 }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`${basePath}/cat_plant.svg`}
          alt=""
          className="w-24 h-24 opacity-25"
        />
      </motion.div>

      {/* Floating paws with parallax rotation */}
      <motion.div
        className="absolute left-[15%] top-[20%] hidden lg:block"
        style={{ y: y1, rotate: rotate1 }}
      >
        <Paws size={100} opacity={0.15} animate={false} />
      </motion.div>

      <motion.div
        className="absolute right-[25%] top-[35%] hidden lg:block"
        style={{ y: y2, rotate: rotate2 }}
      >
        <Paws size={80} opacity={0.12} flip animate={false} />
      </motion.div>

      <motion.div
        className="absolute left-[30%] top-[60%] hidden xl:block"
        style={{ y: y3, rotate: rotate1 }}
      >
        <Paws size={120} opacity={0.1} animate={false} />
      </motion.div>

      <motion.div
        className="absolute right-[8%] top-[55%] hidden lg:block"
        style={{ y: y1, rotate: rotate2 }}
      >
        <Paws size={70} opacity={0.15} flip animate={false} />
      </motion.div>

      <motion.div
        className="absolute left-[5%] top-[80%] hidden lg:block"
        style={{ y: y2, rotate: rotate1 }}
      >
        <Paws size={90} opacity={0.12} animate={false} />
      </motion.div>

      {/* Decorative dots */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-[#1890ff]"
          style={{
            width: 4 + (i % 4) * 2,
            height: 4 + (i % 4) * 2,
            left: `${5 + (i * 4.7) % 90}%`,
            top: `${10 + (i * 5.3) % 80}%`,
            opacity: 0.1 + (i % 3) * 0.05,
            y: i % 2 === 0 ? y1 : y2,
          }}
        />
      ))}
    </div>
  );
}
