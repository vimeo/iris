import styled, { keyframes, css } from 'styled-components';
import { rem } from 'polished';

import { Props } from './Modal.types';

import { Button } from '../../components/buttons/Button/Button';

const fadeIn = keyframes`
  0% {
    backface-visibility: hidden;
    will-change: transform, opacity;
    transform-style: preserve-3d;
    transform: translateY(2rem) scale(0.99);
    opacity: 0;
  }

  100% {
    backface-visibility: unset;
    will-change: unset;
    transform-style: unset;
    transform: translateY(0) scale(1) rotate(0deg);
    opacity: 1;
  }
`;

export const Modal = styled.div<Props>`
  box-shadow: 0 0.5rem 0.5rem 0 rgba(0, 0, 0, 0.2);
  border-radius: 0.25rem;
  z-index: 2000;
  ${modalSize};
  animation: ${fadeIn} 200ms ease-in-out;
`;

const sizes = {
  sm: 340,
  md: 440,
  lg: 660,
};

function modalSize({ size = 'md' }) {
  return css`
    max-width: ${rem(sizes[size])};
  `;
}

export const Dismiss = styled(Button)`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
`;
