import * as React from 'react';
import classNames from 'classnames';
import styles from './Button.css';

const BUTTON_SIZES = ['large', 'small'];

const BUTTON_TYPES = [
	'primary',
	'secondary',
	'positive',
	'negative'
];

let Button = React.createClass({

	displayName: 'Button',

	propTypes: {
		isDisabled: React.PropTypes.bool,
		size: React.PropTypes.oneOf(BUTTON_SIZES),
		type: React.PropTypes.oneOf(BUTTON_TYPES),
	},

	getDefaultProps () {
		return {
			isDisabled: false,
			size: 'large',
			type: 'primary',
		};
	},

	render () {
		// classes
		let componentClass = classNames(
			styles.this,
			styles[this.props.type],
			(styles[this.props.size] ? styles[this.props.size]: null),
			this.props.className
		);


		// props
		let props = this.props;

		return (
			<button className={componentClass} disabled={props.isDisabled ? "disabled" : false} >{ this.props.children }</button>
		);
	},



});

export default Button;
