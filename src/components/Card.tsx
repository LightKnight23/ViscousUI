import React from 'react';
import { motion, type HTMLMotionProps } from 'motion/react';
import { cn } from '@/src/lib/utils';

interface CardProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode;
  hoverEffect?: boolean;
}

export const Card = ({ children, className, hoverEffect = true, ...props }: CardProps) => {
  return (
    <motion.div
      whileHover={hoverEffect ? { y: -10, scale: 1.01 } : {}}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className={cn(
        'bg-surface-container rounded-[2rem] p-10 shadow-[0_40px_80px_rgba(0,0,0,0.02)] dark:shadow-[0_40px_80px_rgba(0,0,0,0.3)] border border-border flex flex-col gap-6 transition-colors duration-500',
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
};
