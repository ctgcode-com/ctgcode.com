import { OGImageBuilder, createOGHTML } from './og-base';
import { readFile } from 'node:fs/promises';
import path from 'node:path';

interface LocaleContent {
  eyebrow: string;
  headline: string;
  footer: string;
}

type Locales = Record<'es' | 'en', LocaleContent>;

/** La bitácora: lo entregado, lo que se construye y lo que está listo. */
const locales: Locales = {
  es: {
    eyebrow: 'Proyectos · CTG Code',
    headline: 'Todo lo que llevamos a bordo',
    footer:
      'Sitios en producción, Helio, tres plantillas web y tres automatizaciones.',
  },
  en: {
    eyebrow: 'Projects · CTG Code',
    headline: 'Everything we have on board',
    footer:
      'Live sites, Helio, three web templates and three automations.',
  },
};

export async function buildProjectsOG(builder: OGImageBuilder): Promise<void> {
  console.log('[i] Generando imágenes OG para la página de proyectos...');

  const logoSvg = await readFile('./src/assets/logo.svg', 'utf-8');
  const logoBase64 = `data:image/svg+xml;base64,${Buffer.from(logoSvg).toString('base64')}`;

  for (const [lang, content] of Object.entries(locales)) {
    const html = await createOGHTML({ ...content, logoBase64 });

    const outputPath = path.resolve(`./public/images/og/${lang}/projects.png`);
    await builder.generateImage({ html, outputPath });
    console.log(`  -> Creada: public/images/og/${lang}/projects.png`);
  }
}
