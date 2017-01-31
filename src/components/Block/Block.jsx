import * as React from 'react';
import classNames from 'classnames';
import styles from './Block.css';


const displayName = 'Block';


const propTypes =  {
	span: React.PropTypes.number,
	lgSpan: React.PropTypes.number,
	mdSpan: React.PropTypes.number,
	smSpan: React.PropTypes.number,
	align: React.PropTypes.string,
	rail: React.PropTypes.bool
};

const defaultProps = {
	span: 24
};


class Block extends React.Component {
	render() {

		//Class builder
		const blockClass = classNames(
			styles.Block,
			styles['span-' + this.props.span],
			(this.props.lgSpan ? styles['lg-span-' + this.props.lgSpan]: null),
			(this.props.mdSpan ? styles['md-span-' + this.props.mdSpan]: null),
			(this.props.smSpan ? styles['sm-span-' + this.props.smSpan]: null),
			styles[align],
			this.props.className
		);

		const {
			align,
			rail,
			className,
			children
		} = this.props;

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
	}
}


Block.displayName = displayName;

Block.propTypes = propTypes;

Block.defaultProps = defaultProps;

export default Block;
