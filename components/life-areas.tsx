"use client";

import { useLanguage } from "./language-context";
import { Reveal } from "./reveal";
import { WaveDivider } from "./wave-divider";

function AreaIcon({ index }: { index: number }) {
  const paths = [
    "M12 12a3.2 3.2 0 1 0-3.2-3.2A3.2 3.2 0 0 0 12 12Zm6.5 0a2.6 2.6 0 1 0-2.6-2.6A2.6 2.6 0 0 0 18.5 12ZM5.5 12A2.6 2.6 0 1 0 2.9 9.4 2.6 2.6 0 0 0 5.5 12ZM12 13.8c-3.4 0-6.2 1.5-6.2 3.4V20h12.4v-2.8c0-1.9-2.8-3.4-6.2-3.4Z",
    "M8.5 4.5h7v2.2H20A1.5 1.5 0 0 1 21.5 8.2v10.3A1.5 1.5 0 0 1 20 20H4a1.5 1.5 0 0 1-1.5-1.5V8.2A1.5 1.5 0 0 1 4 6.7h4.5Zm1.5 2.2h4V6h-4Zm-6 4.1v7.7h16.5v-7.7Zm7.5 2h1.8v1.8H11.5Z",
    "M12 3.2 2 8.8l10 5.4 8.2-4.4v5.5H22V8.8L12 3.2Zm0 13.3L4.5 12.4 12 8.4l7.5 4Z",
    "M12 2.8c2.5 3.1 5.4 5.6 5.4 9a5.4 5.4 0 1 1-10.8 0c0-3.4 2.9-5.9 5.4-9Zm0 17.2a7 7 0 0 0 6.9-6.1A7.8 7.8 0 0 1 12 20a7.8 7.8 0 0 1-6.9-6.1A7 7 0 0 0 12 20Z",
    "M12 20.5S5.5 16.4 5.5 11A4 4 0 0 1 12 8.2 4 4 0 0 1 18.5 11c0 5.4-6.5 9.5-6.5 9.5Z",
  ];

  return (
    <svg viewBox="0 0 24 24" className="h-8 w-8 fill-ink" aria-hidden="true">
      <path d={paths[index]} />
    </svg>
  );
}

export function LifeAreas() {
  const { t } = useLanguage();

  return (
    <section id="areas" className="relative bg-lime px-[4vw] py-24 text-ink md:py-28">
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <h2 className="font-display mb-4 text-3xl md:text-4xl">{t.areas.title}</h2>
            <p className="text-ink-muted">{t.areas.intro}</p>
          </div>
        </Reveal>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
          {t.areas.items.map((item, index) => (
            <Reveal key={item.title} delayMs={index * 70}>
              <article className="text-center">
                <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-ink/10">
                  <AreaIcon index={index} />
                </div>
                <h3 className="font-display mb-2 text-xl">{item.title}</h3>
                <p className="text-sm leading-relaxed text-ink-muted">
                  {item.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delayMs={200}>
          <p className="font-display mt-16 text-center text-2xl text-ink italic md:text-3xl">
            {t.areas.vipassana}
          </p>
        </Reveal>
      </div>

      <div className="absolute inset-x-0 bottom-0 translate-y-[99%]">
        <WaveDivider fill="var(--bg)" />
      </div>
    </section>
  );
}
