import React, { cloneElement, useState } from 'react';
import styled, { css, keyframes } from 'styled-components';
import { rem } from 'polished';
import { Story } from '@storybook/react';

import { ChevronRight, Gear } from '../../icons';
import { Header } from '../../typography';
import { black, white } from '../../color';
import { Tip } from '../../components';

export default {
  title: 'layout/Toolbar',
  component: Toolbar,
};

const Template: Story<any> = (args) => {
  const [active, activeSet] = useState('Sources');

  const onClick = (label) => () =>
    activeSet((active) => (active === label ? false : label));

  const panelContent = (
    <div style={{ padding: '4rem' }}>
      <Header>{active}</Header>
    </div>
  );

  return (
    <div style={{ display: 'flex', padding: 0, margin: '-1rem' }}>
      <Toolbar active={active}>
        <Toolbar.Item
          label="Item 1"
          onClick={onClick('Item 1')}
          icon={<Gear />}
          children={panelContent}
        />
        <Toolbar.Item
          label="Item 2"
          onClick={onClick('Item 2')}
          icon={<Gear />}
          children={panelContent}
        />
        <Toolbar.Item
          label="Item 3"
          onClick={onClick('Item 3')}
          icon={<Gear />}
          children={panelContent}
        />
        <Toolbar.Break />
        <Toolbar.Item
          label="Item 4"
          onClick={onClick('Item 4')}
          icon={<Gear />}
          children={panelContent}
        />
        <Toolbar.Item
          label="Item 5"
          onClick={onClick('Item 5')}
          icon={<Gear />}
          children={panelContent}
        />
        <Toolbar.Item
          label="Item 6"
          onClick={onClick('Item 16')}
          icon={<Gear />}
          children={panelContent}
        />
        <Toolbar.Break />
        <Toolbar.Item
          label="Item 7"
          onClick={onClick('Item 7')}
          icon={<Gear />}
          children={panelContent}
        />
      </Toolbar>
    </div>
  );
};
export const Controls = Template.bind({});
Controls.storyName = 'Toolbar';

function Toolbar({ children, active, ...props }) {
  const [collapsed, collapsedSet] = useState(true);

  const panel = children.filter(
    (child) => child.props.label === active
  )[0]?.props?.children;

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
        <div style={{ position: 'absolute' }}>{panel}</div>
      </PanelStyled>
    </div>
  );
}

const ToolbarStyled = styled.div<any>`
  position: relative;
  z-index: 1500;
  /* z-index: 1300; */
  width: ${(p) => (p.collapsed ? '4.5rem' : '21rem')};
  height: 100%;
  background: ${(p) => p.theme.content.background};
  padding: 0.75rem;
  transition: all 90ms ease-in-out, width 150ms ease-in-out,
    background-color 0ms;
  color: ${(p) => p.theme.content.color};
  border-right: 1px solid white;

  svg {
    path {
      fill: ${(p) => p.theme.content.color};
    }
  }
`;

const PanelStyled = styled.div<any>`
  position: absolute;
  z-index: 1400;
  height: 100%;
  top: 0;
  left: 4.5rem;
  width: 16rem;
  padding: 1rem;

  /* background-color: ${(p) =>
    p.visible ? 'pink' : 'transparent'}; */
  transition: transform 180ms ease-in-out 120ms;
  background: ${(p) => p.theme.content.background};
  border: 1px solid white;

  transform: ${(p) =>
    p.visible ? 'translateX(0rem)' : 'translateX(-20rem)'};
`;

const Expander = styled(ChevronRight)<any>`
  margin-top: 5rem;
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

function Item({
  children = null,
  collapsed = null,
  icon,
  label,
  panel,
  onClick,
  ...props
}) {
  return collapsed ? (
    <Tip attach="right" content={label}>
      <ItemStyled onClick={onClick} {...props}>
        {icon}
      </ItemStyled>
    </Tip>
  ) : (
    <ItemStyled onClick={onClick} {...props}>
      {icon}
      <Label style={{ opacity: panel ? 0 : 1 }}>{label}</Label>
      <Chevron style={{ marginLeft: 'auto' }} />
    </ItemStyled>
  );
}

const fadeIn = keyframes`
  0% { 
    opacity: 0; 
  }

  100% {
    opacity: 1; 
  }
`;

const Chevron = styled(ChevronRight)`
  animation: ${fadeIn} 90ms ease-in-out 120ms both;
`;

const ItemStyled = styled.div`
  width: 100%;
  padding: 0.5rem;
  cursor: pointer;
  display: flex;
  transition: 120ms ease-in-out;

  svg {
    width: 2rem;
    min-width: 2rem;
    max-width: 2rem;
  }
`;

const Label = styled.span`
  display: inline-block;
  padding: 0 2rem 0 0.5rem;
  line-height: 2rem;
  min-width: 11rem;
  animation: ${fadeIn} 90ms ease-in-out 30ms both;
`;

Toolbar.Item = Item;

function Break() {
  return (
    <div
      style={{
        width: '100%',
        borderTop: '2px solid black',
        margin: '1rem 0',
      }}
    />
  );
}

Toolbar.Break = Break;
