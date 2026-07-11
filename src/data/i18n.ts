import es from './locales/es';
import en from './locales/en';

export type LocaleSchema = {
    nav: {
        home: string;
        services: string;
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
    notFound: {
        status: string;
        title: string;
        lead: string;
        cta: string;
        coords: string;
    };
    router: {
        eyebrow: string;
        title: string;
        lead: string;
        detecting: string;
        ready: string;
    };
    footer: {
        eyebrow: string;
        claim: string;
        lead: string;
        surface: string;
        colophon: string;
        rights: string;
    };
};

export const languages = {
    es: 'Español',
    en: 'English',
} as const;

export const defaultLang = 'es';

export const locales = { es, en } as const;