"use client";

import Image from "next/image";
import { useLanguage } from "./language-context";
import { WaveDivider } from "./wave-divider";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="inicio"
      className="relative flex min-h-[100svh] flex-col overflow-hidden bg-lime text-ink"
    >
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 90% 50% at 50% 0%, oklch(0.95 0.1 124 / 0.45), transparent 55%)",
        }}
      />

      <div className="relative z-10 flex flex-1 flex-col justify-center pt-[var(--header-height)] pb-16 md:pb-20">
        <h1 className="sr-only">
          Enlightened Coaching — Claudia Forero, life coach espiritual
          certificada en Miami
        </h1>
        <figure className="hero-banner w-full">
          <Image
            src="/images/brand-banner.jpg"
            alt="Enlightened Coaching — Claudia Forero. To reach your goals / Para alcanzar sus metas"
            width={1000}
            height={288}
            priority
            className="h-auto w-full"
            sizes="100vw"
          />
        </figure>

        <div className="hero-copy mx-auto mt-8 max-w-2xl px-[4vw] text-center md:mt-10">
          <p className="mb-5 text-base leading-relaxed text-ink/90 sm:text-lg md:text-xl">
            {t.hero.tagline}
          </p>
          <p className="mb-8 text-sm leading-relaxed text-ink-muted sm:text-base">
            {t.hero.support}
          </p>
          <a href="#agenda" className="btn-pill">
            {t.hero.cta}
          </a>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0">
        <WaveDivider fill="var(--bg-warm)" />
      </div>
    </section>
  );
}
