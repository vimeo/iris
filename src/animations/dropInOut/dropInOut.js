import React from 'react';
import { findDOMNode } from 'react-dom';
import anime from 'animejs';
import styles from './dropInOut.scss';


function dropInOut(Component) {
    return class dropInOutAnimation extends React.Component {

        componentDidMount() {
            const el = findDOMNode(this);
            const elMeasureable = el.querySelector('[data-measureable="true"]');
            const elHeight = elMeasureable.clientHeight;
            const elContent = el.querySelectorAll('*');
            el.classList.add(styles.measured);

            anime({
                targets: [el, elContent],
                duration: 300,
                easing: 'easeInQuart',
                maxHeight: elHeight,
                opacity: 1,
            });

            anime({
                targets: [el],
                duration: 300,
                marginBottom: [0, 16],
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
            return <Component {...this.props} />;
        }
    };
}

export default dropInOut;
