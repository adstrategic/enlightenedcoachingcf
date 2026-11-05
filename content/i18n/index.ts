import { en } from "./en";
import { es } from "./es";
import type { Dictionary, Locale } from "./types";

export type { Dictionary, Locale };

export const dictionaries: Record<Locale, Dictionary> = {
  es,
  en,
};

export const defaultLocale: Locale = "es";
