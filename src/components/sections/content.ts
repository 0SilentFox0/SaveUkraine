export interface IStat {
  title: string;
  text: string;
  link: string;
  linkText: string;
}

const statsEn: IStat[] = [
  {
    title: '50,000',
    text: 'Estimated number of casualties in Ukraine',
    link: 'https://www.cfr.org/global-conflict-tracker/conflict/conflict-ukraine',
    linkText: 'Source',
  },
  {
    title: '1.5 million',
    text: 'Internally displaced persons',
    link: 'https://www.cfr.org/global-conflict-tracker/conflict/conflict-ukraine',
    linkText: 'Source',
  },
  {
    title: '280 miles',
    text: 'Length of front line',
    link: 'https://www.cfr.org/global-conflict-tracker/conflict/conflict-ukraine',
    linkText: 'Source',
  },
];

const statsRu: IStat[] = [
  {
    title: '50,000',
    text: 'Предполагаемое количество пострадавших в Украине',
    link: 'https://www.cfr.org/global-conflict-tracker/conflict/conflict-ukraine',
    linkText: 'Источник',
  },
  {
    title: '1.5 МЛН',
    text: 'Вынужденных переселенцев',
    link: 'https://www.cfr.org/global-conflict-tracker/conflict/conflict-ukraine',
    linkText: 'Источник',
  },
  {
    title: '450 КМ',
    text: 'Протяженность линии фронта',
    link: 'https://www.cfr.org/global-conflict-tracker/conflict/conflict-ukraine',
    linkText: 'Источник',
  },
];

const statsUa: IStat[] = [
  {
    title: '50,000',
    text: 'Передбачувана кількість постраждалих в Україні',
    link: 'https://www.cfr.org/global-conflict-tracker/conflict/conflict-ukraine',
    linkText: 'Джерело',
  },
  {
    title: '1.5 МЛН',
    text: 'Вимушених переселенців',
    link: 'https://www.cfr.org/global-conflict-tracker/conflict/conflict-ukraine',
    linkText: 'Джерело',
  },
  {
    title: '450 КМ',
    text: 'Довжина лінії фронту',
    link: 'https://www.cfr.org/global-conflict-tracker/conflict/conflict-ukraine',
    linkText: 'Джерело',
  },
];

export const stats = {
  en: statsEn,
  ru: statsRu,
  ua: statsUa,
};
