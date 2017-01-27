import * as React from 'react';
import classNames from 'classnames';
import styles from './Block.css';

var Block = React.createClass({

	displayName: 'Block',

	propTypes: {
		span: React.PropTypes.number,
		lgSpan: React.PropTypes.number,
		mdSpan: React.PropTypes.number,
		smSpan: React.PropTypes.number,
		align: React.PropTypes.string,
		rail: React.PropTypes.bool,
		className: React.PropTypes.string,

	},

	getDefaultProps () {
		return {
			span: 24,
			lgSpan: 0,
			mdSpan: 0,
			smSpan: 0,
			align: '',
			rail: false,
			className: ''
		};
	},

	render () {
		const {
			span,
			lgSpan,
			mdSpan,
			smSpan,
			align,
			rail,
			className,
			children
		} = this.props;


		//Class declarations
		const spanStyle = 'span-' + span;
		const lgSpanStyle = 'lg-span-' + lgSpan;
		const mdSpanStyle = 'md-span-' + mdSpan;
		const smSpanStyle = 'sm-span-' + smSpan;

		const blockClass = classNames(
			styles.Block,
			styles[spanStyle],
			(lgSpan !== 0 ? styles[lgSpanStyle]: null),
			(mdSpan !== 0 ? styles[mdSpanStyle]: null),
			(smSpan !== 0 ? styles[smSpanStyle]: null),
			styles[align],
			this.props.className
		);

		if(!rail) {
			return (
				<div className={blockClass}>
					<div className={styles.nested}>
						{children}
					</div>
				</div>
			);
		} else {
			return (
				<aside className={blockClass}>
					<div className={styles.nested}>
						{children}
					</div>
				</aside>
			);
		}
	},



});

export default Block;
