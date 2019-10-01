import { Black, White, VimeoBlue, SunsetOrange, Pistachio, AstroGranite, Plaster, Paste } from '../color';
import { rgba } from 'polished';

// MOCK THEME UNTIL 8.0
export const theme = {
  name: 'light',
  background: White, // white,
  item: {
    bg: White, // white,
    bg2: Paste,
    locked: Plaster, // slate(50),
  },
  color: Black, // black
  disabled: Plaster, // slate(100),
  focus: rgba(VimeoBlue, 0.5), // rgba(blue(500), 0.5),
  // a11y: a11yDefaults,
  formats: {
    primary: VimeoBlue, // blue(500),
    secondary: Plaster, // slate(100),
    alternative: '#3a5161',
    soft: AstroGranite, // slate(800),
    basic: Black, // black,
    positive: Pistachio, // green(500),
    negative: SunsetOrange, // red(500),
  },
  inputs: {
    primary: VimeoBlue, // blue(550),
    small: SunsetOrange, // red(400),
  },
  shadows: {
    small: `box-shadow: 0 0 0.334rem -0.05rem ${rgba(Black, 0.15)};`,
    // small: `box-shadow: 0 0 0.334rem -0.05rem ${rgba(black, 0.15)};`,
  },
};
