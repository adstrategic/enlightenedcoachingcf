"use client";

import { siteConfig } from "@/lib/config";
import { useLanguage } from "./language-context";
import { Reveal } from "./reveal";
import { WaveDivider } from "./wave-divider";

export function Booking() {
  const { t } = useLanguage();

  return (
    <section id="agenda" className="relative bg-lime px-[4vw] py-24 text-ink md:py-28">
      <div className="mx-auto max-w-[960px]">
        <Reveal>
          <div className="mb-10 text-center">
            <h2 className="font-display mb-4 text-3xl md:text-4xl">
              {t.booking.title}
            </h2>
            <p className="text-ink-muted">{t.booking.body}</p>
          </div>
        </Reveal>

        <Reveal delayMs={80}>
          <div className="overflow-hidden rounded-2xl bg-white shadow-[0_12px_40px_oklch(0.25_0.05_130/0.18)]">
            <iframe
              src={`${siteConfig.calUrl}${siteConfig.calUrl.includes("?") ? "&" : "?"}embed=true`}
              title={t.booking.iframeTitle}
              className="h-[720px] w-full border-0"
              loading="lazy"
              allow="payment *"
            />
          </div>
        </Reveal>
      </div>

      <div className="absolute inset-x-0 bottom-0 translate-y-[99%]">
        <WaveDivider fill="var(--lime)" />
      </div>
    </section>
  );
}
