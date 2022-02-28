import article1png from '@/assets/img/pages/index/article/photo/ru/article-1.png';
import article1webp from '@/assets/img/pages/index/article/photo/ru/article-1.webp';
import article2png from '@/assets/img/pages/index/article/photo/ru/article-2.png';
import article2webp from '@/assets/img/pages/index/article/photo/ru/article-2.webp';
import article3png from '@/assets/img/pages/index/article/photo/ru/article-3.png';
import article3webp from '@/assets/img/pages/index/article/photo/ru/article-3.webp';
import article4png from '@/assets/img/pages/index/article/photo/ru/article-4.png';
import article4webp from '@/assets/img/pages/index/article/photo/ru/article-4.webp';
import article5png from '@/assets/img/pages/index/article/photo/ru/article-5.png';
import article5webp from '@/assets/img/pages/index/article/photo/ru/article-5.webp';
import article6png from '@/assets/img/pages/index/article/photo/ru/article-6.png';
import article6webp from '@/assets/img/pages/index/article/photo/ru/article-6.webp';
import article7png from '@/assets/img/pages/index/article/photo/ru/article-7.png';
import article7webp from '@/assets/img/pages/index/article/photo/ru/article-7.webp';
import article8png from '@/assets/img/pages/index/article/photo/ru/article-8.png';
import article8webp from '@/assets/img/pages/index/article/photo/ru/article-8.webp';
import article9png from '@/assets/img/pages/index/article/photo/ru/article-9.png';
import article9webp from '@/assets/img/pages/index/article/photo/ru/article-9.webp';

// logo
import ovd from '@/assets/img/pages/index/article/icon/ovd-news.svg?url';
import mediazona from '@/assets/img/pages/index/article/icon/mediazona.png';
import currentTime from '@/assets/img/pages/index/article/icon/current-time.svg?url';
import meduza from '@/assets/img/pages/index/article/icon/meduza.svg?url';
import fontanka from '@/assets/img/pages/index/article/icon/fontanka.svg?url';

import { INews } from '@/components/pages/index/News/News.types';

export const news: INews.Article[] = [
  {
    title:
      'Списки задержанных в связи с акциями против войны с Украиной 27 февраля 2022 года',
    description:
      '27 февраля во многих российских городах продолжаются акции против военных действий России на территории Украины. ',
    resourceIcon: ovd,
    url: 'https://ovd.news/news/2022/02/27/spiski-zaderzhannyh-v-svyazi-s-akciyami-protiv-voyny-s-ukrainoy-27-fevralya-2022',
    img: {
      png: article1png,
      webp: article1webp,
    },
  },
  {
    title:
      '«Смертоубийство. И уйти оттуда невозможно». Тысячи людей сутками стоят в очередях на пограничных пунктах, чтобы спастись от войны в Украине',
    description:
      'Большинство беженцев из Украины направляются в Польшу. \n' +
      'С начала войны туда уже прошли около 100 тысяч человек. ',
    resourceIcon: mediazona,
    url: 'https://zona.media/article/2022/02/26/bezhentsy',
    img: {
      png: article2png,
      webp: article2webp,
    },
  },
  {
    title: 'Пятый день российского вторжения в Украину!',
    resourceIcon: currentTime,
    description:
      'Около 4 часов утра по Киеву российские войска возобновили обстрелы украинской столицы и Харькова. При этом ожидается, что на белорусской границе вот-вот начнутся переговоры между российской и украинскими делегациями.',
    url: 'https://www.currenttime.tv/a/russia-ukraine-war/31726786/lbl0lbi259362.html',
    img: {
      png: article3png,
      webp: article3webp,
    },
  },
  {
    title:
      'Суды и другое давление из-за акций в поддержку народа Украины и против войны',
    resourceIcon: ovd,
    description:
      'В первый день полицейские задержали более 1800 человек, затем давление продолжилось. Мы следим за судебными решениями по следам этих задержаний.',
    url: 'https://ovd.news/news/2022/02/25/sudy-i-drugoe-davlenie-iz-za-akciy-v-podderzhku-naroda-ukrainy-i-protiv-voyny',
    img: {
      png: article4png,
      webp: article4webp,
    },
  },

  {
    title:
      'Что известно о числе погибших с обеих сторон к середине третьего дня войны ',
    resourceIcon: meduza,
    description:
      'За три дня войны российское министерство обороны ни разу не отчиталось о потерях в технике и живой силе.',
    url: 'https://meduza.io/feature/2022/02/26/chto-izvestno-o-chisle-pogibshih-s-obeih-storon-k-seredine-tretiego-dnya-voyny',
    img: {
      png: article5png,
      webp: article5webp,
    },
  },
  {
    title: 'Ракета попала в жилой дом в центре Чернигова',
    resourceIcon: currentTime,
    description:
      'Ракета попала в жилой дом в центре Чернигова в результате обстрела со стороны российских военных, сообщает Государственная служба спецсвязи Украины. На двух нижних этажах здания начался пожар. ',
    url: 'https://www.currenttime.tv/a/raketa-popala-v-zhiloy-dom-v-chernigove/31727495.html',
    img: {
      png: article6png,
      webp: article6webp,
    },
  },
  {
    title:
      'МИД Украины открыл горячую линию для родственников российских военнослужащих',
    resourceIcon: currentTime,
    description:
      'Министерство иностранных дел Украины опубликовало номера телефонов, по которым россияне могут узнать, что происходит с их родственниками, участвующими во вторжении в Украину.',
    url: 'https://www.currenttime.tv/a/ukraina-mid-liniya/31725212.html',
    img: {
      png: article7png,
      webp: article7webp,
    },
  },
  {
    title:
      'Вторая акция протеста в Петербурге в поддержку Украины началась массовым задержанием',
    resourceIcon: fontanka,
    description:
      'Вечером 25 февраля у Гостиного двора в Петербурге горожане снова собрались на несогласованную акцию протеста против российской военной операции на Украине, передает корреспондент «Фонтанки». ',
    url: 'https://www.fontanka.ru/2022/02/27/70474205/',
    img: {
      png: article8png,
      webp: article8webp,
    },
  },
  {
    title:
      'Дети политиков, чиновников и крупных бизнесменов высказываются против нападения на Украину',
    resourceIcon: mediazona,
    description:
      'После начала вторжения в Украину многие знаменитости высказались за мир и призвали прекратить кровопролитие, в соцсетях получил широкую популярность хештег #нетвойне. ',
    url: 'https://zona.media/article/2022/02/25/no-war',
    img: {
      png: article9png,
      webp: article9webp,
    },
  },
];
