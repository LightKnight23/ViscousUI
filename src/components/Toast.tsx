import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle, Info, AlertTriangle } from 'lucide-react';
import { cn } from '@/src/lib/utils';

export type ToastType = 'success' | 'info' | 'warning' | 'error';

interface ToastProps {
  message: string;
  type?: ToastType;
  onClose: () => void;
  [key: string]: any;
}

export const Toast = ({ message, type = 'info', onClose }: ToastProps) => {
  const icons = {
    success: <CheckCircle size={18} className="text-emerald-500" />,
    info: <Info size={18} className="text-blue-500" />,
    warning: <AlertTriangle size={18} className="text-amber-500" />,
    error: <X size={18} className="text-red-500" />,
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20, scale: 0.9 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      exit={{ opacity: 0, x: 20, scale: 0.9 }}
      className="bg-surface border border-border shadow-2xl rounded-2xl p-4 flex items-center gap-4 min-w-[300px] backdrop-blur-xl"
    >
      <div className="flex-shrink-0">{icons[type]}</div>
      <div className="flex-1 text-sm font-medium text-on-surface">{message}</div>
      <button onClick={onClose} className="p-1 hover:bg-surface-container rounded-full transition-colors">
        <X size={16} className="text-on-surface-variant" />
      </button>
    </motion.div>
  );
};
