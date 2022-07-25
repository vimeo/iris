import styled, { css, keyframes } from 'styled-components';
import { rgba } from 'polished';

import { blue, white } from '../../color';

const hidden = keyframes`
  from {
    visibility: visible;
  }
  to {
    visibility: hidden;
  }
`;

export const PanelStyled = styled.div<any>`
  position: absolute;
  z-index: 3000;
  top: 0;
  height: 100vh;
  min-width: 16rem;
  background: ${(p) => p.theme.content.background};
  ${edge};

  width: var(--width);
  transform: var(--transform);
  transition: var(--transition);

  animation: ${(p) => !p.active && hidden};
  animation-delay: ${(p) => p.duration};
  animation-fill-mode: forwards;
`;

function edge({ theme, attach }) {
  return theme.name === 'dark'
    ? `border-${side(attach)}: 1px solid ${rgba(white, 0.25)}`
    : `box-shadow: 0 0.5rem 0.5rem 0 rgba(0, 0, 0, 0.2)`;
}

function side(attach) {
  if (attach === 'left') return 'right';
  if (attach === 'right') return 'left';
}

const dragging = css`
  background: ${rgba(blue(500), 0.75)};
  transition: background 180ms ease-in-out 180ms;
`;

export const DragEdge = styled.div<any>`
  top: 0;
  width: 2rem;
  height: 100%;
  position: absolute;
  cursor: col-resize;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    height: 100%;
    width: 0.2rem;
    background: ${rgba(blue(500), 0)};
    transition: background 180ms ease-in-out 0ms;

    ${(p) => p.dragging && dragging};
  }

  &:hover::before {
    ${dragging}
  }
`;
