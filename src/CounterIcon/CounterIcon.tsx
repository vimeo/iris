import React, { SFC, HTMLProps } from 'react';
import { ParagraphLg } from '../Type';
import TooltipOverlay from '../TooltipOverlay/TooltipOverlay';

import { CounterIconProps } from './CounterIconTypes';
import {
    IconWrapperStyled,
    CounterIconContentStyled,
    CounterIconStyled,
} from './CounterIconStyled';

const CounterIcon: SFC<CounterIconProps & HTMLProps<HTMLDivElement>> = ({
    autoMargins = true,
    children,
    href,
    icon,
    counterTitle,
    onClick,
    tooltipProps,
    ref: _,
    ...filteredProps
}) => {
    const CounterIconContent = (
        <CounterIconContentStyled {...filteredProps}>
            <IconWrapperStyled>{icon}</IconWrapperStyled>
            <ParagraphLg element="span">{children}</ParagraphLg>
        </CounterIconContentStyled>
    );

    const maybeLinkContent = href ? (
        <a href={href} onClick={onClick}>
            {CounterIconContent}
        </a>
    ) : (
        CounterIconContent
    );

    return (
        <CounterIconStyled autoMargins={autoMargins}>
            <TooltipOverlay
                href={href}
                tooltipText={counterTitle}
                onClick={!href && onClick}
                triggerOnClick={false}
                {...tooltipProps}
            >
                {maybeLinkContent}
            </TooltipOverlay>
        </CounterIconStyled>
    );
};

export default CounterIcon;
