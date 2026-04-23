import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, type LucideIcon } from 'lucide-react';
import { cn } from '@/src/lib/utils';

interface DropdownOption {
  label: string;
  value: string;
  icon?: LucideIcon;
}

interface DropdownProps {
  options: DropdownOption[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}

export const Dropdown = ({ options, value, onChange, placeholder = 'Select...', className }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectedOption = options.find(o => o.value === value);

  return (
    <div className={cn('relative w-full', className)}>
      <motion.button
        whileTap={{ scale: 0.98 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between bg-surface-container px-6 py-4 rounded-full border border-border hover:bg-surface-container-high transition-all text-left"
      >
        <span className={cn('font-medium', selectedOption ? 'text-on-surface' : 'text-on-surface-variant')}>
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <ChevronDown size={18} className={cn('transition-transform duration-300 text-on-surface-variant', isOpen && 'rotate-180')} />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <>
            <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 4, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-0 right-0 z-50 mt-2 bg-surface border border-border rounded-3xl shadow-2xl overflow-hidden p-2 backdrop-blur-xl"
            >
              {options.map((option) => (
                <button
                  key={option.value}
                  onClick={() => {
                    onChange(option.value);
                    setIsOpen(false);
                  }}
                  className={cn(
                    'w-full flex items-center gap-3 px-4 py-3 rounded-2xl transition-colors text-left',
                    value === option.value 
                      ? 'bg-accent text-on-accent' 
                      : 'text-on-surface hover:bg-surface-container-high'
                  )}
                >
                  {option.icon ? <option.icon size={16} /> : null}
                  <span className="font-medium text-sm">{option.label}</span>
                </button>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};
