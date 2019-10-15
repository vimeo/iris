import styled, { css } from 'styled-components';

import { StyleProps } from './Header.types';
import { antialias, fontFamily } from '../typography';
import { Text } from '../Text';

import { themes } from '../../themes';

export const Header = styled(Text)<StyleProps>`
  ${variantStyles};
  ${antialias};
`;

const h = {
  font: {
    1: '2.25rem / 2.5rem',
    2: '1.75rem / 2rem',
    3: '1.375rem / 1.925rem',
    4: '1.125rem / 1.5rem',
    5: '1rem / 1.25rem',
    6: '0.875rem / 1.25rem',
    7: '0.75rem / 1.125rem',
    plusUltra: 'calc(2rem + 3.5vw) / calc(2.0625rem + 3.5125vw)',
  },
  letterSpacing: {
    1: '0.04rem',
    2: '0.02rem',
    7: '0.033rem',
    plusUltra: 'calc(-0.125rem - 0.0025vw)',
  },
  marginBottom: {
    1: '1.25rem',
    2: '1rem',
    4: '0.25rem',
    plusUltra: 'calc(1rem + 0.875vw)',
  },
};

function variantStyles({
  variant = 'normal',
  size = '1',
  theme,
  format,
}: StyleProps) {
  // Remove in Iris 8.0
  if (!theme.formats && process.env.NODE_ENV === 'development')
    console.warn('Invalid theme:', { theme });
  if ((theme as any) === 'light') theme = themes.light;
  if ((theme as any) === 'dark') theme = themes.dark;
  //

  const color = theme.formats[format];

  const sizeStyles = css`
    color: ${color};
    display: block;
    max-width: 44rem;
    font: 500 ${h.font[size]} ${fontFamily};
    letter-spacing: ${h.letterSpacing[size] || '0.01rem'};
    margin-bottom: ${h.marginBottom[size] || '0.5rem'};
  `;

  switch (variant) {
    case 'thin':
      return css`
        ${sizeStyles};
        font-weight: 400;
        letter-spacing: 0.03125rem;
      `;
    case 'plusUltra':
      return css`
        ${sizeStyles};
        font-weight: 800;
        max-width: calc(96vw - 2rem);
        margin-bottom: calc(1rem + 0.875vw);
      `;
    default:
      return css`
        ${sizeStyles};
      `;
  }
}

// Algebraic font size experiment
// import { rem } from 'polished';

// const calcFontSize = size =>
//   2 * Math.round(Math.round(40.3 * 0.75 ** size + 5.489) / 2);

// const calcLineHeight = fontsize => Math.round(fontsize / 1.1 + 7);

// function font(size) {
//   const fontSize = calcFontSize(size);
//   const lineHeight = calcLineHeight(fontSize);
//   return `${rem(fontSize)} / ${rem(lineHeight)}`;
// }
