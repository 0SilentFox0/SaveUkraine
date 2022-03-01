import { directus } from '@/plugins/axios';

import { IPageInfo } from './pageInfo.interface';

export async function getPageInfo(params: {
  lang: string;
}): Promise<IPageInfo> {
  let url = `items/pages/${params.lang}`;

  const pageInfo = await directus.get(url);

  return pageInfo.data;
}

export const pageInfoGateway = {
  getPageInfo,
};
