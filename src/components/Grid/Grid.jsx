import * as React from 'react';
import classNames from 'classnames';
import styles from './Grid.css';


var Grid = React.createClass({

	displayName: 'Grid',

	propTypes: {
		className: React.propTypes.string
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
			<div class={gridClasses}>{children}</div>
		);
	},



});

export default Grid;
