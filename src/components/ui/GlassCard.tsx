import type { ReactNode, HTMLAttributes } from 'react';
import { cn } from '../../utils/cn';

interface GlassCardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
}

export function GlassCard({ children, className, ...rest }: GlassCardProps) {
  return (
    <div
      className={cn(
        'glass-card rounded-2xl p-5 shadow-[0_8px_40px_rgba(0,0,0,0.35)]',
        className
      )}
      {...rest}
    >
      {children}
    </div>
  );
}
