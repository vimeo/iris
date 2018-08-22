import React from 'react';
import ExampleSource from '../../docs/layout/ExampleSource';
import { InputColorPicker, ParagraphMd } from '../index';

const InputColorPickerDocs = (props) => {
    return (
        <div className="Pattern__docs">
            <ParagraphMd>The color picker is used to select a hex color for user-defined theme-ing.</ParagraphMd>
            <ParagraphMd>Any additional props passed to this component will be applied to the underlying InputText component.</ParagraphMd>
            <ParagraphMd>The <code>defaultColor</code> prop represets the color that should be in the field when the component mounts as well as the color to which the field will fall back if the current color is invalid on blur.</ParagraphMd>
            <div data-code>
                <InputColorPicker
                    defaultColor = "#00adef"
                    label="Pick a Color"
                    id="SampleColorPicker"
                    resetButtonLabel="Reset"
                />
                <InputColorPicker
                    defaultColor = "#00adef"
                    label="Pick a Color (Disabled)"
                    id="SampleColorPickerDisabled"
                    resetButtonLabel="Reset"
                    disabled
                />
                <InputColorPicker
                    defaultColor = "#00adef"
                    label="I default to blue, but I reset to black!"
                    id="SampleColorPickerReset"
                    resetButtonLabel="Reset me to #000"
                    resetColor="#000"
                />
            </div>

            <ExampleSource>
                {`
<InputColorPicker
    defaultColor = "#00adef"
    label="Pick a Color"
    id="SampleColorPicker"
    resetButtonLabel="reset"
/>
<InputColorPicker
    defaultColor = "#00adef"
    label="Pick a Color (Disabled)"
    id="SampleColorPickerDisabled"
    resetButtonLabel="Reset"
    disabled
/>
<InputColorPicker
    defaultColor = "#00adef"
    label="I default to blue, but I reset to black!"
    id="SampleColorPickerReset"
    resetButtonLabel="Reset me to #000"
    resetColor="#000"
/>
                    `}
            </ExampleSource>
        </div>
    );
};

export default InputColorPickerDocs;
