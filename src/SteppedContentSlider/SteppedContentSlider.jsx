// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import Swipeable from 'react-swipeable';
import classNames from 'classnames';
import styles from './SteppedContentSlider.scss';
import pixelsToRem from '../globals/js/utilities/pixelsToRem';
import { throttle } from 'lodash';
import Header4 from '../Type/Header4';
import ButtonIconOnly from '../ButtonIconOnly';
import ChevronRight from '../icons/chevron-right.svg';

const displayName = 'SteppedContentSlider';

type Props = {
    backgroundBlendColor: string,
    buttonFormat?: 'dark'| 'alternative' | 'light' | 'warning' | 'lightWarning'| 'lightTransparent',
    children: React$Element<*>,
    className?: string,
    currentSlide?: number,
    header?: string,
    headerElement?: 'h1'| 'h2' | 'h3' | 'h4' | 'h5' | 'h6',
    nextLabel: string,
    onSlideChange?: (previousSlide: number, currentSlide: number) => void,
    previousLabel: string,
    slideMargin: number,
    stepMode: 'group' | 'single',
    speed: number,
};

type State = {
    animate?: boolean,
    currentSlide: number,
    initialPositionSet: boolean,
    showNext?: boolean,
    showPrevious?: boolean,
    slides?: React$Element<*>,
    slideCount: number,
    slideCountPerStep: number,
    slideContainerHeight: number,
    slideWidth?: number,
    slideIsBiggerThanViewport: boolean,
    trackWidth: number,
    trackOffset: number,
};

class SteppedContentSlider extends React.Component {

    static defaultProps = {
        backgroundBlendColor: '#fff',
        buttonFormat: 'dark',
        headerElement: 'h4',
        slideMargin: 16,
        stepMode: 'group',
        speed: 500,
    };


    constructor(props: Props) {
        super(props);

        const childCount = React.Children.count(props.children);

        this.state = {
            currentSlide: this.props.currentSlide || 0,
            currentStep: 0,
            initialPositionSet: false,
            slides: props.children,
            slideContainerHeight: 0,
            slideCount: childCount,
            slideCountPerStep: 1,
            slideIsBiggerThanViewport: false,
            trackWidth: 0,
            trackOffset: 0,
        };

        // read TruncationWidth from sass
        this.truncationWidth = parseInt(styles.TruncationWidth, 10);

        // throttle resize
        this._handleResize = throttle(this._handleResize, 1000);

    }

    state: State;

    componentDidMount() {
        // initialize slidier
        this._buildSlides(this.props.children);
        window.addEventListener('resize', this._handleResize);
    }

    componentWillUpdate(nextProps: Props) {

        // programmatic control of slideshow by props.
        if (this.props.currentSlide !== nextProps.currentSlide && typeof nextProps.currentSlide === 'number') {
            this._changeSlide(nextProps.currentSlide, true);
        }

        // handle changes to slide payload (adding/substracting slides)
        if (nextProps.children !== this.props.children) {
            this._buildSlides(nextProps.children);
        }
    }


    componentDidUpdate(prevProps: Props, prevState: State) {
        // once the slider exists (especially dom-based measurements are concluded), we finish setting the slider up by postining it at its starting point.
        if (!this.state.initialPositionSet && this.state.slideCountPerStep) {
            this._updateA11yVisibility();
            this._changeSlide(this.state.currentSlide, false);
            this.setState({ // eslint-disable-line react/no-did-update-set-state
                initialPositionSet: true,
            });
        }

        // slide has changed
        if (this.state.currentSlide !== prevState.currentSlide) {
            this._updateA11yVisibility();

            if (typeof this.props.onSlideChange === 'function') {
                this.props.onSlideChange(prevState.currentSlide, this.state.currentSlide);
            }
        }

    }

    componentWillUnmount() {
        // cleanup
        window.removeEventListener('resize', this._handleResize);
    }

    props: Props;
    viewContainer: HTMLElement;
    viewTrack: HTMLElement;
    truncationWidth: number;

    // this is the core slide initialization
    _buildSlides = (children: React$Element<*>) => {

        const slideSpecs = this._setSlideSpecs();

        if (typeof slideSpecs === 'object') {
            this._setTrackWidth(slideSpecs);
        }

        // wrap children in divs that provide the slide layout
        const formattedSlides = React.Children.map(children, (child, i) => {
            /* !! NOTE: data-slide used by updateAllyVisibility query !! */
            return (
                <div
                    data-slide
                    className={styles.SlideContent}
                    key={`slideContent${i}`}
                    style={{ marginRight: pixelsToRem(this.props.slideMargin) }}
                >
                    {child}
                </div>
            );

        });

        // we need to reset to the current slide position as measurements may have changed.
        this._changeSlide(this.state.currentSlide, true);

        // store formatted slides in state
        this.setState({
            slides: formattedSlides,
        });
    }

    // handle slide changes
    _changeSlide = (nextSlide: number, animate: boolean) => {
        // catch slide target exceeding slide count.
        if (nextSlide < 0) {
            nextSlide = 0;
        }
        else if (nextSlide >= this.state.slideCount) {
            nextSlide = this.state.slideCount - 1;
        }

        const prevNextShow = this._checkPrevNextShow(nextSlide);
        let offsetModifier = 0;

        if (prevNextShow.showPrevious) {
            offsetModifier += this.truncationWidth;
        }

        const trackOffset = nextSlide * -1 * (this.props.slideMargin + this.state.slideWidth) + offsetModifier;

        this.setState({
            animate,
            currentSlide: nextSlide,
            trackOffset: typeof trackOffset === 'number' ? trackOffset : 0,
            showNext: prevNextShow.showNext,
            showPrevious: prevNextShow.showPrevious,
        });
    }

    // assess what controls if any we need
    _checkPrevNextShow = (slide: number) => {
        return ({
            showNext: (slide + 1) < this.state.slideCount,
            showPrevious: slide > 0,
        });

    }

    // if the viewport changes we probably need to reassess some things.
    _handleResize = () => {
        this._buildSlides(this.props.children);
    }

    _onNextStepClick = () => {
        const nextSlide = this.state.currentSlide + this.state.slideCountPerStep;
        this._changeSlide(nextSlide, true);
    }

    _onPreviousStepClick = () => {
        const nextSlide = this.state.currentSlide - this.state.slideCountPerStep;
        this._changeSlide(nextSlide, true);
    }

    _onSwipingLeft = () =>{
        if (this.state.showNext && !this.slideIsBiggerThanViewportg) {
            this._onNextStepClick();
        }
    }

    _onSwipingRight = () =>{
        if (this.state.showPrevious && !this.slideIsBiggerThanViewport) {
            this._onPreviousStepClick();
        }
    }

    _setTrackWidth = (slideSpecs: Object) => {
        const childCount = React.Children.count(this.props.children);
        this.setState({
            slideCount: childCount,
            trackWidth: childCount * (this.props.slideMargin + slideSpecs.slideWidth),
        });
    }

    // run the measurements based on the DOM
    _setSlideSpecs = () => {
        const container = ReactDOM.findDOMNode(this.viewContainer);
        const viewTrack = ReactDOM.findDOMNode(this.viewTrack);
        const firstSlide = viewTrack && viewTrack.firstChild;

        if (container instanceof HTMLElement && firstSlide instanceof HTMLElement) {
            const slideContainerWidth = container.offsetWidth - (this.truncationWidth * 2);
            const slideContainerHeight = container.offsetHeight;
            const slideWidth = firstSlide.offsetWidth;
            const slideCountPerStep = this.props.stepMode === 'group' ? Math.floor(slideContainerWidth / slideWidth) : 1;
            const slideIsBiggerThanViewport = slideWidth > slideContainerWidth;
            const slideSpecs = {
                slideWidth,
                slideCountPerStep,
                slideContainerHeight,
                slideIsBiggerThanViewport,
            };

            this.setState(slideSpecs);

            return slideSpecs;
        }

        return false;
    }

    // manipulate aria-hidden so screen readers know what is showing or not
    // this manipulatess the DOM directly but everytime the component updates.

    _updateA11yVisibility = () => {
        const viewTrack = ReactDOM.findDOMNode(this.viewTrack);
        const slides = viewTrack instanceof HTMLElement && viewTrack.querySelectorAll('[data-slide]');

        if (slides instanceof NodeList) {
            slides.forEach((slide, i) => {
                const isHidden = i >= this.state.currentSlide && i < this.state.currentSlide + this.state.slideCountPerStep ? 'false' : 'true';

                slide.setAttribute('aria-hidden', isHidden);
            });
        }
    }

    render() {

        const {
            backgroundBlendColor,
            buttonFormat,
            children, // eslint-disable-line no-unused-vars
            className,
            currentSlide, // eslint-disable-line no-unused-vars
            header,
            headerElement,
            nextLabel,
            previousLabel,
            slideMargin, // eslint-disable-line no-unused-vars
            stepMode, // eslint-disable-line no-unused-vars
            speed,
            ...filteredProps
        } = this.props;

        // className builder
        const componentClass = classNames(
            styles.SteppedContentSlider,
            (this.state.showPrevious ? styles.hasPrevious : null),
            (this.state.showNext ? styles.hasNext : null),
            (this.state.slideIsBiggerThanViewport ? styles.scrollFallback : null),
            className
        );


        const previousTruncationClass = classNames(
            styles.TruncationOverlay,
            styles.PreviousTruncation,
            (this.state.showPrevious && !this.state.slideIsBiggerThanViewport ? styles.show : null),
        );

        const nextTruncationClass = classNames(
            styles.TruncationOverlay,
            styles.NextTruncation,
            (this.state.showNext && !this.state.slideIsBiggerThanViewport ? styles.show : null),
        );

        const showNavigation = this.state.slideCount > this.state.slideCountPerStep && !this.state.slideIsBiggerThanViewport;

        const headerAreaClass = classNames(
            styles.HeaderArea,
            (showNavigation ? styles.show : null),
        );

        // the gradient overlay  for truncation is dynamic
        const buildTruncationBackground = (mode: 'previous' | 'next') => {
            const direction = mode === 'previous' ? 'right' : 'left';
            return (`linear-gradient(to ${direction}, ${backgroundBlendColor} 0%,rgba(255,255,255,0) 100%)`);
        };

        return (
            <div>
                <div className={headerAreaClass}>
                    {header && (
                        <Header4
                            element={headerElement}
                            className={styles.Header}
                        >
                            {header}
                        </Header4>
                    )}
                    {showNavigation && (
                        <div
                            className={styles.ControlsContainer}
                        >
                            <ButtonIconOnly
                                className={styles.PreviousButton}
                                icon={<ChevronRight className={styles.PreviousButtonIcon} title={previousLabel} />}
                                format={buttonFormat}
                                size="md"
                                onClick={this._onPreviousStepClick}
                                disabled={!this.state.showPrevious}
                            />
                            <ButtonIconOnly
                                icon={<ChevronRight title={nextLabel} />}
                                format={buttonFormat}
                                size="md"
                                onClick={this._onNextStepClick}
                                disabled={!this.state.showNext}
                            />
                        </div>
                    )}
                </div>
                <Swipeable
                    onSwipingLeft={this._onSwipingLeft}
                    onSwipingRight={this._onSwipingRight}
                >
                    <div
                        ref={(div) => {
                            this.viewContainer = div;
                        }}
                        {...filteredProps}
                        className={componentClass}
                    >
                        <div
                            ref={(div) => {
                                this.viewTrack = div;
                            }}
                            style={{
                                width: pixelsToRem(this.state.trackWidth),
                                transform: `translateX(${pixelsToRem(this.state.trackOffset)})`,
                                transition: this.state.animate && `transform ${speed}ms ease`,
                            }}
                        >
                            {this.state.slides}
                        </div>
                        <div
                            className={previousTruncationClass}
                            style={{
                                background: buildTruncationBackground('previous'),
                                height: pixelsToRem(this.state.slideContainerHeight),
                            }}
                        />
                        <div
                            className={nextTruncationClass}
                            style={{
                                background: buildTruncationBackground('next'),
                                height: pixelsToRem(this.state.slideContainerHeight),
                            }}
                        />
                    </div>
                </Swipeable>
            </div>
        );
    }
}

SteppedContentSlider.displayName = displayName;
export default SteppedContentSlider;
