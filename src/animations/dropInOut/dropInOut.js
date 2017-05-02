import React from 'react';
import { findDOMNode } from 'react-dom';
import anime from 'animejs';
import styles from './dropInOut.scss';


function dropInOut(Component) {
    return class dropInOutAnimation extends React.Component {

        // componentWillMount() {
        //     const el = findDOMNode(this);
        //     el.classList.add();
        //     // anime({
        //     //     targets: [el],
        //     //     duration: 300,
        //     //     easing: 'easeInQuart',
        //     //     maxHeight: [0, elHeight],
        //     //     overflow: ['hidden', 'show'],
        //     //     complete: callback,
        //     // });
        // }

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
            return <Component {...this.props} />;
        }
    };
}

export default dropInOut;
