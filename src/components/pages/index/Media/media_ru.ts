import photo1png from '@/assets/img/pages/index/photo/photo-1-ru.png';
import photo2png from '@/assets/img/pages/index/photo/photo-2-ru.png';
import photo3png from '@/assets/img/pages/index/photo/photo-3-ru.png';
import photo4png from '@/assets/img/pages/index/photo/photo-4.png';
import photo5png from '@/assets/img/pages/index/photo/photo-5.png';
import photo6png from '@/assets/img/pages/index/photo/photo-6.png';
import photo7png from '@/assets/img/pages/index/photo/photo-7-ru.png';
import photo8png from '@/assets/img/pages/index/photo/photo-8.png';
import photo9png from '@/assets/img/pages/index/photo/photo-9.png';
import photo10png from '@/assets/img/pages/index/photo/photo-10.png';
import photo1webp from '@/assets/img/pages/index/photo/photo-1-ru.webp';
import photo2webp from '@/assets/img/pages/index/photo/photo-2-ru.webp';
import photo3webp from '@/assets/img/pages/index/photo/photo-3-ru.webp';
import photo4webp from '@/assets/img/pages/index/photo/photo-4.webp';
import photo5webp from '@/assets/img/pages/index/photo/photo-5.webp';
import photo6webp from '@/assets/img/pages/index/photo/photo-6.webp';
import photo7webp from '@/assets/img/pages/index/photo/photo-7-ru.webp';
import photo8webp from '@/assets/img/pages/index/photo/photo-8.webp';
import photo9webp from '@/assets/img/pages/index/photo/photo-9.webp';
import photo10webp from '@/assets/img/pages/index/photo/photo-10.webp';

import videoPreview1Png from '@/assets/img/pages/index/video/ru/video-preview-1.png';
import videoPreview1Webp from '@/assets/img/pages/index/video/ru/video-preview-1.webp';
import videoPreview2Png from '@/assets/img/pages/index/video/ru/video-preview-2.png';
import videoPreview2Webp from '@/assets/img/pages/index/video/ru/video-preview-2.webp';
import videoPreview3Png from '@/assets/img/pages/index/video/ru/video-preview-3.png';
import videoPreview3Webp from '@/assets/img/pages/index/video/ru/video-preview-3.webp';
import videoPreview4Png from '@/assets/img/pages/index/video/ru/video-preview-4.png';
import videoPreview4Webp from '@/assets/img/pages/index/video/ru/video-preview-4.webp';
import videoPreview5Png from '@/assets/img/pages/index/video/ru/video-preview-5.png';
import videoPreview5Webp from '@/assets/img/pages/index/video/ru/video-preview-5.webp';
import videoPreview6Png from '@/assets/img/pages/index/video/ru/video-preview-6.png';
import videoPreview6Webp from '@/assets/img/pages/index/video/ru/video-preview-6.webp';

import { IMedia } from '@/components/pages/index/Media/Media.types';

export const images: IMedia.Photo[] = [
  {
    png: photo1png,
    webp: photo1webp,
    width: '1202',
    height: '790',
  },
  {
    png: photo2png,
    webp: photo2webp,
    width: '374',
    height: '240',
  },
  {
    png: photo3png,
    webp: photo3webp,
    width: '788',
    height: '520',
  },
  {
    png: photo4png,
    webp: photo4webp,
    width: '374',
    height: '240',
  },
  {
    png: photo5png,
    webp: photo5webp,
    width: '788',
    height: '520',
  },
  {
    png: photo6png,
    webp: photo6webp,
    width: '374',
    height: '240',
  },
  {
    png: photo7png,
    webp: photo7webp,
    width: '374',
    height: '240',
  },
  {
    png: photo8png,
    webp: photo8webp,
    width: '374',
    height: '240',
  },
  {
    png: photo9png,
    webp: photo9webp,
    width: '374',
    height: '240',
  },
  {
    png: photo10png,
    webp: photo10webp,
    width: '374',
    height: '240',
  },
];

export const videos: IMedia.Video[] = [
  {
    title: '16 детей погибли, 45 ранены - покажите это путину',
    thumb: {
      png: videoPreview1Png,
      webp: videoPreview1Webp,
    },
    url: 'https://www.youtube.com/watch?v=3PNi_x8uMEc',
  },
  {
    title: 'Россия обстреливает Украину: начало войны Путина',
    thumb: {
      png: videoPreview2Png,
      webp: videoPreview2Webp,
    },
    url: 'https://www.youtube.com/watch?v=NfJBdNirseA',
  },
  {
    title: 'Россия напала на Украину. Украина ведёт борьбу',
    thumb: {
      png: videoPreview3Png,
      webp: videoPreview3Webp,
    },
    url: 'https://www.youtube.com/watch?v=5R9E7lklakk',
  },
  {
    title: 'Россия начала военную операцию в Украине',
    thumb: {
      png: videoPreview4Png,
      webp: videoPreview4Webp,
    },
    url: 'https://www.youtube.com/watch?v=AYEQHTn_nn8',
  },
  {
    title: 'Атака России по территории Украины. Видео очевидцев',
    thumb: {
      png: videoPreview5Png,
      webp: videoPreview5Webp,
    },
    url: 'https://www.youtube.com/watch?v=KA2ffHRPsbg',
  },
  {
    title: 'Вторжение России в Украину: жители покидают дома в поисках убежища',
    thumb: {
      png: videoPreview6Png,
      webp: videoPreview6Webp,
    },
    url: 'https://www.youtube.com/watch?v=8OrSe1eiBDM',
  },
];
