// @flow
import React from 'react';
import classNames from 'classnames';
import ListItem from '../ListItem/ListItem';
import styles from './List.scss';


const displayName = 'List';

type Props = {
    children: React$Element<*>,
    className?: string,
    isOrdered: boolean;
};

const List = ({
                children,
                className,
                isOrdered,
                ...filteredProps
}: Props): React$Element<*> => {

    // className builder
    const componentClass = classNames(
        styles.List,
        className
    );

    const ListElement = isOrdered ? 'ol' : 'ul';

    return (
        <ListElement
            {...filteredProps}
            className={componentClass}
        >
            {children}
        </ListElement>
    );
};

List.displayName = displayName;

export { List, ListItem };
