import React, {
  useState,
  MouseEvent,
  cloneElement,
  useRef,
  useCallback,
  ReactNode,
  MouseEventHandler,
  CSSProperties,
} from 'react';

import {
  Header,
  Toggle as ToggleStyled,
  ItemStyled,
  Action,
  Wrapper,
  WrapperSection,
  // SubMenu as SubMenuStyled,
  TextContainer,
} from './Menu.style';

import { MinorComponent, Focus } from '../../utils';
import { ChevronDown } from '../../icons';

export interface Minors {
  Section: MinorComponent<any>;
  Item: MinorComponent<any>;
}

export function Section({
  indentation = [0, 0],
  children,
  title = null,
  style,
  ...props
}) {
  const paddingLeft = indentation[1];
  const marginLeft = indentation[1] * -1;
  const width = `calc(100% + ${indentation[1] * 2}px)`;

  const childrenCloned = Array.isArray(children)
    ? children.map((child) => cloneElement(child, { indentation }))
    : cloneElement(children, { indentation });

  return (
    <WrapperSection
      {...props}
      style={{ paddingLeft, marginLeft, width, ...style }}
    >
      {title && <Header style={{ paddingLeft }}>{title}</Header>}
      {childrenCloned}
    </WrapperSection>
  );
}
interface ItemProps {
  action?: {
    icon: ReactNode;
    onClick: MouseEventHandler;
  };
  active?: boolean;
  animationDelay?: string;
  children: any;
  href?: string;
  icon: ReactNode;
  indentation: [number, number];
  style?: CSSProperties;
  toggle?: boolean;
}

export function Item({
  children,
  indentation = [0, 0],
  ...props
}: ItemProps) {
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
    return (
      <ComplexItem indentation={indentation} {...props}>
        {children}
      </ComplexItem>
    );
  }

  if (simple) {
    const children = simple;
    return (
      <SimpleItem indentation={indentation} {...props}>
        {children}
      </SimpleItem>
    );
  }
}

function SimpleItem({
  action,
  active,
  animationDelay,
  children,
  href,
  icon,
  indentation = [0, 0],
  style,
  ...props
}: ItemProps) {
  const onClick = (e: MouseEvent) => action.onClick?.(e);

  const paddingLeft = indentation[1];

  return (
    <Wrapper style={{ animationDelay, ...style }}>
      <ItemStyled
        active={active}
        as={href ? 'a' : 'button'}
        href={href}
        action={!!action}
        style={{ paddingLeft, ...style }}
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
  animationDelay = null,
  children,
  href,
  icon,
  toggle = false,
  indentation = [0, 0],
  style,
  ...props
}: ItemProps) {
  console.log('b', { indentation });
  const [open, setOpen] = useState(!toggle);

  const onClickToggle = () => toggle && setOpen((open) => !open);
  const onClickAction = (e: MouseEvent) => action.onClick?.(e);

  const onClick = useDoubleClick(() => setOpen((open) => !open));

  // const PADDING_INCREMENT = 8;
  //(indentation - 20) / 2;

  const paddingLeft = indentation[1];

  return (
    <Wrapper style={{ animationDelay, ...style }}>
      <Toggle
        href={href}
        indentation={indentation[1]}
        onClick={onClickToggle}
        open={open}
        toggle={toggle}
      />

      <ItemStyled
        active={active}
        action={!!action}
        onClick={onClick}
        style={{ paddingLeft, ...style }}
        {...props}
      >
        {icon && icon}
        <TextContainer>
          {indentation} {children.simple}
        </TextContainer>
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
        indentation={[
          indentation[0],
          indentation[0] + indentation[1],
        ]}
        open={open}
      />
    </Wrapper>
  );
}

function Toggle({ toggle, href, indentation, onClick, open }) {
  if (!toggle) return null;

  const left = indentation - 26;

  return (
    <ToggleStyled
      aria-label="toggle sub-menu"
      as={href ? 'a' : 'button'}
      href={href}
      onClick={onClick}
      open={open}
      style={{ left }}
    >
      <Focus parent={Toggle} />
      <ChevronDown />
    </ToggleStyled>
  );
}

function SubMenu({ open, children, indentation }) {
  if (!open) return null;

  const { complex } = children;

  console.log({ children });

  const childNested = (child, i) => {
    const animationDelay = i * 20 + 120 / complex.length + 'ms';
    return cloneElement(child, {
      indentation: indentation,
      animationDelay,
    });
  };

  if (Array.isArray(complex)) {
    return complex.map(childNested);
  } else {
    return complex;
  }
}

const useDoubleClick = (
  onClickDouble: MouseEventHandler,
  onClick: MouseEventHandler = null,
  duration = 150
) => {
  const timeout = useRef<ReturnType<typeof setTimeout>>();

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
    [duration, onClick, onClickDouble]
  );
};
