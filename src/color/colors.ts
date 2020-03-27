import { tint, shade, saturate, adjustHue } from 'polished';

export interface Color {
  (grade: number): string;
}

export enum Colors {
  Red = '#ff4d4d',
  Blue = '#00adef',
  Green = '#4EC437',
  Yellow = '#ffb21e',
  Slate = '#657987',
  Grayscale = '#666666',
  black = '#000000',
  white = '#FFFFFF',
}

export const black = '#000000';
export const white = '#FFFFFF';

const RedCache = {
  '50': '#ffeded',
  '200': '#ffb7b7',
  '350': '#ff8282',
  '400': '#ff7070',
  '500': '#ff4d4d',
  '525': '#fc3f3f',
  '600': '#db2e2e',
  '800': '#711313',
};

export const red: Color = grade =>
  RedCache[grade] || irisColor(Colors.Red, grade);

const YellowCache = {
  '50': '#fff7e8',
  '200': '#ffe0a5',
  '350': '#ffc961',
  '400': '#ffc14b',
  '500': '#ffb21e',
  '525': '#ffad0f',
  '600': '#da920a',
  '800': '#6f4a03',
};

export const yellow: Color = grade =>
  YellowCache[grade] || irisColor(Colors.Yellow, grade);

const GreenCache = {
  '50': '#eefaea',
  '200': '#b9e9ad',
  '350': '#85d672',
  '400': '#74d05e',
  '500': '#4EC437',
  '525': '#4fbb33',
  '600': '#419e2a',
  '800': '#1f5113',
};

export const green: Color = grade =>
  GreenCache[grade] || irisColor(Colors.Green, grade);

const BlueCache = {
  '50': '#e5f5fd',
  '200': '#99d9f8',
  '350': '#4cbdf3',
  '400': '#33b3f2',
  '500': '#00adef',
  '525': '#0099e3',
  '600': '#0080bf',
  '800': '#00405f',
};

export const blue: Color = grade =>
  BlueCache[grade] || irisColor(Colors.Blue, grade);

const SlateCache = {
  '50': '#eef1f4',
  '200': '#bdcad3',
  '350': '#8da1b1',
  '400': '#7c93a6',
  '500': '#657987',
  '525': '#597286',
  '600': '#496073',
  '800': '#23313b',
};

export const slate: Color = grade =>
  SlateCache[grade] || irisColor(Colors.Slate, grade);

const GrayscaleCache = {
  '50': '#efefef',
  '200': '#c1c1c1',
  '350': '#939393',
  '400': '#848484',
  '500': '#666666',
  '525': '#606060',
  '600': '#515151',
  '800': '#282828',
};

export const grayscale: Color = grade =>
  GrayscaleCache[grade] || irisColor(Colors.Grayscale, grade, true);

export const irisColor = (
  color: any,
  grade: number,
  grayscale = false,
) => {
  let newColor;
  if (grade === 500) newColor = color;
  else if (grade > 500)
    newColor = irisDarken({ color, grade, grayscale });
  else if (grade < 500)
    newColor = irisLighten({ color, grade, grayscale });

  // colorLog({ color, grade, newColor });
  return newColor;
};

export function irisDarken({ color, grade, grayscale = false }) {
  grade = grade / 100 - 5;
  const saturateAmount = grayscale
    ? 0
    : grade / 50 + baseSaturate(color);
  const adjustHueAmount = grayscale ? 0 : baseHue(color);
  const mixAmount = grade / 5;

  return polish(color)
    .shade(mixAmount)
    .saturate(saturateAmount)
    .adjustHue(adjustHueAmount)
    .end();
}

function polish(color) {
  return {
    tint: amount => polish(tint(amount, color)),
    shade: amount => polish(shade(amount, color)),
    saturate: amount => polish(saturate(amount, color)),
    adjustHue: amount => polish(adjustHue(amount, color)),
    end: () => color,
  };
}

export function irisLighten({ color, grade, grayscale = false }) {
  grade = (grade / 100) * -1 + 5;

  const mixAmount = grade / 5;
  const adjustHueAmount = grayscale ? 0 : baseHue(color);
  const saturateAmount = grayscale
    ? 0
    : grade / 100 + baseSaturate(color);

  return polish(color)
    .tint(mixAmount)
    .saturate(saturateAmount)
    .adjustHue(adjustHueAmount)
    .end();
}

export function baseHue(color) {
  switch (color) {
    case blue(500):
      return 3;
    case green(500):
      return -2;
    case '#657987':
      return 1;
    default:
      return 0;
  }
}

export function baseSaturate(color) {
  switch (color) {
    case grayscale(500):
    case green(500):
      return 0;
    case slate(500):
      return 0.05;
    case green(500):
      return 0;
    default:
      return 0.1;
  }
}
