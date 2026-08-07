import { motion } from 'framer-motion';
import { useParallax } from '../hooks/useParallax';
import { MagneticButton } from '../components/ui/MagneticButton';
import { GlassCard } from '../components/ui/GlassCard';
import { Eyebrow } from '../components/ui/Eyebrow';
import { IconPlay, IconStar, IconArrowRight } from '../components/ui/Icons';
import heroAthlete from '../assets/images/woman athlelte.webp';
import { staggerContainer, staggerItem, textReveal } from '../animations/variants';
import { Link } from "react-router-dom";

export function Hero() {
  const { ref, offset } = useParallax<HTMLDivElement>(14);

  return (
    <section
      id="top"
      ref={ref}
      className="relative overflow-hidden bg-[var(--color-bg)] pt-32 pb-20 sm:pt-40 lg:pt-44"
    >
      {/* ambient gradient field */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -top-40 right-0 h-[560px] w-[560px] rounded-full bg-[var(--color-accent-violet)]/20 blur-[140px]" />
        <div className="absolute top-1/3 -left-40 h-[420px] w-[420px] rounded-full bg-[var(--color-accent-lime)]/10 blur-[130px]" />
      </div>

      <div
  className="mx-auto grid max-w-7xl grid-cols-1 md:grid-cols-[1fr_1fr] lg:grid-cols-[1.1fr_0.9fr] items-center gap-16 px-6 lg:gap-8 lg:px-10 ">
        {/* copy column */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer(0.12, 0.1)}
          className="relative z-10"
        >
          <motion.div variants={staggerItem}>
            <Eyebrow>Train smart. Live better.</Eyebrow>
          </motion.div>

          <div className="mt-6 overflow-hidden">
            <motion.h1
              variants={textReveal}
              className="text-[13vw] leading-[0.95] font-bold tracking-tight text-balance sm:text-6xl lg:text-[4.6rem]"
            >
              Stronger.
              <br />
              Focused.
              <br />
              <span className="text-[var(--color-accent-lime)]">Unstoppable.</span>
            </motion.h1>
          </div>

          <motion.p
            variants={staggerItem}
            className="mt-6 max-w-md text-base leading-relaxed text-[var(--color-text-muted)] sm:text-lg"
          >
            Science-backed training programs, elite coaching, and a community that pushes you
            beyond your limits.
          </motion.p>

          <motion.div variants={staggerItem} className="mt-9 flex flex-wrap items-center gap-4">
          <Link to="/register">
  <MagneticButton variant="primary">
    Start your journey
    <IconArrowRight className="h-4 w-4" />
  </MagneticButton>
</Link>
            <MagneticButton variant="secondary">
              <IconPlay className="h-4 w-4" />
              Watch video
            </MagneticButton>
          </motion.div>

          <motion.div variants={staggerItem} className="mt-12 flex items-center gap-3">
            <div className="flex -space-x-3" aria-hidden="true">
              {['#8C7BFF', '#4CE2C2', '#B8FF4A'].map((color, i) => (
                <span
                  key={i}
                  className="h-9 w-9 rounded-full border-2 border-[var(--color-bg)]"
                  style={{ backgroundColor: color, opacity: 0.85 }}
                />
              ))}
            </div>
            <p className="text-sm text-[var(--color-text-muted)]">
              Join <span className="font-semibold text-white">25,000+</span> members worldwide
            </p>
          </motion.div>
        </motion.div>

        {/* visual column */}
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{
              opacity: 1,
              scale: 1,
              x: offset.x,
              y: offset.y,
            }}
            transition={{
              opacity: { duration: 1, ease: [0.16, 1, 0.3, 1] },
              scale: { duration: 1, ease: [0.16, 1, 0.3, 1] },
              x: { type: 'spring', stiffness: 60, damping: 18 },
              y: { type: 'spring', stiffness: 60, damping: 18 },
            }}
            className="relative mx-auto max-w-[420px] lg:mx-0 lg:max-w-none lg:translate-x-8"
          >
            <div className="relative aspect-[3/4] overflow-visible">
              <img
                src={heroAthlete}
                alt="Athlete mid-motion, geometric editorial illustration"
                className="h-full w-full object-contain drop-shadow-[0_40px_80px_rgba(0,0,0,0.55)]"
                width={900}
                height={1200}
                loading="eager"
                fetchPriority="high"
              />
            </div>

            {/* floating rating card */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-2 -right-2 hidden sm:block lg:right-[-2rem]"
            >
              <GlassCard className="flex items-center gap-2 px-4 py-3">
                <div className="flex text-[var(--color-accent-lime)]" aria-hidden="true">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <IconStar key={i} className="h-3.5 w-3.5" />
                  ))}
                </div>
                <div className="text-xs">
                  <p className="font-semibold text-white">4.9</p>
                  <p className="text-[var(--color-text-muted)]">1,200+ reviews</p>
                </div>
              </GlassCard>
            </motion.div>

            {/* today's goal card */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              className="absolute top-[38%] -right-4 hidden sm:block lg:right-[-3rem]"
            >
              <GlassCard className="w-[148px]">
                <p className="text-xs font-medium text-[var(--color-text-muted)]">Today's goal</p>
                <div className="relative mt-3 flex h-16 w-16 items-center justify-center">
                  <svg viewBox="0 0 64 64" className="h-16 w-16 -rotate-90">
                    <circle cx="32" cy="32" r="27" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="6" />
                    <circle
                      cx="32"
                      cy="32"
                      r="27"
                      fill="none"
                      stroke="var(--color-accent-lime)"
                      strokeWidth="6"
                      strokeLinecap="round"
                      strokeDasharray={2 * Math.PI * 27}
                      strokeDashoffset={2 * Math.PI * 27 * (1 - 0.78)}
                    />
                  </svg>
                  <span className="absolute text-sm font-bold">78%</span>
                </div>
                <p className="mt-2 text-xs text-[var(--color-text-muted)]">Keep going!</p>
              </GlassCard>
            </motion.div>

            {/* calories burned card */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute bottom-6 -left-6 hidden sm:block"
            >
              <GlassCard className="w-[168px]">
                <p className="text-xs font-medium text-[var(--color-text-muted)]">Calories burned</p>
                <p className="mt-1.5 text-2xl font-bold text-white">
                  642 <span className="text-sm font-medium text-[var(--color-text-muted)]">kcal</span>
                </p>
                <p className="mt-1 text-xs font-medium text-[var(--color-accent-teal)]">
                  +12% from yesterday
                </p>
              </GlassCard>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
