'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Paws from './Paws';

const basePath = process.env.NODE_ENV === 'production' ? '/web_design/workhere-landing' : '';

export default function FixedBackground() {
  const { scrollYProgress } = useScroll();
  
  // Parallax effects for mascots
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 15]);
  const rotate2 = useTransform(scrollYProgress, [0, 1], [0, -10]);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Base gradient */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, #f0f7ff 0%, #e8f4ff 50%, #f5f9ff 100%)',
        }}
      />

      {/* Subtle grid */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(#1890ff 1px, transparent 1px), linear-gradient(90deg, #1890ff 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      {/* Gradient orbs */}
      <div 
        className="absolute w-[800px] h-[800px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(24, 144, 255, 0.12) 0%, transparent 70%)',
          top: '-200px',
          right: '-200px',
        }}
      />
      <div 
        className="absolute w-[600px] h-[600px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.08) 0%, transparent 70%)',
          bottom: '10%',
          left: '-150px',
        }}
      />
      <div 
        className="absolute w-[500px] h-[500px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(20, 184, 166, 0.08) 0%, transparent 70%)',
          top: '40%',
          right: '10%',
        }}
      />

      {/* Floating mascots with parallax */}
      <motion.div 
        className="absolute left-[3%] top-[12%] hidden lg:block" 
        style={{ y: y1 }}
      >
        <img 
          src={`${basePath}/workhere_mascot_04_transparent.svg`} 
          alt="" 
          className="w-28 h-28 opacity-20" 
        />
      </motion.div>

      <motion.div 
        className="absolute right-[8%] top-[25%] hidden xl:block" 
        style={{ y: y2, rotate: rotate1 }}
      >
        <img 
          src={`${basePath}/workhere_mascot_02_transparent.svg`} 
          alt="" 
          className="w-24 h-24 opacity-18" 
        />
      </motion.div>

      <motion.div 
        className="absolute left-[5%] top-[45%] hidden lg:block" 
        style={{ y: y3 }}
      >
        <img 
          src={`${basePath}/workhere_mascot_03_transparent.svg`} 
          alt="" 
          className="w-20 h-20 opacity-15" 
        />
      </motion.div>

      <motion.div 
        className="absolute right-[4%] top-[55%] hidden xl:block" 
        style={{ y: y1, rotate: rotate2 }}
      >
        <img 
          src={`${basePath}/workhere_mascot_05_transparent.svg`} 
          alt="" 
          className="w-24 h-24 opacity-18" 
        />
      </motion.div>

      <motion.div 
        className="absolute left-[8%] top-[70%] hidden lg:block" 
        style={{ y: y2 }}
      >
        <img 
          src={`${basePath}/workhere_mascot_06_transparent.svg`} 
          alt="" 
          className="w-22 h-22 opacity-15" 
        />
      </motion.div>

      <motion.div 
        className="absolute right-[6%] top-[80%] hidden xl:block" 
        style={{ y: y3, rotate: rotate1 }}
      >
        <img 
          src={`${basePath}/workhere_mascot_07_transparent.svg`} 
          alt="" 
          className="w-20 h-20 opacity-15" 
        />
      </motion.div>

      {/* Paws with parallax */}
      <motion.div 
        className="absolute left-[15%] top-[8%] hidden lg:block" 
        style={{ y: y1, rotate: rotate1 }}
      >
        <Paws size={90} opacity={0.12} animate={false} />
      </motion.div>

      <motion.div 
        className="absolute right-[18%] top-[18%] hidden lg:block" 
        style={{ y: y2, rotate: rotate2 }}
      >
        <Paws size={70} opacity={0.10} flip animate={false} />
      </motion.div>

      <motion.div 
        className="absolute left-[20%] top-[35%] hidden xl:block" 
        style={{ y: y3 }}
      >
        <Paws size={80} opacity={0.10} animate={false} />
      </motion.div>

      <motion.div 
        className="absolute right-[15%] top-[50%] hidden lg:block" 
        style={{ y: y1, rotate: rotate1 }}
      >
        <Paws size={65} opacity={0.08} flip animate={false} />
      </motion.div>

      <motion.div 
        className="absolute left-[12%] top-[65%] hidden xl:block" 
        style={{ y: y2, rotate: rotate2 }}
      >
        <Paws size={75} opacity={0.10} animate={false} />
      </motion.div>

      <motion.div 
        className="absolute right-[20%] top-[75%] hidden lg:block" 
        style={{ y: y3 }}
      >
        <Paws size={85} opacity={0.12} flip animate={false} />
      </motion.div>

      {/* Decorative dots */}
      {[...Array(15)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-[#1890ff]"
          style={{
            width: 4 + (i % 3) * 2,
            height: 4 + (i % 3) * 2,
            left: `${8 + (i * 6) % 84}%`,
            top: `${10 + (i * 5.5) % 80}%`,
            opacity: 0.06,
          }}
        />
      ))}
    </div>
  );
}
