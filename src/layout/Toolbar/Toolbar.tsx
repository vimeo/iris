import React, { cloneElement, useEffect, useState } from 'react';
import styled, { css, keyframes } from 'styled-components';

import { Item, Break } from './Toolbar.minors';

import { ChevronRight } from '../../icons';
import { rgba } from 'polished';

Toolbar.Item = Item;
Toolbar.Break = Break;

export function Toolbar({ children, active, ...props }) {
  const [collapsed, collapsedSet] = useState(true);

  const panel = children
    .flat()
    .filter((child) => child.props.label === active)[0]?.props
    ?.children;

  children = children.map((child) =>
    cloneElement(child, {
      collapsed: panel || collapsed,
      // collapsed
    })
  );

  return (
    <div style={{ position: 'relative' }}>
      <ToolbarStyled collapsed={panel || collapsed} {...props}>
        {/* <ToolbarStyled collapsed={collapsed} {...props}> */}
        {children}
        <Expander
          collapsed={collapsed}
          visible={!panel}
          onClick={() => {
            collapsedSet((collapsed) => !collapsed);
            window.getSelection().empty();
          }}
        />
      </ToolbarStyled>
      <PanelStyled
        visible={!collapsed || panel}
        // style={{ zIndex: panel ? 2000 : 1000 }}
      >
        <PanelContent>{panel}</PanelContent>
      </PanelStyled>
    </div>
  );
}

const ToolbarStyled = styled.div<any>`
  position: relative;
  z-index: 1500;
  /* z-index: 1300; */
  width: ${(p) => (p.collapsed ? '4.5rem' : '23rem')};
  height: 100%;
  background: ${(p) => p.theme.content.background};
  padding: 0.75rem;
  transition: all 90ms ease-in-out, width 150ms ease-in-out,
    background-color 0ms;
  color: ${(p) => p.theme.content.color};
  border: 1px solid ${(p) => rgba(p.theme.content.color, 0.25)};
  border-left: none;
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

const fadeIn = keyframes`
  0% { 
    opacity: 0; 
  }

  100% {
    opacity: 1; 
  }
`;

const PanelContent = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  padding: 1rem;

  > * > * {
    animation: ${fadeIn} 130ms ease-in-out 60ms both;
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

  /* background-color: ${(p) =>
    p.visible ? 'pink' : 'transparent'}; */
  transition: transform 180ms ease-in-out 120ms;
  background: ${(p) => p.theme.content.background};
  border: 1px solid ${(p) => rgba(p.theme.content.color, 0.25)};
  border-left: none;

  transform: ${(p) =>
    p.visible ? 'translateX(0rem)' : 'translateX(-20rem)'};
`;

const Expander = styled(ChevronRight)<any>`
  margin-top: auto;
  cursor: pointer;
  width: 3rem;
  transition: 120ms ease-in-out;
  transform: ${(p) => (p.collapsed ? 'rotate(180deg)' : 'rotate(0)')};

  opacity: 0.334;
  pointer-events: none;

  ${(p) =>
    p.visible &&
    css`
      opacity: 1;
      pointer-events: auto;
    `}
`;
