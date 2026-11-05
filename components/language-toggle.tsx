"use client";

import { useLanguage } from "./language-context";
import type { Locale } from "@/content/i18n";

type LanguageToggleProps = {
  /** `light` = dark ink on lime/white; `dark` = white on slate */
  tone?: "light" | "dark";
};

export function LanguageToggle({ tone = "dark" }: LanguageToggleProps) {
  const { locale, setLocale } = useLanguage();

  const options: Locale[] = ["es", "en"];
  const onLight = tone === "light";

  return (
    <div
      className={`font-nav inline-flex items-center gap-1 rounded-full border px-1.5 py-1 text-xs tracking-wide backdrop-blur-sm ${
        onLight
          ? "border-ink/20 bg-white/35 text-ink"
          : "border-white/35 bg-black/15 text-white"
      }`}
      role="group"
      aria-label="Language"
    >
      {options.map((option) => {
        const active = option === locale;
        return (
          <button
            key={option}
            type="button"
            onClick={() => setLocale(option)}
            className={`rounded-full px-2.5 py-1 uppercase transition-colors ${
              active
                ? onLight
                  ? "bg-ink text-white"
                  : "bg-lime text-ink"
                : onLight
                  ? "text-ink/75 hover:text-ink"
                  : "text-white/85 hover:text-white"
            }`}
            aria-pressed={active}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
}
