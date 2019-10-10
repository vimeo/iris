import { create } from '@storybook/theming';
import { rgba } from 'polished';

import { themes as irisThemes } from '../src/themes';
import {
  VimeoBlue,
  VimeoBlueLightened,
  Black,
  White,
  PistachioLightened,
  RavenImperial,
  Paste,
  SovereignShadow,
  Plaster,
} from '../src/color';
// import {
//   blue,
//   white,
//   black,
//   slate,
//   grayscale,
//   green,
// } from '../src/color/colors';

const base = {
  colorPrimary: PistachioLightened, // green(350),
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
    colorSecondary: VimeoBlue, // blue(500),
    appBg: Paste, // slate(50),
    appContentBg: White, // white,
    appBorderColor: rgba(Black, 0.1), // rgba(black, 0.1),
    textColor: RavenImperial, // grayscale(900),
    textInverseColor: Paste, // slate(50),
    barBg: White, // white,
    barTextColor: SovereignShadow, // grayscale(500),
    barSelectedColor: VimeoBlue, // blue(500),
    inputBg: White, // white,
    inputBorder: rgba(Black, 0.1), // rgba(black, 0.1),
    inputTextColor: SovereignShadow, // grayscale(500),
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
    colorSecondary: VimeoBlueLightened, // blue(350),
    appBg: Black, // black,
    appContentBg: RavenImperial, // grayscale(950),
    appBorderColor: rgba(White, 0.1), // rgba(white, 0.1),
    textColor: White, // white,
    textInverseColor: RavenImperial, // grayscale(950),
    barBg: RavenImperial, // grayscale(950),
    barTextColor: Paste, // slate(50),
    barSelectedColor: VimeoBlueLightened, // blue(350),
    inputBg: Black, // black,
    inputBorder: rgba(White, 0.1), // rgba(white, 0.1),
    inputTextColor: Plaster, // grayscale(100),
    ...irisThemes.dark,
    // @ts-ignore
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"><path style="stroke-width: 3; stroke-color: red;" fill="none" strokeLinejoin="round" d="M37,4a22,22 0 1,0 0,42a22,22 0 0,1 0-42z" /></svg>`,
    ...base,
  });
  return theme;
}
