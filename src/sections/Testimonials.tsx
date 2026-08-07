import { motion } from 'framer-motion';
import { TESTIMONIALS } from '../constants/content';
import { Eyebrow } from '../components/ui/Eyebrow';
import { RevealOnScroll } from '../components/ui/RevealOnScroll';
import { IconStar } from '../components/ui/Icons';
import { staggerContainer, staggerItem } from '../animations/variants';

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-[var(--color-surface)] py-24 sm:py-32">
      <div className="container-pulse">
        <RevealOnScroll className="mb-12 max-w-lg">
          <Eyebrow>Results</Eyebrow>
          <h2 className="mt-4 text-4xl font-bold text-balance sm:text-5xl">
            Real members. Real progress.
          </h2>
        </RevealOnScroll>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={staggerContainer(0.08)}
          className="grid grid-cols-1 gap-5 sm:grid-cols-2"
        >
          {TESTIMONIALS.map((testimonial) => (
            <motion.figure
              key={testimonial.id}
              variants={staggerItem}
              className="flex flex-col rounded-3xl border border-white/8 bg-[var(--color-card)] p-7"
            >
              <div className="flex text-[var(--color-accent-lime)]" aria-hidden="true">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <IconStar key={i} className="h-4 w-4" />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-[15px] leading-relaxed text-white/90">
                "{testimonial.quote}"
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-white/10 pt-5">
                <div
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-bold text-[#0d0f14]"
                  style={{ backgroundColor: 'var(--color-accent-lime)' }}
                  aria-hidden="true"
                >
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{testimonial.name}</p>
                  <p className="text-xs text-[var(--color-text-muted)]">{testimonial.role}</p>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
