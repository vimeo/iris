import React from 'react';
import ButtonFileUploadIconOnly from './ButtonFileUploadIconOnly';
import ExampleSource from 'steadicam/components/styleListings/ExampleSource/ExampleSource';
import { ParagraphMd } from '../../../src/utility_components/Type';

class ButtonFileUploadIconOnlyDocs extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="Pattern__docs">
                <ParagraphMd>This component provides a style layer over a native HTML <code>input type="file"</code> allowing us to style file inputs like our other Icon-only buttons.</ParagraphMd>
                <ParagraphMd>All props not specified in the API that are passed to this component will be passed on to the actual underlying input element</ParagraphMd>
                <div data-code>
                    <ButtonFileUploadIconOnly
                        label="Upload"
                        id="uploadButtonFileUploadIcon1"
                        data-foo="bar"
                    />
                    <ButtonFileUploadIconOnly
                        label="Upload"
                        id="uploadButtonFileUploadIcon2"
                        format="light"
                    />
                </div>

                <ExampleSource>
                    {`
<ButtonFileUploadIconOnly
    label="Upload"
    id="uploadButtonFileUploadIcon1"
    data-foo="bar"
/>
<ButtonFileUploadIconOnly
    label="Upload"
    id="uploadButtonFileUploadIcon2"
    format="light"
/>
                        `}
                    </ExampleSource>
                </div>
        );
    }
}

export default ButtonFileUploadIconOnlyDocs;
