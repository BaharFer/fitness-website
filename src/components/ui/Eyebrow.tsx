import type { ReactNode } from 'react';
import { cn } from '../../utils/cn';

interface EyebrowProps {
  children: ReactNode;
  className?: string;
}

/**
 * Small uppercase label with a leading rule mark, used above section
 * headings to signal "you are entering a new topic" the way an editorial
 * kicker does above a headline.
 */
export function Eyebrow({ children, className }: EyebrowProps) {
  return (
    <div className={cn('flex items-center gap-2.5 text-xs font-semibold tracking-[0.18em] uppercase text-[var(--color-accent-lime)]', className)}>
      <span className="h-px w-6 bg-[var(--color-accent-lime)]" aria-hidden="true" />
      {children}
    </div>
  );
}
