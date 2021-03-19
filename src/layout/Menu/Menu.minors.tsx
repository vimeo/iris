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

export function Item({ children, ...props }) {
  const simple =
    typeof children === 'object' && !children.props
      ? children.flat().filter((child) => typeof child === 'string')
      : children;

  const complex =
    typeof children === 'object' &&
    !children.props &&
    children.flat().filter((child) => typeof child !== 'string');

  if (complexKids.length === 0) complexKids = false;

  if (complex) {
    const children = { simple, complex };
    return <ComplexItem {...props}>{children}</ComplexItem>;
  }

  if (simple) {
    const children = simple;
    return <SimpleItem {...props}>{children}</SimpleItem>;
  }
}

function SimpleItem({
  active,
  children,
  href,
  icon,
  action,
  ...props
}) {
  const onClick = (e: MouseEvent) => {
    action.onClick && action.onClick(e);
  };

  return (
    <Wrapper active={active}>
      <ItemStyled as={href ? 'a' : 'button'} href={href} {...props}>
        {action && (
          <Action onClick={onClick}>
            {action.icon}
            <Focus parent={Action} />
          </Action>
        )}

        {icon && icon}
        {children}
        <Focus parent={ItemStyled} />
      </ItemStyled>
    </Wrapper>
  );
}

function ComplexItem({
  active,
  children,
  icon,
  toggle = false,
  ...props
}) {
  const [open, setOpen] = useState(!toggle);

  const onClick = () => toggle && setOpen((open) => !open);

  return (
    <Wrapper active={active} $height={open && children.length}>
      <ItemStyled onClick={onClick} {...props}>
        {icon && icon}
        {children.simple}
        <Focus parent={ItemStyled} />
      </ItemStyled>

      {toggle && (
        <Toggle open={open}>
          <ChevronDown />
          <Focus parent={Toggle} />
        </Toggle>
      )}

      {open && <SubMenu>{children.complex}</SubMenu>}
    </Wrapper>
  );
}
