import { motion } from 'framer-motion';
import { PROGRAMS } from '../constants/content';
import { Eyebrow } from '../components/ui/Eyebrow';
import { RevealOnScroll } from '../components/ui/RevealOnScroll';
import { IconArrowRight, IconDumbbell, IconFlame, IconHeartPulse, IconStretch, IconBolt, IconMedal } from '../components/ui/Icons';
import { staggerContainer, staggerItem } from '../animations/variants';
import { useScrollReveal } from '../hooks/useScrollReveal';
import type { Program } from '../types';

const PROGRAM_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  strength: IconDumbbell,
  hiit: IconFlame,
  cardio: IconHeartPulse,
  mobility: IconStretch,
  power: IconBolt,
  athlete: IconMedal,
};

const ACCENT_MAP: Record<Program['accent'], string> = {
  lime: 'var(--color-accent-lime)',
  violet: 'var(--color-accent-violet)',
  teal: 'var(--color-accent-teal)',
};

function ProgramCard({ program }: { program: Program }) {
  const Icon = PROGRAM_ICONS[program.id];
  const accentColor = ACCENT_MAP[program.accent];

  return (
    <motion.article
      variants={staggerItem}
      whileHover="hover"
      initial="rest"
      className="group relative overflow-hidden rounded-3xl border border-white/8 bg-[var(--color-card)]"
    >
      <div className="relative aspect-[4/5] overflow-hidden">
        <motion.img
          variants={{ rest: { scale: 1 }, hover: { scale: 1.06 } }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          src={program.image}
          alt=""
          className="h-full w-full object-cover"
          loading="lazy"
          width={480}
          height={560}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-card)] via-transparent to-transparent" />
        <div
          className="absolute top-4 left-4 flex h-10 w-10 items-center justify-center rounded-xl"
          style={{ backgroundColor: `${accentColor}1A`, color: accentColor }}
        >
          {Icon && <Icon className="h-5 w-5" />}
        </div>
      </div>

      <div className="p-5">
        <h3 className="text-lg font-bold">{program.title}</h3>
        <p className="mt-1.5 text-sm leading-relaxed text-[var(--color-text-muted)]">
          {program.description}
        </p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-xs font-medium" style={{ color: accentColor }}>
            {program.workoutCount} workouts
          </span>
          <motion.span
            variants={{ rest: { x: 0 }, hover: { x: 4 } }}
            transition={{ duration: 0.3 }}
            style={{ color: accentColor }}
          >
            <IconArrowRight className="h-4 w-4" />
          </motion.span>
        </div>
      </div>
    </motion.article>
  );
}

export function Programs() {
  const { ref, isInView } = useScrollReveal();

  return (
    <section id="programs" className="bg-[var(--color-bg)] py-24 sm:py-32">
      <div className="container-pulse">
        <RevealOnScroll className="mb-12 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <Eyebrow>Programs</Eyebrow>
            <h2 className="mt-4 max-w-lg text-4xl font-bold text-balance sm:text-5xl">
              Find your training
            </h2>
          </div>
          <a
            href="#pricing"
            className="group flex items-center gap-2 text-sm font-semibold text-white/85 transition-colors hover:text-white"
          >
            View all programs
            <IconArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </RevealOnScroll>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={staggerContainer(0.08)}
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {PROGRAMS.map((program) => (
            <ProgramCard key={program.id} program={program} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
