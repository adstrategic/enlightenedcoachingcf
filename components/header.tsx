"use client";

import { useEffect, useState } from "react";
import { siteConfig } from "@/lib/config";
import { useLanguage } from "./language-context";
import { LanguageToggle } from "./language-toggle";

type NavLink = {
  href: string;
  label: string;
  external?: boolean;
};

export function Header() {
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links: NavLink[] = [
    { href: "#inicio", label: t.nav.home },
    { href: "#areas", label: t.nav.areas },
    { href: "#proposito", label: t.nav.purpose },
    { href: "#sesiones", label: t.nav.sessions },
    { href: "#sobre", label: t.nav.about },
    { href: siteConfig.blogUrl, label: t.nav.blog, external: true },
    { href: "#agenda", label: t.nav.contact },
  ];

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 text-ink transition-[background-color,backdrop-filter,box-shadow] duration-300 ${
        solid
          ? "bg-lime/95 shadow-[0_8px_24px_oklch(0.25_0.05_130/0.12)] backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-4 px-[4vw] py-4">
        <a
          href="#inicio"
          className="font-display min-w-0 truncate text-sm tracking-[0.14em] uppercase sm:text-base"
        >
          Enlightened Coaching
        </a>

        <nav className="font-nav hidden items-center gap-5 text-[0.92rem] lg:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="opacity-90 transition-opacity hover:opacity-100"
              {...(link.external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <LanguageToggle tone="light" />
          <a href="#agenda" className="btn-pill hidden lg:inline-flex">
            {t.nav.cta}
          </a>
          <button
            type="button"
            className="font-nav inline-flex h-10 w-10 items-center justify-center rounded-full border border-ink/30 lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Menu</span>
            <span className="flex w-4 flex-col gap-1.5">
              <span className="block h-px w-full bg-current" />
              <span className="block h-px w-full bg-current" />
            </span>
          </button>
        </div>
      </div>

      {open ? (
        <div
          id="mobile-nav"
          className="border-t border-ink/10 bg-lime px-[4vw] py-4 lg:hidden"
        >
          <nav className="font-nav flex flex-col gap-3 text-base text-ink">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="py-1"
                {...(link.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#agenda"
              className="btn-pill mt-2 w-full"
              onClick={() => setOpen(false)}
            >
              {t.nav.cta}
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
