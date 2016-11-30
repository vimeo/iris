import * as React from 'react';
import classNames from 'classnames';
import styles from './Badge.css';

const BADGE_TYPES = ['default', 'alum', 'beta'];

let Badge = React.createClass({

	displayName: 'Badge',

	propTypes: {
		href: React.PropTypes.string,
		type: React.PropTypes.oneOf(BADGE_TYPES),
	},

	getDefaultProps () {
		return {
			href: '#',
			type: 'default',
		};
	},

	render () {
		// classes
		let componentClass = classNames(
			styles.this,
			styles[this.props.type],
			this.props.className
		);


		// props
		let props = this.props;
		return (
			<a className={componentClass} href={props.href}>{ this.props.children}</a>
		);
	},



});

export default Badge;
