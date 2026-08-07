import { BRAND_PARTNERS } from '../constants/content';
import { RevealOnScroll } from '../components/ui/RevealOnScroll';

const logoModules = import.meta.glob('../assets/icons/brand-*.svg', {
  eager: true,
  import: 'default',
}) as Record<string, string>;

function getLogo(id: string): string {
  const match = Object.entries(logoModules).find(([path]) => path.includes(id));
  return match ? match[1] : '';
}

export function BrandPartners() {
  return (
    <section className="border-y border-white/10 bg-[var(--color-bg)] py-10" aria-label="Trusted by top brands">
      <RevealOnScroll className="container-pulse">
        <div className="flex flex-col items-center gap-8 sm:flex-row sm:justify-between">
          <p className="shrink-0 text-xs font-semibold tracking-[0.18em] text-[var(--color-text-muted)] uppercase">
            Trusted by top brands
          </p>
          <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-5 opacity-70 sm:justify-end">
            {BRAND_PARTNERS.map((id) => (
              <li key={id}>
                <img src={getLogo(id)} alt={id.replace('brand-', '')} className="h-5 w-auto grayscale" />
              </li>
            ))}
          </ul>
        </div>
      </RevealOnScroll>
    </section>
  );
}
