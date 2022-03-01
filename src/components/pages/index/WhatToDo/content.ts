export interface ILink {
  text: string;
  link: string;
}

export interface IHelp {
  title: string;
  content: ILink[] | string[];
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
  title: 'How to help',
  content: [
    {
      text: 'Donate to Ukrainian Army',
      link: 'https://bank.gov.ua/en/news/all/natsionalniy-bank-vidkriv-spetsrahunok-dlya-zboru-koshtiv-na-potrebi-armiyi',
    },
    {
      text: 'Donate to Ukrainian civilians',
      link: 'https://savelife.in.ua/en/donate/',
    },
    {
      text: 'Help Ukrainian refugees',
      link: 'https://www.ukrainenow.org/i-can-host',
    },
    {
      text: 'Sources to help and donate',
      link: 'https://helpukrainewin.org/',
    },
    {
      text: 'International rescue committee',
      link: 'https://www.rescue.org/',
    },
    {
      text: 'International Committee of the Red Cross',
      link: 'https://www.icrc.org/en/where-we-work/europe-central-asia/ukraine',
    },
  ],
};

const sourcesEn: IHelp = {
  title: 'Trusted sources',
  content: [
    {
      text: 'Government websites of Ukraine',
      link: 'https://www.dls.gov.ua/en/government-websites-of-ukraine/',
    },
    {
      text: 'President of Ukraine - Official website',
      link: 'https://www.president.gov.ua/en',
    },
    {
      text: 'Ministry of Defence of Ukraine on Twitter',
      link: 'https://twitter.com/DefenceU?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor',
    },
    {
      text: 'BBC News - Ukraine',
      link: 'https://www.bbc.com/news/topics/cx1m7zg0gzdt/ukraine',
    },
    {
      text: 'Kyiv Post - Ukraine’s English-language newspaper ',
      link: 'https://www.kyivpost.com/',
    },
    {
      text: 'Ukraine NOW - by the Ministry of Foreign Affairs',
      link: 'https://ukraine.ua/ukraine-news/',
    },
    {
      text: 'Ukraine at war On Twitter',
      link: 'https://twitter.com/i/lists/1497381085268922370',
    },
    {
      text: 'Website to locate killed Russian soldiers',
      link: 'https://200rf.com/',
    },
  ],
};

const goalRu: IHelp = {
  title: 'Наша цель:',
  content: [
    'Остановить войну в Украине',
    'Поддержать украинский народ, в стране покидащий свою страну',
    'Добиться от мировых лидеров остановить войну путем  экономических, политических и персональных санкций',
  ],
};

const howToHelpRu: IHelp = {
  title: 'Как помочь?',
  content: [
    {
      text: 'Пожертвовать на нужды украинской армии',
      link: 'https://bank.gov.ua/en/news/all/natsionalniy-bank-vidkriv-spetsrahunok-dlya-zboru-koshtiv-na-potrebi-armiyi',
    },
    {
      text: 'Помочь мирным жителям, жертвам военных действий',
      link: 'https://savelife.in.ua/en/donate/',
    },
    {
      text: 'Помочь украинским беженцам',
      link: 'https://www.ukrainenow.org/i-can-host',
    },
    {
      text: 'Ресурсы для помощи и сбора средств',
      link: 'https://helpukrainewin.org/',
    },
    {
      text: 'Международный комитет спасения',
      link: 'https://www.rescue.org/',
    },
    {
      text: 'Международный комитет красного Креста',
      link: 'https://www.icrc.org/ru/document/zayavlenie-prezidenta-mkkk-petera-maurera-otnositelno-konflikta-na-territorii-ukrainy',
    },
  ],
};

const sourcesRu: IHelp = {
  title: 'Проверенные\nновостные\nисточники',
  content: [
    {
      text: 'Офис Президента Украины',
      link: 'https://www.president.gov.ua/',
    },
    {
      text: 'Министерство Внутренних Дел Украины',
      link: 'https://www.facebook.com/mvs.gov.ua',
    },
    {
      text: 'Президент Украины - Твиттер',
      link: 'https://twitter.com/zelenskyyua?s=21',
    },
    {
      text: 'BBC News - Россия',
      link: 'https://www.bbc.com/russian',
    },
    {
      text: 'Сайт для поиска убитых Российских солдат',
      link: 'https://200rf.com/',
    },
  ],
};

const goalUa: IHelp = {
  title: 'Наша цiль:',
  content: [
    'Зупинити війну в Україні',
    'Підтримати українців, які залишають країну у страху',
    'Домогтися від світових лідерів зупинити війну шляхом економічних, політичних та персональних санкцій',
  ],
};

const howToHelpUa: IHelp = {
  title: 'Як допомогти',
  content: [
    {
      text: 'Пожертвувати кошти на потреби української армії',
      link: 'https://bank.gov.ua/en/news/all/natsionalniy-bank-vidkriv-spetsrahunok-dlya-zboru-koshtiv-na-potrebi-armiyi',
    },
    {
      text: 'Допомогти мирним жителям, що стали жертвам воєнних дій',
      link: 'https://savelife.in.ua/en/donate/',
    },
    {
      text: 'Допомогти українським біженцям',
      link: 'https://www.ukrainenow.org/i-can-host',
    },
    {
      text: 'Ресурси для допомоги та збору коштів',
      link: 'https://helpukrainewin.org/',
    },
    {
      text: 'Міжнародний комітет порятунку',
      link: 'https://www.rescue.org/',
    },
    {
      text: 'Міжнародний комітет Червоного Хреста',
      link: 'https://redcross.org.ua/',
    },
  ],
};

const sourcesUa: IHelp = {
  title: 'Перевірені\nджерела\nIнформації',
  content: [
    {
      text: 'Офіс Президента України',
      link: 'https://www.president.gov.ua/en',
    },
    {
      text: 'Офіційний вебпортал парламенту України',
      link: 'https://www.rada.gov.ua/',
    },
    {
      text: 'Генеральний штаб Збройних сил України',
      link: 'https://www.zsu.gov.ua/All_news/ua',
    },
    {
      text: 'Міністерство оборони України ',
      link: 'https://www.facebook.com/MinistryofDefence.UA',
    },
    {
      text: 'BBC News - Ukraine',
      link: 'https://www.zsu.gov.ua/All_news/ua',
    },
    {
      text: 'Володимир Зеленский у Twitter',
      link: 'https://twitter.com/zelenskyyua?s=21',
    },
    {
      text: 'Сайт для пошуку вбитих Російських солдатів',
      link: 'https://200rf.com/',
    },
  ],
};

export const whatToDo = {
  en: {
    goal: goalEn,
    howToHelp: howToHelpEn,
    sources: sourcesEn,
  },
  ru: {
    goal: goalRu,
    howToHelp: howToHelpRu,
    sources: sourcesRu,
  },
  ua: {
    goal: goalUa,
    howToHelp: howToHelpUa,
    sources: sourcesUa,
  },
};
