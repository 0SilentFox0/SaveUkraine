export interface ISeo {
  title: string;
  description: string;
}

export interface IWelcomeSection {
  banner_text: string;
  bunner_button: string;
}

export interface IStat {
  title: string;
  text: string;
  link: string;
  linkText: string;
}

export namespace WhatToDo {
  export interface ILink {
    text: string;
    link: string;
  }

  export interface IHelp {
    title: string;
    content: ILink[] | string[];
  }
}

export namespace News {
  export interface INewsSection {
    title: string;
  }

  export interface IArticle {
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

export namespace Media {
  export interface IPhoto {
    webp: string;
    png: string;
    width: string;
    height: string;
  }

  export interface IVideo {
    thumb: {
      png: string;
      webp: string;
    };
    title: string;
    url: string;
  }
}

export interface IPageInfo {
  id: number;
  welcome_section: IWelcomeSection;
  news: News.IArticle[];
  statistics: IStat[];
  points: {
    goals: WhatToDo.IHelp;
    how_to_help: WhatToDo.IHelp;
    trusted_source: WhatToDo.IHelp;
  };
  media: {
    media_section: {
      title_photos: string;
      title_videos: string;
    };
    photos: Media.IPhoto[];
    videos: Media.IVideo[];
  };
  seo: ISeo;
}
