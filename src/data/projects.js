// Add, delete, or reorder objects here. Use a unique id for each project.
// image, liveUrl, highlights, and technologies are optional.
// Without an image, a clean text-first card is shown. Add group to choose a filter.
export const projects = [
  {
    id: 'papervault',
    engineeringFocus: 'Searchable academic content with controlled, moderated publication.',
    boundary: 'Deployed application. Uploaded content is checked and moderated before publication.',
    group: 'Full-stack',
    title: 'PaperVault',
    category: 'Academic archive',
    status: 'Deployed',
    description:
      'A searchable home for college question papers. Built to make discovery effortless—and publication trustworthy.',
    technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Redis', 'Docker'],
    githubUrl: 'https://github.com/alexinwebs/papervault',
    liveUrl: 'https://papervault.duckdns.org',
    highlights: [
      'Hierarchical browsing, paginated search, PDF-text search, and multi-branch listings using Next.js Server Actions and PostgreSQL.',
      'Local metadata suggestions with unpdf, Poppler, Tesseract, and Sharp; bounded processing, timeouts, and manual-entry fallback.',
      'ClamAV scanning, hash/text duplicate checks, concurrent-submission locks, and human moderation before publication.',
      'College-scoped RBAC, revocable sessions, bcrypt, admin TOTP 2FA, Redis rate limits, and CI with tests, audits, image builds, and CodeQL. Deployed with Docker Compose and Caddy HTTPS.',
    ],
  },
  {
    id: 'mailpilot',
    engineeringFocus: 'AI drafting with validated output and human-controlled sending.',
    boundary: 'Deployment verified; no public demo supplied. The model never sends email.',
    group: 'AI tools',
    title: 'MailPilot',
    category: 'Human-in-the-loop AI',
    status: 'Deployment verified',
    description:
      'An AI email assistant with a deliberate boundary: it drafts and critiques. A human decides what gets sent.',
    technologies: ['React', 'Fastify', 'PostgreSQL', 'BullMQ', 'Docker'],
    githubUrl: 'https://github.com/alexinwebs/mailpilot-ai',
    highlights: [
      'Solo, MIT-licensed Gmail assistant: OAuth 2.0 sync, thread reconstruction, classification, reply detection, and LLM drafting and critique.',
      'Zod-validated output and a deterministic policy engine before human review. The model never sends email; sends are idempotent.',
      '25 REST endpoints, 15 Prisma models, a 9-route dashboard, and 6 LLM provider integrations.',
      'Redis/BullMQ jobs and AES-256-GCM encrypted OAuth tokens; verified on a live Render deployment. No public demo URL supplied.',
    ],
  },
  {
    id: 'vibe',
    engineeringFocus: 'Two mobile clients connected through shared API contracts and a complete ride lifecycle.',
    boundary: 'Prototype with in-memory storage. Not a deployed production service.',
    group: 'Mobile',
    title: 'VIBE',
    category: 'Driver-first mobility',
    status: 'Prototype · not deployed',
    description:
      'A ride-hailing prototype built around the driver. Two mobile apps, one shared contract, and a complete ride lifecycle.',
    technologies: ['React Native', 'Expo', 'TypeScript', 'Fastify'],
    githubUrl: 'https://github.com/alexinwebs/vibe',
    highlights: [
      'Rider and Driver Expo apps with a Fastify REST API in a pnpm monorepo; shared contracts through @vibe/types.',
      'Searching → Driver Assigned → Driver Arriving → Ride Started → Ride Completed, plus availability, history, and server-side fare/earnings calculations.',
      'Prototype commission model: 0% on VIBE+ rides and 15% on Free rides across bike, auto, and cab services.',
      'In-memory storage. This is a prototype, not a deployed production service.',
    ],
  },
];
