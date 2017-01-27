import * as React from 'react';
import classNames from 'classnames';
import styles from './Grid.css';


var Grid = React.createClass({

	displayName: 'Grid',

	propTypes: {
		className: React.PropTypes.string
	},

	getDefaultProps () {
		return {
			className: ''
		};
	},

	render () {
		const {
			className,
			children
		} = this.props;

		//classes
		let gridClasses = classNames(
			styles.grid,
			className
		);

		return (
			<main className={gridClasses}>{children}</main>
		);
	},



});

export default Grid;
