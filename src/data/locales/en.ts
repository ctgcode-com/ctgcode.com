import type { LocaleSchema } from '../i18n';
import { legalEntity } from '../legal';

/** Identification of the Data Controller, shared by both legal documents. */
const controller = `${legalEntity.fullName}, a natural person formally registered as a merchant with the Chamber of Commerce, identified with Tax ID (NIT) ${legalEntity.taxId}`;

const en: LocaleSchema = {
    nav: {
        home: 'Home',
        services: 'Services',
        projects: 'Projects',
        contact: 'Contact',
        cta: 'Start your project',
        openMenu: 'Open menu',
        closeMenu: 'Close menu',
    },
    hero: {
        eyebrow: 'Software studio · Cartagena',
        title: 'Building the digital future from the Caribbean',
        titlePre: 'Building ',
        titleMark: 'the digital future ',
        titlePost: 'from the Caribbean',
        description: 'Custom software development and high-performance web solutions, from Cartagena to the world.',
        file: 'future.ts',
        code: [
            'import { sun, sea } from "@caribbean/cartagena";',
            '',
            'const studio = new CTGCode({',
            '  origin: [10.4236, -75.5518],',
            '  goldenHour: true,',
            '});',
            '',
            'export const future = studio',
            '  .design({ handcrafted: true })',
            '  .build({ tailorMade: true })',
            '  .deploy("→ to the world");',
        ],
        statusBuilding: 'compiling…',
        statusReady: 'live',
        output: '→ 200 OK · future deployed in 47ms',
        secondary: 'see services',
        scroll: '$ scroll --sail-with-us',
        chipA: 'goldenHour: true',
        chipB: '// handcrafted, tailor-made',
    },
    about: {
        eyebrow: 'our values',
        title: 'Four principles\nthat drive our work',
        tag: 'chart of values · scale 1:1',
        portLabel: 'our commitment',
        commitment: {
            eyebrow: 'to you',
            title: 'Your success is our destination',
            body: 'We believe quality software is built on clear standards. We develop scalable solutions with solid architecture, transparency, and a strong focus on performance, guiding our clients from the initial idea to deployment.',
            signature: '$ course set → your success',
        },
        values: [
            {
                bearing: '000°',
                tagline: 'true north',
                name: 'Trust',
                body: 'We don’t improvise. From day one, we establish clear scopes, realistic timelines, and costs with no surprises. We deliver what we promise.',
            },
            {
                bearing: '090°',
                tagline: 'where the sun rises',
                name: 'Excellence',
                body: 'We don’t settle for "it works". We care about every detail: the user experience, the efficiency of the code, and the quality of the final product.',
            },
            {
                bearing: '270°',
                tagline: 'toward what’s next',
                name: 'Innovation',
                body: 'We adopt modern technologies with judgment. We embrace the new when it brings real value, and stick to the proven when stability matters most.',
            },
            {
                bearing: '180°',
                tagline: 'open sea',
                name: 'Resilience',
                body: 'Technical or business challenges are part of the journey. We face them head-on with robust solutions designed to withstand time and market changes.',
            },
        ],
    },
    projects: {
        eyebrow: 'work',
        title: 'Shipped work',
        lead: 'Live sites and numbers anyone can measure again.',
        ctaAll: 'See all projects',
        indexSlug: 'projects',
        visit: 'Visit the site',
        metricsSource: 'Measured with PageSpeed Insights · August 2026',
        delivered: [
            {
                slug: 'recogras',
                client: 'Recogras',
                tagline: 'Certified used-oil collection · Cartagena',
                summary:
                    'Corporate site for an environmental operator that collects used cooking oil and grease-trap waste from restaurants, hotels and food businesses. Built with Astro and statically rendered: no extra layers, all the weight put on opening fast from a head chef’s phone.',
                url: 'https://recograscolombia.com/',
                urlLabel: 'recograscolombia.com',
                stack: ['astro', 'tailwind', 'css'],
                metrics: [
                    { label: 'Performance (desktop)', value: '100' },
                    { label: 'Performance (mobile)', value: '100' },
                    { label: 'SEO', value: '100' },
                    { label: 'Accessibility', value: '100' },
                ],
                testimonial: {
                    label: 'what the client says',
                    quote:
                        'Excellent work… very professional and efficient throughout. I recommend them.',
                    author: 'Joseph Caballero Lamadrid',
                    source: 'Google review · July 2026',
                    sourceUrl: 'https://maps.app.goo.gl/st6sCh5rgCaqkSri7',
                    note: 'Translated from the original review, written in Spanish.',
                },
            },
            {
                slug: 'systemslab',
                client: 'Systemslab',
                tagline: 'IT support and electronic security · Cartagena',
                summary:
                    'Corporate site and product catalogue for a company doing IT support, home automation, networking and electronic security. The landing page explains the service and the catalogue gives every product its own page, with filters; it is all baked as static HTML, so visitors never touch the database.',
                extra:
                    'The site shipped with an admin panel of its own: the client creates categories, adds and edits products with their photos and prices, and builds the ribbons on the home page by choosing which categories appear in each one. One click on “Publish” rebuilds the site with whatever changed — no code, and no need to call us.',
                url: 'https://systemslab.com.co/',
                urlLabel: 'systemslab.com.co',
                stack: ['astro', 'tailwind', 'lucide', 'php', 'mysql', 'shadcn'],
                metrics: [
                    { label: 'Performance (desktop)', value: '100' },
                    { label: 'Performance (mobile)', value: '98' },
                    { label: 'SEO', value: '100' },
                    { label: 'Accessibility', value: '100' },
                ],
            },
        ],
    },
    projectsPage: {
        metaTitle: 'Projects',
        metaDescription:
            'What CTG Code has on board: live sites, Helio (our management system for repair shops), three web templates and three automations ready to adapt.',
        eyebrow: "ship's log",
        title: 'Everything we have on board',
        lead: 'What we have shipped, what we are building, and what is already there to adapt. No filler mockups: every entry says exactly where it stands.',
        manifest: [
            { idx: '01', label: 'Shipped', href: '#shipped' },
            { idx: '02', label: 'Our own product', href: '#helio' },
            { idx: '03', label: 'Web templates', href: '#templates' },
            { idx: '04', label: 'Automations', href: '#automations' },
        ],
        labels: {
            status: 'status',
            stack: 'stack',
            demo: 'View demo',
            detail: 'View the template',
            demoSoon: 'demo in the works',
            shotSoon: 'screenshot on the way',
            audience: 'built for',
            includes: 'includes',
        },
        delivered: {
            idx: '01',
            eyebrow: 'shipped',
            title: 'Live, and in the client’s hands',
            lead: 'The work that already runs outside our hands: public sites, with numbers anyone can measure again.',
            status: 'shipped · live',
            extraLabel: 'beyond the site',
        },
        helio: {
            idx: '02',
            eyebrow: 'our own product · under construction',
            name: 'Helio',
            tagline: 'Business management for repair and service shops',
            status: 'in development',
            summary:
                'Helio is the SaaS we are building in house. It comes from a problem every growing shop runs into: intake gets written in a notebook, the inventory lives in someone’s head, and nobody can say for certain what was done to a given unit six months ago. Helio puts all three in one system.',
            scope: 'Aimed, to begin with, at technical service shops: phones, computers, electronics, vehicles, tools and machinery.',
            modules: [
                {
                    idx: 'i',
                    name: 'Staff, roles and permissions',
                    body: 'Everyone on the floor signs in with their own account and sees exactly what their job requires. Roles decide who takes units in, who moves stock and who closes a work order.',
                },
                {
                    idx: 'ii',
                    name: 'Inventory of two natures',
                    body: 'A stockroom that understands the difference between what gets used up and what comes back: consumables that are deducted on use, and tools that are assigned, lent out and returned, with the person responsible in plain sight.',
                },
                {
                    idx: 'iii',
                    name: 'Traceability and maintenance',
                    body: 'Every unit that enters the shop carries its own history: what was done, by whom and when. Preventive maintenance with its schedule and corrective work with its diagnosis, on the same timeline.',
                },
            ],
            stack: ['python', 'fastapi', 'rust', 'postgresql', 'astro', 'typescript'],
            note: 'No public screenshots or demo yet: once Helio opens its doors, it will be linked from here.',
        },
        templates: {
            idx: '03',
            eyebrow: 'web templates',
            title: 'Three starting points, not three catalogue themes',
            lead: 'Foundations we built ourselves for the three briefs that come up most often. They adapt to your brand, your content and the way you sell — we do not just drop your logo on top.',
            items: [
                {
                    slug: 'professional-services',
                    kicker: 'template 01',
                    name: 'Professional services',
                    body: 'For those who sell judgement and trust before any product. The structure is built to explain the service clearly, show track record and credentials, and keep the contact details one click away at all times.',
                    audience: [
                        'Accountants',
                        'Lawyers',
                        'Consultants',
                        'Financial advisors',
                        'Architects',
                    ],
                    demoUrl: '/en/template-professional-services',
                },
                {
                    slug: 'local-business',
                    kicker: 'template 02',
                    name: 'Local businesses',
                    body: 'For the business that lives on being found nearby. A storefront page with opening hours, location and direct WhatsApp contact, a visual menu or catalogue, and everything tuned to open fast from a phone, on the street, on a weak signal.',
                    audience: [
                        'Restaurants',
                        'Salons',
                        'Workshops',
                        'Shops',
                        'Gyms',
                    ],
                    demoUrl: '/en/template-local-business',
                },
                {
                    slug: 'startups-products',
                    kicker: 'template 03',
                    name: 'Startups & products',
                    body: 'For launching something that still needs explaining. A landing page that tells the problem before the feature list, lays out plans and pricing without the fog, and answers the usual objections before asking for a sign-up.',
                    audience: [
                        'SaaS',
                        'Apps',
                        'Launches',
                        'Digital products',
                    ],
                    demoUrl: '/en/template-startup-product',
                },
            ],
        },
        automations: {
            idx: '04',
            eyebrow: 'automations',
            title: 'Working parts that bolt onto what you already run',
            lead: 'These are not ideas: they are modules we have built, ready to adapt to your operation and integrate with the tools you already use.',
            items: [
                {
                    slug: 'access-control',
                    code: 'ACC',
                    name: 'Smart access control',
                    body: 'Who comes in, when, and where they may go — with no clipboard at the front desk. It works with cards, with biometrics or with both, and logs every entry and exit.',
                    includes: [
                        'Cards and/or biometrics',
                        'Permissions by zone and time slot',
                        'Entry and exit log',
                        'Attendance reports',
                    ],
                    demoUrl: '/en/automation-access-control',
                },
                {
                    slug: 'booking-engine',
                    code: 'RES',
                    name: 'Capacity-based booking engine',
                    body: 'Bookings against real capacity: the system knows how many places are left and closes the slot when they run out. Once it is full, whoever arrives late is not turned away — they join the waiting list and move up only if somebody cancels.',
                    includes: [
                        'Capacity per time slot',
                        'Automatic waiting list',
                        'Confirmations and reminders',
                        'Cancellations that free the slot',
                    ],
                    demoUrl: '/en/automation-bookings',
                },
                {
                    slug: 'billing-alerts',
                    code: 'FAC',
                    name: 'Billing alert system',
                    body: 'Collections stop depending on somebody remembering. The system watches the state of every invoice and notifies the customer by email and/or WhatsApp at each point along the way: due soon, due, overdue and paid.',
                    includes: [
                        'Notices by email and/or WhatsApp',
                        'Four states: due soon, due, overdue, paid',
                        'Configurable notice schedule',
                        'History of everything sent to each customer',
                    ],
                    demoUrl: '/en/automation-billing-alerts',
                },
            ],
        },
        closing: {
            eyebrow: 'next heading',
            title: 'Does any of this look like yours?',
            body: 'If something here is close to what you need, there is no reason to start from scratch: we begin from the piece that already exists and fit it to your operation. And if yours is not on this list, we want to hear about it too.',
            cta: 'Tell us about your project',
        },
    },
    servicesPage: {
        metaTitle: 'Services',
        metaDescription:
            'The full catalogue from CTG Code: every service in depth —what it includes and who it is for—, how we work by milestones and our commitments. Custom software, high-performance web and automation.',
        eyebrow: 'services catalogue',
        title: 'Software engineering, service by service',
        titleMark: 'service by service',
        lead: 'The home section showed you the map; this is the full chart. Every service in depth —what it includes and who it is for—, how we work by milestones and what you can take for granted building with us.',
        labels: {
            deliverables: 'includes',
            forWho: 'ideal for',
            stack: 'stack',
        },
        manifest: [
            { idx: '01', label: 'The catalogue', href: '#catalogo' },
            { idx: '02', label: 'How we work', href: '#proceso' },
            { idx: '03', label: 'Commitments', href: '#compromisos' },
        ],
        catalog: [
            {
                idx: '01',
                code: 'SFT',
                name: 'Custom software development',
                tagline: 'Platforms built for your operation, not for a catalogue.',
                body: 'For when what you need does not fit a template or a generic SaaS. We model your operation —its rules, its roles, its data— and build the exact platform that holds it up: admin dashboards, internal portals, management systems. Clean architecture, no extra layers, built to grow with you without a rewrite six months in.',
                deliverables: [
                    'Tailored architecture and data model',
                    'Your own admin dashboard',
                    'Documented API to plug into what you already use',
                    'Deployment and cloud infrastructure',
                    'A copy of the source code with a usage licence',
                    '30 days of post-delivery warranty',
                ],
                forWho: [
                    'Growing companies',
                    'Operations with rules of their own',
                    'Teams living in spreadsheets today',
                ],
                stack: ['python', 'fastapi', 'postgresql', 'typescript', 'astro', 'rust'],
            },
            {
                idx: '02',
                code: 'WEB',
                name: 'High-performance web development',
                tagline: 'Sites that open instantly and drive action.',
                body: 'Your site is the first thing a client sees: it has to open instantly and push them to act. We build corporate sites and landing pages baked as static HTML —no heavy frameworks in the browser— to nail 100 on PageSpeed, climb in search and stay smooth even on a bad connection, from a phone and out on the street.',
                deliverables: [
                    'Tailored responsive design (mobile first)',
                    '100/100 PageSpeed target',
                    'On-page technical SEO and structured data',
                    'Contact forms and integrations',
                    'Analytics with consent (Consent Mode v2)',
                    'Multi-language when you need it',
                ],
                forWho: [
                    'Brands and studios',
                    'Professional services',
                    'Launches and campaigns',
                ],
                stack: ['astro', 'typescript', 'javascript', 'css', 'htmx', 'jinja'],
            },
            {
                idx: '03',
                code: 'AUT',
                name: 'Automation and workflow integration',
                tagline: 'Let the software do the repetitive part for you.',
                body: 'Every business drags along tasks someone repeats by hand every day: moving data around, notifying, billing, logging. We connect the tools you already use and build the workflows that move them on their own, with custom interfaces and APIs. The result: less manual work, fewer errors and faster responses.',
                deliverables: [
                    'Integration with your current tools',
                    'Workflows configured to your operation',
                    'Notifications by email and/or WhatsApp',
                    'Control panel with historical logging',
                    'Documented custom APIs',
                ],
                forWho: [
                    'Teams with repetitive tasks',
                    'Businesses with many alerts or invoices',
                    'Anyone juggling several disconnected tools',
                ],
                stack: ['python', 'fastapi', 'rest-api', 'postgresql'],
            },
        ],
        process: {
            idx: '02',
            eyebrow: 'how we work',
            titlePre: 'From idea to production, ',
            titlePost: 'by milestones',
            lead: 'No black boxes: you know exactly where your project stands at all times, and you pay against deliveries, not promises.',
            steps: [
                {
                    idx: '01',
                    name: 'Discovery',
                    body: 'We define the scope, the requirements and what counts as «done» together. The heading is set here, before a single line of code moves.',
                },
                {
                    idx: '02',
                    name: 'Fixed-price proposal',
                    body: 'We quote the agreed scope at a fixed price, with no hidden costs. You choose the terms: a 50/50 split or payments divided by delivery milestones.',
                },
                {
                    idx: '03',
                    name: 'Build by milestones',
                    body: 'We move in visible, continuous deliveries. At every milestone you see the real work running, not a progress bar.',
                },
                {
                    idx: '04',
                    name: 'Delivery and warranty',
                    body: 'We deploy, hand you your copy of the code with its licence, and cover 30 days of warranty for fixes and operational adjustments.',
                },
                {
                    idx: '05',
                    name: 'Optional support',
                    body: 'If you want, we stay aboard: preventive maintenance, continuous optimisation and cloud infrastructure management.',
                },
            ],
        },
        commitments: {
            idx: '03',
            eyebrow: 'commitments',
            title: 'How we stand behind the work',
            lead: 'What you can take for granted, from the first email to long after delivery.',
            items: [
                {
                    code: '01',
                    title: 'Fixed price, no surprises',
                    body: 'We quote on the agreed scope. Anything beyond it is discussed first; it never shows up out of nowhere on the invoice.',
                },
                {
                    code: '02',
                    title: 'Clean architecture',
                    body: 'We pick the stack by the needs of the project, not by trend. No unnecessary layers, no filler code to weigh you down tomorrow.',
                },
                {
                    code: '03',
                    title: 'We never lock you in',
                    body: 'You get your copy of the code with a permanent usage licence and the freedom to maintain it with whoever you like. You never depend on us to grow.',
                },
                {
                    code: '04',
                    title: 'Remote, with you wherever you are',
                    body: 'We operate nationally and internationally, with communication and milestone deliveries ready for any location or time zone.',
                },
            ],
        },
        closing: {
            eyebrow: 'next heading',
            title: 'See what you need here?',
            body: 'If one of these services looks like what you have in mind, there is no need for more back-and-forth: tell us about the project and we will tell you where to start. And if yours does not quite fit this chart, we want to hear it too.',
            cta: 'Tell us about your project',
        },
    },
    services: {
        eyebrow: 'services',
        title: 'Engineering solutions built to scale',
        lead: 'Software development with clean architecture, measured speed, and a business-result focus.',
        ctaAll: 'Explore the full catalogue of services',
        indexSlug: 'services',
        featured: {
            label: 'flagship service',
            title: 'Custom Software Development',
            body: 'We design and build complex web platforms, admin dashboards and software architectures tailored to the exact needs of your business. We prioritise raw performance, security and scalability, delivering robust solutions with no unnecessary layers and no filler code.',
            stack: ['python', 'fastapi', 'postgresql', 'typescript', 'astro', 'rust'],
        },
        secondary: [
            {
                title: 'High-Performance Web Development',
                body: 'Corporate sites and landing pages built around conversion and instant load times. Optimised to 100% on PageSpeed to stand out in search, improve SEO rankings and deliver a seamless user experience.',
                stack: ['astro', 'typescript', 'javascript', 'css', 'htmx', 'jinja'],
            },
            {
                title: 'Automation Development & Integration',
                body: 'We connect the tools you already work with and automate recurring operational workflows. We build custom integrations and efficient API interfaces to cut manual work, remove errors and shorten response times.',
                stack: ['python', 'fastapi', 'rest-api', 'postgresql'],
            },
        ],
        faq: {
            eyebrow: 'faq // services',
            title: 'Before you write to us',
            items: [
                {
                    q: 'How long does a project take to develop?',
                    a: 'Development time varies with the complexity of the scope and the working dynamic. Factors such as requirement definition, API integrations and the availability of inputs (content, access credentials and client feedback) determine the final schedule. Every project ships with a clear work plan and defined milestones to guarantee continuous progress.',
                },
                {
                    q: 'How do you estimate costs and what payment terms do you offer?',
                    a: 'We quote at a fixed price based on the agreed scope and requirements. We offer payment terms adapted to the size of the project, such as a 50/50 split or payments divided by delivery milestones, ensuring transparency with no surprises and no hidden costs.',
                },
                {
                    q: 'What technologies do you use and how do you choose the stack for a project?',
                    a: 'We select tools according to the needs of the project: Astro is our preference for the web (SSG/SSR), complemented with HTMX, Jinja2 or Laravel depending on the case. On the backend Python leads (FastAPI, Django, Flask), boosted with Rust for performance-critical work, alongside Node.js and PHP. We work with relational and NoSQL databases (PostgreSQL, MySQL, SQLite, MongoDB, Firebase), containers with Docker and mobile development, always guaranteeing a clean and efficient architecture.',
                },
                {
                    q: 'Do you offer post-launch support and warranty?',
                    a: 'Yes, every project includes 30 days of post-delivery warranty for bug fixes or operational adjustments at no extra cost. We also offer optional plans for preventive maintenance, continuous optimisation and cloud infrastructure management.',
                },
                {
                    q: 'Do you work with clients outside of Cartagena or Colombia?',
                    a: 'Yes. We operate remotely both nationally and internationally. We have streamlined communication, project management, and milestone delivery processes to collaborate seamlessly with clients from any location or time zone.',
                },
            ],
        },
    },
    templates: {
        parentCrumb: 'Projects',
        labels: {
            demo: 'View the demo',
            audience: 'Who for',
            stack: 'Built with',
            sections: 'Sections',
            included: 'Included',
            extras: 'Quoted separately',
            price: 'Price',
            delivery: 'Delivery',
            visit: 'Visit the site',
        },
        included: {
            idx: '04',
            eyebrow: 'the engagement',
            title: 'What you get for that price',
            lead: 'The site published and running, not a folder somebody still has to upload. This is what goes in.',
            items: [
                {
                    title: '.com domain, first year',
                    body: 'We register and configure it in your name. From the second year the renewal is yours, paid straight to the provider with no commission from us.',
                },
                {
                    title: 'Hosting, first year',
                    body: 'Hosting with HTTPS and certificate. Same rule as the domain: the second year is on you.',
                },
                {
                    title: 'Contact form, connected',
                    body: 'Messages reach your inbox through a Formspree account set up with your details. No server to maintain.',
                },
                {
                    title: 'Direct WhatsApp contact',
                    body: 'A button that opens a conversation with your number, reachable from anywhere on the page.',
                },
                {
                    title: 'We load your content',
                    body: 'We place the copy, photos and details you send us, and we tell you beforehand if something will not look right: an image too small, a logo without a transparent background, a line that will not fit.',
                },
                {
                    title: 'Full technical SEO',
                    body: 'Everything that is solved in the code: tags, structured data, sitemap, canonicals, speed and accessibility.',
                },
                {
                    title: 'Two rounds of minor changes',
                    body: 'Within the first thirty days, to tune whatever reads differently once it is live.',
                },
                {
                    title: 'Thirty-day warranty',
                    body: 'We fix any programming or environment-configuration error at no cost. After that, support is optional and can be contracted.',
                },
            ],
            extrasLead: 'And this is not included. Not because we do not do it, but because it is not always needed and we would rather not charge for it by default.',
            extras: [
                {
                    title: 'Professional email on your domain',
                    body: 'Quoted according to how involved the setup your provider requires turns out to be.',
                },
                {
                    title: 'A second language',
                    body: 'What we charge for is the technical work of making the site bilingual — two versions, their URLs and their language tags — not the translation. You supply the translated copy.',
                },
                {
                    title: 'Search Console, Bing and Google Business Profile',
                    body: 'The part that lives outside the code: registering, verifying and wiring the site into each tool.',
                },
                {
                    title: 'Copywriting',
                    body: 'If you already have the copy written and settled, placing it costs nothing extra.',
                },
            ],
        },
        boundary: {
            idx: '05',
            eyebrow: 'the boundary',
            title: 'How far a template goes',
            lead: 'A template is a base already built to speed the work up, not a rigid mould. But it has a limit, and we would rather state it before quoting than after starting.',
            inLabel: 'Included in the price',
            outLabel: 'Now it is custom development',
            inItems: [
                'Colours, typefaces and logo',
                'All the copy, from the header to the footer',
                'Your photos, your icons and your favicon',
                'Reordering or hiding the sections it already ships with',
                'As many items as you like inside an existing section',
                'Contact details, opening hours and social profiles',
            ],
            outItems: [
                'A section the template does not have',
                'A second page: blog, portfolio, service detail pages',
                'A shop, cart or online payments',
                'Bookings, scheduling or real-time availability',
                'A private area, login or admin panel',
                'A content manager so you can edit it yourself',
                'Integration with a CRM, an ERP or an external API',
            ],
            note: 'Nothing on the right is a no: it is a separate quote. It gets built on top of this same base, without throwing away what is done.',
            noteStacked: 'Nothing in that second list is a no: it is a separate quote. It gets built on top of this same base, without throwing away what is done.',
        },
        siblings: {
            eyebrow: 'the other two',
            title: 'If this one is not yours',
        },
        closing: {
            eyebrow: 'next heading',
            title: 'Want it with your brand on it?',
            body: 'Tell us about the business and we will say plainly whether this template fits or whether what you need is custom development. If it fits, the closed quote comes in the same reply.',
            cta: 'Write to the studio',
        },
        pages: {
            professionalServices: {
                slug: 'templates/professional-services',
                metaTitle: 'Professional services website template',
                metaDescription:
                    'One-page site for consultancies, firms and practices: services, track record, indicators and contact. Static Astro, domain and hosting for the first year. From USD $560, delivered in 4–6 business days.',
                crumb: 'Template · Professional services',
                eyebrow: 'template 01 · professional services',
                title: 'The site for people who sell judgement',
                titleMark: 'judgement',
                lead: 'When what you sell cannot be seen or touched, the page has one job: explain what you solve, show you can do it, and keep the contact one click away. This base is built around that.',
                manifest: [
                    { idx: '01', label: 'Who it is for', href: '#who-for' },
                    { idx: '02', label: 'What is inside', href: '#inside' },
                    { idx: '03', label: 'In production', href: '#in-production' },
                    { idx: '04', label: "What's included", href: '#included' },
                    { idx: '05', label: 'How far it goes', href: '#boundary' },
                    { idx: '06', label: 'Price and timing', href: '#price' },
                    { idx: '07', label: 'Questions', href: '#questions' },
                ],
                demoUrl: '/en/template-professional-services/',
                facts: [
                    { label: 'From', value: 'USD $560' },
                    { label: 'Delivery', value: '4–6 business days' },
                    { label: 'In production', value: 'recograscolombia.com' },
                ],
                audience: {
                    idx: '01',
                    eyebrow: 'who it is for',
                    title: 'Five trades, one shared difficulty',
                    lead: 'They all sell something the client cannot assess before hiring it. Each profile arrives with its own version of the problem.',
                    items: [
                        {
                            who: 'Accountants',
                            pain: 'You get compared on price until people understand what you actually do. The structure gives you room to explain it before they ask.',
                        },
                        {
                            who: 'Lawyers',
                            pain: 'Trust is won on track record and credentials. They sit near the top, in plain sight, not buried in a PDF.',
                        },
                        {
                            who: 'Consultants',
                            pain: 'You sell an intangible: the header forces you to say in one line what you solve and for whom.',
                        },
                        {
                            who: 'Financial advisers',
                            pain: 'The indicators block exists to put verifiable numbers where the competition puts adjectives.',
                        },
                        {
                            who: 'Architects and engineers',
                            pain: 'The services grid carries six lines of work without any of them getting buried under the rest.',
                        },
                    ],
                },
                inside: {
                    idx: '02',
                    eyebrow: 'what is inside',
                    title: 'Seven pieces, a single page',
                    lead: 'There is nothing to decide about which sections you need: they are there, in the order a visitor needs them. They can be reordered or hidden, but they work as they come.',
                    shotAlt: 'First fold of the professional services template demo',
                    sections: [
                        {
                            idx: '01',
                            name: 'Navigation bar',
                            body: 'Links to every section plus a contact button that stays visible as the visitor scrolls.',
                        },
                        {
                            idx: '02',
                            name: 'Header',
                            body: 'Headline, subhead and two buttons, with a card alongside that sums up your offer at a glance.',
                        },
                        {
                            idx: '03',
                            name: 'Services',
                            body: 'A grid of up to six services, each with its icon, its title and the line that explains it.',
                        },
                        {
                            idx: '04',
                            name: 'About',
                            body: 'Two paragraphs to say who you are and where you come from, plus four pillars covering what sets you apart.',
                        },
                        {
                            idx: '05',
                            name: 'Indicators',
                            body: 'The numbers that build trust: years in business, clients served, projects closed — whatever you have and can stand behind.',
                        },
                        {
                            idx: '06',
                            name: 'Contact',
                            body: 'A form wired to your inbox and the direct details: phone, email, address and hours.',
                        },
                        {
                            idx: '07',
                            name: 'Footer',
                            body: 'Summary, navigation links, social profiles and copyright notice.',
                        },
                    ],
                    stack: ['astro', 'tailwind', 'lucide'],
                    stackNote:
                        'Static output: the site compiles to HTML and is served as is, with no JavaScript framework in the browser. Icons are generated as SVG at build time, so they cost no request.',
                },
                proof: {
                    idx: '03',
                    eyebrow: 'in production',
                    title: 'This base already sails on its own',
                    body: 'Recogras, a used-cooking-oil environmental manager in Cartagena, came out of this very template. It is the best argument we have: it shows how far a base travels once it carries a real business’s brand, content and photography.',
                    url: 'https://recograscolombia.com/',
                    urlLabel: 'recograscolombia.com',
                    metrics: [
                        { label: 'Performance · mobile', value: '98 – 100' },
                        { label: 'Performance · desktop', value: '100' },
                        { label: 'Accessibility', value: '100' },
                        { label: 'SEO and best practices', value: '100' },
                    ],
                    metricsSource:
                        'Measured with Lighthouse 13.4.1 against recograscolombia.com on 1 August 2026: three mobile runs and three desktop runs, discarding a warm-up pass. We publish the observed range, not the best run. Largest contentful paint came in at 1.4 s on mobile and 0.4–0.7 s on desktop.',
                },
                price: {
                    cop: '$1,400,000 – $2,000,000 COP',
                    usd: 'USD $560 – $790',
                    usdNote:
                        'Converted at the 31 July 2026 rate, transfer costs already included. The price in Colombian pesos is the governing one.',
                    delivery: '4 – 6 business days',
                    deliveryNote:
                        'The clock starts when payment is confirmed and everything needed to customise it has reached us: logo, colours, typefaces, copy, photos and contact details.',
                },
                faq: {
                    idx: '07',
                    eyebrow: 'questions',
                    title: 'What people ask before deciding',
                    items: [
                        {
                            q: 'Can I see this template running for a real client?',
                            a: 'Yes. recograscolombia.com is built on this very base. Compare that site with the demo and you will see how far a template travels once it carries a real business’s brand, content and photography.',
                        },
                        {
                            q: 'What happens with the domain and hosting from the second year?',
                            a: 'The first year is included and registered in your name. From the second year the renewal is yours, paid directly to the provider: we hand over the credentials and what it costs. We take no commission on it and we do not require you to renew through us.',
                        },
                        {
                            q: 'Do I keep the code?',
                            a: 'Yes. You receive the complete project with a permanent licence to use it, and you can maintain it with whoever you like. You do not depend on us to grow, and that is a studio commitment, not a concession of this template.',
                        },
                        {
                            q: 'What if I do not have the copy or the photos?',
                            a: 'We place whatever you send us, and before placing it we tell you if something will not look right: an image too small, a logo without a transparent background, a line that will not fit where it goes. Sourcing or producing the images and writing the copy are not included in the price; if you already have them ready, placing them costs nothing extra.',
                        },
                        {
                            q: 'Can I add a section later?',
                            a: 'Yes, but it is a separate quote: a section the template does not ship with is custom development. It gets quoted apart and built onto the same site, without redoing what is already live.',
                        },
                        {
                            q: 'Does the site come in both Spanish and English?',
                            a: 'It ships in one language. Making it bilingual is an add-on: what we charge for is the technical work of building both versions with their URLs and language tags, not the translation. You supply the translated copy, and there is no discount for handing it over already translated.',
                        },
                    ],
                },
            },
            localBusiness: {
                slug: 'templates/local-business',
                metaTitle: 'Local business website template',
                metaDescription:
                    'One-page site for restaurants, salons, workshops and shops: menu or catalogue, gallery, opening hours, map and WhatsApp. Static Astro, domain and hosting for the first year. From USD $600.',
                crumb: 'Template · Local business',
                eyebrow: 'template 02 · local business',
                title: 'The site for a business people look up from the street',
                titleMark: 'from the street',
                lead: 'Whoever is looking for you is standing up, one-handed, on a weak signal and in a hurry. They want the menu, the address and the hours in three seconds. This base puts those three where they can be seen.',
                manifest: [
                    { idx: '01', label: 'Who it is for', href: '#who-for' },
                    { idx: '02', label: 'What is inside', href: '#inside' },
                    { idx: '03', label: 'Measured', href: '#measured' },
                    { idx: '04', label: "What's included", href: '#included' },
                    { idx: '05', label: 'How far it goes', href: '#boundary' },
                    { idx: '06', label: 'Price and timing', href: '#price' },
                    { idx: '07', label: 'Questions', href: '#questions' },
                ],
                demoUrl: '/en/template-local-business/',
                facts: [
                    { label: 'From', value: 'USD $600' },
                    { label: 'Delivery', value: '5–8 business days' },
                    { label: 'Primary contact', value: 'WhatsApp' },
                ],
                audience: {
                    idx: '01',
                    eyebrow: 'who it is for',
                    title: 'Businesses that live on being found nearby',
                    lead: 'The visitor is not here to compare suppliers: they are here to sort something out today, and almost always from a phone.',
                    items: [
                        {
                            who: 'Restaurants',
                            pain: 'The menu, the address and the hours are the three things people look for. They sit at the top, and the prices read without pinching to zoom.',
                        },
                        {
                            who: 'Hair and beauty salons',
                            pain: 'The gallery does the work the copy cannot, and the WhatsApp button spares you the call nobody answers with a client in the chair.',
                        },
                        {
                            who: 'Workshops',
                            pain: 'The menu block works just as well for services as for dishes: categories, description and price, nothing invented.',
                        },
                        {
                            who: 'Shops',
                            pain: 'If the business lives off the neighbourhood, the map and the opening hours are worth more than any headline.',
                        },
                        {
                            who: 'Gyms',
                            pain: 'Plans and monthly fees fit in the same catalogue block, and photographs of the place do the rest.',
                        },
                    ],
                },
                inside: {
                    idx: '02',
                    eyebrow: 'what is inside',
                    title: 'Seven pieces designed for the thumb',
                    lead: 'The whole journey fits on one page, and every section sits where somebody in a hurry would look for it.',
                    shotAlt: 'First fold of the local business template demo',
                    sections: [
                        {
                            idx: '01',
                            name: 'Navigation bar',
                            body: 'Links to every section plus a booking or ordering button on WhatsApp, always visible.',
                        },
                        {
                            idx: '02',
                            name: 'Full-screen header',
                            body: 'A large photo of the place or the product, the name, the promise in one line and two buttons: get in touch and see the menu.',
                        },
                        {
                            idx: '03',
                            name: 'Story',
                            body: 'Two paragraphs on where the business comes from and three highlighted figures beside a photo: year opened, locations, rating.',
                        },
                        {
                            idx: '04',
                            name: 'Menu or catalogue',
                            body: 'Products grouped by category, with description and price, and the option to flag one as the house favourite.',
                        },
                        {
                            idx: '05',
                            name: 'Gallery',
                            body: 'A grid of photographs of the place, the dishes or the finished work.',
                        },
                        {
                            idx: '06',
                            name: 'Location and hours',
                            body: 'Address with a map, the hours day by day, and buttons to call or message on WhatsApp.',
                        },
                        {
                            idx: '07',
                            name: 'Footer',
                            body: 'Contact details, social profiles and copyright notice.',
                        },
                    ],
                    stack: ['astro', 'tailwind', 'lucide'],
                    stackNote:
                        'Static output: the site compiles to HTML and is served as is, with no JavaScript framework in the browser. Icons are generated as SVG at build time, so they cost no request.',
                },
                proof: {
                    idx: '03',
                    eyebrow: 'measured',
                    title: 'What it scores before you touch it',
                    body: 'This template does not have a business in production yet, and we are not going to invent one. What gets measured here is its own demo: the same code you receive, with the full-screen cover, the gallery and the map already loaded. A real business photography will weigh differently, but this is the starting point.',
                    url: 'https://ctgcode.com/plantilla-negocio-local/',
                    urlLabel: 'See the demo',
                    metrics: [
                        { label: 'Performance · mobile', value: '93 – 98' },
                        { label: 'Performance · desktop', value: '99' },
                        { label: 'Accessibility', value: '100' },
                        { label: 'Best practices', value: '100' },
                    ],
                    metricsSource:
                        'Measured with Lighthouse 13.4.1 against the demo on 1 August 2026: three mobile runs and three desktop runs, discarding a warm-up pass. We publish the observed range, not the best run. Largest contentful paint came in at 2.2–2.8 s on mobile and 0.8–0.9 s on desktop. The SEO score is left out because the demo ships with noindex on purpose — it simulates a business that does not exist — and Lighthouse penalises it for that alone; every other SEO audit passes.',
                },
                price: {
                    cop: '$1,500,000 – $2,200,000 COP',
                    usd: 'USD $600 – $870',
                    usdNote:
                        'Converted at the 31 July 2026 rate, transfer costs already included. The price in Colombian pesos is the governing one.',
                    delivery: '5 – 8 business days',
                    deliveryNote:
                        'The clock starts when payment is confirmed and everything needed to customise it has reached us: logo, colours, typefaces, copy, photos, the menu or catalogue with prices, and contact details.',
                },
                faq: {
                    idx: '07',
                    eyebrow: 'questions',
                    title: 'What people ask before deciding',
                    items: [
                        {
                            q: 'Can I change the menu or the prices myself?',
                            a: 'Not from a dashboard: the template ships without a content manager, and that is precisely why it is fast and needs no maintenance. Changes are made in the project’s content file. During the first thirty days they fall under the two included rounds; after that they can be contracted as support.',
                        },
                        {
                            q: 'Does the WhatsApp button open a chat with my number?',
                            a: 'Yes, with your number and from anywhere on the page. In this template WhatsApp is the primary contact, ahead of the form: it is what people actually use when they are looking you up from the street.',
                        },
                        {
                            q: 'Will my business show up on Google Maps?',
                            a: 'The site does not create the Google listing on its own. What we do leave done is the technical SEO, with the business’s structured data — address and opening hours included — so that the listing and the site reinforce each other. Creating, verifying and configuring the Google profile is separate work and is quoted apart.',
                        },
                        {
                            q: 'What if I do not have photos of the business?',
                            a: 'We place the ones you send us and tell you beforehand if any will not look right for size or quality. Sourcing or producing them is not included in the price. In a business that sells on looks this is the part most worth settling before we start: one good header photo changes the entire page.',
                        },
                        {
                            q: 'What happens once the warranty and the two rounds run out?',
                            a: 'The warranty covers thirty days of programming or environment-configuration errors, and the two rounds of minor changes live inside that same window. After that, support is optional and contracted separately: the site does not stop working and you are not tied to us.',
                        },
                        {
                            q: 'What do you need from me to start?',
                            a: 'The logo in good resolution — vector if you have it —, the brand colours if they are already defined, the copy for each section, the photos, the menu or catalogue with prices, the address, the hours day by day and the WhatsApp number. The delivery clock starts when all of that arrives and payment is confirmed.',
                        },
                    ],
                },
            },
            startupProduct: {
                slug: 'templates/startup-product',
                metaTitle: 'Startup and product website template',
                metaDescription:
                    'One-page site for SaaS, apps and launches: problem, features, how it works, plans and frequently asked questions. Static Astro, domain and hosting for the first year. From USD $640.',
                crumb: 'Template · Startup and product',
                eyebrow: 'template 03 · startups and products',
                title: 'The site for what still needs explaining',
                titleMark: 'still needs explaining',
                lead: 'A new product has a problem a restaurant does not: nobody knows what it is. This base tells the problem before the feature, orders the plans without confusing anyone, and answers the objections before asking for a sign-up.',
                manifest: [
                    { idx: '01', label: 'Who it is for', href: '#who-for' },
                    { idx: '02', label: 'What is inside', href: '#inside' },
                    { idx: '03', label: 'Measured', href: '#measured' },
                    { idx: '04', label: "What's included", href: '#included' },
                    { idx: '05', label: 'How far it goes', href: '#boundary' },
                    { idx: '06', label: 'Price and timing', href: '#price' },
                    { idx: '07', label: 'Questions', href: '#questions' },
                ],
                demoUrl: '/en/template-startup-product/',
                facts: [
                    { label: 'From', value: 'USD $640' },
                    { label: 'Delivery', value: '5–8 business days' },
                    { label: 'Includes', value: 'Plans and FAQ' },
                ],
                audience: {
                    idx: '01',
                    eyebrow: 'who it is for',
                    title: 'When the product does not explain itself yet',
                    lead: 'The visitor is not searching for your category: they arrive with a problem, and you have to show them this solves it.',
                    items: [
                        {
                            who: 'SaaS',
                            pain: 'The structure forces you to put the problem ahead of the feature list. That is the order that converts.',
                        },
                        {
                            who: 'Mobile apps',
                            pain: 'The “how it works” steps clear away the question that stalls the download: what happens after installing it.',
                        },
                        {
                            who: 'Launches',
                            pain: 'There is a social-proof block near the top for however much you have: users, a waiting list, an outlet that mentioned you.',
                        },
                        {
                            who: 'Digital products',
                            pain: 'The pricing block orders the plans without confusion, and the FAQ settles the objection right before the sign-up.',
                        },
                    ],
                },
                inside: {
                    idx: '02',
                    eyebrow: 'what is inside',
                    title: 'Eight pieces in the order that convinces',
                    lead: 'The journey is built as an argument: first the problem, then the solution, then the proof, and the price last.',
                    shotAlt: 'First fold of the startup and product template demo',
                    sections: [
                        {
                            idx: '01',
                            name: 'Navigation bar',
                            body: 'Links to every section and the sign-up or trial button always within reach.',
                        },
                        {
                            idx: '02',
                            name: 'Header with social proof',
                            body: 'A headline with an accented fragment, subhead, two buttons and a line of social proof right below them.',
                        },
                        {
                            idx: '03',
                            name: 'Features',
                            body: 'A grid with icon, title and explanation per feature, written in terms of what it solves rather than what it does.',
                        },
                        {
                            idx: '04',
                            name: 'How it works',
                            body: 'Numbered steps, from sign-up to the first useful result.',
                        },
                        {
                            idx: '05',
                            name: 'Pricing',
                            body: 'Plans side by side, with what each one includes and one flagged as recommended.',
                        },
                        {
                            idx: '06',
                            name: 'Frequently asked questions',
                            body: 'An accordion settling the usual objections before asking for the sign-up.',
                        },
                        {
                            idx: '07',
                            name: 'Closing call to action',
                            body: 'One last block for whoever read all the way down.',
                        },
                        {
                            idx: '08',
                            name: 'Footer',
                            body: 'Links, social profiles and copyright notice.',
                        },
                    ],
                    stack: ['astro', 'tailwind', 'lucide'],
                    stackNote:
                        'Static output: the site compiles to HTML and is served as is, with no JavaScript framework in the browser. Icons are generated as SVG at build time, so they cost no request.',
                },
                proof: {
                    idx: '03',
                    eyebrow: 'measured',
                    title: 'What it scores before you touch it',
                    body: 'This template does not have a product in production yet, and we are not going to invent one. What gets measured here is its own demo: the same code you receive, with the eight sections, the pricing table and the questions accordion. A real product content will change the words, not the base.',
                    url: 'https://ctgcode.com/plantilla-producto-startup/',
                    urlLabel: 'See the demo',
                    metrics: [
                        { label: 'Performance · mobile', value: '92 – 97' },
                        { label: 'Performance · desktop', value: '96 – 100' },
                        { label: 'Accessibility', value: '100' },
                        { label: 'Best practices', value: '100' },
                    ],
                    metricsSource:
                        'Measured with Lighthouse 13.4.1 against the demo on 1 August 2026: three mobile runs and three desktop runs, discarding a warm-up pass. We publish the observed range, not the best run. Largest contentful paint came in at 1.9–2.9 s on mobile and 0.6–1.3 s on desktop. The SEO score is left out because the demo ships with noindex on purpose — it simulates a product that does not exist — and Lighthouse penalises it for that alone; every other SEO audit passes.',
                },
                price: {
                    cop: '$1,600,000 – $2,400,000 COP',
                    usd: 'USD $640 – $950',
                    usdNote:
                        'Converted at the 31 July 2026 rate, transfer costs already included. The price in Colombian pesos is the governing one.',
                    delivery: '5 – 8 business days',
                    deliveryNote:
                        'The clock starts when payment is confirmed and everything needed to customise it has reached us: logo, colours, typefaces, copy, product screenshots, the plans with their prices and contact details.',
                },
                faq: {
                    idx: '07',
                    eyebrow: 'questions',
                    title: 'What people ask before deciding',
                    items: [
                        {
                            q: 'Does the pricing block connect to a payment gateway?',
                            a: 'No. The plans are displayed and each button goes wherever you say: a sign-up, an email, a WhatsApp chat or your own application. Connecting a payment gateway and charging from the page is custom development and is quoted separately.',
                        },
                        {
                            q: 'Can I put client or press logos in the social proof?',
                            a: 'Yes, as long as you have permission to use them. It is the only part of the page whose content does not depend on you alone, so it is worth settling before we start. If there are no logos yet, the block works just as well with a figure or a sentence.',
                        },
                        {
                            q: 'How many plans fit in the pricing section?',
                            a: 'Three read comfortably and that is what we recommend. At four it starts to squeeze on small screens. If you need more plans, or a comparison table of features, that is custom development.',
                        },
                        {
                            q: 'What if the product does not exist yet?',
                            a: 'That is not a problem: the template is meant for exactly that — explaining something that still needs explaining, validating interest or collecting a waiting list. What you do need to be clear on is what problem you solve and for whom; without that, no page works.',
                        },
                        {
                            q: 'What if I do not have the copy or product screenshots?',
                            a: 'We place whatever you send us, and we tell you beforehand if something will not look right: a low-resolution screenshot, a line that will not fit where it goes. Producing the screenshots and writing the copy are not included in the price; if you already have them ready, placing them costs nothing extra.',
                        },
                        {
                            q: 'Can I move to something bigger later?',
                            a: 'Yes. It is a static Astro site with no strings attached: when the product calls for an application, a dashboard or a blog, it gets built on top without throwing away what you have. And if you would rather do it with another team, the code is yours from the day it ships.',
                        },
                    ],
                },
            },
        },
    },
    legal: {
        eyebrow: 'legal document',
        updatedLabel: 'Last updated',
        pendingNotice:
            'Document under review: the identification details of the Data Controller are yet to be confirmed.',
        privacy: {
            title: 'Privacy Policy',
            summary:
                'How CTG Code collects, uses and protects your personal data under the data protection laws of the Republic of Colombia.',
            intro: `This website, CTG Code, is operated by ${controller} (hereinafter, the "Data Controller"). We take your privacy and the protection of your personal data very seriously. This Privacy Policy describes how we collect, use, store, and protect your information in accordance with applicable data protection regulations.`,
            sections: [
                {
                    heading: 'Information We Collect and Its Purpose',
                    items: [
                        {
                            term: 'Contact Form Data',
                            text: 'When filling out our form, we collect data such as your name, email address, and the details of your inquiry or project. The purpose of collecting this data is strictly commercial: to manage your request, contact you, and provide the quotes or service information you requested.',
                        },
                        {
                            term: 'Browsing Data and Cookies',
                            text: 'Through analytics tools, we gather anonymous information about your behavior on the site (pages visited, time spent, country of origin) solely to optimize user experience and measure campaign performance.',
                        },
                    ],
                },
                {
                    heading: 'Third-Party Service Providers and Data Transfer',
                    body: 'To ensure a secure and high-standard experience, we work with established global platforms. Your data may be processed through:',
                    items: [
                        {
                            term: 'Formspree',
                            text: 'Contact form data is securely transmitted through their platform for the sole purpose of delivering it to our business inbox.',
                        },
                        {
                            term: 'Google Analytics and Google Ads',
                            text: 'Tools used under strict security parameters to measure web traffic and manage advertising.',
                        },
                    ],
                },
                {
                    heading: 'Consent and Cookies (Google Consent Mode v2)',
                    body: "This website strictly respects your privacy choices by implementing Google Consent Mode v2. By default, all analytical and advertising tracking is completely denied. We will only collect and process your browsing data if you grant explicit consent through our floating cookie banner. You can revoke this permission at any time by clearing your browser's cookies.",
                },
                {
                    heading: 'Your Rights',
                    body: `As the owner of your personal data, you have the right to access, update, rectify, or request the deletion of your information from our databases at any time. To exercise these rights, or if you have any questions regarding this policy, you can contact the Data Controller directly by sending an email to: ${legalEntity.email}.`,
                },
            ],
        },
        terms: {
            title: 'Terms and Conditions of Use',
            summary:
                'Conditions for using the site and CTG Code development services: intellectual property, licensing, liability and governing law.',
            intro: `Welcome to the CTG Code website. This website and its related software development services are operated by ${controller}. By accessing this website or hiring our services, you agree to comply with and be bound by the following terms and conditions. If you disagree with any part of these terms, please do not use our website or services.`,
            sections: [
                {
                    heading: 'Intellectual Property and Software Licensing',
                    items: [
                        {
                            term: 'Ownership by CTG Code',
                            text: `All content, interface designs, base source code, tools, trademarks, and graphics displayed on this website or embedded in our solutions are the exclusive property of CTG Code (owned by ${legalEntity.fullName}).`,
                        },
                        {
                            term: 'Client Deliverables',
                            text: 'The source code, automation, or software developed for a client remains the property of CTG Code, unless the total transfer of economic rights is explicitly negotiated, formalized, and paid for in full according to the corresponding service contract.',
                        },
                        {
                            term: 'License of Use',
                            text: "Until such transfer is completed, the client receives a permanent, non-exclusive, internal license of use. This copy of the code is delivered solely for the client's internal operations.",
                        },
                        {
                            term: 'Freedom of Maintenance',
                            text: 'This license explicitly grants the client the freedom to hire third parties to build new features, modify, or perform maintenance on the delivered software. Under no circumstances do we lock in or force the client to work exclusively with us to update their platform.',
                        },
                    ],
                },
                {
                    heading: 'Liability for Code Leaks and Code Custody',
                    items: [
                        {
                            text: 'Any leak, unauthorized copying, or exposure of code that has not been publicly released by us (such as private GitHub repositories or proprietary libraries) will be the sole responsibility of the client once the software has been delivered.',
                        },
                        {
                            text: 'If the leak or misuse of the code is caused by external staff or third parties hired by the client for maintenance or updates, the legal liability towards CTG Code will remain with the client. The client may, at their own discretion, pursue legal action against that third party.',
                        },
                        {
                            text: 'It is strictly prohibited to reverse engineer, hack, or engage in any malicious or unlawful use of any software delivered by us.',
                        },
                    ],
                },
                {
                    heading: 'Third-Party Service Providers and Technical Limitation of Liability',
                    items: [
                        {
                            term: 'Commitment to Quality',
                            text: 'We formally commit to building and deploying our solutions using established, reliable, and industry-standard global infrastructure providers (such as Google, GitHub, Formspree, Hostinger, among others) to minimize any service downtime or security risks.',
                        },
                        {
                            term: 'Out-of-Control Failures',
                            text: 'Due to the nature of software engineering, CTG Code shall not be held legally or financially liable for service interruptions, server crashes, connectivity issues, or security breaches directly caused by these third-party providers. We will always try to provide support and seek solutions for anything within our direct technical control; however, if a solution is impossible due to a provider failure, the client understands and accepts it is outside our scope.',
                        },
                        {
                            term: 'Migrations',
                            text: 'Should the client decide to migrate their systems, databases, or infrastructure to other servers or technologies, such consulting, export, and deployment work will be quoted and billed completely separately.',
                        },
                    ],
                },
                {
                    heading: 'Governing Law and Jurisdiction',
                    body: 'These terms are governed by and construed in accordance with the laws of the Republic of Colombia. Any dispute, claim, or controversy arising out of the use of this website or the execution of our development services shall be subject to the exclusive jurisdiction of the courts of Cartagena, Colombia.',
                },
            ],
        },
    },
    notFound: {
        status: 'error 404 · route not found',
        title: 'This page sank with the sunset',
        lead: 'The sea took it — or maybe it never existed. The lighthouse is still on to guide you back to harbor.',
        cta: 'Back to harbor',
        coords: 'safe harbor → 10.4236° N, 75.5518° W · Cartagena de Indias',
    },
    langNotice: {
        message: 'This page is also available in English.',
        action: 'View in English',
        dismiss: 'Dismiss',
    },
    cookies: {
        message: 'We use cookies to measure traffic and improve the site. Nothing runs until you decide.',
        accept: 'Accept',
        reject: 'Decline',
    },
    footer: {
        eyebrow: 'software studio · cartagena de indias',
        claim: 'Shall we set sail?',
        lead: 'Tell us what you want to build and we’ll chart the course.',
        surface: 'back to the surface',
        colophon: '$ handcrafted by the sea · 10.4236° N, 75.5518° W',
        rights: 'all rights reserved',
        nav: 'navigation',
        legal: 'legal',
        channels: 'channels',
        privacy: 'Privacy policy',
        privacySlug: 'privacy',
        terms: 'Terms & conditions',
        termsSlug: 'terms',
        email: 'Email',
        form: {
            name: 'name',
            namePlaceholder: 'What should we call you?',
            email: 'email',
            emailPlaceholder: 'you@email.com',
            message: 'your idea',
            messagePlaceholder: 'A website, an app, an integration…',
            cta: 'Send',
        },
        success: 'Course set!',
        messageSent: 'We have received your idea. We will get back to you as soon as possible.',
        error: 'Something went wrong',
        messageError: 'Sorry, there was an error sending your message. Please try again later or contact us directly through our channels.',
        formReset: 'Send another message',
    }
};

export default en;