export interface PageHeadInterface {
  title: string;
  route: string;
  url?: string;
  description: string;
  image?: string;
}

export function pageHead({
  title,
  route,
  url,
  description,
  image,
}: PageHeadInterface) {
  return {
    title,
    link: [
      { rel: 'canonical', href: `https://folderly.com${route}` },
      { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
    ],
    meta: [
      {
        name: 'description',
        content: description,
        hid: 'description',
      },
      {
        property: 'og:url',
        content: url || `https://folderly.com${route}`,
        hid: 'og:url',
      },
      {
        property: 'og:type',
        content: 'website',
        hid: 'og:type',
      },
      {
        property: 'og:title',
        content: title,
        hid: 'og:title',
      },
      {
        property: 'og:description',
        content: description,
        hid: 'og:description',
      },
      {
        property: 'og:image',
        content:
          image ||
          'https://folderly.nyc3.digitaloceanspaces.com/ed4902989cec4a7676c3bf3bcf86927c.jpg',
        hid: 'og:image',
      },
    ],
  };
}
