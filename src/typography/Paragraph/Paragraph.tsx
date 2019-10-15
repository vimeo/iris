import React from 'react';

import { Props } from './Paragraph.types';
import { Text } from './Paragraph.style';

import { withIris } from '../../utils';

export const Paragraph = withIris<
  HTMLParagraphElement | HTMLSpanElement | HTMLLabelElement,
  Props
>(ParagraphComponent);

function ParagraphComponent({
  element = 'p',
  forwardRef,
  size = '4',
  theme,
  status,
  format = 'basic',
  ...props
}: Props) {
  return (
    <Text
      as={element}
      format={status ? status : format}
      ref={forwardRef}
      size={size}
      theme={theme}
      {...props}
    />
  );
}
