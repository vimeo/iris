import { grayscale, slate } from '../../color';

import { readToken } from '../../tokens/util';

const background = readToken({
  default: 'light',
  type: 'COLOR',
  modes: { dark: grayscale(860), light: slate(50) },
});

const backgroundHover = readToken({
  default: 'light',
  type: 'COLOR',
  modes: { dark: grayscale(800), light: slate(0) },
});

const icon = readToken({
  default: 'light',
  type: 'COLOR',
  modes: { dark: grayscale(600), light: slate(400) },
});

const iconHover = readToken({
  default: 'light',
  type: 'COLOR',
  modes: { dark: grayscale(570), light: slate(370) },
});

export const tokens = {
  background,
  backgroundHover,
  icon,
  iconHover,
};
