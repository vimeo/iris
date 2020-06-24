import React from 'react';

import { Props } from './Header.types';
import { Header as Styled } from './Header.style';

import { withIris } from '../../utils';

export const Header = withIris<
  HTMLHeadingElement | HTMLSpanElement | HTMLLabelElement,
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
  return (
    <Styled
      element={element || elements(size)}
      format={format}
      ref={forwardRef}
      size={size}
      variant={variant}
      {...props}
    />
  );
}

function elements(size) {
  return (size < 7
    ? 'h' + size
    : size === 'plusUltra'
    ? 'h1'
    : 'span') as Props['element'];
}
