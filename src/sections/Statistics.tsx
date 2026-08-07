import { STATS } from '../constants/content';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useCountUp } from '../hooks/useCountUp';
import { motion } from 'framer-motion';
import { staggerContainer, staggerItem } from '../animations/variants';

function StatCounter({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const { ref, isInView } = useScrollReveal({ threshold: 0.4 });
  const count = useCountUp(value, isInView);

  return (
    <motion.div ref={ref} variants={staggerItem} className="text-center sm:text-left">
      <p className="font-[var(--font-display)] text-4xl font-bold text-[var(--color-accent-lime)] sm:text-5xl">
        {count.toLocaleString()}
        {suffix}
      </p>
      <p className="mt-2 text-sm text-[var(--color-text-muted)]">{label}</p>
    </motion.div>
  );
}

export function Statistics() {
  const { ref, isInView } = useScrollReveal();

  return (
    <section className="border-y border-white/10 bg-[var(--color-surface)] py-16 sm:py-20">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        variants={staggerContainer(0.1)}
        className="container-pulse grid grid-cols-2 gap-8 sm:grid-cols-4 sm:gap-6"
      >
        {STATS.map((stat) => (
          <StatCounter key={stat.id} value={stat.value} suffix={stat.suffix} label={stat.label} />
        ))}
      </motion.div>
    </section>
  );
}
