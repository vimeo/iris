import React from 'react';
import InputTextFloatingLabel from './InputTextFloatingLabel';
import ExampleSource from 'steadicam/components/styleListings/ExampleSource/ExampleSource';
import { ParagraphMd, Header3 } from '../Type';

class InputTextFloatingLabelDocs extends React.Component {
    render() {
        return (
            <div className="Pattern__docs">
                <ParagraphMd>The Floating Label input is an alternative way of showing an input/label pairing where the label appears within the field and the placeholder text is only revealed on focus.</ParagraphMd>
                <ParagraphMd>All props not listed in the API will pass to the underlying input field</ParagraphMd>
                <div data-code>
                    <InputTextFloatingLabel
                        name="floatingLabel1"
                        id="floatingLabel1"
                        label="Floating Label Input"
                        placeholder="Placeholder Text"
                    />
                    <InputTextFloatingLabel
                        name="floatingLabel2"
                        id="floatingLabel2"
                        label="Floating Label Input (errored)"
                        placeholder="Placeholder Text"
                        format="negative"
                        errorMsg="This is an error"
                        defaultValue="Incorrect Entry"
                    />
                    <InputTextFloatingLabel
                        name="floatingLabel3"
                        id="floatingLabel3"
                        label="Floating Label Input (positive)"
                        placeholder="Placeholder Text"
                        format="positive"
                        defaultValue="Corrected Entry"
                    />
                    <InputTextFloatingLabel
                        name="floatingLabel4"
                        id="floatingLabel4"
                        label="Floating Label Input (disabled)"
                        placeholder="Placeholder Text"
                        disabled
                    />
                    <Header3>Password Field</Header3>
                    <ParagraphMd>If the floating label field has the <code>type="password"</code> prop the field will get a password visibility toggle.</ParagraphMd>
                    <InputTextFloatingLabel
                        name="floatingLabelPassword"
                        id="floatingLabelPassword"
                        label="Password"
                        type="password"
                        required
                    />
                </div>

                <ExampleSource>
                    {`
<InputTextFloatingLabel
    name="floatingLabel1"
    id="floatingLabel1"
    label="Floating Label Input"
    placeholder="Placeholder Text"
/>
<InputTextFloatingLabel
    name="floatingLabel2"
    id="floatingLabel2"
    label="Floating Label Input (errored)"
    placeholder="Placeholder Text"
    format="negative"
    errorMsg="This is an error"
    defaultValue="Incorrect Entry"
/>
<InputTextFloatingLabel
    name="floatingLabel3"
    id="floatingLabel3"
    label="Floating Label Input (positive)"
    placeholder="Placeholder Text"
    format="positive"
    defaultValue="Corrected Entry"
    />
<InputTextFloatingLabel
    name="floatingLabel4"
    id="floatingLabel4"
    label="Floating Label Input (disabled)"
    placeholder="Placeholder Text"
    disabled
/>
<InputTextFloatingLabel
    name="floatingLabelPassword"
    id="floatingLabelPassword"
    label="Password"
    type="password"
    required
/>
                        `}
                    </ExampleSource>
                    <Header3>Dark Theme</Header3>
                    <div className="Pattern-DarkBlock">
                        <InputTextFloatingLabel
                            name="floatingLabel1Dark"
                            id="floatingLabel1Dark"
                            label="Floating Label Input (dark)"
                            placeholder="Placeholder Text"
                            theme="dark"
                        />
                        <InputTextFloatingLabel
                            name="floatingLabel2Dark"
                            id="floatingLabel2Dark"
                            label="Floating Label Input (dark + errored)"
                            placeholder="Placeholder Text"
                            format="negative"
                            errorMsg="This is an error"
                            defaultValue="Incorrect Entry"
                            theme="dark"
                        />
                        <InputTextFloatingLabel
                            name="floatingLabel3Dark"
                            id="floatingLabel3Dark"
                            label="Floating Label Input (dark + positive)"
                            placeholder="Placeholder Text"
                            format="positive"
                            defaultValue="Corrected Entry"
                            theme="dark"
                        />
                    </div>
                    <ExampleSource>
                    {`
<InputTextFloatingLabel
    name="floatingLabel1Dark"
    id="floatingLabel1Dark"
    label="Floating Label Input (dark)"
    placeholder="Placeholder Text"
    theme="dark"
/>
<InputTextFloatingLabel
    name="floatingLabel2Dark"
    id="floatingLabel2Dark"
    label="Floating Label Input (dark + errored)"
    placeholder="Placeholder Text"
    format="negative"
    errorMsg="This is an error"
    defaultValue="Incorrect Entry"
    theme="dark"
/>
<InputTextFloatingLabel
    name="floatingLabel3Dark"
    id="floatingLabel3Dark"
    label="Floating Label Input (dark + positive)"
    placeholder="Placeholder Text"
    format="positive"
    defaultValue="Corrected Entry"
    theme="dark"
/>
                        `}
                    </ExampleSource>
                </div>
        );
    }
}

export default InputTextFloatingLabelDocs;
