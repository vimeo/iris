import React, { SFC, HTMLProps } from 'react';
import { TooltipOverlay } from '../TooltipOverlay/TooltipOverlay';
import { ButtonInlineInputTextProps as Props } from './ButtonInlineInputTextTypes';
import { Omit } from '../Utils/Omit';
import { ButtonStyled, Wrapper } from './ButtonInlineInputTextStyled';

export const ButtonInlineInputText: SFC<
    Props & Omit<HTMLProps<HTMLButtonElement>, 'size'>
> = ({
    className,
    icon,
    format = 'neutral',
    size = 'md',
    tooltipText,
    tooltipPosition = 'top',
    tooltipProps,
    ref: _,
    ...filteredProps
}) => (
    <Wrapper>
        {tooltipText ? (
            <TooltipOverlay
                tooltipText={tooltipText}
                attachment={tooltipPosition}
                {...tooltipProps}
            >
                <ButtonStyled size={size} format={format} {...filteredProps}>
                    {icon}
                </ButtonStyled>
            </TooltipOverlay>
        ) : (
            <ButtonStyled size={size} format={format} {...filteredProps}>
                {icon}
            </ButtonStyled>
        )}
    </Wrapper>
);
