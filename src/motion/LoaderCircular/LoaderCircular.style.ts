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

const loaderAnimation = css`
  animation: ${rotate} 800ms linear infinite;
`;

export const LoaderCircular = styled.div<Props>`
  border-width: ${rem(2)};
  border-style: solid;
  border-color: ${({ theme, format }) =>
    format === 'adapative' ? 'currentColor' : theme.formats[format]};
  border-bottom-color: transparent !important;

  ${sizeStyles};
  ${loaderAnimation};
`;

function sizeStyles({ size }) {
  const loaderSize = sizes[size];

  return {
    width: loaderSize,
    height: loaderSize,
    borderRadius: loaderSize,
  };
}
