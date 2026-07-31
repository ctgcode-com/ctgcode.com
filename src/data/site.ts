export const siteConfig = {
    name: 'CTG Code',
    author: 'David Serrano',
    // Dominio de producción: base de las canónicas, hreflang y OG.
    url: 'https://ctgcode.com',
    // Respaldo cuando una vista no tenga su propia tarjeta en
    // /images/og/<lang>/<pageName>.png: se sirve la del inicio en español.
    fallbackOgImage: '/images/og/es/home.png',
} as const;