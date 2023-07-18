import { createGlobalStyle } from 'styled-components';
import { readableColor } from 'polished';

const BlueCSSProperties = {
  '--blue-50': '#e5f5fd',
  '--blue-100': '#c8edff',
  '--blue-200': '#99d9f8',
  '--blue-300': '#5cc9ff',
  '--blue-350': '#4cbdf3',
  '--blue-400': '#33b3f2',
  '--blue-500': '#00adef',
  '--blue-525': '#0099e3',
  '--blue-600': '#0080bf',
  '--blue-700': '#00608f',
  '--blue-800': '#00405f',
  '--blue-850': '#002f47',
  '--blue-900': '#00202f',
  '--blue-950': '#001017',
};

const A11yBlueCSSProperties = {
  '--blue-50': `${readableColor('#e5f5fd')}`,
  '--blue-100': `${readableColor('#c8edff')}`,
  '--blue-200': `${readableColor('#99d9f8')}`,
  '--blue-300': `${readableColor('#5cc9ff')}`,
  '--blue-350': `${readableColor('#4cbdf3')}`,
  '--blue-400': `${readableColor('#33b3f2')}`,
  '--blue-500': `${readableColor('#00adef')}`,
  '--blue-525': `${readableColor('#0099e3')}`,
  '--blue-600': `${readableColor('#0080bf')}`,
  '--blue-700': `${readableColor('#00608f')}`,
  '--blue-800': `${readableColor('#00405f')}`,
  '--blue-850': `${readableColor('#002f47')}`,
  '--blue-900': `${readableColor('#00202f')}`,
  '--blue-950': `${readableColor('#001017')}`,
};

const RedCSSProperties = {
  '--red-50': '#fee7e5',
  '--red-100': '#fdd1cb',
  '--red-200': '#faa599',
  '--red-300': '#f77866',
  '--red-350': '#f5624e',
  '--red-400': '#f34c35',
  '--red-500': '#E22B12',
  '--red-525': '#e21f05',
  '--red-600': '#c01902',
  '--red-700': '#911100',
  '--red-800': '#610c00',
  '--red-850': '#480800',
  '--red-900': '#300600',
  '--red-950': '#170300',
};

const A11yRedCSSProperties = {
  '--red-50': `${readableColor('#fee7e5')}`,
  '--red-100': `${readableColor('#fdd1cb')}`,
  '--red-200': `${readableColor('#faa599')}`,
  '--red-300': `${readableColor('#f77866')}`,
  '--red-350': `${readableColor('#f5624e')}`,
  '--red-400': `${readableColor('#f34c35')}`,
  '--red-500': `${readableColor('#E22B12')}`,
  '--red-525': `${readableColor('#e21f05')}`,
  '--red-600': `${readableColor('#c01902')}`,
  '--red-700': `${readableColor('#911100')}`,
  '--red-800': `${readableColor('#610c00')}`,
  '--red-850': `${readableColor('#480800')}`,
  '--red-900': `${readableColor('#300600')}`,
  '--red-950': `${readableColor('#170300')}`,
};

const SlateCSSProperties = {
  '--slate-50': '#eef1f4',
  '--slate-100': '#dee4e9',
  '--slate-200': '#bdcad3',
  '--slate-300': '#9caebd',
  '--slate-350': '#8da1b1',
  '--slate-400': '#7c93a6',
  '--slate-500': '#657987',
  '--slate-525': '#597286',
  '--slate-600': '#496073',
  '--slate-700': '#364857',
  '--slate-800': '#23313b',
  '--slate-850': '#1a252c',
  '--slate-900': '#11191d',
  '--slate-950': '#080d0f',
};

const A11ySlateCSSProperties = {
  '--slate-50': `${readableColor('#eef1f4')}`,
  '--slate-100': `${readableColor('#dee4e9')}`,
  '--slate-200': `${readableColor('#bdcad3')}`,
  '--slate-300': `${readableColor('#9caebd')}`,
  '--slate-350': `${readableColor('#8da1b1')}`,
  '--slate-400': `${readableColor('#7c93a6')}`,
  '--slate-500': `${readableColor('#657987')}`,
  '--slate-525': `${readableColor('#597286')}`,
  '--slate-600': `${readableColor('#496073')}`,
  '--slate-700': `${readableColor('#364857')}`,
  '--slate-800': `${readableColor('#23313b')}`,
  '--slate-850': `${readableColor('#1a252c')}`,
  '--slate-900': `${readableColor('#11191d')}`,
  '--slate-950': `${readableColor('#080d0f')}`,
};

export const GlobalStyle = createGlobalStyle`
  :root{
    ${BlueCSSProperties}
    ${RedCSSProperties}
    ${SlateCSSProperties}
  }
`;

export const A11yCSSProperties = createGlobalStyle`
  ${A11yBlueCSSProperties}
  ${A11yRedCSSProperties}
  ${A11ySlateCSSProperties}
`;
