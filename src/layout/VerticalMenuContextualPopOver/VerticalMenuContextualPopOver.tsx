import React, { ReactNode, SFC, ReactElement } from 'react';
import { PopOver } from '../../components/portals/PopOver/PopOver';
import { Tip } from '../../components/portals/Tip/Tip';
import styled from 'styled-components';
import { rem } from 'polished';

interface Props {
  buttonElement: ReactNode;
  tooltipText?: string;
  onClick?: () => void;
  onClose?: () => void;
  onOpen?: () => void;
  size?: 'sm' | 'md' | 'lg';
  tooltipProps?: {};
}

const PopOverStyled = styled(PopOver)`
  position: relative;
  top: ${rem(3)};
  right: ${rem(2)};
  pointer-events: auto;
`;

export const VerticalMenuContextualPopOver: SFC<Props> = ({
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
  <PopOverStyled
    {...props}
    alignment="left"
    menuContent={children}
    size={size}
    onClose={onClose}
    onClick={onClick}
    onOpen={onOpen}
  >
    {tooltipText ? (
      <Tip content={tooltipText} {...tooltipProps}>
        {buttonElement as ReactElement}
      </Tip>
    ) : (
      buttonElement
    )}
  </PopOverStyled>
);
