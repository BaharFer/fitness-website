import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FAQ_ITEMS } from '../constants/content';
import { Eyebrow } from '../components/ui/Eyebrow';
import { RevealOnScroll } from '../components/ui/RevealOnScroll';
import { IconChevronDown } from '../components/ui/Icons';
import { cn } from '../utils/cn';

function FaqRow({
  question,
  answer,
  isOpen,
  onToggle,
  id,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  id: string;
}) {
  return (
    <div className="border-b border-white/10">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`${id}-panel`}
        id={`${id}-trigger`}
        className="flex w-full items-center justify-between gap-4 py-6 text-left"
      >
        <span className="text-base font-semibold text-white sm:text-lg">{question}</span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className={cn(
            'flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10',
            isOpen && 'border-[var(--color-accent-lime)]/40 text-[var(--color-accent-lime)]'
          )}
        >
          <IconChevronDown className="h-4 w-4" />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={`${id}-panel`}
            role="region"
            aria-labelledby={`${id}-trigger`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-sm leading-relaxed text-[var(--color-text-muted)] sm:text-base">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function Faq() {
  const [openId, setOpenId] = useState<string | null>(FAQ_ITEMS[0]?.id ?? null);

  return (
    <section id="faq" className="bg-[var(--color-bg)] py-24 sm:py-32">
      <div className="container-pulse grid grid-cols-1 gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <RevealOnScroll>
          <Eyebrow>FAQ</Eyebrow>
          <h2 className="mt-4 text-4xl font-bold text-balance sm:text-5xl">
            Questions, answered
          </h2>
          <p className="mt-5 max-w-sm text-base leading-relaxed text-[var(--color-text-muted)]">
            Can't find what you're looking for? Reach out to our support team anytime.
          </p>
        </RevealOnScroll>

        <RevealOnScroll delay={0.1}>
          {FAQ_ITEMS.map((item) => (
            <FaqRow
              key={item.id}
              id={item.id}
              question={item.question}
              answer={item.answer}
              isOpen={openId === item.id}
              onToggle={() => setOpenId((current) => (current === item.id ? null : item.id))}
            />
          ))}
        </RevealOnScroll>
      </div>
    </section>
  );
}
