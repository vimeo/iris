import styled from 'styled-components';
import { rem } from 'polished';

import { HTMLTextElement } from './Text.types';

import { antialias } from '../typography';
import { Statuses, Formats } from '../../themes';
import { core } from '../../tokens';

export const Text = styled.span<{
  format?: Formats;
  status?: Statuses;
  element?: HTMLTextElement;
  size?: number;
}>`
  display: inline;
  font-size: ${(p) => rem(core.typography.size(p.size) as number)};
  letter-spacing: 0.0125rem;
  line-height: 1.25;
  ${antialias};
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
  letter-spacing: 0.0125rem;
  font-size: ${(p) => rem(core.typography.size(p.size) as number)};
  color: ${color};
  ${antialias};
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
