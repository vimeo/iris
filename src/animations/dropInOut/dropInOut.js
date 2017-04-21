import React from 'react';
import { findDOMNode } from 'react-dom';
import anime from 'animejs';


function dropInOut(Component) {
    return class dropInOutAnimation extends React.Component {

        componentWillEnter(callback) {
            const el = findDOMNode(this);
            const elHeight = el.clientHeight;
            anime({
                targets: [el],
                duration: 4000,
                easing: 'easeInQuart',
                maxHeight: [0, elHeight],
                overflow: ['hidden', 'show'],
                complete: callback,
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
