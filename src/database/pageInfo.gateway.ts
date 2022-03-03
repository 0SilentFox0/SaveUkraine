import { directus } from '@/plugins/axios';

import { ILang, IPageInfo } from './pageInfo.interface';

export async function getLanguages() {
  const pages = (
    await directus.get(`items/pages`, {
      params: {
        fields: '*.*',
        filter: {
          status: { _eq: 'published' },
        },
      },
    })
  ).data.data;

  const languages: ILang[] = pages.map((page: IPageInfo) => {
    if (page.language === 'eng')
      return { slug: 'eng', path: '/', name: page.language_full };

    return {
      slug: page.language,
      path: '/' + page.language,
      name: page.language_full,
    };
  });

  return languages;
}

export async function getPageInfo(params: {
  lang: string;
}): Promise<IPageInfo> {
  const requests = await Promise.all([
    directus.get(`items/pages`, {
      params: {
        fields: '*.*',
        filter: {
          language: { _eq: params.lang },
          status: { _eq: 'published' },
        },
      },
    }),
    directus.get(`items/videos`, {
      params: {
        fields: '*.*',
        filter: { language: { language: { _eq: params.lang } } },
      },
    }),
    directus.get(`items/news`, {
      params: {
        fields: '*.*',
        filter: { language: { language: { _eq: params.lang } } },
      },
    }),
  ]);

  const [page] = requests[0].data.data;

  const videos = requests[1].data.data;

  const news = requests[2].data.data;

  return {
    ...page,
    videos,
    news,
  };
}

export const pageInfoGateway = {
  getPageInfo,

  getLanguages,
};
