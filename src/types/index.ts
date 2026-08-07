export interface Program {
  id: string;
  title: string;
  description: string;
  workoutCount: number;
  image: string;
  accent: 'lime' | 'violet' | 'teal';
}

export interface Coach {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  specialties: string[];
   objectPosition?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  rating: number;
}

export interface PlanFeature {
  label: string;
  included: boolean;
}

export interface MembershipPlan {
  id: string;
  name: string;
  price: number;
  period: 'month' | 'year';
  description: string;
  features: PlanFeature[];
  featured?: boolean;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface StatItem {
  id: string;
  value: number;
  suffix: string;
  label: string;
}

export interface NavLink {
  label: string;
  href: string;
}
