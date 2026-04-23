import React from 'react';
import { motion } from 'motion/react';
import { cn } from '@/src/lib/utils';

export const Input = ({ className, ...props }: React.InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <div className="group relative w-full">
      <motion.input
        whileFocus={{ boxShadow: 'inset 0 4px 20px rgba(0,0,0,0.05), 0 0 0 4px rgba(0,0,0,0.05)' }}
        transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
        className={cn(
          'w-full bg-surface-container-high border-none rounded-full px-8 py-5 text-on-surface focus:outline-none placeholder-on-surface-variant/50 transition-all duration-500',
          className
        )}
        {...props}
      />
    </div>
  );
};
