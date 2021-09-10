import React, { useState, MouseEvent, cloneElement } from 'react';

import {
  Header,
  Toggle,
  ItemStyled,
  Action,
  Wrapper,
  SubMenu,
  TextContainer,
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

type ItemProps = {
  action?: {
    icon: React.ReactNode;
    onClick: React.MouseEventHandler;
  };
  active?: boolean;
  animationDelay?: number;
  children: any;
  href?: string;
  icon: React.ReactNode;
  paddingIncrement: number;
  toggle?: boolean;
};

export function Item({ children, ...props }: ItemProps) {
  const simple =
    typeof children === 'object' && !children.props
      ? children.flat().filter((child) => typeof child === 'string')
      : children;

  const complex =
    typeof children === 'object' &&
    !children.props &&
    children.flat().filter((child) => typeof child !== 'string');

  if (complex || props.toggle) {
    const children = { simple, complex };
    return <ComplexItem {...props}>{children}</ComplexItem>;
  }

  if (simple) {
    const children = simple;
    return <SimpleItem {...props}>{children}</SimpleItem>;
  }
}

const PADDING_INCREMENT = 8;

function SimpleItem({
  action,
  active,
  animationDelay,
  children,
  href,
  icon,
  paddingIncrement = PADDING_INCREMENT,
  ...props
}: ItemProps) {
  const onClick = (e: MouseEvent) => action.onClick?.(e);

  return (
    <Wrapper animationDelay={animationDelay}>
      <ItemStyled
        active={active}
        as={href ? 'a' : 'button'}
        href={href}
        hasAction={Boolean(action)}
        indentation={paddingIncrement}
        {...props}
      >
        {action && (
          <Action onClick={onClick}>
            {action.icon}
            <Focus parent={Action} />
          </Action>
        )}

        {icon && icon}
        <TextContainer>{children}</TextContainer>
        <Focus parent={ItemStyled} />
      </ItemStyled>
    </Wrapper>
  );
}

function ComplexItem({
  action,
  active,
  animationDelay = 0,
  children,
  href,
  icon,
  toggle = false,
  paddingIncrement = PADDING_INCREMENT,
  ...props
}: ItemProps) {
  const [open, setOpen] = useState(!toggle);

  const onClickToggle = () => toggle && setOpen((open) => !open);
  const onClickAction = (e: MouseEvent) => action.onClick?.(e);

  return (
    <Wrapper animationDelay={animationDelay}>
      {toggle && (
        // TODO - Do we need to translate? How to do translations in Iris? Something to be passed in? Appropriate label?
        <Toggle
          aria-label="toggle sub-menu"
          as={href ? 'a' : 'button'}
          href={href}
          onClick={onClickToggle}
          open={open}
          indentation={paddingIncrement}
        >
          <Focus parent={Toggle} />
          <ChevronDown />
        </Toggle>
      )}

      <ItemStyled
        active={active}
        indentation={paddingIncrement}
        hasAction={Boolean(action)}
        {...props}
      >
        {icon && icon}
        <TextContainer>{children.simple}</TextContainer>
        {action && (
          <Action onClick={onClickAction}>
            {action.icon}
            <Focus parent={Action} />
          </Action>
        )}
        <Focus parent={ItemStyled} />
      </ItemStyled>

      {open && (
        <SubMenu total={children.complex.length}>
          {Array.isArray(children.complex)
            ? children.complex.map((child, idx) => {
                return cloneElement(child, {
                  paddingIncrement:
                    paddingIncrement + PADDING_INCREMENT,
                  animationDelay:
                    idx * 20 + 120 / children.complex.length,
                });
              })
            : children.complex}
        </SubMenu>
      )}
    </Wrapper>
  );
}
