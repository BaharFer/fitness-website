import type {
  Program,
  Coach,
  Testimonial,
  MembershipPlan,
  FAQItem,
  StatItem,
  NavLink,
} from '../types';

import programStrength from '../assets/images/Strength.webp';
import programHiit from '../assets/images/Hit.webp';
import programCardio from '../assets/images/Cardio.webp';
import programMobility from '../assets/images/Mobility.webp';
import programPower from '../assets/images/Power.webp';
import programAthlete from '../assets/images/Athelete.webp';

import coach01 from '../assets/images/coach 1.webp';
import coach02 from '../assets/images/Coach2.webp';
import coach03 from '../assets/images/Coach3.webp';
import coach04 from '../assets/images/Coach4.webp';

export const NAV_LINKS: NavLink[] = [
  { label: 'Programs', href: '#programs' },
  { label: 'Coaches', href: '#coaches' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Results', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
];

export const PROGRAMS: Program[] = [
  {
    id: 'strength',
    title: 'Strength',
    description: 'Build raw power with progressive overload protocols.',
    workoutCount: 12,
    image: programStrength,
    accent: 'lime',
  },
  {
    id: 'hiit',
    title: 'HIIT',
    description: 'Interval work engineered to torch fat, fast.',
    workoutCount: 18,
    image: programHiit,
    accent: 'violet',
  },
  {
    id: 'cardio',
    title: 'Cardio',
    description: 'Endurance training that expands your ceiling.',
    workoutCount: 20,
    image: programCardio,
    accent: 'teal',
  },
  {
    id: 'mobility',
    title: 'Mobility',
    description: 'Move better, recover faster, train longer.',
    workoutCount: 15,
    image: programMobility,
    accent: 'lime',
  },
  {
    id: 'power',
    title: 'Power',
    description: 'Explosive output for athletes who compete.',
    workoutCount: 14,
    image: programPower,
    accent: 'violet',
  },
  {
    id: 'athlete',
    title: 'Athlete',
    description: 'Elite-level programming for peak performance.',
    workoutCount: 22,
    image: programAthlete,
    accent: 'teal',
  },
];

export const COACHES: Coach[] = [
  {
    id: 'coach-1',
    name: 'Maya Okonkwo',
    role: 'Head of Strength',
    bio: 'Fifteen years coaching Olympic lifters and everyday athletes alike.',
    image: coach01,
    specialties: ['Powerlifting', 'Programming'],
  },
  {
    id: 'coach-2',
    name: 'Theo Marchetti',
    role: 'Conditioning Lead',
    bio: 'Former national-level rower turned metabolic conditioning specialist.',
    image: coach02,
    specialties: ['HIIT', 'Endurance'],
    objectPosition: "object-top",
  },
  {
    id: 'coach-3',
    name: 'Sana Farooqi',
    role: 'Mobility & Recovery',
    bio: 'Physiotherapist by training, movement educator by calling.',
    image: coach04,
    specialties: ['Mobility', 'Rehab'],
  },
  {
    id: 'coach-4',
    name: 'Diego Alarcón',
    role: 'Performance Director',
    bio: 'Builds return-to-sport plans for professional athletes.',
    image: coach03,
    specialties: ['Power', 'Athletics'],
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Renee Castillo',
    role: 'Member since 2023',
    quote:
      'Pulse rebuilt how I think about training. The programming actually adapts to how I recover, not just a fixed calendar.',
    rating: 5,
  },
  {
    id: 't2',
    name: 'Amir Delgado',
    role: 'Member since 2022',
    quote:
      'I have tried four other apps. None of them paired real coaching with data the way this does. It is the first plan I have stuck with.',
    rating: 5,
  },
  {
    id: 't3',
    name: 'Priya Nakamura',
    role: 'Member since 2024',
    quote:
      'The mobility work alone fixed a shoulder issue I had been carrying for two years. Coaches actually check in.',
    rating: 5,
  },
  {
    id: 't4',
    name: 'Jonas Weber',
    role: 'Member since 2021',
    quote:
      'Ninety eight percent satisfaction sounded like marketing until I lived it. Four years in and I am still progressing.',
    rating: 5,
  },
];

export const MEMBERSHIP_PLANS: MembershipPlan[] = [
  {
    id: 'starter',
    name: 'Starter',
    price: 29,
    period: 'month',
    description: 'For anyone building a consistent training habit.',
    features: [
      { label: 'Full program library', included: true },
      { label: 'Progress tracking', included: true },
      { label: 'Community access', included: true },
      { label: '1:1 coaching', included: false },
      { label: 'Nutrition guidance', included: false },
    ],
  },
  {
    id: 'performance',
    name: 'Performance',
    price: 59,
    period: 'month',
    description: 'Our most popular plan, built for real results.',
    features: [
      { label: 'Full program library', included: true },
      { label: 'Progress tracking', included: true },
      { label: 'Community access', included: true },
      { label: 'Monthly 1:1 coaching', included: true },
      { label: 'Nutrition guidance', included: true },
    ],
    featured: true,
  },
  {
    id: 'elite',
    name: 'Elite',
    price: 129,
    period: 'month',
    description: 'Direct coach access for athletes chasing peak performance.',
    features: [
      { label: 'Full program library', included: true },
      { label: 'Progress tracking', included: true },
      { label: 'Community access', included: true },
      { label: 'Weekly 1:1 coaching', included: true },
      { label: 'Custom nutrition plan', included: true },
    ],
  },
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'Do I need gym equipment to start?',
    answer:
      'No. Every program includes a bodyweight track alongside the equipped version, so you can start today with whatever you have access to.',
  },
  {
    id: 'faq-2',
    question: 'Can I switch programs after I start?',
    answer:
      'Yes, at any time. Your progress and history carry over, and your coach will help you re-plan the transition so you do not lose momentum.',
  },
  {
    id: 'faq-3',
    question: 'How does 1:1 coaching actually work?',
    answer:
      'You are paired with a dedicated coach who reviews your training data, adjusts your program weekly, and is reachable through in-app messaging.',
  },
  {
    id: 'faq-4',
    question: 'Is there a minimum commitment?',
    answer:
      'No contracts. All plans are billed monthly and you can cancel anytime from your account settings with no penalty.',
  },
  {
    id: 'faq-5',
    question: 'What if a program is not right for me?',
    answer:
      'We offer a 14-day satisfaction window on every new membership. If it is not the right fit, we will refund you in full.',
  },
];

export const STATS: StatItem[] = [
  { id: 'members', value: 25000, suffix: '+', label: 'Active members' },
  { id: 'coaches', value: 150, suffix: '+', label: 'Expert coaches' },
  { id: 'programs', value: 500, suffix: '+', label: 'Programs' },
  { id: 'satisfaction', value: 98, suffix: '%', label: 'Satisfaction rate' },
];

export const BRAND_PARTNERS = [
  'brand-velocity',
  'brand-forma',
  'brand-axis',
  'brand-north',
  'brand-kinetic',
  'brand-tempo',
];
