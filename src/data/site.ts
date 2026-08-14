export const siteConfig = {
    name: 'CTG Code',
    author: 'David Serrano',
    // Dominio de producción: base de las canónicas, hreflang y OG.
    url: 'https://ctgcode.com',
    // Respaldo cuando una vista no tenga su propia tarjeta en
    // /images/og/<lang>/<pageName>.png: se sirve la del inicio en español.
    fallbackOgImage: '/images/og/es/home.png',
    // El número de atención, en E.164 SIN el «+» (el formato que exige wa.me).
    // Única fuente de la verdad: de aquí salen el botón del hero, el canal del
    // footer y el `telephone` del JSON-LD (ese sí con «+»).
    whatsapp: '573052532602',
} as const;