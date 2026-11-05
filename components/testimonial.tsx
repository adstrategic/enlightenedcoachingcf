"use client";

import { useLanguage } from "./language-context";
import { Reveal } from "./reveal";
import { WaveDivider } from "./wave-divider";

export function Testimonial() {
  const { t } = useLanguage();

  return (
    <section className="relative bg-bg-warm px-[4vw] py-20 md:py-28">
      <div className="mx-auto max-w-3xl text-center">
        <Reveal>
          <h2 className="font-display mb-8 text-3xl text-ink md:text-4xl">
            {t.testimonial.title}
          </h2>
        </Reveal>
        <Reveal delayMs={80}>
          <blockquote className="space-y-6 text-lg leading-relaxed text-ink-muted md:text-xl">
            <p>{t.testimonial.quote}</p>
            <p>{t.testimonial.recommend}</p>
            <footer className="font-display pt-2 text-ink italic">
              {t.testimonial.closing}
            </footer>
          </blockquote>
        </Reveal>
      </div>
      <div className="absolute inset-x-0 bottom-0 translate-y-[99%]">
        <WaveDivider fill="var(--lime)" />
      </div>
    </section>
  );
}
