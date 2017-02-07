import * as React from 'react';
import classNames from 'classnames';
import styles from './Grid.css';
import Block from '../Block/Block.jsx';
import Col from '../Col/Col.jsx';

const displayName = 'Grid';


const propTypes = {
    className: React.PropTypes.string,
    centered: React.PropTypes.bool,
};

const defaultProps = {
    className: '',
    centered: false,
};

class Grid extends React.Component {

    render() {

		// classes
        const gridClasses = classNames(
			styles.Grid,
			(this.props.centered ? styles[this.props.centered] : null),
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

export { Block, Col, Grid };
// export default Grid;
