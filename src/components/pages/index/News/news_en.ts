import article1png from '@/assets/img/pages/index/article/photo/en/article-1.png';
import article1webp from '@/assets/img/pages/index/article/photo/en/article-1.webp';
import article2png from '@/assets/img/pages/index/article/photo/en/article-2.png';
import article2webp from '@/assets/img/pages/index/article/photo/en/article-2.webp';
import article3png from '@/assets/img/pages/index/article/photo/en/article-3.png';
import article3webp from '@/assets/img/pages/index/article/photo/en/article-3.webp';
import article4png from '@/assets/img/pages/index/article/photo/en/article-4.png';
import article4webp from '@/assets/img/pages/index/article/photo/en/article-4.webp';
import article5png from '@/assets/img/pages/index/article/photo/en/article-5.png';
import article5webp from '@/assets/img/pages/index/article/photo/en/article-5.webp';
import article6png from '@/assets/img/pages/index/article/photo/en/article-6.png';
import article6webp from '@/assets/img/pages/index/article/photo/en/article-6.webp';
import article7png from '@/assets/img/pages/index/article/photo/en/article-7.png';
import article7webp from '@/assets/img/pages/index/article/photo/en/article-7.webp';
import article8png from '@/assets/img/pages/index/article/photo/en/article-8.png';
import article8webp from '@/assets/img/pages/index/article/photo/en/article-8.webp';
import article9png from '@/assets/img/pages/index/article/photo/en/article-9.png';
import article9webp from '@/assets/img/pages/index/article/photo/en/article-9.webp';

// logo
import theGuardian from '@/assets/img/pages/index/article/icon/the-guardian.svg?url';
import bbc from '@/assets/img/pages/index/article/icon/bbc.svg?url';
import theEconomist from '@/assets/img/pages/index/article/icon/the-economist.svg?url';
import theWashington from '@/assets/img/pages/index/article/icon/the-washington-post.svg?url';
import atlantic from '@/assets/img/pages/index/article/icon/atlantic.svg?url';
import timesIsrael from '@/assets/img/pages/index/article/icon/the-times-of-israel.svg?url';
import cnn from '@/assets/img/pages/index/article/icon/cnn.svg?url';
import vox from '@/assets/img/pages/index/article/icon/vox.svg?url';
import { INews } from '@/components/pages/index/News/News.types';

export const news: INews.Article[] = [
  {
    title:
      'Ukraine fighting to stop ‘a new iron curtain’ after Russian invasion',
    description:
      'Ukraine’s president, Volodymyr Zelenskiy, has said his compatriots are fighting to stop “a new iron curtain” falling across the country after Russian forces launched a huge and long-dreaded invasion that has sparked fears of the biggest war Europe has seen since 1945.',
    resourceIcon: theGuardian,
    url: 'https://www.theguardian.com/world/2022/feb/24/russia-attacks-ukraine-news-vladimir-putin-zelenskiy-russian-invasion',
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
    url: 'https://www.bbc.com/news/world-europe-60541882',
    img: {
      png: article2png,
      webp: article2webp,
    },
  },
  {
    title:
      'The return of large-scale war to Europe Russia’s invasion of Ukraine',
    resourceIcon: theEconomist,
    description:
      'February 24th, as dawn broke over Ukraine, that Vladimir Putin, Russia’s president, took to television to declare war on Ukraine in the form of a “special military operation” to “denazify” the country.',
    url: 'https://www.economist.com/briefing/2022/02/26/russias-invasion-of-ukraine',
    img: {
      png: article3png,
      webp: article3webp,
    },
  },
  {
    title: 'In pictures: Destruction and fear as war hits Ukraine',
    resourceIcon: bbc,
    description:
      'Russian forces have launched a military assault on neighbouring Ukraine, crossing its borders and bombing military targets near big cities.',
    url: 'https://www.bbc.com/news/in-pictures-60505277',
    img: {
      png: article4png,
      webp: article4webp,
    },
  },

  {
    title: 'Ukraine War: Vladimir Putin has gambled everything and lost',
    resourceIcon: atlantic,
    description:
      'Overnight, Russia became a pariah state. The West has already imposed an expanding range of sanctions with more expected. International opinion has almost unanimously condemned Putin’s war of aggression, and thousands of his own citizens have expressed their opposition to the war in demonstrations and petitions.',
    url: 'https://www.atlanticcouncil.org/blogs/ukrainealert/ukraine-war-vladimir-putin-has-gambled-everything-and-lost/',
    img: {
      png: article5png,
      webp: article5webp,
    },
  },
  {
    title:
      'Russia out, down with Putin!’: Worldwide protests held in solidarity with Ukraine',
    resourceIcon: timesIsrael,
    description:
      'Moscow’s invasion has sparked global outcry and prompted punishing sanctions from the West, some directed against Russian President Vladimir Putin himself.',
    url: 'https://www.timesofisrael.com/russia-out-down-with-putin-worldwide-protests-in-solidarity-with-ukraine/',
    img: {
      png: article6png,
      webp: article6webp,
    },
  },
  {
    title:
      'Russia ramps up war efforts as delegates prepare for talks at Belarus border',
    resourceIcon: cnn,
    description:
      'A miles-long convoy of Russian military vehicles is bearing down on the Ukrainian capital, new satellite imagery shows, as Moscow continues to ramp up its assault on Kyiv despite preparing for negotiations with Ukrainian representatives.',
    url: 'https://edition.cnn.com/2022/02/28/europe/ukraine-russia-invasion-monday-intl-hnk/index.html',
    img: {
      png: article7png,
      webp: article7webp,
    },
  },
  {
    title:
      'Civilians are dying in Ukraine. But exactly how many remains a mystery.',
    resourceIcon: theWashington,
    description:
      'It’s an incredibly worrying situation. We don’t have any idea of the full scale of the consequences right now,” said Mirella Hodeib, spokesperson for the International Committee of the Red Cross in Kyiv. “Only that they’re rising exponentially.',
    url: 'https://www.washingtonpost.com/world/2022/02/26/ukraine-deaths-casualties/',
    img: {
      png: article8png,
      webp: article8webp,
    },
  },
  {
    title:
      'How to think about the risk of nuclear war, now that Russia has invaded Ukraine.',
    resourceIcon: vox,
    description:
      'Today’s Russia remains one of the most powerful nuclear states,” Putin said. As justification for the invasion, Putin also made unfounded claims that Ukraine was on a path to build its own nuclear arsenal.',
    url: 'https://www.vox.com/22951004/nuclear-weapons-russia-ukraine-war-putin',
    img: {
      png: article9png,
      webp: article9webp,
    },
  },
];
