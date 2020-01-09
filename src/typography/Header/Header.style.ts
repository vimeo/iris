import styled, { css } from 'styled-components';

import { Props } from './Header.types';
import { antialias } from '../typography';
import { Text } from '../Text/Text';

export const Header = styled(Text)<Props>`
  ${variantStyles};
  ${antialias};
`;

function variantStyles({
  variant = 'normal',
  size = '1',
  theme,
  format,
}: Props) {
  const color = theme.formats[format];

  const sizeStyles = css`
    color: ${color};
    display: block;
    font-size: ${fontSize[size]};
    font-weight: 500;
    line-height: ${lineHeight[size]};
    letter-spacing: ${letterSpacing[size] || '0.01rem'};
    margin-bottom: ${marginBottom[size] || '0.5rem'};
  `;

  const sizeVariant = size === 'plusUltra' ? size : variant;

  switch (sizeVariant) {
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

const fontSize = {
  1: '2.25rem',
  2: '1.75rem',
  3: '1.375rem',
  4: '1.125rem',
  5: '1rem',
  6: '0.875rem',
  7: '0.75rem',
  plusUltra: 'calc(2rem + 3.5vw)',
};

const lineHeight = {
  1: '2.5rem',
  2: '2rem',
  3: '1.925rem',
  4: '1.5rem',
  5: '1.25rem',
  6: '1.25rem',
  7: '1.125rem',
  plusUltra: 'calc(2.0625rem + 3.5125vw)',
};

const letterSpacing = {
  1: '0.04rem',
  2: '0.02rem',
  7: '0.033rem',
  plusUltra: 'calc(-0.125rem - 0.0025vw)',
};

const marginBottom = {
  1: '1.25rem',
  2: '1rem',
  4: '0.25rem',
  plusUltra: 'calc(1rem + 0.875vw)',
};

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
