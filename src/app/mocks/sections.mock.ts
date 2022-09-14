import { Section } from '~/interfaces/section.interface';

export const sections: Section[] = [
  {
    id: 1,
    icon: './assets/person.png',
    title: 'Contracts',
    active: true,
  },
  {
    id: 2,
    icon: './assets/document.png',
    title: 'Documents',
    active: false,
  },
  {
    id: 3,
    icon: './assets/payout.png',
    title: 'Payout',
    active: false,
  },
  {
    id: 4,
    icon: './assets/calendar.png',
    title: 'Time',
    active: false,
  },
];
