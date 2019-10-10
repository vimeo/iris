import { rgba } from 'polished';
import { grayscale, white, black, slate, blue, red, green } from '../color';

export const themes = {
  light: {
    name: 'light',
    background: white,
    item: {
      bg: white,
      bg2: slate(50),
      locked: grayscale(50),
    },
    color: black,
    disabled: grayscale(50),
    // focus: rgba(blue(500), 0.5),
    focus: blue(500),
    // a11y: a11yDefaults,
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
    background: black,
    item: {
      background: grayscale(850),
      locked: grayscale(800),
    },
    color: white,
    disabled: grayscale(850),
    focus: blue(400),
    // a11y: a11yDefaults,
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
