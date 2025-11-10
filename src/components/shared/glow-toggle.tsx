'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Zap } from 'lucide-react';

type Intensity = 'low' | 'medium' | 'high';

export default function GlowToggle() {
  const [intensity, setIntensity] = useState<Intensity>('medium');
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const savedIntensity = localStorage.getItem('glowIntensity') as Intensity | null;
    if (savedIntensity) {
      setIntensity(savedIntensity);
    }
  }, []);

  useEffect(() => {
    if (isMounted) {
      let spread = '4px';
      if (intensity === 'low') spread = '2px';
      if (intensity === 'high') spread = '8px';
      document.documentElement.style.setProperty('--glow-intensity-spread', spread);
      localStorage.setItem('glowIntensity', intensity);
    }
  }, [intensity, isMounted]);

  const toggleIntensity = () => {
    const intensities: Intensity[] = ['low', 'medium', 'high'];
    const currentIndex = intensities.indexOf(intensity);
    const nextIndex = (currentIndex + 1) % intensities.length;
    setIntensity(intensities[nextIndex]);
  };

  if (!isMounted) {
    return null;
  }

  return (
    <Button variant="ghost" size="icon" onClick={toggleIntensity} aria-label={`Toggle glow intensity, current: ${intensity}`}>
      <Zap className="h-5 w-5" />
      <span className="sr-only">Toggle Glow Intensity</span>
    </Button>
  );
}
