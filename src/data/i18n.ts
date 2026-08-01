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

/**
 * Una de las tres PÁGINAS DEDICADAS a una plantilla (`/plantillas/...` y su
 * gemela `/en/templates/...`).
 *
 * Existen porque las demos salieron del índice: simulan negocios que no
 * existen y un buscador podría tomarlas por fichas legítimas. La demo sigue
 * siendo la prueba —se enlaza desde aquí—, pero quien posiciona, se comparte y
 * puede citar un asistente es esta página.
 *
 * NO repite a `/proyectos/`: allí cada plantilla ocupa una tarjeta corta; aquí
 * se abre entera (qué trae dentro, hasta dónde llega, qué incluye el encargo,
 * precio, plazo y sus propias preguntas).
 */
export type TemplatePage = {
    /**
     * Slug REAL y localizado, con su carpeta: `plantillas/negocio-local` en
     * español, `templates/local-business` en inglés (a este último
     * `localizedPath` le antepone `/en`). De aquí lo toma `pageSlug`, así que
     * canónica, hreflang y sitemap salen todos del mismo sitio. El prefijo es
     * `plantillas`/`templates` a propósito: no puede confundirse con la URL de
     * la demo (`/plantilla-negocio-local/`).
     */
    slug: string;
    /** Título y descripción PROPIOS (nunca los del home: penaliza SEO). */
    metaTitle: string;
    metaDescription: string;
    /** Nombre corto para la última miga de pan. */
    crumb: string;
    eyebrow: string;
    title: string;
    /** Trozo del título que recibe el acento (gradiente de atardecer). */
    titleMark: string;
    lead: string;
    /** Índice de la portada: cada tramo con su ancla en la página. */
    manifest: { idx: string; label: string; href: string }[];
    /** Ruta de la demo desplegada. Fuera del índice, pero enlazable. */
    demoUrl: string;
    /** Ficha rápida al margen de la portada (voz mono). */
    facts: { label: string; value: string }[];
    /** Para quién es: cada perfil con la objeción concreta que trae. */
    audience: {
        idx: string;
        eyebrow: string;
        title: string;
        lead: string;
        items: { who: string; pain: string }[];
    };
    /** Qué trae por dentro: el inventario REAL de secciones de la plantilla. */
    inside: {
        idx: string;
        eyebrow: string;
        title: string;
        lead: string;
        /** Texto alternativo de la captura de página completa. */
        shotAlt: string;
        sections: { idx: string; name: string; body: string }[];
        /**
         * CLAVES del registro de tecnologías (`data/tech.ts`), no texto
         * suelto: cada una resuelve a su logotipo y a su nombre de marca. Los
         * nombres no se traducen —son marcas—, así que ambos idiomas listan lo
         * mismo. Ojo: si una clave no existe en el registro, la lista entera
         * cae a etiquetas de texto (nunca un logo suelto junto a palabras).
         *
         * Son las tecnologías DE LA PLANTILLA, que no son las del sitio: aquí
         * sí hay Tailwind, y es correcto.
         */
        stack: string[];
        /** Lo que no es una marca con logotipo y sí conviene decir. */
        stackNote: string;
    };
    /**
     * El respaldo. Con `url` y `metrics` llenos se pinta el caso real en
     * producción; vacíos, solo el texto. No se inventan casos: hoy únicamente
     * la de servicios profesionales tiene uno (Recogras).
     */
    proof: {
        idx: string;
        eyebrow: string;
        title: string;
        body: string;
        url: string;
        urlLabel: string;
        metrics: { label: string; value: string }[];
        /** Procedencia y fecha de las cifras: se citan, no se afirman. */
        metricsSource: string;
    };
    /** Precio y plazo. El precio en pesos es el que rige; el dólar es referencia. */
    price: {
        cop: string;
        usd: string;
        /** Nota sobre la conversión y su fecha. */
        usdNote: string;
        delivery: string;
        /** Desde cuándo cuenta el plazo (pago confirmado + materiales). */
        deliveryNote: string;
    };
    /**
     * Preguntas frecuentes PROPIAS de esta plantilla. Alimentan a la vez el
     * acordeón y el nodo `FAQPage` de ESTA URL (ver data/schema.ts): lo que
     * lee una persona y lo que lee un robot son el mismo texto. No repiten las
     * del inicio, y son compromisos reales.
     */
    faq: {
        idx: string;
        eyebrow: string;
        title: string;
        items: { q: string; a: string }[];
    };
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
            /**
             * Enlace a la PÁGINA dedicada de una plantilla. Las fichas de
             * plantilla ya no llevan a la demo: llevan aquí, y la demo se
             * enlaza desde dentro.
             */
            detail: string;
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
    /**
     * La PÁGINA de servicios («la carta»). NO repite la sección del Home: va
     * más a fondo. La sección enseña el mapa (tres servicios en una línea y las
     * preguntas); esta página abre la carta entera —cada servicio con lo que
     * incluye y para quién es—, añade CÓMO trabajamos (las fases) y los
     * COMPROMISOS. Contenido propio, no un envoltorio de `services`.
     */
    servicesPage: {
        /** Título y descripción PROPIOS (nunca los del home: penaliza SEO). */
        metaTitle: string;
        metaDescription: string;
        eyebrow: string;
        title: string;
        /** Trozo del título que recibe el acento (gradiente de atardecer). */
        titleMark: string;
        lead: string;
        /** Rótulos mono compartidos por las fichas. */
        labels: {
            deliverables: string;
            forWho: string;
            stack: string;
        };
        /** Índice de la portada: cada tramo con su ancla en la página. */
        manifest: { idx: string; label: string; href: string }[];
        /**
         * El catálogo. Cada servicio se lee A FONDO —cuerpo largo, lo que
         * incluye y a quién apunta—, no en la línea suelta de la sección.
         */
        catalog: {
            idx: string;
            /** Clave corta de tres letras (voz de inventario: SFT, WEB, AUT). */
            code: string;
            name: string;
            /** Una línea que resume la promesa del servicio. */
            tagline: string;
            body: string;
            /** Qué recibe el cliente (entregables reales del servicio). */
            deliverables: string[];
            /** Para quién es (perfiles/encargos típicos). */
            forWho: string[];
            /** CLAVES del registro de tecnologías (ver TECH en el componente). */
            stack: string[];
        }[];
        /** Cómo trabajamos: las fases, de la idea a producción, por hitos. */
        process: {
            idx: string;
            eyebrow: string;
            titlePre: string;
            titlePost: string;
            lead: string;
            steps: { idx: string; name: string; body: string }[];
        };
        /** Compromisos: cómo respondemos por el trabajo (hechos, no adornos). */
        commitments: {
            idx: string;
            eyebrow: string;
            title: string;
            lead: string;
            items: { code: string; title: string; body: string }[];
        };
        /** El cierre: la salida hacia el formulario del footer (#contact). */
        closing: {
            eyebrow: string;
            title: string;
            body: string;
            cta: string;
        };
    };
    /**
     * Las tres páginas dedicadas a las plantillas. Lo COMERCIAL es común a las
     * tres —el encargo se contrata igual sea cual sea la base—, así que vive
     * una sola vez aquí; lo que cambia de una plantilla a otra vive en `pages`.
     */
    templates: {
        /** Miga intermedia: las tres cuelgan de la bitácora (/proyectos/). */
        parentCrumb: string;
        /** Rótulos mono compartidos. */
        labels: {
            demo: string;
            audience: string;
            stack: string;
            sections: string;
            included: string;
            extras: string;
            price: string;
            delivery: string;
            visit: string;
        };
        /** Qué incluye el encargo, y qué se cotiza aparte. */
        included: {
            idx: string;
            eyebrow: string;
            title: string;
            lead: string;
            items: { title: string; body: string }[];
            extrasLead: string;
            extras: { title: string; body: string }[];
        };
        /** Hasta dónde llega la plantilla antes de ser desarrollo a medida. */
        boundary: {
            idx: string;
            eyebrow: string;
            title: string;
            lead: string;
            inLabel: string;
            outLabel: string;
            inItems: string[];
            outItems: string[];
            /**
             * El matiz: lo que no entra no es un no, es otro presupuesto.
             *
             * Hay DOS redacciones porque los dos platillos se colocan uno al
             * lado del otro en pantallas anchas y uno debajo del otro en
             * estrechas: en móvil no existe «la derecha». El componente pinta
             * las dos y el CSS enseña la que corresponde a la disposición real.
             */
            note: string;
            /** La misma frase para cuando los platillos van apilados. */
            noteStacked: string;
        };
        /** Enlace lateral a las otras dos: sustituye a un índice propio. */
        siblings: { eyebrow: string; title: string };
        /** El cierre: la salida hacia el formulario del pie (#contact). */
        closing: {
            eyebrow: string;
            title: string;
            body: string;
            cta: string;
        };
        /** Las tres plantillas. La clave es estable; el slug lo da `pageSlug`. */
        pages: {
            localBusiness: TemplatePage;
            professionalServices: TemplatePage;
            startupProduct: TemplatePage;
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
        case 'services':
            return locales[lang].services.indexSlug;
        // Las tres páginas de plantillas. Sin estos casos el `default` de abajo
        // devolvería el pageName tal cual y las canónicas apuntarían a
        // /template-local-business/, que no existe.
        case 'template-local-business':
            return locales[lang].templates.pages.localBusiness.slug;
        case 'template-professional-services':
            return locales[lang].templates.pages.professionalServices.slug;
        case 'template-startup-product':
            return locales[lang].templates.pages.startupProduct.slug;
        default:
            return pageName;
    }
}