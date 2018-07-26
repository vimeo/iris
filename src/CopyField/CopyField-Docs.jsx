import React from 'react';
import ExampleSource from 'steadicam/components/styleListings/ExampleSource/ExampleSource';
import { CopyField, ParagraphMd } from '../index';

class CopyFieldDocs extends React.Component {
    render() {
        return (
            <div className="Pattern__docs">
            <ParagraphMd>This component provides a field that will allow the user to copy its contents (provided by the <code>stringToCopy</code> prop to their clipboard.</ParagraphMd>
            <ParagraphMd>This component provides a tooltip for the button that displays the value of the <code>tooltipString</code> prop and a toastification that displays the value of the <code>successMessage</code> prop.</ParagraphMd>
            <ParagraphMd>All other props will be passed to the the <code>InputText</code> field that underlies this component.</ParagraphMd>
                <div data-code>
                    <CopyField
                        id="copyField1"
                        buttonFormat="strong"
                        label="Copy URL"
                        tooltipString="Copy this URL to the clipboard"
                        successMessage="Copied!"
                        stringToCopy="http://www.vimeo.com"
                    />
                    <CopyField
                        id="copyField2"
                        buttonFormat="neutral"
                        label="Copy URL"
                        tooltipString="Copy this URL to the clipboard"
                        successMessage="Copied!"
                        stringToCopy="http://www.vimeo.com"
                    />
                </div>

                <ExampleSource>
                    {`
<CopyField
    id="copyField1"
    buttonFormat="strong"
    label="Copy URL"
    tooltipString="Copy this URL to the clipboard"
    successMessage="Copied!"
    stringToCopy = "http://www.vimeo.com"
/>
<CopyField
    id="copyField2"
    buttonFormat="neutral"
    label="Copy URL"
    tooltipString="Copy this URL to the clipboard"
    successMessage="Copied!"
    stringToCopy = "http://www.vimeo.com"
/>
                        `}
                    </ExampleSource>
                </div>
        );
    }
}

export default CopyFieldDocs;
