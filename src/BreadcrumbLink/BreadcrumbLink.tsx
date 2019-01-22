import React, { SFC, HTMLProps } from 'react';

import { LinkText, LinkTextProps } from '../LinkText/LinkText';
import { BreadcrumbLinkContent } from '../BreadcrumbLinkContent/BreadcrumbLinkContent';
import { Omit } from '../Utils/Omit';

export interface BreadcrumbLinkProps {
    format: 'lightTheme' | 'darkTheme';
    href: string;
}

export const BreadcrumbLink: SFC<
    BreadcrumbLinkProps &
        Omit<LinkTextProps, 'format'> &
        HTMLProps<HTMLAnchorElement>
> = ({ children, format = 'lightTheme', href, ...props }) => (
    <LinkText
        href={href}
        decoration="silent"
        format={format === 'darkTheme' ? 'primaryDark' : 'primary'}
        {...props}
    >
        <BreadcrumbLinkContent>{children}</BreadcrumbLinkContent>
    </LinkText>
);
