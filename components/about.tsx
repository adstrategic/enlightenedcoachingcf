"use client";

import Image from "next/image";
import { useLanguage } from "./language-context";
import { Reveal } from "./reveal";
import { WaveDivider } from "./wave-divider";

export function About() {
  const { t } = useLanguage();

  return (
    <section id="sobre" className="relative bg-bg-warm px-[4vw] py-24 md:py-28">
      <div className="mx-auto grid max-w-[1100px] items-center gap-12 md:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <div className="relative mx-auto aspect-square w-full max-w-sm overflow-hidden rounded-full">
            <Image
              src="/images/claudia-forero-portrait.jpg"
              alt="Claudia Forero, life coach espiritual certificada en Miami"
              fill
              priority
              className="object-cover object-[center_42%]"
              sizes="(max-width: 768px) 80vw, 360px"
            />
          </div>
        </Reveal>

        <Reveal delayMs={90}>
          <div className="md:text-right">
            <p className="font-display mb-3 text-4xl text-ink md:text-5xl">
              {t.about.welcome}
            </p>
            <h2 className="font-nav mb-6 text-sm tracking-[0.18em] text-accent uppercase">
              {t.about.title}
            </h2>
            <p className="mb-5 text-base leading-relaxed text-ink-muted md:text-lg">
              {t.about.bio}
            </p>
            <p className="mb-6 text-base leading-relaxed text-ink-muted md:text-lg">
              {t.about.trajectory}
            </p>
            <p className="font-display text-xl text-slate italic md:text-2xl">
              {t.about.closing}
            </p>
          </div>
        </Reveal>
      </div>

      {/* <div className="absolute inset-x-0 bottom-0 translate-y-[99%]">
        <WaveDivider fill="var(--lime)" />
      </div> */}
    </section>
  );
}
