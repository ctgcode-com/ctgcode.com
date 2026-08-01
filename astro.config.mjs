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

      /**
       * Las seis URL de las demos NO se listan aquí. Se construyen con
       * `PUBLIC_DEMO` y salen con `noindex`: simulan negocios que no existen y
       * un buscador podría tomarlas por fichas legítimas. Quien pide indexarse
       * es la página dedicada de cada plantilla en /plantillas/ (y su gemela en
       * /en/templates/), que son rutas reales y las recoge la integración sola.
       */
    }),
  ],
});
