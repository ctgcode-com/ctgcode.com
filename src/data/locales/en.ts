import type { LocaleSchema } from '../i18n';

const en: LocaleSchema = {
    nav: {
        home: 'Home',
        services: 'Services',
        contact: 'Contact',
        cta: 'Start your project',
        openMenu: 'Open menu',
        closeMenu: 'Close menu',
    },
    hero: {
        eyebrow: 'Software studio · Cartagena',
        title: 'Custom software solutions',
        description: 'High-performance static development.',
    },
    notFound: {
        status: 'error 404 · route not found',
        title: 'This page sank with the sunset',
        lead: 'The sea took it — or maybe it never existed. The lighthouse is still on to guide you back to harbor.',
        cta: 'Back to harbor',
        coords: 'safe harbor → 10.4236° N, 75.5518° W · Cartagena de Indias',
    },
    router: {
        eyebrow: 'entry log · ctgcode.com',
        title: 'Two shores, one sunset',
        lead: 'We are charting your course to harbor. If the wind takes its time, pick your shore:',
        detecting: '$ charting course…',
        ready: '$ course set → ',
    }
};

export default en;