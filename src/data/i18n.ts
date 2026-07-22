import es from './locales/es';
import en from './locales/en';

/**
 * Documento legal (privacidad, términos). `summary` alimenta la meta
 * description: cada página legal necesita la suya, no la del home.
 */
export type LegalDocument = {
    title: string;
    summary: string;
    intro: string;
    sections: {
        heading: string;
        body?: string;
        items?: { term?: string; text: string }[];
    }[];
};

export type LocaleSchema = {
    nav: {
        home: string;
        services: string;
        projects: string;
        contact: string;
        cta: string;
        openMenu: string;
        closeMenu: string;
    };
    hero: {
        eyebrow: string;
        title: string;
        titlePre: string;
        titleMark: string;
        titlePost: string;
        description: string;
        file: string;
        code: string[];
        statusBuilding: string;
        statusReady: string;
        output: string;
        secondary: string;
        scroll: string;
        chipA: string;
        chipB: string;
    };
    about: {
        eyebrow: string;
        title: string;
        tag: string;
        portLabel: string;
        commitment: {
            eyebrow: string;
            title: string;
            body: string;
            signature: string;
        };
        /** Orden fijo: confianza (000°), excelencia (090°), resiliencia (180°),
         *  innovación (270°) — las cartas del bento se mapean por posición. */
        values: {
            bearing: string;
            tagline: string;
            name: string;
            body: string;
        }[];
    };
    projects: {
        eyebrow: string;
        title: string;
        lead: string;
        /** Enlaza a la página que engloba todos los proyectos. */
        ctaAll: string;
        /** Slug localizado de la página que engloba los proyectos. */
        indexSlug: string;
        /** Texto del enlace al sitio en producción del cliente. */
        visit: string;
        /** Procedencia y fecha de las cifras: se citan, no se afirman. */
        metricsSource: string;
        /**
         * Reseña real del cliente. Se transcribe a mano a propósito: traerla
         * por la API de Places obligaría a no almacenarla (sus términos
         * prohíben cachear el contenido), y este sitio hornea el HTML en el
         * build. Se cita recortada —con elipsis— para no reproducir un desliz
         * de redacción del autor; el sentido queda intacto.
         */
        testimonial: {
            label: string;
            quote: string;
            author: string;
            /** Procedencia de la cita («Reseña en Google»). */
            source: string;
            /**
             * Enlace a las reseñas de la ficha. Google no da permalink a una
             * reseña suelta, así que apunta al listado completo. Si queda
             * vacío, la atribución se muestra sin enlace en vez de romperse.
             */
            sourceUrl: string;
            /** Aviso de traducción; vacío en el idioma original. */
            note: string;
        };
        /** El proyecto destacado en el Home. */
        featured: {
            client: string;
            tagline: string;
            summary: string;
            /** URL del sitio en producción. */
            url: string;
            /** La URL como se muestra en la barra del navegador simulado. */
            urlLabel: string;
            stack: string[];
            metrics: { label: string; value: string }[];
        };
    };
    /**
     * La PÁGINA de proyectos («la bitácora»). No repite el caso destacado —lo
     * toma de `projects`— sino que le añade el resto de lo que hay a bordo:
     * el producto propio, las plantillas y las automatizaciones.
     */
    projectsPage: {
        /** Título y descripción PROPIOS (nunca los del home: penaliza SEO). */
        metaTitle: string;
        metaDescription: string;
        eyebrow: string;
        title: string;
        lead: string;
        /** Índice del encabezado: cada asiento con su ancla en la página. */
        manifest: { idx: string; label: string; href: string }[];
        /** Rótulos compartidos por las fichas (voz mono). */
        labels: {
            status: string;
            stack: string;
            /** Enlace a la demo desplegada. */
            demo: string;
            /** Sustituto del enlace mientras la demo no exista. */
            demoSoon: string;
            /** Rótulo del hueco reservado a la captura. */
            shotSoon: string;
            /** Público al que apunta una plantilla. */
            audience: string;
            /** Lo que trae una automatización. */
            includes: string;
        };
        /** 01 · Lo entregado. El proyecto en sí vive en `projects.featured`. */
        delivered: {
            idx: string;
            eyebrow: string;
            title: string;
            lead: string;
            status: string;
        };
        /** 02 · El producto propio del estudio. */
        helio: {
            idx: string;
            eyebrow: string;
            name: string;
            tagline: string;
            status: string;
            summary: string;
            /** A qué talleres apunta de entrada. */
            scope: string;
            modules: { idx: string; name: string; body: string }[];
            stack: string[];
            /** Aviso de que todavía no hay capturas públicas. */
            note: string;
        };
        /** 03 · Las plantillas web. Estas SÍ reservan hueco para la captura. */
        templates: {
            idx: string;
            eyebrow: string;
            title: string;
            lead: string;
            items: {
                /** Clave estable (sirve de ancla y de id de la captura). */
                slug: string;
                kicker: string;
                name: string;
                body: string;
                audience: string[];
                /** Vacío mientras la demo no esté desplegada. */
                demoUrl: string;
            }[];
        };
        /** 04 · Las automatizaciones. Sin capturas: son piezas de maquinaria. */
        automations: {
            idx: string;
            eyebrow: string;
            title: string;
            lead: string;
            items: {
                slug: string;
                code: string;
                name: string;
                body: string;
                includes: string[];
                /** Vacío mientras la demo no esté desplegada. */
                demoUrl: string;
            }[];
        };
        /** El cierre: la salida hacia el formulario del footer. */
        closing: {
            eyebrow: string;
            title: string;
            body: string;
            cta: string;
        };
    };
    services: {
        eyebrow: string;
        title: string;
        lead: string;
        /** Enlaza a la página que engloba el catálogo completo. */
        ctaAll: string;
        /** Slug localizado de esa página. */
        indexSlug: string;
        /**
         * El servicio insignia: ocupa el ancho completo por encima de la
         * retícula. Es lo que el estudio hace de verdad a fondo, no el
         * primero de una lista de iguales.
         */
        featured: {
            /** Etiqueta mono sobre el título («servicio insignia»). */
            label: string;
            title: string;
            body: string;
            /**
             * CLAVES del registro de tecnologías (ver TECH en
             * sections/Services/Services.astro), no texto suelto: cada una
             * resuelve a su logotipo y a su nombre de marca. Los nombres no se
             * traducen —son marcas—, así que ambos idiomas listan lo mismo; se
             * mantienen aquí para que cada servicio se lea entero en un solo
             * sitio. Si una clave no existe en el registro, no se pinta.
             */
            stack: string[];
        };
        /** Los dos servicios de apoyo: texto corrido, sin tarjetas. */
        secondary: {
            title: string;
            body: string;
            /** Claves del registro de tecnologías (ver `featured.stack`). */
            stack: string[];
        }[];
        /**
         * Preguntas frecuentes. Alimentan a la vez el acordeón de la sección
         * y el nodo `FAQPage` del grafo (ver data/schema.ts): las respuestas
         * se publican como datos estructurados, así que son compromisos
         * reales, no texto de relleno.
         */
        faq: {
            eyebrow: string;
            title: string;
            items: { q: string; a: string }[];
        };
    };
    legal: {
        /** Etiqueta mono sobre el título del documento. */
        eyebrow: string;
        updatedLabel: string;
        /** Aviso visible mientras falten datos del responsable (ver data/legal.ts). */
        pendingNotice: string;
        privacy: LegalDocument;
        terms: LegalDocument;
    };
    notFound: {
        status: string;
        title: string;
        lead: string;
        cta: string;
        coords: string;
    };
    langNotice: {
        message: string;
        action: string;
        dismiss: string;
    };
    cookies: {
        message: string;
        accept: string;
        reject: string;
    };
    footer: {
        eyebrow: string;
        claim: string;
        lead: string;
        surface: string;
        colophon: string;
        rights: string;
        nav: string;
        legal: string;
        channels: string;
        privacy: string;
        privacySlug: string;
        terms: string;
        termsSlug: string;
        email: string;
        form: {
            name: string;
            namePlaceholder: string;
            email: string;
            emailPlaceholder: string;
            message: string;
            messagePlaceholder: string;
            cta: string;
        };
        success: string;
        messageSent: string;
        error: string;
        messageError: string;
        formReset: string;
    };
};

export const languages = {
    es: 'Español',
    en: 'English',
} as const;

export const defaultLang = 'es';

export const locales = { es, en } as const;

/**
 * Construye una ruta localizada. El idioma por defecto (es) vive en la raíz;
 * los demás bajo /<lang>. Sin redirecciones: cada idioma es una URL real.
 *   localizedPath('es')                -> '/'
 *   localizedPath('en')                -> '/en/'
 *   localizedPath('es', 'privacidad')  -> '/privacidad/'
 *   localizedPath('es', '#contact')    -> '/#contact'
 *   localizedPath('en', '#contact')    -> '/en/#contact'
 */
export function localizedPath(
    lang: keyof typeof locales,
    subpath = '',
): string {
    const base = lang === defaultLang ? '' : `/${lang}`;
    const clean = subpath.replace(/^\//, '');

    if (!clean) return `${base}/`;

    // Anclas y consultas cuelgan de la raíz del idioma: nunca barra final.
    if (clean.startsWith('#') || clean.startsWith('?')) {
        return `${base}/${clean}`;
    }

    // Rutas reales CON barra final: el SSG emite `/privacidad/index.html`, y
    // así las canónicas casan exactamente con lo que lista el sitemap (sin
    // barra, Google veía dos URLs distintas para la misma página).
    return `${base}/${clean}/`;
}

/**
 * Traduce un `pageName` (identificador interno y estable, p. ej. `privacy`)
 * al slug REAL de esa página en un idioma dado (`privacidad` en español).
 *
 * Sin esto las canónicas y los hreflang de las páginas legales apuntaban a
 * rutas inexistentes: se declaraba `/privacy/` cuando la ruta en español es
 * `/privacidad/`.
 */
export function pageSlug(
    lang: keyof typeof locales,
    pageName: string,
): string {
    switch (pageName) {
        case 'home':
            return '';
        case 'privacy':
            return locales[lang].footer.privacySlug;
        case 'terms':
            return locales[lang].footer.termsSlug;
        case 'projects':
            return locales[lang].projects.indexSlug;
        default:
            return pageName;
    }
}