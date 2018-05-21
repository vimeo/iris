// @flow
import React from 'react';
import LinkText from '../LinkText';
import styles from '../Breadcrumb/Breadcrumb.scss';
import BreadcrumbLinkContent from '../BreadcrumbLinkContent';

const displayName = 'BreadcrumbLink';

type Props = {
    className?: string,
    children: string,
    href: string,
    onClick?: (e: Event) => {}
};

const BreadcrumbLink = ({
    className,
    children,
    href,
    onClick,
    ...filteredProps
    }: Props): React$Element<*> => {

    return (
        <LinkText
            className={styles.Link}
            href={href}
            onClick={onClick}
            decoration="silent"
            title={children}
        >
            <BreadcrumbLinkContent>
                {children}
            </BreadcrumbLinkContent>
        </LinkText>
    );
};

BreadcrumbLink.displayName = displayName;

export default BreadcrumbLink;
