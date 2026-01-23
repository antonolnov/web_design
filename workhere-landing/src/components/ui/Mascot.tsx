'use client';

import { motion } from 'framer-motion';

interface MascotProps {
  size?: number;
  className?: string;
  animate?: boolean;
}

export default function Mascot({ size = 200, className = '', animate = true }: MascotProps) {
  return (
    <motion.div
      className={`relative ${className}`}
      style={{ width: size, height: size }}
      initial={animate ? { scale: 0.8, opacity: 0 } : undefined}
      animate={animate ? { scale: 1, opacity: 1 } : undefined}
      transition={{ type: 'spring', stiffness: 100, damping: 15 }}
    >
      <svg viewBox="0 0 200 200" className="w-full h-full">
        <defs>
          {/* Gradients */}
          <linearGradient id="catBodyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#5B9BD5" />
            <stop offset="100%" stopColor="#3B7BBF" />
          </linearGradient>
          <linearGradient id="helmetGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#E8F4FF" />
            <stop offset="50%" stopColor="#B8D4F0" />
            <stop offset="100%" stopColor="#A0C4E8" />
          </linearGradient>
          <linearGradient id="suitGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F5F5F5" />
            <stop offset="100%" stopColor="#E0E0E0" />
          </linearGradient>
          <linearGradient id="laptopGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2D3748" />
            <stop offset="100%" stopColor="#1A202C" />
          </linearGradient>
          <linearGradient id="tailGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#5B9BD5" />
            <stop offset="100%" stopColor="#87CEEB" />
          </linearGradient>
          
          {/* Shadow filter */}
          <filter id="mascotShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="2" dy="4" stdDeviation="4" floodColor="#000" floodOpacity="0.15"/>
          </filter>
        </defs>

        <g filter="url(#mascotShadow)">
          {/* Tail - animated */}
          <motion.path
            d="M155,140 Q180,130 185,110 Q190,90 175,85 Q160,80 155,95 Q150,110 155,130"
            fill="url(#tailGrad)"
            animate={animate ? {
              d: [
                "M155,140 Q180,130 185,110 Q190,90 175,85 Q160,80 155,95 Q150,110 155,130",
                "M155,140 Q185,125 190,105 Q195,85 180,82 Q165,78 158,92 Q152,108 155,130",
                "M155,140 Q180,130 185,110 Q190,90 175,85 Q160,80 155,95 Q150,110 155,130",
              ]
            } : undefined}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
          
          {/* Tail highlights */}
          <motion.path
            d="M165,100 Q175,95 180,105"
            stroke="#87CEEB"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
            animate={animate ? { opacity: [0.5, 1, 0.5] } : undefined}
            transition={{ duration: 1.5, repeat: Infinity }}
          />

          {/* Body suit */}
          <ellipse cx="100" cy="130" rx="45" ry="50" fill="url(#suitGrad)" />
          
          {/* Suit stripes */}
          <path d="M70,110 Q100,105 130,110" stroke="#D0D0D0" strokeWidth="2" fill="none" />
          <path d="M75,125 Q100,120 125,125" stroke="#D0D0D0" strokeWidth="2" fill="none" />
          <path d="M80,140 Q100,135 120,140" stroke="#D0D0D0" strokeWidth="2" fill="none" />
          
          {/* Suit ring around neck */}
          <ellipse cx="100" cy="85" rx="30" ry="8" fill="#4A5568" />

          {/* Helmet glass */}
          <circle cx="100" cy="60" r="42" fill="url(#helmetGrad)" opacity="0.6" />
          <ellipse cx="85" cy="48" rx="15" ry="10" fill="white" opacity="0.3" />

          {/* Cat head */}
          <ellipse cx="100" cy="62" rx="32" ry="28" fill="url(#catBodyGrad)" />
          
          {/* Ears */}
          <path d="M72,42 L65,20 L82,35 Z" fill="url(#catBodyGrad)" />
          <path d="M128,42 L135,20 L118,35 Z" fill="url(#catBodyGrad)" />
          <path d="M74,40 L70,25 L80,36 Z" fill="#FF9999" opacity="0.6" />
          <path d="M126,40 L130,25 L120,36 Z" fill="#FF9999" opacity="0.6" />

          {/* Eyes - animated blink */}
          <motion.g
            animate={animate ? { scaleY: [1, 0.1, 1] } : undefined}
            transition={{ duration: 0.2, repeat: Infinity, repeatDelay: 4 }}
            style={{ transformOrigin: '100px 58px' }}
          >
            <ellipse cx="85" cy="58" rx="8" ry="9" fill="white" />
            <ellipse cx="115" cy="58" rx="8" ry="9" fill="white" />
            <circle cx="87" cy="58" r="5" fill="#2D3748" />
            <circle cx="117" cy="58" r="5" fill="#2D3748" />
            <circle cx="88" cy="56" r="2" fill="white" />
            <circle cx="118" cy="56" r="2" fill="white" />
          </motion.g>

          {/* Nose */}
          <ellipse cx="100" cy="68" rx="3" ry="2" fill="#FF9999" />
          
          {/* Mouth - animated */}
          <motion.path
            d="M95,73 Q100,77 105,73"
            stroke="#3B7BBF"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            animate={animate ? { d: ["M95,73 Q100,77 105,73", "M95,74 Q100,78 105,74", "M95,73 Q100,77 105,73"] } : undefined}
            transition={{ duration: 2, repeat: Infinity }}
          />

          {/* Whiskers */}
          <g stroke="#3B7BBF" strokeWidth="1" opacity="0.6">
            <line x1="60" y1="62" x2="75" y2="65" />
            <line x1="58" y1="68" x2="74" y2="68" />
            <line x1="60" y1="74" x2="75" y2="71" />
            <line x1="140" y1="62" x2="125" y2="65" />
            <line x1="142" y1="68" x2="126" y2="68" />
            <line x1="140" y1="74" x2="125" y2="71" />
          </g>

          {/* Arms */}
          <ellipse cx="55" cy="120" rx="12" ry="18" fill="url(#suitGrad)" />
          <ellipse cx="145" cy="120" rx="12" ry="18" fill="url(#suitGrad)" />
          
          {/* Hands/paws */}
          <circle cx="50" cy="135" r="10" fill="url(#catBodyGrad)" />
          <circle cx="150" cy="135" r="10" fill="url(#catBodyGrad)" />

          {/* Laptop */}
          <motion.g
            animate={animate ? { rotate: [-2, 2, -2] } : undefined}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            style={{ transformOrigin: '80px 150px' }}
          >
            {/* Laptop screen */}
            <rect x="35" y="115" width="50" height="35" rx="3" fill="url(#laptopGrad)" />
            <rect x="38" y="118" width="44" height="29" rx="2" fill="#1890ff" opacity="0.8" />
            
            {/* Screen content - code lines */}
            <motion.g
              animate={animate ? { opacity: [0.5, 1, 0.5] } : undefined}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <rect x="41" y="122" width="20" height="2" rx="1" fill="#fff" opacity="0.8" />
              <rect x="41" y="127" width="30" height="2" rx="1" fill="#fff" opacity="0.6" />
              <rect x="41" y="132" width="25" height="2" rx="1" fill="#fff" opacity="0.7" />
              <rect x="41" y="137" width="15" height="2" rx="1" fill="#fff" opacity="0.5" />
            </motion.g>
            
            {/* Laptop base */}
            <path d="M30,150 L90,150 L95,160 L25,160 Z" fill="url(#laptopGrad)" />
          </motion.g>

          {/* Collar/badge */}
          <circle cx="100" cy="92" r="6" fill="#1890ff" />
          <text x="100" y="95" textAnchor="middle" fill="white" fontSize="6" fontWeight="bold">W</text>
        </g>
      </svg>
    </motion.div>
  );
}
