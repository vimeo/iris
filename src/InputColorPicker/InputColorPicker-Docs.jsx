import React from 'react';
import InputColorPicker from './InputColorPicker';
import ExampleSource from 'steadicam/components/styleListings/ExampleSource/ExampleSource';
import { ParagraphMd } from '../Type';
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
                />
            </div>

            <ExampleSource>
                {`
<InputColorPicker
    defaultColor = "#00adef"
    label="Pick a Color"
    id="SampleColorPicker"
/>
                    `}
            </ExampleSource>
        </div>
    );
};

export default InputColorPickerDocs;
