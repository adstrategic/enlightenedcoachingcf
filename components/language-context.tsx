"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import {
  defaultLocale,
  dictionaries,
  type Dictionary,
  type Locale,
} from "@/content/i18n";

type LanguageContextValue = {
  locale: Locale;
  t: Dictionary;
  setLocale: (locale: Locale) => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

const STORAGE_KEY = "ec-locale";

function isLocale(value: string | null): value is Locale {
  return value === "es" || value === "en";
}

function readLocale(): Locale {
  const stored = window.localStorage.getItem(STORAGE_KEY);
  return isLocale(stored) ? stored : defaultLocale;
}

function subscribe(onStoreChange: () => void) {
  const handler = (event: StorageEvent) => {
    if (event.key === STORAGE_KEY || event.key === null) {
      onStoreChange();
    }
  };
  window.addEventListener("storage", handler);
  window.addEventListener("ec-locale-change", onStoreChange);
  return () => {
    window.removeEventListener("storage", handler);
    window.removeEventListener("ec-locale-change", onStoreChange);
  };
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const locale = useSyncExternalStore(subscribe, readLocale, () => defaultLocale);
  const dictionary = dictionaries[locale];

  useEffect(() => {
    document.documentElement.lang = locale;
    document.title = dictionary.meta.title;
    const description = document.querySelector('meta[name="description"]');
    if (description) {
      description.setAttribute("content", dictionary.meta.description);
    }
  }, [locale, dictionary.meta.title, dictionary.meta.description]);

  const setLocale = useCallback((next: Locale) => {
    window.localStorage.setItem(STORAGE_KEY, next);
    window.dispatchEvent(new Event("ec-locale-change"));
  }, []);

  const value = useMemo(
    () => ({
      locale,
      t: dictionary,
      setLocale,
    }),
    [locale, dictionary, setLocale],
  );

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return ctx;
}
