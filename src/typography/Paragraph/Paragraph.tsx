import React from 'react';

import { Props } from './Paragraph.types';
import { Paragraph as Styled } from './Paragraph.style';

import { withIris } from '../../utils';

export const Paragraph = withIris<
  HTMLParagraphElement | HTMLSpanElement | HTMLLabelElement,
  Props
>(ParagraphComponent);

function ParagraphComponent({
  element = 'p',
  forwardRef,
  size = '4',
  format = 'basic',
  ...props
}: Props) {
  const sizeInt = typeof size === 'number' ? size : parseInt(size);
  const grade = 400 - 100 * sizeInt;

  return (
    <Styled
      element={element}
      format={format}
      ref={forwardRef}
      size={grade}
      {...props}
    />
  );
}
