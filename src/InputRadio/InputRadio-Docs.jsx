import React from 'react';
import ExampleSource from '../../docs/layout/ExampleSource';
import { Header3, InputRadio, ParagraphMd } from '../index';

class InputRadioDocs extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="Pattern__docs">
                <ParagraphMd>
                    Radio components can be used by themselves but the
                    recommended use is to construct them with the{' '}
                    <a href="/pattern/Components/InputRadioSet">
                        Input Radio Set
                    </a>{' '}
                    component.
                </ParagraphMd>
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
`}
                </ExampleSource>
                <Header3>Dark Theme</Header3>
                <div data-code className="Pattern-DarkBlock">
                    <InputRadio
                        label="Sample Radio"
                        name="SampleRadio"
                        id="SampleRadioDark"
                        value="1"
                        theme="dark"
                    />
                </div>
                <ExampleSource>
                    {`
<InputRadio
    label="Sample Radio"
    name="SampleRadio"
    id="SampleRadioDark"
    value="1"
    theme="dark"
/>                    `}
                </ExampleSource>
                <Header3>No Label / Custom Label</Header3>
                <div data-code>
                    <InputRadio
                        label={<div />}
                        name="SampleRadio"
                        id="NoLabelRadio"
                        value="1"
                    />
                </div>
                <ExampleSource>
                    {`
<InputRadio
    label={<div />}
    name="SampleRadio"
    id="NoLabelRadio"
    value="1"
/>                 
`}
                </ExampleSource>
            </div>
        );
    }
}

export default InputRadioDocs;
