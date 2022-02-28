export namespace INews {
  export interface Article {
    title: string;
    description: string;
    resourceIcon?: string;
    img: {
      png: string;
      webp: string;
    };
    url: string;
  }
}
