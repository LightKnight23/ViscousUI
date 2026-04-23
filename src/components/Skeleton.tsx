import React from 'react';
import { motion } from 'motion/react';
import { cn } from '@/src/lib/utils';

export const Skeleton = ({ className }: { className?: string }) => {
  return (
    <motion.div
      animate={{ opacity: [0.3, 0.6, 0.3] }}
      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      className={cn('bg-surface-container-high rounded-xl', className)}
    />
  );
};
