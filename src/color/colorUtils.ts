import { toColorString, parseToRgb, hsl } from 'polished';

export const HSVtoHSL = ({ hue, saturation, value }) => ({
  hue: round(hue),
  saturation: round(saturation),
  lightness: round(((2 - saturation) * value) / 2),
});

export function HSLtoHSV({ hue, saturation: HSL_S, lightness }) {
  HSL_S *= lightness < 0.5 ? lightness : 1 - lightness;

  const saturation =
    Math.abs(round((2 * HSL_S) / (lightness + HSL_S))) || 0;

  const value = round(lightness + saturation);

  return { hue, saturation, value };
}

export function colorSpaces(payload) {
  const HSV = roundValues(HSLtoHSV(payload));
  const HEX = SixDigitHEX(hsl(payload).toUpperCase());
  const RGB = RGBObject(payload);
  // const HSL = payload.hue ? payload : parseToHsl(payload);
  // console.log({ HSL });

  return { HSV, HEX, RGB, HSL: payload };
}

export const round = (num) => Math.round(num * 1000) / 1000;

export const roundValues = (obj) =>
  Object.keys(obj).map((key) => (obj[key] = round(obj[key])));

function RGBObject(HSL) {
  const RGBArray = roundValues(parseToRgb(toColorString(HSL)));
  const [red, green, blue] = RGBArray;

  return { red, green, blue };
}

function SixDigitHEX(HEX) {
  HEX = HEX.replace('#', '');

  if (HEX.length === 3)
    HEX = HEX.split('')
      .map((hex) => hex + hex)
      .join('');

  return '#' + HEX;
}
