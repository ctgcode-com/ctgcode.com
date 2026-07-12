import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  output: "static",

  site: "https://ctgcode.com",
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: "es",
        locales: {
          es: "es",
          en: "en",
        },
      },
    }),
  ],
});
