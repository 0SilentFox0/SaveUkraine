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
  link_text: string;
}

export namespace WhatToDo {
  export interface IGoal {
    goal: string;
  }
  export interface ILink {
    text: string;
    link: string;
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
  // export interface IPhoto {
  //   webp: string;
  //   png: string;
  //   width: string;
  //   height: string;
  // }

  export interface IVideo {
    id: number;
    image: string;
    title: string;
    url: string;
  }
}

export interface IPageInfo {
  id: number;
  language: string;
  banner_text: string;
  banner_button_text: string;
  statistics: IStat[];
  goal_title: string;
  goals: WhatToDo.IGoal[];
  how_to_help_title: string;
  how_to_help: WhatToDo.ILink[];
  trusted_sources_title: string;
  trusted_sources: WhatToDo.ILink[];
  news_title: string;
  photos_title: string;
  videos_title: string;
  photos: number[];
  videos: Media.IVideo[];
  seo: ISeo[];
}
