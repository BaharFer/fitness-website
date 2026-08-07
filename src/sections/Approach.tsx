import { motion } from 'framer-motion';
import { Eyebrow } from '../components/ui/Eyebrow';
import { RevealOnScroll } from '../components/ui/RevealOnScroll';
import { MagneticButton } from '../components/ui/MagneticButton';
import approach01 from '../assets/images/assess.webp';
import approach02 from '../assets/images/Train.webp';
import approach03 from '../assets/images/Tansform.webp';
import { staggerContainer, staggerItem } from '../animations/variants';

const IMAGES = [
  {
    src: approach01,
    alt: "...",
    size: "lg:mt-14",
    scale: "scale-110",
  },
  {
    src: approach02,
    alt: "...",
    size: "",
    scale: "scale-105",
  },
  {
    src: approach03,
    alt: "...",
    size: "lg:mt-20",
    scale: "",
  },
];

export function Approach() {
  return (
    <section className="bg-[var(--color-bg)] py-24 sm:py-32">
      <div className="container-pulse grid grid-cols-1 items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-8">
        <RevealOnScroll>
          <Eyebrow>Our approach</Eyebrow>
          <h2 className="mt-4 text-4xl font-bold text-balance sm:text-5xl">
            More than workouts.
            <br />
            It's a lifestyle.
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-[var(--color-text-muted)]">
            We believe fitness is more than just training — it's about building discipline,
            confidence, and a stronger you.
          </p>

          <div className="mt-9 flex gap-10">
            <div>
              <p className="font-[var(--font-display)] text-3xl font-bold text-[var(--color-accent-lime)]">12+</p>
              <p className="mt-1 text-sm text-[var(--color-text-muted)]">Years experience</p>
            </div>
            <div>
              <p className="font-[var(--font-display)] text-3xl font-bold text-[var(--color-accent-lime)]">50+</p>
              <p className="mt-1 text-sm text-[var(--color-text-muted)]">Countries</p>
            </div>
          </div>

          <MagneticButton variant="secondary" className="mt-9">
            Our philosophy
          </MagneticButton>
        </RevealOnScroll>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={staggerContainer(0.1)}
          className="grid grid-cols-3 gap-3 sm:gap-4"
        >
          {IMAGES.map((image) => (
            <motion.div
              key={image.src}
              variants={staggerItem}
              className={`overflow-hidden rounded-2xl border border-white/10 ${image.size}`}
            >
             <img
  src={image.src}
  alt={image.alt}
  className={`aspect-[3/4.5] h-full w-full object-cover ${image.scale}`}
  loading="lazy"
  width={480}
  height={640}
/>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
