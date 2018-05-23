import React from 'react';
import ExampleSource from 'steadicam/components/styleListings/ExampleSource/ExampleSource';
import { InputToggle, ParagraphMd, Header3 } from '../index';

class InputToggleDocs extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="Pattern__docs">
            <ParagraphMd>Toggles are an alternative UI for checkbox inputs. They are most appropriate for binary settings rather than a one time choice such as accepting terms and conditions.</ParagraphMd>
                <div data-code>
                    <InputToggle
                        label="Toggle (medium)"
                        name="demoToggleMd"
                        id="ToggleMd"
                        value="1"
                    />
                    <InputToggle
                        label="Toggle (Large)"
                        name="demoToggleLg"
                        id="ToggleLg"
                        size="lg"
                        value="2"
                    />
                    <InputToggle
                        label="Errored Toggle (Large)"
                        name="demoToggleError"
                        errorMsg="This field is required."
                        format="negative"
                        id="ToggleLgError"
                        size="lg"
                        value="3"
                        required
                    />
                    <InputToggle
                        label="Disabled(Large)"
                        name="demoToggleDisabled"
                        id="ToggleLgDisabled"
                        size="lg"
                        value="4"
                        disabled
                    />
                    <Header3>Hidden Labels</Header3>
                    <InputToggle
                        label="Toggle Hidden Label"
                        name="demoToggleMdHidden"
                        id="ToggleMdHidden"
                        value="1"
                        hideLabel
                    />
                </div>
                <div className="Pattern-DarkBlock">
                    <InputToggle
                        label="Toggle (Large)"
                        name="demoToggleLg"
                        id="ToggleLgDark"
                        value="1"
                        theme="dark"
                        size="lg"
                    />
                    <InputToggle
                        label="Toggle (medium)"
                        name="demoToggleMd"
                        id="ToggleMdDark"
                        value="1"
                        theme="dark"
                    />
                </div>

                <ExampleSource>
                    {`
<InputToggle
    label="Toggle (medium)"
    name="demoToggleMd"
    id="ToggleMd"
    value="1"
/>
<InputToggle
    label="Toggle (Large)"
    name="demoToggleLg"
    id="ToggleLg"
    size="lg"
    value="2"
/>
<InputToggle
    label="Errored Toggle (Large)"
    name="demoToggleError"
    errorMsg="This field is required."
    format="negative"
    id="ToggleLgError"
    size="lg"
    value="3"
    required
/>
<InputToggle
    label="Disabled(Large)"
    name="demoToggleDisabled"
    id="ToggleLgDisabled"
    size="lg"
    value="4"
    disabled
/>
<InputToggle
    label="Toggle Hidden Label"
    name="demoToggleMdHidden"
    id="ToggleMdHidden"
    value="1"
    hideLabel
/>
<InputToggle
    label="Toggle (Large)"
    name="demoToggleLg"
    id="ToggleLgDark"
    value="1"
    theme="dark"
    size="lg"
/>
<InputToggle
    label="Toggle (medium)"
    name="demoToggleMd"
    id="ToggleMdDark"
    value="1"
    theme="dark"
/>
                    `}
                    </ExampleSource>
                </div>
        );
    }
}

export default InputToggleDocs;
