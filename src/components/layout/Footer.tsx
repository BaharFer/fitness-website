const FOOTER_COLUMNS = [
  {
    title: 'Train',
    links: ['Programs', 'Coaches', 'Pricing', 'Results'],
  },
  {
    title: 'Company',
    links: ['About us', 'Careers', 'Press', 'Contact'],
  },
  {
    title: 'Resources',
    links: ['Blog', 'Guides', 'FAQ', 'Support'],
  },
  {
    title: 'Legal',
    links: ['Privacy policy', 'Terms of service', 'Cookie policy'],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[var(--color-surface)]">
      <div className="container-pulse py-16 sm:py-20">
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:grid-cols-6">
          <div className="col-span-2 lg:col-span-2">
            <a href="#top" className="flex items-center gap-2.5 text-lg font-bold tracking-tight">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--color-accent-lime)] text-[#0d0f14]">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M3 12h4l2-7 4 14 2-7h6" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <span className="font-[var(--font-display)]">PULSE</span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-[var(--color-text-muted)]">
              Science-backed training programs, elite coaching, and a community that pushes you beyond your limits.
            </p>
          </div>

          {FOOTER_COLUMNS.map((column) => (
            <div key={column.title}>
              <h3 className="text-sm font-semibold text-white">{column.title}</h3>
              <ul className="mt-4 flex flex-col gap-3">
                {column.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-[var(--color-text-muted)] transition-colors hover:text-white"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-xs text-[var(--color-text-muted)]">
            &copy; {new Date().getFullYear()} Pulse Training Co. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            {['Instagram', 'TikTok', 'YouTube'].map((social) => (
              <a
                key={social}
                href="#"
                className="text-xs font-medium text-[var(--color-text-muted)] transition-colors hover:text-white"
              >
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
