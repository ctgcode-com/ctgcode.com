import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import { legalDataPending } from "./src/data/legal";
import es from "./src/data/locales/es";
import en from "./src/data/locales/en";

/**
 * Las cuatro URL de los documentos legales, derivadas de los mismos slugs que
 * usan el Layout y el pie de página (nunca escritas a mano aquí).
 */
const LEGAL_URLS = new Set([
  `https://ctgcode.com/${es.footer.privacySlug}/`,
  `https://ctgcode.com/${es.footer.termsSlug}/`,
  `https://ctgcode.com/en/${en.footer.privacySlug}/`,
  `https://ctgcode.com/en/${en.footer.termsSlug}/`,
]);

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
      /**
       * Mientras falten los datos del responsable, los documentos legales ya
       * salen del índice desde el Layout (`legalDataPending` → `noindex`).
       * Sin este filtro seguían listados aquí, así que el sitio pedía indexar
       * en el sitemap lo que prohibía indexar en la propia página.
       */
      filter: (page) => !(legalDataPending && LEGAL_URLS.has(page)),

      customPages: [
        "https://ctgcode.com/plantilla-negocio-local/",
        "https://ctgcode.com/en/template-local-business/",
        "https://ctgcode.com/plantilla-servicios-profesionales/",
        "https://ctgcode.com/en/template-professional-services/",
        "https://ctgcode.com/plantilla-producto-startup/",
        "https://ctgcode.com/en/template-startup-product/",
      ],
      serialize(item) {
        // Asignar hreflang cruzado para la plantilla de negocio local
        if (
          item.url === "https://ctgcode.com/plantilla-negocio-local/" ||
          item.url === "https://ctgcode.com/en/template-local-business/"
        ) {
          item.links = [
            { url: "https://ctgcode.com/plantilla-negocio-local/", lang: "es" },
            {
              url: "https://ctgcode.com/en/template-local-business/",
              lang: "en",
            },
          ];
        }

        // Asignar hreflang cruzado para la plantilla de servicios profesionales
        if (
          item.url ===
            "https://ctgcode.com/plantilla-servicios-profesionales/" ||
          item.url === "https://ctgcode.com/en/template-professional-services/"
        ) {
          item.links = [
            {
              url: "https://ctgcode.com/plantilla-servicios-profesionales/",
              lang: "es",
            },
            {
              url: "https://ctgcode.com/en/template-professional-services/",
              lang: "en",
            },
          ];
        }

        // Asignar hreflang cruzado para la plantilla de producto startup
        if (
          item.url === "https://ctgcode.com/plantilla-producto-startup/" ||
          item.url === "https://ctgcode.com/en/template-startup-product/"
        ) {
          item.links = [
            {
              url: "https://ctgcode.com/plantilla-producto-startup/",
              lang: "es",
            },
            {
              url: "https://ctgcode.com/en/template-startup-product/",
              lang: "en",
            },
          ];
        }

        return item;
      },
    }),
  ],
});
