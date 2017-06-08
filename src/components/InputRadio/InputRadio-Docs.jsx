import React from 'react';
import InputRadio from './InputRadio';
import ExampleSource from 'steadicam/components/styleListings/ExampleSource/ExampleSource';


class InputRadioDocs extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="Pattern__docs">
            <p>Radio components can be used by themselves but the recommended use is to construct them with the <a href="/pattern/Components/InputRadioSet">Input Radio Set</a> component.</p>
                <div data-code>
                        <InputRadio
                            label="Sample Radio"
                            name="SampleRadio"
                            id="SampleRadio"
                            value="1"
                        />
                </div>
                <ExampleSource>
                    {`
<InputRadio
    label="Sampele Radio"
    name="SampleRadio"
    id="SampleRadio"
    value="1"
/>                     `}
                    </ExampleSource>
                </div>
        );
    }
}

export default InputRadioDocs;
