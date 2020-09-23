import { toColorString, parseToRgb } from 'polished';

export const HSVtoHSL = ({ hue, saturation, value }) => ({
  hue: round(hue),
  saturation: round(saturation),
  lightness: round(((2 - saturation) * value) / 2),
});

export function HSLtoHSV({ hue, saturation, lightness }) {
  saturation *= lightness < 0.5 ? lightness : 1 - lightness;

  return {
    hue,
    saturation:
      Math.abs(round((2 * saturation) / (lightness + saturation))) ||
      0,
    value: round(lightness + saturation),
  };
}

export const colorSpaces = (HSL) => ({
  HSV: HSLtoHSV(HSL),
  HEX: toColorString(HSL),
  RGB: parseToRgb(toColorString(HSL)),
});

export const round = (num) => Math.round(num * 1000) / 1000;

export const roundValues = (obj) =>
  Object.keys(obj).map((key) => (obj[key] = round(obj[key])));
