'use client';

import { motion } from 'framer-motion';

interface MascotProps {
  size?: number;
  className?: string;
  animate?: boolean;
  variant?: 'float' | 'bounce' | 'spin' | 'wave' | 'crazy';
}

export default function Mascot({ 
  size = 200, 
  className = '', 
  animate = true,
  variant = 'float'
}: MascotProps) {
  
  const animations = {
    float: {
      y: [-8, 8, -8],
      rotate: [-2, 2, -2],
    },
    bounce: {
      y: [-15, 0, -15],
      scale: [1, 1.03, 1],
    },
    spin: {
      rotate: [0, 360],
    },
    wave: {
      rotate: [-8, 8, -8],
      x: [-3, 3, -3],
    },
    crazy: {
      y: [-10, 10, -10],
      rotate: [-5, 5, -5],
      scale: [1, 1.05, 1],
    },
  };

  const transitions: Record<string, { duration: number; repeat: number; ease: "easeInOut" | "linear" }> = {
    float: { duration: 4, repeat: Infinity, ease: "easeInOut" },
    bounce: { duration: 2.5, repeat: Infinity, ease: "easeInOut" },
    spin: { duration: 10, repeat: Infinity, ease: "linear" },
    wave: { duration: 3, repeat: Infinity, ease: "easeInOut" },
    crazy: { duration: 3, repeat: Infinity, ease: "easeInOut" },
  };

  return (
    <motion.div
      className={`relative ${className}`}
      style={{ width: size, height: size }}
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 100, damping: 15 }}
    >
      <motion.div
        animate={animate ? animations[variant] : undefined}
        transition={transitions[variant]}
        className="w-full h-full"
      >
        <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-xl">
          <defs>
            <linearGradient id="catBody" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#6BA5D7"/>
              <stop offset="100%" stopColor="#4A90C7"/>
            </linearGradient>
            <linearGradient id="helmet" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#E8F4FF" stopOpacity="0.9"/>
              <stop offset="100%" stopColor="#B8D4F0" stopOpacity="0.7"/>
            </linearGradient>
            <linearGradient id="suit" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F8F8F8"/>
              <stop offset="100%" stopColor="#E0E0E0"/>
            </linearGradient>
            <linearGradient id="tail" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#6BA5D7"/>
              <stop offset="50%" stopColor="#87CEEB"/>
              <stop offset="100%" stopColor="#ADD8E6"/>
            </linearGradient>
            <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="2" dy="4" stdDeviation="6" floodColor="#000" floodOpacity="0.15"/>
            </filter>
          </defs>

          {/* Outer white sticker border */}
          <ellipse cx="100" cy="105" rx="92" ry="95" fill="white" filter="url(#shadow)"/>
          
          <g transform="translate(10, 10)">
            {/* Tail */}
            <path d="M145,130 Q170,120 175,95 Q165,70 150,80 Q135,90 140,110 Z" fill="url(#tail)"/>
            <path d="M150,105 Q160,100 165,90" stroke="#ADD8E6" strokeWidth="4" fill="none" strokeLinecap="round"/>
            
            {/* Body suit */}
            <ellipse cx="90" cy="120" rx="45" ry="50" fill="url(#suit)"/>
            
            {/* Suit stripes */}
            <path d="M55,100 Q90,95 125,100" stroke="#D0D0D0" strokeWidth="2.5" fill="none"/>
            <path d="M58,115 Q90,110 122,115" stroke="#D0D0D0" strokeWidth="2.5" fill="none"/>
            <path d="M62,130 Q90,125 118,130" stroke="#D0D0D0" strokeWidth="2.5" fill="none"/>
            <path d="M68,145 Q90,145 112,145" stroke="#D0D0D0" strokeWidth="2" fill="none"/>
            
            {/* Neck ring */}
            <ellipse cx="90" cy="75" rx="30" ry="8" fill="#405060"/>

            {/* Helmet glass */}
            <circle cx="90" cy="50" r="42" fill="url(#helmet)"/>
            <ellipse cx="75" cy="35" rx="18" ry="12" fill="white" opacity="0.4"/>

            {/* Cat head */}
            <ellipse cx="90" cy="52" rx="30" ry="26" fill="url(#catBody)"/>
            
            {/* Ears */}
            <path d="M62,35 L53,10 L72,28 Z" fill="url(#catBody)"/>
            <path d="M118,35 L127,10 L108,28 Z" fill="url(#catBody)"/>
            <path d="M64,33 L58,15 L70,29 Z" fill="#FFA0A0" opacity="0.5"/>
            <path d="M116,33 L122,15 L110,29 Z" fill="#FFA0A0" opacity="0.5"/>

            {/* Eyes */}
            <ellipse cx="75" cy="48" rx="9" ry="11" fill="white"/>
            <ellipse cx="105" cy="48" rx="9" ry="11" fill="white"/>
            <circle cx="77" cy="49" r="6" fill="#2D3748"/>
            <circle cx="107" cy="49" r="6" fill="#2D3748"/>
            <circle cx="79" cy="47" r="2.5" fill="white"/>
            <circle cx="109" cy="47" r="2.5" fill="white"/>

            {/* Nose */}
            <ellipse cx="90" cy="58" rx="3" ry="2" fill="#FF9F9F"/>
            
            {/* Mouth */}
            <path d="M84,63 Q90,68 96,63" stroke="#4A90C7" strokeWidth="2" fill="none" strokeLinecap="round"/>

            {/* Whiskers */}
            <g stroke="#4A90C7" strokeWidth="1.5" opacity="0.5">
              <line x1="50" y1="52" x2="65" y2="55"/>
              <line x1="48" y1="58" x2="64" y2="58"/>
              <line x1="50" y1="64" x2="65" y2="61"/>
              <line x1="130" y1="52" x2="115" y2="55"/>
              <line x1="132" y1="58" x2="116" y2="58"/>
              <line x1="130" y1="64" x2="115" y2="61"/>
            </g>

            {/* Arms */}
            <ellipse cx="45" cy="110" rx="12" ry="20" fill="url(#suit)"/>
            <ellipse cx="135" cy="110" rx="12" ry="20" fill="url(#suit)"/>
            
            {/* Paws */}
            <circle cx="40" cy="128" r="10" fill="url(#catBody)"/>
            <circle cx="140" cy="128" r="10" fill="url(#catBody)"/>

            {/* Laptop */}
            <g transform="rotate(-15, 60, 140)">
              {/* Screen */}
              <rect x="20" y="105" width="55" height="40" rx="4" fill="#2D3748"/>
              <rect x="24" y="109" width="47" height="32" rx="2" fill="#1890ff"/>
              
              {/* Screen content */}
              <rect x="28" y="114" width="22" height="3" rx="1" fill="white" opacity="0.8"/>
              <rect x="28" y="120" width="32" height="3" rx="1" fill="white" opacity="0.6"/>
              <rect x="28" y="126" width="27" height="3" rx="1" fill="white" opacity="0.7"/>
              <rect x="28" y="132" width="18" height="3" rx="1" fill="white" opacity="0.5"/>
              
              {/* Base */}
              <path d="M15,145 L80,145 L85,158 L10,158 Z" fill="#2D3748"/>
            </g>

            {/* Collar badge */}
            <circle cx="90" cy="82" r="6" fill="#1890ff"/>
            <text x="90" y="85" textAnchor="middle" fill="white" fontSize="7" fontWeight="bold">W</text>
          </g>
        </svg>
      </motion.div>
    </motion.div>
  );
}
