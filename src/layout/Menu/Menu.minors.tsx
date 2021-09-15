import React, {
  useState,
  MouseEvent,
  cloneElement,
  useRef,
  useCallback,
} from 'react';

import {
  Header,
  Toggle as ToggleStyled,
  ItemStyled,
  Action,
  Wrapper,
  // SubMenu as SubMenuStyled,
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
  indentation: number;
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
  indentation = 36,
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
        indentation={indentation}
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
  indentation = 36,
  ...props
}: ItemProps) {
  const [open, setOpen] = useState(!toggle);

  const onClickToggle = () => toggle && setOpen((open) => !open);
  const onClickAction = (e: MouseEvent) => action.onClick?.(e);

  const onClick = useDoubleClick(() => setOpen((open) => !open));

  return (
    <Wrapper animationDelay={animationDelay}>
      <Toggle
        href={href}
        indentation={indentation}
        onClick={onClickToggle}
        open={open}
        toggle={toggle}
      />

      <ItemStyled
        active={active}
        indentation={indentation}
        hasAction={!!action}
        onClick={onClick}
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

      <SubMenu
        children={children}
        indentation={indentation + PADDING_INCREMENT}
        open={open}
      />
    </Wrapper>
  );
}

function Toggle({ toggle, href, indentation, onClick, open }) {
  if (!toggle) return null;

  return (
    <ToggleStyled
      aria-label="toggle sub-menu"
      as={href ? 'a' : 'button'}
      href={href}
      indentation={indentation}
      onClick={onClick}
      open={open}
    >
      <Focus parent={Toggle} />
      <ChevronDown />
    </ToggleStyled>
  );
}

function SubMenu({ open, children, indentation }) {
  if (!open) return null;

  const { complex } = children;

  const childNested = (child, i) => {
    const animationDelay = i * 20 + 120 / complex.length;
    return cloneElement(child, { indentation, animationDelay });
  };

  if (Array.isArray(complex)) {
    return complex.map(childNested);
  } else {
    return complex;
  }
}

const useDoubleClick = (
  onClickDouble,
  onClick = null,
  duration = 150
) => {
  const timeout = useRef();

  const cleartimeout = () => {
    if (timeout) {
      clearTimeout(timeout.current);
      timeout.current = undefined;
    }
  };

  return useCallback(
    (event) => {
      const clickSingle = onClick && event.detail === 1;
      const clickDouble = event.detail % 2 === 0;

      cleartimeout();

      if (clickSingle) {
        timeout.current = setTimeout(() => onClick(event), duration);
      }

      if (clickDouble) onClickDouble(event);
    },
    [onClick, onClickDouble]
  );
};
