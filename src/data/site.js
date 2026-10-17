// This is your content control panel. No layout or animation changes needed.
export const profile = {
  name: 'Abbas Ansari',
  initials: 'aa.',
  role: 'AI-Assisted Developer',
  location: 'Ghaziabad, India',
  email: 'alexinwebs@gmail.com',
  portrait: 'images/abbas.webp',
  resume: 'documents/Abbas-Ansari-Resume.pdf',
  github: 'https://github.com/alexinwebs',
  linkedin: 'https://www.linkedin.com/in/alexinwebs',
  heroMasked: 'images/hero/masked.webp',
  heroUnmasked: 'images/hero/unmasked.webp',
  heroDescription:
    'AI-assisted development. Backend focus. Full-stack execution. I build the systems behind the experience—and take ownership of what ships.',
  intro:
    'I’m Abbas, an AI-assisted developer focused on backend and full-stack applications. I turn ideas into working systems—and own the architecture, integration, debugging, and review.',
  about: [
    'I’m Abbas, an AI-assisted developer and Computer Science undergraduate at RKGIT, graduating in 2027. I use AI as a hands-on development partner to turn ideas into working applications.',
    'AI-assisted application development is my main focus. I work across backend and full-stack applications, while taking responsibility for the architecture, integration, debugging, testing, and review of what ships.',
  ],
  focus: ['TypeScript', 'Node.js', 'PostgreSQL', 'React', 'Docker'],
  contactHeading: 'Got a mission?',
  contactAccent: 'Let’s build it.',
  contactText:
    'Have a project in mind, an interesting problem, or an opportunity to collaborate? I’d love to hear about it.',
};

// Reorder this array to reorder your navigation and page sections.
// Set enabled: false to hide a section. IDs must match the section components.
export const sections = [
  { id: 'about', label: 'About', enabled: true },
  { id: 'toolkit', label: 'Skills', enabled: true },
  { id: 'work', label: 'Projects', enabled: true },
  { id: 'journey', label: 'Journey', enabled: false },
  { id: 'contact', label: 'Contact', enabled: true },
];

export const skills = [
  {
    title: 'Languages & backend',
    items: [
      'TypeScript',
      'JavaScript',
      'Node.js',
      'Fastify',
      'REST APIs',
      'Next.js Server Actions',
      'Middleware',
      'Zod',
      'BullMQ',
    ],
  },
  {
    title: 'Interfaces',
    items: [
      'React',
      'Next.js · App Router',
      'React Native',
      'Expo',
      'HTML5',
      'CSS3',
      'Tailwind CSS',
      'Vite',
    ],
  },
  {
    title: 'Data & security',
    items: [
      'PostgreSQL',
      'Prisma ORM',
      'Redis',
      'OAuth 2.0',
      'RBAC',
      'TOTP 2FA',
      'CSRF protection',
      'bcrypt',
      'Argon2id',
    ],
  },
  {
    title: 'Quality & delivery',
    items: [
      'Vitest',
      'Playwright',
      'Unit / integration / E2E',
      'GitHub Actions',
      'Docker',
      'Docker Compose',
      'Caddy',
      'Render',
      'Git',
      'Postman',
      'VS Code',
    ],
  },
];
export const familiar = [
  'Express.js',
  'MongoDB',
  'Mongoose',
  'JWT',
  'SQLite',
  'Core Java',
];
export const experience = [
  {
    title: 'Technical Intern',
    organization: 'Netcamp Solutions Pvt. Ltd. · Ghaziabad',
    period: 'Jun — Jul 2026',
    label: 'Training program',
    description:
      'Training in Network Management, Android with Core Java, Web Development, and Ethical Hacking Fundamentals.',
  },
];
export const education = [
  {
    title: 'B.Tech · Computer Science & Engineering',
    organization: 'Raj Kumar Goel Institute of Technology · Affiliated to AKTU',
    period: '2023 — 2027 (expected)',
    description:
      'DBMS, Operating Systems, Computer Networks, OOP, Software Engineering, and Data Structures & Algorithms.',
  },
];
export const certifications = [
  {
    title: 'Generative AI',
    issuer: 'NASSCOM Skill Development Program',
    year: '2026',
  },
  {
    title: 'AI For Everyone',
    issuer: 'DeepLearning.AI / Coursera',
    year: '2026',
  },
  {
    title:
      'Software Engineering & Agile Software Development; Agile Scrum in Practice; Introduction to Data Science',
    issuer: 'Infosys Springboard',
    year: '2026',
  },
  {
    title:
      'Android with Core Java; Network Management & Web Development with Ethical Hacking',
    issuer: 'Netcamp / RKGIT',
    year: '2026',
  },
];
