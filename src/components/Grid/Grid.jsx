import * as React from 'react';
import classNames from 'classnames';
import styles from './Grid.css';


var Grid = React.createClass({

	displayName: 'Grid',

	propTypes: {
		className: React.PropTypes.string,
		centered: React.PropTypes.bool
	},

	getDefaultProps () {
		return {
			className: '',
			centered: false
		};
	},

	render () {
		const {
			className,
			children,
			align,
			centered
		} = this.props;

		//classes
		let gridClasses = classNames(
			styles.grid,
			(centered ? styles[center] : null),
			className
		);

		return (
			<main className={gridClasses}>{children}</main>
		);
	},



});

export default Grid;
