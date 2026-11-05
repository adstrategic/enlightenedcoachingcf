"use client";

import Image from "next/image";
import { useLanguage } from "./language-context";
import { Reveal } from "./reveal";
import { WaveDivider } from "./wave-divider";

export function Sessions() {
  const { t } = useLanguage();

  return (
    <section
      id="sesiones"
      className="relative bg-lime px-[4vw] py-24 pb-28 text-ink md:py-28 md:pb-32"
    >
      <div className="mx-auto grid max-w-[1100px] items-center gap-12 md:grid-cols-2">
        <Reveal>
          <div className="relative mx-auto aspect-square w-full max-w-md overflow-hidden rounded-full">
            <Image
              src="/images/session.jpg"
              alt=""
              fill
              className="object-cover grayscale"
              sizes="(max-width: 768px) 90vw, 420px"
            />
          </div>
        </Reveal>

        <Reveal delayMs={100}>
          <div>
            <h2 className="font-display mb-5 text-3xl md:text-4xl">
              {t.sessions.title}
            </h2>
            <p className="mb-8 text-lg leading-relaxed text-ink-muted italic">
              {t.sessions.body}
            </p>
            <a href="#agenda" className="btn-pill">
              {t.sessions.cta}
            </a>
          </div>
        </Reveal>
      </div>

      <div className="absolute inset-x-0 bottom-0">
        <WaveDivider fill="var(--bg-warm)" />
      </div>
    </section>
  );
}
