import React from 'react';
import classNames from 'classnames';
import styles from './InputMessage.scss';
import { findDOMNode } from 'react-dom';
import anime from 'animejs';

const displayName = 'InputMessage';

const formats = [
    'helper',
    'negative',
];

const propTypes = {
    className: React.PropTypes.string,
    children: React.PropTypes.node,
    format: React.PropTypes.oneOf(formats),
};

const defaultProps = {
    format: 'helper',
};

// Animation Decorator

class InputMessage extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const el = findDOMNode(this);
        const elHeight = el.clientHeight;
        const elContent = el.querySelectorAll('*');
        el.classList.add(styles.measured);

        anime({
            targets: [el, elContent],
            duration: 400,
            delay: 300,
            easing: 'easeInQuart',
            height: elHeight,
            opacity: 1,
        });
    }


    componentWillLeave(callback) {
        const el = findDOMNode(this);
        anime({
            targets: [el],
            duration: 300,
            easing: 'easeOutQuart',
            height: 0,
            marginBottom: 0,
            overflow: ['hidden', 'show'],
            opacity: 0,
            complete: callback,
        });
    }

    render() {

        // filter out props that are not meant to be passed in as an attribute from props and store the rest as "filteredProps" to be printed into the component as attrubutes in the tag (e.g. HTML attribute pass-through, event handlers)
        const {
            format,
            children,
            className,
            ...filteredProps
        } = this.props;

        // className builder
        const componentClass = classNames(
            styles.InputMessage,
            (format === 'negative' ? styles.negative : null),
            className
        );

        return (
                <div
                    {...filteredProps}
                    className={componentClass}
                >
                    {children}
                </div>
        );
    }
}

InputMessage.displayName = displayName;

InputMessage.propTypes = propTypes;

InputMessage.defaultProps = defaultProps;

export default InputMessage;
