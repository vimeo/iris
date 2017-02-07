import * as React from 'react';
import classNames from 'classnames';
import styles from './Block.css';


const displayName = 'Block';


const propTypes = {
    nowrap: React.PropTypes.bool,
};

const defaultProps = {
};


class Block extends React.Component {
    render() {

		// Class builder
        const blockClass = classNames(
			styles.Block,
			(this.props.nowrap ? styles.nowrap : null),
			this.props.className
		);

        const {
			children,
			filteredProps,
		} = this.props;

        return (
			<div className={blockClass} {...filteredProps}>
				{children}
			</div>
        );

    }
}


Block.displayName = displayName;

Block.propTypes = propTypes;

Block.defaultProps = defaultProps;

export default Block;
