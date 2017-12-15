// @flow
import React from 'react';
import ArrowLeft from '../icons/arrow-left.svg';
import styles from '../Breadcrumb/Breadcrumb.scss';

const displayName = 'BreadcrumbLink';

type Props = {
    children: string,
};

const BreadcrumbLinkContent = ({
    children,
    ...filteredProps
    }: Props): React$Element<*> => {

    return (
        <span>
            <ArrowLeft className={styles.ArrowIcon} />
            <span className={styles.LinkLabel}>
                {children}
            </span>
        </span>
    );
};

BreadcrumbLinkContent.displayName = displayName;

export default BreadcrumbLinkContent;
