import { create } from '@storybook/theming';
import { rgba } from 'polished';

import { themes as irisThemes } from '../src/themes';
import {
  green,
  blue,
  slate,
  grayscale,
  black,
  white,
} from '../src/color';

const base = {
  colorPrimary: green(350),
  appBorderRadius: 8,
  fontBase: '"Helvetica", Arial, sans-serif',
  fontCode: 'Monaco, monospace',
  inputBorderRadius: 6,
};

export const themes = {
  light: lightTheme(),
  dark: darkTheme(),
};

function lightTheme() {
  const theme = create({
    base: 'light',
    colorSecondary: blue(500),
    appBg: slate(50),
    appContentBg: white,
    appBorderColor: rgba(black, 0.1),
    textColor: grayscale(900),
    textInverseColor: slate(50),
    barBg: white,
    barTextColor: grayscale(500),
    barSelectedColor: blue(500),
    inputBg: white,
    inputBorder: rgba(black, 0.1),
    inputTextColor: grayscale(500),
    brandTitle: 'Vimeo Iris Storybook',
    // brandUrl: 'https://vimeo.com',
    brandImage:
      'https://github.vimeows.com/storage/user/544/files/4baeee80-eb74-11e9-92db-39d4b2a25ed2',
    ...irisThemes.light,
    // @ts-ignore
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"><path d="m7,25a18,18 0 1,1 0,.1zm3,0a15,15 0 1,0 0-.1zm11,0a4,4 0 1,0 0-.1z" /></svg>`,
    ...base,
  });
  return theme;
}

function darkTheme() {
  const theme = create({
    base: 'dark',
    colorSecondary: blue(350),
    appBg: black,
    appContentBg: grayscale(950),
    appBorderColor: rgba(white, 0.1),
    textColor: white,
    textInverseColor: grayscale(950),
    barBg: grayscale(950),
    barTextColor: slate(50),
    barSelectedColor: blue(350),
    inputBg: black,
    inputBorder: rgba(white, 0.1),
    inputTextColor: grayscale(100),
    brandTitle: 'Vimeo Iris Storybook',
    // brandUrl: 'https://vimeo.com',
    brandImage:
      'https://github.vimeows.com/storage/user/544/files/4baeee80-eb74-11e9-92db-39d4b2a25ed2',
    ...irisThemes.dark,
    // @ts-ignore
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"><path style="stroke-width: 3; stroke-color: red;" fill="none" strokeLinejoin="round" d="M37,4a22,22 0 1,0 0,42a22,22 0 0,1 0-42z" /></svg>`,
    ...base,
  });
  return theme;
}
