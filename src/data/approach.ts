import type { Localized } from '../i18n';

export interface ApproachItem {
  title: Localized;
  text: Localized;
}

export const approach: ApproachItem[] = [
  {
    title: { en: 'Problem-solving', hr: 'Rješavanje problema' },
    text: {
      en: 'I start by writing down what can go wrong, such as double bookings, slow external APIs or users seeing each other’s data, and design around those cases first.',
      hr: 'Počinjem tako da zapišem što može poći po zlu, poput dvostrukih rezervacija, sporih vanjskih API‑ja ili korisnika koji vide tuđe podatke, i prvo projektiram oko tih slučajeva.',
    },
  },
  {
    title: { en: 'Architecture', hr: 'Arhitektura' },
    text: {
      en: 'Layered and modular, as simple as the problem allows. Clear boundaries (controller → service → repository, one facade per module) keep code easy to change.',
      hr: 'Slojevito i modularno, onoliko jednostavno koliko problem dopušta. Jasne granice (controller → service → repository, jedna fasada po modulu) olakšavaju izmjene.',
    },
  },
  {
    title: { en: 'Development', hr: 'Razvoj' },
    text: {
      en: 'Small, readable steps with Git, environment-based configuration, Docker for a reproducible setup, and a README that lets someone else run the project.',
      hr: 'Mali, čitljivi koraci uz Git, konfiguracija kroz varijable okruženja, Docker za ponovljivo postavljanje i README uz koji projekt može pokrenuti i netko drugi.',
    },
  },
  {
    title: { en: 'Testing', hr: 'Testiranje' },
    text: {
      en: 'I test the things that actually break: concurrency, permissions, edge cases. Tests run in CI on every push, and against a real database when the guarantees depend on it.',
      hr: 'Testiram ono što se stvarno kvari: istovremenost, ovlasti, rubne slučajeve. Testovi se izvode u CI-ju na svaki push, i nad stvarnom bazom kad jamstva ovise o njoj.',
    },
  },
  {
    title: { en: 'Learning', hr: 'Učenje' },
    text: {
      en: 'I learn a new technology by building something real with it, reading the official docs, and comparing my result with how experienced developers solve the same problem.',
      hr: 'Novu tehnologiju učim tako da s njom izradim nešto stvarno, čitam službenu dokumentaciju i uspoređujem svoje rješenje s onim kako isti problem rješavaju iskusni developeri.',
    },
  },
];
