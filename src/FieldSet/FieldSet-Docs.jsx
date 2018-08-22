import React from 'react';
import { FieldSet, InputCheckbox } from '../index';
import ExampleSource from '../../docs/layout/ExampleSource';

class FieldSetDocs extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="Pattern__docs">
            <p>FieldSets are used to group form controls together by theme.</p>
                <div data-code>
                    <FieldSet
                        label="Notification Preferences"
                    >
                        <InputCheckbox
                            label="I want emails!"
                            name="demoCheckboxFieldset1"
                            id="Checkbox1"
                            value="1"
                        />
                        <InputCheckbox
                            label="I want text messages!"
                            name="demoCheckboxFieldset2"
                            id="demoCheckboxFieldset2"
                            value="2"
                        />
                    </FieldSet>
                </div>

                <ExampleSource>
                    {`
<FieldSet
    label="Notification Preferences"
>
// ... content here
</FieldSet>
                        `}
                </ExampleSource>
                  <div data-code>
                    <FieldSet
                        label="FieldSet With Error"
                        format="negative"
                    >
                        <InputCheckbox
                            label="I want emails!"
                            name="demoCheckboxFieldset3"
                            id="Checkbox3"
                            value="1"
                        />
                        <InputCheckbox
                            label="I want text messages!"
                            name="demoCheckboxFieldset4"
                            id="demoCheckboxFieldset4"
                            value="2"
                        />
                    </FieldSet>
                </div>

                <ExampleSource>
                    {`
  <FieldSet
    label="FieldSet With Error"
    format="negative"
>
  // ... content here
</FieldSet>
                        `}
                </ExampleSource>
                 <div data-code>
                    <FieldSet
                        label="FieldSet With Error and Error Message"
                        format="negative"
                        errorMsg="You must select at least one of these."
                    >
                        <InputCheckbox
                            label="I want emails!"
                            name="demoCheckboxFieldset5"
                            id="Checkbox5"
                            value="1"
                        />
                        <InputCheckbox
                            label="I want text messages!"
                            name="demoCheckboxFieldset5"
                            id="demoCheckboxFieldset5"
                            value="2"
                        />
                    </FieldSet>
                </div>

                <ExampleSource>
                    {`
  <FieldSet
    label="FieldSet With Error and Error Message"
    format="negative"
    errorMsg="You must select at least one of these."
>
  // ... content here
</FieldSet>
                        `}
                </ExampleSource>
                </div>
        );
    }
}

export default FieldSetDocs;
