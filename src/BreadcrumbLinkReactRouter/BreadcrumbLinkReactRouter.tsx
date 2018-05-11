import React from 'react';
import LinkText from '../LinkText';
import BreadcrumbLinkContent from '../BreadcrumbLinkContent';
import { Link } from 'react-router-dom';

export interface BreadcrumbLinkReactRouterProps {
    children: React.ReactChildren;
    to: string;
};

const BreadcrumbLinkReactRouter = ({
    children,
    to,
    ...filteredProps
    }: BreadcrumbLinkReactRouterProps)=> {

    return (
        <Link
            to={to}
            {...filteredProps}
        >
            <LinkText
                element="span"
                format="silent"
                title={children}
            >
                <BreadcrumbLinkContent>
                    {children}
                </BreadcrumbLinkContent>
            </LinkText>
        </Link>
    );
};

export default BreadcrumbLinkReactRouter;
