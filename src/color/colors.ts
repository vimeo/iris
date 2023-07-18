import { tint, shade, saturate, adjustHue } from 'polished';

export interface Color {
  (grade: number): string;
}

export enum Colors {
  Red = '#E22B12',
  Blue = '#00adef',
  Green = '#28A878',
  Yellow = '#ffb21e',
  Slate = '#657987',
  Grayscale = '#666666',
  black = '#000000',
  white = '#FFFFFF',
  Fuschia = '#ED72C2',
  Cerise = '#FF6678',
  Vermilion = '#E75A32',
  Peridot = '#9DB753',
  Cerulean = '#008285',
  Lapis = '#4B7AC2',
  Amethyst = '#8697FB',
  Taupe = '#BBA69C',
}

export const black = '#000000';
export const white = '#FFFFFF';

const RedCache = {
  '50': 'var(--red-50)',
  '100': 'var(--red-100)',
  '200': 'var(--red-200)',
  '300': 'var(--red-300)',
  '350': 'var(--red-350)',
  '400': 'var(--red-400)',
  '500': 'var(--red-500)',
  '525': 'var(--red-525)',
  '600': 'var(--red-600)',
  '700': 'var(--red-700)',
  '800': 'var(--red-800)',
  '850': 'var(--red-850)',
  '900': 'var(--red-900)',
  '950': 'var(--red-950)',
};

// export const red: Color = (grade) =>
//   RedCache[grade] || irisColor(Colors.Red, grade);
export const red: Color = (grade) => RedCache[grade];

const YellowCache = {
  '50': '#fff7e8',
  '100': '#ffefd2',
  '200': '#ffe0a5',
  '300': '#ffd078',
  '350': '#ffc961',
  '400': '#ffc14b',
  '500': '#ffb21e',
  '525': '#ffad0f',
  '600': '#da920a',
  '700': '#a56e06',
  '800': '#6f4a03',
  '850': '#533702',
  '900': '#372500',
  '950': '#1b1200',
};

export const yellow: Color = (grade) =>
  YellowCache[grade] || irisColor(Colors.Yellow, grade);

const GreenCache = {
  '50': '#e8f7f1',
  '100': '#d3eee3',
  '200': '#a7dec7',
  '300': '#7cccab',
  '350': '#66c49d',
  '400': '#52ba90',
  '500': '#28A878',
  '525': '#269f6e',
  '600': '#1e885c',
  '700': '#166646',
  '800': '#0e452f',
  '850': '#0a3424',
  '900': '#052316',
  '950': '#02110b',
};

export const green: Color = (grade) =>
  GreenCache[grade] || irisColor(Colors.Green, grade);

const BlueCache = {
  '50': 'var(--blue-50)',
  '100': 'var(--blue-100)',
  '200': 'var(--blue-200)',
  '300': 'var(--blue-300)',
  '350': 'var(--blue-350)',
  '400': 'var(--blue-400)',
  '500': 'var(--blue-500)',
  '525': 'var(--blue-525)',
  '600': 'var(--blue-600)',
  '700': 'var(--blue-700)',
  '800': 'var(--blue-800)',
  '850': 'var(--blue-850)',
  '900': 'var(--blue-900)',
  '950': 'var(--blue-950)',
};

// export const blue: Color = (grade) =>
//   BlueCache[grade] || irisColor(Colors.Blue, grade);
export const blue: Color = (grade) => BlueCache[grade];

const SlateCache = {
  '50': 'var(--slate-50)',
  '100': 'var(--slate-100)',
  '200': 'var(--slate-200)',
  '300': 'var(--slate-300)',
  '350': 'var(--slate-350)',
  '400': 'var(--slate-400)',
  '500': 'var(--slate-500)',
  '525': 'var(--slate-525)',
  '600': 'var(--slate-600)',
  '700': 'var(--slate-700)',
  '800': 'var(--slate-800)',
  '850': 'var(--slate-850)',
  '900': 'var(--slate-900)',
  '950': 'var(--slate-950)',
};

// export const slate: Color = (grade) =>
//   SlateCache[grade] || irisColor(Colors.Slate, grade);
export const slate: Color = (grade) => SlateCache[grade];

const GrayscaleCache = {
  '50': '#efefef',
  '100': '#e0e0e0',
  '200': '#c1c1c1',
  '300': '#a3a3a3',
  '350': '#939393',
  '400': '#848484',
  '500': '#666666',
  '525': '#606060',
  '600': '#515151',
  '700': '#3d3d3d',
  '800': '#282828',
  '850': '#1e1e1e',
  '900': '#141414',
  '950': '#0a0a0a',
};
export const grayscale: Color = (grade) =>
  GrayscaleCache[grade] || irisColor(Colors.Grayscale, grade, true);

const FuschiaCache = {
  '50': '#ffeef8',
  '100': '#ffdef3',
  '200': '#febfe8',
  '300': '#ff9fdd',
  '350': '#fe90d8',
  '400': '#fd81d2',
  '500': '#ED72C2',
  '525': '#f35abd',
  '600': '#d642a3',
  '700': '#a72b7b',
  '800': '#701b53',
  '850': '#55143e',
  '900': '#390c29',
  '950': '#1c0615',
};

export const fuschia: Color = (grade) =>
  FuschiaCache[grade] || irisColor(Colors.Fuschia, grade);

const CeriseCache = {
  '50': '#ffeff1',
  '100': '#ffe0e4',
  '200': '#ffc1c9',
  '300': '#ffa3ae',
  '350': '#ff93a0',
  '400': '#ff8493',
  '500': '#FF6678',
  '525': '#fb576b',
  '600': '#da4456',
  '700': '#a82e3d',
  '800': '#711d28',
  '850': '#55151d',
  '900': '#380e12',
  '950': '#1c0708',
};

export const cerise: Color = (grade) =>
  CeriseCache[grade] || irisColor(Colors.Cerise, grade);

const VermilionCache = {
  '50': '#ffefe7',
  '100': '#ffe0d1',
  '200': '#ffc2a3',
  '300': '#ffa575',
  '350': '#fe965f',
  '400': '#fc894a',
  '500': '#E75A32',
  '525': '#dc512e',
  '600': '#ba3826',
  '700': '#8d1d1b',
  '800': '#5f1117',
  '850': '#480c14',
  '900': '#30070e',
  '950': '#180308',
};

export const vermilion: Color = (grade) =>
  VermilionCache[grade] || irisColor(Colors.Vermilion, grade);

const PeridotCache = {
  '50': '#fbf8e9',
  '100': '#f7f4d5',
  '200': '#edecaf',
  '300': '#dde189',
  '350': '#d1da78',
  '400': '#c4d367',
  '500': '#9DB753',
  '525': '#91bb40',
  '600': '#6da232',
  '700': '#437d21',
  '800': '#1f5713',
  '850': '#14410d',
  '900': '#092c08',
  '950': '#041605',
};

export const peridot: Color = (grade) =>
  PeridotCache[grade] || irisColor(Colors.Peridot, grade);

const CeruleanCache = {
  '50': '#e1f6ec',
  '100': '#c6ecdc',
  '200': '#8ed9c2',
  '300': '#5ac1aa',
  '350': '#40b5a3',
  '400': '#2ba597',
  '500': '#008285',
  '525': '#006d7e',
  '600': '#00586a',
  '700': '#003e4f',
  '800': '#002735',
  '850': '#001c27',
  '900': '#00111a',
  '950': '#00080d',
};

export const cerulean: Color = (grade) =>
  CeruleanCache[grade] || irisColor(Colors.Cerulean, grade);

const LapisCache = {
  '50': '#e9f0fc',
  '100': '#d3e2fa',
  '200': '#acc7f1',
  '300': '#88afe5',
  '350': '#77a1de',
  '400': '#6895d5',
  '500': '#4B7AC2',
  '525': '#3672c9',
  '600': '#2460b3',
  '700': '#12478f',
  '800': '#052e66',
  '850': '#01234f',
  '900': '#001934',
  '950': '#000c1a',
};

export const lapis: Color = (grade) =>
  LapisCache[grade] || irisColor(Colors.Lapis, grade);

const AmethystCache = {
  '50': '#f5f1ff',
  '100': '#ebe5ff',
  '200': '#d3ccff',
  '300': '#b7b3ff',
  '350': '#a7a7ff',
  '400': '#9b9ffe',
  '500': '#8697FB',
  '525': '#7e8bef',
  '600': '#6468cf',
  '700': '#4540a6',
  '800': '#312574',
  '850': '#271a59',
  '900': '#190f3d',
  '950': '#0e071f',
};

export const amethyst: Color = (grade) =>
  AmethystCache[grade] || irisColor(Colors.Amethyst, grade);

const TaupeCache = {
  '50': '#fbf8f2',
  '100': '#f6f0e6',
  '200': '#ebdfcf',
  '300': '#deccbb',
  '350': '#d6c3b2',
  '400': '#cdb8aa',
  '500': '#BBA69C',
  '525': '#b09e95',
  '600': '#918680',
  '700': '#6a6663',
  '800': '#444',
  '850': '#333',
  '900': '#222',
  '950': '#101010',
};

export const taupe: Color = (grade) =>
  TaupeCache[grade] || irisColor(Colors.Taupe, grade);

export const irisColor = (
  color: any,
  grade: number,
  grayscale = false
) => {
  let newColor;
  if (grade === 500) newColor = color;
  else if (grade > 500)
    newColor = irisDarken({ color, grade, grayscale });
  else if (grade < 500)
    newColor = irisLighten({ color, grade, grayscale });

  return newColor;
};

export function irisDarken({ color, grade, grayscale = false }) {
  grade = grade / 100 - 5;

  const saturateAmount = grayscale
    ? 0
    : grade / 50 + baseSaturate(color, grade, 'darken');

  const adjustHueAmount = grayscale
    ? 0
    : baseHue(color, grade, 'darken');
  const mixAmount = grade / 5;

  return polish(color)
    .shade(mixAmount)
    .saturate(saturateAmount)
    .adjustHue(adjustHueAmount)
    .end();
}

function polish(color) {
  return {
    tint: (amount) => polish(tint(amount, color)),
    shade: (amount) => polish(shade(amount, color)),
    saturate: (amount) => polish(saturate(amount, color)),
    adjustHue: (amount) => polish(adjustHue(amount, color)),
    end: () => color,
  };
}

export function irisLighten({ color, grade, grayscale = false }) {
  grade = (grade / 100) * -1 + 5;

  const mixAmount = grade / 5;
  const adjustHueAmount = grayscale
    ? 0
    : baseHue(color, grade, 'lighten');

  const saturateAmount = grayscale
    ? 0
    : grade / 100 + baseSaturate(color, grade, 'lighten');

  return polish(color)
    .tint(mixAmount)
    .saturate(saturateAmount)
    .adjustHue(adjustHueAmount)
    .end();
}

export function baseHue(color, grade = 0, effect = 'darken') {
  switch (color) {
    case blue(500):
      return 3;
    case green(500):
      return -2;
    case slate(500):
      return 1;
    case vermilion(500):
      if (effect === 'lighten') return 8 + grade * -0.25;
      return grade * -6;
    case peridot(500):
      if (effect === 'lighten') return -2 + grade * -5;
      return 3 + grade * 10;
    case cerulean(500):
      if (effect === 'lighten') return -2 + grade * -6;
      return 6 + grade * 3;
    case lapis(500):
      if (effect === 'lighten') return -2 + grade / 2;
      return -1 + grade * -0.5;
    case amethyst(500):
      return grade * 6;
    case taupe(500):
      return grade * 5;
    default:
      return 0;
  }
}

export function baseSaturate(color, grade = 0, effect = 'darken') {
  switch (color) {
    case grayscale(500):
    case green(500):
      return 0;
    case slate(500):
      return 0.05;
    case green(500):
      return 0;
    case fuschia(500):
      return 0.2;
    case vermilion(500):
      if (effect === 'lighten') return 0.15 + grade / 40;
      return 0;
    case peridot(500):
      return 0.1 + grade / 30;
    case cerulean(500):
      return 0.05 + grade / 50;
    case lapis(500):
      if (effect === 'lighten') return grade / 15;
      return 0.1 + grade / 10;
    case amethyst(500):
      return grade / 20;
    case taupe(500):
      if (effect === 'lighten') return grade / 15;
      return grade / -20;
    default:
      return 0.1;
  }
}

// function buildCache(color) {
//   const Cache = {};
//   [
//     '50',
//     '100',
//     '200',
//     '300',
//     '350',
//     '400',
//     '500',
//     '525',
//     '600',
//     '700',
//     '800',
//     '850',
//     '900',
//     '950',
//   ].map((key) => {
//     const grade = parseInt(key);
//     Cache[key] = color(grade);
//   });

//   return Cache;
// }

// function buildCaches() {
//   const all = {};

//   [
//     red,
//     blue,
//     green,
//     yellow,
//     slate,
//     grayscale,
//     fuschia,
//     cerise,
//     vermilion,
//     peridot,
//     cerulean,
//     lapis,
//     amethyst,
//     taupe,
//   ].map((c) => {
//     const title = capitalize(c.name) + 'Cache';
//     all[title] = buildCache(c);
//   });

//   return all;
// }

// const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1);
