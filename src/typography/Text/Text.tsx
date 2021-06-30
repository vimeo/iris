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
  size = 300,
  ...props
}: Props) {
  return contentEditable ? (
    <EditableText format={format} size={size} {...props} />
  ) : (
    <Styled as={element} format={format} size={size} {...props} />
  );
}
