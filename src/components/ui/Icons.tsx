import type { SVGProps } from 'react';

/**
 * Minimal, consistent 24x24 stroke icon set built specifically for Pulse.
 * Kept as inline components (rather than an icon library dependency) to
 * hold bundle size down and match the brand's line weight exactly.
 */

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  width: 24,
  height: 24,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
};

export function IconArrowRight(props: IconProps) {
  return (
    <svg {...base} {...props} aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function IconPlay(props: IconProps) {
  return (
    <svg {...base} {...props} aria-hidden="true">
      <path d="M7 5.5v13l11-6.5-11-6.5Z" strokeLinejoin="round" />
    </svg>
  );
}

export function IconStar(props: IconProps) {
  return (
    <svg {...base} {...props} fill="currentColor" stroke="none" aria-hidden="true">
      <path d="M12 2.5 14.9 9l7.1.6-5.4 4.7 1.6 6.9L12 17.8 5.8 21.2l1.6-6.9L2 9.6 9.1 9 12 2.5Z" />
    </svg>
  );
}

export function IconCheck(props: IconProps) {
  return (
    <svg {...base} {...props} aria-hidden="true">
      <path d="m5 12.5 4.5 4.5L19 7" />
    </svg>
  );
}

export function IconX(props: IconProps) {
  return (
    <svg {...base} {...props} aria-hidden="true">
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  );
}

export function IconMenu(props: IconProps) {
  return (
    <svg {...base} {...props} aria-hidden="true">
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

export function IconTarget(props: IconProps) {
  return (
    <svg {...base} {...props} aria-hidden="true">
      <circle cx="12" cy="12" r="8.5" />
      <circle cx="12" cy="12" r="4.5" />
      <circle cx="12" cy="12" r="0.6" fill="currentColor" />
    </svg>
  );
}

export function IconCoach(props: IconProps) {
  return (
    <svg {...base} {...props} aria-hidden="true">
      <circle cx="12" cy="8" r="3.4" />
      <path d="M5 20c0-3.9 3.1-7 7-7s7 3.1 7 7" />
    </svg>
  );
}

export function IconChart(props: IconProps) {
  return (
    <svg {...base} {...props} aria-hidden="true">
      <path d="M4 20V10M12 20V4M20 20v-7" />
    </svg>
  );
}

export function IconLeaf(props: IconProps) {
  return (
    <svg {...base} {...props} aria-hidden="true">
      <path d="M5 19c8 1 13-4 14-13-9 0-13 5-14 13Z" />
      <path d="M5 19c1.5-4 4.5-7 9-9" />
    </svg>
  );
}

export function IconChevronDown(props: IconProps) {
  return (
    <svg {...base} {...props} aria-hidden="true">
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

export function IconDumbbell(props: IconProps) {
  return (
    <svg {...base} {...props} aria-hidden="true">
      <path d="M6 8v8M4 10v4M18 8v8M20 10v4M8 12h8" />
    </svg>
  );
}

export function IconFlame(props: IconProps) {
  return (
    <svg {...base} {...props} aria-hidden="true">
      <path d="M12 2.5c1 3 4 4.5 4 8.5a4 4 0 1 1-8 0c0-1.4.7-2.3 1.3-3.1.4.9 1 1.4 1.7 1.4-.4-2.4.5-4.6 1-6.8Z" />
    </svg>
  );
}

export function IconHeartPulse(props: IconProps) {
  return (
    <svg {...base} {...props} aria-hidden="true">
      <path d="M4 12h3l2-4 3 8 2-6 1.5 2H20" />
      <path d="M12 20.5C6 17 3 13.6 3 9.9 3 7.2 5.1 5 7.7 5c1.6 0 3 .8 3.9 2 .9-1.2 2.3-2 3.9-2C18.1 5 20.2 7.2 20.2 9.9c0 3.7-3 7.1-9 10.6Z" />
    </svg>
  );
}

export function IconStretch(props: IconProps) {
  return (
    <svg {...base} {...props} aria-hidden="true">
      <circle cx="12" cy="4.5" r="1.8" />
      <path d="M12 6.5v6M12 12.5 7 17M12 12.5l5 4.5M8 9l4 1.5L16 9" />
    </svg>
  );
}

export function IconBolt(props: IconProps) {
  return (
    <svg {...base} {...props} aria-hidden="true">
      <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" strokeLinejoin="round" />
    </svg>
  );
}

export function IconMedal(props: IconProps) {
  return (
    <svg {...base} {...props} aria-hidden="true">
      <circle cx="12" cy="15" r="5.5" />
      <path d="M9.5 10 7 3h3l2 5M14.5 10 17 3h-3l-2 5" />
    </svg>
  );
}
