import React, { SFC } from 'react';
import styled, { css } from 'styled-components';
import { rem, rgba, darken } from 'polished';
import * as COLORS from '../Color/Color';
import { CardSettings } from './CardSettings';

export interface CardProps {
  /**
   * Set to `true` to when using an empty loading state for the card
   */
  isLoading?: boolean;
  /**
   * Selection checkbox state should be controlled with this prop. Box is checked if set to `true`
   */
  isSelected?: boolean;
  /**
   * Most cards should have a hover state, but if none is desired, set to true.
   */
  noHoverState?: boolean;
}

const boxShadow = {
  inactive: `0 0 ${rem(8)} 0 rgba(0,0,0,0.10)`,
  hover: `${rgba(0, 0, 0, 0.16667)} 0 0.5rem 1rem -0.5rem,
  ${rgba(0, 0, 0, 0.3334)} 0 0 0.25rem -0.0625rem`,
  selected: `0 0 0 ${rem(3)} ${COLORS.VimeoBlue}`,
};

const getBoxShadow = props => {
  if (props.isLoading) {
    return 'none';
  }
  return props.isSelected ? boxShadow.selected : boxShadow.inactive;
};

const CardStyled = styled.div<CardProps>`
  position: relative;
  background: ${props =>
    props.isLoading ? COLORS.Paste : COLORS.White};
  border: ${rem(1)} solid
    ${props =>
      props.isSelected ? COLORS.VimeoBlueDarkened : COLORS.Plaster};
  border-radius: ${rem(CardSettings.borderRadius)};
  width: 100%;
  transform: scale(1) translate3d(0, 0, 0);
  transition: border 170ms ease-in-out;

  &:after {
    display: block;
    position: absolute;
    content: '';
    width: 100%;
    padding-bottom: calc(100% + ${rem(2)});
    border-radius: ${rem(CardSettings.borderRadius)};
    box-shadow: ${getBoxShadow};
    transition: box-shadow 120ms ease-in-out,
      transform 120ms ease-in-out, opacity 120ms ease-in-out;
    pointer-events: none;
  }

  ${props =>
    !props.isLoading &&
    !props.isSelected &&
    css`
      &:hover {
        border: ${rem(1)} solid ${darken(0.1, COLORS.Plaster)};
        &:after {
          box-shadow: ${boxShadow.hover};
        }
      }
    `};
`;

export const Card: SFC<CardProps> = ({ ...props }) => (
  <CardStyled {...props} />
);
