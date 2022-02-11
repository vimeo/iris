import styled, { keyframes } from 'styled-components';
import { rgba, rem } from 'polished';

import { Button } from '../../components/Button/Button';
import { black } from '../../color';

const poke = keyframes`
  0%, 40%, 50%, 60% {
    transform: translateX(0);
  }
  45%, 55% {
    transform: translateX(2px);
  }
`;

export const FloatingButton = styled(Button)`
  border-radius: 2rem;
  box-shadow: 0 ${rem(3)} ${rem(6)} 0 ${rgba(black, 0.15)};
  padding: 0 1.5rem;
  border: 1px solid ${rgba(100, 100, 100, 0)} !important;
  transition: 200ms ease-in-out;

  &:active {
    transform: translateY(0) scale(0.98);
    border: 1px solid ${rgba(100, 100, 100, 0)} !important;

    svg {
      animation: none;
    }
  }

  &:hover:not(:active) {
    transform: translateY(-1px) scale(1.01);
    border: 1px solid ${rgba(100, 100, 100, 0.09)} !important;

    svg {
      animation: ${poke} 3500ms ease-in-out infinite;
    }
  }
`;
