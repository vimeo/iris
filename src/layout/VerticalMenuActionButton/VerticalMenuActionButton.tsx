import React, { ReactNode, SFC, MouseEventHandler } from 'react';

import { Tip } from '../../components/portals/Tip/Tip';
import { Button } from '../../components/buttons/Button/Button';

interface Props {
  icon: ReactNode;
  tooltipText?: string;
  tooltipProps?: any;
  onClick?: MouseEventHandler;
}

export const VerticalMenuActionButton: SFC<Props> = ({
  icon,
  tooltipText,
  tooltipProps,
  ...props
}) =>
  tooltipText ? (
    <Tip tooltipText={tooltipText} {...tooltipProps}>
      <Button
        {...props}
        format="basic"
        variant="hyperminimal"
        icon={icon}
        size="sm"
      />
    </Tip>
  ) : (
    <Button
      {...props}
      format="basic"
      variant="hyperminimal"
      icon={icon}
      size="sm"
    />
  );
