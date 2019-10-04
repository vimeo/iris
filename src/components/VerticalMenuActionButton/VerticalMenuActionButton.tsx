import React, { ReactNode, SFC, MouseEventHandler } from 'react';
import { ButtonIconOnly } from '../ButtonIconOnly/ButtonIconOnly';
import { TipOverlay } from '../portals/TipOverlay/TipOverlay';

interface Props {
  icon: ReactNode;
  tooltipText?: string;
  // tooltipProps?: TipOverlayProps;
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
    <TipOverlay tooltipText={tooltipText} {...tooltipProps}>
      <ButtonIconOnly
        {...props}
        autoSpacingHorizontal={false}
        format="dark"
        icon={icon}
        isButtonElement={false}
        size="sm"
      />
    </TipOverlay>
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
