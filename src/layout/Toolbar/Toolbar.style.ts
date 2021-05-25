import styled, { css } from 'styled-components';

import { core } from '../../tokens';

export const ToolbarStyled = styled.div<any>`
  position: relative;
  z-index: 1500;
  width: 4.5rem;
  height: 100%;
  padding: 0.75rem;
  transition: all 90ms ease-in-out, width 150ms ease-in-out,
    background-color 0ms;
  display: flex;
  flex-direction: column;

  background: ${core.color.background(800)};
  color: ${core.color.text(300)};
  ${core.edge(400)};
  box-shadow: none;
  border-${(p) => p.attach}: none;
  
  svg {
    padding: 0.25rem;

    > path,
    > rect,
    g > path {
      fill: ${core.color.text(300)};
    }

    g > rect {
      stroke: ${core.color.text(300)};
    }
  }
`;

export const PanelStyled = styled.div<any>`
  position: absolute;
  z-index: 1400;
  height: 100%;

  top: 0;
  width: 18rem;
  padding: 1rem;

  transition: transform 180ms ease-in-out;
  background: ${core.color.background(800)};
  color: ${core.color.text(300)};
  ${core.edge(400)};

  ${attach};
  transform: ${transform};
`;

function attach({ attach }) {
  const left = attach === 'left' ? '4.5rem' : '1px';

  return css`
    left: ${left};
    border-${attach}: none;
    border-${attach}: 0;
  `;
}

function transform({ attach, visible }) {
  if (attach === 'left')
    return visible ? 'translateX(0rem)' : 'translateX(-18rem)';

  if (attach === 'right')
    return visible ? 'translateX(-18rem)' : 'translateX(0rem)';
}
