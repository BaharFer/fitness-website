import { motion } from 'framer-motion';
import { MEMBERSHIP_PLANS } from '../constants/content';
import { Eyebrow } from '../components/ui/Eyebrow';
import { RevealOnScroll } from '../components/ui/RevealOnScroll';
import { MagneticButton } from '../components/ui/MagneticButton';
import { IconCheck, IconX } from '../components/ui/Icons';
import { staggerContainer, staggerItem } from '../animations/variants';
import { cn } from '../utils/cn';

export function Pricing() {
  return (
    <section id="pricing" className="bg-[var(--color-bg)] py-24 sm:py-32">
      <div className="container-pulse">
        <RevealOnScroll className="mx-auto mb-14 max-w-xl text-center">
          <div className="flex justify-center">
            <Eyebrow>Membership</Eyebrow>
          </div>
          <h2 className="mt-4 text-4xl font-bold text-balance sm:text-5xl">
            Plans built around your goals
          </h2>
          <p className="mt-5 text-base leading-relaxed text-[var(--color-text-muted)]">
            Start free-form, upgrade to real coaching whenever you are ready. Cancel anytime.
          </p>
        </RevealOnScroll>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={staggerContainer(0.1)}
          className="grid grid-cols-1 gap-6 lg:grid-cols-3"
        >
          {MEMBERSHIP_PLANS.map((plan) => (
            <motion.div
              key={plan.id}
              variants={staggerItem}
              className={cn(
                'relative flex flex-col rounded-3xl border p-8',
                plan.featured
                  ? 'border-[var(--color-accent-lime)]/40 bg-gradient-to-b from-[var(--color-accent-lime)]/[0.07] to-[var(--color-card)]'
                  : 'border-white/8 bg-[var(--color-card)]'
              )}
            >
              {plan.featured && (
                <span className="absolute -top-3 left-8 rounded-full bg-[var(--color-accent-lime)] px-3 py-1 text-[10px] font-bold tracking-wide text-[#0d0f14] uppercase">
                  Most popular
                </span>
              )}
              <h3 className="text-lg font-bold">{plan.name}</h3>
              <p className="mt-2 text-sm text-[var(--color-text-muted)]">{plan.description}</p>

              <div className="mt-6 flex items-baseline gap-1">
                <span className="text-4xl font-bold">${plan.price}</span>
                <span className="text-sm text-[var(--color-text-muted)]">/{plan.period}</span>
              </div>

              <ul className="mt-8 flex flex-1 flex-col gap-3.5">
                {plan.features.map((feature) => (
                  <li key={feature.label} className="flex items-center gap-2.5 text-sm">
                    {feature.included ? (
                      <IconCheck className="h-4 w-4 shrink-0 text-[var(--color-accent-lime)]" />
                    ) : (
                      <IconX className="h-4 w-4 shrink-0 text-white/25" />
                    )}
                    <span className={feature.included ? 'text-white/90' : 'text-white/35'}>
                      {feature.label}
                    </span>
                  </li>
                ))}
              </ul>

              <MagneticButton
                variant={plan.featured ? 'primary' : 'secondary'}
                className="mt-8 w-full justify-center"
              >
                Choose {plan.name}
              </MagneticButton>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
