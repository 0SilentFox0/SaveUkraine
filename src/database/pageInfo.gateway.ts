import { directus } from '@/plugins/axios';

import { IPageInfo } from './pageInfo.interface';

export async function getPageInfo(params: {
  lang: string;
}): Promise<IPageInfo> {
  const page = await directus.get(
    `items/pages?filter[language][_eq]=${params.lang}&fields=*.*`,
  );
  const videos = await directus.get(`items/videos_${params.lang}`);

  return { ...page.data.data[0], ...{ videos: videos.data.data } };
}

export const pageInfoGateway = {
  getPageInfo,
};
