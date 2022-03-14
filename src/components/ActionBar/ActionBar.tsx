import React from 'react';
import styled from 'styled-components';

import { Checkbox } from '../inputs/Checkbox/Checkbox';

export function ActionBar({
  children,
  variant = 'default',
  ...props
}) {
  if (variant === 'minimal') {
    children = children.filter(
      (child) => !childIsComponent(child, Selections)
    );
  }

  return <ActionBarStyled {...props}>{children}</ActionBarStyled>;
}

function childIsComponent(child, Component) {
  return child.type.toString() === Component.toString();
}

ActionBar.Selections = Selections;
ActionBar.Item = Item;

const ActionBarStyled = styled.div`
  min-width: 30rem;
  min-height: 5rem;
  padding: 1rem;
  margin: 2rem auto;
  border: 2px solid rgba(255, 255, 255, 0.25);
  border-radius: 0.5rem;
  /* position: fixed;
  bottom: 2rem; */
  /* left: 50%; */
  /* transform: translateX(-50%); */
  background: rgba(32, 32, 32, 1);
  display: flex;
  gap: 1rem;
  align-items: center;
`;

function Selections({ children = null, ...props }) {
  return (
    <SelectionsStyled {...props}>
      {children}
      <Checkbox />2 Selected
    </SelectionsStyled>
  );
}

Selections.prototype.foo = 'bar';

const SelectionsStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-right: auto;
`;

function Item({ children, icon, ...props }) {
  return (
    <ItemStyled {...props}>
      {icon}
      {children}
    </ItemStyled>
  );
}

const ItemStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  > svg {
    width: 1.5rem;
    * {
      fill: white;
    }
  }
`;
