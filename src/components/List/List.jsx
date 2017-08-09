// @flow
import React from 'react';
import classNames from 'classnames';
import ListItem from '../ListItem/ListItem';
import styles from './List.scss';


const displayName = 'List';

type Props = {
    children: React$Element<*>,
    className?: string,
    format?: 'ordered' | 'unordered' | 'alphabet',
};

const List = ({
    children,
    className,
    format = 'unordered',
    ...filteredProps
}: Props): React$Element<*> => {

    // className builder
    const componentClass = classNames(
        styles.List,
        className
    );

    let ListElement = 'ol';

    if (format === 'unordered') {
        ListElement = 'ul';
    }

    return (
        <ListElement
            {...filteredProps}
            className={componentClass}
            type={format === 'alphabet' ? 'a' : null}
        >
            {children}
        </ListElement>
    );
};

List.displayName = displayName;

export { List, ListItem };
