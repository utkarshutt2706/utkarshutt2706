export const SOCIAL_LINKS = {
    email: 'utkarshutt2706@gmail.com',
    linkedin: 'https://linkedin.com/in/utkarshutt2706',
    github: 'https://github.com/utkarshutt2706',
};

export const NAV_LINKS = [
    'About',
    'Projects',
    'Achievements',
    'Skills',
    'Contact',
];

export const STATS = [
    { value: '6+', label: 'years experience' },
    { value: '4+', label: 'products shipped' },
    { value: '30+', label: 'engineers mentored' },
    { value: 'Millions', label: 'users served' },
];

export const PROJECTS = [
    {
        name: 'UMANG',
        subtitle: 'National Digital Governance Platform',
        tag: 'Government of India',
        color: '#00C896',
        description:
            'Owned frontend modules for high-traffic citizen services including DigiLocker, EPFO, and Aaple Sarkar, serving millions of users nationwide.',
        highlights: [
            '60% reduction in form dev & testing effort',
            'JSON-driven dynamic form engine',
            '22-language localization tool → 70% cost cut',
            'Config-driven UI reused across teams',
        ],
        tech: ['Angular', 'TypeScript', 'RxJS', 'Node.js'],
    },
    {
        name: 'Seamfix',
        subtitle: 'Enterprise SaaS Platform',
        tag: 'B2B SaaS',
        color: '#7C6FFF',
        description:
            'Led end-to-end backend ownership processing thousands of records with a focus on scalability and reliability.',
        highlights: [
            '40% data throughput improvement via async pipelines',
            'Redis + Bull Queue processing architecture',
            'Nx monorepo shared tooling setup',
            'Client-recognized for code quality',
        ],
        tech: [
            'NestJS',
            'Redis',
            'Bull Queue',
            'Nx',
            'PostgreSQL',
            'MongoDB',
            'ReactJS',
            'Angular',
            'Ionic',
            'Lit Web Components',
        ],
    },
    {
        name: 'Chalo',
        subtitle: 'Public Transportation Platform',
        tag: 'Infrastructure',
        color: '#FF6B35',
        description:
            'Owned backend and frontend modules for AFCS dashboards used by transport operators across 1,000+ bus routes.',
        highlights: [
            '1,000+ bus routes, thousands of daily commuters',
            'Event-driven architecture with RabbitMQ',
            'Retry mechanisms for critical workflows',
            'Containerized via Docker + AWS',
        ],
        tech: ['Node.js', 'RabbitMQ', 'Docker', 'AWS', 'Angular', 'PostgreSQL'],
    },
    {
        name: 'Intouch / RestoPay',
        subtitle: 'Hospitality Platform',
        tag: 'Hospitality',
        color: '#F0A500',
        description:
            'Cross-platform enterprise application for restaurant and hospitality operations with multi-role workflows.',
        highlights: [
            '30%+ operational efficiency improvement',
            'Multi-role system: waiter, chef, manager',
            '10s → 2s load time optimization',
            'Tablet/low-powered device optimization',
        ],
        tech: [
            'Angular',
            'Ionic',
            'Firebase',
            'ReactJS',
            'Node.js',
            'PostgreSQL',
        ],
    },
];

export const ACHIEVEMENTS = [
    {
        title: 'Dynamic Form Rendering Platform',
        context: 'UMANG',
        stat: '60%',
        statLabel: 'dev effort reduction',
        description:
            'Built a JSON-driven dynamic form engine supporting single/multi-page forms, dynamic validations, and conditional workflows — replacing hundreds of hardcoded forms with config-driven UI.',
    },
    {
        title: 'Localization & Translation Cost Cut',
        context: 'UMANG',
        stat: '70%',
        statLabel: 'translation cost saved',
        description:
            'Co-built an internal tool managing localization across 22 languages. Automated JSON + Excel generation for vendors, with de-duplication logic eliminating redundant translations.',
    },
    {
        title: 'App Load Time Optimization',
        context: 'RestoPay',
        stat: '5×',
        statLabel: 'faster load time',
        description:
            'Reduced initial app load from 10s to 2s despite Firebase limitations. Identified bottlenecks in query patterns and reworked database structure with strategic normalization.',
    },
];

export const SKILLS = {
    'Languages & Frameworks': [
        'JavaScript',
        'TypeScript',
        'Angular',
        'ReactJS',
        'NextJS',
        'NestJS',
        'Node.js',
        'Ionic',
    ],
    'Styling & UI': ['Lit Web Components', 'Tailwind CSS', 'ShadcnUI'],
    'Databases & Queues': [
        'PostgreSQL',
        'MongoDB',
        'Redis',
        'Bull Queue',
        'RabbitMQ',
    ],
    'DevOps & Tooling': [
        'AWS',
        'Docker',
        'GitHub Actions',
        'Nx Monorepo',
        'Figma',
    ],
};
