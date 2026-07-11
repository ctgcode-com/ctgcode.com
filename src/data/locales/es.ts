import type { LocaleSchema } from '../i18n';

const es: LocaleSchema = {
    nav: {
        home: 'Inicio',
        services: 'Servicios',
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
        scroll: '$ scroll --hacia-el-mar',
        chipA: 'horaDorada: true',
        chipB: '// a mano, a medida',
    },
    notFound: {
        status: 'error 404 · ruta no encontrada',
        title: 'Esta página se hundió con el atardecer',
        lead: 'El mar se la llevó — o quizá nunca existió. El faro sigue encendido para guiarte de vuelta a puerto.',
        cta: 'Volver a puerto',
        coords: 'puerto seguro → 10.4236° N, 75.5518° W · Cartagena de Indias',
    },
    router: {
        eyebrow: 'bitácora de entrada · ctgcode.com',
        title: 'Dos orillas, un mismo atardecer',
        lead: 'Estamos fijando tu rumbo para llevarte a puerto. Si el viento tarda, elige tu orilla:',
        detecting: '$ detectando rumbo…',
        ready: '$ rumbo fijado → ',
    },
    footer: {
        eyebrow: 'estudio de software · cartagena de indias',
        claim: '¿Zarpamos?',
        lead: 'Cuéntanos qué quieres construir y fijamos el rumbo.',
        surface: 'volver a la superficie',
        colophon: '$ hecho a mano frente al mar · 10.4236° N, 75.5518° W',
        rights: 'todos los derechos reservados',
    }
};

export default es;