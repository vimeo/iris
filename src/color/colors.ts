import { tint, shade, saturate, adjustHue } from 'polished';

export interface Color {
  (grade: number): string;
}

export enum Colors {
  Red = '#ff4d4d',
  Blue = '#00adef',
  Green = '#4EC437',
  Yellow = '#ffb21e',
  Purple = '#8697FB',
  Slate = '#657987',
  Grayscale = '#666666',
  black = '#000000',
  white = '#FFFFFF',
}

export const black = '#000000';
export const white = '#FFFFFF';

const RedCache = {
  '50': '#ffeded',
  '100': '#ffdbdb',
  '200': '#ffb7b7',
  '300': '#ff9494',
  '350': '#ff8282',
  '400': '#ff7070',
  '500': '#ff4d4d',
  '525': '#fc3f3f',
  '600': '#db2e2e',
  '700': '#a72020',
  '800': '#711313',
  '900': '#380909',
};

export const red: Color = (grade) =>
  RedCache[grade] || irisColor(Colors.Red, grade);

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
  '900': '#372500',
};

export const yellow: Color = (grade) =>
  YellowCache[grade] || irisColor(Colors.Yellow, grade);

const GreenCache = {
  '50': '#eefaea',
  '100': '#dbf4d6',
  '200': '#b9e9ad',
  '300': '#96dd85',
  '350': '#85d672',
  '400': '#74d05e',
  '500': '#4EC437',
  '525': '#4fbb33',
  '600': '#419e2a',
  '700': '#2f781e',
  '800': '#1f5113',
  '900': '#0f2908',
};

export const green: Color = (grade) =>
  GreenCache[grade] || irisColor(Colors.Green, grade);

const BlueCache = {
  '50': '#e5f5fd',
  '100': '#c8edff',
  '200': '#99d9f8',
  '350': '#4cbdf3',
  '300': '#5cc9ff',
  '400': '#33b3f2',
  '500': '#00adef',
  '525': '#0099e3',
  '600': '#0080bf',
  '700': '#00608f',
  '800': '#00405f',
  '900': '#00202f',
};

export const blue: Color = (grade) =>
  BlueCache[grade] || irisColor(Colors.Blue, grade);

const PurpleCache = {
  '50': '#f5f1ff',
  '100': '#ebe5ff',
  '200': '#d3ccff',
  '300': '#b7b3ff',
  '400': '#9b9ffe',
  '500': '#8697FB',
  '600': '#6468cf',
  '700': '#4540a6',
  '800': '#312574',
  '900': '#190f3d',
};

export const purple: Color = (grade) =>
  PurpleCache[grade] || irisColor(Colors.Purple, grade);

const SlateCache = {
  '50': '#eef1f4',
  '100': '#dee4e9',
  '200': '#bdcad3',
  '300': '#9caebd',
  '350': '#8da1b1',
  '400': '#7c93a6',
  '500': '#657987',
  '525': '#597286',
  '600': '#496073',
  '700': '#364857',
  '800': '#23313b',
  '900': '#11191d',
};

export const slate: Color = (grade) =>
  SlateCache[grade] || irisColor(Colors.Slate, grade);

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
  '900': '#141414',
};

export const grayscale: Color = (grade) =>
  GrayscaleCache[grade] || irisColor(Colors.Grayscale, grade, true);

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
    : grade / 50 + baseSaturate(color, grade);
  const adjustHueAmount = grayscale ? 0 : baseHue(color, grade);
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
  const adjustHueAmount = grayscale ? 0 : baseHue(color, grade);
  const saturateAmount = grayscale
    ? 0
    : grade / 100 + baseSaturate(color, grade);

  return polish(color)
    .tint(mixAmount)
    .saturate(saturateAmount)
    .adjustHue(adjustHueAmount)
    .end();
}

export function baseHue(color, grade = 0) {
  switch (color) {
    case blue(500):
      return 3;
    case green(500):
      return -2;
    case slate(500):
      return 1;
    case purple(500):
      return grade * 6;
    default:
      return 0;
  }
}

export function baseSaturate(color, grade = 0) {
  switch (color) {
    case grayscale(500):
    case green(500):
      return 0;
    case slate(500):
      return 0.05;
    case green(500):
      return 0;
    case purple(500):
      return grade / 20;
    default:
      return 0.1;
  }
}
