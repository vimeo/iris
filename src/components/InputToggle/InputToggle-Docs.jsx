import React from 'react';
import InputToggle from './InputToggle';
import ExampleSource from 'steadicam/components/styleListings/ExampleSource/ExampleSource';


class InputToggleDocs extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="Pattern__docs">
            <p>Toggles are an alternative UI for checkbox inputs. They are most appropriate for binary settings rather than a one time choice such as accepting terms and conditions.</p>
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
                        `}
                    </ExampleSource>
                </div>
        );
    }
}

export default InputToggleDocs;
