import React, { ReactNode, SFC, MouseEventHandler } from 'react';
import { ButtonIconOnly } from '../ButtonIconOnly/ButtonIconOnly';
import { TooltipOverlay } from '../TooltipOverlay/TooltipOverlay';

interface Props {
  icon: ReactNode;
  tooltipText?: string;
  // tooltipProps?: TooltipOverlayProps;
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
    <TooltipOverlay tooltipText={tooltipText} {...tooltipProps}>
      <ButtonIconOnly
        {...props}
        autoSpacingHorizontal={false}
        format="dark"
        icon={icon}
        isButtonElement={false}
        size="sm"
      />
    </TooltipOverlay>
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
