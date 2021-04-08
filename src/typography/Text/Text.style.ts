import styled, { css } from 'styled-components';

import { HTMLTextElement } from './Text.types';

import { antialias } from '../typography';
import { Statuses, Formats } from '../../themes';

export const baseTextStyle = css`
  font: 400 0.875rem / 1.375rem ${fontFamily};
  letter-spacing: 0.0125rem;
  color: ${color};
  ${antialias};
`;

export const Text = styled.span<{
  format?: Formats;
  status?: Statuses;
  element?: HTMLTextElement;
}>`
  display: inline;
  ${baseTextStyle};
`;

export const Input = styled.input`
  background: transparent;
  display: inline;
  position: absolute;
  top: 0;
  left: 0;
  padding: 0;
  margin: 0;
  outline: 0;
  border: 0;
  ${baseTextStyle};
`;

export function fontFamily({ theme }) {
  return (
    theme?.typography?.fontFamily ||
    `'Helvetica Neue', Helvetica, Arial, sans-serif`
  );
}

export function color({ format, status, theme }) {
  return theme.formats[status || format];
}
