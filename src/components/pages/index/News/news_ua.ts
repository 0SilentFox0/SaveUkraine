import article1png from '@/assets/img/pages/index/article/photo/ua/article-1.png';
import article1webp from '@/assets/img/pages/index/article/photo/ua/article-1.webp';
import article2png from '@/assets/img/pages/index/article/photo/ua/article-2.png';
import article2webp from '@/assets/img/pages/index/article/photo/ua/article-2.webp';
import article3png from '@/assets/img/pages/index/article/photo/ua/article-3.png';
import article3webp from '@/assets/img/pages/index/article/photo/ua/article-3.webp';
import article4png from '@/assets/img/pages/index/article/photo/ua/article-4.png';
import article4webp from '@/assets/img/pages/index/article/photo/ua/article-4.webp';
import article5png from '@/assets/img/pages/index/article/photo/ua/article-5.png';
import article5webp from '@/assets/img/pages/index/article/photo/ua/article-5.webp';
import article6png from '@/assets/img/pages/index/article/photo/ua/article-6.png';
import article6webp from '@/assets/img/pages/index/article/photo/ua/article-6.webp';
import article7png from '@/assets/img/pages/index/article/photo/ua/article-7.png';
import article7webp from '@/assets/img/pages/index/article/photo/ua/article-7.webp';
import article8png from '@/assets/img/pages/index/article/photo/ua/article-8.png';
import article8webp from '@/assets/img/pages/index/article/photo/ua/article-8.webp';
import article9png from '@/assets/img/pages/index/article/photo/ua/article-9.png';
import article9webp from '@/assets/img/pages/index/article/photo/ua/article-9.webp';

// logo
import bbc from '@/assets/img/pages/index/article/icon/bbc.svg?url';
import nv from '@/assets/img/pages/index/article/icon/nv.png';
import rbk from '@/assets/img/pages/index/article/icon/rbk-ukraine.svg?url';
import dw from '@/assets/img/pages/index/article/icon/dw.png';
import espresso from '@/assets/img/pages/index/article/icon/espresso.png';
import ukrainianTruth from '@/assets/img/pages/index/article/icon/ukrainian-truth.svg?url';

export const news: INews.Article[] = [
  {
    title:
      'Війна Росії проти України. Бої навколо Києва, Харкова, Сум, Маріуполя, обстріл Чернігова',
    description:
      'Українські прикордонники, які захищали острів Зміїний в Одеській області від російської армії, що вважалися загиблими, насправді живі й перебувають у полоні росіян, повідомила пресслужба Військово-морських Сил Збройних сил України. "Але російська пропаганда намагається розкрутити "новину" про те, що нібито влада України "забула" і "поховала своїх підлеглих".',
    resourceIcon: bbc,
    url: 'https://www.bbc.com/ukrainian/live/news-60462319',
    img: {
      png: article1png,
      webp: article1webp,
    },
  },
  {
    title: 'Вторгнення Росії. Події в Україні — хроніка',
    description:
      'Близько п’ятої ранку 24 лютого за київським часом Володимир Путін у новому зверненні оголосив про проведення "спеціальної військової операції" в Україні. Одночасно РФ розпочала обстріли українських міст. Путін заявив, що в плани Москви не входить окупація України, проте РФ прагнутиме до її «демілітаризації та денацифікації».',
    resourceIcon: nv,
    url: 'https://nv.ua/ukr/ukraine/politics/putin-ogolosiv-viynu-24-lyutogo-podiji-u-kiyevi-harkovi-ta-na-donbasi-novini-ukrajini-50219414.html',
    img: {
      png: article2png,
      webp: article2webp,
    },
  },
  {
    title:
      "Зустріч на Прип'яті. Україна приїхала на переговори з Росією: всі подробиці",
    resourceIcon: rbk,
    description:
      "Українська делегація вже приїхала на переговори з Росією. Зустріч відбудеться у районі річки Прип'ять на українсько-білоруському кордоні. Київ наполягатиме на негайному припиненні вогню та відведенні російських військ з території України.",
    url: 'https://www.rbc.ua/ukr/news/ukraina-edet-peregovory-rossiey-podrobnosti-1645967759.html',
    img: {
      png: article3png,
      webp: article3webp,
    },
  },
  {
    title: 'Україна подала позов проти РФ до Міжнародного суду ООН у Гаазі',
    resourceIcon: dw,
    description:
      'Російські сили завдають ударів по українській цивільній та військовій інфраструктурі. "Просимо суд негайно наказати РФ припинити військові дії та призначити слухання вже наступного тижня", - заявив президент України Володимир Зеленський.',
    url: 'https://www.dw.com/uk/ukraina-podala-pozov-proty-rf-do-mizhnarodnoho-sudu-oon-u-haazi/a-60931426',
    img: {
      png: article4png,
      webp: article4webp,
    },
  },

  {
    title:
      '«Десятки загиблих та сотні поранених». Харків зазнав масованого удару градами',
    resourceIcon: nv,
    description:
      'Російські окупанти обстріляли Харків з реактивної системи залпового вогню Град, повідомив радник голови МВС Антон Геращенко. Окупанти вдарили по житловому кварталу з реактивної артилерії.',
    url: 'https://nv.ua/ukr/ukraine/events/harkiv-obstrilyali-z-gradiv-ostanni-novini-50220876.html',
    img: {
      png: article5png,
      webp: article5webp,
    },
  },
  {
    title: 'Україна бореться за виживання. Що буде далі?',
    resourceIcon: bbc,
    description:
      "Головний приз для Росії - Київ. Президент Путін явно провів місяці в ізоляції, вивчаючи плани своїх начальників оборони щодо заволодіння сусідньою слов'янською країною, яка обрала прозахідний курс, і повернення її на орбіту Москви.",
    url: 'https://www.bbc.com/ukrainian/features-60540260',
    img: {
      png: article6png,
      webp: article6webp,
    },
  },
  {
    title: 'Санкції проти Росії: що про них треба знати',
    resourceIcon: bbc,
    description:
      'Якщо ми говоримо про політику санкцій і ймовірність ескалації, то виникає питання, чому ви не вводите санкції зараз, а чекаєте на ескалацію?" - запитав президент Зеленський.',
    url: 'https://www.bbc.com/ukrainian/features-60154742',
    img: {
      png: article7png,
      webp: article7webp,
    },
  },
  {
    title:
      'У Росії петиція про імпічмент Путіна набрала понад 150 тис. підписів',
    resourceIcon: espresso,
    description:
      'Автор петиції вимагає у російської Держдуми ініціювати відмову Володимира Путіна з посади президента Росії, згідно зі статтею 93 Конституції РФ, як винного у державній зраді та військових злочинах. Станом на 27 лютого петиція набрала 169 500 підписів.',
    url: 'https://espreso.tv/u-rosii-petitsiya-pro-impichment-putina-nabrala-ponad-150-tis-pidpisiv',
    img: {
      png: article8png,
      webp: article8webp,
    },
  },
  {
    title: 'Пентагон на погрози Путіна ядерною зброєю',
    resourceIcon: ukrainianTruth,
    description:
      'У Пентагоні у відповідь на погрози президента Росії Володимира Путіна заявили, що здатні "захистити себе, союзників і партнерів". Офіційні особи США не сумніваються в повідомленнях про те, що Путін привів російські сили ядерного стримування у стан підвищеної бойової готовності.',
    url: 'https://www.pravda.com.ua/news/2022/02/28/7326707/',
    img: {
      png: article9png,
      webp: article9webp,
    },
  },
];
