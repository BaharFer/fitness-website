import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { fadeUp } from '../../animations/variants';

interface RevealOnScrollProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: 'div' | 'section';
}

/**
 * Wraps children in a fade-up reveal that triggers once the element
 * scrolls into view. Used throughout the page for section entrances.
 */
export function RevealOnScroll({ children, delay = 0, className, as = 'div' }: RevealOnScrollProps) {
  const { ref, isInView } = useScrollReveal();
  const Component = motion[as];

  return (
    <Component
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={fadeUp}
      transition={{ delay }}
    >
      {children}
    </Component>
  );
}
