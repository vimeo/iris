import styled, { keyframes } from 'styled-components';
import { rem, rgba } from 'polished';

import { Props } from './Panel.types';

import { blue, white } from '../../color';
import { core } from '../../tokens';

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
  z-index: 3000;
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

const DRAG_AREA_WIDTH = 20;

export const DragEdge = styled.span<{ attach: Props['attach'] }>`
  display: flex;
  justify-content: center;
  top: 0;
  width: ${rem(DRAG_AREA_WIDTH)};
  height: 100%;
  position: absolute;
  ${(p) => `${side(p.attach)}: ${rem(-DRAG_AREA_WIDTH / 2)}`};
  cursor: col-resize;

  &:hover,
  &:active {
    span {
      background-color: ${blue(500)};
      ${core.edge(500)};
    }
  }
`;

export const DragHighlight = styled.span`
  height: 100%;
  width: ${rem(2)};
  background-color: transparent;
  border-color: transparent;
  transition-property: background-color, box-shadow, border-color;
  transition-duration: 200ms;
  transition-delay: 150ms;
`;
