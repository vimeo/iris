import styled, { css, keyframes } from 'styled-components';
import { saturate } from 'polished';

import { Props } from './Ribbon.types';

import { green, blue } from '../../color';

export const Ribbon = styled.div<Props>`
  width: 100%;
  ${background};
  ${height};
  ${animate};
`;

function background({ variant = 'rainbow' }) {
  switch (variant) {
    case 'mod':
      return gradient(['#dce35b', '#45b649'], '270deg');
    case 'possessed':
      return gradient(['#7b4397', '#dc2430']);
    case 'rainbow':
      return gradient([
        '#45c3ff',
        '#0088cc',
        '#7fc400',
        '#ffc86c',
        '#ffb21e',
        '#ff4d4d',
        '#6447b6',
      ]);
    case 'primary': {
      return gradient([blue(300), saturate(1, blue(650))]);
    }
    case 'success': {
      return gradient([green(300), saturate(1, green(700))]);
    }
  }
}

function gradient(colorsArray: string[], direction = 'to right') {
  return ({ animate = true }) => {
    let colors: string;

    if (animate) {
      const [first, ...rest] = colorsArray;
      colors = [first, ...rest, first].join(',');
    } else {
      colors = colorsArray.join(',');
    }

    return css`
      background-image: linear-gradient(${direction}, ${colors});
    `;
  };
}

const scroll = keyframes`
  0% { background-position: 0% 50%; }
  100% { background-position: 200% 50%; }
`;

function animate({ animate = true }) {
  return (
    animate &&
    css`
      animation: ${scroll} 5s linear infinite;
      background-size: 200% !important;
    `
  );
}

function height({ size = 'md' }) {
  switch (size) {
    case 'xs':
      return { height: '0.375rem' };
    case 'sm':
      return { height: '0.5rem' };
    case 'md':
      return { height: '0.75rem' };
    case 'lg':
      return { height: '1rem' };
    case 'xl':
      return { height: '1.5rem' };
  }
}
