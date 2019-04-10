import React from 'react';
import styled, { css } from 'styled-components';
import { rem, rgba, darken } from 'polished';
import { IrisComponent } from '../Utils';
import {
  VimeoBlue,
  White,
  Paste,
  VimeoBlueDarkened,
  Plaster,
} from '../Color/Color';

interface Props {
  isLoading?: boolean;
  isSelected?: boolean;
  noHoverState?: boolean;
}

export const Card: IrisComponent<Props> = props => (
  <CardStyled {...props} />
);

const CardStyled = styled.div<Props>`
  position: relative;
  background: ${props => (props.isLoading ? Paste : White)};
  border: ${rem(1)} solid
    ${props => (props.isSelected ? VimeoBlueDarkened : Plaster)};
  border-radius: ${rem(3)};
  width: 100%;
  transform: scale(1) translate3d(0, 0, 0);
  transition: border 170ms ease-in-out;
  ${hover};

  &:after {
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    padding-bottom: calc(100% + ${rem(2)});
    border-radius: ${rem(3)};
    transition: box-shadow 120ms ease-in-out,
      transform 120ms ease-in-out, opacity 120ms ease-in-out;
    pointer-events: none;
    ${boxShadow};
  }
`;

function boxShadow(props) {
  return (
    !props.isLoading &&
    (props.isSelected
      ? css`
          box-shadow: 0 0 0 ${rem(3)} ${VimeoBlue};
        `
      : css`
          box-shadow: 0 0 ${rem(8)} 0 rgba(0, 0, 0, 0.1);
        `)
  );
}

function hover(props) {
  return (
    !props.isLoading &&
    !props.isSelected &&
    css`
      &:hover {
        border: ${rem(1)} solid ${darken(0.1, Plaster)};
        &:after {
          box-shadow: ${rgba(0, 0, 0, 0.16667)} 0 0.5rem 1rem -0.5rem,
            ${rgba(0, 0, 0, 0.3334)} 0 0 0.25rem -0.0625rem;
        }
      }
    `
  );
}
