"use client";

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

      <div className="relative z-10 flex flex-1 flex-col justify-center px-[4vw] pt-[calc(var(--header-height)+1.25rem)] pb-16 md:pb-20">
        <div className="hero-banner mx-auto w-full max-w-4xl">
          <div
            className="bg-lime px-6 py-10 text-center sm:px-10 sm:py-12 md:px-16 md:py-14"
            style={{
              boxShadow:
                "inset 0 0 0 1px #111, inset 0 0 0 4px var(--brand-yellow), inset 0 0 0 5px #111",
            }}
          >
            <h1 className="font-script text-[clamp(2.75rem,10vw,5.75rem)] leading-[1.05] text-ink text-balance">
              Enlightened Coaching
            </h1>

            <p className="font-nav mt-4 text-[0.7rem] font-semibold tracking-[0.18em] text-ink uppercase sm:text-sm sm:tracking-[0.22em]">
              To reach your goals
            </p>
            <p className="font-nav mt-1 text-[0.7rem] font-semibold tracking-[0.18em] text-ink uppercase sm:text-sm sm:tracking-[0.22em]">
              Para alcanzar sus metas
            </p>

            <div
              className="mx-auto mt-5 flex w-[min(100%,18rem)] flex-col gap-[3px] sm:w-[22rem]"
              aria-hidden="true"
            >
              <span className="block h-px w-full bg-[#4BA3D9]" />
              <span className="block h-px w-full bg-[#F0C418]" />
              <span className="block h-px w-full bg-[#7BC67E]" />
              <span className="block h-px w-full bg-[#C62828]" />
            </div>
          </div>
        </div>

        <div className="hero-copy mx-auto mt-10 max-w-2xl text-center md:mt-12">
          <p className="mb-5 text-lg leading-relaxed text-ink/90 sm:text-xl md:text-2xl">
            {t.hero.tagline}
          </p>
          <p className="mb-8 text-base leading-relaxed text-ink-muted sm:text-lg">
            {t.hero.support}
          </p>
          <a href="#contacto" className="btn-pill">
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
