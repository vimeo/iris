import React, { ReactNode, SFC } from 'react';
import { TooltipOverlay } from '../TooltipOverlay/TooltipOverlay';
import { CircleInfo } from '../Icons';
import {
    TooltipAnnotationIconStyled,
    IconWrapper,
} from './TooltipAnnotationIconStyled';

interface Props {
    children?: ReactNode;
    labelType?: 'textBlock' | 'inline' | 'noPosition'; // DEPRECATE?
    tooltipText: string;
    size?: 'md' | 'lg'; // DEPRECATE?
    tooltipProps?: {};
}

export const TooltipAnnotationIcon: SFC<Props> = ({
    children,
    labelType = 'inline',
    size = 'md',
    tooltipText,
    tooltipProps,
    ...props
}) => (
    <TooltipAnnotationIconStyled {...props}>
        {children}
        <IconWrapper labelType={labelType}>
            <TooltipOverlay
                {...tooltipProps}
                tooltipText={tooltipText}
                triggerOnClick={false}
                onClick={e => {
                    e.preventDefault();
                    e.stopPropagation();
                }}
            >
                <CircleInfo />
            </TooltipOverlay>
        </IconWrapper>
    </TooltipAnnotationIconStyled>
);
