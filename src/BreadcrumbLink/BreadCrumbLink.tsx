import React from 'react';
import LinkText from '../LinkText';
import BreadcrumbLinkContent from '../BreadcrumbLinkContent';

export interface BreadcrumbLinkProps {
    children: React.ReactChildren;
    href: string;
};

const BreadcrumbLink = ({
    children,
    href,
    ...filteredProps
    }: BreadcrumbLinkProps) => {

    return (
        <LinkText
            href={href}
            decoration="silent"
            title={children}
            {...filteredProps}
        >
            <BreadcrumbLinkContent>
                {children}
            </BreadcrumbLinkContent>
        </LinkText>
    );
};

export default BreadcrumbLink;
