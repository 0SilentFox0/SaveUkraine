import { directus } from '@/plugins/axios';

import { INews } from './news.interface';

export async function getNews(params: {
  lang: string;
}): Promise<INews.Article[]> {
  let url = `items/pages/${params.lang}`;

  const news = await directus.get(url);

  return news.data;
}

export const NewsGateway = {
  getNews,
};
