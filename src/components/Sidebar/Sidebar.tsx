import React, { cloneElement } from 'react';

import { Item, Break } from './Sidebar.minors';
import { SidebarStyled, PanelStyled, Dismiss } from './Sidebar.style';
import { Props, Minors } from './Sidebar.types';

import { DismissX } from '../../icons';
import {
  useLayoutStyles,
  useStateTransmorphic,
  withIris,
} from '../../utils';

export const Sidebar = withIris<HTMLDivElement, Props, Minors>(
  SidebarComponent
);

Sidebar.Item = Item;
Sidebar.Break = Break;

function SidebarComponent({
  children,
  attach = 'left',
  forwardRef,
  onOpen,
  onClose,
  state = null,
  style = null,
  ...props
}: Props) {
  const [active, activeSet] = useStateTransmorphic<string>(state);
  const [layoutStyles, displayStyles] = useLayoutStyles(style);

  // Extract the active Sidebar.Item's children.
  const panel = children.filter(
    ({ props }) => props.label === active
  )[0]?.props?.children;

  // Pass attach prop to Sidebar.Items and bind their onClick.
  function toggle(child) {
    return (event) => {
      child.props?.onClick?.(event);

      if (active === child.props.label) {
        close();
      }

      if (active !== child.props.label) {
        if (active) onClose?.(active);
        onOpen?.(child.props.label);

        activeSet(child.props.label);
      }
    };
  }

  function close() {
    if (active) onClose?.(active);
    activeSet(false);
  }

  function cloneChild(child, key) {
    return cloneElement(child, {
      attach: attach === 'left' ? 'right' : 'left',
      onClick: toggle(child),
      key,
    });
  }

  children = children.map(cloneChild);

  return (
    <div style={{ height: '100%', ...layoutStyles }} ref={forwardRef}>
      <SidebarStyled attach={attach} style={displayStyles} {...props}>
        {children}
      </SidebarStyled>
      <PanelStyled attach={attach} visible={panel}>
        <Dismiss
          tabIndex={!active ? -1 : 0}
          aria-label="Dismiss"
          format="basic"
          icon={<DismissX />}
          onClick={close}
          variant="minimalTransparent"
        />
        {panel}
      </PanelStyled>
    </div>
  );
}
