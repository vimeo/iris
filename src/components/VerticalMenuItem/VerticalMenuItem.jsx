// @flow
import React from 'react';
import classNames from 'classnames';
import styles from './VerticalMenuItem.scss';
import VerticalMenuItemContent from '../VerticalMenuItemContent/VerticalMenuItemContent';

const displayName = 'VerticalMenuItem';

type Props = {
    className?: string,
    href?: string,
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
    href = '#',
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

    // className builder
    const componentClass = classNames(
        styles.Wrapper,
        styles.textOverrides,
        (isActive ? styles.isActive : null),
        className
    );


    return (
        <div className={componentClass}>
            <a
                {...filteredProps}
                className={styles.Link}
                href={href}
                onClick={onClick}
            >
                <VerticalMenuItemContent
                    label={label}
                    labelIcon={labelIcon}
                    linkActionIcon={linkActionIcon}
                    labelIconActive={labelIconActive}
                    isActive={isActive}
                    truncateLabel={truncateLabel}
                />
            </a>
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
