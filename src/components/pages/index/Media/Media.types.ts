export namespace IMedia {
  export interface Photo {
    webp: string;
    png: string;
    width: string;
    height: string;
  }

  export interface Video {
    thumb: {
      png: string;
      webp: string;
    };
    title: string;
    url: string;
  }
}
