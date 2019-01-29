import React from 'react';
import styled, { css } from 'styled-components';
import { CircularButtonStyledProps } from './CircularButtonTypes';
import { CircularButtonElement } from './CircularButtonElement';
import { rem } from 'polished';
import * as COLORS from '../Color/Color';
import { TRANSITIONS } from '../Legacy/TRANSITIONS';
import { ButtonColors } from '../Button/ButtonColors';
import { Omit } from '../Utils/Omit';

const buttonSizes = {
  sm: 22,
  md: 32,
  lg: 40,
};

const getFormatCss = (
  props: CircularButtonStyledProps &
    Omit<React.HTMLProps<HTMLButtonElement>, 'size'>,
) => {
  switch (props.format) {
    case 'lightDashed':
      return css`
        color: ${COLORS.SoutherlySky};
        background-color: transparent;
        border: ${rem(1)} dashed ${COLORS.SoutherlySky};

        &:hover {
          color: ${COLORS.White};
          background-color: transparent;
          border-color: ${COLORS.White};
        }
      `;

    case 'secondary':
      return css`
        color: ${COLORS.White};
        background-color: ${COLORS.RegentGray};

        &:hover {
          background-color: ${COLORS.AstroGranite};
        }

        &:active {
          background-color: ${COLORS.RavenImperial};
        }
      `;

    case 'secondaryDashed':
      return css`
        color: ${COLORS.RegentGray};
        background-color: transparent;
        border: ${rem(1)} dashed ${COLORS.RegentGray};

        &:hover {
          color: ${COLORS.AstroGranite};
          background-color: transparent;
          border-color: ${COLORS.AstroGranite};
        }
      `;

    default:
      // default is primary
      return css`
        color: ${COLORS.White};
        background-color: ${ButtonColors.PrimaryBackground};

        &:hover {
          background-color: ${ButtonColors.PrimaryBackgroundHover};
        }

        &:active {
          background-color: ${ButtonColors.PrimaryBackgroundActive};
        }
      `;
  }
};

const maybeAutoMargins = (props: CircularButtonStyledProps) =>
  props.autoMarginsHorizontal
    ? css`
        margin-right: 0.5rem;

        &:last-of-type {
          margin-left: 0;
        }
      `
    : '';

export const CircularButtonStyled = styled<
  CircularButtonStyledProps,
  any
>(({ icon, autoMarginsHorizontal, ...rest }) => (
  <CircularButtonElement icon={icon} {...rest} />
))`
  display: inline-block;
  overflow: hidden;

  position: relative;
  border: 0;
  border-radius: 50%;

  transition: all ${TRANSITIONS.base};

  appearance: none;

  width: ${props => rem(buttonSizes[props.size])};
  height: ${props => rem(buttonSizes[props.size])};

  &:hover {
    cursor: pointer;
  }

  svg {
    display: block;
    width: ${props => (props.size === 'sm' ? '.75rem' : '1rem')};
    height: ${props => (props.size === 'sm' ? '.75rem' : '1rem')};

    position: absolute;
    top: 50%;
    left: 50%;

    transform: translateY(-50%) translateX(-50%);
  }

  svg * {
    fill: currentColor;
  }

  ${maybeAutoMargins};
  ${getFormatCss};
`;
