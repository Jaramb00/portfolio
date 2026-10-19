import type { Localized } from '../i18n';

export interface TimelineEntry {
  title: Localized;
  org: Localized;
  period: string;
  details?: Localized<string[]>;
  /** Extra line, e.g. thesis title. */
  note?: Localized;
}

export const work: TimelineEntry[] = [
  {
    title: { en: 'Head Waiter · Full-time', hr: 'Glavni konobar · Puno radno vrijeme' },
    org: {
      en: 'Le Méridien Lav · Podstrana, Croatia',
      hr: 'Le Méridien Lav · Podstrana, Hrvatska',
    },
    period: '06/2019 – 06/2026',
    details: {
      en: [
        'Managed daily operations and coordinated staff in a high-volume hospitality environment.',
        'Organised team schedules and led daily activities while keeping guest satisfaction high.',
        'Handled inventory control and on-the-spot problem-solving under pressure.',
      ],
      hr: [
        'Upravljao svakodnevnim poslovanjem i koordinirao osoblje u zahtjevnom ugostiteljskom okruženju.',
        'Organizirao rasporede tima i vodio dnevne aktivnosti uz visoko zadovoljstvo gostiju.',
        'Vodio kontrolu zaliha i rješavao operativne probleme na licu mjesta pod pritiskom.',
      ],
    },
  },
  {
    title: { en: 'Warehouse Worker', hr: 'Skladišni radnik' },
    org: { en: 'Disa d.o.o. · Split, Croatia', hr: 'Disa d.o.o. · Split, Hrvatska' },
    period: '06/2018 – 08/2018',
    details: {
      en: [
        'Supported warehouse operations: goods handling, stock organisation and order preparation.',
      ],
      hr: [
        'Sudjelovao u skladišnim poslovima: rukovanje robom, organizacija zaliha i priprema narudžbi.',
      ],
    },
  },
];

export const education: TimelineEntry[] = [
  {
    title: { en: 'Master’s Degree in Computing', hr: 'Diplomski sveučilišni studij Računarstvo' },
    org: {
      en: 'FESB, Faculty of Electrical Engineering, Mechanical Engineering and Naval Architecture, Split',
      hr: 'FESB, Fakultet elektrotehnike, strojarstva i brodogradnje, Split',
    },
    period: '09/2024 – 09/2026',
    note: {
      en: 'Thesis: An image description generation system based on the Symfony framework and VLM APIs',
      hr: 'Diplomski rad: Sustav za generiranje opisa slika temeljen na Symfony okviru i VLM API-jima',
    },
  },
  {
    title: {
      en: 'Bachelor’s Degree in Computing',
      hr: 'Prijediplomski sveučilišni studij Računarstvo',
    },
    org: {
      en: 'FESB, Faculty of Electrical Engineering, Mechanical Engineering and Naval Architecture, Split',
      hr: 'FESB, Fakultet elektrotehnike, strojarstva i brodogradnje, Split',
    },
    period: '09/2020 – 06/2024',
    note: {
      en: 'Thesis: Data visualisation using the R programming language',
      hr: 'Završni rad: Vizualizacija podataka primjenom programskog jezika R',
    },
  },
];

export const spokenLanguages: { name: Localized; level: Localized }[] = [
  { name: { en: 'Croatian', hr: 'Hrvatski' }, level: { en: 'Native', hr: 'Materinski' } },
  {
    name: { en: 'English', hr: 'Engleski' },
    level: { en: 'B2 (CEFR, all skills)', hr: 'B2 (CEFR, sve vještine)' },
  },
];
