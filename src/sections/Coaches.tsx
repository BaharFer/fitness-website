import { motion } from 'framer-motion';
import { COACHES } from '../constants/content';
import { Eyebrow } from '../components/ui/Eyebrow';
import { RevealOnScroll } from '../components/ui/RevealOnScroll';
import { staggerContainer, staggerItem } from '../animations/variants';

export function Coaches() {
  return (
    <section id="coaches" className="bg-[var(--color-surface)] py-24 sm:py-32">
      <div className="container-pulse">
        <RevealOnScroll className="mb-12 max-w-lg">
          <Eyebrow>Coaches</Eyebrow>
          <h2 className="mt-4 text-4xl font-bold text-balance sm:text-5xl">
            Learn from people who have done it
          </h2>
          <p className="mt-5 text-base leading-relaxed text-[var(--color-text-muted)]">
            Every coach on Pulse has competed, coached, or rehabbed at the highest level before
            they ever wrote you a program.
          </p>
        </RevealOnScroll>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={staggerContainer(0.08)}
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {COACHES.map((coach) => (
            <motion.article
              key={coach.id}
              variants={staggerItem}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden rounded-3xl border border-white/8 bg-[var(--color-card)]"
            >
              <div className="aspect-[4/5] overflow-hidden">
               <img
                src={coach.image}
                alt={`Portrait of coach ${coach.name}`}
               className={`h-full w-full object-cover ${coach.objectPosition ?? ""}`}
               loading="lazy"
                />
              </div>
              <div className="p-5">
                <h3 className="text-base font-bold">{coach.name}</h3>
                <p className="mt-0.5 text-xs font-medium text-[var(--color-accent-lime)]">
                  {coach.role}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-[var(--color-text-muted)]">
                  {coach.bio}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {coach.specialties.map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-white/10 px-2.5 py-1 text-[10px] font-medium text-[var(--color-text-muted)]"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
