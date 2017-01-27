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

		//classes
		let gridClasses = classNames(
			styles.grid,
			this.props.className
		);

		return (
			<div class={gridClasses}></div>
		);
	},



});

export default Grid;
