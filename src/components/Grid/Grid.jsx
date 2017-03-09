import * as React from 'react';
import classNames from 'classnames';
import styles from './Grid.css';
import GridBlock from '../GridBlock/GridBlock.jsx';
import GridCol from '../GridCol/GridCol.jsx';

const displayName = 'Grid';


const propTypes = {
    className: React.PropTypes.string,
    centered: React.PropTypes.bool,
    infinite: React.PropTypes.bool,
};

const defaultProps = {
    className: '',
    centered: false,
    infinite: false,
};

class Grid extends React.Component {

    render() {

		// classes
        const gridClasses = classNames(
			styles.Grid,
			(this.props.centered ? styles.center : null),
			(this.props.infinite ? styles.infinite : null),
			this.props.className
		);

        const {
			children,
			filteredProps,
		} = this.props;

        return (
			<main className={gridClasses} {...filteredProps}>
				{children}
			</main>
        );
    }
}

Grid.displayName = displayName;

Grid.propTypes = propTypes;

Grid.defaultProps = defaultProps;

export { GridBlock, GridCol, Grid };
// export default Grid;
