import React from 'react';
import { motion } from 'motion/react';
import { cn } from '@/src/lib/utils';

interface SliderProps {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
  className?: string;
}

export const Slider = ({ value, onChange, min = 0, max = 100, className }: SliderProps) => {
  const percentage = ((value - min) / (max - min)) * 100;

  return (
    <div className={cn('relative w-full h-8 flex items-center group', className)}>
      <div className="absolute w-full h-1.5 bg-surface-container-high rounded-full overflow-hidden">
        <motion.div 
          className="h-full bg-accent" 
          animate={{ width: `${percentage}%` }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        />
      </div>
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="absolute w-full h-full opacity-0 cursor-pointer z-10"
      />
      <motion.div
        animate={{ left: `${percentage}%` }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className="absolute w-5 h-5 bg-white border-2 border-accent rounded-full -ml-2.5 shadow-md pointer-events-none group-hover:scale-125 transition-transform"
      />
    </div>
  );
};
