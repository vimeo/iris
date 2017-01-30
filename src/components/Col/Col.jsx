import * as React from 'react';
import classNames from 'classnames';
import styles from './Col.css';


var Col = React.createClass({

	displayName: 'Col',

	propTypes: {
		span: React.PropTypes.number,
		lgSpan: React.PropTypes.number,
		mdSpan: React.PropTypes.number,
		smSpan: React.PropTypes.number,
		order: React.PropTypes.number,
		rail: React.PropTypes.bool,
		className: React.PropTypes.string,
		offset: React.PropTypes.number
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
			offset,
			order,
			className,
			children
		} = this.props;

		const spanStyle = 'span-' + span;
		const lgSpanStyle = 'lg-span-' + lgSpan;
		const mdSpanStyle = 'md-span-' + mdSpan;
		const smSpanStyle = 'sm-span-' + smSpan;

		//offset class styles

		//Class builder
		const ColClass = classNames(
			styles.Col,
			styles[spanStyle],
			(lgSpan !== 0 ? styles[lgSpanStyle]: null),
			(mdSpan !== 0 ? styles[mdSpanStyle]: null),
			(smSpan !== 0 ? styles[smSpanStyle]: null),
			styles[align],
			this.props.className
		);

		//if order is put into place, order must be applied to all adjacent cols



		//nesting: check if the child of a col is a <Col></Col>

		return (
			<div class={ColClass} style="background-color: green;">
			</div>
		);
	},



});

export default Col;
