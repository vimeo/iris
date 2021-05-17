import React, { cloneElement, useState } from 'react';
import styled, { css } from 'styled-components';
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
    <div style={{ display: 'flex' }}>
      <Toolbar active={active}>
        <Toolbar.Item
          label="Sources"
          onClick={onClick('Sources')}
          icon={<Gear />}
          children={panelContent}
        />
        <Toolbar.Item
          label="Videos"
          onClick={onClick('Videos')}
          icon={<Gear />}
          children={panelContent}
        />
        <Toolbar.Item
          label="Images"
          onClick={onClick('Images')}
          icon={<Gear />}
          children={panelContent}
        />
        <Toolbar.Break />
        <Toolbar.Item
          label="Lower-thirds"
          onClick={onClick('Lower-thirds')}
          icon={<Gear />}
          children={panelContent}
        />
        <Toolbar.Item
          label="Logo"
          onClick={onClick('Logo')}
          icon={<Gear />}
          children={panelContent}
        />
        <Toolbar.Item
          label="Closed Captions"
          onClick={onClick('Closed Captions')}
          icon={<Gear />}
          children={panelContent}
        />
        <Toolbar.Break />
        <Toolbar.Item
          label="Other"
          onClick={onClick('Other')}
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
    cloneElement(child, { collapsed: panel || collapsed })
  );

  return (
    <>
      <ToolbarStyled collapsed={panel || collapsed} {...props}>
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
      <PanelStyled visible={panel}>
        <div style={{ position: 'absolute' }}>{panel}</div>
      </PanelStyled>
    </>
  );
}

const ToolbarStyled = styled.div<any>`
  width: ${(p) => (p.collapsed ? '4.5rem' : '21rem')};
  height: 100%;
  background: ${white};
  border: 1px solid ${black};
  padding: 0.75rem;
  transition: 120ms ease-in-out;
`;

const PanelStyled = styled.div<any>`
  position: relative;
  width: ${(p) => (p.visible ? '17.5rem' : '0rem')};
  padding: 1rem;
  border: 2px solid pink;
  border-color: ${(p) => (p.visible ? 'pink' : 'transparent')};
  transition: 120ms ease-in-out;
`;

const Expander = styled(ChevronRight)<any>`
  margin-top: 5rem;
  cursor: pointer;
  width: 3rem;
  transition: 120ms ease-in-out;
  transform: ${(p) => (p.collapsed ? 'rotate(180deg)' : 'rotate(0)')};

  opacity: 0.334;
  pointer-event: none;

  ${(p) =>
    p.visible &&
    css`
      opacity: 1;
      pointer-event: auto;
    `}
`;

function Item({
  children = null,
  collapsed,
  icon,
  label,
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
      <Label>{label}</Label>
      <ChevronRight style={{ marginLeft: 'auto' }} />
    </ItemStyled>
  );
}

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
