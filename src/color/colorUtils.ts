import { tint, shade, saturate, adjustHue } from 'polished';

import { green, blue, slate, grayscale } from './colors';

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
