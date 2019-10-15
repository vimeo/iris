import React from 'react';

import { Props, StyleProps } from './Header.types';
import { Header as Styled } from './Header.style';

import { withIris } from '../../utils';

export const Header = withIris<
  HTMLHeadingElement | HTMLSpanElement,
  Props
>(HeaderComponent);

function HeaderComponent({
  element,
  format = 'basic',
  forwardRef,
  size = '1',
  variant = 'normal',
  ...props
}: Props) {
  const variantMod: StyleProps['variant'] =
    size === 'plusUltra' ? 'plusUltra' : variant;

  return (
    <Styled
      as={element || elements(size)}
      format={format}
      ref={forwardRef}
      size={size}
      variant={variantMod}
      {...props}
    />
  );
}

function elements(size) {
  return (size < 7
    ? 'h' + size
    : size === 'plusUltra'
    ? 'h1'
    : 'span') as Props['as'];
}
