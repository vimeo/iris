// @flow
import React from 'react';
import classNames from 'classnames';
import styles from './ListItem.scss';

const displayName = 'ListItem';

type Props = {
    className?: string,
    children: React$Element<*>,
};

const ListItem = ({
                    children,
                    className,
                    ...filteredProps
}: Props): React$Element<*> => {

    // className builder
    const componentClass = classNames(
        styles.ListItem,
        className
    );

    return (
        <li
            {...filteredProps}
            className={componentClass}
        >
            {children}
        </li>
    );
};

ListItem.displayName = displayName;

export default ListItem;
