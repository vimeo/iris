import React from 'react';
import InputRadio from './InputRadio';
import ExampleSource from 'steadicam/components/styleListings/ExampleSource/ExampleSource';
import { ParagraphMd } from '../Type';

class InputRadioDocs extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="Pattern__docs">
            <ParagraphMd>Radio components can be used by themselves but the recommended use is to construct them with the <a href="/pattern/Components/InputRadioSet">Input Radio Set</a> component.</ParagraphMd>
                <div data-code>
                        <InputRadio
                            label="Sample Radio"
                            name="SampleRadio"
                            id="SampleRadio"
                            value="1"
                        />
                        <InputRadio
                            label="Disabled Radio"
                            name="DisabledRadio"
                            id="DisabledRadio"
                            value="1"
                            disabled
                        />
                        <div className="Pattern-DarkBlock">
                            <InputRadio
                                label="Sample Radio"
                                name="SampleRadio"
                                id="SampleRadioDark"
                                value="1"
                                theme="dark"
                            />
                        </div>
                    </div>
                <ExampleSource>
                    {`
<InputRadio
    label="Sampele Radio"
    name="SampleRadio"
    id="SampleRadio"
    value="1"
/>
<InputRadio
    label="Disabled Radio"
    name="DisabledRadio"
    id="DisabledRadio"
    value="1"
    disabled
/> 
<InputRadio
    label="Sample Radio"
    name="SampleRadio"
    id="SampleRadioDark"
    value="1"
    theme="dark"
/>                    `}
                    </ExampleSource>
                </div>
        );
    }
}

export default InputRadioDocs;
