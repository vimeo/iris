import {
  ReactElement,
  FunctionComponent,
  InputHTMLAttributes,
} from 'react';
import styled, { css } from 'styled-components';
import { rgba, rem } from 'polished';

import { blue, white } from '../../color';
import { Statuses } from '../../themes';

const isDev = process?.env?.NODE_ENV === 'development';

export function inputColors({ theme, disabled = false, format }) {
  if (!format || !theme.formats[format]) format = 'basic';

  const color = theme.formats[format];
  const opacity = format === 'basic' ? 0 : 0.4;

  return css`
    color: ${theme.content.color};
    background-color: ${theme.content.background};
    border: 1px solid ${rgba(color, 0.25 + opacity)};
    transition: 120ms ease-in-out;

    &:hover {
      border: 1px solid ${rgba(color, 0.5 + opacity)};
    }

    ${!disabled &&
    css`
      &:hover {
        border: 1px solid ${rgba(color, 0.5 + opacity)};
      }
    `}

    ${disabled &&
    css`
      background-color: ${theme.content.disabled};
      border-color: ${rgba(color, 0.1 + opacity)};
      pointer-events: none;
    `}
  `;
}

const sizes = {
  xxs: 0.5,
  xs: 0.75,
  sm: 0.75,
  md: 1,
  lg: 1.5,
  xl: 1.75,
  xxl: 2,
};

const paddings = {
  xxs: 0.75,
  xs: 0.875,
  sm: 1.25,
  md: 1.375,
  lg: 1.5,
  xl: 2,
  xxl: 2.5,
};

// const sizes = {
//   xs: 1.625,
//   sm: 2,
//   md: 2.375,
//   lg: 3,
//   xl: 3.75,
// };

export function inputShape({
  inputSize,
  floating,
  variant = null,
  pill = false,
}) {
  const variantPadding = variant === 'underline' ? 2.5 : 1;
  const padding = (paddings[inputSize] / 2 - 0.175) / variantPadding;

  return css`
    border-radius: ${pill ? '2rem' : '0.25rem'};
    padding: ${padding}rem;
    width: 100%;
    margin: 0;
    font-size: ${sizes[inputSize]}rem;
    outline: none;
    ${inputVariant};

    ${floating &&
    css`
      padding-top: ${padding * 3}rem;
    `};
  `;
}

const underline = css`
  border-radius: 0;
  border-top-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
`;

function inputVariant({ variant = null }) {
  return (
    variant === 'underline' &&
    css`
      ${underline};

      &:hover {
        ${underline};
      }
    `
  );
}

export const SquareInput = (size) => css`
  width: ${rem(size)};
  height: ${rem(size)};
  border-width: ${rem(1)};
  border-style: solid;
  border-radius: ${rem(2)};
`;

export const RoundInput = (size) => css`
  ${SquareInput(size)};
  border-radius: 50%;
`;

export const ToggleInput = (size) => css`
  ${SquareInput(size)};
  width: ${rem(size * 2)};
  border-radius: 3rem;
`;

export const FauxInput = css`
  display: block;
  position: absolute;
  z-index: 3;
  top: 0;
  left: 0;
`;

export const FauxMark = (type, mirror) =>
  css`
    pointer-events: none;
    ${fauxPositioning(mirror)};

    ${type === 'toggle' &&
    css`
      background: ${({ theme }) =>
        theme.name === 'dark'
          ? theme.content.background
          : theme.formats.alternative};
    `};

    &:after {
      content: '';
      display: block;
      background: ${blue(500)};
      opacity: 0;
      transition: 200ms ease-in-out;
      transform: scale(0);

      ${type === 'toggle' &&
      css`
        background: ${white};
        opacity: 1;
        transition: 120ms ease-in-out;
        transform: scale(1);
        width: 50%;
      `};
    }
  `;

function fauxPositioning(mirror) {
  return css`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    ${mirror ? 'right: 0' : 'left: 0'};
  `;
}

export const Hidden = css`
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 0;
  outline: 0;
  opacity: 0;
  appearance: none;
`;

function formatStyles({ theme, format = 'basic' }) {
  // const { color } = readTheme({ format, ...props });
  const color = theme.formats[format];

  return css`
    color: ${color};
    letter-spacing: 0.01rem;
  `;
}

interface LabelProps {
  disabled?: boolean;
  fauxMark?: string;
  for?: string;
  format?: Statuses;
  htmlFor?: string;
  type: string;
  size: string;
  mirror?: boolean;
}

export const Label = styled.label<LabelProps>`
  display: inline-flex;
  line-height: 1.25rem;
  font-size: 0.875rem;
  padding: 0.5rem;
  width: 100%;

  ${typePadding};
  ${formatStyles};

  ${(p) =>
    !p.disabled
      ? css`
          cursor: pointer;

          &:hover ~ ${p.fauxMark} {
            border: 1px solid
              ${({ theme }) => rgba(theme.content.color, 0.5)};
          }
        `
      : css`
          cursor: not-allowed;
        `};
`;

const paddingSizes = {
  sm: 12,
  md: 14,
  lg: 18,
  xl: 24,
};

function typePadding({ children = null, size, type, mirror = null }) {
  if (!children) return;

  switch (type) {
    case 'toggle':
      return mirror
        ? { paddingRight: paddingSizes[size] * 2 + 20 }
        : { paddingLeft: paddingSizes[size] * 2 + 20 };
    default:
      return mirror
        ? { paddingRight: paddingSizes[size] * 1.5 + 16 }
        : { paddingLeft: paddingSizes[size] * 1.5 + 16 };
  }
}

export type MarkInputElement = ReactElement<
  InputHTMLAttributes<HTMLInputElement>,
  FunctionComponent
>;

function compareNames(string, comparison) {
  return string?.toLowerCase().includes(comparison);
}

function compareMetas(inputType: string) {
  return ({ type: { displayName, $$iris } }: any) =>
    compareNames(displayName, inputType) ||
    compareNames($$iris?.component, inputType);
}

export function validate(
  children: MarkInputElement[],
  type: 'checkbox' | 'radio' | 'toggle'
) {
  const Name = type.charAt(0).toUpperCase() + type.slice(1);
  const valid = children.every(compareMetas(type));

  if (!valid && isDev) {
    console.warn(
      `<${Name}Set /> children must be <${Name} />.`,
      children
    );
  }

  return valid;
}
