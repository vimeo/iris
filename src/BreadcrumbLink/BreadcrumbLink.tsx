import React, { SFC, HTMLProps } from 'react';

import LinkText, { LinkTextProps } from '../LinkText/LinkText';
import BreadcrumbLinkContent from '../BreadcrumbLinkContent';
import { Omit } from '../globals/js/type-helpers';

export interface BreadcrumbLinkProps {
    format: 'lightTheme' | 'darkTheme';
    href: string;
}

const BreadcrumbLink: SFC<
    BreadcrumbLinkProps &
        Omit<LinkTextProps, 'format'> &
        HTMLProps<HTMLAnchorElement>
> = ({ children, format = 'lightTheme', href, ...filteredProps }) => (
    <LinkText
        href={href}
        decoration="silent"
        format={format === 'darkTheme' ? 'primaryDark' : 'primary'}
        {...filteredProps}
    >
        <BreadcrumbLinkContent>{children}</BreadcrumbLinkContent>
    </LinkText>
);

export default BreadcrumbLink;
