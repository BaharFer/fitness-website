import { RevealOnScroll } from '../components/ui/RevealOnScroll';
import { MagneticButton } from '../components/ui/MagneticButton';
import { IconArrowRight, IconBolt } from '../components/ui/Icons';
import { Link } from "react-router-dom";

export function TransformationCta() {
  return (
    <section className="bg-[var(--color-bg)] px-4 py-6 sm:px-6">
      <RevealOnScroll className="container-pulse !px-0">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[var(--color-accent-violet)]/20 via-[var(--color-surface)] to-[var(--color-bg)] px-6 py-10 sm:px-10 sm:py-12">
          <div
            className="pointer-events-none absolute -top-20 right-0 h-64 w-64 rounded-full bg-[var(--color-accent-violet)]/25 blur-[110px]"
            aria-hidden="true"
          />
          <div className="relative flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[var(--color-accent-violet)]/20 text-[var(--color-accent-violet)]">
                <IconBolt className="h-6 w-6" />
              </div>
              <div>
                <h2 className="text-2xl font-bold sm:text-3xl">Ready to transform?</h2>
                <p className="mt-1 text-sm text-[var(--color-text-muted)] sm:text-base">
                  Join thousands of people who changed their lives.
                </p>
              </div>
            </div>
 <Link to="/register">
  <MagneticButton variant="primary">
    Get Started
    <IconArrowRight className="h-4 w-4" />
  </MagneticButton>
</Link>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}
