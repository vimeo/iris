import styled, { css } from 'styled-components';

import {
  FauxMark,
  RoundInput,
  SquareInput,
  ToggleInput,
  inputColors,
  inputShape,
  Hidden,
} from '../Shared';

import { blue } from '../../../color';
import { IrisInputProps } from '../../../utils';
import { Formats, Statuses } from '../../../themes';
import { rgba } from 'polished';

export const InputStyled = styled.input<
  IrisInputProps & {
    inputSize: string;
    floating: boolean;
    disabled?: boolean;
    defaultValue?: any;
    value?: any;
    format: Formats | Statuses;
  }
>`
  ${inputColors};
  ${inputShape};
`;

export const radii = {
  radio: 50,
  checkbox: 4,
  toggle: 30,
};

export const Faux = styled.div<any>`
  ${inputColors};
  ${({ type, mirror }) => FauxMark(type, mirror)};
  ${FauxType};
`;

export const HiddenMark = styled.input.attrs(({ type }) => ({
  type: type === 'toggle' ? 'checkbox' : type,
  toggle: type === 'toggle',
}))`
  ${Hidden};
  ${fauxMarkChecked};
  ${fauxToggleChecked};
`;

function fauxMarkChecked({ theme }) {
  return css`
    &:checked ~ ${Faux} {
      border: 1px solid ${rgba(theme.content.color, 0.75)};

      &:after {
        opacity: 1;
        transform: scale(1);
      }
    }
  `;
}

function fauxToggleChecked({ toggle, theme }) {
  return (
    toggle &&
    css`
      &:checked ~ ${Faux} {
        background: ${theme.formats.primary};
        border: 1px solid ${theme.formats.primary};

        &::after {
          transform: scale(1) translateX(calc(100% + 4px));
        }
      }
    `
  );
}

const sizes = {
  sm: 16,
  md: 20,
  lg: 24,
  xl: 28,
};

export function FauxType({ type, size }) {
  switch (type) {
    case 'radio':
      return css`
        ${RoundInput(sizes[size])};
        &:after {
          width: calc(100% - 0.5rem);
          height: calc(100% - 0.5rem);
          margin: 0.25rem;
          border-radius: 50%;
        }
      `;
    case 'checkbox':
      return css`
        ${SquareInput(sizes[size])};
        &:after {
          width: 100%;
          height: 100%;
          border: 1px solid ${blue(500)};
          background-image: ${checkmark};
        }
      `;
    case 'toggle':
      return css`
        ${ToggleInput(sizes[size])};
        &:after {
          width: calc(50% - 0.25rem);
          height: calc(100% - 0.25rem);
          margin: 0.125rem;
          border-radius: 50%;
        }
      `;
  }
}

export function checkmark({ indeterminate }) {
  return indeterminate
    ? `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cpath fill='%23ffffff' d='M4 9h12a1 1 0 0 1 1 1 1 1 0 0 1-1 1H4a1 1 0 0 1-1-1 1 1 0 0 1 1-1z'/%3E%3C/svg%3E")`
    : `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 18 18'%3E%3Cpath fill='%23ffffff' d='M6.667 14.39L1.306 9.22l1.388-1.44 3.973 3.83 8.639-8.33 1.388 1.44z'/%3E%3C/svg%3E")`;
}

export const nullStyle = {
  margin: null,
  display: null,
};
