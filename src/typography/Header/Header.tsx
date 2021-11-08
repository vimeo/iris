import React from 'react';

import { Props } from './Header.types';
import { Header as Styled, PlusUltra } from './Header.style';

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
  const sizeInt = parseInt(size);
  const grade = 800 - 100 * sizeInt;

  const elementDefault = elements(size);

  if (size === 'plusUltra') {
    return (
      <PlusUltra
        element="h1"
        format={format}
        ref={forwardRef}
        {...props}
      />
    );
  } else {
    return (
      <Styled
        element={element || elementDefault}
        format={format}
        ref={forwardRef}
        size={grade}
        variant={variant}
        {...props}
      />
    );
  }
}

function elements(size) {
  return (
    size < 7 ? 'h' + size : size === 'plusUltra' ? 'h1' : 'span'
  ) as Props['element'];
}
