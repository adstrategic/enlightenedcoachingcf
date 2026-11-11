"use client";

import { useLanguage } from "./language-context";
import { Reveal } from "./reveal";
import { WaveDivider } from "./wave-divider";

export function Purpose() {
  const { t } = useLanguage();

  return (
    <section id="proposito" className="relative bg-bg px-[4vw] py-24 md:py-28">
      <div className="mx-auto grid max-w-[1100px] gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
        <Reveal>
          <div>
            <h2 className="font-display mb-5 text-4xl text-ink md:text-5xl">
              {t.purpose.title}
            </h2>
            <p className="mb-4 text-xl leading-relaxed text-ink-muted">
              {t.purpose.intro}
            </p>
            <p className="text-xl leading-relaxed text-ink-muted">
              {t.purpose.promise}
            </p>
          </div>
        </Reveal>

        <Reveal delayMs={100}>
          <div>
            <p className="mb-6 text-base leading-relaxed text-ink-muted">
              {t.purpose.statsTitle}
            </p>
            <ol className="space-y-4">
              {t.purpose.rows.map((row, index) => (
                <li
                  key={row.action}
                  className="flex items-baseline justify-between gap-6 border-b border-ink/10 pb-3"
                >
                  <span className="text-lg text-ink">
                    <span className="font-nav mr-2 text-sm text-accent">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {row.action}
                  </span>
                  <span className="font-display text-3xl text-slate tabular-nums">
                    {row.probability}
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </Reveal>
      </div>

      <div className="absolute inset-x-0 bottom-0 translate-y-[99%]">
        <WaveDivider fill="var(--lime)" />
      </div>
    </section>
  );
}
