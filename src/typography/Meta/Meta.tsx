import React from 'react';

import { Props } from './Meta.types';
import { Meta as Styled } from './Meta.style';

import { withIris } from '../../utils';

export const Meta = withIris<
  HTMLParagraphElement | HTMLSpanElement | HTMLLabelElement,
  Props
>(MetaComponent);

function MetaComponent({
  element = 'span',
  forwardRef,
  format = 'basic',
  ...props
}: Props) {
  return (
    <Styled
      element={element}
      format={format}
      ref={forwardRef}
      size={100}
      {...props}
    />
  );
}
