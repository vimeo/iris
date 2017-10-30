// @flow
import React from 'react';
import classNames from 'classnames';
import styles from '../VerticalMenuItem/VerticalMenuItem.scss';
import VerticalMenuItemContent from '../VerticalMenuItemContent/VerticalMenuItemContent';
import { Link } from 'react-router-dom';

const displayName = 'VerticalMenuItem';

type Props = {
    className?: string,
    isActive?: boolean,
    linkActionIcon?: React$Element<*>,
    labelIcon?: React$Element<*>,
    labelIconActive?: React$Element<*>,
    nestedInteraction?: React$Element<*>,
    id?: string,
    label: React$Element<*> | string,
    onClick?: Function,
    truncateLabel?: boolean,
};

const VerticalMenuItem = ({
    className,
    label,
    id,
    isActive,
    labelIcon,
    labelIconActive,
    linkActionIcon,
    nestedInteraction,
    onClick,
    truncateLabel,
    ...filteredProps
}: Props): React$Element<*> => {

    const componentClass = classNames(
        styles.Wrapper,
        styles.textOverrides,
        (isActive ? styles.isActive : null),
        className
    );

    return (
        <div className={componentClass}>
            <Link
                {...filteredProps}
                className={styles.Link}
            >
            <VerticalMenuItemContent
                label={label}
                labelIcon={labelIcon}
                linkActionIcon={linkActionIcon}
                labelIconActive={labelIconActive}
                isActive={isActive}
                truncateLabel={truncateLabel}
            />
            </Link>
            <div
                className={styles.nestedInteractionWrapper}
            >
                {nestedInteraction}
            </div>
        </div>
    );
};

VerticalMenuItem.displayName = displayName;

export default VerticalMenuItem;
