import React from 'react';
import LinkText, {LinkTextProps} from '../LinkText/LinkText';
import BreadcrumbLinkContent from '../BreadcrumbLinkContent';
import { Omit } from '../globals/js/type-helpers';
export interface BreadcrumbLinkProps extends Omit<LinkTextProps, 'format'> {
    format: 'lightTheme' | 'darkTheme';
    href: string;
};

const BreadcrumbLink = ({
    children,
    format="lightTheme",
    href,
    ...filteredProps
    }: BreadcrumbLinkProps) => {

    return (
        <LinkText
            href={href}
            decoration="silent"
            format={format === 'darkTheme' ? 'primaryDark' : 'primary'}
            {...filteredProps}
        >
            <BreadcrumbLinkContent>
                {children}
            </BreadcrumbLinkContent>
        </LinkText>
    );
};

export default BreadcrumbLink;
