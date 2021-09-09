import React, { useState, MouseEvent } from 'react';

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
    typeof children === 'object' && !children.props
      ? children.flat().filter((child) => typeof child === 'string')
      : children;

  let complexKids =
    typeof children === 'object' &&
    !children.props &&
    children.flat().filter((child) => typeof child !== 'string');

  if (complexKids.length === 0) complexKids = false;

  const link = simpleKids && href;
  const $height = open && complexKids.length;

  return (
    <Wrapper active={active} $height={$height}>
      <ItemStyled
        onClick={doToggle}
        as={link ? 'a' : 'button'}
        href={href}
        {...props}>
        {action && (
          <Action onClick={doAction}>
            {action.icon}
            <Focus parent={Action} />
          </Action>
        )}

        {icon && icon}
        {simpleKids}
        <Focus parent={ItemStyled} />
      </ItemStyled>

      {toggle && (
        <Toggle open={open}>
          <ChevronDown />
          <Focus parent={Toggle} />
        </Toggle>
      )}
      {open && complexKids && (
        <SubMenu total={complexKids.length}>{complexKids}</SubMenu>
      )}
    </Wrapper>
  );
}
