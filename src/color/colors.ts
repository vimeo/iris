import { Colors, irisColor } from './colorUtils';

export interface Color {
  (grade?: number): string;
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
