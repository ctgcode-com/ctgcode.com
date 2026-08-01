import { siteConfig } from './site';
import { locales, localizedPath, pageSlug } from './i18n';

/**
 * Datos estructurados (JSON-LD, schema.org).
 *
 * Sirven a dos públicos a la vez:
 *  - Buscadores clásicos: identifican la entidad, el nombre del sitio que se
 *    muestra en el resultado y la jerarquía de páginas.
 *  - Motores generativos / asistentes (GEO · AIO): un grafo explícito les
 *    evita adivinar qué es CTG Code, dónde opera y cómo contactarlo.
 *
 * Todo lo declarado aquí es información REAL y ya pública en el sitio.
 */

const ORG_ID = `${siteConfig.url}/#organization`;
const SITE_ID = `${siteConfig.url}/#website`;

/** Perfiles oficiales (los mismos que enlaza el footer). */
const SAME_AS = [
  'https://www.instagram.com/ctgcode/',
  'https://www.facebook.com/ctgcode',
  'https://www.linkedin.com/company/ctgcode/',
];

/**
 * Materias que domina el estudio. No es relleno: es lo que permite a un motor
 * generativo responder «¿quién hace X en Cartagena?» con esta ficha.
 */
const KNOWS_ABOUT = [
  'Desarrollo de software a la medida',
  'Desarrollo web de alto rendimiento',
  'Aplicaciones web',
  'Arquitectura de software',
  'Automatización de procesos',
  'Integraciones y APIs',
];

/**
 * `pageName` → clave de la plantilla en el locale. Es lo que permite al grafo
 * saber que una página es la ficha de una plantilla (y no una vista suelta):
 * de ahí salen su FAQ, su oferta y su miga de tres niveles.
 */
const TEMPLATE_PAGES = {
  'template-professional-services': 'professionalServices',
  'template-local-business': 'localBusiness',
  'template-startup-product': 'startupProduct',
} as const;

type TemplatePageName = keyof typeof TEMPLATE_PAGES;

/**
 * Slug de la ficha corta en `/proyectos/` → `pageName` de su página dedicada,
 * en los dos idiomas (los slugs viven en `projectsPage.templates.items`). Sin
 * este puente, el ItemList de la bitácora seguiría apuntando a anclas de sí
 * misma en vez de a las URL que queremos que se indexen y se citen. Si un slug
 * no está aquí, quien llama vuelve al ancla: se degrada, no se rompe.
 */
const TEMPLATE_SLUG_TO_PAGE: Record<string, TemplatePageName | undefined> = {
  'servicios-profesionales': 'template-professional-services',
  'professional-services': 'template-professional-services',
  'negocios-locales': 'template-local-business',
  'local-business': 'template-local-business',
  'startups-productos': 'template-startup-product',
  'startups-products': 'template-startup-product',
};

function isTemplatePage(pageName: string): pageName is TemplatePageName {
  return pageName in TEMPLATE_PAGES;
}

function templateOf(lang: keyof typeof locales, pageName: TemplatePageName) {
  return locales[lang].templates.pages[TEMPLATE_PAGES[pageName]];
}

interface PageSchemaInput {
  lang: keyof typeof locales;
  pageName: string;
  canonicalUrl: string;
  title: string;
  description: string;
  ogImageUrl: string;
  /** Las páginas fuera del índice no aportan nada al grafo. */
  noindex: boolean;
}

/** La organización: la ficha de identidad de CTG Code. */
function organization() {
  return {
    '@type': 'Organization',
    '@id': ORG_ID,
    name: siteConfig.name,
    url: `${siteConfig.url}/`,
    logo: {
      '@type': 'ImageObject',
      url: `${siteConfig.url}/images/brand/logo.png`,
      width: 800,
      height: 800,
    },
    image: `${siteConfig.url}/images/brand/logo.png`,
    description: locales.es.hero.description,
    slogan: locales.es.hero.title,
    foundingDate: '2026',
    founder: {
      '@type': 'Person',
      name: siteConfig.author,
    },
    email: `mailto:contacto@ctgcode.com`,
    telephone: '+573052532602',
    // Solo ciudad: el estudio trabaja en remoto y no recibe clientes en un
    // local, así que declarar una calle sería falso.
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Cartagena de Indias',
      addressRegion: 'Bolívar',
      addressCountry: 'CO',
    },
    areaServed: [
      { '@type': 'Country', name: 'Colombia' },
      { '@type': 'Place', name: 'Worldwide' },
    ],
    knowsAbout: KNOWS_ABOUT,
    sameAs: SAME_AS,
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'customer service',
        email: 'contacto@ctgcode.com',
        telephone: '+573052532602',
        availableLanguage: ['es', 'en'],
        areaServed: 'Worldwide',
      },
    ],
  };
}

/** El sitio: de aquí sale el NOMBRE que Google muestra sobre el resultado. */
function website(lang: keyof typeof locales) {
  return {
    '@type': 'WebSite',
    '@id': SITE_ID,
    url: `${siteConfig.url}/`,
    name: siteConfig.name,
    description: locales[lang].hero.description,
    inLanguage: lang === 'es' ? 'es-CO' : 'en',
    publisher: { '@id': ORG_ID },
  };
}

/** Navegación principal: ayuda a Google a entender la estructura del sitio. */
function siteNavigation(lang: keyof typeof locales) {
  const t = locales[lang];
  const home = localizedPath(lang);

  return {
    '@type': 'SiteNavigationElement',
    '@id': `${siteConfig.url}/#navigation`,
    name: [t.nav.home, t.nav.services, t.nav.contact],
    url: [
      `${siteConfig.url}${home}`,
      `${siteConfig.url}${home}#services`,
      `${siteConfig.url}${home}#contact`,
    ],
  };
}

/**
 * Preguntas frecuentes de la Home, tomadas TAL CUAL del acordeón de la
 * sección de servicios: lo que se publica como dato estructurado es lo mismo
 * que lee una persona, nunca una versión "para el robot".
 *
 * Aviso realista sobre el resultado esperado: desde 2023 Google reserva el
 * rich result visual de FAQ a sitios gubernamentales y de salud, así que este
 * nodo NO va a pintar el acordeón en la SERP de un estudio de software. Se
 * declara igual porque cumple el otro propósito del grafo (ver cabecera): dar
 * a los motores generativos respuestas atribuibles sobre plazos, costos,
 * stack, soporte y cobertura, en lugar de dejar que las improvisen.
 */
function faqPage(
  lang: keyof typeof locales,
  canonicalUrl: string,
  name: string,
  items: { q: string; a: string }[],
) {
  return {
    '@type': 'FAQPage',
    '@id': `${canonicalUrl}#faq`,
    url: canonicalUrl,
    name,
    inLanguage: lang === 'es' ? 'es-CO' : 'en',
    isPartOf: { '@id': SITE_ID },
    about: { '@id': ORG_ID },
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  };
}

/**
 * Extrae los importes de una cadena de precio ya formateada («$1.400.000 –
 * $2.000.000 COP»). Se PARSEA en vez de duplicar los números en el locale a
 * propósito: dos copias del mismo dato acaban divergiendo en silencio, y aquí
 * la cadena visible es la única fuente. Si el formato cambia y deja de haber
 * dos importes, quien llama se queda sin oferta en vez de publicar una falsa.
 */
function priceRange(formatted: string): [number, number] | null {
  const amounts = (formatted.match(/\d[\d.,]*/g) ?? [])
    .map((token) => Number(token.replace(/[.,]/g, '')))
    .filter((n) => Number.isFinite(n) && n > 0);

  if (amounts.length < 2) return null;
  return [Math.min(...amounts), Math.max(...amounts)];
}

/**
 * La plantilla como SERVICIO con su oferta. `Service` y no `Product` porque lo
 * que se contrata es un encargo —montar y publicar el sitio—, no un artículo
 * con existencias.
 *
 * Se declaran DOS ofertas, una por moneda, porque el precio en pesos es el que
 * rige y el de dólares es la conversión que también se publica. Si alguna
 * cadena dejara de tener dos importes, esa oferta simplemente no se emite.
 */
function templateService(
  lang: keyof typeof locales,
  pageName: TemplatePageName,
  canonicalUrl: string,
) {
  const t = templateOf(lang, pageName);
  const cop = priceRange(t.price.cop);
  const usd = priceRange(t.price.usd);

  const offers = [
    cop ? { currency: 'COP', range: cop } : null,
    usd ? { currency: 'USD', range: usd } : null,
  ]
    .filter((o) => o !== null)
    .map((o) => ({
      '@type': 'AggregateOffer',
      priceCurrency: o.currency,
      lowPrice: o.range[0],
      highPrice: o.range[1],
      availability: 'https://schema.org/InStock',
      seller: { '@id': ORG_ID },
    }));

  return {
    '@type': 'Service',
    '@id': `${canonicalUrl}#service`,
    name: t.metaTitle,
    description: t.metaDescription,
    serviceType: t.crumb,
    url: canonicalUrl,
    provider: { '@id': ORG_ID },
    areaServed: [
      { '@type': 'Country', name: 'Colombia' },
      { '@type': 'Place', name: 'Worldwide' },
    ],
    availableLanguage: ['es', 'en'],
    ...(offers.length ? { offers } : {}),
  };
}

/**
 * El inventario de la bitácora: lo entregado, el producto propio, las
 * plantillas y las automatizaciones, en el MISMO orden en que se leen en la
 * página. Se declara lo que ya está publicado ahí —nombre y descripción—, sin
 * inventar precios ni disponibilidad que el sitio no afirma.
 */
function projectsItemList(
  lang: keyof typeof locales,
  canonicalUrl: string,
) {
  const t = locales[lang].projectsPage;
  const featured = locales[lang].projects.featured;

  const entries: { name: string; description: string; url?: string }[] = [
    {
      name: featured.client,
      description: featured.tagline,
      url: featured.url,
    },
    { name: t.helio.name, description: t.helio.tagline },
    // Las plantillas ya NO apuntan a un ancla de esta misma página: cada una
    // tiene su URL propia, que es la que debe listarse y citarse.
    ...t.templates.items.map((item) => {
      const pageName = TEMPLATE_SLUG_TO_PAGE[item.slug];
      return {
        name: item.name,
        description: item.body,
        url: pageName
          ? `${siteConfig.url}${localizedPath(lang, pageSlug(lang, pageName))}`
          : `${canonicalUrl}#${item.slug}`,
      };
    }),
    ...t.automations.items.map((item) => ({
      name: item.name,
      description: item.body,
      url: `${canonicalUrl}#${item.slug}`,
    })),
  ];

  return {
    '@type': 'ItemList',
    '@id': `${canonicalUrl}#projects`,
    name: t.title,
    itemListOrder: 'https://schema.org/ItemListOrderAscending',
    numberOfItems: entries.length,
    itemListElement: entries.map((entry, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: entry.name,
      description: entry.description,
      ...(entry.url ? { url: entry.url } : {}),
    })),
  };
}

/**
 * Tipo de página según su papel. schema.org tiene tipos específicos para los
 * documentos legales: usarlos es más preciso que un `WebPage` genérico.
 */
function webPageType(pageName: string): string {
  switch (pageName) {
    case 'home':
      return 'WebPage';
    case 'privacy':
      return 'PrivacyPolicyPage';
    case 'terms':
      return 'TermsOfServicePage';
    // La bitácora no describe UNA cosa: enumera todo lo que hay a bordo.
    case 'projects':
      return 'CollectionPage';
    // La carta de servicios tampoco: enumera el catálogo de lo que hacemos.
    case 'services':
      return 'CollectionPage';
    default:
      return 'WebPage';
  }
}

/** Migas: home → página actual (solo cuando no es la propia home). */
function breadcrumb(
  lang: keyof typeof locales,
  pageName: string,
  canonicalUrl: string,
  title: string,
) {
  if (pageName === 'home') return null;

  // El título de la pestaña viene como «Página — CTG Code»; la miga solo
  // quiere el nombre de la página («Proyectos»), no la coletilla de la marca.
  const crumbName = title.split(' — ')[0];

  /* Las páginas de plantilla NO cuelgan del inicio: viven bajo la bitácora, y
     así lo dice también el hero. La miga tiene tres niveles y el del medio
     tiene que existir de verdad. */
  const t = locales[lang];
  const middle = isTemplatePage(pageName)
    ? {
        '@type': 'ListItem',
        position: 2,
        name: t.templates.parentCrumb,
        item: `${siteConfig.url}${localizedPath(lang, pageSlug(lang, 'projects'))}`,
      }
    : null;

  const trail = [
    {
      '@type': 'ListItem',
      position: 1,
      name: t.nav.home,
      item: `${siteConfig.url}${localizedPath(lang)}`,
    },
    ...(middle ? [middle] : []),
    {
      '@type': 'ListItem',
      position: middle ? 3 : 2,
      name: isTemplatePage(pageName)
        ? templateOf(lang, pageName).crumb
        : crumbName,
      item: canonicalUrl,
    },
  ];

  return {
    '@type': 'BreadcrumbList',
    '@id': `${canonicalUrl}#breadcrumb`,
    itemListElement: trail,
  };
}

/**
 * Construye el grafo completo de la página. Se devuelve `null` en las páginas
 * fuera del índice (404): no tiene sentido describirlas.
 */
export function buildSchema({
  lang,
  pageName,
  canonicalUrl,
  title,
  description,
  ogImageUrl,
  noindex,
}: PageSchemaInput): string | null {
  if (noindex) return null;

  const crumbs = breadcrumb(lang, pageName, canonicalUrl, title);

  const page: Record<string, unknown> = {
    '@type': webPageType(pageName),
    '@id': `${canonicalUrl}#webpage`,
    url: canonicalUrl,
    name: title,
    description,
    inLanguage: lang === 'es' ? 'es-CO' : 'en',
    isPartOf: { '@id': SITE_ID },
    about: { '@id': ORG_ID },
    primaryImageOfPage: {
      '@type': 'ImageObject',
      url: ogImageUrl,
      width: 1200,
      height: 630,
    },
  };

  if (crumbs) page.breadcrumb = { '@id': crumbs['@id'] };

  const graph: unknown[] = [
    organization(),
    website(lang),
    siteNavigation(lang),
    page,
  ];

  if (crumbs) graph.push(crumbs);

  /* Las FAQ se declaran SOLO donde el acordeón existe de verdad, y con el
     mismo texto que lee una persona: la Home (las del Home) y cada página de
     plantilla (las suyas). Declararlas en otra URL sería describir un
     contenido que allí no está. */
  if (pageName === 'home') {
    const faq = locales[lang].services.faq;
    graph.push(faqPage(lang, canonicalUrl, faq.title, faq.items));
  }

  if (isTemplatePage(pageName)) {
    const tpl = templateOf(lang, pageName);
    const faq = faqPage(lang, canonicalUrl, tpl.faq.title, tpl.faq.items);
    const service = templateService(lang, pageName, canonicalUrl);

    // Lo que la página describe es la plantilla; la FAQ es contenido suyo.
    page.mainEntity = { '@id': service['@id'] };
    graph.push(service, faq);
  }

  // El inventario solo existe en la bitácora.
  if (pageName === 'projects') {
    const list = projectsItemList(lang, canonicalUrl);
    page.mainEntity = { '@id': list['@id'] };
    graph.push(list);
  }

  // Se escapa `<` para que el JSON no pueda cerrar el <script> que lo aloja.
  return JSON.stringify({ '@context': 'https://schema.org', '@graph': graph })
    .replace(/</g, '\\u003c');
}

/** Alias de página → slug real, reexportado por comodidad del Layout. */
export { pageSlug };
