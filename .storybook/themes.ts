import { create } from '@storybook/theming';
import { rgba } from 'polished';
import { Logo } from './ui/Logo';
import {
  PistachioLightened,
  VimeoBlue,
  White,
  IronHeart,
  Black,
  RavenImperial,
  Paste,
  VimeoBlueLightened,
} from '../src/Color/Color';

const base = {
  colorPrimary: PistachioLightened,
  appBorderRadius: 8,
  fontBase: '"Helvetica", Arial, sans-serif',
  fontCode: 'Monaco, monospace',
  inputBorderRadius: 6,

  // @ts-ignore
  brand: Logo,
};

export const light = create({
  base: 'light',
  colorSecondary: VimeoBlue,
  appBg: Paste,
  appContentBg: White,
  appBorderColor: rgba(Black, 0.1),
  textColor: RavenImperial,
  textInverseColor: Paste,
  barBg: White,
  barTextColor: IronHeart,
  barSelectedColor: VimeoBlue,
  inputBg: White,
  inputBorder: rgba(Black, 0.1),
  inputTextColor: IronHeart,
  ...base,
});

export const dark = create({
  base: 'dark',
  colorSecondary: VimeoBlueLightened,
  appBg: Black,
  appContentBg: RavenImperial,
  appBorderColor: rgba(White, 0.1),
  textColor: White,
  textInverseColor: RavenImperial,
  barBg: RavenImperial,
  barTextColor: Paste,
  barSelectedColor: VimeoBlueLightened,
  inputBg: Black,
  inputBorder: rgba(White, 0.1),
  inputTextColor: Paste,
  ...base,
});
