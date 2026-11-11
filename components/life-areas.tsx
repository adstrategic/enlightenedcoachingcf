"use client";

import Image from "next/image";
import { useLanguage } from "./language-context";
import { Reveal } from "./reveal";
import { WaveDivider } from "./wave-divider";

const AREA_IMAGES = [
  { src: "/images/home_family.jpg", alt: "Familia" },
  { src: "/images/home_work.jpg", alt: "Trabajo" },
  { src: "/images/home_education.jpg", alt: "Educación" },
  { src: "/images/home_spiritual.jpg", alt: "Espiritualidad" },
  { src: "/images/home_interests.jpg", alt: "Intereses especiales" },
] as const;

export function LifeAreas() {
  const { t } = useLanguage();

  return (
    <section id="areas" className="relative bg-lime px-[4vw] py-24 text-ink md:py-28">
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <h2 className="font-display mb-4 text-4xl md:text-5xl">{t.areas.title}</h2>
            <p className="text-lg text-ink-muted">{t.areas.intro}</p>
          </div>
        </Reveal>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
          {t.areas.items.map((item, index) => {
            const image = AREA_IMAGES[index];
            return (
              <Reveal key={item.title} delayMs={index * 70}>
                <article className="text-center">
                  <div className="relative mx-auto mb-5 aspect-square w-28 overflow-hidden rounded-full sm:w-32">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover"
                      sizes="128px"
                    />
                  </div>
                  <h3 className="font-display mb-2 text-2xl">{item.title}</h3>
                  <p className="text-base leading-relaxed text-ink-muted">
                    {item.description}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal delayMs={200}>
          <p className="font-display mt-16 text-center text-3xl text-ink italic md:text-4xl">
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
