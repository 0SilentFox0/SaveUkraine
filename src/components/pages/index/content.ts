import img1png from '@/assets/img/pages/index/photo-1.png';
import img2png from '@/assets/img/pages/index/photo-2.png';
import img3png from '@/assets/img/pages/index/photo-3.png';
import img4png from '@/assets/img/pages/index/photo-4.png';
import img5png from '@/assets/img/pages/index/photo-5.png';
import img6png from '@/assets/img/pages/index/photo-6.png';
import img7png from '@/assets/img/pages/index/photo-7.png';
import img8png from '@/assets/img/pages/index/photo-8.png';
import img9png from '@/assets/img/pages/index/photo-9.png';
import img10png from '@/assets/img/pages/index/photo-10.png';
import img1webp from '@/assets/img/pages/index/photo-1.webp';
import img2webp from '@/assets/img/pages/index/photo-2.webp';
import img3webp from '@/assets/img/pages/index/photo-3.webp';
import img4webp from '@/assets/img/pages/index/photo-4.webp';
import img5webp from '@/assets/img/pages/index/photo-5.webp';
import img6webp from '@/assets/img/pages/index/photo-6.webp';
import img7webp from '@/assets/img/pages/index/photo-7.webp';
import img8webp from '@/assets/img/pages/index/photo-8.webp';
import img9webp from '@/assets/img/pages/index/photo-9.webp';
import img10webp from '@/assets/img/pages/index/photo-10.webp';

import article1png from '@/assets/img/pages/index/article-1.png';
import article1webp from '@/assets/img/pages/index/article-1.webp';

import theGuardian from '@/assets/img/pages/index/the-guardian.svg?url';
import bbc from '@/assets/img/pages/index/bbc.svg?url';

import { IMedia } from '@/components/pages/index/Media/Media.types';
import { INews } from '@/components/pages/index/News/News.types';

export const images: IMedia.Photo[] = [
  {
    png: img1png,
    webp: img1webp,
    width: '1202',
    height: '790',
  },
  {
    png: img2png,
    webp: img2webp,
    width: '374',
    height: '240',
  },
  {
    png: img3png,
    webp: img3webp,
    width: '788',
    height: '520',
  },
  {
    png: img4png,
    webp: img4webp,
    width: '374',
    height: '240',
  },
  {
    png: img5png,
    webp: img5webp,
    width: '788',
    height: '520',
  },
  {
    png: img6png,
    webp: img6webp,
    width: '374',
    height: '240',
  },
  {
    png: img7png,
    webp: img7webp,
    width: '374',
    height: '240',
  },
  {
    png: img8png,
    webp: img8webp,
    width: '374',
    height: '240',
  },
  {
    png: img9png,
    webp: img9webp,
    width: '374',
    height: '240',
  },
  {
    png: img10png,
    webp: img10webp,
    width: '374',
    height: '240',
  },
];

export const videos: IMedia.Video[] = [
  {
    title: 'In pictures: Destruction and fear as war hits Ukraine',
    thumb: {
      png: img5png,
      webp: img5webp,
    },
    url: 'https://youtu.be/TtQH5sH6ckw',
  },
  {
    title: 'In pictures: Destruction and fear as war hits Ukraine',
    thumb: {
      png: img5png,
      webp: img5webp,
    },
    url: 'https://youtu.be/ZoZ7Wh9D2ZY',
  },
  {
    title: 'In pictures: Destruction and fear as war hits Ukraine',
    thumb: {
      png: img5png,
      webp: img5webp,
    },
    url: 'https://youtu.be/Kp4CV18JCFo',
  },
  {
    title: 'In pictures: Destruction and fear as war hits Ukraine',
    thumb: {
      png: img5png,
      webp: img5webp,
    },
    url: 'https://youtu.be/9CPDVVpMT0k',
  },
  {
    title: 'In pictures: Destruction and fear as war hits Ukraine',
    thumb: {
      png: img5png,
      webp: img5webp,
    },
    url: 'https://youtu.be/jfK_wkWgUl4',
  },
  {
    title: 'In pictures: Destruction and fear as war hits Ukraine',
    thumb: {
      png: img5png,
      webp: img5webp,
    },
    url: 'https://youtu.be/dZJ7zIB-qhU',
  },
];

export const news: INews.Article[] = [
  {
    title:
      'Ukraine fighting to stop ‘a new iron curtain’ after Russian invasion',
    description:
      'Ukraine’s president, Volodymyr Zelenskiy, has said his compatriots are fighting to stop “a new iron curtain” falling across the country after Russian forces launched a huge and long-dreaded invasion that has sparked fears of the biggest war Europe has seen since 1945.',
    resourceIcon: theGuardian,
    url: '#',
    img: {
      png: article1png,
      webp: article1webp,
    },
  },
  {
    title: 'Ukraine conflict: Your guide to understanding day three',
    description:
      'We saw men, in jeans and trainers, taking up position: the luxury of camouflage protection not possible in this moment of crisis. Makeshift roadblocks had been assembled.',
    resourceIcon: bbc,
    url: '#',
    img: {
      png: article1png,
      webp: article1webp,
    },
  },
  {
    title:
      'The return of large-scale war to Europe Russia’s invasion of Ukraine',
    description:
      'February 24th, as dawn broke over Ukraine, that Vladimir Putin, Russia’s president, took to television to declare war on Ukraine in the form of a “special military operation” to “denazify” the country.',
    url: '#',
    img: {
      png: article1png,
      webp: article1webp,
    },
  },
  {
    title: 'In pictures: Destruction and fear as war hits Ukraine',
    description:
      'Russian forces have launched a military assault on neighbouring Ukraine, crossing its borders and bombing military targets near big cities.',
    url: '#',
    img: {
      png: article1png,
      webp: article1webp,
    },
  },

  {
    title: 'Ukraine War: Vladimir Putin has gambled everything and lost',
    description:
      'Overnight, Russia became a pariah state. The West has already imposed an expanding range of sanctions with more expected. International opinion has almost unanimously condemned Putin’s war of aggression, and thousands of his own citizens have expressed their opposition to the war in demonstrations and petitions.',
    url: '#',
    resourceIcon: bbc,
    img: {
      png: article1png,
      webp: article1webp,
    },
  },
  {
    title:
      'Russia out, down with Putin!’: Worldwide protests held in solidarity with Ukraine',
    description:
      'Moscow’s invasion has sparked global outcry and prompted punishing sanctions from the West, some directed against Russian President Vladimir Putin himself.',
    url: '#',
    img: {
      png: article1png,
      webp: article1webp,
    },
  },
  {
    title: 'Ukraine conflict: Russian forces attack from three sides',
    description:
      "Russian forces have launched a major assault on Ukraine, firing missiles on cities and military targets. The invasion by land, air and sea began after a pre-dawn TV address where Russian President Vladimir Putin demanded that Ukraine's military lay down its arms.",
    url: '#',
    img: {
      png: article1png,
      webp: article1webp,
    },
  },
  {
    title: 'Ukraine conflict: Russian forces attack from three sides',
    description:
      "Russian forces have launched a major assault on Ukraine, firing missiles on cities and military targets. The invasion by land, air and sea began after a pre-dawn TV address where Russian President Vladimir Putin demanded that Ukraine's military lay down its arms.",
    url: '#',
    img: {
      png: article1png,
      webp: article1webp,
    },
  },
  {
    title: 'Ukraine conflict: Russian forces attack from three sides',
    description:
      "Russian forces have launched a major assault on Ukraine, firing missiles on cities and military targets. The invasion by land, air and sea began after a pre-dawn TV address where Russian President Vladimir Putin demanded that Ukraine's military lay down its arms.",
    url: '#',
    img: {
      png: article1png,
      webp: article1webp,
    },
  },
];
