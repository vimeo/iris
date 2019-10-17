import { rgba } from 'polished';
import { grayscale, white, black, slate, blue, red, green } from '../color';

export interface IrisTheme {
  name: string;
  content: { [key: string]: string };
  item: { [key: string]: string };
  formats: { [key: string]: string };
  inputs: { [key: string]: string };
  shadows: { [key: string]: string };
}

export type Formats = 'basic' | 'soft' | 'alternative' | 'secondary' | 'primary';
export type Statuses = 'positive' | 'negative';

export const themes: {
  [key: string]: IrisTheme;
} = {
  light: {
    name: 'light',
    // a11y: a11yDefaults,
    content: {
      background: white,
      color: black,
      disabled: grayscale(50),
      focus: blue(500),
      // focus: rgba(blue(500), 0.5),
    },
    item: {
      bg: white,
      bg2: slate(50),
      locked: grayscale(50),
    },
    formats: {
      primary: blue(500),
      secondary: grayscale(50),
      alternative: '#3a5161',
      soft: slate(800),
      basic: black,
      positive: green(500),
      negative: red(500),
    },
    inputs: {
      primary: blue(500),
      small: red(400),
    },
    shadows: {
      small: `box-shadow: 0 0 0.334rem -0.05rem ${rgba(black, 0.15)};`,
    },
  },
  dark: {
    name: 'dark',
    // a11y: a11yDefaults,
    content: {
      background: black,
      color: white,
      disabled: grayscale(850),
      focus: blue(400),
    },
    item: {
      bg: grayscale(850),
      bg2: slate(800),
      locked: grayscale(800),
    },
    formats: {
      primary: blue(500),
      secondary: grayscale(700),
      alternative: slate(800),
      soft: slate(100),
      basic: white,
      positive: green(500),
      negative: red(500),
    },
    inputs: {
      primary: blue(400),
      small: red(400),
    },
    shadows: {
      small: `box-shadow: 0 0 0.334rem -0.05rem ${rgba(black, 0.15)};`,
    },
  },
};
