import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/config";
import { seo } from "@/lib/seo";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: "Enlightened Coaching",
    description: seo.description,
    start_url: "/",
    display: "browser",
    background_color: "#BFE76A",
    theme_color: "#BFE76A",
    lang: "es",
  };
}
