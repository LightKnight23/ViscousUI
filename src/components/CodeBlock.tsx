import React from 'react';
import { cn } from '@/src/lib/utils';

interface CodeBlockProps {
  code: string;
  language?: string;
  className?: string;
}

export const CodeBlock = ({ code, language = 'tsx', className }: CodeBlockProps) => {
  return (
    <div className={cn('relative group bg-neutral-900 rounded-3xl p-8 overflow-hidden', className)}>
      <div className="absolute top-4 right-6 text-[10px] uppercase tracking-widest text-neutral-500 font-bold">
        {language}
      </div>
      <pre className="text-sm font-mono text-neutral-300 overflow-x-auto selection:bg-white selection:text-black">
        <code>{code}</code>
      </pre>
    </div>
  );
};
