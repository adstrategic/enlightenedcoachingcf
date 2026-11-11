"use client";

import { siteConfig } from "@/lib/config";
import { useLanguage } from "./language-context";
import { Reveal } from "./reveal";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer id="contacto">
      <section className="bg-lime px-[4vw] py-20 text-center text-ink">
        <Reveal>
          <h2 className="font-display mb-4 text-4xl md:text-5xl">
            {t.contact.ready}
          </h2>
          <div className="mx-auto mb-8 flex max-w-lg flex-col items-center gap-2 text-lg text-ink-muted">
            <a
              href={siteConfig.phoneHref}
              className="underline decoration-ink/30 underline-offset-4 transition-colors hover:text-ink"
            >
              {siteConfig.phone}
            </a>
            <a
              href={siteConfig.emailHref}
              className="underline decoration-ink/30 underline-offset-4 transition-colors hover:text-ink"
            >
              {siteConfig.email}
            </a>
          </div>
          <a
            href={siteConfig.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-pill"
          >
            {t.nav.cta}
          </a>
        </Reveal>
      </section>

      <div className="bg-white px-[4vw] py-16">
        <div className="mx-auto grid max-w-[1100px] gap-10 md:grid-cols-3">
          <div>
            <p className="font-display mb-2 text-2xl text-ink">
              {t.footer.stay}
            </p>
            <p className="text-base text-ink-muted">{t.footer.rights}</p>
          </div>

          <div>
            <p className="font-display mb-3 text-2xl text-ink">
              {t.footer.questions}
            </p>
            <p className="mb-2 text-base">
              <span className="text-ink-muted">{t.contact.phone}: </span>
              <a
                href={siteConfig.phoneHref}
                className="text-accent underline decoration-accent/60 underline-offset-4"
              >
                {siteConfig.phone}
              </a>
            </p>
            <p className="text-base">
              <span className="text-ink-muted">{t.contact.email}: </span>
              <a
                href={siteConfig.emailHref}
                className="text-accent underline decoration-accent/60 underline-offset-4"
              >
                {siteConfig.email}
              </a>
            </p>
          </div>

          <nav className="font-nav flex flex-col gap-2 text-base text-accent">
            <a href="#inicio" className="underline underline-offset-4">
              {t.nav.home}
            </a>
            <a href="#areas" className="underline underline-offset-4">
              {t.nav.areas}
            </a>
            <a href="#sobre" className="underline underline-offset-4">
              {t.nav.about}
            </a>
            <a
              href={siteConfig.blogUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4"
            >
              {t.nav.blog}
            </a>
            <a href="#contacto" className="underline underline-offset-4">
              {t.nav.contact}
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
