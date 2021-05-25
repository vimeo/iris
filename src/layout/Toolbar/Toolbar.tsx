import React, { cloneElement } from 'react';

import { Item, Break } from './Toolbar.minors';
import { ToolbarStyled, PanelStyled, Dismiss } from './Toolbar.style';
import { Props, Minors } from './Toolbar.types';

import { DismissX } from '../../icons';
import {
  useLayoutStyles,
  useStateTransmorphic,
  withIris,
} from '../../utils';

export const Toolbar = withIris<HTMLDivElement, Props, Minors>(
  ToolbarComponent
);

Toolbar.Item = Item;
Toolbar.Break = Break;

function ToolbarComponent({
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

  // Extract the active Toolbar.Item's children.
  const panel = children.filter(
    ({ props }) => props.label === active
  )[0]?.props?.children;

  // Pass attach prop to Toolbar.Items and bind their onClick.
  function toggle(child) {
    return (event) => {
      child.props?.onClick?.(event);

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
      <ToolbarStyled attach={attach} style={displayStyles} {...props}>
        {children}
      </ToolbarStyled>
      <PanelStyled attach={attach} visible={panel}>
        <Dismiss
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
