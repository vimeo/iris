import React from 'react';

import { InputProps, Props } from './Text.types';
import { Text as Styled } from './Text.style';
import { EditableText } from './EditableText';

import { withIris } from '../../utils';

export const Text = withIris<
  HTMLParagraphElement | HTMLSpanElement,
  InputProps
>(TextComponent);

function TextComponent({
  contentEditable,
  element = 'span',
  format = 'soft',
  ...props
}: Props) {
  return contentEditable ? (
    <EditableText format={format} {...props} />
  ) : (
    <Styled as={element} format={format} {...props} />
  );
}
