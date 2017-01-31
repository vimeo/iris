import * as React from 'react';
import classNames from 'classnames';
import Block from '../Block/Block.jsx';
import styles from './Grid.css';


const displayName = 'Grid';


const propTypes =  {
	className: React.PropTypes.string,
	centered: React.PropTypes.bool
};

const defaultProps = {
	className: '',
	centered: false
};

class Grid extends React.Component {

	render () {

		//classes
		let gridClasses = classNames(
			styles.Grid,
			(this.props.centered ? styles[center] : null),
			this.props.className
		);

		const {
			children,
			filteredProps
		} = this.props;

		return (
			<main className={gridClasses} {...filteredProps}>
				<Block>
					{children}
				</Block>
			</main>
		);
	}
}

Grid.displayName = displayName;

Grid.propTypes = propTypes;

Grid.defaultProps = defaultProps;

export default Grid;
