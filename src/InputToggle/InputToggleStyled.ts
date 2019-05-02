import { InputLabelInline } from '../InputLabelInline/InputLabelInline';
import { rem } from 'polished';
import styled from 'styled-components';
import { css } from 'styled-components';
import * as COLORS from '../Color/Color';
import { rgba } from 'polished';
import { WrapperStyles, InlineStyles } from '../Inputs/InlineInput';

export const ToggleWrapper = styled.div<{
  disabled: boolean;
  size: 'md' | 'lg';
}>`
  ${WrapperStyles}
  ${props => props.disabled && 'opacity: 0.5 '};

  ${props =>
    props.size === 'md'
      ? css`
          padding-left: 2rem;
        `
      : css`
          padding-left: ${rem(44)};
        `};
`;

export const Input = styled.input`
  ${InlineStyles};
  top: ${rem(5)};
  left: ${rem(5)};
`;

export const ToggleLabel = styled(InputLabelInline)<{
  theme: 'dark' | 'default';
}>`
  min-height: 1.125rem;
  color: ${props =>
    props.theme === 'dark' ? COLORS.White : COLORS.AstroGranite};
`;

export const overlaySizes = ({ size = 'md' }) =>
  ({
    md: css`
      top: ${rem(2)};
      width: ${rem(24)};
      padding: ${rem(7)} 0;

      &::before {
        padding: ${rem(5)};
      }
    `,
    lg: css`
      width: ${rem(32)};
      padding: ${rem(9)} 0;

      &::before {
        padding: ${rem(6)};
      }
    `,
  }[size]);

const STATES = [':hover', ':hover:checked', ':checked', ':disabled'];

const overlayBG = state => ({ theme }) =>
  ({
    ':hover:checked': COLORS.VimeoBlueDarkened,
    ':disabled': COLORS.SoutherlySky,
    ':checked': COLORS.VimeoBlue,
    ':hover':
      theme === 'dark' ? COLORS.SoutherlySky : COLORS.AstroGranite,
  }[state] || null);

const overlayCursor = state =>
  ({
    ':hover': 'pointer',
    ':disabled': 'not-allowed !important',
  }[state] || null);

export const ToggleOverlay = styled.div<{
  size: 'md' | 'lg';
  theme: 'dark' | 'default';
}>`
  display: inline-block;
  position: absolute;
  z-index: 3;
  top: 0;
  left: 0;
  border-radius: ${rem(13)};
  outline: none;
  background-color: ${props =>
    props.theme === 'dark'
      ? `${rgba(COLORS.White, 0.2)}`
      : COLORS.RegentGray};
  transition: all 200ms cubic-bezier(0.17, 0.67, 0.53, 1);
  vertical-align: middle;
  appearance: none;
  ${overlaySizes};

  &::before {
    content: '';
    display: block;
    position: absolute;
    top: 50%;
    left: ${rem(2)};
    border-radius: 50%;
    background-color: ${COLORS.White};
    transition: all 200ms cubic-bezier(0.17, 0.67, 0.53, 1);
    transform: translateY(-50%);

    ${Input}:checked + & {
      left: 50%;
    }
  }

  ${STATES.map(
    state => css`
            ${Input}${state} + & {
                background-color: ${overlayBG(state)};
                cursor: ${overlayCursor(state)};
            }
        `,
  )};
`;
