import styled, { keyframes } from 'styled-components';
import { rgba } from 'polished';

import { white } from '../../color';

import { Props } from './Panel.types';

const fadeIn = ({ attach }) => keyframes`
  0% {
    transform: translateX(${attach === 'right' ? '100%' : '-100%'});
  }

  100% {
    transform: translateX(0) rotate(0deg);
  }
`;

export const PanelStyled = styled.div<{ attach: Props['attach'] }>`
  background: ${(p) => p.theme.content.background};
  min-width: 16rem;
  z-index: 2000;
  animation: ${fadeIn} 300ms ease-in-out;
  height: 100vh;
  ${edge};
`;

// This is temporary until we have a universal solution for
// theme values that do not correspond to the same CSS
// property in different themes.

function edge({ theme, attach }) {
  return theme.name === 'dark'
    ? `border-${side(attach)}: 1px solid ${rgba(white, 0.25)}`
    : `box-shadow: 0 0.5rem 0.5rem 0 rgba(0, 0, 0, 0.2)`;
}

function side(attach) {
  if (attach === 'left') return 'right';
  if (attach === 'right') return 'left';
}
