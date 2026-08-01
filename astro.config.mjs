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

/**
 * `/plantillas/` y `/en/templates/` a secas no son páginas: solo el prefijo del
 * que cuelgan las tres fichas. No los enlaza nadie y no están en el sitemap,
 * pero quien recorte la URL a mano llegaría a un 404 sin salida. Se resuelven
 * llevándolo a la sección de plantillas de la bitácora, que es donde vive el
 * índice real.
 *
 * En SSG, Astro emite una página con `meta refresh` y su canónica al destino
 * (GitHub Pages no sabe responder un 301). Google la trata como redirección y
 * consolida, así que para una ruta sin enlaces entrantes basta y sobra —y a
 * cambio la regla vive versionada aquí, no en un panel aparte.
 *
 * Las anclas salen del `manifest` de cada idioma; no se escriben a mano.
 */
const templatesHubAnchor = (locale) =>
  locale.projectsPage.manifest.find((m) => m.href === "#plantillas")?.href ??
  locale.projectsPage.manifest.find((m) => m.href === "#templates")?.href ??
  "";

export default defineConfig({
  output: "static",

  redirects: {
    "/plantillas": `/${es.projects.indexSlug}/${templatesHubAnchor(es)}`,
    "/en/templates": `/en/${en.projects.indexSlug}/${templatesHubAnchor(en)}`,
  },

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
