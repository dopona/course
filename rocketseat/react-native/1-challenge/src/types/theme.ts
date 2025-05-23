export type Colors = {
  purple: {
    600: string;
    400: string;
  };

  blue: {
    800: string;
    400: string;
  };

  red: {
    500: string;
  };

  gray: {
    700: string;
    600: string;
    500: string;
    400: string;
    300: string;
    200: string;
    100: string;
  };
};

export type Fonts = {
  bold: string;
  regular: string;
};

export type Spacing = {
  [key: string]: number;
};

export type BorderRadius = {
  none: number;
  sm: number;
  default: number;
  md: number;
  lg: number;
  xl: number;
  "2xl": number;
  "3xl": number;
  full: number;
};

export type Theme = {
  colors: Colors;
  fonts: Fonts;
  spacing: Spacing;
  borderRadius: BorderRadius;
};
