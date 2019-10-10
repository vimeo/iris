import { Black, White, VimeoBlue, SunsetOrange, Pistachio, AstroGranite, Plaster, Paste, VimeoBlueLightened, RavenImperial, ObsidianSlate, SovereignShadow, Porcelain } from '../color';
import { rgba } from 'polished';

// MOCK THEME UNTIL 8.0
export const themes = {
  light: {
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
  },
  dark: {
    name: 'dark',
    background: Black,
    item: {
      background: RavenImperial, // shade(0.2, grayscale(900)),
      locked: ObsidianSlate, // grayscale(700),
    },
    color: White,
    disabled: RavenImperial, // grayscale(900),
    focus: VimeoBlueLightened, // rgba(blue(350), 0.667),
    // a11y: a11yDefaults,
    formats: {
      primary: VimeoBlue, // blue(500),
      secondary: SovereignShadow, // grayscale(600),
      alternative: AstroGranite, // slate(500),
      soft: Porcelain, //slate(200),
      basic: White,
      positive: Pistachio, // green(500),
      negative: SunsetOrange, // red(500),
    },
    inputs: {
      primary: VimeoBlueLightened, // blue(400),
      small: SunsetOrange, // red(400),
    },
    shadows: {
      small: `box-shadow: 0 0 0.334rem -0.05rem ${rgba(Black, 0.15)};`,
    },
  },
};
