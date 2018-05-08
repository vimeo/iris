import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import { COLORS } from '../globals/js/constants';
import { ParagraphMd } from '../Type';

export interface TooltipProps {
    breakWords?: boolean;
    className?: string;
    children: string;
    size?: 'sm' | 'md' | 'lg';
}

interface TooltipStyledProps {
    breakWords?: boolean;
    tooltipSize: 'sm' | 'md' | 'lg';
}

const getTooltipSizeFromLength = charCount => {
    let sizeFromLength;
    if (charCount >= 45) {
        sizeFromLength = 'lg';
    } else if (charCount >= 12) {
        sizeFromLength = 'md';
    } else {
        sizeFromLength = 'sm';
    }

    return sizeFromLength;
};

const widthMap = {
    sm: 80,
    md: 180,
    lg: 240,
};

const TooltipStyled = styled<TooltipStyledProps, 'div'>('div')`
    width: ${props => rem(widthMap[props.tooltipSize])};
    padding: ${rem(8)} ${rem(8)};

    color: ${COLORS.White};
    border-radius: ${rem(3)};
    background-color: ${COLORS.Black};

    p {
        color: ${COLORS.White}; //override default paragraph color
        white-space: pre-line;
        ${props => props.breakWords ? 'word-break: break-all' : ''};
    }

    text-align: ${props => (props.tooltipSize === 'lg' ? 'left' : 'center')};
`;

const Tooltip = ({ children, size, ...filteredProps }: TooltipProps) => {
    return (
        <TooltipStyled
            {...filteredProps}
            tooltipSize={size || getTooltipSizeFromLength(children.length)}
        >
            <div>
                <ParagraphMd noMargin>{children}</ParagraphMd>
            </div>
        </TooltipStyled>
    );
};

export default Tooltip;
