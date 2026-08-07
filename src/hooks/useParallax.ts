import { useEffect, useRef, useState } from 'react';

interface ParallaxValue {
  x: number;
  y: number;
}

/**
 * Tracks pointer position relative to a container's center and returns a
 * normalized -1..1 offset, used for subtle mouse-parallax depth effects.
 * Disabled automatically for touch-only devices and reduced-motion users.
 */
export function useParallax<T extends HTMLElement = HTMLDivElement>(strength = 1) {
  const ref = useRef<T | null>(null);
  const [offset, setOffset] = useState<ParallaxValue>({ x: 0, y: 0 });

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isCoarsePointer = window.matchMedia('(pointer: coarse)').matches;
    if (prefersReducedMotion || isCoarsePointer) return;

    let frame: number | null = null;

    const handlePointerMove = (event: PointerEvent) => {
      if (frame) cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const rect = node.getBoundingClientRect();
        const relativeX = (event.clientX - rect.left) / rect.width - 0.5;
        const relativeY = (event.clientY - rect.top) / rect.height - 0.5;
        setOffset({ x: relativeX * 2 * strength, y: relativeY * 2 * strength });
      });
    };

    const handlePointerLeave = () => {
      setOffset({ x: 0, y: 0 });
    };

    node.addEventListener('pointermove', handlePointerMove);
    node.addEventListener('pointerleave', handlePointerLeave);

    return () => {
      node.removeEventListener('pointermove', handlePointerMove);
      node.removeEventListener('pointerleave', handlePointerLeave);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [strength]);

  return { ref, offset };
}
