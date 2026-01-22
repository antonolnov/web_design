/**
 * WorkHere Hero Background Component
 * Animated silk/satin flowing background
 * 
 * Usage:
 *   <HeroBackground intensity={0.85} speed={1}>
 *     <YourContent />
 *   </HeroBackground>
 * 
 * Props:
 *   - intensity: 0.0 - 1.0 (effect strength)
 *   - speed: 0.5 - 1.5 (animation speed)
 *   - blueColor: Brand blue (default #1890ff)
 *   - accentColor: Center accent (default #ff3b8d)
 *   - className: Additional classes for container
 */

import React from 'react';

const HeroBackground = ({
  children,
  intensity = 0.85,
  speed = 1,
  blueColor = '#1890ff',
  accentColor = '#ff3b8d',
  className = '',
}) => {
  const cssVars = {
    '--wh-blue': blueColor,
    '--wh-blue-light': adjustColor(blueColor, 30),
    '--center-accent': accentColor,
    '--center-accent-soft': adjustColor(accentColor, 40),
    '--intensity': intensity,
    '--speed': speed,
    '--cycle-1': `${28 / speed}s`,
    '--cycle-2': `${35 / speed}s`,
    '--cycle-3': `${22 / speed}s`,
    '--cycle-4': `${40 / speed}s`,
  };

  return (
    <section className={`wh-hero ${className}`} style={cssVars}>
      <div className="wh-hero__bg">
        <div className="wh-hero__base" />
        <div className="wh-hero__center-glow" />
        <div className="wh-hero__edge-glows" />
        <div className="wh-hero__blobs">
          <div className="wh-hero__blob wh-hero__blob--1" />
          <div className="wh-hero__blob wh-hero__blob--2" />
          <div className="wh-hero__blob wh-hero__blob--3" />
          <div className="wh-hero__blob wh-hero__blob--4" />
        </div>
        <div className="wh-hero__grain" />
      </div>
      <div className="wh-hero__content">
        {children}
      </div>
      <style>{styles}</style>
    </section>
  );
};

// Helper: lighten color
function adjustColor(hex, percent) {
  const num = parseInt(hex.replace('#', ''), 16);
  const r = Math.min(255, (num >> 16) + percent);
  const g = Math.min(255, ((num >> 8) & 0x00FF) + percent);
  const b = Math.min(255, (num & 0x0000FF) + percent);
  return `#${(1 << 24 | r << 16 | g << 8 | b).toString(16).slice(1)}`;
}

const styles = `
  .wh-hero {
    position: relative;
    width: 100%;
    min-height: 100vh;
    overflow: hidden;
    background: #f8f9fc;
  }
  
  .wh-hero__bg {
    position: absolute;
    inset: 0;
    z-index: 0;
    overflow: hidden;
  }
  
  .wh-hero__base {
    position: absolute;
    inset: 0;
    background: 
      radial-gradient(ellipse 120% 80% at 50% 50%, #fff5f8 0%, transparent 70%),
      linear-gradient(180deg, #ffffff 0%, #f8f9fc 50%, #f0f4f8 100%);
  }
  
  .wh-hero__center-glow {
    position: absolute;
    inset: 0;
    background: radial-gradient(ellipse 65% 55% at 50% 45%, 
      rgba(255, 59, 141, calc(0.3 * var(--intensity))) 0%,
      rgba(255, 107, 171, calc(0.15 * var(--intensity))) 35%,
      transparent 70%
    );
  }
  
  .wh-hero__edge-glows {
    position: absolute;
    inset: 0;
  }
  
  .wh-hero__edge-glows::before,
  .wh-hero__edge-glows::after {
    content: '';
    position: absolute;
    border-radius: 50%;
    filter: blur(80px);
  }
  
  .wh-hero__edge-glows::before {
    width: 50%;
    height: 60%;
    top: -20%;
    left: -10%;
    background: radial-gradient(ellipse at center, var(--wh-blue) 0%, transparent 70%);
    opacity: calc(0.2 * var(--intensity));
  }
  
  .wh-hero__edge-glows::after {
    width: 55%;
    height: 60%;
    bottom: -25%;
    right: -15%;
    background: radial-gradient(ellipse at center, var(--wh-blue-light) 0%, transparent 70%);
    opacity: calc(0.18 * var(--intensity));
  }
  
  .wh-hero__blobs {
    position: absolute;
    inset: -15%;
    filter: blur(55px);
  }
  
  .wh-hero__blob {
    position: absolute;
    border-radius: 50%;
    will-change: transform;
  }
  
  .wh-hero__blob--1 {
    width: 40%;
    height: 45%;
    top: 22%;
    left: 20%;
    background: radial-gradient(ellipse at 40% 40%, 
      rgba(255, 59, 141, calc(0.35 * var(--intensity))) 0%,
      rgba(255, 107, 171, calc(0.15 * var(--intensity))) 50%,
      transparent 70%
    );
    animation: whDrift1 var(--cycle-1) ease-in-out infinite;
  }
  
  .wh-hero__blob--2 {
    width: 35%;
    height: 40%;
    top: 28%;
    right: 18%;
    background: radial-gradient(ellipse at 60% 50%, 
      rgba(255, 107, 171, calc(0.28 * var(--intensity))) 0%,
      transparent 60%
    );
    animation: whDrift2 var(--cycle-2) ease-in-out infinite;
  }
  
  .wh-hero__blob--3 {
    width: 30%;
    height: 35%;
    top: 0%;
    left: 8%;
    background: radial-gradient(ellipse at 30% 60%, 
      rgba(24, 144, 255, calc(0.2 * var(--intensity))) 0%,
      transparent 60%
    );
    animation: whDrift3 var(--cycle-3) ease-in-out infinite;
  }
  
  .wh-hero__blob--4 {
    width: 38%;
    height: 45%;
    bottom: 8%;
    right: 5%;
    background: radial-gradient(ellipse at 70% 40%, 
      rgba(64, 169, 255, calc(0.18 * var(--intensity))) 0%,
      transparent 55%
    );
    animation: whDrift4 var(--cycle-4) ease-in-out infinite;
  }
  
  .wh-hero__grain {
    position: absolute;
    inset: 0;
    opacity: 0.035;
    pointer-events: none;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
    background-size: 200px 200px;
  }
  
  .wh-hero__content {
    position: relative;
    z-index: 10;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    padding: 2rem;
  }
  
  @keyframes whDrift1 {
    0%, 100% { transform: translate(0, 0) scale(1) rotate(0deg); }
    25% { transform: translate(3%, -2%) scale(1.02) rotate(1deg); }
    50% { transform: translate(-2%, 3%) scale(0.98) rotate(-1deg); }
    75% { transform: translate(-3%, -1%) scale(1.01) rotate(0.5deg); }
  }
  
  @keyframes whDrift2 {
    0%, 100% { transform: translate(0, 0) scale(1); }
    33% { transform: translate(-4%, 2%) scale(1.03); }
    66% { transform: translate(2%, -3%) scale(0.97); }
  }
  
  @keyframes whDrift3 {
    0%, 100% { transform: translate(0, 0) rotate(0deg); }
    50% { transform: translate(5%, 4%) rotate(2deg); }
  }
  
  @keyframes whDrift4 {
    0%, 100% { transform: translate(0, 0) scale(1); }
    40% { transform: translate(-3%, -2%) scale(1.04); }
    80% { transform: translate(2%, 3%) scale(0.96); }
  }
  
  @media (prefers-reduced-motion: reduce) {
    .wh-hero__blob { animation: none !important; }
  }
`;

export default HeroBackground;
