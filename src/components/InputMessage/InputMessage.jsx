// @flow
import React from 'react';
import classNames from 'classnames';
import styles from './InputMessage.scss';
import { findDOMNode } from 'react-dom';
import anime from 'animejs';

const displayName = 'InputMessage';

const defaultProps = {
    format: 'helper',
};

type Props = {
    className: string,
    format: 'helper' | 'negative',
};

class InputMessage extends React.Component {

    static defaultProps: Object;

    constructor(props: Props) {
        super(props);
    }

    componentDidMount() {
        const el = findDOMNode(this);
        if (el instanceof HTMLElement) {
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
    }


    componentWillLeave(callback: any) {
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
                />
        );
    }
}

InputMessage.displayName = displayName;

InputMessage.defaultProps = defaultProps;

export default InputMessage;
