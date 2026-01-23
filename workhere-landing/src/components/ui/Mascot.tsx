'use client';

import { motion } from 'framer-motion';

interface MascotProps {
  size?: number;
  className?: string;
  animate?: boolean;
}

export default function Mascot({ 
  size = 200, 
  className = '', 
  animate = true
}: MascotProps) {
  return (
    <motion.div
      className={`relative ${className}`}
      style={{ width: size, height: size }}
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        animate={animate ? { y: [-5, 5, -5] } : undefined}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="w-full h-full"
      >
        <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-lg">
          <defs>
            {/* Градиенты для кота */}
            <linearGradient id="catBodyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#5B9BD5"/>
              <stop offset="100%" stopColor="#4A7FB8"/>
            </linearGradient>
            <linearGradient id="catDarkGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#4A7FB8"/>
              <stop offset="100%" stopColor="#3D6A9E"/>
            </linearGradient>
            <linearGradient id="helmetGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#E8F4FF" stopOpacity="0.9"/>
              <stop offset="50%" stopColor="#C5E0F7" stopOpacity="0.7"/>
              <stop offset="100%" stopColor="#A8D0F0" stopOpacity="0.5"/>
            </linearGradient>
            <linearGradient id="suitGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF"/>
              <stop offset="100%" stopColor="#E8EEF4"/>
            </linearGradient>
            <linearGradient id="tailGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#5B9BD5"/>
              <stop offset="50%" stopColor="#7BB8E8"/>
              <stop offset="100%" stopColor="#A8D4F5"/>
            </linearGradient>
            <linearGradient id="laptopGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2D3748"/>
              <stop offset="100%" stopColor="#1A202C"/>
            </linearGradient>
            {/* Тень */}
            <filter id="shadowFilter" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="1" dy="2" stdDeviation="3" floodColor="#000" floodOpacity="0.15"/>
            </filter>
          </defs>

          {/* Белая обводка-стикер */}
          <ellipse cx="100" cy="105" rx="88" ry="90" fill="white" filter="url(#shadowFilter)"/>
          
          <g transform="translate(12, 12)">
            {/* Хвост - пушистый с полосками */}
            <path 
              d="M140,130 Q165,145 175,125 Q185,105 170,90 Q155,75 140,85 Q130,95 135,115 Z" 
              fill="url(#tailGrad)"
            />
            {/* Полоски на хвосте */}
            <path d="M158,95 Q165,100 168,108" stroke="#A8D4F5" strokeWidth="4" fill="none" strokeLinecap="round"/>
            <path d="M150,100 Q160,108 165,118" stroke="#A8D4F5" strokeWidth="3" fill="none" strokeLinecap="round"/>
            <path d="M145,108 Q155,118 160,128" stroke="#A8D4F5" strokeWidth="3" fill="none" strokeLinecap="round"/>

            {/* Тело - костюм космонавта */}
            <ellipse cx="88" cy="115" rx="42" ry="48" fill="url(#suitGrad)"/>
            
            {/* Полоски на костюме */}
            <path d="M55,95 Q88,90 121,95" stroke="#D0D8E0" strokeWidth="3" fill="none"/>
            <path d="M52,108 Q88,103 124,108" stroke="#D0D8E0" strokeWidth="3" fill="none"/>
            <path d="M54,121 Q88,116 122,121" stroke="#D0D8E0" strokeWidth="3" fill="none"/>
            <path d="M58,134 Q88,130 118,134" stroke="#D0D8E0" strokeWidth="2.5" fill="none"/>
            <path d="M65,147 Q88,144 111,147" stroke="#D0D8E0" strokeWidth="2" fill="none"/>
            
            {/* Воротник шлема */}
            <ellipse cx="88" cy="72" rx="28" ry="7" fill="#3D5A80"/>

            {/* Шлем - прозрачный пузырь */}
            <circle cx="88" cy="48" r="38" fill="url(#helmetGrad)" stroke="#B0C4DE" strokeWidth="1"/>
            {/* Блик на шлеме */}
            <ellipse cx="72" cy="35" rx="15" ry="10" fill="white" opacity="0.5"/>
            <ellipse cx="68" cy="32" rx="8" ry="5" fill="white" opacity="0.7"/>

            {/* Голова кота внутри шлема */}
            <ellipse cx="88" cy="50" rx="28" ry="24" fill="url(#catBodyGrad)"/>
            
            {/* Уши */}
            <path d="M62,35 L52,12 L72,30 Z" fill="url(#catBodyGrad)"/>
            <path d="M114,35 L124,12 L104,30 Z" fill="url(#catBodyGrad)"/>
            {/* Внутренняя часть ушей */}
            <path d="M64,33 L57,18 L70,30 Z" fill="#7BB8E8" opacity="0.6"/>
            <path d="M112,33 L119,18 L106,30 Z" fill="#7BB8E8" opacity="0.6"/>

            {/* Глаза - большие и милые */}
            <ellipse cx="76" cy="48" rx="10" ry="12" fill="white"/>
            <ellipse cx="100" cy="48" rx="10" ry="12" fill="white"/>
            {/* Зрачки */}
            <circle cx="78" cy="50" r="6" fill="#2D3748"/>
            <circle cx="102" cy="50" r="6" fill="#2D3748"/>
            {/* Блики в глазах */}
            <circle cx="80" cy="47" r="2.5" fill="white"/>
            <circle cx="104" cy="47" r="2.5" fill="white"/>
            <circle cx="76" cy="52" r="1.5" fill="white"/>
            <circle cx="100" cy="52" r="1.5" fill="white"/>

            {/* Нос */}
            <ellipse cx="88" cy="58" rx="3" ry="2" fill="#4A7FB8"/>
            
            {/* Рот */}
            <path d="M82,62 Q88,67 94,62" stroke="#4A7FB8" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
            <path d="M88,58 L88,62" stroke="#4A7FB8" strokeWidth="1.5" strokeLinecap="round"/>

            {/* Усы */}
            <g stroke="#4A7FB8" strokeWidth="1" opacity="0.6">
              <line x1="50" y1="52" x2="68" y2="55"/>
              <line x1="48" y1="58" x2="67" y2="58"/>
              <line x1="50" y1="64" x2="68" y2="61"/>
              <line x1="126" y1="52" x2="108" y2="55"/>
              <line x1="128" y1="58" x2="109" y2="58"/>
              <line x1="126" y1="64" x2="108" y2="61"/>
            </g>

            {/* Руки в костюме */}
            <ellipse cx="42" cy="105" rx="10" ry="18" fill="url(#suitGrad)" stroke="#D0D8E0" strokeWidth="1"/>
            <ellipse cx="134" cy="105" rx="10" ry="18" fill="url(#suitGrad)" stroke="#D0D8E0" strokeWidth="1"/>
            
            {/* Лапки */}
            <circle cx="38" cy="122" r="9" fill="url(#catBodyGrad)"/>
            <circle cx="138" cy="122" r="9" fill="url(#catBodyGrad)"/>
            {/* Пальчики на лапках */}
            <circle cx="33" cy="120" r="3" fill="url(#catDarkGrad)"/>
            <circle cx="38" cy="117" r="3" fill="url(#catDarkGrad)"/>
            <circle cx="43" cy="120" r="3" fill="url(#catDarkGrad)"/>

            {/* Ноутбук */}
            <g transform="rotate(-20, 55, 135)">
              {/* Крышка ноутбука */}
              <rect x="15" y="100" width="50" height="35" rx="3" fill="url(#laptopGrad)"/>
              {/* Экран */}
              <rect x="19" y="104" width="42" height="27" rx="2" fill="#1890ff"/>
              {/* Контент на экране */}
              <rect x="23" y="108" width="18" height="2" rx="1" fill="white" opacity="0.8"/>
              <rect x="23" y="113" width="28" height="2" rx="1" fill="white" opacity="0.6"/>
              <rect x="23" y="118" width="24" height="2" rx="1" fill="white" opacity="0.7"/>
              <rect x="23" y="123" width="14" height="2" rx="1" fill="white" opacity="0.5"/>
              
              {/* База ноутбука */}
              <path d="M10,135 L65,135 L70,148 L5,148 Z" fill="url(#laptopGrad)"/>
              {/* Клавиатура */}
              <rect x="15" y="138" width="45" height="6" rx="1" fill="#1A202C"/>
            </g>

            {/* Значок на воротнике */}
            <circle cx="88" cy="78" r="5" fill="#1890ff"/>
            <text x="88" y="81" textAnchor="middle" fill="white" fontSize="6" fontWeight="bold">W</text>
          </g>
        </svg>
      </motion.div>
    </motion.div>
  );
}
