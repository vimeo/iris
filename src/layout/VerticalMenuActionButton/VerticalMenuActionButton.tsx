import React, { ReactNode, SFC, MouseEventHandler } from 'react';

import { ButtonIconOnly } from '../../components/buttons/ButtonIconOnly/ButtonIconOnly';
import { Tip } from '../../components/portals/Tip/Tip';

interface Props {
  icon: ReactNode;
  tooltipText?: string;
  // tooltipProps?: TipProps;
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
    <Tip content={tooltipText} {...tooltipProps}>
      <ButtonIconOnly
        {...props}
        autoSpacingHorizontal={false}
        format="dark"
        icon={icon}
        isButtonElement={false}
        size="sm"
      />
    </Tip>
  ) : (
    <ButtonIconOnly
      {...props}
      autoSpacingHorizontal={false}
      format="dark"
      icon={icon}
      isButtonElement={false}
      size="sm"
    />
  );
