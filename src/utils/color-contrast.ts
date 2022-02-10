type RGB = [number, number, number];

export function contrast(text, bg) {
  const textRGB: RGB = [text.red, text.green, text.blue];
  const bgRGB: RGB = [bg.red, bg.green, bg.blue];

  const APCA = contrastAPCA(RGBtoY(textRGB), RGBtoY(bgRGB));
  const WCAG = contrastWCAG(textRGB, bgRGB);

  return { APCA, WCAG };
}

function luminanceChannel(value: number) {
  value /= 255;

  return value <= 0.03928
    ? value / 12.92
    : Math.pow((value + 0.055) / 1.055, 2.4);
}

function luminance(rgb: RGB = [0, 0, 0]) {
  const a = rgb.map(luminanceChannel);

  return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
}

function contrastWCAG(rgb1: RGB, rgb2: RGB, places = 1) {
  const lum1 = luminance(rgb1);
  const lum2 = luminance(rgb2);

  const brightest = Math.max(lum1, lum2);
  const darkest = Math.min(lum1, lum2);

  const contrast = (brightest + 0.05) / (darkest + 0.05);
  return Number(contrast.toFixed(places)) + ':' + 1;
}

const normBG = 0.56;
const normText = 0.57;
const revBG = 0.65;
const revText = 0.62;
const blackThreshold = 0.022;
const blackClamp = 1.414;
const scaleBlackOnWhite = 1.14;
const scaleWhiteOnBlack = 1.14;
const loBoWoffset = 0.027;
const loWoBoffset = 0.027;
const loClip = 0.1;
const deltaYmin = 0.0005;

function contrastAPCA(textY: number, bgY: number, places = 2) {
  const icp = [0.0, 1.1];

  const min = Math.min(textY, bgY);
  const max = Math.max(textY, bgY);
  const outOfRange = min < icp[0] && max > icp[1];

  if (outOfRange) return 0.0;

  textY =
    textY > blackThreshold
      ? textY
      : textY + Math.pow(blackThreshold - textY, blackClamp);

  bgY =
    bgY > blackThreshold
      ? bgY
      : bgY + Math.pow(blackThreshold - bgY, blackClamp);

  if (Math.abs(bgY - textY) < deltaYmin) return 0.0;

  const outputContrast =
    bgY > textY ? contrastBoW(bgY, textY) : contrastWoB(bgY, textY);

  return (outputContrast * 100.0).toFixed(places);
}

function contrastWoB(bgY, textY) {
  const value =
    (Math.pow(bgY, revBG) - Math.pow(textY, revText)) *
    scaleWhiteOnBlack;

  const outputContrast = value > -loClip ? 0.0 : value + loWoBoffset;

  return outputContrast;
}

function contrastBoW(bgY, textY) {
  const value =
    (Math.pow(bgY, normBG) - Math.pow(textY, normText)) *
    scaleBlackOnWhite;

  const outputContrast = value < loClip ? 0.0 : value - loBoWoffset;

  return outputContrast;
}

const mainTRC = 2.4;

const sRco = 0.2126729;
const sGco = 0.7151522;
const sBco = 0.072175;

function RGBtoY(rgb = [0, 0, 0]) {
  const exp = (channel: number) => Math.pow(channel / 255.0, mainTRC);

  return sRco * exp(rgb[0]) + sGco * exp(rgb[1]) + sBco * exp(rgb[2]);
}
