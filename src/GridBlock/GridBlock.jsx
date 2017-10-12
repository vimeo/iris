// @flow
import React from 'react';
import classNames from 'classnames';
import styles from './GridBlock.scss';

const displayName = 'GridBlock';

type Props = {
    children: React$Element<*>,
    className?: string,
    nowrap?: boolean,
};

const GridBlock = ({
                    children,
                    className,
                    nowrap = false,
                    ...filteredProps
                }: Props): React$Element<*> => {

    // Class builder
    const gridBlockClasses = classNames(
        styles.GridBlock,
        (nowrap ? styles.nowrap : null),
        className
    );

    return (
        <div className={gridBlockClasses} {...filteredProps}>
            {children}
        </div>
    );
};


GridBlock.displayName = displayName;

export default GridBlock;
