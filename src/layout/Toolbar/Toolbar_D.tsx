import React, { cloneElement } from 'react';
import styled from 'styled-components';

import { Item, Break } from './Toolbar.minors';

Toolbar_D.Item = Item;
Toolbar_D.Break = Break;

export function Toolbar_D({ children, active, ...props }) {
  const panel = children.filter(
    (child) => child.props.label === active
  )[0]?.props?.children;

  children = children.map((child) =>
    cloneElement(child, {
      collapsed: true,
    })
  );

  return (
    <div style={{ position: 'relative' }}>
      <ToolbarStyled {...props}>{children}</ToolbarStyled>
      <PanelStyled visible={panel}>
        <div
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            padding: '1rem',
          }}
        >
          {panel}
        </div>
      </PanelStyled>
    </div>
  );
}

const ToolbarStyled = styled.div<any>`
  position: relative;
  z-index: 1500;
  width: 4.5rem;
  height: 100%;
  background: ${(p) => p.theme.content.background};
  padding: 0.75rem;
  transition: all 90ms ease-in-out, width 150ms ease-in-out,
    background-color 0ms;
  color: ${(p) => p.theme.content.color};
  border: 1px solid white;
  display: flex;
  flex-direction: column;

  svg {
    padding: 0.25rem;

    > path,
    > rect,
    g > path {
      fill: ${(p) => p.theme.content.color};
    }

    g > rect {
      stroke: ${(p) => p.theme.content.color};
    }
  }
`;

const PanelStyled = styled.div<any>`
  position: absolute;
  z-index: 1400;
  height: 100%;

  top: 0;
  left: 4.5rem;
  width: 18rem;
  padding: 0;

  transition: transform 180ms ease-in-out;
  background: ${(p) => p.theme.content.background};
  border: 1px solid white;
  border-left: 0;

  transform: ${(p) =>
    p.visible ? 'translateX(0rem)' : 'translateX(-20rem)'};
`;
