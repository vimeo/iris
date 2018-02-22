// @flow
import React from 'react';
import classNames from 'classnames';
import styles from './VerticalMenuToggleButton.scss';
import RightArrow from '../icons/chevron-right.svg';

const displayName = 'VerticalMenuToggleButton';

type Props = {
    className?: string,
    nestedButtonLabel: string,
};

const VerticalMenuToggleButton = ({
    className,
    nestedButtonLabel,
    ...filteredProps
}: Props): React$Element<*> => {

    // className builder
    const componentClass = classNames(
        styles.VerticalMenuToggleButton,
        className
    );

    return (
            <button
                {...filteredProps}
                className={componentClass}
            >
                <RightArrow className={styles.Icon} title={nestedButtonLabel} />
            </button>
    );
};

VerticalMenuToggleButton.displayName = displayName;

export default VerticalMenuToggleButton;
