import styled, { css, keyframes } from 'styled-components';
import { rem, rgba } from 'polished';

import { Formats, Sizes } from './ProgressBar.types';

import { red, slate, yellow, blue } from '../../../color';

interface Props {
  animated?: boolean;
  format: Formats;
  size: Sizes;
  value?: number;
  ariaValuenow?: number;
  ariaValuemin?: number;
  ariaValuemax?: number;
}

export const Wrapper = styled.div<Props>`
  overflow: hidden;
  position: relative;
  width: 100%;
  background-color: ${bgColor(slate(100))};
  ${shape};
`;

export const Styled = styled.div<Props>`
  position: absolute;
  top: 0;
  left: 0;
  background-color: ${bgColor(blue(500))};
  ${shape};
  ${stripes};
`;

const heights = {
  md: 4,
  lg: 8,
  xl: 12,
};

function shape({ size }) {
  return css`
    height: ${heights[size]}px;
    border-radius: ${heights[size] / 2}px;
  `;
}

function bgColor(defaultColor: string) {
  return ({ theme, format }) => {
    switch (format) {
      case 'alert':
        return red(500);
      case 'disabled':
        return theme.formats.soft;
      case 'warning':
        return yellow(500);
      case 'empty':
        return 'transparent';
      default:
        return defaultColor;
    }
  };
}

const stripeKeyframes = keyframes`
  from { background-position: 0 0; }
    to { background-position: ${rem(20)} ${rem(10)}; }
`;

function stripes({ animated = null, theme }) {
  const { color } = theme.content;
  const foreground = rgba(color, 0.15);
  const background = rgba(color, 0);

  return (
    animated &&
    css`
      background-size: ${rem(10)} ${rem(10)};
      animation: ${stripeKeyframes} 1.5s linear infinite;
      background-image: linear-gradient(
        -45deg,
        ${foreground} 25%,
        ${background} 25%,
        ${background} 50%,
        ${foreground} 50%,
        ${foreground} 75%,
        ${background} 5%,
        ${background}
      );
    `
  );
}
