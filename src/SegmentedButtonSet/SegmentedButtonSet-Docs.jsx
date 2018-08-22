import React from 'react';
import {
    NotificationNeutral,
    NotificationWarning,
    SegmentedButtonSet,
    ParagraphMd,
} from '../index';
import ExampleSource from '../../docs/layout/ExampleSource';

class SegmentedButtonSetDocs extends React.Component {
    render() {
        return (
            <div className="Pattern__docs">
                <NotificationNeutral
                    headerText="Segmented Button vs. Tab Navigation"
                >
                    <ParagraphMd>This component is used when the choices could be represented as radio buttons in a form. If you just need to navigate between interfaces, use Tab Navigation.</ParagraphMd>
                </NotificationNeutral>
                <NotificationWarning
                    headerText="A11y Notes"
                >
                    <ParagraphMd>The <code>groupLabel</code> component is required whether or not you are showing it with <code>showGroupLabel</code></ParagraphMd>
                </NotificationWarning>
                <ParagraphMd>Used as an analogue to radio buttons for mode switching.</ParagraphMd>
                <ParagraphMd>This component generates radio buttons with labels that are styled to look and behave like buttons.</ParagraphMd>
                <div data-code>
                    <SegmentedButtonSet
                        format="light"
                        groupLabel="Group Label Here"
                        name="SegmentedButtonSetDemo1"
                        options={[
                            {
                                id: 'SegmentedButtonSetDemo1_1',
                                optionLabel: 'Option One',
                            },
                            {
                                id: 'SegmentedButtonSetDemo1_2',
                                optionLabel: 'Option Two',
                                inputProps: {
                                    defaultChecked: true,
                                },
                            },
                            {
                                id: 'SegmentedButtonSetDemo1_3',
                                optionLabel: 'Option Three',
                            },
                        ]}
                    />

                    <div className="Pattern-DarkBlock">
                        <SegmentedButtonSet
                            format="light"
                            groupLabel="Group Label Here"
                            name="SegmentedButtonSetDemo2"
                            options={[
                                {
                                    id: 'SegmentedButtonSetDemo2_1',
                                    optionLabel: 'Option One',
                                    disabled: true,
                                },
                                {
                                    id: 'SegmentedButtonSetDemo2_2',
                                    optionLabel: 'Option Two',
                                    inputProps: {
                                        defaultChecked: true,
                                    },
                                },
                                {
                                    id: 'SegmentedButtonSetDemo2_3',
                                    optionLabel: 'Option Three',
                                },
                            ]}
                            showGroupLabel={false}
                        />
                    </div>
                </div>
                <ExampleSource>
                    {`
<SegmentedButtonSet
    format="light"
    groupLabel="Group Label Here"
    name="SegmentedButtonSetDemo1"
    options={[
        {
            id: 'SegmentedButtonSetDemo1_1',
            optionLabel: 'Option One',
        },
        {
            id: 'SegmentedButtonSetDemo1_2',
            optionLabel: 'Option Two',
            inputProps: {
                defaultChecked: true,
            },
        },
        {
            id: 'SegmentedButtonSetDemo1_3',
            optionLabel: 'Option Three',
        },
    ]}
/>

<

<SegmentedButtonSet
    format="light"
    groupLabel="Group Label Here"
    name="SegmentedButtonSetDemo2"
    options={[
        {
            id: 'SegmentedButtonSetDemo2_1',
            optionLabel: 'Option One',
            disabled: true,
        },
        {
            id: 'SegmentedButtonSetDemo2_2',
            optionLabel: 'Option Two',
            inputProps: {
                defaultChecked: true,
            },
        },
        {
            id: 'SegmentedButtonSetDemo2_3',
            optionLabel: 'Option Three',
        },
    ]}
    showGroupLabel={false}
/>
                        `}
                    </ExampleSource>
                </div>
        );
    }
}

export default SegmentedButtonSetDocs;
