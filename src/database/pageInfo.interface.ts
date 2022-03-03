export interface ISeo {
  title: string;
  description: string;
}

export interface ILang {
  slug: string;
  path: string;
  name: string;
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
  export interface IArticle {
    id: string;
    title: string;
    preview_text: string;
    logo: {
      id: string;
    };
    image: {
      id: string;
    };
    link: string;
  }
}

export namespace Media {
  export interface IPhoto {
    id: number;
    pages_id: number;
    directus_files_id: string;
  }

  export interface IVideo {
    id: number;
    image: {
      id: string;
    };
    title: string;
    link: string;
  }
}

export interface IPageInfo {
  id: number;
  language: string;
  language_full: string;
  header_button_text: string;
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
  news: News.IArticle[];
  photos_title: string;
  videos_title: string;
  photos: Media.IPhoto[];
  videos: Media.IVideo[];
  footer_contact_text: string;
  footer_contribute_text: string;
  seo: ISeo[];
}
