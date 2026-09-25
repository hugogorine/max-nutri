import type { MetadataRoute } from "next";

import { site } from "@/content/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${site.name} | ${site.specialty}`,
    short_name: site.name,
    description:
      "Acompanhamento nutricional individual para gestantes, do primeiro trimestre ao pós-parto.",
    start_url: "/",
    display: "browser",
    background_color: "#f8f5ef",
    theme_color: "#31483a",
    lang: "pt-BR",
    icons: [{ src: "/icon.svg", sizes: "any", type: "image/svg+xml" }],
  };
}
