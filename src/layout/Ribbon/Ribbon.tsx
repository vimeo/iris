import React from 'react';

import { Props } from './Ribbon.types';
import { Ribbon as Styled } from './Ribbon.style';

import { withIris } from '../../utils';

export const Ribbon = withIris<HTMLDivElement, Props>(
  RibbonComponent
);

export function RibbonComponent({
  variant = 'rainbow',
  forwardRef,
  animate = true,
  size = 'md',
  ...props
}: Props) {
  return (
    <Styled
      animate={animate}
      size={size}
      variant={variant}
      ref={forwardRef}
      {...props}
    />
  );
}
