import { OGImageBuilder, createOGHTML } from './og-base';
import { readFile } from 'node:fs/promises';
import path from 'node:path';

interface LocaleContent {
  eyebrow: string;
  headline: string;
  footer: string;
}

/**
 * Las SEIS imágenes OG de las páginas de plantilla (tres plantillas × dos
 * idiomas).
 *
 * El nombre del archivo NO es libre: el Layout construye la URL como
 * `/images/og/{lang}/{pageName}.png` por plantilla de cadena, así que si el
 * PNG no existe se publica un og:image roto sin que nada falle. Las claves de
 * aquí abajo son exactamente los `pageName` de esas páginas.
 */
const pages: Record<string, Record<'es' | 'en', LocaleContent>> = {
  'template-professional-services': {
    es: {
      eyebrow: 'Plantilla 01 · CTG Code',
      headline: 'La página de quien vende criterio',
      footer:
        'Para consultoras, despachos y firmas. Dominio y hosting del primer año incluidos.',
    },
    en: {
      eyebrow: 'Template 01 · CTG Code',
      headline: 'The site for people who sell judgement',
      footer:
        'For consultancies, practices and firms. Domain and hosting for the first year included.',
    },
  },
  'template-local-business': {
    es: {
      eyebrow: 'Plantilla 02 · CTG Code',
      headline: 'La página del negocio que se busca desde la calle',
      footer:
        'Carta o catálogo, galería, horarios, mapa y WhatsApp. Pensada para el móvil.',
    },
    en: {
      eyebrow: 'Template 02 · CTG Code',
      headline: 'The site for a business people look up from the street',
      footer:
        'Menu or catalogue, gallery, hours, map and WhatsApp. Built for the phone.',
    },
  },
  'template-startup-product': {
    es: {
      eyebrow: 'Plantilla 03 · CTG Code',
      headline: 'La página de lo que todavía hay que explicar',
      footer:
        'Para SaaS, apps y lanzamientos. El problema primero, los planes después.',
    },
    en: {
      eyebrow: 'Template 03 · CTG Code',
      headline: 'The site for what still needs explaining',
      footer:
        'For SaaS, apps and launches. The problem first, the plans after.',
    },
  },
};

export async function buildTemplatesOG(builder: OGImageBuilder): Promise<void> {
  console.log('[i] Generando imágenes OG para las páginas de plantillas...');

  const logoSvg = await readFile('./src/assets/logo.svg', 'utf-8');
  const logoBase64 = `data:image/svg+xml;base64,${Buffer.from(logoSvg).toString('base64')}`;

  for (const [pageName, locales] of Object.entries(pages)) {
    for (const [lang, content] of Object.entries(locales)) {
      const html = await createOGHTML({ ...content, logoBase64 });

      const outputPath = path.resolve(
        `./public/images/og/${lang}/${pageName}.png`,
      );
      await builder.generateImage({ html, outputPath });
      console.log(`  -> Creada: public/images/og/${lang}/${pageName}.png`);
    }
  }
}
