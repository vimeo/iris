import React from 'react';
import styled from 'styled-components';

import { HTMLTextElement, IrisTextElement } from './Text.types';

import { antialias } from '../typography';
import { withIris, IrisProps } from '../../utils';
import { Statuses, Formats } from '../../themes';

export const Text = withIris<
  HTMLParagraphElement | HTMLSpanElement,
  Props
>(TextComponent);

type Props = IrisProps<
  {
    format?: Formats;
    status?: Statuses;
    element?: HTMLTextElement;
  },
  IrisTextElement
>;

function TextComponent({
  element = 'span',
  format = 'soft',
  ...props
}: Props) {
  return <Styled as={element} format={format} {...props} />;
}

const Styled = styled.span<{
  format?: Formats;
  status?: Statuses;
  element?: HTMLTextElement;
}>`
  font: 400 0.875rem / 1.375rem ${fontFamily};
  letter-spacing: 0.0125rem;
  color: ${color};
  ${antialias};
`;

function fontFamily({ theme }) {
  return (
    theme?.typography?.fontFamily ||
    `'Helvetica Neue', Helvetica, Arial,
  sans-serif`
  );
}

function color({ format, status, theme }) {
  return theme.formats[status || format];
}
