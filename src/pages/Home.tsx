import { Suspense, lazy } from "react";

import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";

import { Hero } from "../sections/Hero";
import { BrandPartners } from "../sections/BrandPartners";
import { Programs } from "../sections/Programs";


const Statistics = lazy(() =>
  import("../sections/Statistics").then((m) => ({ default: m.Statistics }))
);

const WhyChooseUs = lazy(() =>
  import("../sections/WhyChooseUs").then((m) => ({ default: m.WhyChooseUs }))
);

const TransformationCta = lazy(() =>
  import("../sections/TransformationCta").then((m) => ({
    default: m.TransformationCta,
  }))
);

const Approach = lazy(() =>
  import("../sections/Approach").then((m) => ({ default: m.Approach }))
);

const Coaches = lazy(() =>
  import("../sections/Coaches").then((m) => ({ default: m.Coaches }))
);

const Pricing = lazy(() =>
  import("../sections/Pricing").then((m) => ({ default: m.Pricing }))
);

const Testimonials = lazy(() =>
  import("../sections/Testimonials").then((m) => ({
    default: m.Testimonials,
  }))
);

const Faq = lazy(() =>
  import("../sections/Faq").then((m) => ({ default: m.Faq }))
);

function SectionFallback() {
  return (
    <div className="h-32 w-full bg-[var(--color-bg)]" />
  );
}

export default function Home() {
//   useSmoothScroll();

  return (
    <div className="min-h-screen bg-[var(--color-bg)] text-white">
      <Navbar />

      <main>

        <Hero />
        <BrandPartners />
        <Programs />

        <Suspense fallback={<SectionFallback />}>
          <Statistics />
        </Suspense>

        <Suspense fallback={<SectionFallback />}>
          <WhyChooseUs />
        </Suspense>

        <Suspense fallback={<SectionFallback />}>
          <TransformationCta />
        </Suspense>

        <Suspense fallback={<SectionFallback />}>
          <Approach />
        </Suspense>

        <Suspense fallback={<SectionFallback />}>
          <Coaches />
        </Suspense>

        <Suspense fallback={<SectionFallback />}>
          <Pricing />
        </Suspense>

        <Suspense fallback={<SectionFallback />}>
          <Testimonials />
        </Suspense>

        <Suspense fallback={<SectionFallback />}>
          <Faq />
        </Suspense>

      </main>

      <Footer />
    </div>
  );
}