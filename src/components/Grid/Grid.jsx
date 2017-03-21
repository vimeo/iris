import * as React from 'react';
import classNames from 'classnames';
import styles from './Grid.css';
import GridBlock from '../GridBlock/GridBlock.jsx';
import GridCol from '../GridCol/GridCol.jsx';

const displayName = 'Grid';


const propTypes = {
    className: React.PropTypes.string,
    centered: React.PropTypes.bool,
    hasMaxWidth: React.PropTypes.bool,
};

const defaultProps = {
    className: '',
    centered: false,
    hasMaxWidth: true,
};

const Grid = (props) => {
    const {
        className,
        centered,
        children,
        hasMaxWidth,
        ...filteredProps
    } = props;

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

Grid.propTypes = propTypes;

Grid.defaultProps = defaultProps;

export { GridBlock, GridCol, Grid };
