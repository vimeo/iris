import styled, { keyframes, css } from 'styled-components';
import { rem } from 'polished';
import { IrisTheme } from '../../themes';

interface Props {
  size: string;
  format: string;
  theme: IrisTheme;
}

const sizes = {
  xl: rem(40),
  lg: rem(26),
  md: rem(24),
  sm: rem(16),
  xs: rem(12),
};

const rotate = keyframes`
  from { transform: rotate(0deg) }
  to   { transform: rotate(360deg) }
`;

function loaderAnimation({ theme }) {
  const speed = theme?.motion?.loaderCircular?.speed || 800;

  return css`
    animation: ${rotate} ${speed}ms linear infinite;
  `;
}

export const LoaderCircular = styled.div<Props>`
  ${loaderAnimation};
  ${shapeStyles};
`;

function shapeStyles({ theme, format }) {
  const color = theme.formats[format];
  const borderColor = format === 'adapative' ? 'currentColor' : color;

  return (
    theme?.motion?.loaderCircular?.shape ||
    css`
      border-width: ${rem(2)};
      border-style: solid;
      border-color: ${borderColor};
      border-bottom-color: transparent !important;
      ${sizeStyles};
    `
  );
}

function sizeStyles({ size }) {
  const loaderSize = sizes[size];

  return {
    width: loaderSize,
    height: loaderSize,
    borderRadius: loaderSize,
  };
}
