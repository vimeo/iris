import React, { ReactNode } from 'react';
import { TooltipOverlay } from '../TooltipOverlay/TooltipOverlay';
import { ButtonStyled, Wrapper } from './ButtonInlineInputTextStyled';
import { BaseProps, withDeprecateProps } from '../../utils';

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

export const ButtonInlineInputText = withDeprecateProps<Props>(
  {
    icon:
      '`icon` is deprecated and will no longer be available in Iris 8. Use `children` (same functionality) instead.',
  },
  ({
    children,
    className,
    icon,
    format = 'neutral',
    size = 'md',
    tooltipText,
    tooltipPosition = 'top',
    tooltipProps,
    ...props
  }) => {
    if (icon) {
      children = icon;
    }
    return (
      <Wrapper>
        {tooltipText ? (
          <TooltipOverlay
            tooltipText={tooltipText}
            attachment={tooltipPosition}
            {...tooltipProps}
          >
            <ButtonStyled size={size} format={format} {...props}>
              {children}
            </ButtonStyled>
          </TooltipOverlay>
        ) : (
          <ButtonStyled size={size} format={format} {...props}>
            {children}
          </ButtonStyled>
        )}
      </Wrapper>
    );
  },
);
