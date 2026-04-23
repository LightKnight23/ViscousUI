import React from 'react';
import { cn } from '@/src/lib/utils';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
}

export const Badge = ({ children, variant = 'primary', className }: BadgeProps) => {
  const variants = {
    primary: 'bg-accent text-on-accent',
    secondary: 'bg-surface-container-high text-on-surface',
    outline: 'border border-border text-on-surface'
  };

  return (
    <span className={cn('px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all duration-300', variants[variant], className)}>
      {children}
    </span>
  );
};
