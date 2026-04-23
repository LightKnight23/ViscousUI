import React from 'react';
import { motion } from 'motion/react';
import { cn } from '@/src/lib/utils';

interface ButtonProps {
  variant?: 'primary' | 'secondary';
  children?: React.ReactNode;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  [key: string]: any;
}

export const Button = ({ variant = 'primary', className, children, ...props }: ButtonProps) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
      className={cn(
        'group relative flex items-center justify-center gap-2 px-10 py-5 font-bold transition-all duration-500 ease-[cubic-bezier(0.2,0.8,0.2,1)]',
        variant === 'primary' 
          ? 'bg-accent text-on-accent rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.1)] hover:opacity-90 hover:rounded-xl' 
          : 'bg-surface-container-high text-on-surface rounded-full hover:bg-surface-container border border-transparent hover:border-border',
        className
      )}
      {...props}
    >
      {children}
    </motion.button>
  );
};
