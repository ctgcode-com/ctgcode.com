/**
 * Registro de tecnologías: clave estable → logotipo y nombre de marca.
 *
 * Vive aquí y no dentro de un componente porque lo consumen varios: la
 * bitácora (vía `StackList`), las páginas de plantilla y `sections/Services`.
 * Es la única fuente: no hagas copias locales — la que había en `Services`
 * acabó divergiendo y no conocía `tailwind`.
 *
 * Los nombres NO se traducen: son marcas. Por eso el registro no vive en los
 * locales, y por eso los locales guardan la CLAVE (`astro`) y no el texto.
 */
import astroUrl from '../assets/astro.svg?url';
import cssUrl from '../assets/css.svg?url';
import fastapiUrl from '../assets/fastapi.svg?url';
import htmxUrl from '../assets/htmx.svg?url';
import javascriptUrl from '../assets/javascript.svg?url';
import jinjaUrl from '../assets/jinja.svg?url';
import lucideUrl from '../assets/lucide.svg?url';
import postgresqlUrl from '../assets/postgresql.svg?url';
import pythonUrl from '../assets/python.svg?url';
import restApiUrl from '../assets/rest-api.svg?url';
import rustUrl from '../assets/rust.svg?url';
import tailwindUrl from '../assets/tailwind.svg?url';
import typescriptUrl from '../assets/typescript.svg?url';

export type Tech = { src: string; name: string };

export const TECH: Record<string, Tech> = {
    astro: { src: astroUrl, name: 'Astro' },
    css: { src: cssUrl, name: 'CSS' },
    fastapi: { src: fastapiUrl, name: 'FastAPI' },
    htmx: { src: htmxUrl, name: 'htmx' },
    javascript: { src: javascriptUrl, name: 'JavaScript' },
    jinja: { src: jinjaUrl, name: 'Jinja' },
    lucide: { src: lucideUrl, name: 'Lucide' },
    postgresql: { src: postgresqlUrl, name: 'PostgreSQL' },
    python: { src: pythonUrl, name: 'Python' },
    'rest-api': { src: restApiUrl, name: 'REST API' },
    rust: { src: rustUrl, name: 'Rust' },
    tailwind: { src: tailwindUrl, name: 'Tailwind' },
    typescript: { src: typescriptUrl, name: 'TypeScript' },
};

/** Nombres escritos para humanos → clave del registro. */
const techAlias: Record<string, string> = {
    'css propio': 'css',
    'hand-written css': 'css',
    'rest api': 'rest-api',
};

export const techKey = (raw: string): string => {
    const k = raw.toLowerCase().trim();
    return techAlias[k] ?? k;
};

/** ¿Toda la lista tiene logotipo? Si no, quien la pinta cae a texto. */
export const allHaveIcons = (items: string[]): boolean =>
    items.every((raw) => TECH[techKey(raw)] !== undefined);
