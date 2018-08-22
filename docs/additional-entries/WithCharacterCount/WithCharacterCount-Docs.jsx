import React from 'react';
import ExampleSource from '../../layout/ExampleSource';
import InputText from '../../../src/InputText';
import TextArea from '../../../src/TextArea';
import { Header4, ParagraphMd } from '../../../src/Type';
import List from '../../../src/List';
import ListItem from '../../../src/ListItem';
import withCharacterCount from '../../../src/withCharacterCount';

const InputTextWithCharacterCount = withCharacterCount(InputText);
const TextAreaWithCharacterCount = withCharacterCount(TextArea);
const helperMessage = <ParagraphMd>This is helpful information.</ParagraphMd>;
const WithCharacterCountDocs = props => {
    return (
        <div className="Pattern__docs">
            <div data-code>
                <ParagraphMd>
                    The <code>withCharacterCount()</code> helper is a HOC that
                    adds a character count to InputText and TextArea.
                </ParagraphMd>
                <Header4>Props and Usage Notes</Header4>
                <List>
                    <ListItem>
                        This component passes all props not specified for this
                        component down to the wrapped Input/TextArea component
                    </ListItem>
                    <ListItem>
                        The <code>maxCharacters</code> prop is a required
                        indicator specifying the max character count.
                    </ListItem>
                    <ListItem>
                        The <code>warningThreshold</code> is an optional
                        interger that indicates when the counter should go into
                        a "warning" state to let the user know they are reaching
                        the limit of the character count. It will default to 5
                        if nothing is provided.
                    </ListItem>
                    <ListItem>
                        The <code>characterSingularString</code> and{' '}
                        <code>characterPluralString</code> props take translated
                        strings for "character" and "characters", respectively.
                    </ListItem>
                    <ListItem>
                        This component can be imported from{' '}
                        <code>iris/withCharacterCount</code>
                    </ListItem>
                </List>
                <InputTextWithCharacterCount
                    label="Input (text) with character count"
                    maxCharacters={10}
                    characterSingularString="character"
                    characterPluralString="characters"
                    helperMsg={helperMessage}
                />
                <TextAreaWithCharacterCount
                    label="TextArea with character count"
                    maxCharacters={30}
                    warningThreshold={10}
                    characterSingularString="character"
                    characterPluralString="characters"
                />
            </div>

            <ExampleSource>
                {`
import InputText from '../../../src/InputText/InputText';
import TextArea from '../../../src/TextArea/TextArea';
import withCharacterCount from '../../../src/utility_components/withCharacterCount/withCharacterCount';

import {
    InputText,
withCharacterCount,
withCharacterCount,
} from '@vimeo/iris';
// then
const InputTextWithCharacterCount = withCharacterCount(InputText);
const TextAreaWithCharacterCount = withCharacterCount(TextArea);
// then
<InputTextWithCharacterCount
    label="Input (text) with character count"
    maxCharacters={10}
    characterSingularString='character'
    characterPluralString='characters'
    helperMsg={helperMessage}
/>
<TextAreaWithCharacterCount
    label="TextArea with character count"
    maxCharacters={30}
    warningThreshold={10}
    characterSingularString='character'
    characterPluralString='characters'
/>
                    `}
            </ExampleSource>
        </div>
    );
};

export default WithCharacterCountDocs;
