import React from 'react';
import LinkText, {LinkTextProps} from '../LinkText';
import BreadcrumbLinkContent from '../BreadcrumbLinkContent';

export interface BreadcrumbLinkProps extends LinkTextProps {
    children: React.ReactChildren;
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
