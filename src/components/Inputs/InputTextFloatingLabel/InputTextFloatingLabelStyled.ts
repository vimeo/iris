import styled from 'styled-components';
import { rem } from 'polished';
import { COLORS } from '../../../legacy';
import { css } from 'styled-components';
import { getInputBaseStyles } from '../InputText/InputHelpers';

export const Wrapper = styled.div<{
  format: 'negative' | 'positive' | 'neutral';
  disabled?: boolean;
  onClick: () => void;
}>`
  ${getInputBaseStyles};
  padding: 0 0.375rem;
  ${props => props.format !== 'neutral' && 'padding-left: 2.4375rem'};
  min-height: ${rem(52)};
  font-size: ${rem(16)};
  transition: all 100ms ease;
  ${props => props.disabled && `background-color: ${COLORS.Paste}`}
`;

export const Label = styled.label<{
  isActive: boolean;
  theme: 'dark' | 'default';
  isPasswordField: boolean;
}>`
  display: block;
  overflow: hidden;
  width: 100%;
  margin: 0;
  padding: 0 ${rem(8)};
  color: ${COLORS.RegentGray};

  transition: all 100ms ease;
  transform: translateY(${rem(16)});
  white-space: nowrap;
  letter-spacing: ${rem(0.4)};
  text-overflow: ellipsis;

  ${props =>
    props.isActive &&
    css`
      overflow: visible;
      padding: ${rem(6)} ${rem(8)} 0;
      font-size: ${rem(13)};
      font-weight: 500;
      transform: translateY(0);
      white-space: inherit;
      text-overflow: inherit;
    `}
`;

export const InputStyled = styled.input<{
  isActive: boolean;
}>`
        overflow: hidden;
        width: 100%;
        height: ${rem(1)};
        margin: 0;
        padding: 0;
        font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
        font-size: ${rem(16)};

        opacity: 0.1;
        border: 0;
        outline: 0;
        background: transparent;
        box-shadow: none;
        transition: height 100ms ease, padding 100ms ease, opacity 50ms ease;

        color: ${props =>
          props.theme === 'dark'
            ? COLORS.Porcelain
            : COLORS.AstroGranite};

        &:placeholder {
            font-size: ${rem(16)};
            color: ${COLORS.SoutherlySky};
        }

        ${props =>
          props.isActive &&
          css`
            height: ${rem(28)};
            padding: ${rem(4)} ${rem(8)} ${rem(8)};
            opacity: 1;
            transition: height 100ms ease, padding 100ms ease,
              opacity 200ms ease 150ms;
            width: calc(100% - 2.625rem);
            padding-right: ${rem(28)};
          `};
    }
`;

export const ActionButton = styled.div`
  position: absolute;
  top: 0.125rem;
  right: 0.125rem;
  width: 3rem;
  height: 3rem;
`;

export const ToggleButton = styled.button`
  width: 3rem;
  height: 3rem;
  padding-top: ${rem(4)};
  border: 0;
  background: transparent;

  svg {
    width: 1.5rem;
    height: 1.5rem;

    * {
      fill: ${COLORS.RegentGray};
    }
  }

  &:hover {
    cursor: pointer;
    svg * {
      fill: ${COLORS.AstroGranite};
    }
  }

  &:active {
    transform: scale(0.9);
  }
`;
