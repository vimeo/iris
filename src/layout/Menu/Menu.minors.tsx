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
      ? children.filter((child) => typeof child === 'string')
      : children;

  const complex =
    typeof children === 'object' &&
    !children.props &&
    children.filter((child) => typeof child !== 'string');

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
      <ItemStyled
        onClick={onClick}
        {...props}
        style={{
          marginLeft: '-0.5rem',
          width: 'calc(100% + 0.5rem)',
          paddingLeft: '1.75rem',
        }}
      >
        {icon && icon}
        {children.simple}
        <Focus
          parent={ItemStyled}
          // style={{ left: '-0.75rem', width: 'calc(100% + 1rem)' }}
        />
      </ItemStyled>

      {toggle && (
        <Toggle open={open}>
          <ChevronDown />
        </Toggle>
      )}

      {open && <SubMenu>{children.complex}</SubMenu>}
    </Wrapper>
  );
}
