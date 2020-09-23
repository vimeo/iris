import React, { useState, MouseEvent, cloneElement } from 'react';

import {
  Header,
  Toggle,
  ItemStyled,
  Action,
  Wrapper,
  SubMenu,
} from './Menu.style';

import { MinorComponent, Focus } from '../../utils';
import { ChevronDown } from '../../icons';

export interface Minors {
  Section: MinorComponent<any>;
  Item: MinorComponent<any>;
}

export function Section({ children, title = null, ...props }) {
  return (
    <div {...props}>
      {title && <Header>{title}</Header>}
      {children}
    </div>
  );
}

export function Item({
  action,
  active,
  children,
  href,
  route,
  toggle = false,
  icon,
  ...props
}) {
  const [open, setOpen] = useState(!toggle);

  const doToggle = () => toggle && setOpen((open) => !open);

  const doAction = (e: MouseEvent) => {
    action.onClick && action.onClick(e);
  };

  const simpleKids =
    typeof children === 'object'
      ? children.filter((child) => typeof child === 'string')
      : children;

  const complexKids =
    typeof children === 'object' &&
    children.filter((child) => typeof child !== 'string');

  const text = (
    <>
      {icon && icon}
      {simpleKids}
    </>
  );

  const link = simpleKids && href && <a href={href}>{text}</a>;

  const routerLink =
    simpleKids && route && cloneElement(route, { children: text });

  return (
    <Wrapper active={active} $height={open && complexKids.length}>
      <ItemStyled onClick={doToggle} {...props}>
        {action && (
          <Action onClick={doAction}>
            {action.icon}
            <Focus parent={Action} />
          </Action>
        )}

        {link}
        {routerLink}
        {text}
        <Focus parent={ItemStyled} />
      </ItemStyled>

      {toggle && (
        <Toggle open={open}>
          <ChevronDown />
          <Focus parent={Toggle} />
        </Toggle>
      )}
      {open && complexKids && <SubMenu>{complexKids}</SubMenu>}
    </Wrapper>
  );
}
