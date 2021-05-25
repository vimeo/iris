import React, {
  cloneElement,
  Dispatch,
  ReactElement,
  SetStateAction,
} from 'react';

import { Item, Break } from './Toolbar.minors';
import { ToolbarStyled, PanelStyled } from './Toolbar.style';

import { Button } from '../../components';
import { DismissX } from '../../icons';
import {
  IrisProps,
  useLayoutStyles,
  useStateTransmorphic,
} from '../../utils';

Toolbar.Item = Item;
Toolbar.Break = Break;

export type Props = IrisProps<{
  attach?: 'left' | 'right';
  children: ReactElement[];
  state?: [string, Dispatch<SetStateAction<string>>];
}>;

export function Toolbar({
  children,
  attach = 'left',
  state = null,
  style = null,
  ...props
}: Props) {
  const [active, activeSet] = useStateTransmorphic<string>(state);
  const [layoutStyles, displayStyles] = useLayoutStyles(style);

  const panel = children.filter(
    (child) => child.props.label === active
  )[0]?.props?.children;

  children = children.map((child) =>
    cloneElement(child, {
      attach: attach === 'left' ? 'right' : 'left',
      onClick: () => activeSet(child.props.label),
    })
  );

  return (
    <div style={{ height: '100%', ...layoutStyles }}>
      <ToolbarStyled attach={attach} style={displayStyles} {...props}>
        {children}
      </ToolbarStyled>
      <PanelStyled attach={attach} visible={panel}>
        <Button
          aria-label="Dismiss"
          format="basic"
          icon={<DismissX />}
          onClick={() => activeSet(false)}
          variant="minimalTransparent"
          style={{
            position: 'absolute',
            top: '0.667rem',
            right: '0.667rem',
            zIndex: 5000,
          }}
        />
        {panel}
      </PanelStyled>
    </div>
  );
}
