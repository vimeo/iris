// @flow
import React from 'react';
import classNames from 'classnames';
import styles from './Grid.scss';


const displayName = 'Grid';

type Props = {
    children: React$Element<*>,
    className?: string,
    centered?: boolean,
    element?: 'div' | 'main' | 'aside' | 'section',
    hasMaxWidth?: boolean,
    isNested?: boolean,
};

const Grid = ({
    className,
    children,
    centered = false,
    element = 'main',
    hasMaxWidth = true,
    isNested,
    ...filteredProps
}: Props): React$Element<*> => {

    // classes
    const gridClasses = classNames(
        styles.Grid,
        (centered ? styles.center : null),
        (hasMaxWidth ? styles.hasMaxWidth : null),
        (isNested ? styles.isNested : null),
        className
    );

    const Element = element;
    return (
        <Element className={gridClasses} {...filteredProps}>
            {children}
        </Element>
    );
};

Grid.displayName = displayName;

export default Grid;
