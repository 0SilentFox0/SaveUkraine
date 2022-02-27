export namespace VButtonInterface {
  export namespace Props {
    export type Size = 'reqular' | 'small';
    export type Type = 'primary' | 'basic' | 'outline';
  }

  export type Class = [
    Props.Size,
    Props.Type,
    {
      // 'is-icon': boolean;
      // rounded: boolean;
      fluid: boolean;
    },
  ];

  export interface Style {
    justifyContent:
      | 'center'
      | 'space-between'
      | 'space-around'
      | 'flex-start'
      | 'flex-end';
    maxWidth: string;
  }
}
