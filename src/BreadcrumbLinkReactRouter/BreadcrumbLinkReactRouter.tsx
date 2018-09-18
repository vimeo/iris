import React, { SFC, ReactNode } from 'react';

import LinkText from '../LinkText';
import BreadcrumbLinkContent from '../BreadcrumbLinkContent';
import { Link } from 'react-router-dom';

export interface BreadcrumbLinkReactRouterProps {
    children: ReactNode;
    format: 'lightTheme' | 'darkTheme';
    to: string;
}

const BreadcrumbLinkReactRouter: SFC<BreadcrumbLinkReactRouterProps> = ({
    children,
    format = 'lightTheme',
    to,
    ...filteredProps
}) => (
    <Link to={to} {...filteredProps}>
        <LinkText
            element="span"
            format={format === 'darkTheme' ? 'primaryDark' : 'primary'}
            decoration="silent"
            title={children}
        >
            <BreadcrumbLinkContent>{children}</BreadcrumbLinkContent>
        </LinkText>
    </Link>
);

export default BreadcrumbLinkReactRouter;
