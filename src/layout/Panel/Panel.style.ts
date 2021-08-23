import styled, { css } from 'styled-components';
import { rgba } from 'polished';

import { blue, white } from '../../color';

export const PanelStyled = styled.div<any>`
  background: ${(p) => p.theme.content.background};
  min-width: 16rem;
  z-index: 3000;
  height: 100vh;
  width: 16rem;
  position: absolute;
  top: 0;
  transition: width 120ms ease-in-out;
  ${edge}
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
  height: 100%;
  background: ${rgba(blue(500), 0.75)};
  transition: background 120ms ease-in-out, height 180ms ease-in;
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
    left: 50%;
    height: 0%;
    top: 50%;
    width: 0.2rem;
    background: ${rgba(blue(500), 0)};
    transition: background 180ms ease-in-out, height 180ms ease-in;
    transform: translateY(-50%);

    ${(p) => p.dragging && dragging};
  }

  &:hover::before {
    ${dragging}
  }
`;
