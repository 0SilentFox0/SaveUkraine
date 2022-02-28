export interface IHelp {
  title: string;
  content: string[];
}

const goalEn: IHelp = {
  title: 'Our goal:',
  content: [
    'Stop War in Ukraine',
    'Shout out support for Ukrainian people who leave in fear',
    'Demand Global Leaders to stop the war in Ukraine by implementing economical, political and personal levarages',
  ],
};

const howToHelpEn: IHelp = {
  title: 'Trusted sources',
  content: [
    'Donate to Ukrainian Army',
    'Donate to Ukrainian civilians',
    'Help Ukrainian refugees',
    'Sources to help and donate',
  ],
};

const sourcesEn: IHelp = {
  title: 'Trusted sources',
  content: [
    'Government websites of Ukraine',
    'President of Ukraine - Official website',
    'Defence of Ukraine on Twitter',
    'BBC News - Ukraine',
    'Kyiv Post - Ukraine’s English-language newspaper ',
    'Ukraine NOW - by the Ministry of Foreign Affairs',
    'Ukraine at war On Twitter',
  ],
};

export const whatToDo = {
  goal: {
    en: goalEn,
  },
  howToHelp: {
    en: howToHelpEn,
  },
  sources: {
    en: sourcesEn,
  },
};
