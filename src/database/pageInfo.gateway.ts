import { directus } from '@/plugins/axios';

import { IPageInfo } from './pageInfo.interface';

export async function getPageInfo(): Promise<IPageInfo[]> {
  let url = `items/pages/`;

  const pageInfo = await directus.get(url);

  return pageInfo.data.data;
}

export const pageInfoGateway = {
  getPageInfo,
};
