import React from 'react';
import SteppedContentSlider from './SteppedContentSlider';
import ExampleSource from 'steadicam/components/styleListings/ExampleSource/ExampleSource';
import { ParagraphMd, Header3 } from '../Type';
import List from '../List';
import ListItem from '../ListItem';

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
                        previousLabel="Go to Previous Set"
                        nextLabel="Go to Next Set"
                        header="Slider Demo"
                    >
                        {makeDemoSlides(8, 300, 200)}
                    </SteppedContentSlider>
                    <ExampleSource>
                    {`
<SteppedContentSlider
    previousLabel="Go to Previous Set"
    nextLabel="Go to Next Set"
    header="Slider Demo"
>
    // ...slides here as direct children
</SteppedContentSlider>
                        `}
                    </ExampleSource>

                    <Header3>Prop Notes</Header3>
                    <List>
                        <ListItem><code>backgroundBlendColor</code> takes a hex value as a string to generate the gradient overlay to show truncated items. This should match the background color behind the component.</ListItem>
                        <ListItem><code>buttonFormat</code> controls the format passed to the ButtonIconOnly components that underly the previous and next buttons. See ButtonIconOnly docs for examples.</ListItem>
                        <ListItem><code>currentSlide</code> takes an integer index and sets which slide should be selected. (see below)</ListItem>
                        <ListItem><code>header</code> takes a n optional string that will show a header for the slider.</ListItem>
                        <ListItem><code>nextLabel</code> and <code>nextLabel</code> a required strings to annotate the previous and next buttons for assistive technologies. They should take translated strings descibing what the buttons will do.</ListItem>
                        <ListItem><code>onSlideChange(previousSlideIndex, currentSlideIndex)</code> fires as a callback when the slideshow changes slides and reports the previous and current slide index.</ListItem>
                        <ListItem><code>slideMargin</code> takes an integer representing the desired spacing in pixels between slides (pixels will be converted to rems)</ListItem>
                        <ListItem><code>stepMode</code> by default ('group' value) the slideshow will move step through slides in by the number of slides current visible, setting this to 'single' forces one-at-a-time.</ListItem>
                        <ListItem><code>speed</code> is an integer representing the millisecond duration of the slide transition.</ListItem>
                    </List>

                    <Header3>Controlling slider position with Props</Header3>
                    <ParagraphMd>The slider's position can be set with the <code>currentSlide</code> prop, which takes a zero-indexed integer representing the desired slide.</ParagraphMd>
                    <SteppedContentSlider
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
    currentSlide={3}
    previousLabel="Go to Previous Set"
    nextLabel="Go to Next Set"
>
    // ...slides here as direct children
</SteppedContentSlider>
                        `}
                    </ExampleSource>
                </div>
        );
    }
}

export default SteppedContentSliderDocs;
