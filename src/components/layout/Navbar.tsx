import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { NAV_LINKS } from '../../constants/content';
import { IconMenu, IconX } from '../ui/Icons';
import { MagneticButton } from '../ui/MagneticButton';
import { cn } from '../../utils/cn';
import { Link } from "react-router-dom";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-500',
        isScrolled ? 'py-3' : 'py-5'
      )}
    >
     <div className="container-pulse">
        <div
          className={cn(
            'flex items-center justify-between rounded-2xl px-4 py-2.5 transition-all duration-500 sm:px-5',
            isScrolled ? 'glass-card shadow-[0_8px_32px_rgba(0,0,0,0.3)]' : 'bg-transparent'
          )}
        >
          <a href="#top" className="flex items-center gap-2.5 text-lg font-bold tracking-tight">
            <span
              className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--color-accent-lime)] text-[#0d0f14]"
              aria-hidden="true"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M3 12h4l2-7 4 14 2-7h6" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <span className="font-[var(--font-display)]">PULSE</span>
          </a>

          <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-white/75 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>

    <div className="hidden items-center gap-3 lg:flex">

  <Link
    to="/login"
    className="text-sm font-medium text-white/80 transition hover:text-white"
  >
    Login
  </Link>

  <Link to="/register">
    <MagneticButton variant="primary">
      Get Started
    </MagneticButton>
  </Link>

</div>

<button
  type="button"
  onClick={() => setIsMenuOpen((open) => !open)}
  className="flex h-10 w-10 items-center justify-center rounded-full text-white lg:hidden"
  aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
  aria-expanded={isMenuOpen}
>
  {isMenuOpen ? <IconX /> : <IconMenu />}
</button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="container-pulse mt-2 lg:hidden"
          >
            <div className="glass-card flex flex-col gap-1 rounded-2xl p-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="rounded-xl px-3 py-3 text-sm font-medium text-white/85 transition-colors hover:bg-white/5 hover:text-white"
                >
                  {link.label}
                </a>
              ))}
              <div className="mt-2 flex flex-col gap-2 border-t border-white/10 pt-3">
            <Link
               to="/login"
              onClick={() => setIsMenuOpen(false)}
              className="rounded-xl px-3 py-3 text-sm font-medium text-white/80"
              >
               Log in
             </Link>

              <Link
                 to="/register"
                 onClick={() => setIsMenuOpen(false)}
               >
              <MagneticButton variant="primary" className="w-full">
                 Get Started
              </MagneticButton>
              </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
