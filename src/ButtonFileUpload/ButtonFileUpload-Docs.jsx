import React from 'react';
import ExampleSource from 'steadicam/components/styleListings/ExampleSource/ExampleSource';
import { ButtonFileUpload, ParagraphMd } from '../index';

class ButtonFileUploadDocs extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="Pattern__docs">
             <ParagraphMd>This component provides a style layer over a native HTML <code>input type="file"</code> allowing us to style file inputs like our other standard buttons.</ParagraphMd>
            <ParagraphMd>All props not specified in the API that are passed to this component will be passed on to the actual underlying input element</ParagraphMd>
            <ParagraphMd>By default the upload icon will appear with this button. You can suppress this icon by passing <code>false</code> to the <code>showIcon</code> prop of the component.</ParagraphMd>
                <div data-code>
                    <ButtonFileUpload
                        label="Upload"
                        id="uploadButtonFileUpload1"
                        data-foo="bar"
                    />
                    <ButtonFileUpload
                        label="Upload"
                        id="uploadButtonFileUpload2"
                        format="primaryOutline"
                        showIcon={false}
                    />
                      <ButtonFileUpload
                        label="Upload"
                        id="uploadButtonFileUploadDisabled"
                        format="primaryOutline"
                        disabled
                    />
                </div>

                <ExampleSource>
                    {`
<ButtonFileUpload
    label="Upload"
    id="uploadButtonFileUpload1"
    data-foo="bar"
/>
<ButtonFileUpload
    label="Upload"
    id="uploadButtonFileUpload2"
    format="primaryOutline"
    showIcon={false}
/>
<ButtonFileUpload
    label="Upload"
    id="uploadButtonFileUploadDisabled"
    format="primaryOutline"
    disabled
/>
                        `}
                    </ExampleSource>
                </div>
        );
    }
}

export default ButtonFileUploadDocs;
