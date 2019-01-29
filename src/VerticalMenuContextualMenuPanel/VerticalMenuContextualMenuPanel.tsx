import React, { ReactNode, SFC } from 'react';
import { MenuPanel } from '../MenuPanel/MenuPanel';
import { TooltipOverlay } from '../TooltipOverlay/TooltipOverlay';
import styled from 'styled-components';
import { rem } from 'polished';
import { MenuPanelProps } from '../MenuPanel/MenuPanelTypes';

interface Props {
  buttonElement: ReactNode;
  tooltipText?: string;
  onClick?: () => void;
  onClose?: () => void;
  onOpen?: () => void;
  size?: 'sm' | 'md' | 'lg';
  tooltipProps?: {};
}

const MenuPanelStyled = styled<MenuPanelProps>(MenuPanel)`
  position: relative;
  top: ${rem(3)};
  right: ${rem(2)};
  pointer-events: auto;
`;

export const VerticalMenuContextualMenuPanel: SFC<Props> = ({
  buttonElement,
  children,
  onClick,
  onClose,
  onOpen,
  size = 'md',
  tooltipText,
  tooltipProps,
  ...props
}) => (
  <MenuPanelStyled
    {...props}
    alignment="left"
    menuContent={children}
    size={size}
    onClose={onClose}
    onClick={onClick}
    onOpen={onOpen}
  >
    {tooltipText ? (
      <TooltipOverlay
        tooltipText={tooltipText}
        triggerOnClick={false}
        {...tooltipProps}
      >
        {buttonElement}
      </TooltipOverlay>
    ) : (
      buttonElement
    )}
  </MenuPanelStyled>
);
