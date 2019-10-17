import React, {
  ReactElement,
  FunctionComponent,
  InputHTMLAttributes,
} from 'react';
import styled, { css } from 'styled-components';

import { blue } from '../../color';
import { rgba, rem } from 'polished';

export function inputColors({ theme, disabled = false }) {
  return css`
    color: ${theme.content.color};
    background-color: ${theme.background};
    border: 1px solid ${rgba(theme.content.color, 0.25)};

    &:hover {
      border: 1px solid ${rgba(theme.content.color, 0.5)};
    }

    ${!disabled &&
      css`
        &:hover {
          border: 1px solid ${rgba(theme.content.color, 0.5)};
        }
      `}

    ${disabled &&
      css`
        background-color: ${theme.disabled};
        border-color: ${rgba(theme.content.color, 0.1)};
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

export function inputShape({ inputSize, floating }) {
  const padding = paddings[inputSize] / 2 - 0.175;

  return css`
    border-radius: 0.25rem;
    padding: ${padding}rem;
    width: 100%;
    font-size: ${sizes[inputSize]}rem;
    outline: none;

    ${floating &&
      css`
        padding-top: ${padding * 3}rem;
      `};
  `;
}

export const SquareInput = size => css`
  width: ${rem(size)};
  height: ${rem(size)};
  border-width: ${rem(1)};
  border-style: solid;
  border-radius: ${rem(2)};
`;

export const RoundInput = size => css`
  ${SquareInput(size)};
  border-radius: 50%;
`;

export const ToggleInput = size => css`
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

export const FauxMark = type =>
  css`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;

    ${type === 'toggle' &&
      css`
        background: ${({ theme }) => theme.formats.alternative};
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
          background: ${({ theme }) => theme.content.background};
          opacity: 1;
          transition: 120ms ease-in-out;
          transform: scale(1);
          width: 50%;
        `};
    }
  `;

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

export const HiddenMark = styled(({ type, ...props }) => (
  <input type={type === 'toggle' ? 'checkbox' : type} {...props} />
))`
  ${Hidden}

   &:checked ~ ${({ fauxMark }) => fauxMark} {
    border: 1px solid ${({ theme }) =>
      rgba(theme.content.color, 0.75)};

     &:after {
      opacity: 1;
      transform: scale(1);

       ${({ type }) =>
         type === 'toggle' &&
         css`
           transform: scale(1) translateX(calc(100% + 4px));
         `}
    }
  }
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
  format?: 'positive' | 'negative';
  htmlFor?: string;
  type: string;
  size: string;
}

export const Label = styled.label<LabelProps>`
  display: inline-flex;
  line-height: 1.25rem;
  font-size: 0.875rem;
  padding: 1rem 1rem 1rem 2rem;

  ${typePadding};
  ${formatStyles};

  ${p =>
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

function typePadding({ size, type }) {
  switch (type) {
    case 'toggle':
      return { paddingLeft: paddingSizes[size] * 2 + 16 };
    default:
      return { paddingLeft: paddingSizes[size] * 1.5 + 16 };
  }
}

export type MarkInputElement = ReactElement<
  InputHTMLAttributes<HTMLInputElement>,
  FunctionComponent
>;

export function validate(
  children: MarkInputElement[],
  type: 'checkbox' | 'radio' | 'toggle',
) {
  const Name = type.charAt(0).toUpperCase() + type.slice(1);
  const valid = children.every(({ type: { displayName } }) =>
    displayName.toLowerCase().includes(type),
  );

  if (!valid) {
    console.warn(
      `<${Name}Set /> children must be <${Name} />.`,
      children,
    );
  }

  return valid;
}
