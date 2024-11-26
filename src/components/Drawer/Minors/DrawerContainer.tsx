import React from 'react';
import { WithPlacement, WithSize } from '../Drawer.styles';
import { DrawerSize } from '../Drawer.types';

interface Props {
  size: DrawerSize;
  placement: 'left' | 'right';
}

export const DrawerContainer = ({
  size,
  placement,
  children,
}: React.PropsWithChildren<Props>) => {
  return (
    <WithPlacement left={placement === 'left'}>
      <WithSize size={size}>{children}</WithSize>
    </WithPlacement>
  );
};
