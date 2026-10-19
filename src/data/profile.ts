import type { Localized } from '../i18n';

/**
 * Personal details, links and biography.
 * Edit text here — components only read from this file.
 */
export const profile = {
  name: 'Josip Arambašić',
  firstName: 'Josip',
  role: 'Junior Software Developer',
  location: { en: 'Podstrana (Split), Croatia', hr: 'Podstrana (Split), Hrvatska' } as Localized,
  email: 'saramba10@gmail.com',

  links: {
    github: 'https://github.com/Jaramb00',
    linkedin: 'https://www.linkedin.com/in/josip-aramba%C5%A1i%C4%87-235552248/',
  },

  /** CV files in /public/cv. Each language links to its own version. */
  cv: {
    en: '/cv/Josip_Arambasic_CV_EN.pdf',
    hr: '/cv/Josip_Arambasic_CV_HR.pdf',
  } as Localized,

  headline: {
    en: 'I build reliable backends and the web apps on top of them.',
    hr: 'Gradim pouzdane backend sustave i web aplikacije iznad njih.',
  } as Localized,

  intro: {
    en: 'Master’s graduate in Computing from FESB, Split. I design layered APIs, model relational data and test the parts that tend to break. For my Master’s thesis I connected a vision-language model to a Symfony application.',
    hr: 'Magistar računarstva s FESB-a u Splitu. Projektiram slojevite API‑je, modeliram relacijske baze i testiram dijelove koji se najčešće kvare. U diplomskom radu povezao sam vision-language model sa Symfony aplikacijom.',
  } as Localized,

  /** Short tags shown in the hero. */
  focus: {
    en: ['Backend development', 'Full-stack web apps', 'AI integration'],
    hr: ['Backend razvoj', 'Full-stack web aplikacije', 'Integracija AI modela'],
  } as Localized<string[]>,

  /** About section — each string is one paragraph. */
  about: {
    en: [
      'I studied Computing at FESB in Split: a Bachelor’s degree (2020–2024) followed by a Master’s (2024–2026). My Bachelor’s thesis was about data visualisation in R; for my Master’s thesis I built a Symfony system that generates image descriptions using vision-language model APIs.',
      'For seven years I also worked as a head waiter at Le Méridien Lav, alongside my studies. Running a restaurant full of guests taught me to stay calm under pressure, organise a team of colleagues and get the job done properly the first time. I bring the same habits to software: understand the problem first, keep things simple, and check my own work before someone else has to.',
      'Outside coursework I keep building real projects: a booking platform for a tyre service, a FastAPI middleware service and a QA-focused banking demo. I am also building two websites for real clients, which are currently in progress.',
    ],
    hr: [
      'Studirao sam računarstvo na FESB-u u Splitu: prijediplomski studij (2020.–2024.) i potom diplomski (2024.–2026.). Završni rad bio je o vizualizaciji podataka u programskom jeziku R, a za diplomski rad izradio sam Symfony sustav koji generira opise slika pomoću API‑ja vision-language modela.',
      'Usporedno sa studijem sedam sam godina radio kao glavni konobar u hotelu Le Méridien Lav. Vođenje punog restorana gostiju naučilo me da budem smiren pod pritiskom, organiziram tim kolega i posao odradim kvalitetno iz prvog puta. Iste navike prenosim u razvoj softvera: prvo razumjeti problem, držati rješenje jednostavnim i provjeriti vlastiti rad prije nego što to mora netko drugi.',
      'Izvan fakultetskih obaveza nastavljam graditi stvarne projekte: platformu za naručivanje u vulkanizerskom servisu, FastAPI middleware servis i demo mobilnog bankarstva s fokusom na QA. Uz to izrađujem dvije web stranice za stvarne klijente, koje su trenutno u izradi.',
    ],
  } as Localized<string[]>,

  learning: {
    en: [
      'AI engineering: building applications on top of LLM APIs',
      'Modern Python (typing, async, current tooling)',
    ],
    hr: [
      'AI inženjerstvo: izrada aplikacija nad LLM API‑jima',
      'Moderni Python (tipovi, async, suvremeni alati)',
    ],
  } as Localized<string[]>,

  goals: {
    en: 'A junior backend, full-stack or AI-focused developer role on a team where I can ship real features, learn from code review and grow into owning parts of the system.',
    hr: 'Pozicija junior backend, full-stack ili AI developera u timu gdje mogu isporučivati stvarne funkcionalnosti, učiti kroz code review i s vremenom preuzeti odgovornost za dijelove sustava.',
  } as Localized,
};
