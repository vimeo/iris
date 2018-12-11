import React, { SFC, HTMLProps } from 'react';
import { BadgeProps } from './BadgeTypes';
import { BadgeStyled } from './BadgeStyled';

export const Badge: SFC<
    BadgeProps & HTMLProps<HTMLSpanElement> & HTMLProps<HTMLAnchorElement>
> = ({
    children,
    format = 'default',
    href,
    label,
    size = 'sm',
    ref: _,
    ...rest
}) => (
    <BadgeStyled href={href} format={format} size={size} {...rest}>
        {children}
    </BadgeStyled>
);
