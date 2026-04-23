import React from 'react';
import { motion } from 'motion/react';
import { cn } from '@/src/lib/utils';

interface ToggleProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  className?: string;
}

export const Toggle = ({ checked, onChange, className }: ToggleProps) => {
  return (
    <label className={cn('relative inline-flex items-center cursor-pointer', className)}>
      <input 
        type="checkbox" 
        className="sr-only peer" 
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
      />
      <motion.div 
        className={cn(
          'w-16 h-8 bg-surface-container-high rounded-full border border-border transition-colors duration-500 ease-[0.2,0.8,0.2,1]',
          checked && 'bg-accent border-accent'
        )}
      >
        <motion.div
          animate={{ x: checked ? '32px' : '4px' }}
          transition={{ type: 'spring', stiffness: 500, damping: 30 }}
          className="absolute top-1 w-6 h-6 bg-on-accent rounded-full shadow-sm"
        />
      </motion.div>
    </label>
  );
};
