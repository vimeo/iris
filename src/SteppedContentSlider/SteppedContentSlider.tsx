import React, { SFC, ReactNode } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { rem } from 'polished';
import Swipeable from 'react-swipeable';
import throttle from 'lodash/throttle';
import Header4 from '../Type/Header4';
import ButtonIconOnly from '../ButtonIconOnly';
import ChevronRight from '../icons/chevron-right.svg';

const TRUNCATION_WIDTH = 100;

export interface SteppedContentSliderProps
    extends React.HTMLProps<HTMLDivElement> {
    /**
     * adds an area to the left of the navigation controls for things like a "view all" link
     */
    additionalControlArea?: ReactNode;
    /**
     * takes a hex value as a string to generate the gradient overlay to show truncated items. This should match the background color behind the component.
     */
    backgroundBlendColor: string;
    /**
     * controls the format passed to the ButtonIconOnly components that underly the previous and next buttons. See ButtonIconOnly docs for example
     */
    buttonFormat?:
        | 'alternative'
        | 'dark'
        | 'lightTransparent'
        | 'lightWarning'
        | 'transparent'
        | 'warning';
    /**
     * The content that should be served as slides. SHould be sibling nodes.
     */
    children: ReactNode;
    /**
     * takes an integer index and sets which slide should be selected. (see below)
     * */
    currentSlide?: number;
    /**
     * Content to show if there are no slides. Toggled by `showEmptyState` prop.
     */
    emptyState?: ReactNode;
    /**
     * Pass in content for the header. This will be Wrapped in a Header4 Type Component.
     */
    header?: ReactNode;
    /**
     * What Element should the Header4 Component render?
     */
    headerElement?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    /**
     * a required strings to annotate the previous and next buttons for assistive technologies. They should take translated strings descibing what the buttons will do.
     */
    nextLabel: string;
    /**
     * fires as a callback when the slideshow changes slides and reports the previous and current slide index.
     */
    onSlideChange?: (previousSlide: number, currentSlide: number) => void;
    /**
     * a required strings to annotate the previous and next buttons for assistive technologies. They should take translated strings descibing what the buttons will do.
     */
    previousLabel: string;
    /**
     * show the content of `emptyState` rather than a slide viewer
     */
    showEmptyState?: boolean;
    /**
     *  flag to signify that the slide count is subject to change
     */
    isUnlimited?: boolean;
    /**
     * takes an integer representing the desired spacing in pixels between slides (default `16`, pixels will be converted to rems)
     */
    slideMargin?: number;
    /**
     * by default ('group' value) the slideshow will move step through slides in by the number of slides current visible, setting this to 'single' forces one-at-a-time.
     */
    stepMode?: 'group' | 'single';
    /**
     *  is an integer representing the millisecond duration of the slide transition. Defaults to `500`
     */
    speed?: number;
}

export interface SteppedContentSliderState {
    animate?: boolean;
    currentSlide: number;
    initialPositionSet: boolean;
    showNext?: boolean;
    showPrevious?: boolean;
    slides?: ReactNode;
    slideCount: number;
    slideCountPerStep: number;
    slideContainerHeight: number;
    slideWidth?: number;
    slideIsBiggerThanViewport: boolean;
    trackWidth: number;
    trackOffset: number;
}

const HeaderAreaStyled = styled('div')`
    position: relative;
    padding-bottom: ${rem(4)};
`;

const ControlsContainerStyled = styled('div')`
    display: flex;
    position: absolute;
    right: 0;
    bottom: ${rem(4)};

    text-align: right;
    align-items: center;
`;

const AdditionalControlAreaStyled = styled('div')`
    margin-right: ${rem(8)};
`;

const SlideContentStyled = styled('div')`
    flex: 0 1 auto;
`;

interface ViewContainerStyled extends React.HTMLProps<HTMLDivElement> {
    slideIsBiggerThanViewport: boolean;
}

const ViewContainerStyled = styled<ViewContainerStyled, 'div'>('div')`
    overflow: hidden;

    position: relative;

    width: 100%;

    display: flex;

    ${props => (props.slideIsBiggerThanViewport ? `overflow-x: scroll;` : '')};
`;

interface ViewTrackProps {
    trackOffset: number;
    speed: number;
    animate?: boolean;
    setRef: (HTMLDivElement) => void;
}

const ViewTrack: SFC<ViewTrackProps> = ({
    trackOffset: _0,
    speed: _1,
    animate: _2,
    setRef,
    ...props
}) => <div ref={setRef} {...props} />;

const ViewTrackStyled = styled(ViewTrack)`
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: flex-start;
    flex: 0 1 auto;
    transform: ${props => `translateX(${rem(props.trackOffset)})`};
    ${props =>
        props.animate ? `transition: transform ${props.speed}ms ease;` : ''};
`;

const EmptyStateWrapperStyled = styled('div')`
    position: relative;
    width: 100%;
`;

const ChevronRightStyled = styled(ChevronRight)`
    transform: rotate(180deg);
`;

interface TruncationProps {
    backgroundBlendColor: string;
    isShowing: boolean;
}

// the gradient overlay  for truncation is dynamic
const buildTruncationBackground = (
    direction: 'right' | 'left',
    backgroundBlendColor: string,
) => {
    return `linear-gradient(to ${direction}, ${backgroundBlendColor} 0%,rgba(255,255,255,0) 100%)`;
};

const Truncation = styled<TruncationProps, 'div'>('div')`
    display: ${props => (props.isShowing ? 'block' : 'none')};

    position: absolute;
    top: 0;

    width: ${rem(TRUNCATION_WIDTH)};
`;

const PreviousTruncationStyled = styled(Truncation)`
    background: ${props =>
        buildTruncationBackground('right', props.backgroundBlendColor)};
    left: 0;
`;

const NextTruncationStyled = styled(Truncation)`
    background: ${props =>
        buildTruncationBackground('left', props.backgroundBlendColor)};
    right: 0;
`;

class SteppedContentSlider extends React.Component {
    static defaultProps = {
        backgroundBlendColor: '#fff',
        buttonFormat: 'dark',
        headerElement: 'h4',
        slideMargin: 16,
        stepMode: 'group',
        speed: 500,
    };

    constructor(props: SteppedContentSliderProps) {
        super(props);

        const childCount = React.Children.toArray(props.children).length;

        this.state = {
            currentSlide: this.props.currentSlide || 0,
            initialPositionSet: false,
            slides: props.children,
            slideContainerHeight: 0,
            slideCount: childCount,
            slideCountPerStep: 1,
            slideIsBiggerThanViewport: false,
            trackWidth: 0,
            trackOffset: 0,
        };

        // throttle resize
        this._handleResize = throttle(this._handleResize, 1000);
    }

    state: SteppedContentSliderState;

    componentDidMount() {
        // initialize slidier
        this.buildSlides();
        window.addEventListener('resize', this._handleResize);
    }

    componentWillUpdate(nextProps: SteppedContentSliderProps) {
        // programmatic control of slideshow by props.
        if (
            this.props.currentSlide !== nextProps.currentSlide &&
            typeof nextProps.currentSlide === 'number'
        ) {
            this._changeSlide(nextProps.currentSlide, true);
        }

        // handle changes to slide payload (adding/substracting slides)
        if (nextProps.children !== this.props.children) {
            this.buildSlides(nextProps.children);
        }
    }

    componentDidUpdate(_, prevState: SteppedContentSliderState) {
        // once the slider exists (especially dom-based measurements are concluded), we finish setting the slider up by postining it at its starting point.
        if (!this.state.initialPositionSet && this.state.slideCountPerStep) {
            this._updateA11yVisibility();
            this._changeSlide(this.state.currentSlide, false);
            this.setState({
                // eslint-disable-line react/no-did-update-set-state
                initialPositionSet: true,
            });
        }

        // slide has changed
        if (this.state.currentSlide !== prevState.currentSlide) {
            this._updateA11yVisibility();

            if (typeof this.props.onSlideChange === 'function') {
                this.props.onSlideChange(
                    prevState.currentSlide,
                    this.state.currentSlide,
                );
            }
        }
    }

    componentWillUnmount() {
        // cleanup
        window.removeEventListener('resize', this._handleResize);
    }

    props: SteppedContentSliderProps;
    viewContainer: HTMLElement;
    viewTrack: HTMLElement;
    truncationWidth: number;

    // this is the core slide initialization
    // may be accessed externally by name!
    buildSlides = (children = this.props.children) => {
        const slideSpecs = this._setSlideSpecs();

        if (typeof slideSpecs === 'object') {
            this._setTrackWidth(slideSpecs);
        }

        // wrap children in divs that provide the slide layout
        const formattedSlides = React.Children.map(children, (child, i) => {
            /* !! NOTE: data-slide used by updateAllyVisibility query !! */
            return (
                <SlideContentStyled
                    data-slide
                    key={`slideContent${i}`}
                    style={{
                        marginRight: rem(this.props.slideMargin),
                    }}
                >
                    {child}
                </SlideContentStyled>
            );
        });

        // we need to reset to the current slide position as measurements may have changed.
        this._changeSlide(this.state.currentSlide, true);

        // store formatted slides in state
        this.setState({
            slides: formattedSlides,
        });
    };

    // handle slide changes
    _changeSlide = (nextSlide: number, animate: boolean) => {
        // catch slide target exceeding slide count (if there are slides)
        if (nextSlide < 0) {
            nextSlide = 0;
        } else if (
            this.state.slideCount > 0 &&
            nextSlide >= this.state.slideCount
        ) {
            nextSlide = this.state.slideCount - 1;
        }

        const prevNextShow = this._checkPrevNextShow(nextSlide);
        let offsetModifier = 0;

        if (prevNextShow.showPrevious) {
            offsetModifier += TRUNCATION_WIDTH;
        }

        // Set the track offset based on slide content so that we can right-align when the user reaches the end
        let trackOffset;
        if (
            this._lastSlideVisible(nextSlide) && // The right-most slide is visible
            this.state.slideCount > this.state.slideCountPerStep && // and the total # of slides exceed the visible area
            !this.props.isUnlimited // and we're not loading more slides (i.e. we might know we're only temporarily be at the end)
        ) {
            // Right-align: offset by the total width of the track, less the width of the view container
            trackOffset =
                this.state.trackWidth * -1 + this.viewContainer.offsetWidth;
        } else {
            // "Normal" left-align: set the position based on the current slide aligned at the left
            trackOffset =
                nextSlide *
                    -1 *
                    (this.props.slideMargin + this.state.slideWidth) +
                offsetModifier;
        }

        this.setState({
            animate,
            currentSlide: nextSlide,
            trackOffset: typeof trackOffset === 'number' ? trackOffset : 0,
            showNext: prevNextShow.showNext,
            showPrevious: prevNextShow.showPrevious,
        });
    };

    // Is the last slide within the visible area?
    private _lastSlideVisible = (slide: number): boolean => {
        return slide + this.state.slideCountPerStep >= this.state.slideCount;
    };

    // assess what controls, if any, we need
    _checkPrevNextShow = (slide: number) => {
        return {
            showNext:
                !this.props.showEmptyState && !this._lastSlideVisible(slide),
            showPrevious: !this.props.showEmptyState && slide > 0,
        };
    };

    // if the viewport changes we probably need to reassess some things.
    _handleResize = () => {
        this.buildSlides();
    };

    _onNextStepClick = () => {
        const nextSlide =
            this.state.currentSlide + this.state.slideCountPerStep;
        this._changeSlide(nextSlide, true);
    };

    _onPreviousStepClick = () => {
        const nextSlide =
            this.state.currentSlide - this.state.slideCountPerStep;
        this._changeSlide(nextSlide, true);
    };

    _onSwipingLeft = () => {
        if (this.state.showNext && !this.state.slideIsBiggerThanViewport) {
            this._onNextStepClick();
        }
    };

    _onSwipingRight = () => {
        if (this.state.showPrevious && !this.state.slideIsBiggerThanViewport) {
            this._onPreviousStepClick();
        }
    };

    _setTrackWidth = (slideSpecs: {
        slideWidth: number;
        slideCountPerStep: number;
        slideContainerHeight: number;
        slideIsBiggerThanViewport: boolean;
    }) => {
        const childCount = React.Children.count(this.props.children);
        this.setState({
            slideCount: childCount,
            trackWidth:
                childCount * (this.props.slideMargin + slideSpecs.slideWidth),
        });
    };

    // run the measurements based on the DOM
    _setSlideSpecs = () => {
        const container = ReactDOM.findDOMNode(this.viewContainer);
        const viewTrack = ReactDOM.findDOMNode(this.viewTrack);
        const firstSlide = viewTrack && viewTrack.firstChild;

        if (
            container instanceof HTMLElement &&
            firstSlide instanceof HTMLElement
        ) {
            const slideContainerWidth =
                container.offsetWidth - TRUNCATION_WIDTH * 2;
            const slideContainerHeight = container.offsetHeight;
            const slideWidth = firstSlide.offsetWidth;
            const slideCountPerStep =
                this.props.stepMode === 'group'
                    ? Math.floor(slideContainerWidth / slideWidth)
                    : 1;
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
    };

    // manipulate aria-hidden so screen readers know what is showing or not
    // this manipulatess the DOM directly but everytime the component updates.

    _updateA11yVisibility = () => {
        const viewTrack = ReactDOM.findDOMNode(this.viewTrack);
        const slides =
            viewTrack instanceof HTMLElement &&
            viewTrack.querySelectorAll('[data-slide]');

        if (slides instanceof NodeList) {
            // fun fact: IE does not have a forEach mentod on NodeList!
            Array.prototype.forEach.call(slides, (slide, i) => {
                const isHidden =
                    i >= this.state.currentSlide &&
                    i < this.state.currentSlide + this.state.slideCountPerStep
                        ? 'false'
                        : 'true';

                slide.setAttribute('aria-hidden', isHidden);
            });
        }
    };

    render() {
        const {
            additionalControlArea,
            backgroundBlendColor,
            buttonFormat,
            children, // eslint-disable-line no-unused-vars
            currentSlide, // eslint-disable-line no-unused-vars
            emptyState,
            header,
            headerElement,
            nextLabel,
            previousLabel,
            showEmptyState,
            slideMargin, // eslint-disable-line no-unused-vars
            stepMode, // eslint-disable-line no-unused-vars
            speed,
            ref: _,
            ...filteredProps
        } = this.props;

        const showNavigation =
            this.state.slideCount > this.state.slideCountPerStep &&
            !this.state.slideIsBiggerThanViewport;

        return (
            <div>
                <HeaderAreaStyled>
                    {header && (
                        <Header4 element={headerElement}>{header}</Header4>
                    )}
                    {showNavigation && (
                        <ControlsContainerStyled>
                            {additionalControlArea && (
                                <AdditionalControlAreaStyled>
                                    {additionalControlArea}
                                </AdditionalControlAreaStyled>
                            )}
                            <ButtonIconOnly
                                icon={
                                    <ChevronRightStyled title={previousLabel} />
                                }
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
                        </ControlsContainerStyled>
                    )}
                </HeaderAreaStyled>
                {showEmptyState && emptyState ? (
                    <EmptyStateWrapperStyled>
                        {emptyState}
                    </EmptyStateWrapperStyled>
                ) : (
                    <Swipeable
                        onSwipingLeft={this._onSwipingLeft}
                        onSwipingRight={this._onSwipingRight}
                    >
                        <ViewContainerStyled
                            innerRef={div => {
                                this.viewContainer = div;
                            }}
                            slideIsBiggerThanViewport={
                                this.state.slideIsBiggerThanViewport
                            }
                            {...filteredProps}
                        >
                            <ViewTrackStyled
                                setRef={div => {
                                    this.viewTrack = div;
                                }}
                                trackOffset={this.state.trackOffset}
                                speed={speed}
                                animate={this.state.animate}
                            >
                                {this.state.slides}
                            </ViewTrackStyled>
                            <PreviousTruncationStyled
                                backgroundBlendColor={backgroundBlendColor}
                                isShowing={
                                    this.state.showPrevious &&
                                    !this.state.slideIsBiggerThanViewport
                                }
                                style={{
                                    height: rem(
                                        this.state.slideContainerHeight,
                                    ),
                                }}
                            />
                            <NextTruncationStyled
                                backgroundBlendColor={backgroundBlendColor}
                                isShowing={
                                    this.state.showNext &&
                                    !this.state.slideIsBiggerThanViewport
                                }
                                style={{
                                    height: rem(
                                        this.state.slideContainerHeight,
                                    ),
                                }}
                            />
                        </ViewContainerStyled>
                    </Swipeable>
                )}
            </div>
        );
    }
}

export default SteppedContentSlider;
