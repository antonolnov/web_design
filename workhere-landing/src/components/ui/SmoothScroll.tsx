'use client';

import { useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis';

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    lenisRef.current = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenisRef.current?.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Handle anchor links
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a[href^="#"]');
      if (anchor) {
        const href = anchor.getAttribute('href');
        if (href && href !== '#') {
          e.preventDefault();
          const element = document.querySelector(href);
          if (element) {
            lenisRef.current?.scrollTo(element as HTMLElement, { offset: -80 });
          }
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);

    return () => {
      lenisRef.current?.destroy();
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  return <>{children}</>;
}
