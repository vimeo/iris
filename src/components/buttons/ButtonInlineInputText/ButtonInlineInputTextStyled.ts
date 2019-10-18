import styled, { css } from 'styled-components';
import { rem, size } from 'polished';

import { Props } from './ButtonInlineInputText';

import { COLORS } from '../../../legacy';
import { themes } from '../../../themes';
import { TRANSITIONS } from '../../../legacy';
import { fontFamily } from '../../../typography';

const sizes = (
  size: 'md' | 'lg' | 'xl',
  format: 'subtle' | 'neutral' | 'strong',
): number => {
  const values =
    format === 'subtle'
      ? { md: 38, lg: 46, xl: 46 }
      : { md: 40, lg: 48, xl: 48 };
  return values[size];
};

const formats = {
  strong: css`
    color: ${COLORS.White};
    border-color: ${COLORS.VimeoBlue};
    background: ${COLORS.VimeoBlue};
    svg * {
      fill: ${COLORS.White};
    }

    &:hover {
      border-color: ${COLORS.AstroGranite};
      background: ${COLORS.AstroGranite};
    }
  `,
  neutral: css`
    color: ${COLORS.White};
    border-color: ${themes.light.formats.alternative};
    background: ${themes.light.formats.alternative};

    svg * {
      fill: ${COLORS.White};
    }

    &:hover {
      border-color: ${COLORS.AstroGranite};
      background: ${COLORS.AstroGranite};
    }
  `,
  subtle: css`
    position: relative;
    top: ${rem(1)};
    right: ${rem(1)};
    color: ${COLORS.RegentGray};

    border-color: transparent;
    background: ${COLORS.White};

    svg * {
      fill: ${COLORS.RegentGray};
    }

    &:hover {
      background: ${COLORS.Plaster};
    }
  `,
};

const sizeStyles = ({ size: sizeStyle, format }: any) => css`
  height: ${rem(sizes(sizeStyle, format))};
  min-width: ${rem(sizes(sizeStyle, format))};

  svg {
    ${size(rem(sizes(sizeStyle, format) / 2))};
  }
`;

export const ButtonStyled = styled.button<Props>`
  position: relative;
  width: auto;
  margin: 0;
  border-width: ${rem(1)} ${rem(1)} ${rem(1)} 0;
  border-style: solid;
  border-radius: 0 ${rem(3)} ${rem(3)} 0;
  transition: all ${TRANSITIONS.base};
  text-align: center;
  vertical-align: middle;
  appearance: none;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-family: ${fontFamily};
  font-size: ${props => (props.size === 'md' ? rem(14) : rem(16))};

  ${sizeStyles};
  ${props => formats[props.format]};

  ${props =>
    typeof props.children === 'string' &&
    css`
      padding: ${rem(5)} ${rem(10)};
    `}

  &:active svg {
    transform: scale(0.92);
  }
`;

export const Wrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
`;
