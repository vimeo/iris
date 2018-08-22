import React from 'react';
import ExampleSource from '../../docs/layout/ExampleSource';
import { InputCheckboxSet, List, ListItem, ParagraphMd, Header3 } from '../index';

class InputCheckboxSetDocs extends React.Component {
    render() {
        const createCheckboxes = (index) => {

            return [
                {
                    label: `Checkbox ${index}_1`,
                    name: `demoCheckbox${index}_1`,
                    id: `Checkbox${index}_1`,
                    value: `${index}_1`,
                    checked: true,
                },
                {
                    label: `Checkbox ${index}_2`,
                    name: `demoCheckbox${index}_2`,
                    id: `Checkbox${index}_2`,
                    value: `${index}_2`,
                },
                {
                    label: `Checkbox ${index}_3`,
                    name: `demoCheckbox${index}_3`,
                    id: `Checkbox${index}_3`,
                    value: `${index}_3`,
                    checked: true,
                },
            ];
        };

        const createTopLevel = (index) => {
            return {
                label: `Checkbox ${index}`,
                name: `demoCheckbox${index}`,
                id: `Checkbox${index}`,
                value: index,
                checked: true,
            };
        };

        return (
            <div className="Pattern__docs">
                <div data-code>
                    <ParagraphMd>This component creates a nesting of checkboxes.</ParagraphMd>
                    <List>
                        <ListItem><code>topLevel</code> takes a prop object that will be assigned to the topLevel checkbox (see prop API for InputCheckbox)
                        </ListItem>
                        <ListItem><code>subOptions</code> takes an array of prop objects , each member of the Array will create a sub-level checkbox (see prop API for InputCheckbox)
                        </ListItem>
                    </List>
                    <InputCheckboxSet
                        topLevel = {createTopLevel(1)}
                        subOptions={createCheckboxes(1)}
                    />

                    <Header3>Showing subOptions at All Times</Header3>
                    <ParagraphMd>If you prefer not to hide the suboptions when the top level check is checked, pass the <code>showDisabledOptions</code> prop.</ParagraphMd>

                    <InputCheckboxSet
                        topLevel = {createTopLevel(2)}
                        subOptions={createCheckboxes(2)}
                        showDisabledOptions
                    />
                    <Header3>Indeterminate Chekbox</Header3>
                    <ParagraphMd>The top level checkbox can be made indeterminate (i.e. with a horzontal line, rather than a check) by passing <code>topLevelCheckedStyle="indeterminate"</code> to the component.</ParagraphMd>
                    <ParagraphMd>This will often be paired with the <code>checkAllOnTopLevelCheck</code> prop, which makes it so that checking the top level box will cause all sub options to be checked.</ParagraphMd>

                    <InputCheckboxSet
                        topLevelCheckedStyle="indeterminate"
                        topLevel = {createTopLevel(3)}
                        subOptions={createCheckboxes(3)}
                        checkAllOnTopLevelCheck
                        showDisabledOptions
                    />
                </div>

                <ExampleSource>
                    {`
<InputCheckboxSet
    topLevel = {createTopLevel(1)}
    subOptions={createCheckboxes(1)}
/>
<InputCheckboxSet
    topLevel = {createTopLevel(2)}
    subOptions={createCheckboxes(2)}
    showDisabledOptions
/>
<InputCheckboxSet
    topLevelCheckedStyle="indeterminate"
    topLevel = {createTopLevel(3)}
    subOptions={createCheckboxes(3)}
    checkAllOnTopLevelCheck
    showDisabledOptions
/>
                        `}
                    </ExampleSource>
                </div>
        );
    }
}

export default InputCheckboxSetDocs;
