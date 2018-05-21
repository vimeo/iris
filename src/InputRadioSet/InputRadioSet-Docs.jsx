import React from 'react';
import { InputRadioSet } from '../index';
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
                <div className="Pattern-DarkBlock">
                    <InputRadioSet
                        label="Radio Set 3 (Dark)"
                        id="RadioSet3"
                        name="radioSet3"
                        radios = {[
                            {
                                label: 'Radio 1',
                                id: 'Radio1Set3',
                                value: '1',
                            },
                            {
                                label: 'Radio 2',
                                id: 'Radio2Set3',
                                value: '2',
                            },

                        ]}
                        theme="dark"
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
<InputRadioSet
    label="Radio Set 3 (Dark)"
    id="RadioSet3"
    name="radioSet3"
    radios = {[
        {
            label: 'Radio 1',
            id: 'Radio1Set3',
            value: '1',
        },
        {
            label: 'Radio 2',
            id: 'Radio2Set3',
            value: '2',
        },

    ]}
    theme="dark"
/>
                        `}
                    </ExampleSource>
                </div>
        );
    }
}

export default InputRadioSetDocs;
