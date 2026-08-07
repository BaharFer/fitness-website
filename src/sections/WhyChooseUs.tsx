import { motion } from 'framer-motion';
import { Eyebrow } from '../components/ui/Eyebrow';
import { RevealOnScroll } from '../components/ui/RevealOnScroll';
import { GlassCard } from '../components/ui/GlassCard';
import { MagneticButton } from '../components/ui/MagneticButton';
import { IconTarget, IconCoach, IconChart, IconLeaf } from '../components/ui/Icons';
import transformationImg from '../assets/images/Why choose us.webp';
import { staggerContainer, staggerItem } from '../animations/variants';

const FEATURES = [
  {
    icon: IconTarget,
    title: 'Personalized programs',
    description: 'Custom plan for your goals',
  },
  {
    icon: IconCoach,
    title: 'Expert coaching',
    description: 'Guidance from certified pros',
  },
  {
    icon: IconChart,
    title: 'Progress tracking',
    description: 'Track. Analyze. Improve.',
  },
  {
    icon: IconLeaf,
    title: 'Nutrition guidance',
    description: 'Fuel your body the right way',
  },
];

const WEEK_BARS = [42, 68, 55, 90, 60, 78, 30];
const WEEK_LABELS = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];

export function WhyChooseUs() {
  return (
    <section className="bg-[var(--color-bg)] py-24 sm:py-32">
      <div className="container-pulse grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-10">
        <RevealOnScroll>
          <Eyebrow>Why choose us</Eyebrow>
          <h2 className="mt-4 text-4xl font-bold text-balance sm:text-5xl">
            Built different.
            <br />
            For real results.
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-[var(--color-text-muted)]">
            We combine science, technology, and coaching expertise to deliver results that
            actually last.
          </p>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={staggerContainer(0.08)}
            className="mt-10 grid grid-cols-1 gap-5 xs:grid-cols-2"
          >
            {FEATURES.map((feature) => (
              <motion.div key={feature.title} variants={staggerItem} className="flex gap-3.5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-[var(--color-accent-lime)]">
                  <feature.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white">{feature.title}</h3>
                  <p className="mt-0.5 text-xs text-[var(--color-text-muted)]">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <MagneticButton variant="secondary" className="mt-10">
            Learn more about us
          </MagneticButton>
        </RevealOnScroll>

        <RevealOnScroll delay={0.15} className="relative">
          <div className="relative mx-auto max-w-md overflow-hidden rounded-[2rem] border border-white/10">
            <img
              src={transformationImg}
              alt="Athlete mid-training session, editorial illustration"
              className="aspect-[3/4] w-full object-cover"
              loading="lazy"
              width={480}
              height={640}
            />
          </div>

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -bottom-8 -right-2 w-[210px] sm:right-[-2rem]"
          >
            <GlassCard>
              <div className="flex items-center justify-between">
                <p className="text-xs font-medium text-[var(--color-text-muted)]">Your progress</p>
                <span className="text-[10px] font-medium text-[var(--color-text-muted)]">This week</span>
              </div>
              <div className="mt-4 flex h-16 items-end gap-1.5" role="img" aria-label="Weekly training volume bar chart">
                {WEEK_BARS.map((height, i) => (
                  <div key={i} className="flex flex-1 flex-col items-center gap-1.5">
                    <div
                      className="w-full rounded-sm"
                      style={{
                        height: `${height}%`,
                        backgroundColor: i === 3 ? 'var(--color-accent-lime)' : 'var(--color-accent-violet)',
                        opacity: i === 3 ? 1 : 0.45,
                      }}
                    />
                    <span className="text-[9px] text-[var(--color-text-muted)]">{WEEK_LABELS[i]}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 flex items-center gap-3 border-t border-white/10 pt-3.5">
                <div className="relative flex h-10 w-10 items-center justify-center">
                  <svg viewBox="0 0 40 40" className="h-10 w-10 -rotate-90">
                    <circle cx="20" cy="20" r="16" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="4" />
                    <circle
                      cx="20"
                      cy="20"
                      r="16"
                      fill="none"
                      stroke="var(--color-accent-lime)"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeDasharray={2 * Math.PI * 16}
                      strokeDashoffset={2 * Math.PI * 16 * (1 - 4 / 6)}
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-bold text-white">Workouts 4/6</p>
                  <p className="text-[11px] text-[var(--color-text-muted)]">Great job! Keep it up.</p>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
