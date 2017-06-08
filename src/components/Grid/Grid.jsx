// @flow
import React from 'react';
import classNames from 'classnames';
import styles from './Grid.scss';
import GridBlock from '../GridBlock/GridBlock.jsx';
import GridCol from '../GridCol/GridCol.jsx';

const displayName = 'Grid';

type Props = {
    children: boolean,
    className?: string,
    centered?: boolean,
    hasMaxWidth?: boolean,
};

const Grid = ({
                    className,
                    children,
                    centered = false,
                    hasMaxWidth = true,
                    ...filteredProps
                }: Props): React$Element<*> => {

    // classes
    const gridClasses = classNames(
        styles.Grid,
        (centered ? styles.center : null),
        (hasMaxWidth ? styles.hasMaxWidth : null),
        className
    );

    return (
        <main className={gridClasses} {...filteredProps}>
            {children}
        </main>
    );
};

Grid.displayName = displayName;

export { GridBlock, GridCol, Grid };
