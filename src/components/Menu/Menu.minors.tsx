import React, {
  useState,
  MouseEvent,
  useEffect,
  useRef,
} from 'react';

import {
  Header,
  Toggle,
  ItemStyled,
  Action,
  Wrapper,
  SubMenu,
  SvgWrapper,
  ItemLabel,
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
  /** Function called if item is toggled open */
  onOpen,
  /** Function called if item is toggled close */
  onClose,
  ...props
}) {
  const init = useRef(true);
  const [open, setOpen] = useState(!toggle);

  useEffect(() => {
    // Prevent calling onClose on mount
    if (init.current) {
      init.current = false;
    } else if (open) {
      onOpen?.();
    } else {
      onClose?.();
    }
  }, [onClose, onOpen, open]);

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
        as={toggle ? 'span' : link ? 'a' : 'button'}
        href={href}
        hasToggle={toggle}
        {...props}
      >
        {toggle && (
          <Toggle open={open} aria-label={`${simpleKids}`}>
            <ChevronDown />
            <Focus parent={Toggle} />
          </Toggle>
        )}

        {action && (
          <Action onClick={doAction}>
            {action.icon}
            <Focus parent={Action} />
          </Action>
        )}

        {icon && <SvgWrapper>{icon}</SvgWrapper>}
        <ItemLabel>{simpleKids}</ItemLabel>
        <Focus parent={ItemStyled} />
      </ItemStyled>

      {open && complexKids && (
        <SubMenu total={complexKids.length}>{complexKids}</SubMenu>
      )}

      {/* <Focus parent={toggle ? Toggle : ItemStyled} /> */}
    </Wrapper>
  );
}
