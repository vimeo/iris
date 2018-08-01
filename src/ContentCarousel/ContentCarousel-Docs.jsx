import React from 'react';
import { Button, ContentCarousel, Header3, ParagraphMd, NotificationWarning } from '../index';
import ExampleSource from 'steadicam/components/styleListings/ExampleSource/ExampleSource';

const testImage = (index, bgColor) => (
    <div key={`slide${index}`}>
        <img
            style={{
                width: '100%',
                height: 'auto',
            }}
            src={`http://via.placeholder.com/1200x400/${bgColor}/FFFFFF/?text=Slide+${index}`}
            alt={`Slide ${index}`}/>
    </div>
);

const makeSlides = (count) => {
    const slides = [];
    for (let i = 0; i < count; i++) {
        const bgColor = Math.floor(Math.random() * 16777215).toString(16);
        const thisSlide = testImage(i + 1, bgColor);
        slides.push(thisSlide);
    }

    return slides;
};

class CarouselDocs extends React.Component {

    initializeCarousel = () => {
        this
            .carousel
            .initialize();
    }
    render() {
        return (
            <div className="Pattern__docs">
                <div data-code>
                    <NotificationWarning headerText="A11y Notes">
                        <ParagraphMd>The string props that are prefixed with
                            <code>a11y</code>
                            are required and must be translated. These are crucial to make the slideshow
                            understandable by assistive technologies.</ParagraphMd>
                    </NotificationWarning>

                    <ParagraphMd>The ContentCarousel can show a series of content "slides". It will make a "slide" of every first-level sibling passed as children.</ParagraphMd>

                    <ContentCarousel
                        a11yGoToSlideText="Go to slide"
                        a11yNextSlideText="Next"
                        a11yPrevSlideText="Previous"
                        ref={(carousel) => {
                            this.carousel = carousel;
                        }}>
                        {makeSlides(4)}
                    </ContentCarousel>
                    <ExampleSource>
                        {`
<ContentCarousel
    a11yGoToSlideText="Go to slide"
    a11yNextSlideText="Next"
    a11yPrevSlideText="Previous"
    ref={(carousel) => {
        this.carousel = carousel;
    }}
>
    {slides}
</ContentCarousel>
                        `}
                    </ExampleSource>
                    <Header3>Auto-Play</Header3>
                    <ParagraphMd>By setting an interval in milliseconds with the
                        <code>autoplayInterval</code>
                        the carousel can auto-play.</ParagraphMd>
                    <ContentCarousel
                        a11yGoToSlideText="Go to slide"
                        a11yNextSlideText="Next"
                        a11yPrevSlideText="Previous"
                        autoplayInterval={3000}>
                        {makeSlides(4)}
                    </ContentCarousel>
                    <ExampleSource>
                        {`
<ContentCarousel
    a11yGoToSlideText="Go to slide"
    a11yNextSlideText="Next"
    a11yPrevSlideText="Previous"
    autoplayInterval={3000}
>
    {slides}
</ContentCarousel>
                        `}
                    </ExampleSource>
                    <Header3>Hiding Navigation</Header3>
                    <ParagraphMd>If you don't want the user to be able to control the carousel or
                        you are providing an alternate means of control the
                        <code>showIndexedNav</code>
                        prop can be set to false to hide the dot navigation.
                        <strong>Note:</strong>
                        The controls are still available to screen readers.</ParagraphMd>
                    <ContentCarousel
                        a11yGoToSlideText="Go to slide"
                        a11yNextSlideText="Next"
                        a11yPrevSlideText="Previous"
                        autoplayInterval={3000}
                        initialSlide={2}
                        showIndexedNav={false}>
                        {makeSlides(4)}
                    </ContentCarousel>
                    <ExampleSource>
                        {`
<ContentCarousel
    a11yGoToSlideText="Go to slide"
    a11yNextSlideText="Next"
    a11yPrevSlideText="Previous"
    autoplayInterval={3000}
    initialSlide={2}
    showIndexedNav={false}
>
    {slides}
</ContentCarousel>
                        `}
                    </ExampleSource>
                    <Header3>Forcing re-initialization</Header3>
                    <ParagraphMd>The carousel can be forced to re-initialize by calling
                        <code>initialize()</code>
                        on the instance</ParagraphMd>
                    <ParagraphMd>This may be necessary if the size of the carousel's bounding area
                        changes without a window resize occuring.</ParagraphMd>
                    <Button onClick={this.initializeCarousel}>Re-Initialize the first Carousel</Button>
                    <ExampleSource>
                        {`

 const initializeCarousel = () => {
        // this carousel is a ref
        this.carousel.initialize();
    }
<Button onClick={this.initializeCarousel}>Re-Initialize the first Carousel</Button>
                        `}
                    </ExampleSource>
                </div>
            </div>
        );
    }
}

export default CarouselDocs;
