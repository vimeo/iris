import styled from 'styled-components';

import { Props } from './Sidebar.types';

import { core } from '../../tokens';
import { Button } from '..//Button/Button';

export const SidebarStyled = styled.div<{
  attach: Props['attach'];
}>`
  position: relative;
  z-index: 1500;
  width: 4.5rem;
  height: 100%;
  padding: 0.75rem;
  transition: all 90ms ease-in-out, width 150ms ease-in-out,
    background-color 0ms;
  display: flex;
  flex-direction: column;

  background: ${core.color.surface(800)};
  color: ${core.color.text(300)};
  border: 1px solid ${core.color.stroke};
  ${attach};
  box-shadow: none;

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

export const PanelStyled = styled.div<{
  attach: Props['attach'];
  visible: boolean;
}>`
  position: absolute;
  z-index: 1400;
  height: 100%;

  top: 0;
  width: 18rem;
  padding: 1rem;

  transition: transform 180ms ease-in-out;
  background: ${core.color.surface(800)};
  color: ${core.color.text(300)};
  transform: ${transform};
  left: ${left};
  ${core.edge(100)};
  ${attach};
`;

function left({ attach }) {
  return attach === 'left' ? '4.5rem' : '1px';
}

function attach({ attach }) {
  const side = attach.charAt(0).toUpperCase() + attach.slice(1);
  return {
    borderTop: 'none',
    borderBottom: 'none',
    [`border${side}`]: 'none',
  };
}

function transform({ attach, visible }) {
  if (attach === 'left')
    return visible ? 'translateX(0rem)' : 'translateX(-18rem)';

  if (attach === 'right')
    return visible ? 'translateX(-18rem)' : 'translateX(0rem)';
}

export const Dismiss = styled(Button)`
  position: absolute;
  top: 0.667rem;
  right: 0.667rem;
  z-index: 5000;
`;
