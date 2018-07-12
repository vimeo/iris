import React from 'react';
import { InputSlider, ParagraphMd, Button } from '../index';
import ExampleSource from 'steadicam/components/styleListings/ExampleSource/ExampleSource';

class InputSliderDocs extends React.Component {
    state = {
        startVal: 0,
        endVal: 0,
    };
    minValue = 0;
    maxValue = 600;
    initialTimeMinValue = 10;
    initialTimeMaxValue = 400;
    getRange = (start, end) => {
        return {
            startVal: start,
            endVal: end,
        };
    };
    valueFormatter = value => {
        const valueString =
            value > 60 ? `${Math.floor(value / 60)}m` : `${value}s`;
        return value === this.maxValue ? `${valueString}+` : valueString;
    };
    render() {
        return (
            <div className="Pattern__docs">
                <ParagraphMd>
                    Range Slider helps in selecting two values as start and end
                    values from a given range.
                </ParagraphMd>
                <div className="Pattern-DarkBlock">
                    <div data-code>
                        <InputSlider />
                    </div>
                </div>

                <ExampleSource>
                    {`
    <InputSlider/>
                    `}
                </ExampleSource>
                <div className="Pattern-DarkBlock">
                    <div data-code>
                        <InputSlider
                            minValue={0}
                            maxValue={200}
                            initialMinValue={15}
                            initialMaxValue={175}
                            gap={10}
                        />
                    </div>
                </div>
                <ExampleSource>
                    {`
    <InputSlider minValue={0} maxValue={200} initialMinValue={15} initialMaxValue={175} gap={10} />
                    `}
                </ExampleSource>
                <ParagraphMd>
                    An optional function(responsible for formatting the range
                    slider values) can be passed as props{' '}
                    <code>valueFormatter</code> in case values displayed needs
                    to be formatted.
                </ParagraphMd>
                <div className="Pattern-DarkBlock">
                    <div data-code>
                        <InputSlider
                            minValue={this.minValue}
                            maxValue={this.maxValue}
                            initialMinValue={this.initialTimeMinValue}
                            initialMaxValue={this.initialTimeMaxValue}
                            rangeValues={this.getRange}
                            gap={60}
                            format="dark"
                            valueFormatter={this.valueFormatter}
                        />
                    </div>
                </div>
                <ExampleSource>
                    {`
    <InputSlider minValue={0} maxValue={600} initialTimeMinValue={${
        this.initialTimeMinValue
    }} initialTimeMaxValue={${this.initialTimeMaxValue}} />
                    `}
                </ExampleSource>

                <ParagraphMd>
                    Passing <code>editableLabel</code> as true, allows editing
                    the labels
                </ParagraphMd>
                <div className="Pattern-DarkBlock">
                    <div data-code>
                        <InputSlider
                            minValue={0}
                            maxValue={200}
                            initialMinValue={15}
                            initialMaxValue={175}
                            gap={10}
                            editableLabel={true}
                        />
                    </div>
                </div>
                <ExampleSource>
                    {`
 <InputSlider minValue={0} maxValue={200} initialMinValue={15} initialMaxValue={175} gap={10} editableLabel={true} />
                    `}
                </ExampleSource>
                <ParagraphMd>
                    Reset method can be called from parent component to reset
                    the slider values.
                </ParagraphMd>
                <div data-code>
                    <InputSlider
                        minValue={0}
                        maxValue={100}
                        initialMinValue={25}
                        initialMaxValue={75}
                        gap={10}
                        format="light"
                        ref={instance => {
                            this.rangeSlider = instance;
                        }}
                    />
                    <Button
                        format="primaryTextOnly"
                        onClick={() => {
                            this.rangeSlider.resetSlider();
                        }}
                    >
                        Reset Values
                    </Button>
                </div>

                <ExampleSource>
                    {`
<InputSlider minValue={0} maxValue={100} initialMinValue={25} initialMaxValue={75} gap={10} format="light" ref={instance => { this.rangeSlider = instance}} />

<Button format="primaryTextOnly" onClick={() => { this.rangeSlider.resetSlider()}}>Reset Values</Button>
                    `}
                </ExampleSource>
            </div>
        );
    }
}

export default InputSliderDocs;
