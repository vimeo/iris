import React from 'react';
import styled, { keyframes } from 'styled-components';
import { rgba, rem } from 'polished';

import { Button } from '../Button/Button';
import { ButtonFocus } from '../Button/ButtonFocus';

import { Black } from '../../../legacy';
import { ArrowRight } from '../../../icons';

export const FloatingButton = ({ children }) => (
  <ButtonStyled
    format="darkSecondary"
    icon={<ArrowRight />}
    iconLocation="afterLabel"
  >
    {children}
  </ButtonStyled>
);

const poke = keyframes`
  0%, 40%, 50%, 60% {
    transform: translateX(0);
  }
  45%, 55% {
    transform: translateX(2px);
  }
`;

const ButtonStyled = styled(Button)`
  border-radius: 2rem;
  box-shadow: 0 ${rem(3)} ${rem(6)} 0 ${rgba(Black, 0.15)};
  padding: 0 1.5rem;
  border: 1px solid ${rgba(100, 100, 100, 0)} !important;
  transition: 200ms ease-in-out;

  ${ButtonFocus} {
    border-radius: 2rem;
  }

  &:hover:not(:active) {
    transform: translateY(-1px) scale(1.01);
    border: 1px solid ${rgba(100, 100, 100, 0.09)} !important;

    svg {
      animation: ${poke} 3500ms ease-in-out infinite;
    }
  }

  &:active {
    transform: translateY(0) scale(0.98);
    border: 1px solid ${rgba(100, 100, 100, 0)} !important;

    svg {
      animation: none;
    }
  }
`;
