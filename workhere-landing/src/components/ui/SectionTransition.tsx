'use client';

interface SectionTransitionProps {
  from?: 'light' | 'dark';
  to?: 'light' | 'dark';
  height?: number;
}

export default function SectionTransition({ 
  from = 'light', 
  to = 'dark',
  height = 150 
}: SectionTransitionProps) {
  const getGradient = () => {
    if (from === 'light' && to === 'dark') {
      return 'linear-gradient(180deg, #ffffff 0%, #f0f4f8 15%, #d0dce8 35%, #6080a0 55%, #2a3a4a 75%, #0a1628 100%)';
    }
    if (from === 'dark' && to === 'light') {
      return 'linear-gradient(180deg, #0a1628 0%, #2a3a4a 25%, #6080a0 45%, #d0dce8 65%, #f0f4f8 85%, #ffffff 100%)';
    }
    if (from === 'light' && to === 'light') {
      return 'linear-gradient(180deg, #ffffff 0%, #f8fafc 50%, #ffffff 100%)';
    }
    // dark to dark
    return 'linear-gradient(180deg, #0a1628 0%, #0d1a2d 30%, #101e32 50%, #0d1a2d 70%, #0a1628 100%)';
  };

  return (
    <div 
      className="relative w-full"
      style={{ 
        height,
        background: getGradient(),
      }}
    />
  );
}
