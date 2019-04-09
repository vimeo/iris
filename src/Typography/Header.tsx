import React, { SFC } from 'react';
import styled, { css } from 'styled-components';
import { fontFamily, antialias } from './Typography';
import { AstroGranite, White } from '../Color/Color';
// import { rem } from 'polished';

interface Props {
  size?: sizes;
  theme?: 'dark' | 'light';
  variant?: 'normal' | 'thin' | 'white';
}

export const Header: SFC<Props> = ({
  size = '1',
  theme,
  variant = 'normal',
  ...props
}) => (
  <Text
    as={elements[size]}
    size={size}
    theme={theme}
    variant={size === 'plusUltra' ? 'plusUltra' : variant}
    {...props}
  />
);

type sizes = '1' | '2' | '3' | '4' | '5' | '6' | '7' | 'plusUltra';

const elements: { [key in sizes]: keyof JSX.IntrinsicElements } = {
  '1': 'h1',
  '2': 'h2',
  '3': 'h3',
  '4': 'h4',
  '5': 'h5',
  '6': 'h6',
  '7': 'span',
  plusUltra: 'h1',
};

const h = {
  color: {
    dark: White,
    light: AstroGranite,
  },
  weight: {
    normal: 500,
    plusUltra: 800,
    thin: 400,
  },
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
    3: '0.01rem',
    4: '0.01rem',
    5: '0.01rem',
    6: '0.01rem',
    7: '0.033rem',
    plusUltra: 'calc(-0.125rem - 0.0025vw)',
  },
  marginBottom: {
    1: '1.25rem',
    2: '1rem',
    3: '0.5rem',
    4: '0.25rem',
    5: '0.5rem',
    6: '0.5rem',
    7: '0.5rem',
    plusUltra: 'calc(1rem + 0.875vw)',
  },
};

// const calcFontSize = size =>
//   2 * Math.round(Math.round(40.3 * 0.75 ** size + 5.489) / 2);

// const calcLineHeight = fontsize => Math.round(fontsize / 1.1 + 7);

// function font(size) {
//   const fontSize = calcFontSize(size);
//   const lineHeight = calcLineHeight(fontSize);
//   return `${rem(fontSize)} / ${rem(lineHeight)}`;
// }

const Text = styled.span<{
  size?: sizes;
  theme?: 'dark' | 'light';
  variant?: 'normal' | 'thin' | 'white' | 'plusUltra';
}>`
  ${({ size, variant }) => css`
    font: ${h.weight[variant]} ${h.font[size]} ${fontFamily};
    letter-spacing: ${variant === 'thin'
      ? '0.03125rem'
      : h.letterSpacing[size]};
    margin-bottom: ${h.marginBottom[size]};
    max-width: ${size === 'plusUltra'
      ? 'calc(96vw - 2rem)'
      : '44rem'};
  `};

  ${({ theme }) =>
    theme === 'light'
      ? css`
          color: ${h.color[theme]};
        `
      : css`
          color: ${h.color[theme]};
          ${antialias}
        `};
`;
