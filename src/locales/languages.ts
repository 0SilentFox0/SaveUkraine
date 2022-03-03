export interface ILang {
  name: string;
  slug: string;
  path: string;
}

export const allLanguages: ILang[] = [
  {
    name: 'English',
    slug: 'en',
    path: '/',
  },
  {
    name: 'Ukrainian',
    slug: 'ua',
    path: '/ua',
  },
  {
    name: 'Russian',
    slug: 'ru',
    path: '/ru',
  },
];
