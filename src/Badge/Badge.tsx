import React, { SFC, HTMLProps } from 'react';
import { BadgeProps } from './BadgeTypes';
import { BadgeStyled } from './BadgeStyled';
import { Omit } from '../Utils/Omit';

export const Badge: SFC<
    BadgeProps &
        Omit<HTMLProps<HTMLSpanElement>, 'size'> &
        Omit<HTMLProps<HTMLAnchorElement>, 'size'>
> = ({
    children,
    format = 'default',
    href,
    label,
    size = 'sm',
    ref: _,
    ...props
}) => (
    <BadgeStyled href={href} format={format} size={size} {...props}>
        {children}
    </BadgeStyled>
);
