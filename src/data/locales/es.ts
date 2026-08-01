import type { LocaleSchema } from '../i18n';
import { legalEntity } from '../legal';

/** Identificación del responsable, común a los dos documentos legales. */
const responsable = `${legalEntity.fullName}, persona natural formalmente registrada como comerciante ante la Cámara de Comercio, identificado con NIT ${legalEntity.taxId}`;

const es: LocaleSchema = {
    nav: {
        home: 'Inicio',
        services: 'Servicios',
        projects: 'Proyectos',
        contact: 'Contacto',
        cta: 'Cotiza tu proyecto',
        openMenu: 'Abrir menú',
        closeMenu: 'Cerrar menú',
    },
    hero: {
        eyebrow: 'Estudio de software · Cartagena',
        title: 'Construyendo el futuro digital desde el Caribe',
        titlePre: 'Construyendo ',
        titleMark: 'el futuro digital ',
        titlePost: 'desde el Caribe',
        description: 'Desarrollo de software a la medida y soluciones web de alto rendimiento desde Cartagena para el mundo.',
        file: 'futuro.ts',
        code: [
            'import { sol, mar } from "@caribe/cartagena";',
            '',
            'const estudio = new CTGCode({',
            '  origen: [10.4236, -75.5518],',
            '  horaDorada: true,',
            '});',
            '',
            'export const futuro = estudio',
            '  .diseñar({ aMano: true })',
            '  .construir({ aMedida: true })',
            '  .desplegar("→ para el mundo");',
        ],
        statusBuilding: 'compilando…',
        statusReady: 'en línea',
        output: '→ 200 OK · futuro desplegado en 47ms',
        secondary: 'ver servicios',
        scroll: '$ scroll --navegar-con-nosotros',
        chipA: 'horaDorada: true',
        chipB: '// a mano, a medida',
    },
    about: {
        eyebrow: 'nuestros valores',
        title: 'Cuatro principios que\nguían nuestro trabajo',
        tag: 'carta de valores · esc. 1:1',
        portLabel: 'nuestro compromiso',
        commitment: {
            eyebrow: 'contigo',
            title: 'Tu éxito es nuestro puerto',
            body: 'Creemos que el software de calidad nace de estándares claros. Desarrollamos soluciones escalables con arquitectura sólida, transparencia y un enfoque en el rendimiento, acompañando a nuestros clientes desde la idea hasta el despliegue.',
            signature: '$ rumbo fijado → tu éxito',
        },
        values: [
            {
                bearing: '000°',
                tagline: 'el norte de la aguja',
                name: 'Confianza',
                body: 'No improvisamos. Desde el primer contacto, establecemos un alcance claro, plazos realistas y costos sin sorpresas. Cumplimos lo que prometemos.',
            },
            {
                bearing: '090°',
                tagline: 'por donde sale el sol',
                name: 'Excelencia',
                body: 'No nos conformamos con que «funcione». Cuidamos cada detalle: la experiencia de usuario, la eficiencia del código y la calidad del producto final.',
            },
            {
                bearing: '270°',
                tagline: 'rumbo a lo que viene',
                name: 'Innovación',
                body: 'Adoptamos tecnologías modernas con criterio. Usamos lo nuevo cuando aporta valor real, y lo probado cuando la estabilidad es lo que importa.',
            },
            {
                bearing: '180°',
                tagline: 'mar de fondo',
                name: 'Resiliencia',
                body: 'Los problemas técnicos o de negocio son parte del camino. Los enfrentamos de frente, con soluciones robustas que resisten el paso del tiempo y los cambios del mercado.',
            },
        ],
    },
    projects: {
        eyebrow: 'proyectos',
        title: 'Trabajo entregado',
        lead: 'Sitios en producción y cifras que cualquiera puede volver a medir.',
        ctaAll: 'Ver todos los proyectos',
        indexSlug: 'proyectos',
        visit: 'Visitar el sitio',
        metricsSource: 'Medido con PageSpeed Insights · julio 2026',
        testimonial: {
            label: 'lo que dice el cliente',
            quote:
                'Excelente trabajo realizado… todo muy profesional y eficiente. Lo recomiendo.',
            author: 'Joseph Caballero Lamadrid',
            source: 'Reseña en Google · julio 2026',
            sourceUrl: 'https://maps.app.goo.gl/st6sCh5rgCaqkSri7',
            note: '',
        },
        featured: {
            client: 'Recogras',
            tagline: 'Recolección certificada de aceite usado · Cartagena',
            summary:
                'Sitio corporativo para una gestora ambiental que recoge aceite de cocina usado y trampa grasa en restaurantes, hoteles y establecimientos gastronómicos. Construido con Astro y renderizado estático: sin capas de más, con el peso puesto en que abra rápido desde el móvil de un jefe de cocina.',
            url: 'https://recograscolombia.com/',
            urlLabel: 'recograscolombia.com',
            stack: ['Astro', 'Tailwind', 'CSS propio'],
            metrics: [
                { label: 'Rendimiento (escritorio)', value: '100' },
                { label: 'Rendimiento (móvil)', value: '98' },
                { label: 'SEO', value: '100' },
                { label: 'Accesibilidad', value: '96' },
            ],
        },
    },
    projectsPage: {
        metaTitle: 'Proyectos',
        metaDescription:
            'Lo que CTG Code tiene a bordo: sitios en producción, Helio (nuestro sistema de gestión para talleres), tres plantillas web y tres automatizaciones listas para adaptar.',
        eyebrow: 'bitácora de a bordo',
        title: 'Todo lo que llevamos a bordo',
        lead: 'Lo entregado, lo que se está construyendo y lo que ya está listo para adaptar. Sin maquetas de relleno: cada asiento dice en qué punto está.',
        manifest: [
            { idx: '01', label: 'Entregado', href: '#entregado' },
            { idx: '02', label: 'Producto propio', href: '#helio' },
            { idx: '03', label: 'Plantillas web', href: '#plantillas' },
            { idx: '04', label: 'Automatizaciones', href: '#automatizaciones' },
        ],
        labels: {
            status: 'estado',
            stack: 'stack',
            demo: 'Ver demo',
            detail: 'Ver la plantilla',
            demoSoon: 'demo en preparación',
            shotSoon: 'captura en camino',
            audience: 'pensada para',
            includes: 'incluye',
        },
        delivered: {
            idx: '01',
            eyebrow: 'entregado',
            title: 'En producción, con el cliente al mando',
            lead: 'El trabajo que ya vive fuera de nuestras manos: un sitio abierto al público, con cifras que cualquiera puede volver a medir.',
            status: 'entregado · en línea',
        },
        helio: {
            idx: '02',
            eyebrow: 'producto propio · en construcción',
            name: 'Helio',
            tagline: 'Gestión empresarial para talleres de servicio técnico',
            status: 'en desarrollo',
            summary:
                'Helio es el SaaS que estamos construyendo en casa. Nace de un problema que se repite en todo taller que crece: las entradas se anotan en un cuaderno, el inventario vive en la cabeza de alguien y nadie sabe con certeza qué se le hizo a un equipo hace seis meses. Helio junta las tres cosas en un solo sistema.',
            scope: 'Enfocado, de entrada, en talleres de servicio técnico: celulares, computadores, equipos electrónicos, vehículos, herramientas y maquinaria.',
            modules: [
                {
                    idx: 'i',
                    name: 'Empleados, roles y permisos',
                    body: 'Cada persona del taller entra con su propia cuenta y ve exactamente lo que le toca. Los roles definen quién recibe equipos, quién mueve inventario y quién cierra una orden.',
                },
                {
                    idx: 'ii',
                    name: 'Inventario de dos naturalezas',
                    body: 'Un almacén que entiende la diferencia entre lo que se consume y lo que vuelve: insumos que se descuentan al usarse y herramientas que se asignan, se prestan y se devuelven, con su responsable a la vista.',
                },
                {
                    idx: 'iii',
                    name: 'Trazabilidad y mantenimiento',
                    body: 'Cada equipo que entra al taller arrastra su historial: qué se le hizo, quién lo hizo y cuándo. Mantenimiento preventivo con su calendario y correctivo con su diagnóstico, en la misma línea de tiempo.',
                },
            ],
            stack: ['python', 'fastapi', 'rust', 'postgresql', 'astro', 'typescript'],
            note: 'Todavía no publicamos capturas ni demo: cuando Helio abra su puerta, se enlazará desde aquí.',
        },
        templates: {
            idx: '03',
            eyebrow: 'plantillas web',
            title: 'Tres puntos de partida, no tres plantillas de catálogo',
            lead: 'Bases construidas por nosotros para los tres encargos que más se repiten. Se adaptan a tu marca, tu contenido y tu manera de vender; no se rellenan con tu logo y ya.',
            items: [
                {
                    slug: 'servicios-profesionales',
                    kicker: 'plantilla 01',
                    name: 'Servicios profesionales',
                    body: 'Para quien vende criterio y confianza antes que producto. Estructura pensada para explicar el servicio con claridad, mostrar trayectoria y credenciales, y dejar el contacto siempre a un clic de distancia.',
                    audience: [
                        'Contadores',
                        'Abogados',
                        'Consultores',
                        'Asesores financieros',
                        'Arquitectos',
                    ],
                    demoUrl: '/plantilla-servicios-profesionales',
                },
                {
                    slug: 'negocios-locales',
                    kicker: 'plantilla 02',
                    name: 'Negocios locales',
                    body: 'Para el negocio que vive de que lo encuentren cerca. Ficha del local con horarios, ubicación y contacto directo por WhatsApp, carta o catálogo visual, y todo pensado para abrir rápido desde el móvil, en la calle y con mala señal.',
                    audience: [
                        'Restaurantes',
                        'Salones de belleza',
                        'Talleres',
                        'Tiendas',
                        'Gimnasios',
                    ],
                    demoUrl: '/plantilla-negocio-local',
                },
                {
                    slug: 'startups-productos',
                    kicker: 'plantilla 03',
                    name: 'Startups y productos',
                    body: 'Para lanzar algo que aún hay que explicar. Una landing que cuenta el problema antes que la funcionalidad, ordena planes y precios sin marear, y responde las objeciones típicas antes de pedir el registro.',
                    audience: [
                        'SaaS',
                        'Apps',
                        'Lanzamientos',
                        'Productos digitales',
                    ],
                    demoUrl: '/plantilla-producto-startup',
                },
            ],
        },
        automations: {
            idx: '04',
            eyebrow: 'automatizaciones',
            title: 'Piezas que ya funcionan y se montan sobre lo que tienes',
            lead: 'No son ideas: son módulos desarrollados por nosotros, listos para adaptar a tu operación e integrar con las herramientas que ya usas.',
            items: [
                {
                    slug: 'control-acceso',
                    code: 'ACC',
                    name: 'Control de acceso inteligente',
                    body: 'Quién entra, cuándo y a dónde, sin planilla en la portería. Funciona con tarjetas, con biometría o con ambas, y deja registro de cada entrada y salida.',
                    includes: [
                        'Tarjetas y/o biometría',
                        'Permisos por zona y horario',
                        'Registro de entradas y salidas',
                        'Reportes de asistencia',
                    ],
                    demoUrl: '/automatizacion-control-acceso',
                },
                {
                    slug: 'motor-reservas',
                    code: 'RES',
                    name: 'Motor de reservas por capacidad',
                    body: 'Reservas contra cupos reales: el sistema sabe cuántos lugares quedan y cierra cuando se agotan. Cuando el cupo se llena, quien llega tarde no se pierde — entra a lista de espera y sube solo si alguien cancela.',
                    includes: [
                        'Cupos por franja horaria',
                        'Lista de espera automática',
                        'Confirmaciones y recordatorios',
                        'Cancelaciones que liberan el cupo',
                    ],
                    demoUrl: '/automatizacion-reservas',
                },
                {
                    slug: 'alertas-facturacion',
                    code: 'FAC',
                    name: 'Sistema de alertas de facturación',
                    body: 'La cobranza deja de depender de que alguien se acuerde. El sistema vigila el estado de cada factura y avisa al cliente por correo y/o WhatsApp en cada punto del camino: próxima a vencer, vencida, en mora y pagada.',
                    includes: [
                        'Avisos por correo y/o WhatsApp',
                        'Cuatro estados: por vencer, vencida, en mora, paga',
                        'Calendario de avisos configurable',
                        'Historial de lo enviado a cada cliente',
                    ],
                    demoUrl: '/automatizacion-alertas-facturacion',
                },
            ],
        },
        closing: {
            eyebrow: 'siguiente rumbo',
            title: '¿Alguno de estos se parece a lo tuyo?',
            body: 'Si ves aquí algo cercano a lo que necesitas, no hace falta empezar de cero: partimos de la pieza que ya existe y la ajustamos a tu operación. Y si lo tuyo no está en esta lista, también queremos oírlo.',
            cta: 'Cuéntanos tu proyecto',
        },
    },
    servicesPage: {
        metaTitle: 'Servicios',
        metaDescription:
            'La carta completa de CTG Code: cada servicio a fondo —qué incluye y para quién—, cómo trabajamos por hitos y nuestros compromisos. Software a la medida, web de alto rendimiento y automatización.',
        eyebrow: 'carta de servicios',
        title: 'Ingeniería de software, servicio por servicio',
        titleMark: 'servicio por servicio',
        lead: 'La sección de inicio te enseñó el mapa; esta es la carta completa. Cada servicio a fondo —qué incluye y para quién es—, cómo trabajamos por hitos y qué puedes dar por sentado al construir con nosotros.',
        labels: {
            deliverables: 'incluye',
            forWho: 'ideal para',
            stack: 'stack',
        },
        manifest: [
            { idx: '01', label: 'El catálogo', href: '#catalogo' },
            { idx: '02', label: 'Cómo trabajamos', href: '#proceso' },
            { idx: '03', label: 'Compromisos', href: '#compromisos' },
        ],
        catalog: [
            {
                idx: '01',
                code: 'SFT',
                name: 'Desarrollo de software a la medida',
                tagline: 'Plataformas hechas para tu operación, no para un catálogo.',
                body: 'Cuando lo que necesitas no cabe en una plantilla ni en un SaaS genérico. Modelamos tu operación —sus reglas, sus roles, sus datos— y construimos la plataforma exacta que la sostiene: paneles de administración, portales internos, sistemas de gestión. Arquitectura limpia, sin capas de más, pensada para crecer contigo sin reescribirse a los seis meses.',
                deliverables: [
                    'Arquitectura y modelo de datos a medida',
                    'Panel de administración propio',
                    'API documentada para integrarse con lo que ya usas',
                    'Despliegue e infraestructura en la nube',
                    'Copia del código con licencia de uso',
                    '30 días de garantía post-entrega',
                ],
                forWho: [
                    'Empresas en crecimiento',
                    'Operaciones con reglas propias',
                    'Equipos que hoy viven en hojas de cálculo',
                ],
                stack: ['python', 'fastapi', 'postgresql', 'typescript', 'astro', 'rust'],
            },
            {
                idx: '02',
                code: 'WEB',
                name: 'Desarrollo web de alto rendimiento',
                tagline: 'Sitios que abren al instante y llevan a la acción.',
                body: 'Tu sitio es lo primero que ve un cliente: tiene que abrir al instante y empujar a actuar. Construimos webs corporativas y landing pages horneadas como HTML estático —sin frameworks pesados en el navegador— para clavar el 100 en PageSpeed, subir en buscadores y que la experiencia sea fluida incluso con mala señal, desde el móvil y en la calle.',
                deliverables: [
                    'Diseño responsive a medida (móvil primero)',
                    'Objetivo 100/100 en PageSpeed',
                    'SEO técnico on-page y datos estructurados',
                    'Formularios e integraciones de contacto',
                    'Analítica con consentimiento (Consent Mode v2)',
                    'Multi-idioma cuando lo necesitas',
                ],
                forWho: [
                    'Marcas y estudios',
                    'Servicios profesionales',
                    'Lanzamientos y campañas',
                ],
                stack: ['astro', 'typescript', 'javascript', 'css', 'htmx', 'jinja'],
            },
            {
                idx: '03',
                code: 'AUT',
                name: 'Automatización e integración de flujos',
                tagline: 'Que el software haga lo repetitivo por ti.',
                body: 'Todo negocio arrastra tareas que alguien repite a mano cada día: pasar datos de un lado a otro, avisar, cobrar, registrar. Conectamos las herramientas que ya usas y montamos los flujos que las mueven solas, con interfaces y APIs a medida. El resultado: menos trabajo manual, menos errores y respuestas más rápidas.',
                deliverables: [
                    'Integración con tus herramientas actuales',
                    'Flujos configurables a tu operación',
                    'Notificaciones por correo y/o WhatsApp',
                    'Panel de control con registro histórico',
                    'APIs a medida documentadas',
                ],
                forWho: [
                    'Equipos con tareas repetitivas',
                    'Negocios con muchos avisos o cobros',
                    'Quien ya usa varias herramientas sueltas',
                ],
                stack: ['python', 'fastapi', 'rest-api', 'postgresql'],
            },
        ],
        process: {
            idx: '02',
            eyebrow: 'cómo trabajamos',
            titlePre: 'De la idea a producción, ',
            titlePost: 'por hitos',
            lead: 'Sin cajas negras: sabes en qué punto está tu proyecto en todo momento, y pagas contra entregas, no contra promesas.',
            steps: [
                {
                    idx: '01',
                    name: 'Descubrimiento',
                    body: 'Definimos juntos el alcance, los requerimientos y qué se considera «terminado». Aquí se fija el rumbo antes de mover una línea de código.',
                },
                {
                    idx: '02',
                    name: 'Propuesta a precio cerrado',
                    body: 'Cotizamos el alcance acordado a precio fijo, sin costos ocultos. Eliges la modalidad: esquema 50/50 o pagos divididos por hitos de entrega.',
                },
                {
                    idx: '03',
                    name: 'Construcción por hitos',
                    body: 'Avanzamos en entregas visibles y continuas. En cada hito ves el trabajo real funcionando, no una barra de progreso.',
                },
                {
                    idx: '04',
                    name: 'Entrega y garantía',
                    body: 'Desplegamos, te entregamos tu copia del código con su licencia y cubrimos 30 días de garantía para correcciones y ajustes operativos.',
                },
                {
                    idx: '05',
                    name: 'Soporte opcional',
                    body: 'Si lo quieres, seguimos a bordo: mantenimiento preventivo, optimización continua y gestión de la infraestructura en la nube.',
                },
            ],
        },
        commitments: {
            idx: '03',
            eyebrow: 'compromisos',
            title: 'Cómo respondemos por el trabajo',
            lead: 'Lo que puedes dar por sentado desde el primer correo hasta mucho después de la entrega.',
            items: [
                {
                    code: '01',
                    title: 'Precio cerrado, sin sorpresas',
                    body: 'Cotizamos sobre el alcance acordado. Lo que se sale de ahí se conversa antes; nunca aparece de golpe en la factura.',
                },
                {
                    code: '02',
                    title: 'Arquitectura limpia',
                    body: 'Elegimos el stack por las necesidades del proyecto, no por moda. Sin capas innecesarias ni código de relleno que pese mañana.',
                },
                {
                    code: '03',
                    title: 'Nunca te amarramos',
                    body: 'Recibes tu copia del código con licencia de uso permanente y la libertad de mantenerlo con quien quieras. No dependes de nosotros para crecer.',
                },
                {
                    code: '04',
                    title: 'Remoto, contigo donde estés',
                    body: 'Operamos a nivel nacional e internacional, con comunicación y entregas por hitos listas para cualquier ubicación o zona horaria.',
                },
            ],
        },
        closing: {
            eyebrow: 'siguiente rumbo',
            title: '¿Ves aquí lo que necesitas?',
            body: 'Si alguno de estos servicios se parece a lo que tienes en mente, no hacen falta más vueltas: cuéntanos el proyecto y te decimos por dónde entrar. Y si lo tuyo no encaja del todo en esta carta, también queremos oírlo.',
            cta: 'Cuéntanos tu proyecto',
        },
    },
    services: {
        eyebrow: 'servicios',
        title: 'Soluciones de ingeniería para escalar',
        lead: 'Desarrollo de software con arquitectura limpia, velocidad medida y enfoque en resultados de negocio.',
        ctaAll: 'Explorar catálogo completo de servicios',
        indexSlug: 'servicios',
        featured: {
            label: 'servicio insignia',
            title: 'Desarrollo de Software a la Medida',
            body: 'Diseñamos y construimos plataformas web complejas, paneles de administración y arquitecturas de software adaptadas a las necesidades exactas de tu negocio. Priorizamos el rendimiento extremo, la seguridad y la escalabilidad, entregando soluciones robustas sin capas innecesarias ni código de relleno.',
            stack: ['python', 'fastapi', 'postgresql', 'typescript', 'astro', 'rust'],
        },
        secondary: [
            {
                title: 'Desarrollo Web de Alto Rendimiento',
                body: 'Sitios corporativos y landing pages enfocadas en conversión y velocidad de carga instantánea. Optimizados al 100% en PageSpeed para destacar en buscadores, mejorar el posicionamiento SEO y ofrecer una experiencia de usuario fluida.',
                stack: ['astro', 'typescript', 'javascript', 'css', 'htmx', 'jinja'],
            },
            {
                title: 'Desarrollo e Integración de Automatizaciones',
                body: 'Conectamos tus herramientas de trabajo y automatizamos flujos operativos recurrentes. Desarrollamos integraciones a la medida e interfaces API eficientes para reducir tareas manuales, eliminar errores y optimizar tiempos de respuesta.',
                stack: ['python', 'fastapi', 'rest-api', 'postgresql'],
            },
        ],
        faq: {
            eyebrow: 'faq // servicios',
            title: 'Antes de escribirnos',
            items: [
                {
                    q: '¿Cuánto tiempo toma desarrollar un proyecto?',
                    a: 'El tiempo de desarrollo varía según la complejidad del alcance y la dinámica de trabajo. Factores como la definición de requerimientos, la integración de APIs y la disponibilidad de insumos (contenidos, accesos y feedback del cliente) determinan el cronograma final. Cada proyecto se entrega con un plan de trabajo claro e hitos definidos para garantizar avances continuos.',
                },
                {
                    q: '¿Cómo estiman los costos y qué modalidad de pago manejan?',
                    a: 'Cotizamos a precio cerrado basándonos en el alcance y requerimientos acordados. Ofrecemos modalidades de pago adaptables según la magnitud del proyecto, como esquema 50/50 o pagos divididos por hitos de entrega, asegurando transparencia sin sorpresas ni costos ocultos.',
                },
                {
                    q: '¿Qué tecnologías utilizan y cómo eligen el stack para un proyecto?',
                    a: 'Seleccionamos las herramientas según las necesidades del proyecto: Astro es nuestra preferencia para web (SSG/SSR), complementado con HTMX, Jinja2 o Laravel según el caso. En backend lidera Python (FastAPI, Django, Flask), potenciado con Rust para tareas de rendimiento crítico, además de Node.js y PHP. Manejamos bases de datos relacionales y NoSQL (PostgreSQL, MySQL, SQLite, MongoDB, Firebase), contenedores con Docker y desarrollo móvil, garantizando siempre una arquitectura limpia y eficiente.',
                },
                {
                    q: '¿Ofrecen soporte y garantía después del lanzamiento?',
                    a: 'Sí, todos nuestros proyectos incluyen 30 días de garantía post-entrega para corrección de errores o ajustes operativos sin costo adicional. Además, ofrecemos planes opcionales de mantenimiento preventivo, optimización continua y gestión de infraestructura en la nube.',
                },
                {
                    q: '¿Trabajan con clientes fuera de Cartagena o Colombia?',
                    a: 'Sí. Operamos de forma remota tanto a nivel nacional como internacional. Contamos con procesos de comunicación, gestión de proyectos e hitos de entrega optimizados para colaborar sin fricción con clientes de cualquier ubicación o zona horaria.',
                },
            ],
        },
    },
    templates: {
        parentCrumb: 'Proyectos',
        labels: {
            demo: 'Ver la demo',
            audience: 'Para quién',
            stack: 'Construida con',
            sections: 'Secciones',
            included: 'Incluido',
            extras: 'Se cotiza aparte',
            price: 'Precio',
            delivery: 'Entrega',
            visit: 'Visitar el sitio',
        },
        included: {
            idx: '04',
            eyebrow: 'el encargo',
            title: 'Qué recibes por ese precio',
            lead: 'El sitio publicado y funcionando, no un archivo que alguien tiene que subir. Esto es lo que va dentro.',
            items: [
                {
                    title: 'Dominio .com, primer año',
                    body: 'Lo registramos y lo configuramos a tu nombre. Desde el segundo año la renovación la pagas tú, directo al proveedor y sin comisión nuestra.',
                },
                {
                    title: 'Hosting, primer año',
                    body: 'Alojamiento del sitio con HTTPS y certificado. Mismo criterio que el dominio: el segundo año lo asumes tú.',
                },
                {
                    title: 'Formulario de contacto conectado',
                    body: 'Los mensajes llegan a tu correo a través de una cuenta de Formspree configurada con tus datos. Sin servidor que mantener.',
                },
                {
                    title: 'Contacto directo por WhatsApp',
                    body: 'Un botón que abre la conversación con tu número, disponible desde cualquier punto de la página.',
                },
                {
                    title: 'Carga de tus contenidos',
                    body: 'Montamos los textos, las fotos y los datos que nos entregues, y te avisamos antes si algo no va a verse bien: una imagen pequeña, un logo sin fondo transparente, un texto que no cabe.',
                },
                {
                    title: 'SEO técnico completo',
                    body: 'Todo lo que se resuelve desde el código: etiquetas, datos estructurados, sitemap, canónicas, velocidad y accesibilidad.',
                },
                {
                    title: 'Dos rondas de cambios menores',
                    body: 'Dentro de los primeros treinta días, para afinar lo que se vea distinto una vez publicado.',
                },
                {
                    title: 'Garantía de treinta días',
                    body: 'Corregimos sin costo cualquier error de programación o de configuración del entorno. Pasado ese plazo, el soporte se puede contratar y es opcional.',
                },
            ],
            extrasLead: 'Y esto no. No porque no lo hagamos, sino porque no siempre hace falta y no queremos cobrártelo de oficio.',
            extras: [
                {
                    title: 'Correo profesional con tu dominio',
                    body: 'Se cotiza según la complejidad de la configuración que pida tu proveedor.',
                },
                {
                    title: 'Segundo idioma',
                    body: 'Se cobra el trabajo técnico de dejar el sitio bilingüe —dos versiones, sus URLs y sus etiquetas de idioma—, no la traducción. Los textos traducidos los pones tú.',
                },
                {
                    title: 'Search Console, Bing y perfil de Google',
                    body: 'Lo que vive fuera del código: registrar, verificar y dejar el sitio conectado a cada herramienta.',
                },
                {
                    title: 'Redacción de los textos',
                    body: 'Si ya los tienes claros y redactados, montarlos no cuesta nada aparte.',
                },
            ],
        },
        boundary: {
            idx: '05',
            eyebrow: 'la frontera',
            title: 'Hasta dónde llega una plantilla',
            lead: 'Una plantilla es una base ya construida para acelerar el trabajo, no un molde rígido. Pero tiene un límite, y preferimos decirlo antes de cotizar que después de empezar.',
            inLabel: 'Entra en el precio',
            outLabel: 'Ya es desarrollo a medida',
            inItems: [
                'Colores, tipografías y logo',
                'Todos los textos, de la portada al pie',
                'Tus fotos, tus iconos y tu favicon',
                'Reordenar u ocultar las secciones que ya trae',
                'Cuantos elementos quieras dentro de una sección existente',
                'Datos de contacto, horarios y redes sociales',
            ],
            outItems: [
                'Una sección que la plantilla no tiene',
                'Una segunda página: blog, portafolio, fichas de servicio',
                'Tienda, carrito o pagos en línea',
                'Reservas, agenda o disponibilidad en tiempo real',
                'Área privada, inicio de sesión o panel de administración',
                'Un gestor de contenidos para editar tú mismo',
                'Integración con un CRM, un ERP o una API externa',
            ],
            note: 'Nada de la derecha es un no: es otro presupuesto. Se construye encima de esta misma base, sin tirar lo hecho.',
            noteStacked: 'Nada de esa segunda lista es un no: es otro presupuesto. Se construye encima de esta misma base, sin tirar lo hecho.',
        },
        siblings: {
            eyebrow: 'las otras dos',
            title: 'Si esta no es la tuya',
        },
        closing: {
            eyebrow: 'siguiente rumbo',
            title: '¿La quieres con tu marca?',
            body: 'Cuéntanos del negocio y te decimos sin rodeos si esta plantilla te sirve o si lo tuyo pide desarrollo a medida. Si te sirve, en el mismo correo va el presupuesto cerrado.',
            cta: 'Escribir al estudio',
        },
        pages: {
            professionalServices: {
                slug: 'plantillas/servicios-profesionales',
                metaTitle: 'Plantilla web para servicios profesionales',
                metaDescription:
                    'Landing de una página para consultoras, despachos y firmas: servicios, trayectoria, indicadores y contacto. Astro estático, con dominio y hosting del primer año. Desde $1.400.000 COP, entrega en 4–6 días hábiles.',
                crumb: 'Plantilla · Servicios profesionales',
                eyebrow: 'plantilla 01 · servicios profesionales',
                title: 'La página de quien vende criterio',
                titleMark: 'criterio',
                lead: 'Cuando lo que vendes no se ve ni se toca, la página tiene un solo trabajo: explicar qué resuelves, demostrar que sabes hacerlo y dejar el contacto a un clic. Esta base está construida alrededor de eso.',
                manifest: [
                    { idx: '01', label: 'Para quién es', href: '#para-quien' },
                    { idx: '02', label: 'Qué trae por dentro', href: '#por-dentro' },
                    { idx: '03', label: 'En producción', href: '#en-produccion' },
                    { idx: '04', label: 'Qué incluye', href: '#incluye' },
                    { idx: '05', label: 'Hasta dónde llega', href: '#hasta-donde' },
                    { idx: '06', label: 'Precio y plazo', href: '#precio' },
                    { idx: '07', label: 'Preguntas', href: '#preguntas' },
                ],
                demoUrl: '/plantilla-servicios-profesionales/',
                facts: [
                    { label: 'Desde', value: '$1.400.000 COP' },
                    { label: 'Entrega', value: '4–6 días hábiles' },
                    { label: 'En producción', value: 'recograscolombia.com' },
                ],
                audience: {
                    idx: '01',
                    eyebrow: 'para quién es',
                    title: 'Cinco oficios y la misma dificultad',
                    lead: 'Todos venden algo que el cliente no puede evaluar antes de contratarlo. Cada perfil llega con su propia versión del problema.',
                    items: [
                        {
                            who: 'Contadores',
                            pain: 'Te comparan por precio hasta que entienden lo que realmente haces. La estructura te da sitio para explicarlo antes de que pregunten.',
                        },
                        {
                            who: 'Abogados',
                            pain: 'La confianza se juega en la trayectoria y las credenciales. Van arriba y a la vista, no enterradas en un PDF.',
                        },
                        {
                            who: 'Consultores',
                            pain: 'Vendes un intangible: la portada te obliga a decir en una línea qué resuelves y para quién.',
                        },
                        {
                            who: 'Asesores financieros',
                            pain: 'El bloque de indicadores está para poner cifras verificables donde la competencia pone adjetivos.',
                        },
                        {
                            who: 'Arquitectos e ingenieros',
                            pain: 'La rejilla de servicios aguanta seis líneas de trabajo sin que ninguna quede sepultada bajo las demás.',
                        },
                    ],
                },
                inside: {
                    idx: '02',
                    eyebrow: 'qué trae por dentro',
                    title: 'Siete piezas, una sola página',
                    lead: 'No hay que decidir qué secciones hacen falta: ya están, en el orden en que un visitante las necesita. Se pueden reordenar u ocultar, pero funcionan tal cual.',
                    shotAlt: 'Primer pliegue de la demo de la plantilla de servicios profesionales',
                    sections: [
                        {
                            idx: '01',
                            name: 'Barra de navegación',
                            body: 'Enlaces a cada sección y un botón de contacto que sigue visible mientras el visitante baja.',
                        },
                        {
                            idx: '02',
                            name: 'Portada',
                            body: 'Titular, subtítulo y dos botones, con una tarjeta al lado que resume de un vistazo lo que ofreces.',
                        },
                        {
                            idx: '03',
                            name: 'Servicios',
                            body: 'Una rejilla de hasta seis servicios, cada uno con su icono, su título y la línea que lo explica.',
                        },
                        {
                            idx: '04',
                            name: 'Nosotros',
                            body: 'Dos párrafos para contar quién eres y de dónde vienes, más cuatro pilares con lo que te diferencia.',
                        },
                        {
                            idx: '05',
                            name: 'Indicadores',
                            body: 'Las cifras que dan confianza: años de trayectoria, clientes atendidos, proyectos cerrados, lo que tengas y puedas sostener.',
                        },
                        {
                            idx: '06',
                            name: 'Contacto',
                            body: 'Formulario conectado a tu correo y los datos directos: teléfono, correo, dirección y horario.',
                        },
                        {
                            idx: '07',
                            name: 'Pie de página',
                            body: 'Resumen, enlaces de navegación, redes sociales y aviso de derechos.',
                        },
                    ],
                    stack: ['astro', 'tailwind', 'lucide'],
                    stackNote:
                        'Salida estática: el sitio se compila a HTML y se sirve tal cual, sin framework de JavaScript en el navegador. Los iconos se generan como SVG en el build, así que no cuestan una petición.',
                },
                proof: {
                    idx: '03',
                    eyebrow: 'en producción',
                    title: 'Esta base ya navega sola',
                    body: 'Recogras, gestora ambiental de aceite de cocina usado en Cartagena, salió de esta misma plantilla. Es el mejor argumento que tenemos: enseña hasta dónde cambia una base cuando se le pone la marca, el contenido y las fotos de un negocio real.',
                    url: 'https://recograscolombia.com/',
                    urlLabel: 'recograscolombia.com',
                    metrics: [
                        { label: 'Rendimiento · móvil', value: '98 – 100' },
                        { label: 'Rendimiento · escritorio', value: '100' },
                        { label: 'Accesibilidad', value: '100' },
                        { label: 'SEO y buenas prácticas', value: '100' },
                    ],
                    metricsSource:
                        'Medido con Lighthouse 13.4.1 sobre recograscolombia.com el 1 de agosto de 2026: tres pasadas en móvil y tres en escritorio, descartando una previa de calentamiento. Se publica el rango observado, no la mejor pasada. El mayor pintado de contenido quedó en 1,4 s en móvil y 0,4–0,7 s en escritorio.',
                },
                price: {
                    cop: '$1.400.000 – $2.000.000 COP',
                    usd: 'USD $560 – $790',
                    usdNote:
                        'Referencia al cambio del 31 de julio de 2026, con los costos de transferencia ya incluidos. El precio en pesos es el que rige.',
                    delivery: '4 – 6 días hábiles',
                    deliveryNote:
                        'El plazo empieza a contar cuando se confirma el pago y nos llega todo lo necesario para personalizarla: logo, colores, tipografías, textos, fotos y datos de contacto.',
                },
                faq: {
                    idx: '07',
                    eyebrow: 'preguntas',
                    title: 'Lo que preguntan antes de decidirse',
                    items: [
                        {
                            q: '¿Puedo ver esta plantilla funcionando en un cliente real?',
                            a: 'Sí. recograscolombia.com está construido sobre esta misma base. Compara ese sitio con la demo y verás hasta dónde cambia una plantilla cuando se le pone la marca, el contenido y las fotos de un negocio de verdad.',
                        },
                        {
                            q: '¿Qué pasa con el dominio y el hosting a partir del segundo año?',
                            a: 'El primer año va incluido y queda registrado a tu nombre. Desde el segundo, la renovación la pagas tú directamente al proveedor: te entregamos los accesos y lo que cuesta. No cobramos comisión por eso ni te obligamos a renovarlo con nosotros.',
                        },
                        {
                            q: '¿Me quedo con el código?',
                            a: 'Sí. Recibes el proyecto completo con licencia de uso permanente y puedes mantenerlo con quien quieras. No dependes de nosotros para crecer, y ese es un compromiso del estudio, no una concesión de esta plantilla.',
                        },
                        {
                            q: '¿Y si no tengo los textos ni las fotos?',
                            a: 'Montamos lo que nos entregues, y antes de montarlo te decimos si algo no va a verse bien: una imagen demasiado pequeña, un logo sin fondo transparente, un texto que no cabe donde va. Conseguir o producir las imágenes y redactar los textos no entra en el precio; si ya los tienes listos, montarlos no cuesta nada aparte.',
                        },
                        {
                            q: '¿Puedo añadir una sección más adelante?',
                            a: 'Sí, pero es otro presupuesto: una sección que la plantilla no trae ya es desarrollo a medida. Se cotiza aparte y se construye sobre el mismo sitio, sin rehacer lo que ya está publicado.',
                        },
                        {
                            q: '¿El sitio queda en español y en inglés?',
                            a: 'Se entrega en un idioma. Dejarlo bilingüe es un extra: se cobra el trabajo técnico de montar las dos versiones con sus URLs y sus etiquetas de idioma, no la traducción. Los textos traducidos los pones tú, y no hay descuento por entregarlos ya traducidos.',
                        },
                    ],
                },
            },
            localBusiness: {
                slug: 'plantillas/negocio-local',
                metaTitle: 'Plantilla web para negocios locales',
                metaDescription:
                    'Landing de una página para restaurantes, salones, talleres y tiendas: carta o catálogo, galería, horarios, mapa y WhatsApp. Astro estático, con dominio y hosting del primer año. Desde $1.500.000 COP.',
                crumb: 'Plantilla · Negocio local',
                eyebrow: 'plantilla 02 · negocios locales',
                title: 'La página del negocio que se busca desde la calle',
                titleMark: 'desde la calle',
                lead: 'Quien te busca está de pie, con una mano, con mala señal y con prisa. Quiere la carta, la dirección y el horario en tres segundos. Esta base pone esas tres cosas donde se ven.',
                manifest: [
                    { idx: '01', label: 'Para quién es', href: '#para-quien' },
                    { idx: '02', label: 'Qué trae por dentro', href: '#por-dentro' },
                    { idx: '03', label: 'Medido', href: '#medido' },
                    { idx: '04', label: 'Qué incluye', href: '#incluye' },
                    { idx: '05', label: 'Hasta dónde llega', href: '#hasta-donde' },
                    { idx: '06', label: 'Precio y plazo', href: '#precio' },
                    { idx: '07', label: 'Preguntas', href: '#preguntas' },
                ],
                demoUrl: '/plantilla-negocio-local/',
                facts: [
                    { label: 'Desde', value: '$1.500.000 COP' },
                    { label: 'Entrega', value: '5 – 8 días hábiles' },
                    { label: 'Contacto principal', value: 'WhatsApp' },
                ],
                audience: {
                    idx: '01',
                    eyebrow: 'para quién es',
                    title: 'Negocios que viven de que los encuentren cerca',
                    lead: 'El visitante no llega a comparar proveedores: llega a resolver algo hoy, y casi siempre desde el celular.',
                    items: [
                        {
                            who: 'Restaurantes',
                            pain: 'La carta, la dirección y el horario son las tres cosas que se buscan. Están arriba, y los precios se leen sin ampliar la pantalla.',
                        },
                        {
                            who: 'Salones de belleza',
                            pain: 'La galería hace el trabajo que no hace el texto, y el botón de WhatsApp evita la llamada que nadie contesta cuando hay clienta en la silla.',
                        },
                        {
                            who: 'Talleres',
                            pain: 'El bloque de la carta sirve igual para servicios que para platos: categorías, descripción y precio, sin inventar nada.',
                        },
                        {
                            who: 'Tiendas',
                            pain: 'Si el negocio vive del barrio, el mapa y el horario valen más que cualquier eslogan de portada.',
                        },
                        {
                            who: 'Gimnasios',
                            pain: 'Los planes y las mensualidades caben en el mismo bloque del catálogo, y las fotos del local hacen el resto.',
                        },
                    ],
                },
                inside: {
                    idx: '02',
                    eyebrow: 'qué trae por dentro',
                    title: 'Siete piezas pensadas para el pulgar',
                    lead: 'Todo el recorrido cabe en una página, y cada sección está donde la busca alguien que va con prisa.',
                    shotAlt: 'Primer pliegue de la demo de la plantilla de negocio local',
                    sections: [
                        {
                            idx: '01',
                            name: 'Barra de navegación',
                            body: 'Enlaces a cada sección y un botón de reserva o pedido por WhatsApp siempre visible.',
                        },
                        {
                            idx: '02',
                            name: 'Portada a pantalla completa',
                            body: 'Una foto grande del local o del producto, el nombre, la promesa en una línea y dos botones: contactar y ver la carta.',
                        },
                        {
                            idx: '03',
                            name: 'Historia',
                            body: 'Dos párrafos para contar de dónde viene el negocio y tres cifras destacadas junto a una foto: año de apertura, sedes, calificación.',
                        },
                        {
                            idx: '04',
                            name: 'Carta o catálogo',
                            body: 'Los productos agrupados por categorías, con descripción y precio, y la opción de destacar uno como favorito de la casa.',
                        },
                        {
                            idx: '05',
                            name: 'Galería',
                            body: 'Una rejilla de fotos del local, los platos o los trabajos terminados.',
                        },
                        {
                            idx: '06',
                            name: 'Ubicación y horarios',
                            body: 'Dirección con mapa, el horario día por día y los botones de llamar o escribir por WhatsApp.',
                        },
                        {
                            idx: '07',
                            name: 'Pie de página',
                            body: 'Datos de contacto, redes sociales y aviso de derechos.',
                        },
                    ],
                    stack: ['astro', 'tailwind', 'lucide'],
                    stackNote:
                        'Salida estática: el sitio se compila a HTML y se sirve tal cual, sin framework de JavaScript en el navegador. Los iconos se generan como SVG en el build, así que no cuestan una petición.',
                },
                proof: {
                    idx: '03',
                    eyebrow: 'medido',
                    title: 'Lo que marca antes de tocarla',
                    body: 'Esta plantilla todavía no tiene un negocio en producción, y no vamos a inventar uno. Lo que se mide aquí es su propia demo: el mismo código que recibes, con la portada a pantalla completa, la galería y el mapa ya cargados. Las fotos de un negocio real pesarán distinto, pero el punto de partida es este.',
                    url: 'https://ctgcode.com/plantilla-negocio-local/',
                    urlLabel: 'Ver la demo',
                    metrics: [
                        { label: 'Rendimiento · móvil', value: '93 – 98' },
                        { label: 'Rendimiento · escritorio', value: '99' },
                        { label: 'Accesibilidad', value: '100' },
                        { label: 'Buenas prácticas', value: '100' },
                    ],
                    metricsSource:
                        'Medido con Lighthouse 13.4.1 sobre la demo el 1 de agosto de 2026: tres pasadas en móvil y tres en escritorio, descartando una previa de calentamiento. Se publica el rango observado, no la mejor pasada. El mayor pintado de contenido quedó en 2,2–2,8 s en móvil y 0,8–0,9 s en escritorio. No se publica la nota de SEO porque la demo lleva noindex a propósito —simula un negocio que no existe— y Lighthouse la penaliza solo por eso; el resto de sus auditorías de SEO pasan.',
                },
                price: {
                    cop: '$1.500.000 – $2.200.000 COP',
                    usd: 'USD $600 – $870',
                    usdNote:
                        'Referencia al cambio del 31 de julio de 2026, con los costos de transferencia ya incluidos. El precio en pesos es el que rige.',
                    delivery: '5 – 8 días hábiles',
                    deliveryNote:
                        'El plazo empieza a contar cuando se confirma el pago y nos llega todo lo necesario para personalizarla: logo, colores, tipografías, textos, fotos, la carta o el catálogo con precios, y los datos de contacto.',
                },
                faq: {
                    idx: '07',
                    eyebrow: 'preguntas',
                    title: 'Lo que preguntan antes de decidirse',
                    items: [
                        {
                            q: '¿Puedo cambiar la carta o los precios yo mismo?',
                            a: 'No desde un panel: la plantilla no trae gestor de contenidos, y justamente por eso es rápida y no exige mantenimiento. Los cambios se hacen sobre el archivo de contenidos del proyecto. Durante los primeros treinta días entran en las dos rondas incluidas; después se pueden contratar como soporte.',
                        },
                        {
                            q: '¿El botón de WhatsApp abre la conversación con mi número?',
                            a: 'Sí, con tu número y desde cualquier punto de la página. En esta plantilla el WhatsApp es el contacto principal, por delante del formulario: es lo que de verdad usa quien te busca desde la calle.',
                        },
                        {
                            q: '¿Aparecerá mi negocio en Google Maps?',
                            a: 'El sitio no crea la ficha de Google por sí solo. Lo que sí dejamos hecho es el SEO técnico, con los datos estructurados del negocio —dirección y horario incluidos—, para que la ficha y el sitio se refuercen entre sí. Crear, verificar y configurar el perfil de Google es un trabajo aparte y se cotiza.',
                        },
                        {
                            q: '¿Y si no tengo fotos del negocio?',
                            a: 'Montamos las que nos entregues y te decimos antes si alguna no va a verse bien por tamaño o calidad. Conseguirlas o producirlas no entra en el precio. En un negocio que se vende por la vista es la parte que más conviene resolver bien antes de empezar: una buena foto de portada cambia la página entera.',
                        },
                        {
                            q: '¿Qué pasa cuando se acaben la garantía y las dos rondas?',
                            a: 'La garantía cubre treinta días de errores de programación o de configuración del entorno, y las dos rondas de cambios menores viven en ese mismo plazo. Pasado eso, el soporte es opcional y se contrata aparte: ni el sitio deja de funcionar ni quedas atado a nosotros.',
                        },
                        {
                            q: '¿Qué necesitan de mí para empezar?',
                            a: 'El logo en buena resolución —vectorial si lo tienes—, los colores de la marca si ya están definidos, los textos de cada sección, las fotos, la carta o el catálogo con sus precios, la dirección, el horario día por día y el número de WhatsApp. El plazo de entrega empieza a contar cuando llega todo eso y el pago está confirmado.',
                        },
                    ],
                },
            },
            startupProduct: {
                slug: 'plantillas/producto-startup',
                metaTitle: 'Plantilla web para productos y startups',
                metaDescription:
                    'Landing de una página para SaaS, apps y lanzamientos: problema, funcionalidades, cómo funciona, planes y preguntas frecuentes. Astro estático, con dominio y hosting del primer año. Desde $1.600.000 COP.',
                crumb: 'Plantilla · Producto y startup',
                eyebrow: 'plantilla 03 · productos y startups',
                title: 'La página de lo que todavía hay que explicar',
                titleMark: 'todavía hay que explicar',
                lead: 'Un producto nuevo tiene un problema que un restaurante no tiene: nadie sabe qué es. Esta base cuenta el problema antes que la funcionalidad, ordena los planes sin marear y responde las objeciones antes de pedir el registro.',
                manifest: [
                    { idx: '01', label: 'Para quién es', href: '#para-quien' },
                    { idx: '02', label: 'Qué trae por dentro', href: '#por-dentro' },
                    { idx: '03', label: 'Medido', href: '#medido' },
                    { idx: '04', label: 'Qué incluye', href: '#incluye' },
                    { idx: '05', label: 'Hasta dónde llega', href: '#hasta-donde' },
                    { idx: '06', label: 'Precio y plazo', href: '#precio' },
                    { idx: '07', label: 'Preguntas', href: '#preguntas' },
                ],
                demoUrl: '/plantilla-producto-startup/',
                facts: [
                    { label: 'Desde', value: '$1.600.000 COP' },
                    { label: 'Entrega', value: '5 – 8 días hábiles' },
                    { label: 'Incluye', value: 'Planes y preguntas frecuentes' },
                ],
                audience: {
                    idx: '01',
                    eyebrow: 'para quién es',
                    title: 'Cuando el producto aún no se explica solo',
                    lead: 'El visitante no viene buscando tu categoría: viene con un problema y hay que enseñarle que esto lo resuelve.',
                    items: [
                        {
                            who: 'SaaS',
                            pain: 'La estructura te obliga a poner el problema antes que la lista de características. Es el orden que convierte.',
                        },
                        {
                            who: 'Aplicaciones móviles',
                            pain: 'Los pasos de «cómo funciona» quitan de encima la pregunta que frena la descarga: qué pasa después de instalarla.',
                        },
                        {
                            who: 'Lanzamientos',
                            pain: 'Hay un bloque de prueba social arriba para lo poco o mucho que tengas: usuarios, lista de espera, un medio que te mencionó.',
                        },
                        {
                            who: 'Productos digitales',
                            pain: 'El bloque de precios ordena los planes sin marear, y las preguntas frecuentes resuelven la objeción justo antes del registro.',
                        },
                    ],
                },
                inside: {
                    idx: '02',
                    eyebrow: 'qué trae por dentro',
                    title: 'Ocho piezas en el orden que convence',
                    lead: 'El recorrido está pensado como un argumento: primero el problema, luego la solución, después la prueba y al final el precio.',
                    shotAlt: 'Primer pliegue de la demo de la plantilla de producto y startup',
                    sections: [
                        {
                            idx: '01',
                            name: 'Barra de navegación',
                            body: 'Enlaces a cada sección y el botón de registro o prueba siempre a mano.',
                        },
                        {
                            idx: '02',
                            name: 'Portada con prueba social',
                            body: 'Titular con una parte acentuada, subtítulo, dos botones y una línea de prueba social justo debajo.',
                        },
                        {
                            idx: '03',
                            name: 'Funcionalidades',
                            body: 'Una rejilla con icono, título y explicación por funcionalidad, escrita en clave de qué resuelve y no de qué hace.',
                        },
                        {
                            idx: '04',
                            name: 'Cómo funciona',
                            body: 'Los pasos numerados, del registro al primer resultado útil.',
                        },
                        {
                            idx: '05',
                            name: 'Precios',
                            body: 'Los planes lado a lado, con lo que incluye cada uno y uno destacado como recomendado.',
                        },
                        {
                            idx: '06',
                            name: 'Preguntas frecuentes',
                            body: 'Un acordeón con las objeciones típicas resueltas antes de pedir el registro.',
                        },
                        {
                            idx: '07',
                            name: 'Cierre',
                            body: 'Un último bloque de llamada a la acción para quien llegó leyendo hasta abajo.',
                        },
                        {
                            idx: '08',
                            name: 'Pie de página',
                            body: 'Enlaces, redes sociales y aviso de derechos.',
                        },
                    ],
                    stack: ['astro', 'tailwind', 'lucide'],
                    stackNote:
                        'Salida estática: el sitio se compila a HTML y se sirve tal cual, sin framework de JavaScript en el navegador. Los iconos se generan como SVG en el build, así que no cuestan una petición.',
                },
                proof: {
                    idx: '03',
                    eyebrow: 'medido',
                    title: 'Lo que marca antes de tocarla',
                    body: 'Esta plantilla todavía no tiene un producto en producción, y no vamos a inventar uno. Lo que se mide aquí es su propia demo: el mismo código que recibes, con las ocho secciones, la tabla de precios y el acordeón de preguntas. El contenido de un producto real cambiará los textos, no la base.',
                    url: 'https://ctgcode.com/plantilla-producto-startup/',
                    urlLabel: 'Ver la demo',
                    metrics: [
                        { label: 'Rendimiento · móvil', value: '92 – 97' },
                        { label: 'Rendimiento · escritorio', value: '96 – 100' },
                        { label: 'Accesibilidad', value: '100' },
                        { label: 'Buenas prácticas', value: '100' },
                    ],
                    metricsSource:
                        'Medido con Lighthouse 13.4.1 sobre la demo el 1 de agosto de 2026: tres pasadas en móvil y tres en escritorio, descartando una previa de calentamiento. Se publica el rango observado, no la mejor pasada. El mayor pintado de contenido quedó en 1,9–2,9 s en móvil y 0,6–1,3 s en escritorio. No se publica la nota de SEO porque la demo lleva noindex a propósito —simula un producto que no existe— y Lighthouse la penaliza solo por eso; el resto de sus auditorías de SEO pasan.',
                },
                price: {
                    cop: '$1.600.000 – $2.400.000 COP',
                    usd: 'USD $640 – $950',
                    usdNote:
                        'Referencia al cambio del 31 de julio de 2026, con los costos de transferencia ya incluidos. El precio en pesos es el que rige.',
                    delivery: '5 – 8 días hábiles',
                    deliveryNote:
                        'El plazo empieza a contar cuando se confirma el pago y nos llega todo lo necesario para personalizarla: logo, colores, tipografías, textos, capturas del producto, los planes con sus precios y los datos de contacto.',
                },
                faq: {
                    idx: '07',
                    eyebrow: 'preguntas',
                    title: 'Lo que preguntan antes de decidirse',
                    items: [
                        {
                            q: '¿El bloque de precios se conecta a una pasarela de pago?',
                            a: 'No. Los planes se muestran y el botón de cada uno lleva a donde tú digas: un registro, un correo, un WhatsApp o tu propia aplicación. Conectar una pasarela de pago y cobrar desde la página es desarrollo a medida y se cotiza aparte.',
                        },
                        {
                            q: '¿Puedo poner logos de clientes o de medios en la prueba social?',
                            a: 'Sí, siempre que tengas permiso para usarlos. Es la única parte de la página cuyo contenido no depende solo de ti, así que conviene resolverla antes de empezar. Si todavía no hay logos, el bloque funciona igual con una cifra o una frase.',
                        },
                        {
                            q: '¿Cuántos planes caben en la sección de precios?',
                            a: 'Tres se leen cómodos y es lo que recomendamos. Con cuatro empieza a apretar en pantallas pequeñas. Si necesitas más planes, o una tabla comparativa de características, ya es desarrollo a medida.',
                        },
                        {
                            q: '¿Y si el producto todavía no existe?',
                            a: 'No es un problema: la plantilla está pensada justo para eso, para explicar algo que aún hay que explicar, validar interés o recoger una lista de espera. Lo que sí necesitas tener claro es qué problema resuelves y para quién; sin eso, ninguna página funciona.',
                        },
                        {
                            q: '¿Y si no tengo los textos ni capturas del producto?',
                            a: 'Montamos lo que nos entregues, y te avisamos antes si algo no va a verse bien: una captura de baja resolución, un texto que no cabe donde va. Producir las capturas y redactar los textos no entra en el precio; si ya los tienes listos, montarlos no cuesta nada aparte.',
                        },
                        {
                            q: '¿Puedo migrar después a algo más grande?',
                            a: 'Sí. Es un sitio estático en Astro, sin ataduras: cuando el producto pida una aplicación, un panel o un blog, se construye encima sin tirar lo que ya tienes. Y si prefieres hacerlo con otro equipo, el código es tuyo desde el día de la entrega.',
                        },
                    ],
                },
            },
        },
    },
    legal: {
        eyebrow: 'documento legal',
        updatedLabel: 'Última actualización',
        pendingNotice:
            'Documento en revisión: faltan por confirmar los datos de identificación del responsable.',
        privacy: {
            title: 'Política de Privacidad',
            summary:
                'Cómo CTG Code recopila, usa y protege tus datos personales conforme a la Ley 1581 de 2012 de la República de Colombia.',
            intro: `El presente sitio web CTG Code es operado por ${responsable} (en adelante, el «Responsable»). Nos tomamos muy en serio la privacidad y la protección de tus datos personales. Esta Política de Privacidad describe cómo recopilamos, utilizamos, almacenamos y protegemos la información de acuerdo con la Ley 1581 de 2012 y demás normas vigentes en la República de Colombia.`,
            sections: [
                {
                    heading: 'Información que Recopilamos y Finalidad',
                    items: [
                        {
                            term: 'Datos del Formulario de Contacto',
                            text: 'Al diligenciar nuestro formulario, recopilamos datos como tu nombre, correo electrónico y los detalles del mensaje o proyecto que nos describes. La finalidad de estos datos es exclusivamente comercial: gestionar tu solicitud, ponernos en contacto contigo y enviarte las cotizaciones o información de servicios solicitada.',
                        },
                        {
                            term: 'Datos de Navegación y Cookies',
                            text: 'Mediante herramientas de analítica, recopilamos información anónima sobre tu comportamiento en el sitio (páginas visitadas, tiempo de permanencia, país de origen) con la única finalidad de optimizar la experiencia de usuario y medir el rendimiento de nuestras campañas.',
                        },
                    ],
                },
                {
                    heading: 'Uso de Proveedores y Transferencia de Datos',
                    body: 'Para garantizar un servicio seguro y de alto estándar, trabajamos con plataformas consolidadas. Tus datos pueden ser procesados a través de:',
                    items: [
                        {
                            term: 'Formspree',
                            text: 'Los datos del formulario de contacto se transmiten de forma segura a través de su plataforma con el único fin de hacerlos llegar a nuestro correo electrónico de atención.',
                        },
                        {
                            term: 'Google Analytics y Google Ads',
                            text: 'Herramientas que utilizamos bajo estrictos parámetros de seguridad para medir el tráfico y gestionar la publicidad del sitio web.',
                        },
                    ],
                },
                {
                    heading: 'Consentimiento y Cookies (Google Consent Mode v2)',
                    body: 'Este sitio web respeta rigurosamente tus decisiones de privacidad mediante la implementación de Google Consent Mode v2. Por defecto, todo rastreo analítico y publicitario está completamente denegado. Solo recolectaremos y procesaremos tus datos de navegación si decides otorgar tu consentimiento explícito a través de nuestro banner flotante de cookies. Puedes revocar este permiso en cualquier momento borrando las cookies de tu navegador.',
                },
                {
                    heading: 'Derechos del Titular (Habeas Data)',
                    body: `Como titular de los datos personales, tienes derecho a conocer, actualizar, rectificar y solicitar la supresión de tus datos de nuestras bases de datos en cualquier momento. Para ejercer estos derechos, o ante cualquier duda sobre esta política, puedes comunicarte directamente con el Responsable enviando un correo electrónico a: ${legalEntity.email}.`,
                },
            ],
        },
        terms: {
            title: 'Términos y Condiciones de Uso',
            summary:
                'Condiciones de uso del sitio y de los servicios de desarrollo de CTG Code: propiedad intelectual, licenciamiento, responsabilidad y jurisdicción.',
            intro: `Bienvenido al sitio web de CTG Code. Este sitio web y los servicios de desarrollo de software relacionados son operados por ${responsable}. Al acceder a este sitio o contratar nuestros servicios, aceptas cumplir y estar sujeto a los siguientes términos y condiciones. Si no estás de acuerdo con alguna parte, por favor no utilices este sitio ni adquieras nuestros servicios.`,
            sections: [
                {
                    heading: 'Propiedad Intelectual y Licenciamiento de Software',
                    items: [
                        {
                            term: 'Propiedad de CTG Code',
                            text: `Todo el contenido, diseño de interfaz, código fuente base, herramientas, marcas y gráficos propios expuestos en este sitio web o integrados en nuestras soluciones son propiedad exclusiva de CTG Code (propiedad de ${legalEntity.fullName}).`,
                        },
                        {
                            term: 'Entregas a Clientes',
                            text: 'El código fuente, automatización o software desarrollado para un cliente pertenece a CTG Code, a menos que se negocie y formalice explícitamente la transferencia total de los derechos patrimoniales mediante el pago del valor correspondiente especificado en el contrato.',
                        },
                        {
                            term: 'Licencia de Uso',
                            text: 'Hasta que no se realice dicha transferencia, el cliente recibe una licencia de uso interna, no exclusiva y permanente. Esta copia del código se entrega exclusivamente para fines de operación interna del cliente.',
                        },
                        {
                            term: 'Libertad de Mantenimiento',
                            text: 'Esta licencia otorga expresamente al cliente la libertad de contratar a terceros para realizar nuevas funciones, modificaciones o tareas de mantenimiento sobre el software entregado; en ningún caso condicionamos o forzamos al cliente a trabajar exclusivamente con nosotros para la evolución de su plataforma.',
                        },
                    ],
                },
                {
                    heading: 'Responsabilidad por Filtraciones y Custodia de Código',
                    items: [
                        {
                            text: 'Cualquier filtración, copia no autorizada o exposición de un código que nosotros no hayamos publicado de forma abierta (como repositorios privados de GitHub o librerías propietarias) será responsabilidad exclusiva del cliente una vez que el software haya sido entregado.',
                        },
                        {
                            text: 'Si la filtración o mal uso del código es ocasionado por el personal externo o los terceros que el cliente decida contratar para mantenimiento o actualizaciones, la responsabilidad legal ante CTG Code seguirá siendo del cliente, quedando a su entera discreción realizar las acciones de repetición legales correspondientes contra dicho tercero.',
                        },
                        {
                            text: 'Queda terminantemente prohibido realizar ingeniería inversa, hackear, o hacer cualquier tipo de uso malicioso o ilícito de cualquier software entregado por nosotros.',
                        },
                    ],
                },
                {
                    heading: 'Uso de Proveedores y Limitación de Responsabilidad Técnica',
                    items: [
                        {
                            term: 'Compromiso de Calidad',
                            text: 'Nos comprometemos formalmente a construir e implementar nuestras soluciones utilizando proveedores de infraestructura y servicios serios, consolidados y de alto estándar a nivel mundial (tales como Google, GitHub, Formspree, Hostinger, entre otros), con el único objetivo de disminuir al máximo cualquier riesgo de fallo en el servicio o vulnerabilidad de seguridad.',
                        },
                        {
                            term: 'Fallas Fuera de Control',
                            text: 'Debido a la naturaleza del software, CTG Code no se hace responsable legal ni económicamente por fallas de servicio, caídas de servidor, problemas de conectividad o brechas de seguridad que dependan directamente de estos terceros proveedores. Trataremos siempre de brindar soporte y buscar una solución a todo cuanto esté bajo nuestro control técnico directo; sin embargo, si la solución no es posible por fallas del proveedor, el cliente entiende y acepta que está fuera de nuestro alcance.',
                        },
                        {
                            term: 'Migraciones',
                            text: 'En caso de que el cliente decida migrar sus sistemas, bases de datos o infraestructura hacia otros servidores o tecnologías, dicho trabajo de consultoría, exportación y despliegue se cotizará y cobrará de forma totalmente independiente.',
                        },
                    ],
                },
                {
                    heading: 'Ley Aplicable y Jurisdicción',
                    body: 'Estos términos se rigen e interpretan bajo las leyes de la República de Colombia. Cualquier disputa, reclamación o controversia derivada del uso de este sitio web o de la ejecución de nuestros servicios de desarrollo será sometida a la jurisdicción exclusiva de los tribunales de la ciudad de Cartagena, Colombia.',
                },
            ],
        },
    },
    notFound: {
        status: 'error 404 · ruta no encontrada',
        title: 'Esta página se hundió con el atardecer',
        lead: 'El mar se la llevó — o quizá nunca existió. El faro sigue encendido para guiarte de vuelta a puerto.',
        cta: 'Volver a puerto',
        coords: 'puerto seguro → 10.4236° N, 75.5518° W · Cartagena de Indias',
    },
    langNotice: {
        message: 'Esta página también está disponible en español.',
        action: 'Ver en español',
        dismiss: 'Cerrar aviso',
    },
    cookies: {
        message: 'Usamos cookies para medir el tráfico y mejorar el sitio. Nada se activa hasta que decidas.',
        accept: 'Aceptar',
        reject: 'Rechazar',
    },
    footer: {
        eyebrow: 'estudio de software · cartagena de indias',
        claim: '¿Zarpamos?',
        lead: 'Cuéntanos qué quieres construir y fijamos el rumbo.',
        surface: 'volver a la superficie',
        colophon: '$ hecho a mano frente al mar · 10.4236° N, 75.5518° W',
        rights: 'todos los derechos reservados',
        nav: 'navegación',
        legal: 'legal',
        channels: 'canales',
        privacy: 'Política de privacidad',
        privacySlug: 'privacidad',
        terms: 'Términos y condiciones',
        termsSlug: 'terminos',
        email: 'Correo',
        form: {
            name: 'nombre',
            namePlaceholder: '¿Cómo te llamamos?',
            email: 'correo',
            emailPlaceholder: 'tu@correo.com',
            message: 'tu idea',
            messagePlaceholder: 'Una web, una app, una integración…',
            cta: 'Enviar',
        },
        success: '¡Rumbo fijado!',
        messageSent: 'Hemos recibido tu idea. Nos pondremos en contacto contigo tan pronto como nos sea posible.',
        error: 'Algo salió mal',
        messageError: 'Lo sentimos, hubo un error al enviar tu mensaje. Por favor, inténtalo de nuevo más tarde o contáctanos directamente a través de nuestros canales.',
        formReset: 'Enviar otro mensaje',
    }
};

export default es;