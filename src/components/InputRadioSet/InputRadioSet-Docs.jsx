import React from 'react';
import InputRadioSet from './InputRadioSet';
import ExampleSource from 'steadicam/components/styleListings/ExampleSource/ExampleSource';


class InputRadioSetDocs extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="Pattern__docs">
                <div data-code>
                    <InputRadioSet
                        label="Radio Set 1"
                        id="RadioSet1"
                        name="radioSet1"
                        radios = {[
                            {
                                label: 'Radio 1',
                                id: 'Radio1Set1',
                                value: '1',
                                defaultChecked: true,
                            },
                            {
                                label: 'Radio 2',
                                id: 'Radio2Set1',
                                value: '2',
                            },

                        ]}
                    />
                    <InputRadioSet
                        format="negative"
                        label="Radio Set 2 (Errored)"
                        id="RadioSet2"
                        name="radioSet2"
                        errorMsg="Please select one of these inputs"
                        radios = {[
                            {
                                label: 'Radio 1',
                                id: 'Radio1Set2',
                                value: '1',
                            },
                            {
                                label: 'Radio 2',
                                id: 'Radio2Set2',
                                value: '2',
                            },

                        ]}
                    />
                </div>

                <ExampleSource>
                    {`
<InputRadioSet
    label="Radio Set 1"
    id="RadioSet1"
    name="radioSet1"
    radios = {[
        {
            label: 'Radio 1',
            id: 'Radio1Set1',
            value: '1',
            defaultChecked: true,
        },
        {
            label: 'Radio 2',
            id: 'Radio2Set1',
            value: '2',
        },

    ]}
/>

<InputRadioSet
    format="negative"
    label="Radio Set 2 (Errored)"
    id="RadioSet2"
    name="radioSet2"
    errorMsg="Please select one of these inputs"
    radios = {[
        {
            label: 'Radio 1',
            id: 'Radio1Set2',
            value: '1',
        },
        {
            label: 'Radio 2',
            id: 'Radio2Set2',
            value: '2',
        },

    ]}
/>
                        `}
                    </ExampleSource>
                </div>
        );
    }
}

export default InputRadioSetDocs;
