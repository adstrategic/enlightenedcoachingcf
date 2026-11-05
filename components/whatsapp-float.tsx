import Image from "next/image";
import { siteConfig } from "@/lib/config";

export function WhatsAppFloat() {
  return (
    <a
      href={siteConfig.whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed right-4 bottom-4 z-50 inline-flex size-14 items-center justify-center overflow-hidden rounded-full shadow-[0_8px_24px_oklch(0.25_0.05_130/0.28)] transition-transform duration-200 ease-out hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink active:scale-95 sm:right-6 sm:bottom-6 sm:size-16"
    >
      <Image
        src="/wp-icon.png"
        alt=""
        width={64}
        height={64}
        className="size-full object-cover"
        priority
      />
    </a>
  );
}
