import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import ReactSwipe from 'react-swipe';
import {
    ContentCarouselPropsAll,
    ContentCarouselState,
} from './ContentCarouselTypes';
import { CarouselDotNav } from '../CarouselDotNav/CarouselDotNav';

export class ContentCarousel extends Component<
    ContentCarouselPropsAll,
    ContentCarouselState
> {
    static defaultProps = {
        initialSlide: 0,
        infinite: true,
        showIndexedNav: true,
        speed: 300,
        theme: 'light',
    };

    carouselInstance: any;
    state: ContentCarouselState;
    props: ContentCarouselPropsAll;

    constructor(props: ContentCarouselPropsAll) {
        super(props);
        this.state = {
            currentSlideIndex: this.props.initialSlide || 0,
        };
    }

    /*
     * set attributes that help assitive tech understand the carousel
     * see:  https://www.w3.org/WAI/tutorials/carousels/
     */

    _addA11yAttributesToLiveSlide = item => {
        /* clear existing attribute if any */
        const el = findDOMNode(this);
        const previousSlide = el && el.querySelector('[aria-live]');

        if (previousSlide instanceof HTMLElement) {
            previousSlide.removeAttribute('aria-live');
            previousSlide.removeAttribute('aria-atomic');
        }

        /* set new aria attributes on live slide*/
        if (item instanceof HTMLElement) {
            item.setAttribute('aria-live', 'polite');
            item.setAttribute('aria-atomic', 'true');
        }
    };

    _onChangeStart = index => {
        this.setState({
            currentSlideIndex: index,
        });
    };

    _onChangeEnd = (index, item) => {
        this._addA11yAttributesToLiveSlide(item);
        if (typeof this.props.onSlideChange === 'function') {
            this.props.onSlideChange(index);
        }
    };

    _onNavDotClick = (index: number) => {
        this.carouselInstance.slide(index, this.props.speed);
    };

    _onNextClick = () => {
        this.carouselInstance.next();
    };

    _onPrevClick = () => {
        this.carouselInstance.prev();
    };

    public initialize = () => {
        this.carouselInstance.swipe.setup();
    };

    public render() {
        const {
            a11yGoToSlideText,
            a11yNextSlideText,
            a11yPrevSlideText,
            autoplayInterval,
            children,
            initialSlide = 0,
            infinite = true,
            showIndexedNav = true,
            speed = 300,
            theme = 'light',
            ...filteredProps
        } = this.props;

        const sliderSettings = {
            startSlide: initialSlide,
            speed,
            auto: autoplayInterval,
            continuous: infinite,
            callback: this._onChangeStart,
            transitionEnd: this._onChangeEnd,
        };

        const slideCount = React.Children.toArray(children).length;

        return (
            <div {...filteredProps}>
                <ReactSwipe
                    key={slideCount}
                    ref={thisCarousel => (this.carouselInstance = thisCarousel)}
                    swipeOptions={sliderSettings}
                >
                    {children}
                </ReactSwipe>
                <CarouselDotNav
                    a11yGoToSlideText={a11yGoToSlideText}
                    a11yNextSlideText={a11yNextSlideText}
                    a11yPrevSlideText={a11yPrevSlideText}
                    currentSelectedIndex={this.state.currentSlideIndex}
                    dotCount={slideCount}
                    onDotClick={this._onNavDotClick}
                    onNextClick={this._onNextClick}
                    onPrevClick={this._onPrevClick}
                    showIndexedNav={showIndexedNav}
                    theme={theme}
                />
            </div>
        );
    }
}
