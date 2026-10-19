import type { Localized } from '../i18n';

/**
 * Skills grouped by category.
 * `used`     → shipped working code with it in a project.
 * `familiar` → worked with it, would still need ramp-up time.
 */
export interface SkillGroup {
  title: Localized;
  used: string[];
  familiar?: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    title: { en: 'Languages', hr: 'Programski jezici' },
    used: ['PHP', 'Python', 'Java', 'TypeScript', 'JavaScript', 'SQL'],
    familiar: ['C#', 'R', 'C'],
  },
  {
    title: { en: 'Backend', hr: 'Backend' },
    used: [
      'Symfony',
      'Spring Boot',
      'FastAPI',
      'REST API design',
      'Doctrine ORM',
      'SQLAlchemy',
      'JWT authentication',
      'Message queues (Symfony Messenger)',
    ],
    familiar: ['ASP.NET Core'],
  },
  {
    title: { en: 'Frontend', hr: 'Frontend' },
    used: ['React', 'HTML & CSS', 'Tailwind CSS', 'Twig'],
    familiar: ['Next.js'],
  },
  {
    title: { en: 'Databases', hr: 'Baze podataka' },
    used: ['PostgreSQL', 'MySQL / MariaDB', 'SQLite', 'Migrations (Flyway, Alembic, Doctrine)'],
  },
  {
    title: { en: 'Testing & quality', hr: 'Testiranje i kvaliteta' },
    used: [
      'Pytest',
      'Integration tests (Spring Boot)',
      'Vitest',
      'Playwright',
      'Manual test cases & bug reports',
    ],
  },
  {
    title: { en: 'DevOps & tools', hr: 'DevOps i alati' },
    used: ['Git', 'Docker', 'GitHub Actions', 'Vercel', 'VS Code', 'PhpStorm'],
    familiar: ['Visual Studio'],
  },
  {
    title: { en: 'AI', hr: 'AI' },
    used: [
      'Claude API (vision-language models)',
      'Async processing of model calls',
      'Latency measurement',
    ],
  },
];
