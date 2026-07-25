import { OGImageBuilder, createOGHTML } from './og-base';
import { readFile } from 'node:fs/promises';
import path from 'node:path';

interface LocaleContent {
  eyebrow: string;
  headline: string;
  footer: string;
}

type Locales = Record<'es' | 'en', LocaleContent>;

/** La carta: cada servicio a fondo, cómo trabajamos y los compromisos. */
const locales: Locales = {
  es: {
    eyebrow: 'Servicios · CTG Code',
    headline: 'Ingeniería de software, servicio por servicio',
    footer:
      'Software a la medida, web de alto rendimiento y automatización de flujos.',
  },
  en: {
    eyebrow: 'Services · CTG Code',
    headline: 'Software engineering, service by service',
    footer:
      'Custom software, high-performance web and workflow automation.',
  },
};

export async function buildServicesOG(builder: OGImageBuilder): Promise<void> {
  console.log('[i] Generando imágenes OG para la página de servicios...');

  const logoSvg = await readFile('./src/assets/logo.svg', 'utf-8');
  const logoBase64 = `data:image/svg+xml;base64,${Buffer.from(logoSvg).toString('base64')}`;

  for (const [lang, content] of Object.entries(locales)) {
    const html = await createOGHTML({ ...content, logoBase64 });

    const outputPath = path.resolve(`./public/images/og/${lang}/services.png`);
    await builder.generateImage({ html, outputPath });
    console.log(`  -> Creada: public/images/og/${lang}/services.png`);
  }
}
