import * as React from 'react';
import classNames from 'classnames';
import styles from './GridBlock.css';


const displayName = 'GridBlock';


const propTypes = {
    nowrap: React.PropTypes.bool,
};

const defaultProps = {
    nowrap: false,
};


class GridBlock extends React.Component {
    render() {

        // Class builder
        const gridBlockClasses = classNames(
            styles.GridBlock,
            (this.props.nowrap ? styles.nowrap : null),
            this.props.className
        );

        const {
			children,
            ...filteredProps
		} = this.props;

        return (
            <div className={gridBlockClasses} {...filteredProps}>
                {children}
            </div>
        );

    }
}


GridBlock.displayName = displayName;

GridBlock.propTypes = propTypes;

GridBlock.defaultProps = defaultProps;

export default GridBlock;
