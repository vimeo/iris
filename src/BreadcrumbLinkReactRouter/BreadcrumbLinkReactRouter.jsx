// @flow
import React from 'react';
import LinkText from '../LinkText';
import styles from '../Breadcrumb/Breadcrumb.scss';
import BreadcrumbLinkContent from '../BreadcrumbLinkContent';
import { Link } from 'react-router-dom';

const displayName = 'BreadcrumbLink';

type Props = {
    className?: string,
    children: string,
    to: string,
    onClick?: (e: Event) => {}
};

const BreadcrumbLinkReactRouter = ({
    className,
    children,
    to,
    onClick,
    ...filteredProps
    }: Props): React$Element<*> => {

    return (
        <Link
            to={to}
            onClick={onClick}
            className={styles.Link}
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

BreadcrumbLinkReactRouter.displayName = displayName;

export default BreadcrumbLinkReactRouter;
