import styled, { css } from 'styled-components';
import { rem } from 'polished';
import { InputLabelInline } from '../InputLabelInline/InputLabelInline';
import {
  RegentGray,
  White,
  VimeoBlueDarkened,
  VimeoBlue,
  AstroGranite,
} from '../../color';
import { WrapperStyles, InlineStyles } from '../Inputs/InlineInput';

export const Wrapper = styled.div`
    ${WrapperStyles}
    padding-left: ${rem(32)};
 `;

function OverlayTheme({ theme }) {
  switch (theme) {
    case 'dark':
      return css`
        border-color: ${RegentGray};
        background-color: transparent;

        &:hover {
          border-color: ${White};
        }
      `;
    default:
      return css`
        border-color: ${RegentGray};
        background-color: ${White};

        &:hover {
          border-color: ${AstroGranite};
        }
      `;
  }
}

interface Props {
  theme?: 'light' | 'dark';
  indeterminate?: boolean;
}

export const Overlay = styled.span<Props>`
  display: block;
  position: absolute;
  z-index: 3;
  top: 0;
  left: 0;
  width: 1.25rem;
  height: 1.25rem;
  border-width: ${rem(1)};
  border-style: solid;
  border-radius: ${rem(2)};
  ${OverlayTheme};

  &:after {
    content: '';
    position: absolute;
    top: 0.16rem;
    left: 0.155rem;
    width: 1rem;
    height: 1rem;
    transform: scale(0);
    transition: all 200ms ease-out;
    background-repeat: no-repeat;
    background-position: 2% 2%;
    background-size: 98%;
    background-image: ${({ indeterminate }) =>
      indeterminate
        ? `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cpath fill='%23ffffff' d='M4 9h12a1 1 0 0 1 1 1 1 1 0 0 1-1 1H4a1 1 0 0 1-1-1 1 1 0 0 1 1-1z'/%3E%3C/svg%3E")`
        : `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 18 18'%3E%3Cpath fill='%23ffffff' d='M6.667 14.39L1.306 9.22l1.388-1.44 3.973 3.83 8.639-8.33 1.388 1.44z'/%3E%3C/svg%3E")`};
  }
`;

export const InputCheckboxStyled = styled<any>('input')`
    ${InlineStyles}

    &:focus + ${Overlay} {
      border-color: ${({ theme }) =>
        theme === 'dark' ? White : VimeoBlueDarkened};
    }

    &:checked {
        &:after {
            transform: scale(1);
        }

        &:before,
        &:focus:before {
            border: 0;
            background-color: ${VimeoBlue};
            box-shadow: none;
        }

        + ${Overlay} {
            border: 0;
            background: ${({ theme }) =>
              theme === 'dark' ? VimeoBlueDarkened : VimeoBlue};

            &:after {
                transform: scale(1);
            }
        }
    }
`;

export const Label = styled(InputLabelInline)<any>`
  min-height: 1.125rem;
  color: ${({ theme }) => (theme === 'dark' ? White : AstroGranite)};

  &:hover {
    ${InputCheckboxStyled}:checked + ${Overlay} {
      background: ${({ theme }) =>
        theme === 'dark' ? VimeoBlue : VimeoBlueDarkened};
    }

    ${InputCheckboxStyled}:focus + ${Overlay} {
      border-color: ${({ theme }) =>
        theme === 'dark' ? VimeoBlue : VimeoBlueDarkened};
    }
  }
`;
