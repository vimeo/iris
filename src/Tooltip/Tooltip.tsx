import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import { COLORS } from '../Legacy/COLORS';
import { ParagraphMd } from '../Type';

const WIDTH_LIMIT = 17;

export interface TooltipProps {
    breakWords?: boolean;
    className?: string;
    children: string;
}

interface TooltipStyledProps {
    breakWords?: boolean;
    multiline?: boolean;
}

const TooltipStyled = styled<TooltipStyledProps, 'div'>('div')`
    min-width: ${props => (props.multiline ? `${WIDTH_LIMIT / 2}rem` : '0')};
    max-width: ${WIDTH_LIMIT}rem;
    padding: 0.5rem 0.5rem;
    color: ${COLORS.White};
    border-radius: ${rem(3)};
    background-color: ${COLORS.Black};
    text-align: center;

    p {
        color: ${COLORS.White}; //override default paragraph color
        white-space: ${props => (props.multiline ? 'normal' : 'nowrap')};
        word-break: ${props => (props.breakWords ? 'break-all' : 'normal')};
    }
`;

export const Tooltip = ({ children, ...props }: TooltipProps) => (
    <TooltipStyled {...props} multiline={children.length > WIDTH_LIMIT - 2}>
        <div>
            <ParagraphMd noMargin>{children}</ParagraphMd>
        </div>
    </TooltipStyled>
);
