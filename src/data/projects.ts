import type { ImageMetadata } from 'astro';
import type { Localized } from '../i18n';
import mobileBankingImg from '../assets/projects/mobile-banking-qa.jpg';
import apartmentImg from '../assets/projects/demo-apartman.jpg';
import tyreShopImg from '../assets/projects/tyre-webshop.jpg';

/**
 * All projects shown on the site.
 *
 * To add a project: copy one object, change the fields, and (optionally) put a
 * screenshot in src/assets/projects/ and import it above. Order in this array
 * is the order on the page. `featured: true` → large card; otherwise it goes
 * into the compact "client demos" list.
 */
export interface Project {
  slug: string;
  featured: boolean;
  title: Localized;
  /** Small label above the title, e.g. "Full-stack · Flagship". */
  label: Localized;
  summary: Localized;
  /** Problem / solution / learned / highlights are shown on featured cards only. */
  problem?: Localized;
  solution?: Localized;
  learned?: Localized;
  highlights?: Localized<string[]>;
  stack: string[];
  links: {
    repo?: string;
    demo?: string;
    docs?: string;
  };
  /** Screenshot. If omitted, the card shows the `architecture` diagram instead. */
  image?: ImageMetadata;
  imageAlt?: Localized;
  /** Layers drawn top → bottom when there is no screenshot. */
  architecture?: string[];
}

export const projects: Project[] = [
  {
    slug: 'web-mechanic',
    featured: true,
    title: {
      en: 'Web Mechanic: Tyre Service Booking Platform',
      hr: 'Web Mechanic: platforma za naručivanje u vulkanizerskom servisu',
    },
    label: { en: 'Full-stack · Largest project', hr: 'Full-stack · Najveći projekt' },
    summary: {
      en: 'A complete business system for a tyre service: public website with online booking, plus separate portals for customers, mechanics, warehouse staff and administrators.',
      hr: 'Cjeloviti poslovni sustav za vulkanizerski servis: javna stranica s online naručivanjem termina te zasebni portali za klijente, mehaničare, skladištare i administratore.',
    },
    problem: {
      en: 'A booking system fails in the edge cases: two customers grabbing the same slot, stock being reserved twice, or one user reading another user’s data.',
      hr: 'Sustav za rezervacije puca na rubnim slučajevima: dva klijenta uzmu isti termin, ista roba se rezervira dvaput ili jedan korisnik vidi tuđe podatke.',
    },
    solution: {
      en: 'A Spring Boot modular monolith (auth, appointments, inventory, reservations, admin) where each module exposes a single facade. Double bookings are blocked in PostgreSQL with an EXCLUDE constraint, stock changes only through conditional updates with a full movement log, and ownership checks live inside the queries themselves.',
      hr: 'Spring Boot modularni monolit (autentikacija, termini, skladište, rezervacije, administracija) u kojem svaki modul izlaže jednu fasadu. Dvostruke rezervacije blokira PostgreSQL EXCLUDE ograničenje, zaliha se mijenja samo uvjetnim ažuriranjima uz potpuni dnevnik kretanja robe, a provjera vlasništva nalazi se u samim upitima.',
    },
    learned: {
      en: 'Put important guarantees where they cannot be forgotten, in the database and in the query, and prove them with tests that run against real PostgreSQL, not an in-memory substitute.',
      hr: 'Važna jamstva treba staviti tamo gdje se ne mogu zaboraviti, u bazu i u upit, i dokazati ih testovima koji se izvode nad stvarnim PostgreSQL-om, a ne nad in-memory zamjenom.',
    },
    highlights: {
      en: [
        '44 backend integration tests: concurrent booking, cancellation, stock races, IDOR and privilege escalation',
        'Module boundaries enforced with ArchUnit',
        'Frontend covered by Vitest, Playwright end-to-end tests and automated accessibility checks (axe-core, WCAG 2.1 AA)',
      ],
      hr: [
        '44 backend integracijska testa: istovremeno naručivanje, otkazivanje, utrke nad zalihama, IDOR i eskalacija ovlasti',
        'Granice modula provjerene ArchUnitom',
        'Frontend pokriven Vitest, Playwright end-to-end testovima i automatskim provjerama pristupačnosti (axe-core, WCAG 2.1 AA)',
      ],
    },
    stack: [
      'Java',
      'Spring Boot',
      'Spring Security',
      'PostgreSQL',
      'Flyway',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Docker',
    ],
    links: { repo: 'https://github.com/Jaramb00/web-mechanic-service' },
    architecture: [
      'React + TypeScript SPA',
      'REST API · Spring Security',
      'Module facades',
      'PostgreSQL · EXCLUDE · CHECK',
    ],
  },
  {
    slug: 'vlm-cms',
    featured: true,
    title: {
      en: 'AI-Powered Content Management System',
      hr: 'Sustav za upravljanje sadržajem s AI podrškom',
    },
    label: { en: 'Backend · AI · Master’s thesis', hr: 'Backend · AI · Diplomski rad' },
    summary: {
      en: 'Users upload an image; a vision-language model (Anthropic Claude) generates a semantic description in the background, and the app measures how API latency behaves.',
      hr: 'Korisnik učita sliku, vision-language model (Anthropic Claude) u pozadini generira semantički opis, a aplikacija mjeri ponašanje latencije API-ja.',
    },
    problem: {
      en: 'Calls to an AI model take several seconds and sometimes fail. Doing them inside a web request makes the app slow and fragile.',
      hr: 'Pozivi AI modelu traju nekoliko sekundi i ponekad ne uspiju. Ako se izvode unutar web zahtjeva, aplikacija postaje spora i krhka.',
    },
    solution: {
      en: 'A layered Symfony app (controller → service → repository) with JWT authentication and per-user data isolation. Uploads dispatch a message to a Symfony Messenger queue; a background worker calls Claude, retries transient errors with exponential backoff, and stores the result together with latency and image size for analysis.',
      hr: 'Slojevita Symfony aplikacija (controller → service → repository) s JWT autentikacijom i izolacijom podataka po korisniku. Učitavanje slike šalje poruku u Symfony Messenger red; pozadinski worker poziva Claude, privremene greške ponavlja s eksponencijalnim odgađanjem i sprema rezultat zajedno s latencijom i veličinom slike za analizu.',
    },
    learned: {
      en: 'How to treat an external AI API as an unreliable dependency: keep it off the request path, separate transient from permanent errors, make processing idempotent, and measure instead of guessing.',
      hr: 'Kako vanjski AI API tretirati kao nepouzdanu ovisnost: maknuti ga s puta korisničkog zahtjeva, razlikovati privremene i trajne greške, osigurati idempotentnu obradu te mjeriti umjesto nagađati.',
    },
    highlights: {
      en: [
        'Asynchronous processing with Symfony Messenger (queue + worker)',
        'Latency statistics: average, min/max, correlation with image size',
        'Modern PHP 8 (attributes, enums, constructor promotion); Docker + GitHub Actions CI',
      ],
      hr: [
        'Asinkrona obrada sa Symfony Messengerom (red poruka + worker)',
        'Statistika latencije: prosjek, min/max, korelacija s veličinom slike',
        'Moderni PHP 8 (atributi, enumi, constructor promotion); Docker + GitHub Actions CI',
      ],
    },
    stack: [
      'PHP 8',
      'Symfony 6.4',
      'Doctrine ORM',
      'Symfony Messenger',
      'MySQL',
      'JWT',
      'Twig',
      'Claude API',
    ],
    links: { repo: 'https://github.com/Jaramb00/symfony-vlm-content-management-system' },
    architecture: [
      'Twig UI · REST API (JWT)',
      'Service layer',
      'Messenger queue → worker',
      'Claude API · MySQL',
    ],
  },
  {
    slug: 'tickethub',
    featured: true,
    title: {
      en: 'TicketHub: Support Ticket Middleware',
      hr: 'TicketHub: middleware servis za support tickete',
    },
    label: { en: 'Backend · Python', hr: 'Backend · Python' },
    summary: {
      en: 'A FastAPI service that pulls support tickets from an external source, stores them locally and exposes a clean, authenticated REST API.',
      hr: 'FastAPI servis koji preuzima support tickete iz vanjskog izvora, sprema ih lokalno i izlaže ih kroz uredan REST API s autentikacijom.',
    },
    problem: {
      en: 'Depending on a live third-party API for every read makes a service slow and unavailable whenever the source is down.',
      hr: 'Ako svako čitanje ovisi o živom vanjskom API-ju, servis je spor i nedostupan kad god izvor ne radi.',
    },
    solution: {
      en: 'All reads and writes go to a local database. Data from DummyJSON is transformed into a standard ticket model (title, status, priority, assignee, raw JSON) and kept fresh with a dialect-aware upsert sync that never overwrites local changes.',
      hr: 'Sva čitanja i pisanja idu u lokalnu bazu. Podaci iz DummyJSON-a pretvaraju se u standardni model ticketa (naslov, status, prioritet, dodijeljeni korisnik, izvorni JSON) i osvježavaju upsert sinkronizacijom koja ne prepisuje lokalne izmjene.',
    },
    learned: {
      en: 'Async SQLAlchemy and Alembic migrations in practice, and how small decisions like caching, rate limiting and a CI pipeline make a service feel production-ready.',
      hr: 'Asinkroni SQLAlchemy i Alembic migracije u praksi te kako male odluke poput keširanja, rate limitinga i CI pipelinea servis čine spremnim za produkciju.',
    },
    highlights: {
      en: [
        '33 pytest tests (unit + integration, no network calls)',
        'JWT-protected write endpoints, rate limiting, cached statistics',
        'CI on every push: ruff → migrations → pytest; Docker Compose setup',
      ],
      hr: [
        '33 pytest testa (jedinični + integracijski, bez mrežnih poziva)',
        'Write endpointi zaštićeni JWT-om, rate limiting, keširane statistike',
        'CI na svaki push: ruff → migracije → pytest; Docker Compose',
      ],
    },
    stack: [
      'Python 3.11',
      'FastAPI',
      'SQLAlchemy (async)',
      'Alembic',
      'Pydantic',
      'Pytest',
      'Docker',
      'GitHub Actions',
    ],
    links: {
      repo: 'https://github.com/Jaramb00/tickethub-fastapi',
      docs: 'https://jaramb00.github.io/tickethub-fastapi/',
    },
    architecture: [
      'REST API · JWT · rate limit',
      'Routers → CRUD',
      'Sync service (upsert)',
      'SQLite / PostgreSQL',
    ],
  },
  {
    slug: 'mobile-banking-qa',
    featured: true,
    title: {
      en: 'Mobile Banking Activation & QA',
      hr: 'Aktivacija mobilnog bankarstva i QA',
    },
    label: { en: 'Backend · Testing', hr: 'Backend · Testiranje' },
    summary: {
      en: 'A simulation of how a banking app activates a new device with a one-time code. I built it to practise the full QA lifecycle, not just the code.',
      hr: 'Simulacija aktivacije mobilnog bankarstva jednokratnim kodom. Izradio sam je kako bih prošao cijeli QA proces, a ne samo napisao kod.',
    },
    problem: {
      en: 'Activation codes have strict rules: six digits, valid for five minutes, single use, tied to one user, blocked after five wrong attempts. Each rule is a place for bugs.',
      hr: 'Aktivacijski kodovi imaju stroga pravila: šest znamenki, vrijede pet minuta, jednokratni su, vezani uz jednog korisnika i blokiraju se nakon pet pogrešnih pokušaja. Svako pravilo mjesto je za grešku.',
    },
    solution: {
      en: 'A FastAPI service (router → service → database) with Pydantic validation, a small HTML/JS frontend, and complete QA documentation: test cases, bug reports and a test report.',
      hr: 'FastAPI servis (router → service → baza) s Pydantic validacijom, jednostavan HTML/JS frontend i potpuna QA dokumentacija: testni slučajevi, prijave grešaka i izvještaj o testiranju.',
    },
    learned: {
      en: 'The value of tracing a requirement all the way to a regression test. The five-minute expiry rule led me to a real timezone bug, which is now covered by an automated test.',
      hr: 'Vrijednost praćenja zahtjeva sve do regresijskog testa. Pravilo o isteku od pet minuta dovelo me do stvarne greške s vremenskim zonama, koju sada pokriva automatski test.',
    },
    highlights: {
      en: [
        '22 automated pytest tests: positive, negative and edge cases',
        '19 documented manual test cases and 3 bug reports',
        'Swagger/OpenAPI documentation',
      ],
      hr: [
        '22 automatska pytest testa: pozitivni, negativni i rubni slučajevi',
        '19 dokumentiranih ručnih testnih slučajeva i 3 prijave grešaka',
        'Swagger/OpenAPI dokumentacija',
      ],
    },
    stack: ['Python', 'FastAPI', 'Pydantic', 'SQLAlchemy', 'SQLite', 'Pytest', 'HTML/CSS/JS'],
    links: {
      repo: 'https://github.com/Jaramb00/mobile-banking-qa',
      demo: 'https://mobile-banking-qa.vercel.app',
    },
    image: mobileBankingImg,
    imageAlt: {
      en: 'Screenshot of the mobile banking activation demo',
      hr: 'Snimka zaslona demo aplikacije za aktivaciju mobilnog bankarstva',
    },
  },
  {
    slug: 'apartment-555',
    featured: false,
    title: { en: 'Apartment 555, Dubrovnik', hr: 'Apartman 555, Dubrovnik' },
    label: { en: 'Client demo · In progress', hr: 'Demo za klijenta · U izradi' },
    summary: {
      en: 'Landing page for a vacation rental: photo gallery, booking calendar with live price quote, map and enquiry form. All content lives in one data file so the owner’s details are easy to swap in.',
      hr: 'Landing stranica za apartman: galerija, kalendar rezervacija s izračunom cijene, karta i obrazac za upit. Sav sadržaj nalazi se u jednoj datoteci kako bi se podaci vlasnika lako zamijenili.',
    },
    stack: ['React 19', 'TypeScript', 'Vite', 'Tailwind CSS'],
    links: {
      repo: 'https://github.com/Jaramb00/demo-apartman',
      demo: 'https://demo-apartman-ochre.vercel.app',
    },
    image: apartmentImg,
    imageAlt: {
      en: 'Screenshot of the Apartment 555 landing page',
      hr: 'Snimka zaslona landing stranice Apartmana 555',
    },
  },
  {
    slug: 'tyre-webshop',
    featured: false,
    title: { en: 'Vulkanizer Željko: Tyre Webshop', hr: 'Vulkanizer Željko: webshop guma' },
    label: { en: 'Client demo · In progress', hr: 'Demo za klijenta · U izradi' },
    summary: {
      en: 'Storefront for a tyre and wheel service: catalogue by brand and season, services overview and an interactive 3D tyre in the hero. The frontend is live; the ordering backend is waiting to be deployed.',
      hr: 'Web trgovina za vulkanizerski servis: katalog po marki i sezoni, pregled usluga i interaktivna 3D guma u zaglavlju. Frontend je objavljen, a backend za narudžbe čeka postavljanje.',
    },
    stack: ['React', 'TypeScript', 'MUI', 'Three.js', 'ASP.NET Core'],
    links: {
      repo: 'https://github.com/Jaramb00/tyre-webshop',
      demo: 'https://tyre-webshop.vercel.app',
    },
    image: tyreShopImg,
    imageAlt: {
      en: 'Screenshot of the Vulkanizer Željko tyre webshop',
      hr: 'Snimka zaslona webshopa Vulkanizer Željko',
    },
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
export const otherProjects = projects.filter((p) => !p.featured);
