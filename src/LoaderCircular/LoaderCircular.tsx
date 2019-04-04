import React, { SFC } from 'react';
import { rem } from 'polished';
import styled, { keyframes, css } from 'styled-components';
import * as COLORS from '../Color/Color';

export interface LoaderCircularProps {
  /**
   * Class is added to the outer div of the Loader
   */
  className?: string;
  /**
   * Determines the color, `adapative` uses the css currentcolor
   */
  format?: 'dark' | 'light' | 'adaptive';
  /**
   * Determines Size
   */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}

const LoaderCircularSizes = {
  xl: rem(40),
  lg: rem(26),
  md: rem(24),
  sm: rem(16),
  xs: rem(12),
};

const getSizeFromProps = props => LoaderCircularSizes[props.size];

const LoaderCircularFormats = {
  dark: COLORS.VimeoBlue,
  light: COLORS.White,
  adapative: 'currentcolor',
};

const loaderRotationKeyframes = keyframes`
  from { transform: rotate(0deg) }
  to   { transform: rotate(360deg) }
`;

const loaderAnimation = css`
  animation: ${loaderRotationKeyframes} 800ms linear infinite;
`;

const LoaderCircularStyled = styled.div<LoaderCircularProps>`
  border-width: ${rem(2)};
  border-style: solid;
  border-color: ${props => LoaderCircularFormats[props.format]};
  border-bottom-color: transparent !important;
  width: ${getSizeFromProps};
  height: ${getSizeFromProps};
  border-radius: ${getSizeFromProps};
  ${loaderAnimation};
`;

export const LoaderCircular: SFC<LoaderCircularProps> = ({
  format = 'dark',
  size = 'md',
  ...props
}) => <LoaderCircularStyled {...props} format={format} size={size} />;
