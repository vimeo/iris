import React, { ReactNode, SFC } from 'react';
import { TooltipOverlay } from '../TooltipOverlay/TooltipOverlay';
import { ButtonStyled, Wrapper } from './ButtonInlineInputTextStyled';
import { BaseProps } from '../Utils/BaseProps';

export interface Props extends BaseProps {
  icon?: ReactNode;
  format?: 'subtle' | 'neutral' | 'strong';
  size: 'md' | 'lg';
  title?: string;
  tooltipText?: string;
  tooltipPosition?: 'top' | 'right' | 'bottom' | 'left';
  tooltipProps?: any;
}

export interface ButtonInlineInputTextStyleProps {
  format: 'subtle' | 'neutral' | 'strong';
  size: 'md' | 'lg';
}

export const ButtonInlineInputText: SFC<Props> = ({
  className,
  icon,
  format = 'neutral',
  size = 'md',
  tooltipText,
  tooltipPosition = 'top',
  tooltipProps,
  ...props
}) => (
  <Wrapper>
    {tooltipText ? (
      <TooltipOverlay
        tooltipText={tooltipText}
        attachment={tooltipPosition}
        {...tooltipProps}
      >
        <ButtonStyled size={size} format={format} {...props}>
          {icon}
        </ButtonStyled>
      </TooltipOverlay>
    ) : (
      <ButtonStyled size={size} format={format} {...props}>
        {icon}
      </ButtonStyled>
    )}
  </Wrapper>
);
