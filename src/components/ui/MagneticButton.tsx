import { useRef, useState, type ReactNode } from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';
import { cn } from '../../utils/cn';

interface MagneticButtonProps extends Omit<HTMLMotionProps<'button'>, 'ref'> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  className?: string;
}

/**
 * A button that subtly follows the cursor within its bounds ("magnetic"
 * hover), used for primary calls to action. Falls back to a static
 * hover state on touch devices and when reduced motion is requested.
 */
export function MagneticButton({
  children,
  variant = 'primary',
  className,
  ...rest
}: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement | null>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handlePointerMove = (event: React.PointerEvent<HTMLButtonElement>) => {
    if (event.pointerType === 'touch') return;
    const node = ref.current;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    const x = (event.clientX - rect.left - rect.width / 2) * 0.35;
    const y = (event.clientY - rect.top - rect.height / 2) * 0.35;
    setPos({ x, y });
  };

  const handlePointerLeave = () => setPos({ x: 0, y: 0 });

  const baseStyles =
    'relative inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold tracking-tight transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-4';

  const variantStyles: Record<string, string> = {
    primary: 'bg-[var(--color-accent-lime)] text-[#0d0f14] hover:bg-white',
    secondary: 'border border-white/15 text-white hover:border-white/40 bg-white/[0.03]',
    ghost: 'text-white/80 hover:text-white',
  };

  return (
    <motion.button
      ref={ref}
      className={cn(baseStyles, variantStyles[variant], className)}
      {...rest}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: 'spring', stiffness: 150, damping: 12, mass: 0.3 }}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      {children}
    </motion.button>
  );
}
