import React from 'react';
import SteppedContentSlider from './SteppedContentSlider';
import ExampleSource from 'steadicam/components/styleListings/ExampleSource/ExampleSource';
import { ParagraphMd, ParagraphSm, Header3 } from '../Type';
import LinkText from '../LinkText';

class SteppedContentSliderDocs extends React.Component {

    render() {

        const makeDemoSlides = (count, width, height) => {
            const slides = [];
            const testDivStyle = {
                width: `${width}px`,
                height: `${height}px`,
                background: '#ccc',
            };

            for (let i = 0; i < count; i++) {
                const slide = <div style={testDivStyle} key={`demoSlide-${i}`}>Slide {i + 1}</div>;
                slides.push(slide);
            }

            return slides;
        };

        return (
            <div className="Pattern__docs">
                <div data-code>
                    <ParagraphMd>The SteppedContenSlider component displays a content slider for fixed-width content lists that exceed the viewport width.</ParagraphMd>
                    <SteppedContentSlider
                        additionalControlArea={(
                            <ParagraphSm noMargin>
                                <LinkText decoration="silent" href="#">View all</LinkText>
                            </ParagraphSm>
                        )}
                        previousLabel="Go to Previous Set"
                        nextLabel="Go to Next Set"
                        header="Slider Header"
                    >
                        {makeDemoSlides(8, 300, 200)}
                    </SteppedContentSlider>
                    <ExampleSource>
                    {`
<SteppedContentSlider
    additionalControlArea={(
        <ParagraphSm noMargin>
            <LinkText decoration="silent" href="#">View all</LinkText>
        </ParagraphSm>
    )}
    previousLabel="Go to Previous Set"
    nextLabel="Go to Next Set"
    header="Slider Header"
>
    // ...slides here as direct children
</SteppedContentSlider>
                        `}
                    </ExampleSource>

                    <Header3>Controlling slider position with Props</Header3>
                    <ParagraphMd>The slider's position can be set with the <code>currentSlide</code> prop, which takes a zero-indexed integer representing the desired slide.</ParagraphMd>
                    <SteppedContentSlider
                        additionalControlArea={(
                            <ParagraphSm noMargin>
                                <LinkText decoration="silent" href="#">View all</LinkText>
                            </ParagraphSm>
                        )}
                        currentSlide={3}
                        previousLabel="Go to Previous Set"
                        nextLabel="Go to Next Set"
                    >
                        {makeDemoSlides(12, 600, 400)}
                    </SteppedContentSlider>
                </div>

                <ExampleSource>
                    {`
<SteppedContentSlider
    additionalControlArea={(
        <ParagraphSm noMargin>
            <LinkText decoration="silent" href="#">View all</LinkText>
        </ParagraphSm>
    )}
    currentSlide={3}
    previousLabel="Go to Previous Set"
    nextLabel="Go to Next Set"
>
    // ...slides here as direct children
</SteppedContentSlider>
                        `}
                    </ExampleSource>
                    <Header3>Empty Set</Header3>
                    <SteppedContentSlider
                        additionalControlArea={(
                            <ParagraphSm noMargin>
                                <LinkText decoration="silent" href="#">View all</LinkText>
                            </ParagraphSm>
                        )}
                        previousLabel="Go to Previous Set"
                        nextLabel="Go to Next Set"
                        header="Slider Header"
                        emptyState={(<ParagraphMd>Empty state content here</ParagraphMd>)}
                        showEmptyState
                    >
                        {makeDemoSlides(8, 300, 200)}
                    </SteppedContentSlider>
                    <ExampleSource>
                    {`
<SteppedContentSlider
    additionalControlArea={(
        <ParagraphSm noMargin>
            <LinkText decoration="silent" href="#">View all</LinkText>
        </ParagraphSm>
    )}
    previousLabel="Go to Previous Set"
    nextLabel="Go to Next Set"
    header="Slider Header"
    emptyState={(<ParagraphMd>Empty state content here</ParagraphMd>)}
    showEmptyState
>
// ...slides here as direct children
</SteppedContentSlider>
                        `}
                    </ExampleSource>
                    <Header3>Forcing Rebuild</Header3>
                    <ParagraphMd>Because the slide layout requires elements to be present and at their final sizes, there may be times when you need to trigger a rebuild if the content updates (for instance if the slideShow initalizes before content loads). To do this, access the <code>buildSlides()</code> by reference.</ParagraphMd>

                <ExampleSource>
                    {`
<SteppedContentSlider
    currentSlide={3}
    previousLabel="Go to Previous Set"
    nextLabel="Go to Next Set"
    ref={(slider) => this.namedInstance = slider}
>
    // ...slides here as direct children
</SteppedContentSlider>

// then

this.namedInstance.buildSlides();
                        `}
                    </ExampleSource>
                </div>
        );
    }
}

export default SteppedContentSliderDocs;
